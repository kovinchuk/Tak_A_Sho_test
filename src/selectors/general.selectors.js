import { createSelector } from 'reselect';

const selectGeneral = state => state.general;

export const selectInspirationCards = createSelector(
  [selectGeneral],
  state => ({
    inspirationCards: state.inspirationCards,
    inspirationCardsIsLoading: state.isLoading,
    inspirationCardsIsError: state.error,
  }),
);
