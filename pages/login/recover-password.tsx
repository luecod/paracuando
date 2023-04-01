import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const RecoverPassPage: NextPageWithLayout = () => {
  return <div> RECOVER PASSWORD</div>;
};

RecoverPassPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default RecoverPassPage;
