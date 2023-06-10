import React from "react";
import computercour from "../image/computer-courses.png";
import brainbooster from "../image/brainbooster.png";
import online from "../image/online-tutorials.png";
import papers from "../image/paper.png";
import p3 from "../image/p3.png";
import discussion from "../image/discussion.png";
import q1 from "../image/q1.png";
import help from "../image/help.png";
import './Profile.css';
import fb from '../image/fb.png';
import insta from '../image/insta.png';
import ytube from '../image/ytube.png';
import tt from '../image/tt.png';
import linkedin from '../image/linkedin.png';
import location from '../image/location.png';
import phone from '../image/phone.png';
import mail from '../image/mail.png';
import logos from '../image/logos.jpg';

const Profile =()=>{
    return(
    <div className="gg">
        <div class="service-swipe">
		<div class="diffSection" id="services_section">
		<center><p className="ps" style={{fontSize: "50px;", padding: "100px", paddingBottom: "10px;", color: "#fff;"}}>Services</p></center>
		</div>
		<a href="subjects/computer_courses.html"><div class="s-card"><img src={computercour}/><p>Free Online Computer Courses</p></div></a>
		<a href="subjects/jee.html"><div class="s-card"><img src={brainbooster}/><p>Building Concepts for Competitive Exams</p></div></a>
		<a href="#"><div class="s-card"><img src={online}/><p>Online Video Lectures</p></div></a>
		<a href="subjects/jee.html#sample_papers"><div class="s-card"><img src={papers}/><p>Sample Papers of Various Competitive Exams</p></div></a>
		<a href="#"><div class="s-card"><img src={p3}/><p>Performance and Ranking Report</p></div></a>
		<a href="#contactus_section"><div class="s-card"><img src={discussion}/><p>Discussion with Our Tutors & Mentors</p></div></a>
		<a href="subjects/quiz.html"><div class="s-card"><img src={q1}/><p>Daily Brain Teasing Questions to Improve IQ</p></div></a>
		<a href="#contactus_section"><div class="s-card"><img src={help}/><p>24x7 Online Support</p></div></a>
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
export default Profile;