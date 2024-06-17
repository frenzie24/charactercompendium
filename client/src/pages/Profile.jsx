import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER_CHARACTERS } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {
  const { userId } = useParams();

  const { loading, data } = useQuery(QUERY_USER_CHARACTERS, {
    variables: { userId: userId || Auth.getProfile().data._id },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const characters = data?.userCharacters || [];

  return (
    <div>
      <h2>Your Characters</h2>
      {characters.map((character) => (
        <div key={character._id}>
          <h3>{character.characterName}</h3>
          <p>{character.characterClass}</p>
          {/* Add other character fields here */}
        </div>
      ))}
    </div>
  );
};

export default Profile;
