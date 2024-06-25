import { FaCaretDown } from "react-icons/fa";
export default function User() {
    return (
        <div className="flex gap-2 items-center">
            <div>
                <img className='select-none inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-400' src="./auther.png" alt="auther"/>

            </div>
            <div className="hidden sm:block text-lg">Siddhart Goyal</div>
            <div className="hidden sm:block text-2xl"><FaCaretDown /></div>
        </div>
    )
}