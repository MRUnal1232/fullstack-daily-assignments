import { NavLink, useNavigate } from 'react-router-dom'
import './style.css'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'

export default function Login(){

const {register,handleSubmit,formState:{errors,isValid},setValue,reset,setFocus} = useForm({
mode:'onChange'
})

const navigate = useNavigate()

const onLoginSubmit=(data)=>{

toast.loading('Checking credentials...', {id:'loader'})

setTimeout(async()=>{

const res = await axios.post('http://localhost:6300/api/login',data)

const resData = res.data

if(resData.status){

toast.success(resData.message,{id:'loader'})

localStorage.setItem('userName',data.userName)

navigate('/dashboard')

}else{

toast.error(resData.message,{id:'loader'})

if(resData.message === 'Wrong password !!'){
setValue('password','')
}

else if(resData.message === 'User not found !!'){
reset()
}

}

},2000)

}

useEffect(()=>{
setFocus('userName')
},[])

return(
<>

<Toaster position="top-center"/>

<div className="login-container">

<form autoComplete='off' onSubmit={handleSubmit(onLoginSubmit)}>

<h2>Login here !!</h2>

<div className="input-field">
<label>Username</label>
<input
type="email"
{...register('userName',{required:'Username required'})}
/>
</div>

<div className="input-field">
<label>Password</label>
<input
type="password"
{...register('password',{required:'Password required'})}
/>
</div>

<button disabled={!isValid}>Login</button>

<p>
To Create a new Account ?
<NavLink to="/register">Click here</NavLink>
</p>

</form>

</div>

</>
)

}