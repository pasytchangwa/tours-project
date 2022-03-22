import React, { useState } from 'react';

const Tour = ({
  id, name, info, image, price, deleteTour,
}) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">
            $
            {price}
          </h4>
        </div>
        <p>
          {readMore ? info : `${info.slice(0, 200)}.....`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => deleteTour(id)}>
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
