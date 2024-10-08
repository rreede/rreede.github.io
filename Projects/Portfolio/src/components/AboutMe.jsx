import {Link} from 'react-router-dom'

export default function AboutMe() {
    return(
        <div className="about-me-container">
            <h1>Hi, I'm Rene, a front-end web developer located in Vilnius, Lithuania. </h1>
            <br></br>
            <p>My main skills are<strong> HTML</strong>, <strong>CSS</strong>,<strong> JavaScript,</strong> and <strong>ReactJS</strong>.</p>
            <br></br>
            <p>I also have some previous experience with <strong>PHP</strong> and <strong>MySQL</strong>.</p>
           
            

            <br></br>
            <p>My working experience includes working as an e-commerce manager, which includes doing website bug registers, localization, and working with back-end applications.</p>
            <br></br>
              <p>My relevant education experience includes attaining an applied computer science degree at Tallinn University. This included studying web development, graphic design, and sound design. Also, I have done a lot of independent studying.</p>
{ /* 

 <Link className='project-btn' to='online/index.html'><span class="material-symbols-outlined">
open_in_new


 </span>See my latest ReactJS project!<br></br> 
</Link>

*/}
             
         </div>
    )
}