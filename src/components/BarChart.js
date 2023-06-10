import React ,{useState} from "react";
import './BarChart.css'
import { useNavigate } from "react-router-dom";
import fb from '../image/fb.png';
import insta from '../image/insta.png';
import ytube from '../image/ytube.png';
import tt from '../image/tt.png';
import linkedin from '../image/linkedin.png';
import location from '../image/location.png';
import phone from '../image/phone.png';
import mail from '../image/mail.png';
import logos from '../image/logos.jpg';

const BarChart=()=>{
    const [name,setname]=useState('');
    const [price,setprice]=useState('');
    const [category,setcategory]=useState('');
    const [company,setcompany] = useState('');
    const [error,seterror] = useState(false);
    const navigate=useNavigate();
    const addproduct =async()=>{
        if(!name || !price || !category || !company){
            seterror(true);
            return false;
        }
        console.warn(name,price,category,company);
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        const result = await fetch('http://localhost:5000/commerce',{
            method:'post',
            body:JSON.stringify({name,price,category,userId,company}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        const resu=await result.json();
        console.warn(resu);
        navigate('/');
    }
    return(
    <div className="product">
        <div class="diffSection" id="portfolio_section">
		<center><p style={{fontSize:'60px', padding: '100px', paddingBottom:'40px',marginTop:'80px' , fontWeight:"bold" ,}} className="you">Portfolio</p></center>
		<div class="content">
			<p className="q">
				“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” “Your attitude, not your aptitude, will determine your altitude.” “If you think education is expensive, try ignorance.” “The only person who is educated is the one who has learned how to learn …and change.”
			</p>
		</div>
	</div>
	<div class="extra">
		<p>We're increasing this data every year</p>
		<div class="smbox">
		<span><center><div class="data">154</div><div class="det">Enrolled Students</div></center></span>
		<span><center><div class="data">62</div><div class="det">Total Courses</div></center></span>
		<span><center><div class="data">56</div><div class="det">Placed Students</div></center></span>
		<span><center><div class="data">27</div><div class="det">Total Projects</div></center></span>
		</div>
	</div>
        <h1>Contact Us </h1>
        <div className="kk">
        <input type="text" placeholder="enter Your name " className="input" value={name} onChange={(e)=>{setname(e.target.value)}} />
        {error && !name && <span className="invalid">Enter Your Name</span>}
        <input type="text" placeholder="enter Your phone no" className="input" value={price} onChange={(e)=>{setprice(e.target.value)}} />
        {error && !price && <span className="invalid">Enter Phone No</span>}
        <input type="text" placeholder="What you want to be" className="input" value={category} onChange={(e)=>{setcategory(e.target.value)}} />
        {error && !category && <span className="invalid">Enter Goal</span>}
        <input type="text" placeholder="enter the company" className="input" value={company} onChange={(e)=>{setcompany(e.target.value)}} />
        {error && !company && <span className="invalid">Enter Company</span>}
        </div>
       
        <button className="button" onClick={addproduct}><h3> Submit</h3></button>
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
export default BarChart;