export default function 
//@ts-ignore
Button({onClick, className="", value}) {
    return (
        <div>
        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${className}`} onClick={onClick}>
           {value}
        </button>
    </div>
    )
}