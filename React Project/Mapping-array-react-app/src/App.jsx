import { useState } from "react";
import "./App.css";

export default function App() {
  const studentData = [
    { id: 1, name: "Mrunal Sachin Thamake", gender: "Female", dept: "CSE", cgpa: 9.12, email: "mrunal.thamake@college.edu", year: "TY" },
    { id: 2, name: "Rahul Sunil Deshmukh", gender: "Male", dept: "IT", cgpa: 8.74, email: "rahul.deshmukh@college.edu", year: "SY" },
    { id: 3, name: "Sneha Mahesh Kulkarni", gender: "Female", dept: "ECE", cgpa: 9.01, email: "sneha.kulkarni@college.edu", year: "TY" },
    { id: 4, name: "Aditya Anil Joshi", gender: "Male", dept: "CSE", cgpa: 8.95, email: "aditya.joshi@college.edu", year: "FY" },
    { id: 5, name: "Priya Suresh More", gender: "Female", dept: "AI & DS", cgpa: 9.26, email: "priya.more@college.edu", year: "SY" },

    { id: 6, name: "Rohit Vijay Pawar", gender: "Male", dept: "EEE", cgpa: 8.62, email: "rohit.pawar@college.edu", year: "TY" },
    { id: 7, name: "Neha Rajesh Bhosale", gender: "Female", dept: "IT", cgpa: 9.08, email: "neha.bhosale@college.edu", year: "FY" },
    { id: 8, name: "Karan Sanjay Jadhav", gender: "Male", dept: "ECE", cgpa: 8.88, email: "karan.jadhav@college.edu", year: "SY" },
    { id: 9, name: "Kavya Nitin Shinde", gender: "Female", dept: "CSE", cgpa: 9.34, email: "kavya.shinde@college.edu", year: "TY" },
    { id: 10, name: "Amit Prakash Chavan", gender: "Male", dept: "MECH", cgpa: 8.55, email: "amit.chavan@college.edu", year: "FY" },

    { id: 11, name: "Pooja Ashok Mane", gender: "Female", dept: "IT", cgpa: 9.05, email: "pooja.mane@college.edu", year: "SY" },
    { id: 12, name: "Saurabh Deepak Patil", gender: "Male", dept: "CSE", cgpa: 8.92, email: "saurabh.patil@college.edu", year: "TY" },
    { id: 13, name: "Anjali Vinod Koli", gender: "Female", dept: "ECE", cgpa: 9.11, email: "anjali.koli@college.edu", year: "FY" },
    { id: 14, name: "Shubham Rakesh More", gender: "Male", dept: "IT", cgpa: 8.84, email: "shubham.more@college.edu", year: "SY" },
    { id: 15, name: "Komal Ajay Thorat", gender: "Female", dept: "AI & DS", cgpa: 9.18, email: "komal.thorat@college.edu", year: "TY" },

    { id: 16, name: "Akash Milind Gaikwad", gender: "Male", dept: "MECH", cgpa: 8.66, email: "akash.gaikwad@college.edu", year: "FY" },
    { id: 17, name: "Sonali Dinesh Pawar", gender: "Female", dept: "CSE", cgpa: 9.27, email: "sonali.pawar@college.edu", year: "SY" },
    { id: 18, name: "Pratik Umesh Yadav", gender: "Male", dept: "IT", cgpa: 8.71, email: "pratik.yadav@college.edu", year: "TY" },
    { id: 19, name: "Riya Santosh Kale", gender: "Female", dept: "ECE", cgpa: 9.14, email: "riya.kale@college.edu", year: "FY" },
    { id: 20, name: "Nikhil Mahendra Patane", gender: "Male", dept: "EEE", cgpa: 8.90, email: "nikhil.patane@college.edu", year: "SY" },

    { id: 21, name: "Kajal Hemant Jagtap", gender: "Female", dept: "IT", cgpa: 9.06, email: "kajal.jagtap@college.edu", year: "TY" },
    { id: 22, name: "Omkar Pradeep Kulkarni", gender: "Male", dept: "CSE", cgpa: 8.83, email: "omkar.kulkarni@college.edu", year: "FY" },
    { id: 23, name: "Vaishnavi Sachin Patil", gender: "Female", dept: "AI & DS", cgpa: 9.22, email: "vaishnavi.patil@college.edu", year: "SY" },
    { id: 24, name: "Ganesh Balasaheb Shinde", gender: "Male", dept: "MECH", cgpa: 8.69, email: "ganesh.shinde@college.edu", year: "TY" },
    { id: 25, name: "Ishwari Sanjay Desai", gender: "Female", dept: "ECE", cgpa: 9.09, email: "ishwari.desai@college.edu", year: "FY" },

    { id: 26, name: "Swapnil Ashish Patil", gender: "Male", dept: "IT", cgpa: 8.77, email: "swapnil.patil@college.edu", year: "SY" },
    { id: 27, name: "Mayuri Pravin Bhandari", gender: "Female", dept: "CSE", cgpa: 9.19, email: "mayuri.bhandari@college.edu", year: "TY" },
    { id: 28, name: "Harshad Tukaram Jadhav", gender: "Male", dept: "EEE", cgpa: 8.58, email: "harshad.jadhav@college.edu", year: "FY" },
    { id: 29, name: "Dipali Narayan Patil", gender: "Female", dept: "IT", cgpa: 9.13, email: "dipali.patil@college.edu", year: "SY" },
    { id: 30, name: "Tejas Shankar More", gender: "Male", dept: "CSE", cgpa: 8.91, email: "tejas.more@college.edu", year: "TY" }
  ];

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <header className="navbar">
        <h2>Student Management System</h2>
        <button onClick={() => setStudents(studentData)}>Load Records</button>
      </header>

      <div className="content">
        <input
          className="search"
          placeholder="Search student name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Gender</th>
                <th>Department</th>
                <th>CGPA</th>
                <th>Email</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="7" className="no-data">
                    No students available
                  </td>
                </tr>
              ) : (
                filtered.map(s => (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.gender}</td>
                    <td>{s.dept}</td>
                    <td>{s.cgpa}</td>
                    <td>{s.email}</td>
                    <td>{s.year}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
