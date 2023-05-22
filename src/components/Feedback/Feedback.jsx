import css from './Feedback.module.css';
import PropTypes from 'prop-types';

export const Feedback = ({ options, onFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          className={css.button_feedback}
          key={option}
          type="button"
          name={option}
          onClick={onFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.array,
  onFeedback: PropTypes.func,
};
