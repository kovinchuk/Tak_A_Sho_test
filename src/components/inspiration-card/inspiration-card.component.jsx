import React from 'react';
import { useDispatch } from 'react-redux';

// STYLES
import './inspiration-card.styles.scss';

// Components
import { Button } from 'components/UI/button';
import { Stat } from 'components/UI/stat';

// Actions
import { removeInspirationCard } from 'actions';

// Images
import IconClose from './img/close.svg';
import IconLike from './img/like.svg';
import IconEye from './img/eye.svg';

// Helpers
import { getRandomInt } from 'lib/helpers';

const prefix = 'inspiration-card';

const InspirationCard = React.memo(function InspirationCard({
  id,
  title,
  url,
}) {
  const dispatch = useDispatch();
  const randomLikes = React.useMemo(() => getRandomInt(100), []);
  const randomViews = React.useMemo(() => getRandomInt(20), []);

  const removeHandleClick = React.useCallback(() => {
    dispatch(removeInspirationCard(id));
  }, [dispatch, id]);

  return (
    <figure className={prefix}>
      <img className={`${prefix}__preview`} src={url} alt={title} />

      <div className={`${prefix}__caption`}>
        User name
        <div className={`${prefix}__pics-group`}>
          <Stat count={randomLikes} alt="users like" icon={IconLike} />
          <Stat count={randomViews} alt="users view" icon={IconEye} />
        </div>
      </div>

      <div className={`${prefix}__overview`}>
        <div className={`${prefix}__overview-header`}>
          <Button
            theme="transparent"
            size="small"
            onClick={() => removeHandleClick()}
          >
            <img
              className="button__icon"
              src={IconClose}
              alt="icon for delete inspiration card"
            />
            Delete
          </Button>
          <div className={`${prefix}__buttons-group`}>
            <Button size="small">
              <img
                className="button__icon"
                src={IconLike}
                alt="icon for like inspiration card"
              />
              Like
            </Button>
            <Button size="small">Save</Button>
          </div>
        </div>
        <div className={`${prefix}__overview-footer`}>
          <figcaption className={`${prefix}__title`}>{title}</figcaption>
          <p className={`${prefix}__caption-middle`}>Farmhouse Laundry Room</p>
          <p className={`${prefix}__caption-bottom`}>United kingdom</p>
        </div>
      </div>
    </figure>
  );
});

export { InspirationCard };
