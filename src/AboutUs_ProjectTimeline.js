// ProjectTimeline.js
import React from 'react';

const ProjectTimeline = () => {
  return (
    <section id="project-timeline" className="project-timeline section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Project Timeline and Milestones</h2>
      </div>
      <div className="container" data-aos="fade-up">
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">1</div>
            <div className="timeline-content">
              <h4>Needs Assessment and Solution Design</h4>
              <p>The project team spent the first two months of the engagement thoroughly understanding the client's requirements and designing the ERP solution to meet their specific needs.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">2</div>
            <div className="timeline-content">
              <h4>Data Migration and Integration</h4>
              <p>The data migration and integration with the client's legacy systems was a critical phase that took an additional three months to complete, ensuring the accuracy and reliability of the data in the new ERP system.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">3</div>
            <div className="timeline-content">
              <h4>Software Implementation and Configuration</h4>
              <p>The installation and configuration of the ERP software took approximately four months, during which the team worked closely with the client to ensure a seamless implementation process.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">4</div>
            <div className="timeline-content">
              <h4>User Training and Go-Live</h4>
              <p>The final phase of the project involved comprehensive user training and the official go-live of the ERP system, which took approximately one month to complete.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;


