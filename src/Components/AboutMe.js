import React, { Component } from 'react';
import PortraitPic from './Images/PortraitPic.png';
import { Grid, Cell } from 'react-mdl';

class AboutMe extends Component {
  render() {
      return(
        <div className="AboutMe">
          
        <div style={{width: '100%', margin: 'auto'}} className="Landingpage">
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img src={PortraitPic} alt='Portrait' className="PortraitPic" r/>
                    
                    <div className="banner-text">
                        <h1> Welcome to my site! </h1> 
                        <p> My name is Karan Gaikwad and I am a recent Computer Science and Business Studies graduate at New York University. Currently I work at Impel.io as a Software Engineer. I created this website from scratch using React.js, React MDL, and React Router. At the time, I had never taken a class in React before, so I self-taught most of the material as I made this site through a lot of online guides and tutorials. </p>
                        
                        <p> I enjoy all aspects of Computer Science and technology and am always interested in learning more about concepts I may not be familiar with yet. In addition to coding, I am passionate about the healthcare, medicine, and finance industries. Ideally, I would like to help people with my code, and maybe start a business or have a managerial position one day. </p>
          
                        <p> Its the satisfaction of struggling to achieve something, and then finally getting it to work that makes coding so fulfilling, and inspires me to do more! </p>

                    </div>
          
                </Cell>
            </Grid>

        </div>
          
        </div>
    )
  };
}


export default AboutMe;