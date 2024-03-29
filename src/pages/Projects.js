import React from "react";
import "../styles/project.css";
import Layout from "../Components/Layout";
import ProjectCard from "../Components/ProjectCard";
import { useTitle } from "../Components/Title";

const Projects = () => {
  useTitle("Projects");

  return (
    <Layout>
      <div>
        <h1 className="font-style-header-project">Projects</h1>
        <h4>Hover to get more information.</h4>
        <ProjectCard
          project_name={"Car Damage Detection"}
          project_stack={
            "Deep Learning | Tensorflow | Computer Vision | ML | NumPy"
          }
          project_detail={
            <ul style={{ "list-style-type": "square" }}>
              <li className="project-list ">
                A machine learning model that detects a type of damage in a
                given car image.
              </li>
              <li className="project-list ">
                Collected and annotated 2000+ car images into 5 different
                labels.
              </li>
              <li className="project-list ">
                Used Transfer learning to train the model. The output is an
                image with B-boxes around the damaged area.
              </li>
              <li className="project-list ">
                Deployed the model using flask Api.
              </li>
            </ul>
          }
          project_link={"https://github.com/RahulGupta77/Car-damage-detection"}
          project_back={
            "https://ik.imagekit.io/7afoxixmmnqf/Portfolio_Rahul/project-car_DIy_eyJ59x.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674909381491"
          }
        />
        <ProjectCard
          project_name={"Movie Recommendation system"}
          project_stack={"Python | NLP | ML | Pickle"}
          project_detail={
            <ul style={{ "list-style-type": "square" }}>
              <li className="project-list ">
                A ML model which is based on Content based filtering.
              </li>
              <li className="project-list ">
                It uses similarities in a movie such as movie genres, tags,
                cast,etc as well as information provided by user to make
                Recommendations.
              </li>
              <li className="project-list ">
                Applied cosine similarity technique to find out co-relations
                between the movies. Used The Movie Dataset (TMDB) Api to fetch
                movie posters.
              </li>
            </ul>
          }
          project_back={
            "https://ik.imagekit.io/7afoxixmmnqf/Portfolio_Rahul/project-movie_QtEYsbVMh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674909381510"
          }
          project_link={
            "https://github.com/RahulGupta77/Movie-Recommender-System"
          }
        />
        <ProjectCard
          project_name={"Carbon FP"}
          project_stack={"Machine Learning | HTML | CSS | Javascript"}
          project_detail={
            <ul style={{ "list-style-type": "square" }}>
              <li className="project-list ">
                The Goal of the project was to calculate CO2 emissions by a
                vehicle.
              </li>
              <li className="project-list ">
                To calculate carbon emission the features used were Engine size,
                number of cylinders in a vehicle, Fuel consumption in city
                roads.
              </li>
              <li className="project-list ">
                To calculate carbon footprints the features used were
                Consumption of Electricity, gas and oils, Yearly mileage of car,
                etc.
              </li>
            </ul>
          }
          project_back={
            "https://ik.imagekit.io/7afoxixmmnqf/Portfolio_Rahul/project-co2_tl_rAOd0Yr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674909381532"
          }
          project_link={"https://github.com/tenserebel/CO2-emission"}
        />
        <ProjectCard
          project_name={"Image Caption Generator"}
          project_stack={
            "Image Processing | Tensorflow | Computer Vision | LSTM | NLP"
          }
          project_detail={
            <ul style={{ "list-style-type": "square" }}>
              <li className="project-list ">
                It envolves preprocessing 2d-images and text data.
              </li>
              <li className="project-list ">
                It will generate captions based on given image.
              </li>
              <li className="project-list ">
                It uses Transfer learning for feature extraction and will be
                combining CNN's and LSTM to train 8k images and 40k Captions.
              </li>
            </ul>
          }
          project_back={
            "https://ik.imagekit.io/7afoxixmmnqf/Portfolio_Rahul/project-image_nMq9I-mZq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674909381495"
          }
          project_link={
            "https://github.com/RahulGupta77/Image-Caption-Generator"
          }
        />
        <ProjectCard
          project_name={"Iris Dataset"}
          project_stack={"Scikit-learn | Matplotlib | Pandas | Numpy | Seaborn"}
          project_detail={
            <ul style={{ "list-style-type": "square" }}>
              <li className="project-list ">
                Algorithm used in the project is Stochastic Gradient Descent
                Regressor.
              </li>
              <li className="project-list ">
                In this problem statement, Feature was "Sepal length" and had to
                calculate "Sepal width" which is a continuous number.
              </li>
              <li className="project-list ">
                Results: Mean absolute error = 39%, Mean squared error = 21% ,
                Root mean squared error = 46%
              </li>
            </ul>
          }
          project_back={
            "https://ik.imagekit.io/7afoxixmmnqf/Portfolio_Rahul/project-iris_13hQRr5ZFV.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674909381833"
          }
          project_link={"https://github.com/RahulGupta77/Iris_dataset"}
        />
        <ProjectCard
          project_name={"Edge detection"}
          project_stack={"OpenCV | Numpy | Streamlit | Pillow "}
          project_detail={
            <ul style={{ "list-style-type": "square" }}>
              <li className="project-list ">
                There were two types of algorithm used in the project.
              </li>
              <li className="project-list ">
                Types of Edge detection implemented are Sobel Edge detection and
                Canny Edge detection.
              </li>
              <li className="project-list ">
                Created a webapp using streamlit a python library for webapps.
              </li>
              <li className="project-list ">
                Used opencv and pillow(PIL Python Imaging Library) for image
                processing.
              </li>
            </ul>
          }
          project_back={
            "https://ik.imagekit.io/7afoxixmmnqf/Portfolio_Rahul/project-edge_SDAJGD6s6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674909381589"
          }
          project_link={"https://github.com/RahulGupta77/Edge_detection"}
        />
      </div>
    </Layout>
  );
};

export default Projects;
