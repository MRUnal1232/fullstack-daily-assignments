import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    course: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.age === "" ||
      formData.course === ""
    ) {
      setMessage("All fields are required");
    } else {
      setMessage("Form submitted successfully!");
      console.log(formData);

      // optional reset
      setFormData({
        name: "",
        email: "",
        age: "",
        course: ""
      });
    }
  };

  return (
    <div className="container">
      <h2>Student Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />

        <label>Course</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option value="cs">Computer Science</option>
          <option value="it">Information Technology</option>
          <option value="me">Mechanical</option>
          <option value="ece">Electronics</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      {message && (
        <p
          className={
            message === "Form submitted successfully!"
              ? "success"
              : "error"
          }
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default App;
