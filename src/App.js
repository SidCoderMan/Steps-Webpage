import { useState } from "react";

const messages = [
  "Get Started 🎬",
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Total success 😎",
];

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep((step) => step - 1);
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep((step) => step + 1);
  };

  const handleClose = () => {
    setIsOpen((is) => !is);
  };

  return (
    <div className={!isOpen ? "steps" : ""}>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div
              className={
                currentStep >= 1 && currentStep < 4
                  ? "active"
                  : currentStep === 4
                  ? "success "
                  : "numbers"
              }
            >
              1
            </div>
            <div
              className={
                currentStep >= 2 && currentStep < 4
                  ? "active"
                  : currentStep === 4
                  ? "success "
                  : "numbers"
              }
            >
              2
            </div>
            <div
              className={
                currentStep >= 3 && currentStep < 4
                  ? "active"
                  : currentStep === 4
                  ? "success "
                  : "numbers"
              }
            >
              3
            </div>
          </div>

          <p className="message">
            Step {currentStep}: {messages[currentStep + 1 - 1]}
          </p>

          <div className="buttons">
            <button
              class={
                currentStep === 4
                  ? "success"
                  : currentStep === 0
                  ? "inactive"
                  : ""
              }
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              class={
                currentStep === 4
                  ? "success"
                  : currentStep === 0
                  ? "inactive"
                  : ""
              }
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <p className="message">{`Shhhh! This is a secret! 🤫`}</p>
      )}
    </div>
  );
};
export default App;
