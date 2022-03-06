/* eslint-disable no-restricted-globals */
export const getCoords = (elem: HTMLElement | null): { top: number, left: number } | void => {
  let box = elem?.getBoundingClientRect();

  if (box) {
    return {
      top: Math.round(box.top + scrollY),
      left: Math.round(box.left + scrollX)
    };
  }
}