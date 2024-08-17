import React from 'react'
import Script from 'next/script'

const ScriptComponent = () => {
  return (
    <>
      <h2>Script Component In Next JS 14</h2>
      <p>Check The Output At Client Console</p>
      <Script src="/feature.js"/>
    </>
  )
}

export default ScriptComponent
