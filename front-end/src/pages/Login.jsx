import Header from "../components/login/Header";
import Footer from "../components/login/Footer";

function Login() {
  return (
    <>
      <Header />
      <main>
        <div className="square">
          <h1>Sign in</h1>
          <form action="/login" method="post">
            <div className="credentials">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" />
            </div>
            <div className="credentials">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>
            <div id="btn_padding">
              <input type="submit" value="Sign in" id="submit" />
            </div>
            <a href="/register" id="register">
              Register
            </a>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Login;
