import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../components/assets/logo/Logo';
import LogoSmall from '../../components/assets/logo/LogoSmall';
import { Close } from '../../components/assets/svg/Close';
import { NextPageWithLayout } from '../page';

const LoginPage: NextPageWithLayout = () => {
  return (
    <div>
      <div>
        <Image
          className="z-0 bg-gradient-to-r from-black to-transparent"
          src={'/login-banner1.png'}
          alt=""
          fill
          objectFit="cover"
        ></Image>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 h-screen place-items-center">
        <div className="z-10 flex flex-col items-center sm:flex-row sm:items-center sm:justify-center">
          <div>
            <div className="mt-[22px] mb-[26px] sm:hidden">
              <LogoSmall variant="yellow" onlyIcon={false} />
            </div>
            <div className="hidden sm:flex">
              <Logo variant="yellow"></Logo>
            </div>
          </div>
        </div>
        <div className="bg-black opacity-80 text-white border border-white rounded-[20px] px-[38px] mx-[18px] max-w-[378px] relative sm:max-w-[557px] sm:max-h-[560px]">
          <Link href={'/'} className="absolute right-[12px] top-[12px]">
            <Close></Close>
          </Link>
          <h1 className="mt-[53px] font-semibold text-3xl leading-[20px]">
            ¡Hola!
          </h1>
          <p className="font-normal text-sm leading-5 mt-[14px] mb-[22px]">
            Inicie sesión con los datos que ingresó durante su registro.
          </p>
          <form className="flex flex-col gap-2" action="">
            <label className="app-label-1 text-[#F8F7FA]" htmlFor="">
              Email
            </label>
            <input
              className="min-h-[56px] bg-transparent border border-[#F8F7FA] rounded-[5px]"
              type="text"
              placeholder=" Email"
            />
            <label className="app-label-1 text-[#F8F7FA]" htmlFor="">
              Contraseña
            </label>
            <input
              className="min-h-[56px] bg-transparent border border-[#F8F7FA] rounded-[5px]"
              type="password"
              placeholder=" Contraseña"
            />
            <p className="app-label-2">
              &#8226; ¿Olvidaste tu contraseña?{' '}
              <Link
                className="text-app-yellow underline"
                href={'/login/recover-password'}
              >
                Recupérala aquí
              </Link>
            </p>
            <button className="font-Roboto mt-[22px] py-[12.63px] bg-app-yellow text-black">
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

export default LoginPage;
