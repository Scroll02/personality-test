const QuestionCard = ({
  currentQuestion,
  setCurrentQuestion,
  selectedOptions,
  setSelectedOptions,
  counts,
  setCounts,
  questions,
  setTestResults,
}) => {
  // handle option click
  const optionClick = (letter) => {
    const updatedSelections = [...selectedOptions];
    updatedSelections[currentQuestion] = letter;
    setSelectedOptions(updatedSelections);

    const updatedCounts = { ...counts };
    const previousSelection = selectedOptions[currentQuestion];

    if (previousSelection) {
      updatedCounts[previousSelection]--; // decrease count of previous selection
    }

    updatedCounts[letter]++; // increase count of new selection
    setCounts(updatedCounts);
  };

  // next question
  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  };

  // previous question
  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="px-10 md:py-5 flex flex-col w-full">
      <div className="text-[#0b0b0c] font-outfit font-bold text-2xl lg:text-3xl bg-[#DDF0EF] rounded-xl mb-5 py-2">
        <h2>
          Question {currentQuestion + 1}/{questions.length}
        </h2>
      </div>

      {/* Questions and Options */}
      <div className="mb-9">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-outfit font-bold text-[#3f4376] text-justify mb-7">
          {questions[currentQuestion].text}
        </h3>
        <ul>
          {questions[currentQuestion].options.map((option) => (
            <li
              key={option.id}
              onClick={() => optionClick(option.letter)}
              className={`font-outfit p-2 lg:p-3 text-md md:text-lg lg:text-xl mt-3 rounded-xl border-2 border-[#3f4376] cursor-pointer ${
                selectedOptions[currentQuestion] === option.letter
                  ? "bg-[#3f4376] text-[white]"
                  : "bg-white"
              }`}
            >
              {option.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between items-center">
        {currentQuestion > 0 && (
          <button onClick={previousQuestion}>Previous</button>
        )}
        {currentQuestion + 1 === questions.length ? (
          <button onClick={() => setTestResults(true)}>Submit</button>
        ) : (
          <button
            onClick={nextQuestion}
            disabled={!selectedOptions[currentQuestion]}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
