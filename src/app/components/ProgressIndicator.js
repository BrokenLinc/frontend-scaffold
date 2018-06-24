import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { map } from 'lodash';
import Icon from '@fortawesome/react-fontawesome';
import cn from 'classnames';

import CheckIcon from 'app/icons/CheckIcon';
import EllipsisHIcon from 'app/icons/EllipsisHIcon';

const StepWrapper = ({ path, isCurrent, children, isPreviousStepComplete }) => {
  // Only link the step if there is path, we're not already on it, and thee previous step is complete
  return (path && !isCurrent && isPreviousStepComplete)
    ? (
      <Link to={path}>{ children }</Link>
    )
    : (
      <span>{ children }</span>
    );
};

const Step = (props) => {
  const { label, isComplete, isCurrent } = props;
  const className = cn('progress-indicator-icon-step', {
    'is-complete': isComplete,
    'is-current': isCurrent
  });

  let icon;
  if (isCurrent) icon = EllipsisHIcon;
  // Use the "complete" icon even if you're on the step currently
  if (isComplete) icon = CheckIcon;

  return (
    <li className={className}>
      <StepWrapper {...props}>
        {icon && <span className="progress-indicator-step-icon">
          <Icon icon={icon}/>
        </span>}
        { label }
      </StepWrapper>
    </li>
  );
};

const Steps = ({ steps }) => {
  // Keep track of previous step state and inject into the next step's props
  let isPreviousStepComplete = true;
  return map(steps, step => {
    const stepProps = Object.assign({}, step, { isPreviousStepComplete });
    isPreviousStepComplete = step.isComplete;
    return <Step {...stepProps} key={stepProps.label} />;
  });
};

const ProgressIndicator = ({ className, steps, style }) => (
  <div className={cn('progress-indicator', className)} style={style}>
    <ol className="progress-indicator-inner">
      <Steps steps={steps} />
    </ol>
  </div>
);

const stepShape = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string,
  isComplete: PropTypes.bool,
  isCurrent: PropTypes.bool,
};

ProgressIndicator.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.arrayOf(PropTypes.shape(stepShape)).isRequired,
  style: PropTypes.object,
};

ProgressIndicator.defaultProps = {
  className: 'py-4',
};

export default ProgressIndicator;
