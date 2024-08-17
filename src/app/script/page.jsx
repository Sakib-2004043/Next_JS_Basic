"use client"
import React, { useState } from 'react'
import Script from 'next/script'

const ScriptComponent = () => {
  const [msg, setMsg] = useState("Loading...");
  return (
    <>
      <h2>Script Component In Next JS 14</h2>
      <p>Check The Output At Client Console</p>
      <Script 
        src="/feature.js"
        onLoad={() => {setMsg("Output Loaded At Console.")}}
      />
      <p>{msg}</p>
    </>
  )
}

export default ScriptComponent
