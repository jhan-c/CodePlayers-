import React from 'react';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import about4 from './assets/img/About/About4.jpg';


const TeamMember = () => {
  return (
    <div className="TeamMember-container"><br/><br/><br/><br/><br/>
      <div className="TeamMember-content">
        <div className="TeamMember-image-container">
          <img 
            src={about4} 
            alt="image" 
            className="TeamMember-image"
          />
          <div className="TeamMember-header"><br/>
            <h1 className="TeamMember-title">Harshit Goel</h1><br/>
            <h2 className="TeamMember-subtitle">B-Tech (Computer Science)</h2><br/>
          </div>
        </div>
        <div className="TeamMember-text">
          <p className="TeamMember-paragraph">
          Harshit Goel is a skilled application development consultant at CodePlayers, holding a B-Tech degree in Computer Science. He excels in designing, developing, and implementing software applications, leveraging his knowledge of programming languages and development frameworks to enhance ERP systems' efficiency and functionality. Harshit collaborates with cross-functional teams to create user-friendly, scalable applications that meet industry standards
          </p>
          <p className="TeamMember-paragraph">
          His strong background in Computer Science provides him with a deep understanding of algorithms, data structures, and software engineering principles. Harshit has led multiple projects, solving complex technical problems and delivering high-quality software solutions. His ability to communicate effectively with both technical and non-technical stakeholders ensures clear understanding and fulfillment of project requirements.
          </p>
          <p className="TeamMember-paragraph">
          Harshit’s innovative approach and commitment to excellence have led to the successful deployment of reliable and user-centric ERP solutions, earning him recognition within CodePlayers and from clients. Passionate about technology and continuous learning, he keeps up with the latest tech trends and enjoys coding challenges and tech meetups in his leisure time.
          </p>
          <p className="TeamMember-paragraph">
          His expertise and dedication make him a valuable asset to the CodePlayers team, driving innovation and delivering top-notch application solutions.And his commitment to excellence and his passion for technology not only drive the success of the projects he leads but also inspire those around him to strive for the highest standards in application development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember ;