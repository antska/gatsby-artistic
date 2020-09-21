import React, { MutableRefObject, useEffect, useState } from 'react';
import Img from 'gatsby-image';

import { QueryRoom } from 'types';

type GalleryProps = {
  room: QueryRoom;
  images: any;
  isZoomed: boolean;
  onZoom: () => void;
  onSetIsMoving: (val: boolean) => void;
  resolveRef: MutableRefObject<Function | undefined>;
};

const Gallery = React.forwardRef<HTMLDivElement, GalleryProps>(
  ({ room, images, isZoomed, onZoom, onSetIsMoving, resolveRef }, ref) => {
    const [leftZoom, setLeftZoom] = useState(false);
    const [rightZoom, setRightZoom] = useState(false);
    const [backZoom, setBackZoom] = useState(false);

    useEffect(() => {
      if (!isZoomed) {
        setLeftZoom(false);
        setRightZoom(false);
        setBackZoom(false);
      }
    }, [isZoomed]);

    return (
      <div className="container">
        <div
          className="scroller"
          ref={ref}
          onTransitionEnd={() => {
            if (resolveRef.current) {
              resolveRef.current();
              onSetIsMoving(false);
            }
          }}
        >
          <div key={room.title} className="room room--current">
            <div
              className={`room__side room__side--back ${
                backZoom && isZoomed ? 'room_zoomed' : ''
              }`}
              onClick={() => {
                if (!backZoom) {
                  onZoom();
                  setBackZoom(true);
                  setLeftZoom(false);
                  setRightZoom(false);
                }
              }}
            >
              <Img
                fluid={images.nodes[2].childImageSharp.fluid}
                className="room__img"
                alt="Room img"
              />
              <p
                className="room__img--desc"
                style={{ width: isZoomed ? 'auto' : '' }}
              >
                {room.centerWallText}
              </p>
            </div>
            <div
              className={`room__side room__side--left ${
                leftZoom && isZoomed ? 'room_zoomed' : ''
              }`}
              onClick={() => {
                if (!leftZoom) {
                  onZoom();
                  setLeftZoom(true);
                  setRightZoom(false);
                  setBackZoom(false);
                }
              }}
            >
              <Img
                fluid={images.nodes[1].childImageSharp.fluid}
                className="room__img"
                alt="Room img"
              />
              <p className="room__img--desc">{room.leftWallText}</p>
            </div>
            <div
              className={`room__side room__side--right ${
                rightZoom && isZoomed ? 'room_zoomed' : ''
              }`}
              onClick={() => {
                if (!rightZoom) {
                  onZoom();
                  setRightZoom(true);
                  setLeftZoom(false);
                  setBackZoom(false);
                }
              }}
            >
              <p
                className="room__img--desc"
                style={{ marginRight: 0, marginLeft: '4%' }}
              >
                {room.rightWallText}
              </p>
              <Img
                fluid={images.nodes[0].childImageSharp.fluid}
                className="room__img"
                alt="Room img"
              />
            </div>
            <div className="room__side room__side--bottom" />
          </div>
        </div>
      </div>
    );
  },
);

export default Gallery;

Gallery.displayName = 'Gallery';
