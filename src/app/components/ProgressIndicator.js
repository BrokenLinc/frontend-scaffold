import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { map } from 'lodash';
import cn from 'classnames';

import { Icon } from 'app/components';
import faCheck from 'app/icons/faCheck';
import faEllipsisH from 'app/icons/faEllipsisH';

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
  if (isCurrent) icon = faEllipsisH;
  // Use the "complete" icon even if you're on the step currently
  if (isComplete) icon = faCheck;

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
