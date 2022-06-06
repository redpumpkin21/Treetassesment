import { useState, useEffect} from 'react';
import './App.css';
import Studentlist from './Component/Students'
import Test from './Component/Test'

function App() {
  const url = "https://api.hatchways.io/assessment/students"
  const [studentlist, setStudentlist] = useState([])
  const getStudents = async() => {
    const response = await fetch(url)
    const data = await response.json()
    setStudentlist(data)
    console.log(data)
    console.log(setStudentlist)
  }

  useEffect (() => {getStudents()}, [])
 console.log(studentlist)
  return (
    <div className="App">
      
      {studentlist.students.map((student, index) => {
           return(
             <div>
                <img src={student.pic} />
                <h1>{student.firstName} {student.lastName}</h1>
                <p>Email: {student.email}</p>
                <p>Company: {student.company}</p>
                <p>Skill: {student.skill}</p>
                <p>average: {student.grades.reduce((a, b) => a + parseInt(b), 0) / student.grades.length}</p>
             </div>
             
           )
         })}
      
     
    </div>
  );
}

export default App;
