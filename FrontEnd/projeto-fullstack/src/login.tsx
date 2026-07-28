import Input from "./components/input";
import { useState } from "react";

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
        <img src="./logo.png" alt="logo" className="mb-4" />
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

        <button className="m-2 w-full cursor-pointer rounded-sm bg-[#F2F2F2] py-3 text-sm font-semibold text-[#121212]">
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
