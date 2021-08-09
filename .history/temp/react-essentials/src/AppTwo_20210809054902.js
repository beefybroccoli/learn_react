import "./AppTwo.css";

function SecrectComponent() {
  return <p>secret key to the hashing algorithm</p>;
}

function PublicKey() {
  return <p>public key block</p>;
}

function Header() {
  return (
    <header>
      <h1>AppTwo - Header 1 Here</h1>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h2>AppTwo - main section here</h2>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <h3>AppTwo - Footer section here</h3>
    </footer>
  );
}

function AppTwo(props) {
    if(props.authorized){
        return (
            <div className="AppTwo">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }else{
        return ();
    }

  return (
    


  );
}

export default AppTwo;
