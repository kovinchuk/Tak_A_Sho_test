// Services
import { getInspirationCards } from 'services';

// Types
import { inspirationTypes } from 'types';

export const fetchInspirationCards = () => {
  function fetchInspirationCardsRequest() {
    return {
      type: inspirationTypes.FETCH_INSPIRATON_CARDS_REQUEST,
    };
  }
  function fetchInspirationCardsSuccess(payload) {
    return {
      type: inspirationTypes.FETCH_INSPIRATON_CARDS_SUCCESS,
      payload,
    };
  }
  function fetchInspirationCardsFailure(error) {
    return {
      type: inspirationTypes.FETCH_INSPIRATON_CARDS_FAILURE,
      payload: error,
    };
  }

  return dispatch => {
    dispatch(fetchInspirationCardsRequest());

    getInspirationCards().then(
      response => dispatch(fetchInspirationCardsSuccess(response)),
      error => {
        dispatch(fetchInspirationCardsFailure(error.message));
      },
    );
  };
};

export const removeInspirationCard = payload => ({
  type: inspirationTypes.REMOVE_INSPIRATON_CARD,
  payload,
});

export const sortInspirationCards = () => ({
  type: inspirationTypes.SORT_INSPIRATON_CARDS,
});
