/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

import Input from '../Input';
import ControlledInput from '../ControlledInput';
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
  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm();

  const initExpiryDate = currentCard.expiryDate ? new Date(currentCard.expiryDate) : new Date();
  const initCardNumber = currentCard.cardNumber ? currentCard.cardNumber : '';
  const initCardName = currentCard.cardName ? currentCard.cardName : '';
  const initCVC = currentCard.cvc ? currentCard.cvc : '';

  const [expiryDate, setExpiryDate] = useState(initExpiryDate);

  useEffect(() => {
    fetchGetCardRequestAction();
  }, []);

  useEffect(() => {
    if (currentCard) {
      console.log("🚀 ~ file: index.js ~ line 54 ~ useEffect ~ currentCard", currentCard)
      setValue( 'name', currentCard.cardName );
      setValue( 'card', currentCard.cardNumber );
      setValue( 'cvc', currentCard.cvc );
    }
  }, [currentCard]);

  const handleProfileSubmit = (data) => {
  console.log("🚀 ~ file: index.js ~ line 62 ~ handleProfileSubmit ~ data", data)
    const { card, name, cvc } = data;
    const formData = {
      cardNumber: card,
      expiryDate,
      cardName: name,
      cvc,
    };
    fetchSetCardRequestAction(formData);
  };

  if (isLoadingViewCard) {
    return <Loader />;
  }

  return (
    <div className="profile-form" data-testid="profile-form">
      <form noValidate onSubmit={handleSubmit(handleProfileSubmit)}>
        <div className="profile-form__wrap">
          <div className="profile-form__left-block">
            {/* <Input 
              type="text"
              name="name" 
              label="Имя владельца" 
              placeholder="USER NAME"
              classNameWrap="profile-form__block" 
              disabled={isLoadingUpdateCard}
              defaultValue={initCardName}
              isError={errors.name?.type}
              isAutofocus
              isRequired
            /> */}
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <ControlledInput 
                  type="text"
                  name="name" 
                  label="Имя владельца" 
                  placeholder="USER NAME"
                  classNameWrap="profile-form__block" 
                  disabled={isLoadingUpdateCard}
                  value={value}
                  onChange={onChange}
                  // defaultValue={initCardName}
                  isError={errors.name?.type}
                  isAutofocus
                  isRequired
                />
              )}
            />
            <span className="profile-form__error-text">
              {errors.name?.type === 'required' && 'Введите имя владельца'}
            </span>
            <Controller
              control={control}
              name="card"
              render={({ field: { onChange, value } }) => (
                <ControlledInput 
                  type="text"
                  name="card"
                  label="Номер карты" 
                  placeholder="1111 1111 1111 1111"
                  classNameWrap="profile-form__block" 
                  disabled={isLoadingUpdateCard}
                  value={value}
                  onChange={onChange}
                  // defaultValue={initCardNumber}
                  isError={errors.card?.type}
                  isRequired
                />
              )}
            />
            {/* <Input 
              type="text"
              name="card" 
              label="Номер карты" 
              placeholder="1111 1111 1111 1111"
              disabled={isLoadingUpdateCard}
              classNameWrap="profile-form__block" 
              defaultValue={initCardNumber}
              register={register}
              validate={{
                required: true,
                maxLength: 20
              }}
              isError={errors.card?.type}
              isRequired
            /> */}
            <span className="profile-form__error-text">
              {errors.card?.type === 'required' && 'Введите номер карты'}
              {errors.card?.type === 'maxLength' && ' Номер карты не может быть больше 16 символов'}
            </span>
            <div className="profile-form__width">
              <div className="profile-form__input-block">
                <DateInput
                  type="date"
                  id="date-picker"
                  name="date"
                  placeholder="MM/YY"
                  label="MM/YY"
                  value={expiryDate}
                  disabled={isLoadingUpdateCard}
                  setSelectedDate={setExpiryDate}
                  defaultValue={initCardNumber}
                  classNameWrap="profile-form__block profile-form__block--width" 
                  isRequired
                />
              </div>
              <div className="profile-form__input-block">

                <Controller
                  control={control}
                  name="cvc"
                  render={({ field: { onChange, value } }) => (
                    <ControlledInput 
                      type="text"
                      name="cvc"
                      label="CVC" 
                      placeholder="667"
                      classNameWrap="profile-form__block profile-form__block--width" 
                      disabled={isLoadingUpdateCard}
                      value={value}
                      onChange={onChange}
                      // defaultValue={initCVC}
                      isError={errors.cvc?.type}
                      isRequired
                    />
                  )}
                />
                {/* <Input 
                      type="password"
                      name="cvc" 
                      label="CVC" 
                      placeholder="667"
                      defaultValue={initCVC}
                      register={register}
                      validate={{
                        required: true
                      }}
                      isError={errors.cvc?.type}
                      disabled={isLoadingUpdateCard}
                      classNameWrap="profile-form__block profile-form__block--width" 
                      isRequired
                    /> */}
                <span className="profile-form__error-text">{errors.cvc?.type === 'required' && 'Введите cvc'}</span>
              </div>
            </div>
          </div>
          <div className="profile-form__right-block">
            <Card date={expiryDate} numberCard={initCardNumber} />
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
