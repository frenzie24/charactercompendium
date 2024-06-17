import { useQuery } from "@apollo/client";


import { QUERY_CHARACTERS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_CHARACTERS);
  const characters = data?.characters || [];

  return (
    <main>
      <div className='flex-row justify-center'>
        <div
          className='col-12 col-md-10 mb-3 p-3'
          style={{ border: "1px dotted #1a1a1a" }}
        >

        </div>
        <div className='col-12 col-md-8 mb-3'>
          {loading ? (
            <div>Loading...</div>
          ) : (<h4>:)</h4>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
