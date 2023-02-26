import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  function nextStep() {
    setCurrentStepIndex(i => {
      if(i >= steps.length - 1) return i
      return i + 1;
    })
  }

  function backStep() {
    setCurrentStepIndex(i => {
      if(i <= 0 ) return i
      return i - 1;
    })
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    nextStep,
    backStep,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1
  }
}
