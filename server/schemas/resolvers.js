const { User, Character, Party } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('characters')
        },
        characters: async () => {
            return Character.find()
        },
        character: async (parent, { characterId }) => {
            return Character.findOne({ _id: characterId })
        },
        parties: async () => {
            return Party.find()
        },
        me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id }).populate("comments");
            }
            throw AuthenticationError;
          }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            try {
                const user = await User.create({ username, email, password });
                const token = signToken(user);
                return { token, user };
            } catch (error) {
                return error
            }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },
        addCharacter: async (parent, { characterName, characterClass, health, defense, baseStat, skill, inventory, notes }, context) => {
            if (!context.user) {
                throw new Error('Authentication error');
            }
            const newCharacter = new Character({
                userID: context.user._id,
                characterName,
                characterClass,
                health,
                defense,
                baseStat,
                skill,
                inventory,
                notes
            });
            await newCharacter.save();

            return newCharacter;
        },
        updateCharacter: async (parent, { characterId, characterName, characterClass, health, defense, baseStat, skill, inventory, notes }, { user }) => {
            // Check if user is authenticated
            if (!user) {
                throw AuthenticationError;
            }

            try {
                // Find the character by ID
                const character = await Character.findById(characterId);

                // Check if character exists
                if (!character) {
                    throw new Error(`Character with ID ${characterId} not found`);
                }

                // Check if the authenticated user is the owner of the character
                if (character.userID.toString() !== user._id.toString()) {
                    throw new Error('You are not authorized to update this character');
                }

                // Update fields if provided
                if (characterName) character.characterName = characterName;
                if (characterClass) character.characterClass = characterClass;
                if (health) character.health = health;
                if (defense) character.defense = defense;
                if (baseStat) character.baseStat = baseStat;
                if (skill) character.skill = skill;
                if (inventory) character.inventory = inventory;
                if (notes) character.notes = notes;

                // Save and return the updated character
                await character.save();
                return character;
            } catch (error) {
                throw new Error(`Failed to update character: ${error.message}`);
            }
        },
        // removeCharacter: async (parent, { characterId }, context) => {
        //     const character = await Character.findOneAndDelete({
        //         _id: characterId,
        //     });

        //     return character;
        // },
        removeCharacter: async (parent, { characterId }, { user }) => {
            // Check if user is authenticated
            if (!user) {
                throw AuthenticationError;
            }
        
            try {
                // Find the character by ID
                const character = await Character.findById(characterId);
        
                // Check if character exists
                if (!character) {
                    throw new Error(`Character with ID ${characterId} not found`);
                }
        
                // Check if the authenticated user is the owner of the character
                if (character.userID.toString() !== user._id.toString()) {
                    throw new Error('You are not authorized to remove this character');
                }
        
                // Remove the character
                await character.remove();
                return character;
            } catch (error) {
                throw new Error(`Failed to remove character: ${error.message}`);
            }
        },
        createParty: async (parent, { name }) => {
            try {
                // Create a new party with the provided name
                const newParty = await Party.create({ name });

                return newParty;
            } catch (error) {
                throw new Error(`Failed to create party: ${error.message}`);
            }
        },
        updateParty: async (parent, { partyId, characterIds }) => {
            try {
                // Find the party by ID
                const party = await Party.findById(partyId);

                if (!party) {
                    throw new Error(`Party with ID ${partyId} not found`);
                }

                // Update the party's characters with the provided character IDs
                party.characters = characterIds;

                await party.save();

                return party;
            } catch (error) {
                throw new Error(`Failed to update party characters: ${error.message}`);
            }
        },

        removeParty: async (parent, { partyId }) => {
            try {
                // Find the party by ID and remove it
                const party = await Party.findByIdAndDelete(partyId);

                if (!party) {
                    throw new Error(`Party with ID ${partyId} not found`);
                }

                return party;
            } catch (error) {
                throw new Error(`Failed to remove party: ${error.message}`);
            }
        },
    }
}

module.exports = resolvers;