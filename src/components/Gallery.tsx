import React from 'react';

const Gallery: React.FunctionComponent = ({ rooms }) => (
  <>
    <div className="container">
      <div className="scroller">
        {/* {rooms.slice(0, 1).map((room) => { */}
        <div className="room room--current">
          <div className="room__side room__side--back">
            <img
              src="/room1/the_painting.jpg"
              className="room__img"
              alt="Room img"
            />
            <h3 className="room__img--desc">
              Rubens was a painters’ painter, famous in his own lifetime for his
              outstanding draughtsmanship and attention to detail. Yet on close
              inspection, details in the Samson and Delilah show themselves to
              be crudely painted, to our minds unable to bear comparison with
              undisputed works of his from any period.
            </h3>
          </div>
          <div className="room__side room__side--left">
            <img
              src="/room1/rubens_portrait.jpg"
              className="room__img"
              alt="Room img"
            />
            <h3 className="room__img--desc">
              The first is that Rubens painted a Samson and Delilah in the year
              or so after his return from Italy at the end of 1608. It hung in
              the house of his friend and patron Nicolaas Rockox, several times
              burgomaster of Antwerp, and one of the most cultured and
              influential figures in the city. The painting is mentioned in an
              inventory, and as we have seen in the The Eyewitnesses, was
              recorded by 2 artists while Rubens and Rockox still lived.
            </h3>
          </div>
          <div className="room__side room__side--right">
            <h3 className="room__img--desc">
              The painting is mentioned in an inventory, and as we have seen in
              the The Eyewitnesses, was recorded by 2 artists while Rubens and
              Rockox still lived.
            </h3>
            <img
              src="/room1/other_painting.jpg"
              className="room__img"
              alt="Room img"
            />
          </div>
          <div className="room__side room__side--bottom" />
        </div>
        <div className="room">
          <div className="room__side room__side--back">
            <img
              src="/room1/the_painting.jpg"
              className="room__img"
              alt="Room img"
            />
            <h3 className="room__img--desc">
              Rubens was a painters’ painter, famous in his own lifetime for his
              outstanding draughtsmanship and attention to detail. Yet on close
              inspection, details in the Samson and Delilah show themselves to
              be crudely painted, to our minds unable to bear comparison with
              undisputed works of his from any period.
            </h3>
          </div>
          <div className="room__side room__side--left">
            <img
              src="/room1/rubens_portrait.jpg"
              className="room__img"
              alt="Room img"
            />
            <h3 className="room__img--desc">
              The first is that Rubens painted a Samson and Delilah in the year
              or so after his return from Italy at the end of 1608. It hung in
              the house of his friend and patron Nicolaas Rockox, several times
              burgomaster of Antwerp, and one of the most cultured and
              influential figures in the city. The painting is mentioned in an
              inventory, and as we have seen in the The Eyewitnesses, was
              recorded by 2 artists while Rubens and Rockox still lived.
            </h3>
          </div>
          <div className="room__side room__side--right">
            <h3 className="room__img--desc">
              The painting is mentioned in an inventory, and as we have seen in
              the The Eyewitnesses, was recorded by 2 artists while Rubens and
              Rockox still lived.
            </h3>
            <img
              src="/room1/other_painting.jpg"
              className="room__img"
              alt="Room img"
            />
          </div>
          <div className="room__side room__side--bottom" />
        </div>
        {/* })} */}
      </div>
    </div>
  </>
);

export default Gallery;
