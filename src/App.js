import React, {Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
      return (
        <div className="demo-big-content">
         <Layout style={{background: 'url(https://wallpaperaccess.com/full/247131.jpg) center / cover' }}>
            <Header transparent title="My Portfolio" style={{color:'white'}} scroll>
                <Navigation>
                    <Link to="/Landingpage">Home</Link>
                    <Link to="/AboutMe">About Me</Link>
                    <Link to="/Resume">Resume</Link>
                    <Link to="/Projects">Projects</Link>
                    <Link to="/Contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="Portfolio">
                <Navigation>
                    <Link to="/Landingpage">Home</Link>
                    <Link to="/AboutMe">About Me</Link>
                    <Link to="/Resume">Resume</Link>
                    <Link to="/Projects">Projects</Link>
                    <Link to="/Contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
          
      </div>
    )
  };
}

export default App;
