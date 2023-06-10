import React ,{useEffect} from "react";
import './Signup.css';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fb from "../image/fb2.png";
import insta from "../image/insta2.png";
import tt2 from "../image/tt2.png";
import google from "../image/google.png";
import logos from "../image/logos.jpg";

const Signup =()=>{
    const [name,setname]=useState("");
    const [password,setpassword]=useState("");
    const navigate =useNavigate();
    const [error,seterror] = useState(false);
    useEffect(()=>{
        const auth= localStorage.getItem('user');
       if(auth){
        navigate('/');
       }
    })
    const collect =async()=>{
        if(!name || !password ){
            seterror(true);
            return false;
        }
        console.warn(name,password);
    const result = await fetch ('https://pkakkar521.github.io/Dashboard1/register',{
      method:'post',
      body:JSON.stringify({name,password}),
      headers:{
      'Content-Type':'application/json'
      },
    });
      const resul = await result.json()
      console.warn(resul);
      
        localStorage.setItem("user",JSON.stringify(resul));
   navigate('/');
      
    
    }
    return(
        <div className="container">
        <div className="screen">
            <div className="screen__content">
                <form className="login">
                    <h1 className="yy">CAREER CRAFT <span><img src={logos} className="jj"/></span></h1>
                    <h1>Register</h1>
                    <div className="login__field">

                    <div class="social-icons">
				<img src={fb} alt="err"/>
				<img src={insta} alt="err"/>
				<img src={tt2} alt="err"/>
			          </div>
                       
                        <input type="text" className="login__input" value={name} onChange={(e)=>setname(e.target.value)} placeholder="User name"/>
                        {error && !name && <span className="invalid">Enter  UserName</span>}
                        <input type="password" className="login__input"  value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Password"/>
                        {error && !password && <span className="invalid">Enter  Password</span>}
                    </div>
                   
                    <button onClick={collect} className="button login__submit">
                        <span className="button__text">Log In Now</span>
                        <i className="button__icon fas fa-chevron-right"></i>
                    </button>				
                </form>
                <div class="other" id="other">
				<div class="instead">
					<h3>or</h3>
				</div>
				<button class="connect" onclick="google()">
					<img src={google} alt="err"/><span>Sign in with Google</span>
				</button>
			</div>
            </div>
            <div className="screen__background">
                <span className="screen__background__shape screen__background__shape4"></span>
                <span className="screen__background__shape screen__background__shape3"></span>		
                <span className="screen__background__shape screen__background__shape2"></span>
                <span className="screen__background__shape screen__background__shape1"></span>
            </div>		
        </div>
    </div>
    )
}
export default Signup;