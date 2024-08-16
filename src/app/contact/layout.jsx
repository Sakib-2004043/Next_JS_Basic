"use client";
import { usePathname } from "next/navigation";

export default function ContactLayout({children}){
  
  const currentPath = usePathname();
  // console.log(currentPath)

  return(
    <>
      <h1>Contact Page</h1>
      {children}
    </>
  )
}