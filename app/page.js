"use client"
import { GoDotFill } from "react-icons/go";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import Button from "./componenets/button";

export default function Home() {
  const [myAccount, setMyAccount] = useState(false)
  
  return (
      <header className=" flex flex-row   justify-between m-4">
      <h1 className="pl-2">Default welcome msg!</h1>
      <div className="flex flex-row">
      <Button title={"My Account"} options={["Wishlist", "Log In", "Register", "My Account"]}/><FaArrowDown />
      <Button title={"$Doller (US)"} options={["Taka (BDT)", "Riyal (SAR)", "Rupee (INR)", "Dirham (AED)"]}/><FaArrowDown />
      <Button title={"English"}  options={["Bangla", "flagArabic", "Hindi", "Spanish "]}/><FaArrowDown />

    </div>
    <div className="absolute pt-16 text-2xl">
      <h1>phuler</h1>
    </div>
</header>
  );
}