import { Routes, Route } from "react-router-dom"
import AddStudent from "./components/AddStudent"
import ViewStudent from "./components/ViewStudent"
import Dashboard from "./components/Dashboard"
import "./components/style.css"

function App(){

return(

<Routes>

<Route path="/" element={<Dashboard/>}>

<Route path="/add" element={<AddStudent/>}/>
<Route path="/students" element={<ViewStudent/>}/>

</Route>

</Routes>

)

}

export default App