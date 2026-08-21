import Input from "../components/input";
import { useState } from "react";
import { Link } from "react-router";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ name, email, password, confirmPassword, cep });
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
          className=""
          type="text"
          placeholder="Nome..."
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          className=""
          type="email"
          placeholder="Email@Exemplo.com..."
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          className=""
          type="password"
          placeholder="Senha..."
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          className=""
          type="password"
          placeholder="Confirme sua Senha..."
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Input
          className=""
          type="text"
          placeholder="CEP"
          onChange={(e) => setCep(e.target.value)}
        />

        <button className="m-2 w-full cursor-pointer rounded-xl bg-[#F2F2F2] py-3 text-sm font-semibold text-[#121212]">
          Criar Conta
        </button>

        <button className="w-full cursor-pointer rounded-xl border border-white bg-transparent py-3 text-sm font-bold text-white">
          Já tenho uma conta
        </button>
      </div>
    </form>
  );
}

export default Register;
