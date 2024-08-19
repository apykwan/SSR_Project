import React from 'react';

function Home () {
  return (
    <div>
      <div>I'm the home component lala</div>
      <button onClick={() => console.log('hi there')}>Press Me!</button>
    </div>
  );
}

export default Home;