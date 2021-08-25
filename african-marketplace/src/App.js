import "./App.css";
import HomePage from "./page/home";
import NavigationBar from "./component/navigation-bar";
import Page404 from "./page/404";
import Footer from "./component/footer";
import AboutPage from "./page/about";
import Product from "./page/product";
import Inventory from "./page/inventory";
import ProfilePage from "./page/profile";
import ContactPage from "./page/contact";
import Specific_Product from "./page/specific_product";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <header>
        <NavigationBar />
      </header>
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/inventory">
              <Inventory />
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Route path="/About">
              <AboutPage />
            </Route>
            <Route path="/Contact">
              <ContactPage />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

/*

the inventory page is composed of the below components:
...form_inventory_add_item.js
...form_inventory_edit_item.js
...form_inventory_inventory_sheet.js

the product page is composed of the below components:
...item_for_sale.js
...listing_items_for_sales.js

*/