import Image from 'next/image';
import Link from 'next/link';

const RecoverPassPage = () => {
  return (
    <div>
      <div className="">
        <Image
          className="min-h-[650px] sm:min-h-[680px]"
          src={'/login-banner1.png'}
          alt=""
          fill
          objectFit="cover"
        ></Image>
      </div>
      <div className="relative">
        <div className="w-[378px] h-[571px] bg-black bg-opacity-70 rounded-[20px] text-app-grayLighter pt-[57px] px-[39px] m-auto mt-[83px] flex flex-col border border-app-gray sm:w-[557px] sm:h-[529px] sm:pt-[114px] sm:mt-[152px]">
          <h2 className="font-semibold text-[32px] leading-[37.5px]">
            Encontremos tu cuenta
          </h2>
          <p className="mt-[12px] font-normal text-[14px] leading-5 sm:mt-[22px] sm:max-w-[427px]">
            Para restablecer tu contraseña, escribe la dirección de correo
            electrónico que puedes haber utilizado con Para cuándo?
          </p>
          <input
            className="border border-app-grayLighter bg-transparent py-[16px] pl-[16px] rounded-[5px] mt-[28px]"
            type="email"
            placeholder="ejemplo@mail.com"
          />
          <button className="bg-app-yellow font-semibold text-[16px] leading-4 mt-[101px] rounded-[5px] px-[18px] h-[46px] font-Inter text-black">
            <div className="sm:hidden">
              <p>Enviar correo de</p>
              <p>restablecimiento de contraseña</p>
            </div>
            <p
              className="hidden sm:block
            "
            >
              Enviar correo de restablecimiento de contraseña
            </p>
          </button>
          <Link className="mt-[14.74px] w-[157px] m-auto" href={'/login'}>
            <p className="underline text-app-yellow font-Inter font-normal text-[14px] leading-5">
              O volver a iniciar sesión
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

// RecoverPassPage.getLayout = (page) => {
//   return <Layout>{page}</Layout>;
// };

export default RecoverPassPage;
