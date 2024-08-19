"use client";
import React, { useState, useEffect } from "react";

const StudentContact = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState(""); 
  const [age, setAge] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [selectedIndex, setSelectedIndex] = useState(null); // To track selected row

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await fetch("http://localhost:3000/api");
        const result = await response.json();
        if (result.success) {
          setStudents(result.data || []);
        } else {
          console.error("Failed to fetch students:", result.error);
        }
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    getStudents();
  }, []);

  const handleUpdate = (e,index) => {
    e.preventDefault();
    const student = students[index];
    setName(student.name);
    setAge(student.age);
    setEmail(student.email);
    setSelectedIndex(index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch("http://localhost:3000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, email }) 
      });

      const result = await response.json();
      if (result.success) {
        if (selectedIndex !== null) {
          const updatedStudents = [...students];
          updatedStudents[selectedIndex] = result.data;
          setStudents(updatedStudents);
        } else {
          setStudents([...students, result.data]); 
        }
        setName(""); 
        setAge("");
        setEmail("");
        setSelectedIndex(null); // Reset after submission
      } else {
        console.error("Failed to add student:", result.error);
      }
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const handleDelete = async (e, index) => {
    // setName(""); 
    // setAge("");
    // setEmail("");
    e.preventDefault();
    setSelectedIndex(null)
    try {
      const deleteId = students[index]._id;
      const response = await fetch(`http://localhost:3000/api`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ deleteId }) 
      });

      const result = await response.json();
      if (result.success) {
        setStudents(students.filter((_, i) => i !== index));
        if (selectedIndex === index) {
          setName(""); 
          setAge("");
          setEmail("");
          setSelectedIndex(null);
        }
      } else {
        console.error("Failed to delete student:", result.error);
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <>
      <h1>Student Details</h1>
      <br />
      <p>Add or Update Student</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Age:... </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Email:. </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">
          {selectedIndex !== null ? "Update Student" : "Add Student"}
        </button>
      </form>

      <br />
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student, index) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.email}</td>
                <td>
                  <button onClick={(e) => handleUpdate(e, index)}>
                    Update
                  </button> 
                </td>
                <td>
                  <button onClick={(e) => handleDelete(e, index)}>
                    Delete
                  </button> 
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No students found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default StudentContact;
