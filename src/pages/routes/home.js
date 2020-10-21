import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

// Actions
import { fetchInspirationCards } from 'actions';

// Selectors
import { selectInspirationCards } from 'selectors';

// Components
import { InspirationCards } from 'components/inspiration-cards';

const Home = () => {
  const dispatch = useDispatch();
  const {
    inspirationCardsIsLoading,
    inspirationCards,
    inspirationCardsIsError,
  } = useSelector(selectInspirationCards);

  React.useEffect(() => {
    dispatch(fetchInspirationCards());
  }, [dispatch]);

  React.useEffect(() => {
    const notify = () => toast.error(inspirationCardsIsError);

    if (inspirationCardsIsError) {
      notify();
    }
  }, [inspirationCardsIsError]);

  return (
    <InspirationCards
      isLoading={inspirationCardsIsLoading}
      isError={inspirationCardsIsError}
      inspirationCards={inspirationCards}
    />
  );
};

export { Home };
