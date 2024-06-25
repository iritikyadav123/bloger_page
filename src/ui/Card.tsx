import { useState } from "react";
import { HiDotsHorizontal  } from "react-icons/hi";
import { IoShareSocialSharp } from "react-icons/io5";
export default function Card() {
    const [value, setValue] = useState(false);
    return (
        <div className="border-2 p-1 mt-2 rounded-lg shadow-xl shadow-gray-500 flex flex-col gap-2 ml-2 mr-2 sm:w-[50%] md:w-[50%] sm:ml-[10%]">
            {/* Image of content */}
            <div>
                <img className="object-cover rounded-lg" src="./navImg.png" />
            </div>
             {/* article Type */}
            <div className="flex items-center">
                <div className="">
                    <img className="h-8" src="fb.png" />
                </div>
                <div className="text-gray-500 font-medium">Article</div>
            </div>
            {/* article info */}
            <div className="relative flex items-center justify-between">
                <div className="font-bold text-xl">
                    What if famous brands had regular font? Meet RegulaBrands!
                </div>
                <div>
                    <button onClick={()=>setValue(!value)}><HiDotsHorizontal className="text-xl  rounded-lg active:text-gray-500" /></button>
                   {value == true ?  <DragItem /> : null}
                </div>
            </div>
            <div className="text-lg text-gray-700">
                I've worked in UX for the better parts of a decade. f...
            </div>
            <div className="flex items-center justify-between ml-2 mr-2">
                <div className="flex items-center gap-2">
                    <div>
                        <img src="./auther.png" /> 
                    </div>
                    <div className="flex flex-col">
                        <div className="text-lg ">Sarthak kamra</div>
                        <div className="text-gray-500 -mt-2">1.4k view</div>
                    </div>
                </div>
                <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-xl"> <IoShareSocialSharp /> Share</div>
            </div>
        </div>
    )
}

function DragItem() {
    return (
        <div className="absolute right-3 bg-gray-300 p-2 rounded-lg border-2 border-gray-600 cursor-pointer text-center">
            <div className="border-b border-gray-600 hover:bg-gray-400 rounded-lg">Edit</div>
            <div  className="border-b border-gray-600 hover:bg-gray-400 rounded-lg">Report</div>
            <div  className="border-b border-gray-600 hover:bg-gray-400 rounded-lg">Option 3</div>
        </div>
    )
}