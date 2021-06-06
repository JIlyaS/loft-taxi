/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import CarList from '../CarList';
import Select from '../Select';
import { getAddressList, getLoadingAddress } from '../../modules/address/selectors';
import { getFromRoute, getToRoute, getLoadingRoute } from '../../modules/route/selectors';
import { setFromRoute, setToRoute } from '../../modules/route/actions';

import Brightness1Icon from '@material-ui/icons/Brightness1';
import NearMeIcon from '@material-ui/icons/NearMe';
import { fetchAddressRequest } from '../../modules/address/actions';
import { fetchRouteRequest } from '../../modules/route/actions';

import './style.css';

const carList = [
  {
    name: 'Стандарт',
    cost: 150,
    type: 'standart',
    checked: true,
  },
  {
    name: 'Премиум',
    cost: 250,
    type: 'premium',
    checked: false,
  },
  {
    name: 'Бизнес',
    cost: 300,
    type: 'bisness',
    checked: false,
  },
];

const CssButton = withStyles({
  root: {
    fontSize: '22px',
    fontWeight: '400',
    textTransform: 'capitalize',
    borderRadius: '70px'
  },
  disabled: {
    backgroundColor: '#D8D7D5 !important',
    color: '#737373 !important'
  },
})(Button);
const MapForm = ({
  fromRoute,
  toRoute,
  isLoadingRoute,
  addressList,
  isLoadingAddress,
  setToRouteAction,
  setFromRouteAction,
  fetchRouteRequestAction,
  fetchAddressRequestAction
}) => {
  useEffect(() => {
    fetchAddressRequestAction();
  }, []);

  const isDisabledOrderBtn = !fromRoute || !toRoute || isLoadingAddress || isLoadingRoute;

  const handleMapFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = {
      from: fromRoute,
      to: toRoute,
    };
    fetchRouteRequestAction(formData);
  };

  const handleFromRouteChange = (evt) => {
    setFromRouteAction(evt.target.value);
  }

  const handleToRouteChange = (evt) => {
    setToRouteAction(evt.target.value);
  }

  return (
    <div className="map-form" data-testid="map-form">
      <form onSubmit={handleMapFormSubmit}>
        <div className="map-form__wrap">
          <div className="map-form__top-block" data-testid="map-form-top">
            <Select
              id="from"
              list={addressList.filter((address) => address.label !== toRoute)}
              className="map-form__select-first" 
              icon={Brightness1Icon}
              value={fromRoute}
              iconStart={() => (
                <Brightness1Icon className="map-form__brightness-icon" />
              )}
              onChange={handleFromRouteChange}
            />
            <div className="map-form__line" />
            <Select
              id="to"
              list={addressList.filter((address) => address.label !== fromRoute)}
              className="map-form__select-last"
              value={toRoute}
              iconStart={() => (
                <NearMeIcon className="map-form__near-me-icon" />
              )}
              onChange={handleToRouteChange}
            />
          </div>
          <div className="map-form__bottom-block" data-testid="map-form-bottom">
            <CarList carList={carList} />
            <div className="map-form__block-btn">
              <CssButton 
                className="map-form__save-btn" 
                type="submit" 
                variant="contained" 
                color="primary"
                disabled={isDisabledOrderBtn}
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

MapForm.propTypes = {
  addressList: PropTypes.array.isRequired,
  isLoadingRoute: PropTypes.bool.isRequired,
  isLoadingAddress: PropTypes.bool.isRequired,
  setToRouteAction: PropTypes.func.isRequired,
  setFromRouteAction: PropTypes.func.isRequired,
  fetchRouteRequestAction: PropTypes.func.isRequired,
  fetchAddressRequestAction: PropTypes.func.isRequired,
}

MapForm.defaultProps = {
  addressList: [],
  isLoadingAddress: false,
}

const mapStateToProps = (state) => {
  return {
    addressList: getAddressList(state),
    isLoadingAddress: getLoadingAddress(state),
    fromRoute: getFromRoute(state),
    toRoute: getToRoute(state),
    isLoadingRoute: getLoadingRoute(state),
  }
}

const mapDispatchToProps = {
  setFromRouteAction: setFromRoute,
  setToRouteAction: setToRoute,
  fetchRouteRequestAction: fetchRouteRequest,
  fetchAddressRequestAction: fetchAddressRequest,
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(MapForm);

export {MapForm};
