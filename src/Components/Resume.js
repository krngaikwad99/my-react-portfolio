import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';


class Resume extends Component {
  render() {
      return(
        <div className="Resume">
            <Grid>
                <Cell className="resume-left-col" col={4}>
                    <h2>Karan Gaikwad</h2>
                    <h4 style={{color:'grey'}}> Programmer </h4>
                    <hr style={{borderTop: '3px solid #2F4F4F', width: '50%'}}/>
                    <h5> Welcome to my Resume Page </h5>
                    <hr style={{borderTop: '3px solid #2F4F4F', width: '50%'}}/>
                    <p> New York, New York </p>
                    <p> kg2251@nyu.edu </p>
                    <p> (201)-744-5126 </p>
                    <hr style={{borderTop: '3px solid #2F4F4F', width: '50%'}}/>
                </Cell>

                <Cell className="resume-right-col" col={8}>
                    <h2> Education </h2>
                    <Education 
                        schoolyear = 'Class of 2021'
                        school = 'New York University'
                        schoolgpa = 'Cumulative GPA: 3.471' 
                        schooldesc = 'Coursework: Basic Algorithms, Operating Systems, Applied Internet Technology, Data Management, Natural Language Processing, Computer Systems Organization, Data Structures, Intro to Computer Science, Intro to Computer Programming, Intro to Computer Security, Calculus III, Linear Algebra, Discrete Mathematics, Web Design, Web Development, Macroeconomics, Marketing, Financial Accounting, Statistics, Sociology, Logic'
                    />
                    
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    
                    <h2> Experience </h2>
                    <Experience 
                        startyear = 'October 2021'
                        endyear = 'Currennt'
                        company = 'Impel.io'
                        jobposition = 'Software Engineer'
                        jobdesc = 'Works on team of four to create scripts that integrate company’s various APIs onto clients’ websites (JQuery/JS). Created full stack chrome extension tool for members of the non-technical support team to create their own integrations without a Software Engineer (JS, Python, Flask, HTML, CSS). Helped develop internal tool that assigns customers permissions to API through AWS Secrets (Python, JS). Monitors various scripts and automated tests to check and debug failed jobs or issues within the codebase'
                    />
                    <Experience 
                        startyear = 'July 2021'
                        endyear = 'September 2021'
                        company = 'Prospero,ai'
                        jobposition = 'Software Engineer'
                        jobdesc = 'Helping to build company’s Machine Learning Pipeline. Working closely with senior developer on Twitter scraping project to extract social media data in Python. Establishing company architecture, workflow, pipeline designs and infrastructure.'
                    />
                    <Experience 
                        startyear = 'December 2020'
                        endyear = 'February 2021'
                        company = 'Women Leaders in Data and AI'
                        jobposition = 'Business Development Intern'
                        jobdesc = 'Created and managed entire client relationship management using the Hubspot CRM for the company. Helped design prospect, opportunity, and client management sales pipelines. Prospected new members, established connections and promoted marketing of the company. Worked closely on a small team to communicate effectively with the CEO, Asha Saxena and fellow interns'
                    />
                    <Experience 
                        startyear = 'June 2020'
                        endyear = 'May 2021'
                        company = 'Juni Learning'
                        jobposition = 'Computer Science Instructor'
                        jobdesc = 'Teaching Python, Java, Javascript, HTML, and CSS to students in online one-on-one classes. Communicating effectively with students and parents to conduct classes, provide notes, and establish growth'
                    />
                    <Experience 
                        startyear = 'October 2018'
                        endyear = 'January 2020'
                        company = 'NYU IT Finance Team'
                        jobposition = 'Student Intern'
                        jobdesc = 'Organizing information, consolidating data, retrieving reports. Tracking monthly sales, licenses, charges, contracts. Data entry on Microsoft Excel and Microsoft Access database. Attending meetings, note-taking, delivering checks.'
                    />
                    <Experience 
                        startyear = 'June 2018'
                        endyear = 'August 2018'
                        company = 'Bench Fashion Floors'
                        jobposition = 'Part-Time Employee'
                        jobdesc = 'Speaking to customers, coordinating installation dates with clients and contractors. Data entry of orders and invoices with Microsoft Excel. Calculating and creating estimates. Picking up and delivering supplies.'
                    />
                    <Experience 
                        startyear = 'September 2016'
                        endyear = 'August 2018'
                        company = 'Kumon Math and Reading Center'
                        jobposition = 'Grading Assistant and Tutor'
                        jobdesc = 'Taught children from Kindergarten to High School various concepts ranging from basic reading/writing to Calculus. Answered calls and spoke with customers to coordinate work. Input grades and information in Excel.'
                    />
                    <Experience 
                        startyear = 'November 2017'
                        endyear = 'February 2018'
                        company = 'Varsity Tutors'
                        jobposition = 'One-on-One Tutor'
                        jobdesc = 'Taught students a range of subjects online through one-on-one online interaction. Primarily SAT Math, Reading, and Writing assistance.'
                    />
                            
                    <hr style={{borderTop: '3px solid #e22947'}} />
                            
                    <h2> Skills/Interests </h2>
                    <Skills 
                        myskills = 'Java, Python, C, React, Node, Express, Javascript, Jquery, MongoDB (Mongoose), SQL, Firebase, Pandas, Assembly, HTML, CSS, React, Excel, Word, Experience with Microsoft Access, Photoshop, FTP Clients, Serialization, Object-Oriented Programming, Sorting, Recursion, MIPS Processors'
                        mylanguages = 'Fluent in English and Marathi, proficient in Hindi and French'
                        myinterests = 'Volunteering (Brookdale Senior Center, Bowery Mission, Hillsborough Library), Position/Organization and Involvement in Pi Delta Psi, Incorporated (Program Educator, Webmaster, Brotherhood Unity Chair, Recruitment Chair), Track and Field, Fitness, UFC, Cooking'
                    />
                    
                </Cell>

            </Grid>
        </div>
    )
  };
}

export default Resume;