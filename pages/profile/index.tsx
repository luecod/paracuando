import Link from 'next/link';
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

export default ProfilePage;
