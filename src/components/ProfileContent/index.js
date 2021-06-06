import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import ProfileForm from '../ProfileForm';
import { getUpdateSuccess, getLoadingViewCard } from '../../modules/card/selectors';
import { resetSuccessCard } from '../../modules/card/actions';

import './style.css';

const CssButton = withStyles({
  root: {
    fontSize: '21px',
    lineHeight: '25px',
    fontWeight: '400',
    borderRadius: '70px'
  },
})(Button);

const ProfileContent = ({isUpdateSuccess, isLoadingViewCard, resetSuccessCardAction}) => {
  const history = useHistory();
  const handleToCardClick = () => {
    resetSuccessCardAction();
    history.push('/');
  };
  return (
    <div className={cn('profile-content', {'profile-content--loading': isLoadingViewCard})}>
      <h2 className="profile-content__header" data-testid="profile-header">Профиль</h2>
      <p className={cn('profile-content__paragraph', {'profile-content__paragraph-success': isUpdateSuccess})}>
        {isUpdateSuccess ? 
          'Платёжные данные обновлены. Теперь вы можете заказывать такси.' : 
          'Введите платёжные данные'
        }
      </p>
      <div className="profile-content__block">
        {isUpdateSuccess ? <CssButton 
          className="profile-content__to-cart" 
          type="button" 
          variant="contained" 
          color="primary"
          onClick={handleToCardClick}
          disableElevation 
          fullWidth
        >
          Перейти на карту
        </CssButton> : <ProfileForm />}
      </div>
    </div>
  );
}

ProfileContent.defaultProps = {
  isLoadingViewCard: false,
  isUpdateSuccess: false,
}

ProfileContent.propTypes = {
  isLoadingViewCard: PropTypes.bool.isRequired,
  isUpdateSuccess: PropTypes.bool,
  resetSuccessCardAction: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    isLoadingViewCard: getLoadingViewCard(state),
    isUpdateSuccess: getUpdateSuccess(state),
  }
};

const mapDispatchToProps = {
  resetSuccessCardAction: resetSuccessCard,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContent);

export {ProfileContent};
