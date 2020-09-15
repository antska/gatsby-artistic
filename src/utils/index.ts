import { TranformType, TransitionType } from '../types';

export const applyRoomTransform = (
  element: HTMLDivElement,
  transform: TranformType,
) => {
  element.style.transform =
    `translate3d(${transform.translateX}, 
    ${transform.translateY}, ${transform.translateZ}) ` +
    `rotate3d(1,0,0,${transform.rotateX}) 
    rotate3d(0,1,0,${transform.rotateY}) 
    rotate3d(0,0,1,${transform.rotateZ})`;
};

export const applyRoomTransition = (
  element: HTMLDivElement,
  transition: TransitionType | 'none',
) => {
  element.style.transition =
    transition === 'none'
      ? transition
      : `transform ${transition.speed} ${transition.easing}`;
};
