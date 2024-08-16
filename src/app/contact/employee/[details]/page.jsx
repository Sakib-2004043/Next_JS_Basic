"use client"
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const EmployeeDetail = () => {
  const searchParams = useSearchParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const data = searchParams.get('data');
    if (data) {
      setEmployee(JSON.parse(data));
    }
  }, [searchParams]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{employee.name}</h1>
      <p><b>Age</b> : {employee.age}</p>
      <p><b>Department</b> : {employee.department}</p>
      <p><b>Position</b> : {employee.position}</p>
      <p><b>Salary</b> : ${employee.salary}</p>
    </div>
  );
}

export default EmployeeDetail;
