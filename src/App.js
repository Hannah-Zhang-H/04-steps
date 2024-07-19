import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  // const step = 1;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // Define functions
  function handlePrevious() {
    // alert("Previous");

    // 其实我们不会这样做，我们写方程
    // if (step > 1) setStep(step - 1);
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    // alert("NEXT");
    // if (step < 3) setStep(step + 1);
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      {/* add a 'X' signal to open or close the block */}
      {/*✅ ✅  !isOpen巧妙啊！！但我们用callback写才是对的，总是根据目前的state来更新新的state！因为这样更安全！✅*/}
      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}> */}
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step{step}:{messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              // onClick={() => alert("Previous")} ❌其实我们不这样写，我们穿入一个callback
              onClick={handlePrevious}
              // onMouseEnter={() => alert("TEST")}
              // ❌不要写成onMouseEnter={alert("TEST")}，而要写一个callback
            >
              Prvious
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              // onClick={() => alert("Next")}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
