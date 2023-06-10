import React from "react";
import book from '../image/book.png';
import d1 from'../image/d1.png';
import paper from'../image/paper.png';
import computer from '../image/computer.png';
import data from '../image/data.png';
import algo from '../image/algo.png';
import projects from '../image/projects.png';
import Jeemain from './subjects/Jeemain';
import './Subject.css'
import { Route,Routes } from "react-router-dom";
import fb from '../image/fb.png';
import insta from '../image/insta.png';
import ytube from '../image/ytube.png';
import tt from '../image/tt.png';
import linkedin from '../image/linkedin.png';
import location from '../image/location.png';
import phone from '../image/phone.png';
import mail from '../image/mail.png';
import logos from '../image/logos.jpg';
const Subject = ()=>{
    return(
        <div className="cc">
        <div class="title">
		<span>Popular Subjects</span>
	</div>
	<br></br>
	<div class="course">
		<center><div class="cbox">
		<div class="det"><a href="/jeemain"><img src={book}/>JEE Preparation</a></div>
		<div class="det"><a href="/gate"><img src={d1}/>GATE Preparation</a></div>
		<div class="det"><a href="subjects/jee.html#sample_papers"><img src={paper}/>Sample Papers</a></div>
		<div class="det"><a href="subjects/quiz.html"><img src={d1}/>Daily Quiz</a></div>
		</div></center>
		<div class="cbox">
		<div class="det"><a href="subjects/computer_courses.html"><img src={computer}/>Computer Courses</a></div>
		<div class="det"><a href="subjects/computer_courses.html#data"><img src={data}/>Data Structures</a></div>
		<div class="det"><a href="subjects/computer_courses.html#algo"><img src={algo}/>Algorithm</a></div>
		<div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={projects}/>Projects</a></div>
		</div>
        <div class="cbox">
        <div class="det"><a href="https://chat.openai.com/"><img src={computer}/>Chat with AI</a></div>    

        </div>
	</div>
	<footer>
		<div class="footer-container">
			<div class="left-col">
				<img className="leftlogo" src={logos} style={{width: "200px;"}}/>
				<div class="logo"></div>
				<div class="social-media">
					<a href="#"><img src={fb}/></a>
					<a href="#"><img src={insta}/></a>
					<a href="#"><img src={tt}/></a>
					<a href="#"><img src={ytube}/></a>
					<a href="#"><img src={linkedin}/></a>
				</div><br></br>
				<p class="rights-text">Copyright © 2023 Career Craft All Rights Reserved.</p>
				<br></br><p><img src={location}/>Bharati Vidyapeeth's College of Engineering<br></br>Pachim vihar , Delhi</p><br></br>
				<p><img src={phone}/> +91-1234-444-6666<br></br><img src={mail}/>&nbsp; pkakkar521@gmail.com</p>
			</div>
			<div class="right-col">
				<h1 style={{color: "#fff"}}>Our Newsletter</h1>
				<div class="border"></div><br></br>
				<p>Enter Your Email to get our News and updates.</p>
				<form class="newsletter-form">
					<input class="txtb" type="email" placeholder="Enter Your Email"/>
					<input class="btn" type="submit" value="Submit"/>
				</form>
			</div>
		</div>
	</footer>
    </div>
    )
}
export default Subject