import { useState } from "react";
import { questions } from "./data.js";
import WelcomeCard from "./components/WelcomeCard.jsx";
import QuestionCard from "./components/QuestionCard";
import TestResultCard from "./components/TestResultCard.jsx";

const App = () => {
  const [showTestResults, setTestResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(null)
  );
  const [counts, setCounts] = useState({ a: 0, b: 0, c: 0 });
  const [startTest, setStartTest] = useState(false);

  const handleStartTest = () => {
    setStartTest(true);
  };

  return (
    <div className="bg-[#b1e4e3] w-full h-screen flex justify-center items-center ">
      <div className="bg-[#ffffff] w-[90%] md:w-[80%] xl:w-[50%] h-[60%] rounded-xl py-5 shadow-[4px_8px_8px_2px_#3f4376] flex justify-center items-center">
        {!startTest ? ( // show WelcomeCard if test hasn't started
          <WelcomeCard handleStartTest={handleStartTest} />
        ) : showTestResults ? ( // show TestResultCard if results are to be shown
          <TestResultCard
            questions={questions}
            setCurrentQuestion={setCurrentQuestion}
            setTestResults={setTestResults}
            setSelectedOptions={setSelectedOptions}
            counts={counts}
            setCounts={setCounts}
          />
        ) : (
          // show QuestionCard if the test is ongoing
          <QuestionCard
            questions={questions}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            counts={counts}
            setCounts={setCounts}
            setTestResults={setTestResults}
          />
        )}
      </div>
    </div>
  );
};

export default App;
