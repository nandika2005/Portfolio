import React from "react";
import "./App.css";
const App=()=>{
return (
  <div>
  <header>
    <nav>
      <ul>
        <li><a href="port.html">Home</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#exp">Experience</a></li>
      </ul>
    </nav>
  </header>
  
  <div className="sect">
    <section className="sect1">
      <div className="sdiv1">
        <h1 style={{ fontFamily: "Franklin Gothic Medium", fontSize: "60px" }}>Hello</h1>
        <h1 style={{ fontFamily: "cursive", fontSize: "50px" }}>I'm Nandika</h1>
        <h2 style={{ fontFamily: "Verdana", fontSize: "20px" }}>I'm a MERN Stack developer</h2>
        <button className="btn">Hire Me</button>
        <button className="btn">Resume</button>
        <div className="log">
          <ul>
            <li>
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.PisgvQ7qnar--dmr6mCDUQHaHa&pid=Api&P=0&h=180"
                onClick={() => window.location.href = 'https://github.com/nandika2005'}
                style={{ cursor: "pointer" }}
                alt="GitHub"
              />
            </li>
            <li>
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/557/425/original/google-mail-icon-logo-isolated-on-transparent-background-free-vector.jpg"
                onClick={() => window.location.href = 'https://mail.google.com/mail/u/0/#inbox'}
                style={{ cursor: "pointer" }}
                alt="Gmail"
              />
            </li>
            <li>
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.J6hlqnDOmVKnv4Js2TmlCgHaHa&pid=Api&P=0&h=180"
                onClick={() => window.location.href = 'www.linkedin.com/in/nandika-m-86502525b'}
                style={{ cursor: "pointer" }}
                alt="LinkedIn"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
    
    <section className="sect2">
      <div className="sdiv2">
        <img src="./profiletra.png" alt="Profile" />
      </div>
    </section>
  </div>
  
  <hr style={{ color: "aliceblue" }} />
  
  <section id="Skills">
    <h1 style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "xx-large" }}>
      Hi all, Explore my Skills!
    </h1>
    <div className="grid-container">
      {[
                { name: "HTML", logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
                { name: "CSS", logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
                { name: "JavaScript", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
                { name: "React", logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
                { name: "Node.js", logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
                { name: "Express.js", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
                { name: "SQL", logo: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png" },
                { name: "MongoDB", logo: "https://cdn.iconscout.com/icon/free/png-512/mongodb-5-1175140.png" },
                { name: "Java", logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
                { name: "VS Code", logo: "https://tse2.mm.bing.net/th?id=OIP.PEsu4Jw9kb-jeGjGCYlppwHaHa&pid=Api&P=0&h=180" },
                { name: "Git", logo: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png" },
                { name: "GitHub", logo: "https://cdn-icons-png.flaticon.com/512/733/733609.png" },
        
      ].map((skill, index) => (
        <div className="grid-item" key={index}>
          <img src={skill.logo} alt={skill.name} />
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  </section>
  
  <hr style={{ color: "aliceblue" }} />
  
  <section id="Projects">
    <h1>Explore my Projects!</h1>
    <div className="sd1">
      <center><h2 style={{ fontFamily: "cursive" }}>Todo List</h2></center>
      <p style={{ fontFamily: "Times New Roman", fontSize: "larger" }}>
      A To-Do List project using React (frontend) and Node.js + Express + MongoDB (backend) allows users to add, 
            update, delete, and view tasks. The frontend sends API requests to the backend, which handles CRUD operations 
            on a MongoDB database. When a user adds a task, it is stored in MongoDB; when they edit or delete, the frontend sends a request
             to update/delete that task in the database.
      </p>
    </div>
    <div className="sd2">
      <center><h2 style={{ fontFamily: "cursive" }}>Word Search Game</h2></center>
      <p style={{ fontFamily: "Times New Roman", fontSize: "larger" }}>
      A Word Search Game using HTML, CSS, and JavaScript displays a grid where players find hidden words from a given list. A timer adds challenge, and words can be highlighted using mouse or touch events. The game checks if selected words match the list and updates progress dynamically. 
                The grid is generated dynamically, ensuring a fresh puzzle each time!
      </p>
    </div>
    <div className="sd3">
      <center><h2 style={{ fontFamily: "cursive" }}>Lung Disease Prediction</h2></center>
      <p style={{ fontFamily: "Times New Roman", fontSize: "larger" }}>
      Developed a CNN for early lung disease diagnosis using the NIH Chest X-ray
                Dataset, achieving high diagnostic accuracy
      </p>
    </div>
  </section>
  
  <hr style={{ color: "aliceblue" }} />
  
  <section id="exp">
    <div className="ed1">
      <center><h1 style={{ fontFamily: "Times New Roman" }}>Working experience</h1></center>
      <div className="ed11">
        <center><h2 style={{ fontFamily: "cursive", fontSize: "x-large" }}>
          Software development intern - Innovate Intern
        </h2></center>
        <h3 style={{ fontFamily: "sans-serif" }}>August 2024 - September 2024</h3>
        <p style={{ fontFamily: "Times New Roman", fontSize: "larger" }}>
        Developed a lung disease prediction model utilizing advanced machine learning techniques, significantly improving
                diagnostic accuracy and speed.
        </p>
      </div>
    </div>
    <div className="ed23">
  <div className="ed2" style={{ color: "black" }}>
    <center><h1 style={{ fontFamily: "cursive" }}>Problems solved</h1></center>
    <div className="ed21">
      <h2>Leetcode</h2>
      <br />
      <p style={{ fontSize: "larger" }}>
        Solved 160 programs and secured a 50 days challenge badge
      </p>
      <img src="/image.png" alt="Leetcode progress" />
    </div>
  </div>
  
  <div className="ed3" style={{ color: "black" }}>
    <center><h1 style={{ fontFamily: "cursive" }}>Problems solved</h1></center>
    <div className="ed31">
      <h2>Skillrack</h2>
      <br />
      <p style={{ fontSize: "larger" }}>Solved 750+ problems</p>
    </div>
  </div>
</div>
 </section>
</div>
);
}
export default App;