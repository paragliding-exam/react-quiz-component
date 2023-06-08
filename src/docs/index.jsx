import React from "react";
import { createRoot } from "react-dom/client";
import Quiz from "../lib/Quiz";
import quiz from "./quiz";

const container = document.getElementById("app");
const root = createRoot(container);

const App = function () {
  return (
    <Quiz
      quiz={quiz}
      shuffle
      // showInstantFeedback
      // continueTillCorrect
      onQuestionSubmit={(obj) => console.log("user question results:", obj)}
      disableSynopsis
      // revealAnswerOnSubmit
      // allowNavigation
    />
  );
};

root.render(<App />);
