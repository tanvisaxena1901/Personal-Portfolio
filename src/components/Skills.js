/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import ChangingProgressProvider from "./ChangingProgressProvider"
import 'react-circular-progressbar/dist/styles.css';


function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="skill mt-5" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p className='justify-content'>Driven by a desire to gain technical and industrial knowledge, I am always open to learning and contributing to the community through innovation and hard work. 
                My proficiency lies in the C++ and Python programming language, and I possess a deep understanding of Data Structures and Algorithms. Additionally, 
                I have developed projects using the MERN stack and Machine Learning.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {/* Java */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 80]}>
                  {percentage => (
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      background
                      backgroundPadding={20}
                      styles={buildStyles({
                        backgroundColor: "#151515",
                        textColor: "#fff",
                        textSize: '0.8rem',
                        pathColor: "#863494",
                        trailColor: "transparent",
                        pathTransitionDuration: 1
                      })} />)}
                  </ChangingProgressProvider>
                  <h5>C++</h5>
                </div>

                {/* ReactJs */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 50]}>
                  {percentage => (
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      background
                      backgroundPadding={20}
                      styles={buildStyles({
                        backgroundColor: "#151515",
                        textColor: "#fff",
                        textSize: '0.8rem',
                        pathColor: "#863494",
                        trailColor: "transparent",
                        pathTransitionDuration: 1
                      })} />)}
                  </ChangingProgressProvider>
                  <h5>ReactJs</h5>
                </div>

                {/* HTML */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 70]}>
                  {percentage => (
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      background
                      backgroundPadding={20}
                      styles={buildStyles({
                        backgroundColor: "#151515",
                        textColor: "#fff",
                        textSize: '0.8rem',
                        pathColor: "#863494",
                        trailColor: "transparent",
                        pathTransitionDuration: 1
                      })} />)}
                  </ChangingProgressProvider>
                  <h5>HTML</h5>
                </div>

                {/* Css */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 60]}>
                  {percentage => (
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      background
                      backgroundPadding={20}
                      styles={buildStyles({
                        backgroundColor: "#151515",
                        textColor: "#fff",
                        textSize: '0.8rem',
                        pathColor: "#863494",
                        trailColor: "transparent",
                        pathTransitionDuration: 1
                      })} />)}
                  </ChangingProgressProvider>
                  <h5>CSS</h5>
                </div>
                
                {/* Javascript */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 60]}>
                  {percentage => (
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      background
                      backgroundPadding={20}
                      styles={buildStyles({
                        backgroundColor: "#151515",
                        textColor: "#fff",
                        textSize: '0.8rem',
                        pathColor: "#863494",
                        trailColor: "transparent",
                        pathTransitionDuration: 1
                      })} />)}
                  </ChangingProgressProvider>
                  <h5>Javascript</h5>
                </div>

                {/* Node */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 50]}>
                  {percentage => (
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      background
                      backgroundPadding={20}
                      styles={buildStyles({
                        backgroundColor: "#151515",
                        textColor: "#fff",
                        textSize: '0.8rem',
                        pathColor: "#863494",
                        trailColor: "transparent",
                        pathTransitionDuration: 1
                      })} />)}
                  </ChangingProgressProvider>
                  <h5>Node Js</h5>
                </div>

                {/* ExpressJs */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 50]}>
                  {percentage => (
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      background
                      backgroundPadding={20}
                      styles={buildStyles({
                        backgroundColor: "#151515",
                        textColor: "#fff",
                        textSize: '0.8rem',
                        pathColor: "#863494",
                        trailColor: "transparent",
                        pathTransitionDuration: 1
                      })} />)}
                  </ChangingProgressProvider>
                  <h5>ExpressJs</h5>
                </div>

                {/* MongoDB */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 70]}>
                  {percentage => (
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      background
                      backgroundPadding={20}
                      styles={buildStyles({
                        backgroundColor: "#151515",
                        textColor: "#fff",
                        textSize: '0.8rem',
                        pathColor: "#863494",
                        trailColor: "transparent",
                        pathTransitionDuration: 1
                      })} />)}
                  </ChangingProgressProvider>
                  <h5>Python</h5>
                </div>
                    {/* ReactJs */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 50]}>
                  {percentage => (
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      background
                      backgroundPadding={20}
                      styles={buildStyles({
                        backgroundColor: "#151515",
                        textColor: "#fff",
                        textSize: '0.8rem',
                        pathColor: "#863494",
                        trailColor: "transparent",
                        pathTransitionDuration: 1
                      })} />)}
                  </ChangingProgressProvider>
                  <h5>Machine Learning</h5>
                </div>
                {/* Git and Github */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 70]}>
                  {percentage => (
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      background
                      backgroundPadding={20}
                      styles={buildStyles({
                        backgroundColor: "#151515",
                        textColor: "#fff",
                        textSize: '0.8rem',
                        pathColor: "#863494",
                        trailColor: "transparent",
                        pathTransitionDuration: 1
                      })} />)}
                  </ChangingProgressProvider>
                  <h5>Git and Github</h5>
                </div>

              </Carousel>
            </div> 
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}

export default Skills;
