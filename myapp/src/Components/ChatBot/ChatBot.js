import React, { Component } from "react";
import TextToSpeech from "../TextToSpeech/text-Speech";
import "./chatBox.css";
import Image from "../Images/yellow Bot logo.png";
class ChatBot extends Component {
  constructor() {
    super();
    this.state = {
      Languages: [
        "English",
        "French",
        "Spanish",
        "German",
        "Italian",
        "Dutch",
        "Portuguese",
        "Russian",
        "Chinese",
        "Chinese-Traditional",
        "Japanese",
        "Korean",
        "Arabic",
        "Hindi",
        "Bengali",
        "Tamil",
        "Turkish",
        "Greek",
        "Polish",
        "Thai",
        "Vietnamese",
        "Swedish",
        "Czech",
        "Danish",
        "Finnish",
        "Hungarian",
        "Norwegian",
        "Romanian",
        "Slovak",
        "Slovenian",
        "Ukrainian",
      ],
      data: null,
      text: "",
      InputLanguage: "English",
      OutputLanguage: "English",
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
    // if (this.state.InputLanguage === "") {
    //   this.setState({ InputLanguage: "English" });
    // }
    // if (this.state.OutputLanguage === "") {
    //   this.setState({ OutputLanguage: "English" });
    // }
    this.setState({ data: "Loading..." });
    fetch("https://chatlangua--mohsanali3.repl.co/chatbox", {
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
    const { data, OutputLanguage, InputLanguage, Languages } = this.state;
    const showImage = data && data !== "Loading" && data.trim() !== "";
    return (
      <div>
        <div className="container">
          <h1>ChatLingua</h1>
          <p>
            Introducing ChatLangua with Text-to-Speech allows you to engage in
            conversations with an intelligent ChatBot. Enter your input text,
            choose your preferred input and output languages, and witness the
            ChatBot's quick and accurate responses. Utilize the built-in
            Text-to-Speech feature to listen to the ChatBot's answers in your
            chosen language.
            <strong>
              Start interacting with the ChatBot now and experience seamless
              communication!
            </strong>
          </p>
          <form>
            <label htmlFor="input1">Message</label>
            <input
              type="text"
              id="input1"
              placeholder="Enter your Text"
              onChange={this.onChatBoxchange}
            />
            <div className="languages">
              <label className="labeles" htmlFor="input2">
                Input Language
              </label>
              <select
                id="input2"
                onChange={this.onInputChange}
                value={InputLanguage}
              >
                {Languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang.charAt(0).toUpperCase() + lang.slice(1).toLowerCase()}
                  </option>
                ))}
              </select>

              <label className="labeles" htmlFor="input3">
                Output Language
              </label>
              <select
                id="input3"
                onChange={this.onOutputChange}
                value={OutputLanguage}
              >
                {Languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang.charAt(0).toUpperCase() + lang.slice(1).toLowerCase()}
                  </option>
                ))}
              </select>
              <button
                className="submit"
                type="submit"
                onClick={this.onClickSubmit}
              >
                Send
              </button>
            </div>
          </form>

          <div id="result">
            <div id="resultText">
              <div>
                <div className="reply">
                  {showImage && (
                    <img src={Image} alt="reply_logo" className="logo2" />
                  )}
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
