import React from "react";
import Layout from "../Components/Layout";
import { useTitle } from "../Components/Title";
import "../styles/resume.css";
import resume from "./rahul.pdf";

const Resume = () => {
  useTitle("Resume");

  return (
    <Layout>
      <h1 className="heading-text">Resume</h1>

      <div>
        <iframe src={resume} title="description" className="area">
          <p>
            Alternative text - include a link <a href="prem.pdf">to the PDF!</a>
          </p>
        </iframe>
      </div>
    </Layout>
  );
};

export default Resume;
