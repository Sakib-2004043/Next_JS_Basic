import React from 'react'

const DynamicMetaData = () => {
  return (
    <>
      <h2>Dynamic Meta Data</h2>
      <p><b>Page Title Has Changed</b></p>
    </>
  )
}

export default DynamicMetaData

export function generateMetadata(){
  return{
    title: "Dynamic Meta Data",
    description: "My First Next JS Project"
  }
}