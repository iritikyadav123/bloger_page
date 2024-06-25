import Button from "@/component/Button";
import Input from "@/component/Input";
import { MouseEvent } from "react";
import { ImCross } from "react-icons/im";

interface comProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
   setClick: (e: MouseEvent<HTMLButtonElement>) => void;
   userLogin: (e: MouseEvent<HTMLButtonElement>) => void;

}


export default function CreateAccount({onClick, setClick, userLogin}: comProps) {
    return <div className="absolute flex items-end justify-center sm:flex-col sm:items-center  backdrop-blur-sm h-[100%] w-[100%]">
       <div className="hidden sm:block ml-[120%] w-[60%] mb-2"><button onClick={onClick}><ImCross className="text-white active:text-gray-500"/></button></div>
        <div className="bg-white h-[75%] w-[100%] overflow-hidden sm:w-[80%]
        lg:w-[60%] md:w-[80%] rounded-lg">
       <div className="hidden sm:block bg-green-100 text-green-600 sm:text-[10px] md:text-lg  font-medium text-lg md:h-10 pt-2 overflow-hidden text-center" >
            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now <img src="./swag.png" className="h-4 ml-2 md:h-6 inline-block" />
       </div>
         <div className="sm:grid sm:grid-cols-2">
            <div className="sm:col-span-1"><div className="">
            <div className="flex items-center justify-between w-[90%] p-4">
                <span className="font-bold text-lg sm:test-2xl">Create Account</span>
                <button onClick={onClick}><ImCross className="active:text-gray-500 sm:hidden" /></button>
            </div>
              <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center">
                    <Input placeholder="First Name"  className="w-[80%] bg-pink "/>
                    <Input placeholder="Last Name" className="w-[100%] -ml-11"/>
                  </div>
                  <div className="w-[72%] mr-11">
                 <Input placeholder="Email"
                 className="w-[100%]" type="email"  />
                 </div>
                 <div className="w-[72%] mr-11">
                 <Input placeholder=" Password" 
                 className="w-[100%]" type="password"  />
                 </div>
                   
                 <div className="w-[72%] mr-11">
                 <Input placeholder="Confirm Password"
                 className="w-[100%]" type="password" />
                 </div>
                 <div className="flex w-[100%] pt-4  items-center justify-around">
                   <div> <Button value="Create Account" onClick={userLogin}/></div>
                   <div className="mr-8 sm:hidden"><button onClick={setClick} className="border-b-2 border-black active:text-gray-500">or, Sign In</button></div>
                 </div >
                 <div className=" mt-4 border-2 flex items-center gap-2 active:bg-gray-200 cursor-pointer border-black p-3 text-center w-[70%]">
                    <img src="./fb.png" className="h-8"/><span>Sign up With Facebook</span></div>
              <div className=" flex it  gap-2 border-2 active:bg-gray-200 cursor-pointer mt-4 mb-4 border-black p-3 text-center w-[70%]"><img className="h-8" src="./google.jpeg" /><span>Sign up With Google</span></div>
              <div className="text-center w-[70%] sm:hidden"> By siging up, you agree to our Terms & condition, Privacy policy</div>
              </div>
            
       </div></div>
            <div className="hidden sm:block col-span-1 gap-6"><div className="mt-8 ml-[20%]">
                Already have an account? <button onClick={setClick}  className="text-blue-600 font-medium">Sign In</button>
            </div>
                    <div className="h-[80%] w-[80%]" ><img src="./signup.png" alt="" className="h-[100%] w-[100%]" /></div>
                    <div className="text-center mt-4 w-[90%] text-sm"> By siging up, you agree to our Terms & condition, Privacy policy</div></div>
                    
         </div>
        </div>
    </div>
}