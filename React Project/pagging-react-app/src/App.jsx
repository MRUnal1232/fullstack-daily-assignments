import { useState } from "react";
import "./App.css";

export default function App() {

  const studentData = [
    { id: 1, name: "Mrunal Sachin Thamake", gender: "Female", dept: "CSE", cgpa: 9.12, email: "mrunal@college.edu", year: "TY" },
    { id: 2, name: "Rahul Sunil Deshmukh", gender: "Male", dept: "IT", cgpa: 8.74, email: "rahul@college.edu", year: "SY" },
    { id: 3, name: "Sneha Mahesh Kulkarni", gender: "Female", dept: "ECE", cgpa: 9.01, email: "sneha@college.edu", year: "TY" },
    { id: 4, name: "Aditya Anil Joshi", gender: "Male", dept: "CSE", cgpa: 8.95, email: "aditya@college.edu", year: "FY" },
    { id: 5, name: "Priya Suresh More", gender: "Female", dept: "AI & DS", cgpa: 9.26, email: "priya@college.edu", year: "SY" },

    { id: 6, name: "Rohit Vijay Pawar", gender: "Male", dept: "EEE", cgpa: 8.62, email: "rohit@college.edu", year: "TY" },
    { id: 7, name: "Neha Rajesh Bhosale", gender: "Female", dept: "IT", cgpa: 9.08, email: "neha@college.edu", year: "FY" },
    { id: 8, name: "Karan Sanjay Jadhav", gender: "Male", dept: "ECE", cgpa: 8.88, email: "karan@college.edu", year: "SY" },
    { id: 9, name: "Kavya Nitin Shinde", gender: "Female", dept: "CSE", cgpa: 9.34, email: "kavya@college.edu", year: "TY" },
    { id: 10, name: "Amit Prakash Chavan", gender: "Male", dept: "MECH", cgpa: 8.55, email: "amit@college.edu", year: "FY" },

    { id: 11, name: "Pooja Ashok Mane", gender: "Female", dept: "IT", cgpa: 9.05, email: "pooja@college.edu", year: "SY" },
    { id: 12, name: "Saurabh Deepak Patil", gender: "Male", dept: "CSE", cgpa: 8.92, email: "saurabh@college.edu", year: "TY" },
    { id: 13, name: "Anjali Vinod Koli", gender: "Female", dept: "ECE", cgpa: 9.11, email: "anjali@college.edu", year: "FY" },
    { id: 14, name: "Shubham Rakesh More", gender: "Male", dept: "IT", cgpa: 8.84, email: "shubham@college.edu", year: "SY" },
    { id: 15, name: "Komal Ajay Thorat", gender: "Female", dept: "AI & DS", cgpa: 9.18, email: "komal@college.edu", year: "TY" },

    { id: 16, name: "Akash Milind Gaikwad", gender: "Male", dept: "MECH", cgpa: 8.66, email: "akash@college.edu", year: "FY" },
    { id: 17, name: "Sonali Dinesh Pawar", gender: "Female", dept: "CSE", cgpa: 9.27, email: "sonali@college.edu", year: "SY" },
    { id: 18, name: "Pratik Umesh Yadav", gender: "Male", dept: "IT", cgpa: 8.71, email: "pratik@college.edu", year: "TY" },
    { id: 19, name: "Riya Santosh Kale", gender: "Female", dept: "ECE", cgpa: 9.14, email: "riya@college.edu", year: "FY" },
    { id: 20, name: "Nikhil Mahendra Patane", gender: "Male", dept: "EEE", cgpa: 8.90, email: "nikhil@college.edu", year: "SY" },

    { id: 21, name: "Kajal Hemant Jagtap", gender: "Female", dept: "IT", cgpa: 9.06, email: "kajal@college.edu", year: "TY" },
    { id: 22, name: "Omkar Pradeep Kulkarni", gender: "Male", dept: "CSE", cgpa: 8.83, email: "omkar@college.edu", year: "FY" },
    { id: 23, name: "Vaishnavi Sachin Patil", gender: "Female", dept: "AI & DS", cgpa: 9.22, email: "vaishnavi@college.edu", year: "SY" },
    { id: 24, name: "Ganesh Balasaheb Shinde", gender: "Male", dept: "MECH", cgpa: 8.69, email: "ganesh@college.edu", year: "TY" },
    { id: 25, name: "Ishwari Sanjay Desai", gender: "Female", dept: "ECE", cgpa: 9.09, email: "ishwari@college.edu", year: "FY" },

    { id: 26, name: "Swapnil Ashish Patil", gender: "Male", dept: "IT", cgpa: 8.77, email: "swapnil@college.edu", year: "SY" },
    { id: 27, name: "Mayuri Pravin Bhandari", gender: "Female", dept: "CSE", cgpa: 9.19, email: "mayuri@college.edu", year: "TY" },
    { id: 28, name: "Harshad Tukaram Jadhav", gender: "Male", dept: "EEE", cgpa: 8.58, email: "harshad@college.edu", year: "FY" },
    { id: 29, name: "Dipali Narayan Patil", gender: "Female", dept: "IT", cgpa: 9.13, email: "dipali@college.edu", year: "SY" },
    { id: 30, name: "Tejas Shankar More", gender: "Male", dept: "CSE", cgpa: 8.91, email: "tejas@college.edu", year: "TY" }
  ];

  const attributes = ["name", "dept", "gender", "year", "email"];
  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState("name");

  const rowsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = studentData.filter(stu =>
    stu[filterBy].toString().toLowerCase().includes(search.toLowerCase())
  );

  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;
  const currentData = filtered.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filtered.length / rowsPerPage);

  return (
    <div className="page">
      <header className="navbar">
        <h1>Student Management System</h1>
      </header>

      <div className="container">

        <div className="filters">
          <div>
            <label>Filter By</label>
            <select onChange={e => setFilterBy(e.target.value)}>
              {attributes.map(a => (
                <option key={a}>{a}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Search</label>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={`Search by ${filterBy}`}
            />
          </div>
        </div>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>ID</th><th>Name</th><th>Gender</th><th>Dept</th>
                <th>CGPA</th><th>Email</th><th>Year</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map(stu => (
                <tr key={stu.id}>
                  <td>{stu.id}</td>
                  <td>{stu.name}</td>
                  <td>{stu.gender}</td>
                  <td>{stu.dept}</td>
                  <td>{stu.cgpa}</td>
                  <td>{stu.email}</td>
                  <td>{stu.year}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={currentPage === i + 1 ? "active" : ""}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
