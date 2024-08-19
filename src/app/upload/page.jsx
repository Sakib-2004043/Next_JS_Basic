"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image"

const UploadFiles = () => {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([])
  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please Select a File.");
      return;
    }
    const data = new FormData();
    data.append("file", file);

    try {
      const response = await fetch("/api/file", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      alert(result.message);
      // Clear the file state and input field
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error(error);
      // Clear the file state even if there is an error
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleDownload = async() => {
    try {
      const response = await fetch("/api/file");
      const result = await response.json();
      console.log(result.file)
      setFiles(result.file)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h2>Upload Files In Next JS 14</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="file"
          ref={fileInputRef}
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <br /><br />
        <button type="submit">Upload</button>
      </form>
      <br /><br />
      <button onClick={handleDownload}>
        Download All Files From MongoDB
      </button>
      <br /><br />
      {
        files.map((file) => (
          <div key={file._id}>
            <Image
              height={300}
              width={300}
              src={`data:${file.contentType};base64,${Buffer.from(file.data).toString('base64')}`}
              alt={file.name}
            />
            <p>{file.name}</p>
          </div>
        ))
      }
      
    </>
  );
};

export default UploadFiles;
