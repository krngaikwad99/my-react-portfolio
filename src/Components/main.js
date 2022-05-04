import React from 'react';
import Landingpage from './Landingpage';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import NoMatch from './NoMatch';
import { Switch, Route, Redirect } from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route exact path="/" component= {Landingpage} />
        <Route path="/Landingpage" component= {Landingpage} />
        <Route path="/AboutMe" component= {AboutMe} />
        <Route path="/Resume" component= {Resume} />
        <Route path="/Projects" component= {Projects} />
        <Route path="/Contact" component= {Contact} />
        <Route path="*" component={NoMatch} />

    </Switch>
    
)


export default Main;