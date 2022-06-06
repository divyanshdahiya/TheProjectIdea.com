import React from "react";
import BlogCard from "./BlogCard";
import "./styles/blogs.css";

function Blogs() {
  return (
    <div className="container blogs">
      <div className="blogs-header">
        <h1>10 Web Development Project Ideas for Starters</h1>
        <p>
          A web project is a process of developing and creating a website,
          activities in a network that are aimed at defining a goal. The end
          goal here is the transfer of static and dynamic content to be
          delivered to end-users. Often, one doesn't know where to begin with in
          terms of web development projects. Here are some projects to get you
          started that will help you in the long run.
        </p>
      </div>

      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
}

export default Blogs;
