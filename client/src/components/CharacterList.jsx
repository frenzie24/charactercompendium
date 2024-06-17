import React from "react";
import { Link } from "react-router-dom";

const CharacterList = ({ characters, title }) => {
  if (!characters.length) {
    return <h3>No Characters Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      <div>
        {characters.map((character) => (
          <div key={character._id}>
            <Link to={`/character/${character._id}`}>
              {character.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
