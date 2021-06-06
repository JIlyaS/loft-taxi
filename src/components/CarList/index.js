import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {CardContent, Card} from '@material-ui/core';

import carStandart from '../../assets/images/car-standart.svg';
import carPremium from '../../assets/images/car-premium.svg';
import carBusiness from '../../assets/images/car-business.svg';

import './style.css';

const getCarImage = (type) => {
  switch (type) {
    case 'standart':
      return <img className="car-list__img car-list__img--standart" src={carStandart} width="95px" height="73px" alt="Стандарт такси" />;
    case 'premium':
      return <img className="car-list__img car-list__img--premium" src={carPremium} width="118px" height="81px" alt="Премиум такси" />;
    case 'bisness':
      return <img className="car-list__img car-list__img--business" src={carBusiness} width="100px" height="64px" alt="Бизнесс такси" />;
    default:
      return null;
  }
};

const CarList = ({ carList }) => {
  return (
    <div className="car-list" data-testid="car-list">
      {
        carList.map((car) => (
          <Fragment>
            <input
              className="car-list__radio"
              type="radio" 
              id={`car-list-${car.type}`} 
              name={car.type}
              value={car.type}
              checked={car.checked}
            />
            <label 
              className="car-list__label" 
              htmlFor={`car-list-${car.type}`} 
              data-testid={`car-list-${car.type}`}
            >
              <Card className="car-list__item" key={car.type}>
                <CardContent className="car-list__content">
                  <h2 className="car-list__title">{car.name}</h2>
                  <span className="car-list__cost-name">Стоимость</span>
                  <span className="car-list__cost">{car.cost}</span>
                  {getCarImage(car.type)}
                </CardContent>
              </Card>
            </label>
          </Fragment>
        ))
      }
    </div>
  );
}

CarList.propTypes = {
  carList: PropTypes.array.isRequired,
}

CarList.defaultProps = {
  carList: [],
}

export default CarList;

export {CarList};
