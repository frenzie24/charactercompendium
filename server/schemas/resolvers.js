const { User, Character, Party } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
        },
        user: async (parent, { userId }) => {
            return User.findById({ _id: userId }).populate('characters')
        },
        characters: async () => {
            return Character.find()
        },
        character: async (parent, { characterId }) => {
            return Character.findOne({ _id: characterId })
        },
        parties: async () => {
            return Party.find()
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
        updateCharacter: async (parent, { characterId, characterName, characterClass, health, defense, baseStat, skill, inventory, notes }) => {
            const updateFields = {};
            if (characterName) updateFields.characterName = characterName;
            if (characterClass) updateFields.characterClass = characterClass;
            if (health) updateFields.health = health;
            if (defense) updateFields.defense = defense;
            if (baseStat) updateFields.baseStat = baseStat;
            if (skill) updateFields.skill = skill;
            if (inventory) updateFields.inventory = inventory;
            if (notes) updateFields.notes = notes;

            try {
                // Update the character in the database
                const updatedCharacter = await Character.findByIdAndUpdate(
                    { _id: characterId },
                    { $set: updateFields },
                    { new: true } // To return the updated document
                );

                return updatedCharacter;
            } catch (error) {
                throw new Error(`Failed to update character: ${error.message}`);
            }
        },
        removeCharacter: async (parent, { characterId }, context) => {
            const character = await Character.findOneAndDelete({
                _id: characterId,
            });

            return character;
        }
    }
}

module.exports = resolvers;