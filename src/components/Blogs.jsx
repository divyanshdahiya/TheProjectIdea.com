import React from "react";
import "./styles/blogs.css";

function Blogs() {
  return (
    <div className="container blogs">
      <div className="blogs-header">
        <h1>10 Web Development Project Ideas for Starters</h1>
        <img className="blogs-image" src="../blogs.png" alt="Logo" />

        <p>
          A web project is a process of developing and creating a website,
          activities in a network that are aimed at defining a goal. The end
          goal here is the transfer of static and dynamic content to be
          delivered to end-users. Often, one doesn't know where to begin with in
          terms of web development projects. Here are some projects to get you
          started that will help you in the long run.
        </p>
      </div>

      <div className="blog-card">
        <h2>1. Third-party API</h2>
        <p>
          Create a site that consumes a third-party API. Almost every company
          you work for is going to consume an API, whether it's a web or library
          API, they are going to consume an API from somewhere and you can
          integrate it. This is a great skill set to have. You do not need to
          build a complex backend since the API you are using takes care of that
          for you.
        </p>
      </div>

      <div className="blog-card">
        <h2>2. Brochure Site</h2>
        <p>
          This can be a landing page, an artist page. Usually, it's a site that
          showcases a business or a contact page. You can build this for an
          existing business. This site is to show an appealing, high converting
          landing page. The key is to make it look visually pleasing. You can
          work for companies that need a landing page. This is a great secondary
          skill that one can possess.
        </p>
      </div>

      <div className="blog-card">
        <h2>3. E-Commerce Solutions</h2>
        <p>
          Here you can create the backend of an e-commerce website. Set-up
          payments, the library of products that need to be sold, inventory,
          etc. All you need is the basic interface of a shop on the front end.
          You can complete this in a week itself. If you are interested in this
          and want to take this a step further, you can go all the way into user
          authentication. Make a complex inventory system or a shopping cart
          system. By creating a secure website, processing payments, etc. you
          are communicating a lot about your skill sets.
        </p>
      </div>

      <div className="blog-card">
        <h2>4. Build your Portfolio Website</h2>
        <p>
          This is a place where you can showcase all your projects. This can be
          a central place where you house your entire portfolio. While building
          this, you can choose to showcase your creative side and keep things
          professional if you want to share it with a potential client. Make
          sure you spend a lot of time on the front end of your portfolio and
          make it look appealing.
        </p>
      </div>

      <div className="blog-card">
        <h2>5. Create a Game</h2>
        <p>
          Create a really small or simple game. For eg chess. Try to make a game
          where the rules are already defined. Build upon the rules of the game.
          A great suggestion is to make it a multiplayer game as this allows you
          to work on your front end and back end skills. Having a fully
          built-out game like chess available online looks impressive to an
          employer. This also displays a skill set of how you can polish your
          game development skills. The cool part about this is that you can make
          a game and then add more definition to it gradually.
        </p>
      </div>

      <div className="blog-card">
        <h2>6. To-do List</h2>
        <p>
          This is standard. You can customize and add more functionalities as
          you please. Add items, dates, and more. An extremely simple and widely
          used project.
        </p>
      </div>

      <div className="blog-card">
        <h2>7. Charting Dashboards</h2>
        <p>
          This can be an admin page that gives you details about logged-in
          users, purchases, essentially, visual data that brings data to life.
          Most of the time when you work at a company, businesses will want
          visual charts to represent data as they are non-technical and easy to
          understand. You can use any charting library to perform this function.
          There are several APIs out there to find a data source.
        </p>
      </div>

      <div className="blog-card">
        <h2>8. Restaurant Website</h2>
        <p>
          This includes using your foundations in HTML and CSS to create a
          stunning web page for a restaurant. The task will be to align the
          various food items and beverages using a CSS layout grid. Along with
          this, adding pricing features, photos of the food items to beautify
          it, a combination of colors, font, etc. can be added. Internal linking
          of pages is also advised to gain better traction.
        </p>
      </div>

      <div className="blog-card">
        <h2>9. Tribute Page</h2>
        <p>
          This requires knowledge of CSS and HTML. All you need to do is create
          a webpage, add an image of the person you are giving a tribute and
          create a small write-up. Paragraphs, links, lists, photos with CSS can
          be added to this. Make sure the font is uniform and add a background
          color to your web page.
        </p>
      </div>

      <div className="blog-card">
        <h2>10. Drawing Tool</h2>
        <p>
          This can be done using MS-Paint. HTML, CSS, and JS can be used to
          build this app. A mouse can be used to draw. Key features in this
          include color change, size of drawing tool, reset canvas, and erase.
          Furthermore, you can let users share their work on social media
          platforms as well.
        </p>
      </div>
    </div>
  );
}

export default Blogs;
