"use client"
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import { useState } from "react";

export default function Button({title, options}) {
  const [myAccount, setMyAccount] = useState(false)
  
  return (
    <div className="relative" onMouseEnter={()=>{setMyAccount(true)}} onMouseLeave={()=>setMyAccount(false)}>
      <button className=" hover:text-red-500 pl-24" >{title}</button>
    
      {myAccount && (
  <div className="absolute right-0 border-2 flex flex-col border-white bg-gray-500 w-28 h-40 text-">
    {options.map((text, index) => (
      <button key={index} className="hover:text-red-500">
       <GoDotFill /> {text}
      </button>
    ))}
  </div>
)}
      </div>  
    )
}
