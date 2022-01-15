import React, {useState} from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Herbs from '../Herbs/Herbs';
import Diseases from '../Diseases/Diseases';
import Details from '../Details/Details';
import styles from './Navigation.module.css';
import Heals from '../Heals/Heals'
import About from '../About/About'
import Hamburger from 'hamburger-react'
const Navigation = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <BrowserRouter>
      <div>
        <nav className={styles.nav}>
          <div className={styles.containerOne}>
            <Link to="/">
              <div className={styles.logo} />
            </Link>
          </div>
          <div className={styles.containerTwo}>
          
             <Hamburger 
            toggled={isOpen} 
            toggle={setOpen}  
            color="#fff"
            /> 
            {
              isOpen  ?
              <div className={styles.menuOpen} >
              <Link to="/diseases" className={styles.link}>
              diseases
              </Link>
              <Link to="/herbs" className={styles.link}>
              herbs
              </Link>
              <Link to="/about" className={styles.link}>
              about
              </Link>
            </div>
            : <div className={styles.menuClosed} >
   
          </div>
            }
    
          </div>
        </nav>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/herbmed" component={Home} />
            <Route exact path="/herbs" component={Herbs} />
            <Route exact path="/diseases" component={Diseases} />
            <Route exact path="/about" component={About} />
            <Route exact path="/herbs/:id" component={Details} />
            <Route exact path="/diseases/:id" component={Heals} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
