import React from 'react';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import about2 from './assets/img/About/About2.jpg';


const TeamMember = () => {
  return (
    <div className="TeamMember-container"><br/><br/><br/><br/><br/>
      <div className="TeamMember-content">
        <div className="TeamMember-image-container">
          <img 
            src={about2} 
            alt="image" 
            className="TeamMember-image"
          />
          <div className="TeamMember-header"><br/>
            <h1 className="TeamMember-title">Manas Agrawal</h1><br/>
            <h2 className="TeamMember-subtitle">Co-Founder</h2><br/>
         </div>
        </div>
        <div className="TeamMember-text">
          <p className="TeamMember-paragraph">
          Manas Agrawal, Co-Founder and Director of Sales at CodePlayers, is pivotal in driving the company's success. He is responsible for devising and executing sales strategies that align with the company's overall business goals. This includes conducting thorough market research to identify emerging trends and opportunities, developing strategic sales plans, and setting ambitious yet achievable sales targets. Building and maintaining strong relationships with key clients and partners is also central to his role, which is essential for sustained business growth.
          </p>
          <p className="TeamMember-paragraph">
          In his management of the sales department, Manas provides comprehensive training and support to his team, fostering a collaborative and results-driven culture. He uses data analytics to track performance metrics, assess team performance, and implement necessary improvements. His leadership ensures that the sales team is motivated, well-equipped, and aligned with the company’s vision, contributing to the overall success of the department.
          </p>
          <p className="TeamMember-paragraph">
          Under Manas's leadership, CodePlayers has experienced significant revenue growth and market expansion. He has secured major contracts with high-profile clients, successfully entered new markets, and achieved record sales figures.
          </p>
          <p className="TeamMember-paragraph">
          As a co-founder, Manas has been instrumental in shaping CodePlayers' culture and values. His contributions extend beyond sales to key decision-making processes that guide the company through various growth stages and adaptations. His vision and strategic thinking have been crucial in navigating challenges and seizing opportunities, ensuring CodePlayers remains competitive and forward-thinking. Manas's impact on the company is profound, with his leadership in sales and entrepreneurial spirit driving ongoing growth and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember ;