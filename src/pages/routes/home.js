import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Actions
import { fetchInspirationCards } from 'actions';

// Selectors
import {
  selectedInspirationCardsIsLoading,
  selectedInspirationCards,
} from 'selectors';

// Components
import { InspirationCards } from 'components/inspiration-cards';

const Home = () => {
  const dispatch = useDispatch();
  const { inspirationCardsIsLoading, inspirationCards } = useSelector(
    createStructuredSelector({
      inspirationCardsIsLoading: selectedInspirationCardsIsLoading,
      inspirationCards: selectedInspirationCards,
    }),
  );

  React.useEffect(() => {
    dispatch(fetchInspirationCards());
  }, [dispatch]);

  return (
    <InspirationCards
      isLoading={inspirationCardsIsLoading}
      inspirationCards={inspirationCards}
    />
  );
};

export { Home };
