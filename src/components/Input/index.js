import React, { forwardRef } from 'react';
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


const Input = forwardRef((props, ref) => {
  const { 
    name, 
    type, 
    label, 
    placeholder, 
    value, 
    classNameWrap,
    isAutofocus, 
    isRequired,
    register,
    onChange 
  } = props;
  return (
    <div className={cn('input', classNameWrap)}>
      <CssTextField  
        label={label} 
        id={name}
        inputRef={ref}
        // value={value} 
        name={name}
        type={type}
        placeholder={placeholder} 
        size="small"
        margin="dense"
        // onChange={onChange}
        required={isRequired}
        autoFocus={isAutofocus}
        fullWidth
        {... register(name)}
      />
    </div>
  );
});

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired, 
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  register: PropTypes.any,
  classNameWrap: PropTypes.string,
  isAutofocus: PropTypes.bool,
  isRequired: PropTypes.bool, 
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  classNameWrap: '',
  isAutofocus: false,
  isRequired: false,
  register: () => {},
  onChange: () => {},
};

export default Input;

export {Input};
