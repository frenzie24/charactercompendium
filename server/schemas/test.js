/*test

  type Query {
    users: [User]
    user(username: String!): User
    characters(username: String): [Character]
    character(characterId: ID!): Character
    parties: [Party]
    party(partyId: ID!): Party 
    me: User
  }
*/
/*test
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCharacter(characterName: String!, characterClass: String!, health: Health, defense: String, baseStat: [BaseStat]!, skill: [Skill]!, inventory: [String], notes: [String]): Character
    updateCharacter(characterId: ID!, characterName: String, type: String, habitat: String, weaknesses: [String]): Character
      removeCharacter(characterId: ID!): Character
  }*/
