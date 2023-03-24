import Logo from '../../components/assets/logo/Logo';
import { NextPageWithLayout } from '../page';

const LoginPage: NextPageWithLayout = () => {
  return (
    <div className='h-screen bg-[url("/login-banner1.png")] bg-cover bg-no-repeat bg-center'>
      <div className="absolute left-[19%] top-[38%]">
        <Logo variant="yellow" onlyIcon={false} />
      </div>
    </div>
  );
};

export default LoginPage;
