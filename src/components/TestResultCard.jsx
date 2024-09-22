import { assets, results } from "../data.js";
const TestResultCard = ({
  questions,
  setCurrentQuestion,
  setTestResults,
  setSelectedOptions,
  counts,
  setCounts,
}) => {
  // restart the test
  const restartTest = () => {
    setCurrentQuestion(0);
    setTestResults(false);
    setSelectedOptions(Array(questions.length).fill(null));
    setCounts({ a: 0, b: 0, c: 0 });
  };

  // test result function
  const getTestResult = () => {
    const { a, b, c } = counts;

    if (a > b && a > c) {
      return results[1].text;
    } else if (b > a && b > c) {
      return results[2].text;
    } else if (c > a && c > b) {
      return results[0].text;
    } else {
      // Tie-breaking logic
      const maxCount = Math.max(a, b, c);
      if (a === maxCount && b === maxCount) {
        return results[2].text;
      } else if (b === maxCount && c === maxCount) {
        return results[2].text;
      } else if (a === maxCount && c === maxCount) {
        return results[1].text;
      } else {
        return results[2].text;
      }
    }
  };

  return (
    <div className="px-7 lg:px-10 flex flex-col justify-center items-center gap-10 ">
      <h1 className="font-outfit font-bold text-3xl">Test Result</h1>
      <div className="grid grid-cols-2 place-items-center gap-2">
        <img src={assets.resultImg} alt="result" className="w-[400px] h-auto" />
        <p className="font-outfit font-semibold text-xl lg:text-2xl text-black bg-[#b1e4e3] p-3 lg:p-5 rounded-xl text-justify">
          {getTestResult()}
        </p>
      </div>
      <button onClick={restartTest}>Retake Test</button>
    </div>
  );
};

export default TestResultCard;
