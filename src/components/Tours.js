import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, deleteTour }) => (
  <section>
    <div className="title">
      <h2>Our tours</h2>
      ;
      <div className="underline" />
    </div>
    <div>
      {tours.map((tour) => <Tour key={tour.id} {...tour} deleteTour={deleteTour} />)}
    </div>
  </section>
);

export default Tours;
