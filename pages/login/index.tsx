import Link from 'next/link';
import { NextPageWithLayout } from '../page';

const LoginPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>LOGIN:</h1>
      <Link href={'/login/create-account'}>create account</Link>
    </div>
  );
};

export default LoginPage;
