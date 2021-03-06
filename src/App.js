import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage";

import ElitVitae from "./pages/ElitVitae.js";
import Default from "./pages/Default.js";
import Fade from 'react-reveal/Fade';

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Sidebar2 from "./components/Sidebar2";

import SideCart from "./components/SideCart";
import Footer from "./components/Footer";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };


  }

  componentDidMount() {

    // this.props.fetchArticle();

    //this.setState({loading: false});

    setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
  }


  render() {
    const { loading } = this.state;




    return (
      <>
        {/* navbar, sidebar, cart,footer*/}

        {loading && <>
          <Navbar />
          <Sidebar />
          <SideCart />
          <Sidebar2 />
          <div>
            <div className="loader"></div>
          </div>

        </>}
        {!loading && <>
          <Navbar />
          <Sidebar />
          <SideCart />
          <Sidebar2 />
          <Fade top distance="25px" >
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/products" exact component={Products} onUpdate={() => window.scrollTo(0, 0)} />
              <Route path="/products/:id" component={SingleProduct} />
              <Route path="/elit-vitae" component={ElitVitae} />
              <Route path="/cart" component={Cart} />

              <Route component={Default} />
            </Switch>

          </Fade>

          <Footer />
        </>}
        {/* if (loading) { // if your component doesn't have to wait for an async action, remove this block

  
          <div>
            <div className="loader"></div>
          </div>
      

        }
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route path="/elit-vitae" component={ElitVitae} />
          <Route component={Default} />
        </Switch> */}
      </>
    );
  }
}

export default App;
