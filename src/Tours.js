import React from "react";
import Tour from './Tour'

export default function Tours({tours, removeTour}) {
  return (
    <section>
        <div className="header">
            <h1 className="title">Our Tours</h1>
        </div>
        <div>
            {tours.map(tour => {
                return <Tour key={tour.id} {...tour} removeTour = {removeTour}/>
            })}
        </div>
    </section>
  );
}
