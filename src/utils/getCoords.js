/* eslint-disable no-restricted-globals */
export const getCoords = (elem) => {
  let box = elem.getBoundingClientRect();

  return {
    top: Math.round(box.top + pageYOffset),
    left: Math.round(box.left + pageXOffset)
  };
}