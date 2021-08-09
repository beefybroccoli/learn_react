import "./AppTwo.css";

function Header() {
    return(
        <header>
            <h1>AppTwo - Header 1 Here</h1>
        </header>
    );
}

function Main() {}

function Footer() {}

function AppTwo() {
  return (
    <div className="AppTwo">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default AppTwo;
