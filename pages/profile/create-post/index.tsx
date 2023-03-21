import { Layout } from '../../../components/layout/Layout';
import { NextPageWithLayout } from '../../page';

const CreatePostPage: NextPageWithLayout = () => {
  return <div>CREATE POST</div>;
};

CreatePostPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CreatePostPage;
