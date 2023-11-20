import React, { useState, useEffect } from "react";
import "./blogs.css";
import axios from "axios";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get(
          "https://informed-perspective.onrender.com/api/blogs/getblogs"
        );
        setBlogs(response.data.blogs);
      } catch (err) {
        console.log(err);
      }
    };

    getBlogs();
  }, []);

  return (
    <section className="blogs">
      <p className="blogs-p">My Blogs</p>
      <div className="blogs-container">
        {blogs.map((blog, index) => (
          <div className="blog-item" key={index}>
            <img src={blog.image} alt={blog.name} className="blog-image" />
            <div className="blog-info">
              <p className="blog-name">{blog.name}</p>
              <p className="blog-description">{blog.description}</p>
              <p className="blog-description">{blog.link}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
