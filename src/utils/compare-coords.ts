import {getCoords} from './get-coords'
import {IAbsoluteCoords, IGetCoords} from "../services/types/types";

export const compareCoords = (className: string) => {

  const bunTitleTopCoords = (getCoords(document.querySelector('#bun')) as IGetCoords).top
  const sauceTitleTopCoords = (getCoords(document.querySelector('#sauce')) as IGetCoords).top
  const mainTitleTopCoords = (getCoords(document.querySelector('#main')) as IGetCoords).top
  const mainContainerTopCoords = (getCoords(document.querySelector(`.${className}`)) as IGetCoords).top

  const absoluteCoords = [
    {
      title: 'bun',
      value: Math.abs(mainContainerTopCoords - bunTitleTopCoords),
    },
    {
      title: 'sauce',
      value: Math.abs(mainContainerTopCoords - sauceTitleTopCoords),
    },
    {
      title: 'main',
      value: Math.abs(mainContainerTopCoords - mainTitleTopCoords)
    },
  ]

  const coordsValues = absoluteCoords.map(coord => coord.value)
  const minValue = Math.min(...coordsValues)
  return (absoluteCoords.find(coord => coord.value === minValue) as IAbsoluteCoords).title
}