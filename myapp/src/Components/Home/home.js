import React from "react";
import "./Home.css";
import Image from "../Images/blue chatbot background.png";
function Home({ onChangeChatBot }) {
  return (
    <div className="home-container">
      <img src={Image} alt="background" className="background-image" />
      <div className="circle">
        <p>
          BotLangua - Your interactive conversation companion! Engage in
          multilingual chats, experience real-time text-to-speech responses, and
          enjoy a user-friendly interface with seamless design responsiveness.
          Get ready for an immersive and intelligent communication experience!{" "}
          <a href="#Chatbot" onClick={onChangeChatBot}>
            BotLangua
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
