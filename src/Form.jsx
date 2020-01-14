import React, { useState } from "react";
import questions from "./questions";
import "./form.css";

const onSubmit = async answers => {
  const url =
    "https://us-central1-the-experience-262716.cloudfunctions.net/signup";

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            country_and_team: answers[0],
            motivation: answers[1],
            why_interested: answers[2],
            why_your_team: answers[3],
            contact_information: answers[4]
          }
        }
      ]
    })
  });
};

const ProgressContainer = ({ numberFilled, numberOfDots }) => (
  <div className="progress-container">
    <div className="progress-bar">
      {Array(numberOfDots)
        .fill()
        .map((_, idx) => (
          <div
            key={idx}
            className={idx < numberFilled ? "dot filled" : "dot"}
          />
        ))}
    </div>
  </div>
);

const Form = ({ inputRef }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState(["", "", "", "", ""]);
  const [status, setStatus] = useState("INITIAL");

  const question = questions[currentQuestionIdx];

  const nextQuestion = () => {
    if (currentQuestionIdx === questions.length - 1) {
      onSubmit(answers);
      setStatus("DONE");
    } else {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
      inputRef.current.focus();
    }
  };

  return (
    <form className="form-wrapper">
      <h3 className="form-title">
        To give you the best volleyball experience in history, we need to ask
        you some questions about you and your team
      </h3>
      {status === "DONE" ? (
        <div className="done-message">
          Thanks for applying! We will shortly send you a confirmation email,
          and require more information about your team. If you have any
          questions, feel free to reach out to us on facebook or Instagram!
        </div>
      ) : (
        <>
          <div className="form-input-container">
            <label className="form-inputfield-label">{question.title}</label>
            <textarea
              ref={inputRef}
              className={`form-inputfield ${
                question.type === "LARGE" ? "large" : ""
              }`}
              placeholder="Answer..."
              value={answers[currentQuestionIdx]}
              onChange={e => {
                const updatedAnswers = [...answers];
                updatedAnswers[currentQuestionIdx] = e.target.value;
                setAnswers(updatedAnswers);
              }}
            />

            <div className="form-button-container">
              {currentQuestionIdx > 0 && (
                <span
                  className="back-button"
                  onClick={() =>
                    setCurrentQuestionIdx(Math.max(0, currentQuestionIdx - 1))
                  }
                >
                  Back
                </span>
              )}

              <button
                className="submit-button"
                onClick={nextQuestion}
                disabled={answers[currentQuestionIdx] === ""}
                type="button"
              >
                {currentQuestionIdx === questions.length - 1 ? "Apply" : "Next"}
              </button>
            </div>
            <ProgressContainer
              numberFilled={currentQuestionIdx + 1}
              numberOfDots={questions.length}
            />
          </div>
        </>
      )}
    </form>
  );
};

export default Form;
