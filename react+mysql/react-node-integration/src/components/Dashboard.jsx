import { Link, Outlet } from "react-router-dom"

function Dashboard(){

return(

<div>

{/* HEADER */}

<div className="header">

<h2>Node.js & MySQL Integration</h2>

<div className="nav-links">

<Link to="/add">Add Student</Link>
<Link to="/students">View Students</Link>

</div>

</div>

{/* PAGE CONTENT */}

<div className="page-container">

<Outlet/>

</div>

</div>

)

}

export default Dashboard