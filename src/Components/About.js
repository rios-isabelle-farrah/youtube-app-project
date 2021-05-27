import React from "react";

const About = () => {
  return (
    <main>
      <section className="green-top">
        <div className="green-header-left"></div>{" "}
        <h1 className="green-team">OUR TEAM</h1>
        <div className="green-header-right"></div>
      </section>
      <ul className="the-team">
        <li className="bios">
          <img
            className="bio-icon"
            alt="youtube logo"
            height="80px"
            width="110px"
            src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png"
          ></img>
          <div className="right-bio-text">
            {" "}
            <p className="nameTitle-D">Durdona Djalilova </p>
            <p className="bio">
              As a selected Fellow at Pursuit, an intensive 12-month software
              engineering fellowship with a 9% acceptance rate, I am a Full
              Stack Web Developer. I was hooked after creating my first text
              based adventure game using Javascript. <br></br>
              <br></br>With a passion for helping others, my goal is to apply my
              skills to develop software programs that are accessible and
              user-friendly. I want to help people enjoy their life rather than
              struggle with a software for hours and get stressed about it. This
              is a start of a new path for me where I can thrive and help others
              thrive as well.
            </p>
            <p className="github">
              Github:{" "}
              <a href="https://github.com/durdonadjalilova">
                https://github.com/durdonadjalilova
              </a>{" "}
            </p>
          </div>
        </li>

        <li className="bios">
          <img
            className="bio-icon"
            alt="youtube logo"
            height="80px"
            width="110px"
            src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png"
          ></img>
          <div className="right-bio-text">
            {" "}
            <p className="nameTitle-F">Farrah Rios </p>
            <p className="bio">
              My love for problem-solving has led me on path as a software web
              developer. As a selected Fellow at Pursuit, an intensive 12-month
              software engineering fellowship with a 9% acceptance rate, I am
              currently honing my skills as a coder.
              <br></br>
              <br></br>I am passionate about special education advocacy and
              accessibility of information and technology. As a mother to a
              brilliant child on the autism spectrum, augmentative and
              alternative communication (AAC) devices are a huge part of my
              daily life and I want to use this experience to contribute to the
              creation of more inclusive assistive technology that meet the
              communication needs of children and adults of all backgrounds.
            </p>
            <p className="github">
              Github:{" "}
              <a href="https://github.com/rios-isabelle-farrah">
                https://github.com/rios-isabelle-farrah
              </a>
            </p>
          </div>
        </li>

        <li className="bios">
          <img

          className="bio-icon"  
          alt="youtube logo"
            height="80px"
            width="110px"
            src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png"
          ></img>
          <div className="right-bio-text">
            <p className="nameTitle-V">Vanessa Watson </p>
            <p className="bio">
              My passion lies in creating luxurious systems that greatly improve
              the user's experience.<br></br>
              <br></br>As a multi-hyphenate, I strive to concatenate my growing
              knowledge as a software engineer with my expertise in garment
              construction and supply chain management. My work with and for
              historically, underrepresented populations informs my approach to
              accessibility. Coupled with a keen understanding of design
              thinking, this nuanced perspective shepherds innovative products
              that augment equity and champion sustainability.
            </p>
            <p className="github">
              Github:{" "}
              <a href="https://github.com/vrwatson">
                https://github.com/vrwatson
              </a>
            </p>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default About;
