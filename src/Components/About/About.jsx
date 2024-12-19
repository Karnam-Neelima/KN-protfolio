import React from 'react'
import './About.css'
// import ...... from '..............'
// import ...... from '..............'


const About = () => {
  return (
    <div id="about">
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
            <div className="about-sections">
               <div className="about-left">
               </div>
                <div className="about-right">
                  <div className="about-para">
                     <p>I,m Neelima Karnam, Now i'm trained as Neo Technology as a Trainee Role</p>
                     <p>I specialize in Basic Python, and SQL, and I also have experience in web development. This website is one of React project, built using React JS with Styled-components..</p>
                  </div>
                  <div className='skills'>
                  <h1>Skills</h1>
                  </div>
               <div className="about-skills">
                 <div className='about-skill'><p>HTML & CSS</p><hr  style={{width:"90%"}}/></div>
                 <div className='about-skill'><p>Javascript</p><hr  style={{width:"60%"}}/></div>
                 <div className='about-skill'><p>React JS</p><hr  style={{width:"40%"}}/></div>
                 <div className='about-skill'><p>SQL</p><hr  style={{width:"80%"}}/></div>
                 <div className='about-skill'><p>Basic Python</p><hr  style={{width:"30%"}}/></div>
                </div>
            </div>
        </div>

        <div className="about-achievements">
          <div className="about-achievement">
            <h1>3</h1>
            <p>Projects Completed</p>
          </div> 
          <hr />
          <div className="about-achievement">
            <h1>Trainee Role</h1>
            <p>Neo Technology</p>
          </div> 
        </div>
      </div>
    </div>

  )
}

export default About