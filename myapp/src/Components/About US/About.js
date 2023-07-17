import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <p>
        Welcome to our website! We are a passionate team of developers and
        designers dedicated to creating exceptional web experiences. Our goal is
        to build innovative and user-friendly applications that cater to our
        users' needs and preferences.
      </p>
      {/* Rest of your content */}

      <div className="contact-us-section">
        <h3>Contact Us</h3>
        <label htmlFor="name">Name</label>
        <input
          className="inputs"
          type="text"
          id="name"
          value="Mohsan Ali"
          disabled
        />
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="inputs"
            type="email"
            id="email"
            value="Mohsanali1132@gmail.com"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="Role">Role</label>
          <input
            className="inputs"
            type="email"
            id="email"
            value="Developement & Designing"
            disabled
          />
        </div>
        <div className="form-group"></div>
        <hr></hr>

        <label htmlFor="name" className="person">
          Name
        </label>
        <input
          className="inputs"
          type="text"
          id="name"
          value="Fakhra Riaz"
          disabled
        />
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="inputs"
            type="email"
            id="email"
            value="fakhra.csit@must.edu.pk"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="Role">Role</label>
          <input
            className="inputs"
            type="email"
            id="email"
            value="Supervisor"
            disabled
          />
        </div>
        <div className="form-group"></div>
        <hr></hr>
        <label htmlFor="name" className="person">
          Name
        </label>
        <input
          className="inputs"
          type="text"
          id="name"
          value="Rabeet Ul Jash"
          disabled
        />
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="inputs"
            type="email"
            id="email"
            value="rsmughal00q@gmail.com"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="Role">Role</label>
          <input
            className="inputs"
            type="email"
            id="Role"
            value="Editor"
            disabled
          />
        </div>
        <div className="form-group"></div>
      </div>
    </div>
  );
};

export default About;
