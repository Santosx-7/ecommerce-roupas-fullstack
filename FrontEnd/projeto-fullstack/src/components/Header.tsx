function Header() {
  return (
    <div className="bg-[#121212]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-184.25 md:p-0">
        <img src="./public/logo.png" alt="logo" />
        <div className="flex h-8.75 w-32.5 cursor-pointer items-center justify-center rounded-sm bg-[#F2F2F2]">
          Entrar
        </div>
      </div>
    </div>
  );
}

export default Header;
