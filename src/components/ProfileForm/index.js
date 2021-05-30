/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import Input from '../Input';
import DateInput from '../DateInput';
import Card from '../Card';
import { getCurrentCard, getLoadingViewCard } from '../../modules/card/selectors';
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
})(Button);
const ProfileForm = ({ currentCard, isLoadingViewCard,  fetchGetCardRequestAction, fetchSetCardRequestAction }) => {
  const initExpiryDate = currentCard.expiryDate ? new Date(currentCard.expiryDate) : new Date();
  const [cardNumber, setCardNumber] = useState(currentCard.cardNumber);
  const [cardName, setCardName] = useState(currentCard.cardName);
  const [cvc, setCVC] = useState(currentCard.cvc);
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
    return 'Loading...';
  }

  return (
    <div className="profile-form">
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
              classNameWrap="profile-form__block" 
              onChange={(evt) => handleNumberCardChange(evt)}
              isRequired
            />
            <div className="profile-form__width">
              <DateInput
                type="date"
                id="date"
                name="date"
                label="MM/YY"
                value={expiryDate}
                setSelectedDate={setExpiryDate}
                classNameWrap="profile-form__block profile-form__block--width" 
                isRequired
              />
              <Input 
                type="text"
                name="cvc" 
                label="CVC" 
                placeholder="667"
                value={cvc} 
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
  fetchGetCardRequestAction: PropTypes.func.isRequired,
  fetchSetCardRequestAction: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
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
