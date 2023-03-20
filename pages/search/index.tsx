import { NextPageWithLayout } from '../page';

const SearchPage: NextPageWithLayout = () => {
  return (
    <div>
      <input type="text" name="search" id="search" />
      <button>search</button>
    </div>
  );
};

export default SearchPage;
