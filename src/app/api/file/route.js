import { NextResponse } from "next/server";
import {writeFile} from "fs/promises"
import connectDB from "@/app/Database/connect";
import files from "@/app/Database/models/file";

export const POST = async(req,res) => {
  const data = await req.formData();
  const file = await data.get("file")

  if(!file){
    return NextResponse.json({success:false,message:"File Not Forund."})
  }
  const bufferData = await file.arrayBuffer();
  const buffer = Buffer.from(bufferData);

  const path = `./public/uploads/${file.name}`;

  try {
    // Sending File To MongoDB
    connectDB();
    const newFile = new files({
      name: file.name,
      data: buffer,
      contentType: file.type
    })
    await newFile.save()

    // Save File At Public Folder
    await writeFile(path,buffer)


    return NextResponse.json({success:true,message:"File Uploaded Successfully."})
  } 
  catch (error) {
    console.log(error)
    return NextResponse.json({success:false,message:"File Uploading Failed."})
  }

}

export const GET = async() => {
  try{
    await connectDB();
    const file = await files.find().select("name data contentType");
    
    // Saving Downloaded Image In Folder
    for (const sfile of file) {
      const downloadPath = `./public/downloads/${sfile.name}`;
      await writeFile(downloadPath, sfile.data);
    }
    
    return NextResponse.json({success: true, file})
  }
  catch(error){
    console.log(error)
    return NextResponse.json({success: false, message:"File Downloading Failed."})
  }
}