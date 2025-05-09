import Button from '../../ui/button/button';
import CatImage from '../cat-image/cat-image';

const CatDisplay = () => {
  return (
    <section className='cat-display'>
      <form className='cat-display__form'>
        <label className='cat-display__label'>
          <input className='cat-display__checkbox' type='checkbox' />
          Enabled
        </label>
        <label className='cat-display__label'>
          <input className='cat-display__checkbox' type='checkbox' />
          Auto-refresh every 5 seconds
        </label>
        <Button>Get cat</Button>
      </form>
      <CatImage url={'https://cdn2.thecatapi.com/images/a59.jpg'} />
    </section>
  );
};

export default CatDisplay;
