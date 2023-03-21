import Link from 'next/link';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const ProfilePage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>PROFILE</h1>
      <div>
        <Link href={'/profile/create-post'}>create post</Link>
      </div>
      <div>
        <Link href={'/profile/config'}>config profile</Link>
      </div>
    </div>
  );
};

ProfilePage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default ProfilePage;
