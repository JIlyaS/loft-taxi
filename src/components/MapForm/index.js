/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import CarList from '../CarList';
import Select from '../Select';
// import Input from '../Input';
// import DateInput from '../DateInput';
// import Card from '../Card';
// import { getCurrentCard, getLoadingViewCard } from '../../modules/card/selectors';
// import { fetchGetCardRequest, fetchSetCardRequest } from '../../modules/card/actions';

import './style.css';

const carList = [
  {
    name: 'Стандарт',
    cost: 150,
    type: 'standart'
  },
  {
    name: 'Премиум',
    cost: 250,
    type: 'premium'
  },
  {
    name: 'Бизнес',
    cost: 300,
    type: 'bisness'
  },
];

const CssButton = withStyles({
  root: {
    fontSize: '22px',
    fontWeight: '400',
    textTransform: 'capitalize',
    borderRadius: '70px'
  },
})(Button);
const MapForm = ({ 
  // currentCard, 
  // isLoadingViewCard, 
  // fetchGetCardRequestAction, 
  // fetchSetCardRequestAction 
}) => {
  // const initExpiryDate = currentCard.expiryDate ? new Date(currentCard.expiryDate) : new Date();
  // const [cardNumber, setCardNumber] = useState(currentCard.cardNumber);
  // const [cardName, setCardName] = useState(currentCard.cardName);
  // const [cvc, setCVC] = useState(currentCard.cvc);
  // const [expiryDate, setExpiryDate] = useState(initExpiryDate);

  // useEffect(() => {
  //   fetchGetCardRequestAction();
  // }, []);

  // const handleNumberCardChange = (evt) => {
  //   if (evt.target.value.length < 20) {
  //     setCardNumber(evt.target.value);
  //   }
  // };
  const handleMapFormSubmit = (evt) => {
    // evt.preventDefault();
    // const formData = {
    //   cardNumber,
    //   expiryDate,
    //   cardName,
    //   cvc,
    // };
    // fetchSetCardRequestAction(formData);
  };

  // if (isLoadingViewCard) {
  //   return 'Loading...';
  // }

  return (
    <div className="map-form" data-testid="map-form">
      <form onSubmit={handleMapFormSubmit}>
        <div className="map-form__wrap">
          <div className="map-form__top-block">
            <Select />
            <Select />
          </div>
            {/* <Input 
              type="text"
              name="name" 
              label="Имя владельца" 
              placeholder="USER NAME"
              value={cardName} 
              classNameWrap="map-form__block map-form__block--mb10" 
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
              classNameWrap="map-form__block" 
              onChange={(evt) => handleNumberCardChange(evt)}
              isRequired
            /> */}
          <div className="map-form__bottom-block">
            <CarList carList={carList} />
            <div className="map-form__block-btn">
              <CssButton 
                className="map-form__save-btn" 
                type="submit" 
                variant="contained" 
                color="primary" 
                disableElevation 
                fullWidth
              >
                Заказать
              </CssButton>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

// MapForm.propTypes = {
//   currentCard: PropTypes.object,
//   isLoadingViewCard: PropTypes.bool.isRequired,
//   fetchGetCardRequestAction: PropTypes.func.isRequired,
//   fetchSetCardRequestAction: PropTypes.func.isRequired,
// }

// MapForm.defaultProps = {
//   currentCard: {},
// }

// const mapStateToProps = (state) => {
//   return {
//     currentCard: getCurrentCard(state),
//     isLoadingViewCard: getLoadingViewCard(state),
//   }
// }

// const mapDispatchToProps = {
//   fetchGetCardRequestAction: fetchGetCardRequest,
//   fetchSetCardRequestAction: fetchSetCardRequest,
// }

export default connect(
  // mapStateToProps, mapDispatchToProps
  null, null
)(MapForm);

export {MapForm};
