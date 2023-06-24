import React from 'react'
import SingleColor from './SingleColor';
import { nanoid} from 'nanoid'

interface IColorsObjects{
   rgb: number[];
  alpha: number;
  type: 'tint' | 'base' | 'shade';
  weight: number;
  hex?: string;
}
interface IColorsArray{
    Values: IColorsObjects
}

interface IColorsProps{
    colors: IColorsArray[]
}

const ColorList:React.FC <IColorsProps>  = ({colors}) => {
  return (
    <section className='colors'>
            
        {
            colors && Array.isArray(colors) ? (  colors.map(( color, index)=>{
                return <SingleColor color={color} index={index} key={nanoid()}/>
            })):null
        }
    </section>

  )
}

export default ColorList