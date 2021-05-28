import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

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
  name, 
  type, 
  label, 
  placeholder, 
  value, 
  classNameWrap,  
  isAutofocus, 
  isRequired, 
  InputLabelProps, 
  inputProps,
  setSelectedDate
}) => {
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className={cn('input', classNameWrap)}>
        <CssKeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/yyyy"
          margin="dense"
          id="date-picker-inline"
          label={label}
          value={value}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      {/* <CssTextField  
        label={label} 
        id={name}
        // value={value} 
        name={name}
        type={type}
        placeholder={placeholder} 
        size="small"
        margin="dense"
        format="MM/yyyy"
        defaultValue="05/2021"
        // onChange={onChange}
        InputLabelProps={InputLabelProps}
        inputProps={inputProps}
        // required={isRequired}
        // autoFocus={isAutofocus}
        // fullWidth
      /> */}
    </div>
  );
}

DateInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired, 
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  classNameWrap: PropTypes.string,
  isAutofocus: PropTypes.bool,
  isRequired: PropTypes.bool, 
  setSelectedDate: PropTypes.func.isRequired,
};

DateInput.defaultProps = {
  type: 'text',
  classNameWrap: '',
  isAutofocus: false,
  isRequired: false,
  setSelectedDate: () => {},
};

export default DateInput;

export {DateInput};
