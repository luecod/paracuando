import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const ConfigPage: NextPageWithLayout = () => {
  return <div>ConfigPage:</div>;
};

ConfigPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default ConfigPage;
