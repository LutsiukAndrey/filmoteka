import './SearchBar.scss';

import { useSearchParams } from 'react-router-dom';

export const SearchBar = ({ submit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('q');
  return (
    <div className="search">
      <form onSubmit={submit} className="search_form">
        <input
          className="search_form-input"
          name="searchfield"
          type="text"
          // autoComplete="off"
          value={value ? value : ''}
          onChange={e => setSearchParams({ q: e.target.value })}
          placeholder="Search images and photos"
        />
        <button type="submit" className="search_form-btn">
          Search
        </button>
      </form>
    </div>
  );
};
