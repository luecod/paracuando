import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const CreateAccPage: NextPageWithLayout = () => {
  return <div>CREATE ACCOUNT:</div>;
};

CreateAccPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CreateAccPage;
