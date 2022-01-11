import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onIncrement }) {
  return (
    <>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onIncrement(option)}
          style={{ textTransform: 'capitalize' }}
        >
          {option}
        </Button>
      ))}
    </>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onIncrement: PropTypes.func,
};
