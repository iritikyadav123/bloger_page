import { FaCaretDown } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
export default function Menubar({className}: {className: string}) {
    return (
        <div className={`${className} h-20 border-b-2 flex flex-row items-center justify-around  top-0 w-full sm:w-[80%] border-gray-200 bg-white/75 transition-all sm:ml-[10%] sm:justify-between`}>
           <div className="sm:hidden text-xl font-bold">Posts(368)</div>
            <div className="sm:hidden flex items-center gap-2 borderd-1 bg-gray-200 p-2 rounded-md">Filter: All <FaCaretDown /></div>
           <article className="hidden sm:block">
           <div className="flex gap-3 font-normal text-lg text-gray-500 cursor-pointer">
                <div className="hover:text-black ">All Posts(36)</div>
                <div className="hover:text-black">Article</div>
                <div className="hover:text-black">Event</div>
                <div className="hover:text-black">Education</div>
                <div className="hover:text-black">Job</div>
            </div>
           </article>
            <article className="hidden sm:block">
            <div className="flex gap-2">
                <button className="flex gap-2 items-center bg-gray-200 p-2 rounded-md hover:bg-gray-300 active:bg-gray-700 active:text-white">Write a Post <FaCaretDown /></button>
                <button className="bg-blue-500 flex items-center gap-2 hover:bg-blue-400 text-white p-2 rounded-md active:text-blue-500 active:bg-gray-400 "><FaPeopleGroup /> Join Group</button>
            </div>
            </article>
        </div>
    )
}