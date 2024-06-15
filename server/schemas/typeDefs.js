const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Character {
    _id: ID
    characterName: String!
    characterClass: String!
    health: String
    defense: String
    baseStat: [String]
    skill: [String]
    inventory: [String]
    notes: [String]
  }

  type Party {
  name: String
  characters: [Character]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
  users: [User]
  user(username: String): User
  me: User
  characters: [Character]
  character(characterId: ID!): Character
  parties: [Party]
  }
 
  type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addCharacter(characterName: String!, characterClass: String!, health: String, baseStat: [String], skill: [String], inventory: [String], notes: [String]): Character
  updateCharacter(characterId: ID!, characterName: String, characterClass: String, health: String, baseStat: [String], skill: [String], inventory: [String], notes: [String]): Character
  removeCharacter(characterId: ID!): Character
  createParty(name: String!): Party
  updateParty(partyId: ID!, characterIds: [ID]!): Party
  removeParty(partyId: ID!): Party
  }
`


module.exports = typeDefs;