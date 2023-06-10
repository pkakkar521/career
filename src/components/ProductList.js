import React, { useState ,useEffect} from "react";
import './ProductList.css';
import { Link } from "react-router-dom";
import play from '../image/play.png';
import svg1 from '../image/svg1.jpg';
import e3 from '../image/e3.jpg';
import fb from '../image/fb.png';
import insta from '../image/insta.png';
import ytube from '../image/ytube.png';
import tt from '../image/tt.png';
import linkedin from '../image/linkedin.png';
import location from '../image/location.png';
import phone from '../image/phone.png';
import mail from '../image/mail.png';
import logos from '../image/logos.jpg';
import { useNavigate } from "react-router-dom";

const ProductList=()=>{
   const [products,setProducts]=useState([]);
   useEffect(()=>{
      getProducts();
   },[])

 const getProducts=async()=>{
    let result=await fetch('http://localhost:5000/product');
    result=await result.json();
    setProducts(result);
 }
 console.log("products",products);
 const deleteproduct=async(id)=>{
   let result= await fetch(`http://localhost:5000/product/${id}`,{
      method:"Delete"
   })
   result=await result.json();
   if(result){getProducts();}
 }
 const [firstname,setfirstname]=useState("");
    const [lastname,setlastname]=useState("");
	const [email,setemail]=useState("");
	const [country,setcountry]=useState("");
	const [expectedsalary,setexpectedsalary]=useState("");
	const [addetail,setaddetail]=useState("");
    const navigate =useNavigate();
    const [error,seterror] = useState(false);
    useEffect(()=>{
        const auth= localStorage.getItem('user');
       if(auth){
        navigate('/');
       }
    })
    const collect =async()=>{
		if(!firstname || !lastname || !email || !addetail){
            seterror(true);
            return false;
        }
		console.warn(firstname,lastname,email,country,expectedsalary,addetail);
    const result = await fetch ('http://localhost:5000/reg',{
      method:'post',
      body:JSON.stringify({firstname,lastname,email,country,expectedsalary,addetail}),
      headers:{
      'Content-Type':'application/json'
      },
    });
      const resul = await result.json()
      console.warn(resul);
      
        localStorage.setItem("user",JSON.stringify(resul));
   navigate('/');
  
    window.location.reload(false);
  
    
    }

    return(

     <div className="product">
      <div class="head-container">
			<div class="quote">
				<p>The beautiful thing about learning is that nobody can take it away from you</p>
				<h5>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research!</h5>
				<div class="play">
					<img src={play} alt="play"/><span><a href="https://www.youtube.com/watch?v=zfWkTNdF8pY" target="_blank">Watch Now</a></span>
				</div>
			</div>
			<div class="svg-image">
				<img src={svg1} alt="svg"/>
			</div>
		</div>
		<div class="diffSection" id="contactus_section">
		<center><p className="nn"style={{fontSize: "80px;" ,padding: "100px",fontWeight:"bold"}}>Guidance Form</p></center>
		<div class="csec"></div>
		<div class="back-contact">
			<div class="c">
			<form >
				<label className="dd">First Name <span class="imp">*</span></label><label className="vv"style={{marginRight: "585px"}}>Last Name <span class="imp">*</span></label><br></br>
				<center>
				<input type="text"  style={{marginRight: "10px;" ,width: "175px" }}required="required" value={firstname} onChange={(e)=>setfirstname(e.target.value)}/>
				{error && !firstname && <span className="invalid">Enter Your First Name</span>}
				<input type="text" name="lname" style={{width: "175px"}} required="required" value={lastname} onChange={(e)=>setlastname(e.target.value)}/><br></br>
				{error && !lastname && <span className="invalid">Enter Your Last Name</span>}
				</center>
				<label className="em">Email <span class="imp">*</span></label><br></br>
				<input type="email"  style={{width: "100%"}} required="required" value={email} onChange={(e)=>setemail(e.target.value)}/><br></br>
				{error && !email && <span className="invalid">Enter Your Email Name</span>}
				<label className="em">Country <span class="imp">*</span></label><br></br>
				<input type="text"  style={{width: "100%"}} required="required" value={country} onChange={(e)=>setcountry(e.target.value)}/><br></br>
				<label className="em">Expected Salary <span class="imp">*</span></label><br></br>
				<input type="text"  style={{width: "100%"}} required="required" value={expectedsalary} onChange={(e)=>setexpectedsalary(e.target.value)}/><br></br>
				<label className="em">Additional Details</label><br></br>
				<textarea  value={addetail} onChange={(e)=>setaddetail(e.target.value)}></textarea><br/>
				{error && !addetail && <span className="invalid">Enter complete and your goal </span>}
				<button type="submit" id="csubmit" onClick={collect}>Submit</button>
				<a id="csubmit" href="https://roadmap.sh/"> Get the complete Roadmaps </a>
				
			</form>
			</div>
		</div>
	</div>
    {/* <h1 className="hh">Products</h1>
      
        <ul className="pp">
          
            <li > <h2> S.no</h2></li>
             <li > <h2>Name</h2></li>
                <li>  <h2>Price </h2> </li>
                     <li> <h2> Category</h2></li>
                     <li><h2> Company</h2></li>
                     <li><h2>Operation </h2> </li>
                     
        </ul>
       
      
        {
            products.map((item,index)=>
            <ul className="pp" key={item._id}>
            <li>{index+1}</li>
            <li>{item.name}</li>
           <li>₹ {item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li><button onClick={()=>deleteproduct(item._id)} className="bt">Delete</button>
            <Link to={"/update/"+item._id} className="upp">Update</Link>
            </li>
           </ul>
            )
        }*/}
        <div class="diffSection" id="about_section">
		<center><p className="about" style={{fontSize: "50px;" ,padding: "100px"}}>About</p></center>
		<div class="about-content"> 
				 
              
					
				
				<div class="side-text">
					<h2>What you think about us ?</h2>
					<p>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research.<br></br> Educational website can include websites that have games, videos or topic related resources that act as tools to enhance learning and supplement classroom teaching. These websites help make the process of learning entertaining and attractive to the student, especially in today's age. <br></br>Using HTML(HyperText Markup Language), CSS(Cascading Style Sheet), JavaScript, we can make learning more easier and in a interesting way.</p>
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
export default ProductList;