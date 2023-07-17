import React from "react";
import "./Guide.css";

const AppGuide = () => {
  return (
    <div className="guide-container">
      <h2>Welcome to ChatBot with Text-to-Speech</h2>
      <p>
        ChatBot with Text-to-Speech is a user-friendly React application that
        allows you to have interactive conversations with an intelligent
        ChatBot. You can also utilize the Text-to-Speech feature to listen to
        the ChatBot's responses in various languages. Here's how to use the app:
      </p>
      <h3>Getting Started</h3>
      <ol>
        <li>Enter your message in the input field.</li>
        <li>
          Select your preferred <strong>Input Language</strong> and{" "}
          <strong>Output Language</strong> from the dropdown menus.
        </li>
        <li>
          Click the <strong>Submit</strong> button to send your message to the
          ChatBot.
        </li>
      </ol>
      <h3>Using Text-to-Speech</h3>
      <p>
        Once you receive a response from the ChatBot, you can use the
        Text-to-Speech feature to hear the answer in the selected{" "}
        <strong>Output Language</strong>. Click the <strong>Play</strong> button
        to listen to the response, <strong>Pause</strong> button to pause the
        speech, <strong>Stop</strong> button to stop the speech, and{" "}
        <strong>Refresh</strong> button to replay the response.
      </p>
      <p>
        Please note that the Text-to-Speech feature relies on your browser's
        support for the Speech Synthesis API. Not all browsers may support this
        feature.
      </p>
    </div>
  );
};

export default AppGuide;
