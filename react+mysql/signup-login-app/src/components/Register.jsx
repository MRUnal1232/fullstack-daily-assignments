import { NavLink, useNavigate } from 'react-router-dom'
import './style.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function Register(){

const {register,handleSubmit} = useForm()

const navigate = useNavigate()

const onRegisterSubmit = async(data)=>{

const res = await axios.post('http://localhost:6300/api/signup',data)

const resData = res.data

if(resData.status){

toast.success(resData.message)

navigate('/')

}else{

toast.error(resData.message)

}

}

return(

<div className="login-container">

<form onSubmit={handleSubmit(onRegisterSubmit)}>

<h2>Register Here</h2>

<input placeholder="Full Name" {...register('fullName')} />

<input placeholder="Email" {...register('userName')} />

<input type="password" placeholder="Password" {...register('password')} />

<button>Register</button>

<p>
Already have account ?
<NavLink to="/">Login</NavLink>
</p>

</form>

</div>

)

}