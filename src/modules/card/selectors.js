import { createSelector } from 'reselect';

export const getCurrentCard = createSelector(
  state => state.card.currentCard,
  currentCard => ({...currentCard})
);

export const getLoadingViewCard = createSelector(
  state => state.card.isLoadingViewCard,
  isLoadingViewCard => isLoadingViewCard
);