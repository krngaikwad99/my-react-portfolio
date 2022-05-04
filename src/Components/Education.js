import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        return(
            <Grid> 
                <Cell col={4}>
                    <p> {this.props.schoolyear} </p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>
                        {this.props.school}
                    </h4>
                    <p> 
                        {this.props.schoolgpa}
                    </p>
                    <p> 
                        {this.props.schooldesc}
                    </p>
                </Cell>
            
            </Grid>

        )
    }
}

export default Education;