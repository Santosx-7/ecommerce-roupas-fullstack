import Input from "../components/input";
import { useState } from "react";
import { Link } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(email);
    console.log(senha);
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#121212]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to={"/"}>
          <img src="./logo.png" alt="logo" className="mb-4" />
        </Link>

        <Input
          placeholder="Email@exemplo.com..."
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha..."
          type="password"
          onChange={(e) => setSenha(e.target.value)}
        />

        <button className="m-2 w-full cursor-pointer rounded-xl bg-[#F2F2F2] py-3 text-sm font-semibold text-[#121212]">
          Login
        </button>

        <button className="w-full cursor-pointer rounded-xl border border-white bg-transparent py-3 text-sm font-bold text-white">
          Já tenho uma conta
        </button>
      </div>
    </form>
  );
}

export default Login;
