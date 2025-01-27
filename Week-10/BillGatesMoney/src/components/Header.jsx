import billGatesImg from "../assets/billgates.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header-title">
        <img src={billGatesImg} alt="Bill Gates" />
        <h1>Spend Bill Gates Money</h1>
      </div>
    </header>
  );
}

export default Header;
