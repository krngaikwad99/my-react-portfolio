import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import bitmojiface from './Images/bitmojiface.png';

class Landingpage extends Component {
  render() {
      return(
        <div style={{width: '100%', margin: 'auto'}} className="Landingpage">
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img src={bitmojiface} alt='bitmoji face' className="bitmojiface" />
                    
                    <div className="banner-text">
                        <h1> Karan Gaikwad </h1> 
                        <h4> Full Stack Developer </h4>
          
                        <hr/>
          
                        <p> Java | Python | C | HTML | CSS | Javascript | React | Express | Node | Bootstrap | jQuery | PHP </p>
          
                        <div className="social-links">
          
                            <a href="https://www.linkedin.com/in/karan-gaikwad-328b80183/"  rel="noopener noreferrer" target="_blank"> 
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
          
                            <a href="https://github.com/krngaikwad99"  rel="noopener noreferrer" target="_blank"> 
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
          
                        </div>
          
                    </div>
          
                </Cell>
            </Grid>

        </div>
    )
  };
}


export default Landingpage;