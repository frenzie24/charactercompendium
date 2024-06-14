const typeDefs =`
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
    health: [Int]
    defense: String
    baseStat: [BaseStat]
    skill: [Skill]
    inventory: [String]
    notes: [String]
  }

  type BaseStat {
  name: String
  value: Int
  }

  type Skill {
  name: String
  value: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    characters(username: String): [Character]
    character(characterId: ID!): Character
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCharacter(characterName: String!, type: String!, habitat: String!, weaknesses: [String]!): Character
    updateCharacter(characterId: ID!, characterName: String, type: String, habitat: String, weaknesses: [String]): Character
      removeCharacter(characterId: ID!): Character
  }
`

module.exports = typeDefs;