function Header() {
  return (
    <div className="p-4 mx-2 bg-yellow-400 shadow-xl grid grid-rows-1 grid-cols-4">
      <div className="font-light md:text-2xl col-span-3"> LOGO </div>
      <div className="grid grid-rows-1 grid-cols-3 justify-items-center">
        <div className="md:font-medium md:text-lg"> option 1 </div>
        <div className="md:font-medium md:text-lg"> option 2 </div>
        <div className="md:font-medium md:text-lg"> option 3 </div>
      </div>
    </div>
  );
}

export default Header;
