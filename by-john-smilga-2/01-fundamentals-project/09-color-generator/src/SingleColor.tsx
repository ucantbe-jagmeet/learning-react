import React from 'react'
interface IColorsObjects{
    rgb: number[];
   alpha: number;
   type: 'tint' | 'base' | 'shade';
   weight: number;
   hex:string
 }
 interface IColorsArray{
     color: IColorsObjects;
     index:number
 }


const SingleColor:React.FC<IColorsArray> = ({ color, index}) => {
    
  return (
    <article className={ index > 10 ? 'color color-light':'color'} style={{background: `#${color.hex}`}}>
        <p className='percent-value'>{color.weight}%</p>
        <p className='color-value'>{color.hex}%</p>

    </article>
  )
}

export default SingleColor