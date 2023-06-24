import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    
    const saveToClipboard = async ()=>{
        if(navigator.clipboard){
            try {
                await navigator.clipboard.writeText(`#${color.hex}`)
                toast(' Color copied to clipboard', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            } catch (error) {
                toast.error('Failed to copy to clipboard', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        }
        else{
            throw new Error('Clipboard Access not available')
        }
    }

    return (
        <article className={ index > 10 ? 'color color-light':'color'} style={{background: `#${color.hex}`}} onClick={saveToClipboard}>
            <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    />
            <p className='percent-value'>{color.weight}%</p>
            <p className='color-value'>{color.hex}%</p>

        </article>
    )
}

export default SingleColor