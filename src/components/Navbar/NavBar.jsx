export const NavBar = ({ submit }) => {
  return (
    <form onSubmit={submit}>
      <input
        name="searchfield"
        type="text"
        // autoComplete="off"
        placeholder="Search images and photos"
      />
      <button type="submit">Search</button>
    </form>
  );
};
