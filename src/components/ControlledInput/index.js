import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './style.css';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#000',
      fontWeight: '500',
    }
  },
})(TextField);


const ControlledInput = ({
  name, 
  type, 
  label, 
  placeholder, 
  classNameWrap,
  isAutofocus, 
  isRequired,
  defaultValue,
  value,
  onChange,
  disabled,
  isError,
}) => {
  return (
    <div className={cn('input', classNameWrap)}>
      <CssTextField  
        label={label} 
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        size="small"
        margin="dense"
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={cn({'input--error': isError})}
        required={isRequired}
        autoFocus={isAutofocus}
        fullWidth
      />
    </div>
  );
};

ControlledInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired, 
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.any,
  classNameWrap: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool, 
  isAutofocus: PropTypes.bool,
  isRequired: PropTypes.bool, 
  isError: PropTypes.any, 
  onChange: PropTypes.func.isRequired,
};

ControlledInput.defaultProps = {
  type: 'text',
  classNameWrap: '',
  disabled: false,
  value: '',
  isAutofocus: false,
  isRequired: false,
  isError: false,
  onChange: () => {},
};

export default ControlledInput;

export {ControlledInput};
