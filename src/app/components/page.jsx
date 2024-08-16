"use client";
import React, { useState } from 'react'

const EventsFunctionsState = () => {

  const [name, setName] = useState("Sakibul")
  const sayHello = (name) => {
    alert("Hello "+name)
  }
  const changeName = () => {
    setName(name === "Sakibul"?"Hasan":"Sakibul")
  }
  return (
    <>
      <h2>Events Functions And State</h2>
      <button onClick={() => alert("Clicked")}>
        Click Me
      </button>
      <br /><br />
      <button onClick={() => sayHello("Sakib")}>Hellow</button>
      <br /><br />
      <button onClick={() => changeName("Sakibul")}>{name}</button>
    </>
  )
}

export default EventsFunctionsState