import React, { useState } from "react";
import "./form.css";

const onSubmit = async e => {
  e.preventDefault();
  const url =
    "https://us-central1-the-experience-262716.cloudfunctions.net/signup";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            Country: "Iceland",
            Club: "Islandur Region",
            Division: "1. div"
          }
        }
      ]
    })
  });

  console.log(res);
};

const Form = () => {
  const [questionNumber] = useState(0);
  const [currentQuestion] = useState(2);
  const MAX_QUESTIONS = 5;

  const [input, setInput] = useState("");

  return (
    <form className="form-wrapper" onSubmit={onSubmit}>
      <h3 className="form-title">
        Register here to apply for The Experience 2020 and get more information
      </h3>
      <div className="form-input-container">
        <label className="form-inputfield-label">Question 1</label>
        <input
          className="form-inputfield"
          placeholder="Answer..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </div>
      <div className="progress-container">
        {Array(MAX_QUESTIONS - questionNumber)
          .fill()
          .map((_, idx) => (
            <div className={idx < currentQuestion ? "dot filled" : "dot"} />
          ))}
      </div>
    </form>
  );
};

export default Form;
