function BurgerMenu({ isOpen }) {


  return (
  
    <div
      id="burger-menu"
      className={`hidden bg-darkBlue text-white w-full rounded ${isOpen ? "" : "hidden"}`}
    >
      <ul className="flex flex-col w-full p-3 text-xl">
        <li>
          <a href="#hero" className="text-xl font-semibold py-3">
            Home
          </a>
        </li>
        <li>
          <a href="#classes" className="text-xl font-semibold py-3">
            Classes
          </a>
        </li>
        <li>
          <a href="#trainer" className="text-xl font-semibold py-3">
            Trainer
          </a>
        </li>
        <li>
          <a href="#review" className="text-xl font-semibold py-3">
            Review
          </a>
        </li>
        <li>
          <a href="#contact" className="text-xl font-semibold py-3">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="text-xl font-semibold py-3">
            JOIN US
          </a>
        </li>
      </ul>
    </div>
  );
}

export default BurgerMenu;
