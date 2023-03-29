import styles from "./Keyboard.module.css"

const KEYS = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"    
]

type KeyboardProps ={
    disabled?:boolean
    activeLetter:string[]
    inactiveLetters:string[] 
    addGuessedLetter: (letter:string)=> void
}

export function Keyboard({disabled=false,activeLetter, inactiveLetters, addGuessedLetter}:KeyboardProps){
    return <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(75px, 1fr))" , gap:".5rem"}}>
        {KEYS.map(key => {
            const isActive = activeLetter.includes(key);
            const isInactive = inactiveLetters.includes(key);
            return <button 
                className={`${styles.btn} ${isActive? styles.active :""} ${isInactive? styles.inactive :""}`}  
                key={key} 
                disabled = {isInactive || isActive || disabled}
                onClick={() => addGuessedLetter(key)}
                >
                 {key}
                </button>
        })}
    </div>
}