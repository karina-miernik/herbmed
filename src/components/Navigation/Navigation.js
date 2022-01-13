import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Herbs from '../Herbs/Herbs';
import Diseases from '../Diseases/Diseases';
import Details from '../Details/Details';
import styles from './Navigation.module.css';
import Heals from '../Heals/Heals'
const Navigation = () => {
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
            <Link to="/diseases" className={styles.link}>
              diseases
            </Link>
            <Link to="/herbs" className={styles.link}>
              herbs
            </Link>
          </div>
        </nav>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/herbs" component={Herbs} />
            <Route exact path="/diseases" component={Diseases} />
            <Route exact path="/herbs/:id" component={Details} />
            <Route exact path="/diseases/:id" component={Heals} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
