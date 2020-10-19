import { produce } from 'immer';

// Types
import { ideasTypes } from 'types';

const initialState = {
  isFetching: false,
  items: [],
  error: null,
};

export const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ideasTypes.FETCH_IDEAS_ITEMS_REQUEST:
      return produce(state, draftState => {
        draftState.isFetching = true;
      });

    case ideasTypes.FETCH_IDEAS_ITEMS_SUCCESS:
      return produce(state, draftState => {
        draftState.isFetching = false;
        draftState.items = action.payload;
      });

    case ideasTypes.FETCH_IDEAS_ITEMS_FAILURE:
      return produce(state, draftState => {
        draftState.isFetching = false;
        draftState.error = action.payload;
      });

    default:
      return state;
  }
};
