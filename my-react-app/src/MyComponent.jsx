import React, { useState } from "react";

function MyComponent() {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [studentID, setStudentID] = useState("");

  function handleAddStudent() {

    const newStudent = {name: studentName, ID: studentID};

    setStudents(s => [...s, newStudent]);

    setStudentName("");
    setStudentID("");
  }
  function handleRemoveStudent(index) {
    setStudents(s => s.filter((_,i) => i!==index));
  }
  function handleNameChange(event) {
    setStudentName(event.target.value);
  }
  function handleIDChange(event) {
    setStudentID(event.target.value);
  }

  return (
    <div>
      <h1>List of Enrolled Students with their student ID</h1>
      <ul>
        <li></li>
        {students.map((student, index) => (
          <li key={index} onClick={() => handleRemoveStudent(index)}> Name: {student.name} ___ Student ID: {student.ID}</li>
        ))}
      </ul>
      <label>Name: </label>
      <input type="text" value={studentName} placeholder="Enter your name" onChange={handleNameChange} />
      <br />
      <label>Student ID:  </label>
      <input type="text" value={studentID} placeholder="Enter your student ID" onChange={handleIDChange} />
      <br />
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
}
export default MyComponent;
