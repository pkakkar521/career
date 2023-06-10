import React from "react";
import math from "../../image/math.jpg";
import dropdown from "../../image/dropdown.png";
import digital from "../../image/digital.jpg";
import coaa from "../../image/coaa.jpg";
import database from "../../image/database.jpg";
import compiler from "../../image/compiler.jpg";
import data from "../../image/data-algo.jpg";
import os from "../../image/os.jpg";
import cn from "../../image/cn.jpg";
import './Gate.css';
const Gate=()=>{
return(
    <div className="tt">
        <div class="title">
		<span>Prepare for GATE Exams on Career Craft</span>
		<div class="shortdesc">
			<p>Learn from Career Craft for better higher studies in<br></br> Indian Institutes of Technologies(IIT)</p>
		</div>
	</div>



	<div class="course">
		<div class="box">
		<div class="det"><a href="#digital">Digital Logic</a></div>
		<div class="det"><a href="https://en.wikipedia.org/wiki/Sequential_logic" target="_blank">Combinational & Sequential Circuits</a></div>
		<div class="det"><a href="https://en.wikipedia.org/wiki/ALU" target="_blank">Computer Arithmetic</a></div>
		<div class="det"><a href="https://en.wikipedia.org/wiki/Boolean_algebra" target="_blank">Boolean Algebra</a></div>
		<div class="det"><a href="computer_courses.html#algo">Algorithm</a></div>
		<div class="det"><a href="computer_courses.html#data">Data Structures</a></div>
		</div>
		<div class="box">
		<div class="det"><a href="#compiler">Compiler Design</a></div>
		<div class="det"><a href="#os">OS</a></div>
		<div class="det"><a href="#coaa">Computer Organization & Architecture</a></div>
		<div class="det"><a href="https://en.wikipedia.org/wiki/IPv4" target="_blank">IPv4 / IPv6</a></div>
		<div class="det"><a href="#cn">Computer Networks</a></div>
		<div class="det"><a href="#database">Databases</a></div>
		<div class="det"><a href="https://en.wikipedia.org/wiki/Theory_of_computation" target="_blank">Theory of Computation</a></div>
		</div>
		<div class="box">
		<div class="det"><a href="#math">Discrete Mathematics</a></div>
		<div class="det"><a href="#math">Calculus</a></div>
		<div class="det"><a href="#math">Linear Algebra</a></div>
		<div class="det"><a href="#math">Trigonometry</a></div>
		<div class="det"><a href="#math">Integration</a></div>
		<div class="det"><a href="#math">Matrices</a></div>
		<div class="det"><a href="#math">Probability</a></div>
		<div class="det"><a href="#math">Differentiation</a></div>
		</div>
	</div>
    <div class="inbt">
		Accelerate your career with GATE programs
	</div>

	<div class="ccard">
	<center>
		<div class="ccardbox">
			<div class="dcard">
				<div class="fpart"><img src={math}/></div>
				<a href="#math"><div class="spart">2 Courses <img src={dropdown}/></div></a>
			</div>
			<div class="dcard">
				<div class="fpart"><img src={digital}/></div>
				<a href="#digital"><div class="spart">5 Courses <img src={dropdown}/></div></a>
			</div>
			<div class="dcard">
				<div class="fpart"><img src={coaa}/></div>
				<a href="#coaa"><div class="spart">3 Courses <img src={dropdown}/></div></a>
			</div>
			<div class="dcard">
				<div class="fpart"><img src={database}/></div>
				<a href="#database"><div class="spart">3 Courses <img src={dropdown}/></div></a>
			</div>
			<div class="dcard">
				<div class="fpart"><img src={data}/></div>
				<a href="computer_courses.html#data"><div class="spart">6 Courses <img src={dropdown}/></div></a>
			</div>
			<div class="dcard">
				<div class="fpart"><img src={compiler}/></div>
				<a href="#compiler"><div class="spart">2 Courses <img src={dropdown}/></div></a>
			</div>
			<div class="dcard">
				<div class="fpart"><img src={os}/></div>
				<a href="#os"><div class="spart">1 Courses <img src={dropdown}/></div></a>
			</div>
			<div class="dcard">
				<div class="fpart"><img src={cn}/></div>
				<a href="#cn"><div class="spart">3 Courses <img src={dropdown}/></div></a>
			</div>
		</div>
	</center>
	</div>


    </div>
)
}
export default Gate;