import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const SearchPage: NextPageWithLayout = () => {
  return (
    <div>
      <input type="text" name="search" id="search" />
      <button>search</button>
    </div>
  );
};

SearchPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default SearchPage;
