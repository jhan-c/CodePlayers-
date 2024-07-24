import React from 'react';

import image1 from './assets/img/Blogs/blog_image1.jpg'
import image2 from './assets/img/Blogs/blog_image2.jpg'
import image3 from './assets/img/Blogs/blog_image3.jpg'
import image4 from './assets/img/Blogs/blog_image4.jpg'
import image5 from './assets/img/Blogs/blog_image5.jpg'

const blogs = [
    {
        image: image1, 
        title: 'The Future of ERP: Trends to Watch', 
        description: "Explore the latest trends in ERP, including AI integration, cloud-based solutions, user experience improvements, and industry-specific systems.",
        link: './blog1'
    },
    {
        image: image2, 
        title: 'How ERP Can Improve Your Business Efficiency', 
        description: "Learn why ERP systems are crucial for business efficiency, improved decision-making, and overall growth.",
        link: './blog2'
    },

    {
      image: image3, 
      title: 'Choosing the Right ERP System for Your Business', 
      description: "Discover the best practices for a successful ERP implementation, including goal setting, project team assembly, and effective communication.",
      link: './blog3'
  },

  {
    image: image4, 
    title: 'The Benefits of Cloud-Based ERP Systems', 
    description: "Understand how to maximize your return on investment with ERP systems through strategic planning and continuous improvement.",
    link: './blog4'
},

{
    image: image5, 
    title: 'ERP Implementation: Best Practices', 
    description: "Explore how ERP systems play a vital role in digital transformation and driving business innovation.",
    link: './blog5'
},
];

const BlogPage = () => {
    return (
        <div className="blog-page">
            <div className="container section-title text-center" data-aos="fade-up">
                <br /><br />
                <br />
                <h2>ERP Blogs</h2>
                <p>Strategies for Elevating Your Business Performance.</p>
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
    );
};

export default BlogPage;
