
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
    path: string;
}

const Button: React.FC<ButtonProps> = ({ name, path, ...props }) => {
   
   

    return (
        <a href={path}>
        <button 
            {...props} 
            className={` ${props.className || ''} font-bold btn--primary btn py-3 px-6 `} 
          
        >
           <h1> {name}</h1>
        </button>
        </a>
    );
}

export default React.memo(Button);
