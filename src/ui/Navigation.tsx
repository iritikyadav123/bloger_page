import { MouseEvent } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import User from "./User";

interface navPops {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    className : string;
    userLogin: boolean;
}

export default function Navigation({ onClick ,className, userLogin }: navPops) {
    return (
        <div className={`${className} h-20 border-b-2 flex flex-row items-center justify-around   inset-x-0 top-0 w-full border-gray-200 bg-white/75  transition-all`}>
            <div><img src="./logo.png" alt="logo" /></div>
            <div className="bg-gray-200 flex items-center w-40 md:w-80 gap-2 rounded-2xl pl-4 p-1">
                <div><CiSearch className="h-8 w-8 font-bold" /></div>
                <div className="">
                    <input 
                        className="bg-transparent text-gray-800 h-[100%] w-[100%] outline-none" 
                        type="text" 
                        placeholder="Search for your favorite groups in ATG." 
                    />
                </div>
            </div>
          { userLogin == false ?    <div className="flex items-center text-sm md:text-2xl md:font-medium">
                <span className="active:text-gray-600 cursor-pointer">
                    <button 
                        className="active:text-gray-600" 
                        onClick={onClick}
                    >
                        Create account.
                    </button>
                </span>
                <span className="text-blue-600 hidden sm:block">It's free!</span>
                <FaCaretDown className="hidden sm:block" />
            </div> 
                 :
            <User />}
        </div>
    );
}
