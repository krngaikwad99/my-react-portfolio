import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Skills extends Component {
    render() {
        return(
            <Grid> 
                <Cell col={12}>
                    <p> {this.props.myskills} </p>
                    <p> {this.props.mylanguages} </p>
                    <p> {this.props.myinterests} </p>
                </Cell>
            
            </Grid>

        )
    }
}

export default Skills;