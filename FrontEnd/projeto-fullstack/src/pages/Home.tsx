import { Link } from "react-router";

function Home() {
  return (
    <div>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Registro</Link>
    </div>
  );
}

export default Home;
