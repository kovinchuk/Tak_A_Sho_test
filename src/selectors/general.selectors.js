import { createSelector } from 'reselect';

const selectedGeneral = state => state.general;

export const selectedInspirationCardsIsLoading = createSelector(
  [selectedGeneral],
  state => state.isLoading,
);

export const selectedInspirationCards = createSelector(
  [selectedGeneral],
  state => state.inspirationCards,
);
