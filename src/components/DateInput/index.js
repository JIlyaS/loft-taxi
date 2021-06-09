import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import startOfMonth from 'date-fns/startOfMonth';

import { withStyles } from '@material-ui/core/styles';
import {KeyboardDatePicker} from '@material-ui/pickers';

import './style.css';

const CssKeyboardDatePicker = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#000',
      fontWeight: '500',
    }
  },
})(KeyboardDatePicker);


const DateInput = ({
  id, 
  label, 
  value,
  placeholder,
  classNameWrap,   
  isRequired, 
  setSelectedDate
}) => {
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className={cn('input', classNameWrap)}>
        <CssKeyboardDatePicker
          openTo="year"
          views={["year", "month"]}
          format="MM/yyyy"
          margin="dense"
          placeholder={placeholder}
          id={id}
          label={label}
          value={value}
          minDate={startOfMonth(new Date())}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          required={isRequired}
        />
    </div>
  );
}

DateInput.propTypes = {
  placeholder: PropTypes.string, 
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.instanceOf(Date),
  classNameWrap: PropTypes.string,
  isRequired: PropTypes.bool, 
  setSelectedDate: PropTypes.func.isRequired,
};

DateInput.defaultProps = {
  value: new Date(),
  classNameWrap: '',
  placeholder: '',
  isRequired: false,
  setSelectedDate: () => {},
};

export default DateInput;

export {DateInput};
