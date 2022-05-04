import React, { Component } from 'react';
import { Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';
import CRinterface from './Images/CRinterface.png';
import WebDes from './Images/WebDes.png';
import WebDev from './Images/WebDev.png';
import ReplyBotWriteupPic from './Images/ReplyBotWriteupPic.png';
import Cybersecurity from './Images/Cybersecurity.png';
import ToDoList from './Images/ToDoList.png';
import DataVis from './Images/DataVisualization.png';
import URLShortener from './Images/URLShortener.png';
 


class Projects extends Component {

    
    render() {
      return(
        <div className="projects-grid">
                <div className="mdl-grid">
          
                    <div className="mdl-cell mdl-cell--4-col">
          
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          
                        <CardTitle style={{color:'black', height:'400px' }}> <img src={CRinterface} alt='CRinterface' style={{height:'300px', width: '300px'}} /> </CardTitle>
                        <CardTitle style={{color:'black', height:'10px' }}> Course Registration System (Java) </CardTitle>
                        <CardText> I designed a complete university course registration system to showcase my mastery of Object Oriented Programming. The system allows student users and admins to sign in and create various courses and complete commands illustrated in the picture. I utilized abstract classes, inheritance, polymorphism, ArrayLists, and serialization to save data.</CardText>
                        <CardMenu style={{color: 'black'}}>
                            <IconButton name="share" />
                        </CardMenu>

                    </Card>

                    <hr/>
          
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        
                        <CardTitle style={{color:'black', height:'400px' }}> <img src={DataVis} alt='DataVis' style={{height:'300px', width: '300px'}} /> </CardTitle>
                        <CardTitle style={{color:'black', height:'10px' }}> Data Visualization Project (Python/JupyterLab) </CardTitle>
                        <CardText> This is a short Data Visualization project made in Python with JupyterLab in a Data Management class I took. I interpret a Data Set collected from myanimelist.net (public domain license) and set out to answer some basic questions that might be understood through the data. I display opening/reading the data, allong with extracting, transforming, and cleaning necessary columns. I use the statistics and numpy libraries to collect some general information and categorical data. Finally, I plot the data visualization using matplotlib to answer my original questions. I completed several similar projects in this class, and I decided to include just one of them here to display my proficiency working with data sets. </CardText>
                        <CardActions border> 
                            <Button colored> GitHub </Button> 

                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>

                    </Card>
          
                    <hr/>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        
                        <CardTitle style={{color:'black', height:'150px' }}> <img src={ToDoList} alt='ToDoList' style={{height:'100px', width: '300px'}} /> </CardTitle>
                        <CardTitle style={{color:'black', height:'10px' }}> To Do List Application </CardTitle>
                        <CardText> Here I designed a fully functional, simplistic, To-do-list application that I can personally use to keep track of my daily responsibilities. I have enjoyed tracking my daily progress and habits in things such as gyming, eating, and journaling for a while now. I used to do it in Excel but decided why not make my own application. The purpose of the application was moreso to learn a bit about Django, a python framework I have little experience in. </CardText>
                        <CardActions border> 
                            <a href="https://replit.com/@krngaikwad99/To-Do-List#ToDo_List/views.py">
                                <Button colored> Repl.it </Button> 
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>

                    </Card>
          
                    <hr/>
          
                    </div>

          
                    <div className="mdl-cell mdl-cell--4-col">
          
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'black', height:'325px' }}> <img src={Cybersecurity} alt='Cybersecurity' style={{height:'300px', width: '300px'}} /> </CardTitle>
                        <CardTitle style={{color:'black', height:'100px' }}> Computer Security Cyber Attack Documentation Project </CardTitle>
                        <CardText> For my final project in my Introduction to Computer Security class, I documented how to execute various common cyber attacks on the DVWA program. The documentation describes in detail four common cyber security attacks, information about them, as well as an in depth explanation of how to execute them. Specifically, I cover the Command Injection, SQL Injection, CSRF Attack, and File Inclusion</CardText>
                        <CardActions border> 
                            <a href="https://docs.google.com/document/d/1pfCghYp6cHUcOGJ1LJ4Y4plssmyp_z325SicXhJG3KA/edit?usp=sharing">
                                <Button colored> Document </Button> 
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
       

                    <hr/>          

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        
                        <CardTitle style={{color:'black', height:'350px' }}> <img src={URLShortener} alt='URL Shortener' style={{height:'200px', width: '300px'}} /> </CardTitle>
                        <CardTitle style={{color:'black', height:'10px' }}> URL Shortener Site (JavaScript, Handlebars, Express, Body-Parser) </CardTitle>
                        <CardText> An express based application I made for my AIT (Applied Internet Technology) class. The site allows users to shorten, expand, and calculate click counts for URLs. I made several express based applications in this class, and chose to feature this one because it was the one I enjoyed figuring out the most. The application uses handlebars and HTTP GET and POST requests, to display my knowledge of form handling to a server, templating, and routing. You can also see which URLs are the most clicked and therefore "trending".  </CardText>
                        <CardActions border> 
                            <Button colored> GitHub </Button> 
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>

                    </Card>
          
                    <hr/>
          
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'black', height:'350px' }}> <img src={WebDes} alt='WebDes' style={{height:'300px', width: '300px'}} /> </CardTitle>
                        <CardTitle style={{color:'black', height:'100px' }}> Web Design (HTML, CSS, Bootstrap, jQuery, JavaScript) </CardTitle>
                        <CardText> Everyone has to start somewhere! Here you can see many small and simple websites I made in my Web Design class. The websites are not the most visually pleasing, since I was only starting out, but the focus of these assignments was to showcase being able to complete various tasks using the above languages and learning basic syntax. </CardText>
                        <CardActions border> 
                            <a href="https://krngaikwad99.github.io/krngaikwad99WebDesign/">
                                <Button colored> GitHub </Button> 
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <hr/>
        
                    </div>  
          
          
                    <div className="mdl-cell mdl-cell--4-col">
          
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'black', height:'400px' }}> <img src={ReplyBotWriteupPic} alt='ReplyBotWriteupPic' style={{height:'300px', width: '300px'}} /> </CardTitle>
                        <CardTitle style={{color:'black', height:'10px' }}>  NLP: Sentiment Analysis Twitter Bot (Python) </CardTitle>
                        <CardText> ACL-conference-paper-style write up to accompany a Sentiment Analyzing Twitter Reply Bot we made. Split amongst four roles, we created a system that reads a corpus of tweets and analyzes the sentiment of each. Another file extracts the key topics of the tweets. Then, we use a (currently) rule based response generation system to generate a response using the extracted topic in the same sentiment we calculated. Finally, the list of responses is tweeted out to an actualy Twitter developer account we created, @NLPTeam1. Currently, we are working to upgrade the system in order to perform machine learning on the response generation file to turn it into a retrieval based self learning system. Stay tuned! </CardText>
                        <CardMenu style={{color: '#black'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <hr/>
          
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'black', height:'600px' }}> <img src={WebDev} alt='WebDes' style={{height:'550px', width: '300px'}} /> </CardTitle>
                        <CardTitle style={{color:'black', height:'100px' }}> Web Development (HTML, CSS, Bootstrap, jQuery, JavaScript, PHP) </CardTitle>
                        <CardText> Web development is a course taken after Web Design, so my work here was a lot harder and more applicable than that on the left. This website still is not the most visually aesthetic (which is part of the reason I made this portfolio site from scratch, where I did focus on aesthetics!) but nonetheless was meant to showcase a lot of the small and useful skills and applications I can create with the languages above. I still like looking back at it to see how far I have come in my coding journey. </CardText>
                        <CardActions border> 
                            <a href="https://krngaikwad99.github.io/krngaikwad99WebDev/">
                                <Button colored> GitHub </Button> 
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
          
                    <hr/>
          
                    </div>  
          
          
                </div>
        </div>
    )
  };
}


export default Projects;
