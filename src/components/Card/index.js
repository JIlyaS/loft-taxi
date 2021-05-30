import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {CardContent, Card as UICard} from '@material-ui/core';

import cardRoad from '../../assets/images/card-road.svg';
import cardIcon from '../../assets/images/card-icon.svg';

import './style.css';

const Card = ({ date, numberCard }) => {
  return (
    <div className="card">
      <UICard className="card__ui">
        <CardContent className="card__content">
          <div className="card__content-top">
            <img className="card__icon-road" src={cardRoad} width="34px" height="34px" alt="Иконка карточки" />
            <span className="card__date">{date ? format(date, 'MM/yy') : 'MM/YY'}</span>
          </div>
          <div className="card__content-main">
            <p className="card__number">{ numberCard }</p>
          </div>
          <div className="card__content-bottom">
            <img className="card__icon-card" src={cardIcon} width="29px" height="26px" alt="Иконка карточки" />
            <span className="card__icon-ellipses"></span>
          </div>
        </CardContent>
      </UICard>
    </div>
  );
}

Card.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  numberCard: PropTypes.string.isRequired,
}

Card.defaultProps = {
  date: new Date(),
  numberCard: '',
}

export default Card;

export {Card};
