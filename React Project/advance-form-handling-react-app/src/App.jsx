import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <input
              placeholder="Full Name"
              {...register("fullName", {
                required: "Full name is required",
              })}
            />
            {errors.fullName && (
              <span className="error">{errors.fullName.message}</span>
            )}
          </div>
          <div className="field">
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </div>
          <div className="field">
            <input
              placeholder="Mobile Number"
              {...register("mobile", {
                required: "Mobile number is required",
              })}
            />
            {errors.mobile && (
              <span className="error">{errors.mobile.message}</span>
            )}
          </div>
          <div className="field">
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default App;
