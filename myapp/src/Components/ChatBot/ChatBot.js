import React, { Component } from "react";
import TextToSpeech from "../TextToSpeech/text-Speech";
import "./chatBox.css";
class ChatBot extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      text: "",
      InputLanguage: "",
      OutputLanguage: "",
    };
  }

  onInputChange = (e) => {
    this.setState({ InputLanguage: e.target.value });
  };
  onOutputChange = (e) => {
    this.setState({ OutputLanguage: e.target.value });
  };
  onChatBoxchange = (e) => {
    this.setState({ text: e.target.value });
  };

  onClickSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();
    this.setState({ loading: true });
    if (this.state.text === "") {
      alert("Please add some text");
      return;
    }
    if (this.state.InputLanguage === "") {
      this.setState({ InputLanguage: "English" });
    }
    if (this.state.OutputLanguage === "") {
      this.setState({ OutputLanguage: "English" });
    }
    this.setState({ data: "Loading..." });
    fetch("http://localhost:5000/chatbox", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        text: this.state.text,
        InputLanguage: this.state.InputLanguage,
        OutputLanguage: this.state.OutputLanguage,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const textValue = data.generations[0][0].text;
        this.setState({ loading: false, data: textValue });
      })
      .catch((err) => {
        console.log("Error: ", err);
        this.setState({ loading: false });
      });
  };

  render() {
    const { data, OutputLanguage } = this.state;
    return (
      <div>
        <div className="container">
          <h1>ChatBot</h1>
          <p>
            Introducing ChatBot with Text-to-Speech – a user-friendly React
            application that allows you to engage in conversations with an
            intelligent ChatBot. Enter your input text, choose your preferred
            input and output languages, and witness the ChatBot's quick and
            accurate responses. Utilize the built-in Text-to-Speech feature to
            listen to the ChatBot's answers in your chosen language. Start
            interacting with the ChatBot now and experience seamless
            communication!
          </p>
          <form>
            <label htmlFor="input1">Message</label>
            <input
              type="text"
              id="input1"
              placeholder="Enter your input"
              onChange={this.onChatBoxchange}
            />

            <label htmlFor="input2">Input Language</label>
            <input
              type="text"
              id="input2"
              placeholder="e.g English"
              onChange={this.onInputChange}
            />
            <label htmlFor="input3">Output Language</label>
            <input
              type="text"
              id="input3"
              placeholder="e.g French"
              onChange={this.onOutputChange}
            />
            <button type="submit" onClick={this.onClickSubmit}>
              Submit
            </button>
          </form>

          <div id="result">
            <div id="resultText">
              <div>
                <div>
                  <p className="response">{data}</p>
                  {data === "Loading" || "" ? (
                    <div></div>
                  ) : (
                    <TextToSpeech Text={data} OutputLanguage={OutputLanguage} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ChatBot;
