import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import Input from '../Input';
import DateInput from '../DateInput';
import Card from '../Card';
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

const ProfileForm = ({ currentCard, fetchGetCardRequestAction, fetchSetCardRequestAction }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [cardName, setCardName] = useState('');
  const [numberCard, setNumberCard] = useState('');
  const [cvc, setCVC] = useState('');

  useEffect(() => {
    fetchGetCardRequestAction();
  }, []);

  const handleNumberCardChange = (evt) => {
    if (evt.target.value.length < 20) {
      setNumberCard(evt.target.value);
    }
  };
  const handleProfileSubmit = (evt) => {
    evt.preventDefault();
    const formData = {
      cardNumber: numberCard,
      expiryDate: selectedDate,
      cardName,
      cvc,
    };
    fetchSetCardRequestAction(formData);
  };
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
              value={numberCard} 
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
                value={selectedDate}
                setSelectedDate={setSelectedDate}
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
            <Card date={selectedDate} numberCard={numberCard} />
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
  fetchGetCardRequestAction: PropTypes.func.isRequired,
  fetchSetCardRequestAction: PropTypes.func.isRequired,
}

const mapStateToProps = ({card}) => {
  return {
    currentCard: card.currentCard,
  }
}

const mapDispatchToProps = {
  fetchGetCardRequestAction: fetchGetCardRequest,
  fetchSetCardRequestAction: fetchSetCardRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);

export {ProfileForm};
