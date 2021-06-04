import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import {Select as UISelect} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import './style.css';

// const CssTextField = withStyles({
//   root: {
//     '& label.Mui-focused': {
//       color: '#000',
//       fontWeight: '500',
//     }
//   },
// })(TextField);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const Select = ({ 
  // name, 
  // type, 
  // label, 
  // placeholder, 
  // value, 
  // classNameWrap,  
  // isAutofocus, 
  // isRequired, 
  // onChange 
}) => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={cn('select')}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <UISelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </UISelect>
      </FormControl>
    </div>
  );
}

Select.propTypes = {
  // type: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // label: PropTypes.string.isRequired, 
  // placeholder: PropTypes.string.isRequired,
  // value: PropTypes.string,
  // classNameWrap: PropTypes.string,
  // isAutofocus: PropTypes.bool,
  // isRequired: PropTypes.bool, 
  // onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  // type: 'text',
  // value: '',
  // classNameWrap: '',
  // isAutofocus: false,
  // isRequired: false,
  // onChange: () => {},
};

export default Select;

export {Select};
