/* jshint esversion: 6 */

import React, { Component } from 'react';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from 'reactstrap';
import Footer from './component/Layouts/Footer/footer';
// React Router Import
  // eslint-disable-next-line
import { Switch, Route } from 'react-router-dom'; 
  // Import Pages
import Home from './component/Pages/Home/home';
import Blog from './component/Pages/Blog/blog';
import Shop from './component/Pages/Shop/shop';
import Details from './component/Pages/Details/details';
import About from './component/Pages/About/about';
import NotFoundPage from './component/Pages/NotFoundPage/notFoundPage';
import ReadyToWear from './component/Pages/ReadyToWear/readyToWear';
import Contact from './component/Pages/Contact/contact';
import SizeGuide from './component/Pages/SizeGuide/sizeGuide';
import ReturnPolicy from './component/Pages/ReturnPolicy/returnPolicy';
import DeliveryPolicy from './component/Pages/DeliveryPolicy/deliveryPolicy';
import Faqs from './component/Pages/Faqs/faqs';

  // For The Navbar
     // eslint-disable-next-line
import { Link } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="flex-column bg-white shadow-5" light expand="md" fixed="top" style={{}}>
          <NavbarBrand href="/"><strong className="f3">RAE TANS</strong></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse classID="toolbar_collapse" isOpen={this.state.isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem className="ml-5 nav-item">
                <NavLink href="/">HOME&nbsp;<i class="fas fa-home"></i></NavLink>
              </NavItem>
              <NavItem className="ml-5">
                <NavLink href="/blog/">BLOG</NavLink>
              </NavItem>
              <UncontrolledDropdown>
                <NavItem className="ml-5">
                  <NavLink href="/shop/">SHOP</NavLink>
                </NavItem>
              </UncontrolledDropdown>
              <NavItem className="ml-5">
                <NavLink href="/about/">ABOUT US</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/blog" component={Blog} />
          <Route path="/shop" component={Shop} />
          <Route path="/details" component={Details} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/readytowear" component={ReadyToWear} />
          <Route path="/sizeguide" component={SizeGuide} />
          <Route path="/returnpolicy" component={ReturnPolicy} />
          <Route path="/deliverypolicy" component={DeliveryPolicy} />
          <Route path="/faqs" component={Faqs} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>  
    );
  }
}

export default App;

