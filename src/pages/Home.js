import React from "react";
import "../styles/home.css";
import Layout from "../Components/Layout";
import { Button } from "semantic-ui-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Student", "ML Enthusiast", "Artist", "Chutiya"],
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
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <hr></hr>
        <h2 className="font-style-header">Experience</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <hr></hr>
        <h2 className="font-style-header">Resume</h2>
        <Button as={Link} to="/resume" color="purple">
          View
        </Button>
        <hr></hr>
        <h2 className="font-style-header">Lets Connect</h2>
        <hr></hr>
      </div>
    </Layout>
  );
};

export default Home;
