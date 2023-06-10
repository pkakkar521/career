import React from "react";
import ayush from '../image/ayush.png';
import pratham from '../image/pratham.jpg';
import ripun from '../image/ripun.jpg';
import tushar from '../image/tushar.png';
import fb from '../image/fb.png';
import insta from '../image/insta.png';
import ytube from '../image/ytube.png';
import tt from '../image/tt.png';
import linkedin from '../image/linkedin.png';
import location from '../image/location.png';
import phone from '../image/phone.png';
import mail from '../image/mail.png';
import logos from '../image/logos.jpg';
import './Updated.css'
const Update =()=>{
    return(
<div className="cr">
<div class="diffSection" id="team_section">
		<center><p style={{fontSize: "50px;", paddingTop: "100px;", paddingBottom: "60px;" , fontWeight:'bold'}} className='we'>We're the Creators</p></center>
		<div class="totalcard">
			<div class="card">
				<center><img src={ayush}/></center>
				<center><div class="card-title">Ripunjay Sharma</div>
				<div id="detail">
					<p>“ You can teach a student a lesson for a day; but if you can teach him to learn by creating curiosity, he will continue the learning process as long as he lives “</p>
					<div class="duty"></div>
					<button class="btn-roshan">Follow +</button>
				</div>
				</center>
			</div>
			<div class="card">
				<center><img src={pratham}/></center>
				<center><div class="card-title">Pratham Kakkar</div>
				<div id="detail">
					<p>“ Real education should consist of drawing the goodness and the best out of our own students. What better books can there be than the book of humanity “</p>
					<div class="duty"></div>
					<button class="btn-roshan">Follow +</button>
				</div>
				</center>
			</div>
            <div class="card">
				<center><img src={ripun}/></center>
				<center><div class="card-title">Tushar Sharma</div>
				<div id="detail">
					<p>“ Real education should consist of drawing the goodness and the best out of our own students. What better books can there be than the book of humanity “</p>
					<div class="duty"></div>
					<button class="btn-roshan">Follow +</button>
				</div>
				</center>
			</div>
            <div class="card">
				<center><img src={tushar}/></center>
				<center><div class="card-title">Ayush Ranjan</div>
				<div id="detail">
					<p>“ Real education should consist of drawing the goodness and the best out of our own students. What better books can there be than the book of humanity “</p>
					<div class="duty"></div>
					<button class="btn-roshan">Follow +</button>
				</div>
				</center>
			</div>
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
export default Update;