// Room initial moving transition.
export const initTransition = { speed: '0.9s', easing: 'ease' };
// Room moving transition.
export const roomTransition = { speed: '0.8s', easing: 'ease' };
// View from top transition.
export const menuTransition = {
  speed: '1.5s',
  easing: 'cubic-bezier(0.2,1,0.3,1)',
};
// Info transition.
export const infoTransition = {
  speed: '15s',
  easing: 'cubic-bezier(0.3,1,0.3,1)',
};
// Tilt transition
export const tiltTransition = { speed: '1s', easing: 'ease-out' };

export const initTransform = {
  translateX: 0,
  translateY: 0,
  translateZ: '500px',
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
};
// Reset transform.
export const resetTransform = {
  translateX: 0,
  translateY: 0,
  translateZ: 0,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
};
// View from top.
// export const menuTransform = {
//   translateX: 0,
//   translateY: '150%',
//   translateZ: 0,
//   rotateX: '15deg',
//   rotateY: 0,
//   rotateZ: 0,
// };
export const menuTransform = {
  translateX: 0,
  translateY: '50%',
  translateZ: 0,
  rotateX: '-10deg',
  rotateY: 0,
  rotateZ: 0,
};

// How much to rotate when the mouse moves.
export const tiltRotation = {
  rotateX: 2, // a relative rotation of -1deg to 1deg on the x-axis
  rotateY: -20, // a relative rotation of -3deg to 3deg on the y-axis
};
