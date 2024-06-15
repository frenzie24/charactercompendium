import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CHARACTER = gql`
mutation addCharacter($characterName: String!, $characterClass: String!, $health: String, $baseStat: [String], $skill: [String], $inventory: [String], $notes: [String]) {
  addCharacter(characterName: $characterName, characterClass: $characterClass, health: $health, baseStat: $baseStat, skill: $skill, inventory: $inventory, notes: $notes) {
    _id
    characterName
    characterClass
    health
    defense
    baseStat
    skill
    inventory
    notes
  }
}`

export const REMOVE_CHARACTER = gql`
mutation RemoveCharacter($characterId: ID!) {
  removeCharacter(characterId: $characterId) {
    _id
    characterName
    characterClass
    health
    defense
    baseStat
    skill
    inventory
    notes
  }
}`

export const UPDATE_CHARACTER = gql`
mutation updateCharacter($characterId: ID!, $characterName: String, $characterClass: String, $health: String, $baseStat: [String], $skill: [String], $inventory: [String], $notes: [String]) {
  updateCharacter(characterId: $characterId, characterName: $characterName, characterClass: $characterClass, health: $health, baseStat: $baseStat, skill: $skill, inventory: $inventory, notes: $notes) {
    _id
    characterName
    characterClass
    health
    defense
    baseStat
    skill
    inventory
    notes
  }
}`