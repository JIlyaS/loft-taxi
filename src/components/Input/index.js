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


const Input = ({
  name, 
  type, 
  label, 
  placeholder, 
  classNameWrap,
  isAutofocus, 
  isRequired,
  register,
  defaultValue,
  disabled,
  validate,
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
        defaultValue={defaultValue}
        size="small"
        margin="dense"
        disabled={disabled}
        className={cn({'input--error': isError})}
        required={isRequired}
        autoFocus={isAutofocus}
        fullWidth
        {... register(name, validate)}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired, 
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.any,
  defaultValue: PropTypes.any,
  classNameWrap: PropTypes.string,
  validate: PropTypes.object,
  disabled: PropTypes.bool, 
  isAutofocus: PropTypes.bool,
  isRequired: PropTypes.bool, 
  isError: PropTypes.any, 
};

Input.defaultProps = {
  type: 'text',
  classNameWrap: '',
  disabled: false,
  defaultValue: '',
  isAutofocus: false,
  isRequired: false,
  isError: false,
  validate: {},
  register: () => {},
};

export default Input;

export {Input};
