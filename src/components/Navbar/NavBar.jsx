import { useSearchParams } from 'react-router-dom';

export const NavBar = ({ submit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('q');
  return (
    <form onSubmit={submit}>
      <input
        name="searchfield"
        type="text"
        // autoComplete="off"
        value={value ? value : ''}
        onChange={e => setSearchParams({ q: e.target.value })}
        placeholder="Search images and photos"
      />
      <button type="submit">Search</button>
    </form>
  );
};
