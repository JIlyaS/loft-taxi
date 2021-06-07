/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { setOrderSuccess } from '../../modules/route/actions';

import './style.css';


const CssButton = withStyles({
  root: {
    fontSize: '24px',
    lineHeight: '28px',
    fontWeight: '400',
    textTransform: 'none',
    borderRadius: '70px'
  },
})(Button);

const OrderConfirm = ({
  setOrderSuccessAction
}) => {
  return (
    <div className="order-confirm" data-testid="order-confirm">
      <h2 className="order-confirm__header">Заказ размещен</h2>
      <p className="order-confirm__text">
        Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
      </p>
      <div className="order-confirm__block-btn">
        <CssButton 
          className="order-confirm__btn" 
          type="button" 
          variant="contained" 
          color="primary"
          data-testid="order-confirm-btn"
          onClick={() => setOrderSuccessAction(false)}
          disableElevation 
          fullWidth
        >
          Сделать новый заказ
        </CssButton>
      </div>
    </div>
  );
}

OrderConfirm.propTypes = {
  isRouteSuccess: PropTypes.bool.isRequired,
  setOrderSuccessAction: PropTypes.func.isRequired,
}

OrderConfirm.defaultProps = {
  isRouteSuccess: false,
}

const mapDispatchToProps = {
  setOrderSuccessAction: setOrderSuccess,
}

export default connect(
  null, mapDispatchToProps
)(OrderConfirm);

export {OrderConfirm};
