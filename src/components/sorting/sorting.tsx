import { useState } from 'react';
import { SortType } from '../../const';
import clsx from 'clsx';

type SortingProps = {
  currentSort: SortType;
  onSortTypeChange: (sortType: SortType) => void;
};

function Sorting({ currentSort, onSortTypeChange }: SortingProps): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);

  const handleSortClick = () => {
    setIsOpened(!isOpened);
  };

  const handleOptionClick = (sortType: SortType) => {
    onSortTypeChange(sortType);
    setIsOpened((false));
  };

  const optionsClassName = clsx(
    'places__options',
    'places__options--custom',
    {
      'places__options--opened': isOpened,
    }
  );

  const getOptionClassName = (sortType: SortType) => clsx(
    'places__option',
    {
      'places__option--active': currentSort === sortType,
    }
  );

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortClick}>
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={optionsClassName}>
        <li
          className={getOptionClassName(SortType.Popular)}
          tabIndex={0}
          onClick={() => handleOptionClick(SortType.Popular)}
        >
          Popular
        </li>
        <li
          className={getOptionClassName(SortType.PriceLowToHigh)}
          tabIndex={0}
          onClick={() => handleOptionClick(SortType.PriceLowToHigh)}
        >
          Price: low to high
        </li>
        <li
          className={getOptionClassName(SortType.PriceHighToLow)}
          tabIndex={0}
          onClick={() => handleOptionClick(SortType.PriceHighToLow)}
        >
          Price: high to low
        </li>
        <li
          className={getOptionClassName(SortType.TopRatedFirst)}
          tabIndex={0}
          onClick={() => handleOptionClick(SortType.TopRatedFirst)}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}

export default Sorting;
