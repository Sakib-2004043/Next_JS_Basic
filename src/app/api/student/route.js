import connectDB from '@/app/Database/connect';
import studentTable from '@/app/Database/models/student';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
  try {
    await connectDB();
    // Fetch all documents in the Student collection
    const students = await studentTable.find();
    return NextResponse.json({ data: students, success: true });
  } catch (error) {
    console.error("Error in fetching students:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch students" });
  }
};

export const POST = async (req) => {
  try {
    await connectDB();
    const body = await req.json();

    // Create a new student document with the provided data
    const newStudent = new studentTable({
      name: body.name,
      age: body.age,
      email: body.email,
    });

    // Save the new student to the database
    await newStudent.save();

    return NextResponse.json({ data: newStudent, success: true });
  } catch (error) {
    console.error("Error in adding student:", error);
    return NextResponse.json({ success: false, error: "Failed to add student" });
  }
};

export const DELETE = async (req) => {
  try {
    await connectDB();
    const body = await req.json(); // Extract the student ID from the request body

    // Find the student by ID and delete it
    const deletedStudent = await studentTable.findByIdAndDelete(body.deleteId);

    if (!deletedStudent) {
      return NextResponse.json({ success: false, error: "Student not found" });
    }

    return NextResponse.json({ data: deletedStudent, success: true });
  } catch (error) {
    console.error("Error in deleting student:", error);
    return NextResponse.json({ success: false, error: "Failed to delete student" });
  }
};

export const PUT = async (req) => {
  try {
    await connectDB();
    const body = await req.json();

    // Find the student by ID and update with new data
    const updatedStudent = await studentTable.findByIdAndUpdate(
      body._id, 
      {
        name: body.name,
        age: body.age,
        email: body.email,
      },
      { new: true } // Return the updated document
    );

    if (!updatedStudent) {
      return NextResponse.json({ success: false, error: "Student not found" });
    }

    return NextResponse.json({ data: updatedStudent, success: true });
  } catch (error) {
    console.error("Error in updating student:", error);
    return NextResponse.json({ success: false, error: "Failed to update student" });
  }
};

