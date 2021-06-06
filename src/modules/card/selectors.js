import { createSelector } from 'reselect';

export const getCurrentCard = createSelector(
  state => state.card.currentCard,
  currentCard => ({...currentCard})
);

export const getLoadingViewCard = createSelector(
  state => state.card.isLoadingViewCard,
  isLoadingViewCard => isLoadingViewCard
);

export const getUpdateSuccess = createSelector(
  state => state.card.isUpdateSuccess,
  isUpdateSuccess => isUpdateSuccess
);

export const getLoadingUpdateCard = createSelector(
  state => state.card.isLoadingUpdateCard,
  isLoadingUpdateCard => isLoadingUpdateCard
);