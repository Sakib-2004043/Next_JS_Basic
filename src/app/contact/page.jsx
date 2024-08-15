import React from 'react'
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <ul>
      <li><Link href={"contact/employee"}>Employee</Link></li>
      </ul>
    </div>
  )
}

export default Contact
