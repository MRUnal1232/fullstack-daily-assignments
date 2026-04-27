import { useState } from "react"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"

function AddStudent(){

const location = useLocation()
const navigate = useNavigate()

const student = location.state

const [rollno,setRollNo] = useState(student ? student.rollno : "")
const [fullName,setFullName] = useState(student ? student.fullName : "")
const [department,setDepartment] = useState(student ? student.department : "")
const [CGPA,setCGPA] = useState(student ? student.CGPA : "")

const handleSubmit = async (e) => {

e.preventDefault()

try{

if(student){

await axios.put(
`http://localhost:6300/update-student/${student.rollno}`,
{
fullName,
department,
CGPA
}
)

alert("Student Updated")

}else{

await axios.post(
"http://localhost:6300/add-student",
{
rollno,
fullName,
department,
CGPA
}
)

alert("Student Added")

}

navigate("/students")

}catch(error){

console.log(error)
alert("Error saving student")

}

}

return(

<div className="form-container">

<h2>{student ? "Edit Student" : "Add Student"}</h2>

<form onSubmit={handleSubmit}>

<input
type="number"
placeholder="Roll No"
value={rollno}
onChange={(e)=>setRollNo(e.target.value)}
disabled={student}
/>

<input
type="text"
placeholder="Full Name"
value={fullName}
onChange={(e)=>setFullName(e.target.value)}
/>

<input
type="text"
placeholder="Department"
value={department}
onChange={(e)=>setDepartment(e.target.value)}
/>

<input
type="number"
placeholder="CGPA"
value={CGPA}
onChange={(e)=>setCGPA(e.target.value)}
/>

<button type="submit">
{student ? "Update Student" : "Add Student"}
</button>

</form>

</div>

)

}

export default AddStudent