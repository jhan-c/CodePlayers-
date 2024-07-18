import React from 'react';
import Footer from './Footer';

import case_study1 from "./assets/img/Case_Studies/dps.jpeg"
import case_study2 from "./assets/img/Case_Studies/jt.png"
import case_study3 from "./assets/img/Case_Studies/nav.png"
import case_study4 from "./assets/img/Case_Studies/jewellary.jpg"
import case_study5 from "./assets/img/Case_Studies/HectorPipes.jpg"

const blogs = [
    {
        image: case_study1, 
        title: 'DPS Raigarh', 
        description: 'Streamlining University Administration with Infinity ERP',
        link: '/casestudy1'
    },
    {
        image: case_study2, 
        title: 'Jagadambha Trailors', 
        description: 'Enhancing Operational Efficiency at Jagadamba Trailers with Infinity ERP',
        link: '/casestudy2'
    },

    {
      image: case_study3, 
      title: 'Navdurga Group', 
      description: 'Transforming Steel Manufacturing Operations with Infinity ERP at Navdurga Group',
      link: '/casestudy3'
  },

  {
    image: case_study4, 
    title: ' Rambhagat Laxminarayan Jewelry', 
    description: 'Elevating Jewelry Manufacturing Efficiency at Rambhagat Laxminarayan Jewelry',
    link: '/casestudy4'
},

{
    image: case_study5, 
    title: 'Hector Pipes', 
    description: 'Optimizing Steel Manufacturing Operations at Hector Pipes',
    link: '/casestudy5'
},
];

const BlogPage = () => {
    return (
        <>
        <div className="blog-page">
          <br/><br/>
          <br/>
            <div className="container section-title text-center" data-aos="fade-up">
                <h2>Case Studies</h2>
                <p>Some Noteworthy Case Studies</p>
            </div>
            <div className="blogs-container">
                {blogs.map((blog, index) => (
                    <div className="blog-card" key={index}>
                        <img src={blog.image} alt={blog.title} className="blog-image" />
                        <h2 className="blog-heading">{blog.title}</h2>
                        <p className="blog-description">{blog.description}</p>
                        <a href={blog.link} className="read-more">Read More &gt;&gt;</a>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
        </>
    );
};

export default BlogPage;
