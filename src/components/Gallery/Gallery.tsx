import React, { MutableRefObject, useEffect, useState } from 'react';

import { QueryRoom } from 'types';
import {
  SContainer,
  SRoom,
  SRoomImg,
  SRoomImgDescription,
  SRoomSideBack,
  SRoomSideBottom,
  SRoomSideLeft,
  SRoomSideRight,
  SScroller,
} from './styled';

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
      <SContainer>
        <SScroller
          ref={ref}
          onTransitionEnd={() => {
            if (resolveRef.current) {
              resolveRef.current();
              onSetIsMoving(false);
            }
          }}
        >
          <SRoom key={room.title}>
            <SRoomSideBack
              isZoomed={backZoom && isZoomed}
              onClick={() => {
                if (!backZoom) {
                  onZoom();
                  setBackZoom(true);
                  setLeftZoom(false);
                  setRightZoom(false);
                }
              }}
            >
              <SRoomImg
                fluid={images.nodes[2].childImageSharp.fluid}
                alt="Room img"
              />
              <SRoomImgDescription isZoomed={isZoomed}>
                {room.centerWallText}
              </SRoomImgDescription>
            </SRoomSideBack>
            <SRoomSideLeft
              isZoomed={leftZoom && isZoomed}
              onClick={() => {
                if (!leftZoom) {
                  onZoom();
                  setLeftZoom(true);
                  setRightZoom(false);
                  setBackZoom(false);
                }
              }}
            >
              <SRoomImg
                fluid={images.nodes[1].childImageSharp.fluid}
                alt="Room img"
              />
              <SRoomImgDescription isZoomed={isZoomed}>
                {room.leftWallText}
              </SRoomImgDescription>
            </SRoomSideLeft>
            <SRoomSideRight
              isZoomed={rightZoom && isZoomed}
              onClick={() => {
                if (!rightZoom) {
                  onZoom();
                  setRightZoom(true);
                  setLeftZoom(false);
                  setBackZoom(false);
                }
              }}
            >
              <SRoomImgDescription isZoomed={isZoomed} isRight>
                {room.rightWallText}
              </SRoomImgDescription>
              <SRoomImg
                fluid={images.nodes[0].childImageSharp.fluid}
                alt="Room img"
              />
            </SRoomSideRight>
            <SRoomSideBottom />
          </SRoom>
        </SScroller>
      </SContainer>
    );
  },
);

export default Gallery;
