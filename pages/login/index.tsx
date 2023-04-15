import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Logo from '../../components/assets/logo/Logo';
import LogoSmall from '../../components/assets/logo/LogoSmall';
import { Close } from '../../components/assets/svg/Close';
import Hide from '../../components/assets/svg/Hide';
import { login } from '../../lib/services/auth.service';

type FormValues = {
  email: string;
  password: string;
};

// const LoginPage: NextPageWithLayout = () => {
const LoginPage = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (data: FormValues) => {
    login(data)
      .then((res) => {
        Cookies.set('token', res.data.token);
        router.push('/');
        // console.log(res);
      })
      .catch((err) => {
        console.log('Credenciales incorrectas' + err);
        reset();
      });
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <Image
        className="min-h-[650px] sm:min-h-[540px]"
        src={'/login-banner1.png'}
        alt=""
        fill
        objectFit="cover"
      ></Image>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>

      <div className="flex flex-col sm:grid sm:grid-cols-2 h-screen place-items-center">
        <div className="z-10 flex flex-col items-center sm:flex-row sm:items-center sm:justify-center">
          <Link href={'/'} className="mt-[22px] mb-[26px] sm:hidden">
            <LogoSmall variant="yellow" onlyIcon={false} />
          </Link>
          <Link href={'/'} className="hidden sm:flex">
            <Logo variant="yellow"></Logo>
          </Link>
        </div>
        <div className="bg-black bg-opacity-80 text-white border border-white rounded-[20px] px-[38px] mx-[18px] max-w-[378px] relative sm:max-w-[557px] sm:max-h-[560px]">
          <Link href={'/'} className="absolute right-[12px] top-[12px]">
            <Close></Close>
          </Link>
          <h1 className="mt-[53px] font-semibold text-3xl leading-[20px]">
            ¡Hola!
          </h1>
          <p className="font-normal text-sm leading-5 mt-[14px] mb-[22px]">
            Inicie sesión con los datos que ingresó durante su registro.
          </p>
          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="app-label-1 text-[#F8F7FA]" htmlFor="">
              Email
            </label>
            <input
              className="min-h-[56px] bg-transparent border border-[#F8F7FA] rounded-[5px] p-[16px]"
              type="text"
              placeholder=" ejemplo@mail.com"
              {...register('email')}
            />
            <label className="app-label-1 text-[#F8F7FA]" htmlFor="">
              Contraseña
            </label>
            <div className="flex flex-col relative">
              <input
                className="min-h-[56px] bg-transparent border border-[#F8F7FA] rounded-[5px] p-[16px]"
                type={showPassword ? 'text' : 'password'}
                placeholder=" Contraseña"
                {...register('password')}
              />
              <button
                className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                onClick={handleShowPassword}
              >
                <Hide></Hide>
              </button>
            </div>
            <p className="app-label-2">
              &#8226; ¿Olvidaste tu contraseña?{' '}
              <Link
                className="text-app-yellow underline"
                href={'/login/recover-password'}
              >
                Recupérala aquí
              </Link>
            </p>
            <button className="font-Inter mt-[22px] py-[12.63px] bg-app-yellow text-black">
              Iniciar sesión
            </button>
            <div className="mt-[14.74px] mb-[34px] flex justify-center">
              <Link
                className="font-Inter font-normal text-sm leading-5 underline text-app-yellow"
                href={'/sign-up'}
              >
                O crea una cuenta aquí
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// LoginPage.getLayout = (page) => {
//   return <Layout>{page}</Layout>;
// };

export default LoginPage;
