import Link from 'next/link';
import React from 'react'

const EmployeeContact = () => {

  const employees = [
    {
      id: 1,
      name: "John Doe",
      age: 29,
      department: "Engineering",
      position: "Software Engineer",
      salary: 75000
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 34,
      department: "Marketing",
      position: "Marketing Manager",
      salary: 68000
    },
    {
      id: 3,
      name: "Michael Johnson",
      age: 41,
      department: "Finance",
      position: "Financial Analyst",
      salary: 80000
    },
    {
      id: 4,
      name: "Emily Davis",
      age: 27,
      department: "Human Resources",
      position: "HR Coordinator",
      salary: 56000
    },
    {
      id: 5,
      name: "William Brown",
      age: 38,
      department: "Sales",
      position: "Sales Executive",
      salary: 72000
    }
  ];
  
  return (
    <div>
      <h1>Employee Contact</h1>
      <br />
      <ol>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link
              href={{
                pathname: `employee/${employee.id}`,
                query: { data: JSON.stringify(employee) }
              }}
            >
              {employee.name}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default EmployeeContact
