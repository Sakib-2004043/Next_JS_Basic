"use client"
import React,{ useEffect, useState } from "react"
import Loader from "./loader";

async function myList() {
  return (await fetch("https://jsonplaceholder.typicode.com/users")).json()
}
const LoadingData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchData = async() => {
      setUsers(await myList())
      setLoading(false)
    }
    fetchData()
  },[])
  return (
    <>
      <h2>Loading Data With Loader Animation</h2>
      {loading && <Loader/>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <h4>Address</h4>
            <p>{user.address.street}, {user.address.suite},</p>
            <p>{user.address.city}, {user.address.zipcode}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <hr />
          </li>
        ))}
      </ul>
    </>
  )
}

export default LoadingData
