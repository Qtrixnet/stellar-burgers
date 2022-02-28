/* eslint-disable no-restricted-globals */
export const getCoords = (elem: HTMLElement): { top: number, left: number } => {
  let box = elem.getBoundingClientRect();

  return {
    top: Math.round(box.top + scrollY),
    left: Math.round(box.left + scrollX)
  };
}