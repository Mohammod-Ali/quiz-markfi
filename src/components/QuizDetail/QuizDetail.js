import React from "react";
import Options from "../Options/Options";
import "./QuizDetail.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizDetail = ({ quiz }) => {
  const { question, options, correctAnswer } = quiz;
  const quizHandler = (correctOption) => {
    console.log(correctOption);
    if (correctAnswer === correctOption) {
      toast(`Congratulations, Your correct ans:  ${correctAnswer}`);
    } else {
      toast("Wrong Ans");
    }
  };

  const answer = (correctAnswer) =>{
    toast(correctAnswer)
  }

  return (
    <div className="quiz-details">
      <div className="icon">
        <h3>
          Quiz{}: {question}
        </h3>
        <svg onClick={()=>answer(correctAnswer)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {options.map((option) => (
        <Options
          option={option}
          quizHandler={quizHandler}
          correctAnswer={correctAnswer}
        ></Options>
      ))}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
    </div>
  );
};

export default QuizDetail;
