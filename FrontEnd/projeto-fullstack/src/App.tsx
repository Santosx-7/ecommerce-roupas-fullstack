import Input from "./components/input";

function App() {
  return (
    <div className="flex gap-2 bg-[#121212]">
      <Input placeholder="Email@exemplo.com..." type="email" />
      <Input placeholder="Senha..." type="password" />
    </div>
  );
}

export default App;
