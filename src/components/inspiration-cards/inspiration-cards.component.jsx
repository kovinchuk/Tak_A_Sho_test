import React from 'react';
import PropTypes from 'prop-types';

// STYLES
import './inspiration-cards.styles.scss';

// Hight order components
import { withSpinner } from 'components/HOC';

// Components
import { InspirationCard } from 'components/inspiration-card';

const prefix = 'inspiration-cards';

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  inspirationCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const InspirationCards = ({ inspirationCards }) => {
  const renderCards = inspirationCard => (
    <InspirationCard key={inspirationCard.id} {...inspirationCard} />
  );

  return (
    <div className={prefix}>
      {inspirationCards.length > 0 ? (
        inspirationCards.map(renderCards)
      ) : (
        <div className={`${prefix}__message`}>Cards not found</div>
      )}
    </div>
  );
};

const InspirationCardsWithSpinner = withSpinner(InspirationCards);

InspirationCardsWithSpinner.propTypes = propTypes;

export { InspirationCardsWithSpinner as InspirationCards };
