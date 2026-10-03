/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kishor Gajendhiran",
  title: "Hi all, I'm Kishor",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with Angular (frontend) and PHP Laravel (backend), focusing on responsive designs and scalable enterprise solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1oSlowVx6WTE8HWmJiMAP7qbGcOtYRWTq/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  gmail: "kishor1560145@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER PASSIONATE ABOUT BUILDING ENTERPRISE SOLUTIONS",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as AWS S3 / RESTful APIs / Laravel Backend"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pondicherry University, Pondicherry",
      subHeader: "Master of Science in Computer Science",
      duration: "November 2023 - April 2025",
      desc: "CGPA: 7.25",
      descBullets: []
    },
    {
      schoolName: "Tagore Government Arts and Science College, Pondicherry",
      subHeader: "Bachelor of Science in Computer Science",
      duration: "July 2020 - August 2023",
      desc: "CGPA: 6.06",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Thikse Software Solution",
      companylogo: require("./assets/images/thikse.png"),
      date: "June 2025 - June 2026",
      desc: "Worked as a Full Stack Developer Intern and now as a developer, contributing to the design, development, and deployment of live production websites using Angular and PHP Laravel.",
      descBullets: [
        "Actively involved in real-time enterprise projects, including HRMS and ATS.",
        "Developed responsive and mobile-friendly user interfaces with smooth animations.",
        "Implemented RESTful APIs in Laravel and integrated them with Angular applications.",
        "Integrated AWS S3 bucket for file storage and management."
      ]
    }
  ]
};

// Your Open Source Section to View Your Github Pinned Projects
// To know how to get github key look at readme.md

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE WORK I HAVE DONE",
  projects: [
    {
      image: "https://placehold.co/600x400/101010/6c63ff/png?text=Fuoday+HRMS",
      projectName: "Fuoday HRMS & ATS",
      projectDesc: "Enterprise-grade Human Resource Management System and Applicant Tracking solution developed at Thikse Software Solutions using Angular, PHP Laravel, and AWS.",
      footerLink: [
        {
          name: "Live Link",
          url: "https://areg.in"
        }
      ]
    },
    {
      image: "https://placehold.co/600x400/101010/6c63ff/png?text=Ensemble+Mart",
      projectName: "Ensemble Mart (Ecommerce)",
      projectDesc: "Full-featured e-commerce web application with product browsing, order management, and secure payment integration using PHP and MySQL.",
      footerLink: []
    },
    {
      image: "https://placehold.co/600x400/101010/6c63ff/png?text=AR+Energy",
      projectName: "AR Energy (AREG)",
      projectDesc: "A live web application for alternative fuels coal-engaged start-up, focusing on usability and clean design using Angular and Laravel.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://areg.in/"
        }
      ]
    },
    {
      image: "https://placehold.co/600x400/101010/6c63ff/png?text=Enzopik",
      projectName: "Enzopik Oil Collection Point",
      projectDesc: "Technology-driven platform to manage used cooking oil collection and tracking from food businesses, integrated with PHP and MySQL.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://enzopik.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Professional milestones.",

  achievementsCards: [
    {
      title: "Google Data Analytics",
      subtitle: "Certified by Coursera",
      image: "https://placehold.co/600x400/101010/6c63ff/png?text=Google+Analytics",
      imageAlt: "Google Logo",
      footerLink: []
    },
    {
      title: "Remote Sensing and Digital Image Analysis",
      subtitle: "Indian Institute of Remote Sensing",
      image: "https://placehold.co/600x400/101010/6c63ff/png?text=Remote+Sensing",
      imageAlt: "IIRS Remote Sensing Logo",
      footerLink: []
    },
    {
      title: "REACT.JS Certification",
      subtitle: "Certified by NoviTech",
      image: "https://placehold.co/600x400/101010/6c63ff/png?text=React+JS",
      imageAlt: "React Logo",
      footerLink: []
    },
    {
      title: "Typewriting Proficiency",
      subtitle: "Junior & Senior Grade - Tamilnadu Typewriting Institute's Association",
      image: "https://placehold.co/600x400/101010/6c63ff/png?text=Typewriting",
      imageAlt: "Typewriting Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink:
    "https://drive.google.com/file/d/1oSlowVx6WTE8HWmJiMAP7qbGcOtYRWTq/view?usp=drive_link",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7449253392",
  email_address: "kishor1560145@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
