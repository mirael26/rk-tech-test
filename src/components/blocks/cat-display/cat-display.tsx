import { useEffect, useState } from 'react';
import Button from '../../ui/button/button';
import CatImage from '../cat-image/cat-image';
import { getCatImageUrl } from '../../../request';
import Spinner from '../../ui/spinner/spinner';

const REFRESH_INTERVAL_MS = 5000;

const CatDisplay = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isAutoRefresh, setIsAutoRefresh] = useState(false);
  const [timerId, setTimerId] = useState<number | undefined>();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isAutoRefresh) {
      clearInterval(timerId);
    }

    if (isAutoRefresh) {
      setTimerId(setInterval(() => getImage(), REFRESH_INTERVAL_MS));
    }
    return () => clearInterval(timerId);
  }, [isAutoRefresh]);

  const onGetImageButtonClick = () => {
    if (isAutoRefresh) {
      setIsAutoRefresh(false);
    }

    getImage();
  };

  const getImage = () => {
    setIsLoading(true);
    getCatImageUrl()
      .then((url) => setImageUrl(url))
      .finally(() => setIsLoading(false));
  };

  return (
    <section className='cat-display'>
      <form className='cat-display__form'>
        <label className='cat-display__label'>
          <input
            className='cat-display__checkbox'
            type='checkbox'
            checked={isEnabled}
            onChange={() => setIsEnabled((prev) => !prev)}
          />
          Enabled
        </label>

        <label className='cat-display__label'>
          <input
            className='cat-display__checkbox'
            type='checkbox'
            checked={isAutoRefresh}
            onChange={() => setIsAutoRefresh((prev) => !prev)}
          />
          Auto-refresh every 5 seconds
        </label>
        <Button
          disabled={!isEnabled || isLoading}
          onClick={() => onGetImageButtonClick()}
        >
          Get cat
        </Button>
      </form>
      {isLoading ? <Spinner /> : <CatImage url={imageUrl} />}
    </section>
  );
};

export default CatDisplay;
