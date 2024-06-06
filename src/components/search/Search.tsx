import SearchIcon from '@mui/icons-material/Search';

import style from './style.module.scss';

const Search = () => {
  return (
    <div className={style.search}>
      <SearchIcon className={style['search-icon']} />
      <input placeholder="Search" className={style['search-input']} />
    </div>
  );
};

export default Search;
