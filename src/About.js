import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1>About This Project</h1>
      <p>
        Welcome to Masti e-commerce app! This project is a demonstration of my
        skills in building modern web applications using <strong>React</strong>.
        While this is not a real e-commerce site, it showcases my ability to
        create a fully functional, responsive, and user-friendly web
        application.
      </p>
      <h2>Purpose</h2>
      <p>The purpose of this project is to:</p>
      <ul>
        <li>
          Showcase my proficiency in <strong>React</strong>,{" "}
          <strong>state management</strong>, and{" "}
          <strong>API integration</strong>.
        </li>
        <li>
          Demonstrate my ability to create a responsive and visually appealing
          user interface.
        </li>
        <li>
          Highlight my problem-solving skills by implementing features like user
          authentication, product filtering, and a shopping cart.
        </li>
      </ul>
      <h2>Technologies Used</h2>
      <p>This project was built using the following technologies:</p>
      <ul>
        <li>
          <strong>React</strong>: A JavaScript library for building user
          interfaces.
        </li>
        <li>
          <strong>CSS</strong>: For styling the app and creating a modern
          design.
        </li>
        <li>
          <strong>Fake Store API</strong>: Provides product data for the app.
        </li>
        <li>
          <strong>Mock Authentication</strong>: Simulates user login and signup
          functionality.
        </li>
      </ul>
      <h2>Future Improvements</h2>
      <p>
        While this app is fully functional, there are always opportunities for
        improvement. Some ideas for future updates include:
      </p>
      <ul>
        <li>
          Integrating a real payment gateway like <strong>Stripe</strong>.
        </li>
        <li>
          Adding user authentication with <strong>Firebase</strong> or another
          backend service.
        </li>
        <li>Implementing a search bar with autocomplete functionality.</li>
        <li>Adding a product review and rating system.</li>
      </ul>
      <p>
        Thank you for visiting my project! If you have any feedback or
        suggestions, feel free to reach out. 😊
      </p>
    </div>
  );
};

export default About;
