import { produce } from 'immer';

// Types
import { inspirationTypes } from 'types';

// Helpers
import { sortArrayOfObjectsByFields } from 'lib/helpers';

const initialState = {
  isLoading: false,
  inspirationCards: [],
  error: null,
};

export const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case inspirationTypes.FETCH_INSPIRATON_CARDS_REQUEST:
      return produce(state, draftState => {
        draftState.isLoading = true;
      });

    case inspirationTypes.FETCH_INSPIRATON_CARDS_SUCCESS:
      return produce(state, draftState => {
        draftState.isLoading = false;
        draftState.inspirationCards = action.payload;
      });

    case inspirationTypes.FETCH_INSPIRATON_CARDS_FAILURE:
      return produce(state, draftState => {
        draftState.isLoading = false;
        draftState.error = action.payload;
      });

    case inspirationTypes.REMOVE_INSPIRATON_CARD:
      return produce(state, draftState => {
        draftState.inspirationCards = draftState.inspirationCards.filter(
          card => card.id !== action.payload,
        );
      });

    case inspirationTypes.SORT_INSPIRATON_CARDS:
      return produce(state, draftState => {
        draftState.inspirationCards = sortArrayOfObjectsByFields(
          draftState.inspirationCards,
          'title',
        );
      });

    default:
      return state;
  }
};
