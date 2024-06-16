import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query User($username: String) {
  user(username: $username) {
    _id
    username
    email
  }
}`

export const QUERY_CHARACTERS = gql`
query getCharacters {
  characters {
    _id
    characterClass
    characterName
    health
    defense
    baseStat
    skill
    inventory
    notes
  }
}`

export const QUERY_SINGLE_CHARACTER = gql`
query getSingleCharacter($characterId: ID!) {
  character(characterId: $characterId) {
    _id
    baseStat
    characterClass
    characterName
    defense
    health
    inventory
    notes
    skill
  }
}`

export const QUERY_ME = gql`
query me {
  me {
    _id
    username
    email
  }
}
`;