import React, { useState } from "react";

export default function Tour({ id, name, info, price, image, removeTour }) {
    const [readMore, setReadMore] = useState(false);
  return (
    <div className="tourContainer">
      <article className="singleTour">
        <img src={image} />
        <footer>
          <div className="firstDetails">
            <h4>{name}</h4>
            <h4>${price}</h4>
          </div>
          <p className="para">
            {readMore?info:`${info.substring(0, 200)}...`}
            <button className="readMoreBtn" onClick={() => setReadMore(!readMore)}>{readMore? 'Show Less' : 'Read More'}</button>
          </p>
          <button className="btn" onClick={() => removeTour(id)}>Not Interested</button>
        </footer>
      </article>
    </div>
  );
}
