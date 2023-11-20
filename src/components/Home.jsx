import React from 'react';
import StreakTracker from './StreakTracker.jsx';

function Home() {
  return (
    <div className='m-auto'>
      <div className=''>
        <header>
          <h1 className='welcome text-primary text-center p-5'>
            Welcome to our Library!!!
          </h1>
        </header>
        <main>
          <section>
            <p className='intro text-center fs-5 fw-bold'>
              You may explore some fascinating about our books.
            </p>
          </section>
          <StreakTracker />
          <PublisherDonut />
        </main>
      </div>
    </div>
  );
}

export default Home;
