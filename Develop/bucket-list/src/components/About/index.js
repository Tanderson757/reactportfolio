import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
          I'm Terrell Anderson, a 24-year-old coder passionate about web development. Currently finishing a coding bootcamp at the University of Richmond. Excited to marry the love of my life this November. Ready to embark on a fulfilling tech career with a focus on making a positive impact. Hackathons enthusiast and always eager to learn and grow.
          </p>
          <p>I am eager for the opportunity to demonstrate my skills and potential to a company. I believe I have a lot to offer and want to showcase what I'm made of. With a passion for coding and a solid foundation in web development, I am confident in my ability to contribute meaningfully to the company's projects and objectives. I am excited to prove my worth and make a positive impact with my dedication, creativity, and determination. Give me a chance, and I'll seize the opportunity to shine and grow alongside your organization.</p>
          
        </div>
      </div>
    </section>
  );
}

export default About;