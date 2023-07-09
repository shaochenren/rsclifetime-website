import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/topnav/Topnav';
import Home from './components/header/Header';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import RecentLife from './components/recent-life/Recent-life';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Routes>
        <Route path="/contact" component={<Contact />} />
        <Route path="/components/recent-life/Recent-life" component={<RecentLife />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
