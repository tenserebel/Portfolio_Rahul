import React from "react";
import "../styles/home.css";
import Layout from "../Components/Layout";
import { Button } from "semantic-ui-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import SkillImage from "../Components/SkillImage";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Student", "ML Enthusiast", "Artist"],
    loop: false,
  });

  return (
    <Layout>
      <div>
        <div className="heading-div">
          <h1 class="heading-text">
            Hello <span class="wave">👋</span>, My name is Rahul
          </h1>

          <div class="changing-text">
            <div>
              I am a <span>{text}</span>
              <Cursor cursorColor="inherit" />
            </div>
          </div>
          <img src="images/new.gif" alt="Italian Trulli" />
        </div>

        <br></br>
        <hr></hr>
        <h2 className="font-style-header">About Me</h2>
        <p className="about-me sub-text">
          Hello, my name is Rahul Gupta, and I'm an enthusiastic and committed
          student who's actively pursuing his or her interests in computer
          science and picking up new talents. I'm interested in machine learning
          and data science, and I'm now in my final semester at MIT ADT
          University. I like making digital art and I'm currently learning Java
          for enterprise level software.
        </p>
        <hr></hr>
        <h2 className="font-style-header">Experience</h2>
        <p className="about-me sub-text">
          I have had the opportunity to gain valuable work experience as a
          machine learning intern at Anytime Anywhere Healthtech Pvt. I was able
          to apply my knowledge and skills in the field of machine learning to
          solve a specific problem, which was to implement image captioning in
          3D CT scans. This experience helped me develop a deeper understanding
          of Computer Vision and Natural Language Processing (NLP) as well as
          practical problem-solving skills.
        </p>
        <hr></hr>
        <h2 className="font-style-header">Skills</h2>
        <SkillImage />
        <hr></hr>
        <h2 className="font-style-header">Resume</h2>
        <div className="resume-button">
          <Button as={Link} to="/resume" color="purple">
            View
          </Button>
        </div>
        <hr></hr>
        <h2 className="font-style-header">Lets Connect</h2>
        <div className="resume-button">
          <Button as={Link} to="/contact" color="purple">
            Contact
          </Button>
        </div>
        <hr></hr>
      </div>
    </Layout>
  );
};

export default Home;
