/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import Input from '../Input';
import DateInput from '../DateInput';
import Card from '../Card';
import Loader from '../Loader';
import { getCurrentCard, getLoadingViewCard, getLoadingUpdateCard } from '../../modules/card/selectors';
import { fetchGetCardRequest, fetchSetCardRequest } from '../../modules/card/actions';

import './style.css';

const CssButton = withStyles({
  root: {
    marginTop: '30px',
    fontSize: '22px',
    fontWeight: '400',
    textTransform: 'capitalize',
    borderRadius: '70px'
  },
  disabled: {
    backgroundColor: '#D8D7D5 !important',
    color: '#737373 !important'
  }
})(Button);
const ProfileForm = ({ 
  currentCard,
  isLoadingUpdateCard,
  isLoadingViewCard,  
  fetchGetCardRequestAction, 
  fetchSetCardRequestAction 
}) => {
  const initExpiryDate = currentCard.expiryDate ? new Date(currentCard.expiryDate) : new Date();
  const initCardNumber = currentCard.cardNumber ? currentCard.cardNumber : '';
  const initCardName = currentCard.cardName ? currentCard.cardName : '';
  const initCVC = currentCard.cvc ? currentCard.cvc : '';
  
  const [cardNumber, setCardNumber] = useState(initCardNumber);
  const [cardName, setCardName] = useState(initCardName);
  const [cvc, setCVC] = useState(initCVC);
  const [expiryDate, setExpiryDate] = useState(initExpiryDate);

  useEffect(() => {
    fetchGetCardRequestAction();
  }, []);

  const handleNumberCardChange = (evt) => {
    if (evt.target.value.length < 20) {
      setCardNumber(evt.target.value);
    }
  };
  const handleProfileSubmit = (evt) => {
    evt.preventDefault();
    const formData = {
      cardNumber,
      expiryDate,
      cardName,
      cvc,
    };
    fetchSetCardRequestAction(formData);
  };

  if (isLoadingViewCard) {
    return <Loader />;
  }

  return (
    <div className="profile-form" data-testid="profile-form">
      <form onSubmit={handleProfileSubmit}>
        <div className="profile-form__wrap">
          <div className="profile-form__left-block">
            <Input 
              type="text"
              name="name" 
              label="Имя владельца" 
              placeholder="USER NAME"
              value={cardName}
              classNameWrap="profile-form__block profile-form__block--mb10" 
              disabled={isLoadingUpdateCard}
              onChange={(evt) => setCardName(evt.target.value)}
              isAutofocus
              isRequired
            />
            <Input 
              type="text"
              name="card" 
              label="Номер карты" 
              placeholder="1111 1111 1111 1111"
              value={cardNumber} 
              disabled={isLoadingUpdateCard}
              classNameWrap="profile-form__block" 
              onChange={(evt) => handleNumberCardChange(evt)}
              isRequired
            />
            <div className="profile-form__width">
              <DateInput
                type="date"
                id="date-picker"
                name="date"
                placeholder="MM/YY"
                label="MM/YY"
                value={expiryDate}
                disabled={isLoadingUpdateCard}
                setSelectedDate={setExpiryDate}
                classNameWrap="profile-form__block profile-form__block--width" 
                isRequired
              />
              <Input 
                type="password"
                name="cvc" 
                label="CVC" 
                placeholder="667"
                value={cvc} 
                disabled={isLoadingUpdateCard}
                classNameWrap="profile-form__block profile-form__block--width" 
                onChange={(evt) => setCVC(evt.target.value)}
                isRequired
              />
            </div>
          </div>
          <div className="profile-form__right-block">
            <Card date={expiryDate} numberCard={cardNumber} />
          </div>
        </div>
        <div className="profile-form__block-btn">
          <CssButton 
            className="profile-form__save-btn" 
            type="submit" 
            variant="contained" 
            color="primary"
            disabled={isLoadingUpdateCard}
            disableElevation 
            fullWidth
          >
            Сохранить
          </CssButton>
        </div>
      </form>
    </div>
  );
}

ProfileForm.propTypes = {
  currentCard: PropTypes.object,
  isLoadingViewCard: PropTypes.bool.isRequired,
  isLoadingUpdateCard: PropTypes.bool.isRequired,
  fetchGetCardRequestAction: PropTypes.func.isRequired,
  fetchSetCardRequestAction: PropTypes.func.isRequired,
}

ProfileForm.defaultProps = {
  currentCard: {},
}

const mapStateToProps = (state) => {
  return {
    isLoadingUpdateCard: getLoadingUpdateCard(state),
    currentCard: getCurrentCard(state),
    isLoadingViewCard: getLoadingViewCard(state),
  }
}

const mapDispatchToProps = {
  fetchGetCardRequestAction: fetchGetCardRequest,
  fetchSetCardRequestAction: fetchSetCardRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);

export {ProfileForm};
