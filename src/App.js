import React, { useState, useEffect } from 'react';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(url).then((response) => {
      if (response.status === 200 && response.status <= 299) {
        setLoading(false);
      } else {
        setIsError(!isError);
        throw new Error(response.statusText);
      }
      return response.json();
    }).then((responses) => setData(responses)).catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error fetching data...</h2>;
  }

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <main>
      <section>
        {data.length > 0 ? <h1>Our Tours</h1> : <h1>No Tours</h1>}
        <Tours infos={data} handleClick={handleClick} show={show} />
      </section>
    </main>
  );
}

export default App;
