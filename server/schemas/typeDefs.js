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
    health: Health
    defense: String
    baseStat: [BaseStat]
    skill: [Skill]
    inventory: [String]
    notes: [String]
  }

  type Health {
  current: Int
  max: Int
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
  characters: [Character]
  }
 
  type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  }
`


module.exports = typeDefs;