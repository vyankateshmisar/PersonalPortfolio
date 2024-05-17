// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo3.png";
import logo from "./assets/logo3.png";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import python from "./assets/techstack/python.png";
import pytorch from "./assets/techstack/pytorch.png";
import tf from "./assets/techstack/tensorflow.png";

import java from "./assets/techstack/java.png";
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import mysql from "./assets/techstack/mysql.png";
import django from "./assets/techstack/django.png";
import aws from "./assets/techstack/aws.png";


// Project Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Vyankatesh Misar",
  tagline: "I am a Software Developer and a ML Enthusiast ",
  img: profile,
  about: `Hi, I am Vyankatesh! I am a problem solver and fast pace learner. Currently seeking full time Software Engineering Positions starting from June 2024 to augment my abilities and acquire new technologies.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/vyankateshmisar/",
  github: "https://github.com/vyankateshmisar",
  twitter: "https://twitter.com/VyankateshMisar",
  leetcode:"https://leetcode.com/u/vyankateshmisar/"
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Machine Learning Intern",
    Company: `University of Florida - Norman Fixel Institute for Neurological Disorders`,
    Location: "Gainesville, FL",
    Type: "Internship",
    Duration: "April 2023 - Present",
        // Description:""

  },
  {
    Position: "Web Developer Intern",
    Company: `University of Florida - Center for Undergraduate Research`,
    Location: "Gainesville, FL",
    Type: "Internship",
    Duration: "January 2023 - April 2023",
        // Description:""

  },
  {
    Position: "Software Developer Intern",
    Company: `Hummingbird Web Solutions Pvt. Ltd.`,
    Location: "Pune, India",
    Type: "Internship",
    Duration: "January 2022 - May 2022",
        // Description:""

  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "University of Florida",
    Company: "Master of Science, Computer Science",
    Location: "Gainesville, FL",
    Duration: "August 2022 - May 2024",
        // Description:""

  },
  {
    Position: "Savitribai Phule Pune University",
    Company: `Bachelor of Engineering, Computer Engineering with Honors in Data Science`,
    Location: "Pune, India",
    Duration: "August 2018 - May 2022",
        // Description:""
      },
];

// Tech Stack and Tools
export const techStackDetails = {
  pytorch:pytorch,
  aws:aws,
  mysql:mysql,
  django,django,
  java:java,
  python:python,
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  bootstrap: bootstrap,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  tf:tf,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Advanced Handwritten Digit Generation with GANs and VAEs",
    image: projectImage1,
    description: `Implemented Generative Adversarial Networks and Variational Autoencoders for handwritten digit generation on the MNIST
    dataset, leading to an impressive 98% improvement in accuracy compared to baseline models. Meticulously fine-tuned hyperparameters and mod`,
    techstack: "Pytorch, Python, TensorFlow, OpenCV",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Chord - Peer to Peer System and Simulation",
    image: projectImage2,
    description: `Remodeled the Chord protocol using the akka actor framework to create parallelism and fault tolerance, with each peer
    modeled as a separate actor and administered networks of up to 10,000 nodes. Assessed large networks, tested the system’s resiliency, mainta`,
    techstack: "Erlang",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Twitter Simulator",
    image: projectImage3,
    description: `Developed a scalable Twitter clone engine, Implemented frontend functionalities using React.js for dynamic user interfaces,
    while leveraging Node.js for backend services, enabling seamless user interactions and real-time updates. Implemented a WebSocket interface with a JSON-based API and support for public key-based authentication using Diffie-Helman protocol for the secret key with 256-bit elliptic curve public keys support.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Dynamic Collaboration Platform",
    image: projectImage4,
    description: `Employed technologies such as Operational Transformation (OT) algorithm or Conflict-free Replicated Data Types (CRDTs)
    for conflict resolution and consistency maintenance. Implemented WebRTC for real-time communication between clients and a distributed backend system for handling document
    synchronization and version control.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Smart Campus Library System",
    image: projectImage5,
    description: `Developed a Web application for a smart library management system, and applied a collaborative filtering recommendation algorithm for a better, augmented with JavaScript for dynamic front-end functionality. Used Django and React to create dynamic and responsive UI components, enhancing user experience and engagement. Boosted the response and turnaround duration by 50%.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },

  {
    title: "Gossip Simulator",
    image: projectImage6,
    description: `Supervised an Erlang Actor Model for Gossip and Push-Sum protocols for Full, Line, 2D, and Imperfect 3D topologies. Attained a convergence time of 15 milliseconds for 20000 nodes.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "misarvyankatesh@gmail.com",
  phone: "+1 (352) 721-1370",
};
