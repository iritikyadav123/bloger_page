import React from 'react';

interface InputProps {
    className?: string;
    placeholder: string;
    type? :string;
}

const Input: React.FC<InputProps> = ({ className, type="text" ,placeholder}) => {
    return (
        <div>
            <input type={type} className={`bg-slate-200 p-1 outline-none border-2 border-slate-300 text-gray-600 font-medium rounded-md ${className}`} placeholder={placeholder} onChange={(e)=>{e.target.value}} />
        </div>
    );
};

export default Input;
