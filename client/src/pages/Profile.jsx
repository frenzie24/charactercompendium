import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import CharacterForm from "../components/CharacterForm";
import CharacterList from "../components/CharacterList";

import { QUERY_USER, QUERY_ME, QUERY_CHARACTERS } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const { loading: loadingCharacters, data: characterData } =
    useQuery(QUERY_CHARACTERS);

  const user = data?.me || data?.user || {};
  const characters = characterData?.characters || [];

  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to='/me' />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (loadingCharacters) {
    return <div>Loading Characters...</div>;
  }

  if (!user) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  if (characters.length === 0) {
    return <h4>No characters to display</h4>;
  }

  return (
    <div>
      <div className='flex-row justify-center mb-3'>
        <h2 className='col-12 col-md-10 bg-dark text-light p-3 mb-5'>
          Viewing {userParam ? `${user.username}'s` : "your"} profile.
        </h2>

        <div className='col-12 col-md-10 mb-5'>
          <CharacterList characters={characters} title='Characters' />
        </div>
        <div
          className='col-12 col-md-10 mb-3 p-3'
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <CharacterForm />
        </div>
      </div>
    </div>
  );
};

export default Profile;
