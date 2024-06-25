import Navigation from "./ui/Navigation"
import CreateAccount from "./ui/CreateAccount"
import Login from "./ui/Login"
import { BiLeftArrowAlt } from "react-icons/bi";
import Menubar from "./ui/Menubar";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import Card from "./ui/Card";
import { RxCross2 } from "react-icons/rx";
import { PiWarningCircle } from "react-icons/pi";

 

function App() {
  const [sign, setSign] = useState(true);
  const [login , setLogin] = useState(false);
  const [userLogin, setUserLogin] = useState(false)
  const [data, setData] = useState("");
  let  topImg = "";
  let menuProps = "";
  sign == true ? topImg = "relative" : "";
  sign == true ? menuProps = "sticky z-[100] inset-x-0 backdrop-blur-lg" : ""
  return (
    <div className="">
     {sign == false && login == false ?  <CreateAccount onClick={() => setSign(!sign)} setClick={()=> setLogin(!login)} userLogin={()=> setUserLogin(!userLogin)}/> : null}
     {sign == false && login == true ?  <Login userLogin={()=> setUserLogin(!userLogin)}  onClick={() => setSign(!sign)} setClick={()=> setLogin(!login)}  /> : null}
     <section>
      <Navigation onClick={() => setSign(!sign)} className={menuProps} userLogin={userLogin}/>
     </section>
     <section className={`${topImg} h-[20rem] sm:h-[25rem]  bg-cover bg-[url('./navMobImg.png')] bg-center md:bg-[url('./navImg.png')] flex items-center flex-col `}>
          <div className="sm:hidden flex w-[80%] justify-between mt-8 text-white">
              <button><BiLeftArrowAlt className="text-4xl hover:text-gray-400 active:text-gray-600"/></button>
              <button className="bg-transparent hover:bg-white hover:text-black text-white font-semibold  py-2 px-4 border border-white hover:border-transparent active:bg-gray-300 rounded">Join Group</button>
          </div>
          <div className="text-white absolute bottom-10 left-10">
            <div className="text-3xl sm:text-5xl font-bold">Computer Engineering</div>
            <div className="text-xl font-medium">142,765 Computer Engineers follow this</div>
          </div>
     </section>
     
     <section >
       <Menubar className={menuProps} />
     </section>
     <section className="flex justify-center" >
       <article className="">
      <Card />
      <Card />
      <Card />
      <Card />
       </article>
       <article className="hidden sm:block absolute right-[15%] mt-10">
        <div className="flex items-center gap-2 text-xl border-b-2 pb-2"><IoLocationOutline/> <input className="outline-none decoration:none" placeholder="Inter your location" onChange={(e) => {setData(e.target.value)}} value={data} /><button onClick={()=>{setData("")}}><RxCross2  className="active:text-gray-400"/></button></div>
        <div className="w-10 flex bg-pink-300 "><PiWarningCircle /><span>Your location will help us serve better and extend a personalised experience.</span></div>
       </article >
     </section>
    
    </div>
  )
}

export default App
