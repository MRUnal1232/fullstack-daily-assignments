import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Dashboard(){

const [fullName,setFullName] = useState('')
const navigate = useNavigate()

const getUserDetails = async()=>{

let email = localStorage.getItem('userName')

const res = await axios.get(`http://localhost:6300/api/get-user/${email}`)

const resData = res.data

if(resData.status){
setFullName(resData.message.fullName)
}

}

const onLogout = ()=>{

localStorage.clear()

navigate('/')

}

useEffect(()=>{
getUserDetails()
},[])

return(

<div className="dashboard-header">

<h2>Welcome, {fullName}</h2>

<button onClick={onLogout}>Logout</button>

</div>

)

}