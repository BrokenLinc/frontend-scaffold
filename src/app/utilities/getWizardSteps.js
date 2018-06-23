import { ROUTE } from 'app/constants';

const getWizardSteps = (invitationCode, currentStepIndex, highestStepIndexCompleted) => {
  const steps = [{
    label: 'Step 1',
    // path intentionally left blank to disallow access
  },{
    label: 'Step 2',
    path: ROUTE.HOME.path(),
  },{
    label: 'Step 3',
    path: ROUTE.HOME.path(),
  }];

  steps[currentStepIndex].isCurrent = true;
  for(let i = 0; i <= highestStepIndexCompleted; i++) {
    steps[i].isComplete = true;
  }

  return steps;
};

export default getWizardSteps;
