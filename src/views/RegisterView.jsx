import "./RegisterView.css";

function RegisterView() {
  return (
    <div className="register-container">
        <div className="form-container">
            <h2>Create an Account</h2>
            <form action="#" method="POST">
                <label htmlFor="first-name">First name</label>
                <input type="text" id="first-name" name="first-name" required />

                <label htmlFor="last-name">Last name</label>
                <input type="text" id="last-name" name="last-name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
                
                <label htmlFor="re-enter-password">Re-enter Password</label>
                <input type="password" id="re-enter-password" name="re-enter-password" required />
                
                <button type="submit" className="register-button">Register</button>
            </form>
            <p className="login-link">Already have an account? <a href="#">Login</a></p>
        </div>
    </div>
  )
}

export default RegisterView;