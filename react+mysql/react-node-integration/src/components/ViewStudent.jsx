import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

function ViewStudent(){

const [students,setStudents] = useState([])
const navigate = useNavigate()

useEffect(()=>{
fetchStudents()
},[])

const fetchStudents = () => {

axios.get("http://localhost:6300/get-students")
.then((res)=>{
setStudents(res.data.data)
})

}


const deleteStudent = async (rollNo) => {

if(!window.confirm("Delete this student?")) return

await axios.delete(`http://localhost:6300/delete-student/${rollNo}`)

alert("Student Deleted")

fetchStudents()

}


const editStudent = (student) => {

navigate("/add", { state: student })

}

return(

<div className="table-container">

<h2>Students List</h2>

<table>

<thead>
<tr>
<th>Roll No</th>
<th>Name</th>
<th>Department</th>
<th>CGPA</th>
<th>Actions</th>
</tr>
</thead>

<tbody>

{students.map((s)=>(
<tr key={s.rollNo}>

<td>{s.rollno}</td>
<td>{s.fullName}</td>
<td>{s.department}</td>
<td>{s.CGPA}</td>

<td>

<button
className="edit-btn"
onClick={()=>navigate("/add",{ state:s })}
>
Edit
</button>

<button
className="delete-btn"
onClick={()=>deleteStudent(s.rollno)}
>
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>

<br/>

<Link to="/add">
<button>Add Student</button>
</Link>

</div>

)

}

export default ViewStudent