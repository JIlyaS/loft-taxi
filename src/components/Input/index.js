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
  value, 
  classNameWrap,
  disabled,
  isAutofocus, 
  isRequired, 
  onChange 
}) => {
  return (
    <div className={cn('input', classNameWrap)}>
      <CssTextField  
        label={label} 
        id={name}
        value={value} 
        name={name}
        type={type}
        placeholder={placeholder} 
        size="small"
        margin="dense"
        disabled={disabled}
        onChange={onChange}
        required={isRequired}
        autoFocus={isAutofocus}
        fullWidth
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired, 
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  classNameWrap: PropTypes.string,
  disabled: PropTypes.bool, 
  isAutofocus: PropTypes.bool,
  isRequired: PropTypes.bool, 
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  classNameWrap: '',
  disabled: false,
  isAutofocus: false,
  isRequired: false,
  onChange: () => {},
};

export default Input;

export {Input};
