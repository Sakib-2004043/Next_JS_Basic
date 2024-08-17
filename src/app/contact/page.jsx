import React from 'react'
import Link from "next/link";

const Contact = () => {

  return (
    <div>
      <ul>
      <li><Link href={"contact/employee"}>Employee (SSG)</Link></li>
      <br />
      <li><Link href={"contact/student"}>Student</Link></li>
      </ul>
    </div>
  )
}

export default Contact
