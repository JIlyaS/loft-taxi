import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import InputAdornment from '@material-ui/core/InputAdornment';

import './style.css';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
      margin: 0,
      width: '100%',
    },
  },
}));

const Select = ({
  id,
  className,
  list,
  value,
  iconStart,
  onChange,
}) => {
  const classes = useStyles();

  return (
    <div className={cn(classes.root, 'select')}>
      <TextField
          id={id}
          label=""
          select
          className={className}
          value={value}
          onChange={onChange}
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {iconStart()}
            </InputAdornment>
          ),
        }}
        >
          {list.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </TextField>
    </div>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  iconStart: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  className: '',
  value: '',
  list: [],
  iconStart: null,
  onChange: () => {},
};

export default Select;

export {Select};
