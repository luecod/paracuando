import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Logo from '../../components/assets/logo/Logo';
import LogoSmall from '../../components/assets/logo/LogoSmall';
import Approved from '../../components/assets/svg/Approved';
import { Close } from '../../components/assets/svg/Close';
import Error from '../../components/assets/svg/Error';
import Hide from '../../components/assets/svg/Hide';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  // userName: string;
  password: string;
};
export default function SingUpPage() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      // userName: '',
      password: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);

    // createUser(data)
    //   .then((resp) => {
    //     console.log(resp);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const [Password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    // setPassword(newPassword);
    setValidPassword(regex.test(newPassword));
  };

  // const [Email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newEmail = event.target.value;
    // setEmail(newEmail);
    setValidEmail(regex.test(newEmail));
  };

  return (
    <div>
      <Image
        className="z-0 bg-gradient-to-r from-black to-transparent"
        src={'/login-banner1.png'}
        alt=""
        fill
        objectFit="cover"
      ></Image>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>

      <div className="flex flex-col sm:grid md:grid-cols-2 h-screen place-items-center gap-2">
        <div className="z-10 flex flex-col items-center">
          <Link href={'/'} className="mt-[42px] mb-[17px] sm:hidden">
            <LogoSmall variant="yellow" onlyIcon={false} />
          </Link>
          <Link href={'/'} className="hidden sm:flex">
            <Logo variant="yellow"></Logo>
          </Link>
        </div>

        <div className="bg-black opacity-80 text-white border border-white rounded-[20px] px-[38px] mx-[18px] max-w-[378px] relative sm:max-w-[557px] sm:max-h-[560px]">
          <div className="w-full text-left flex flex-col">
            <Link href={'/'} className="absolute right-[12px] top-[12px]">
              <Close></Close>
            </Link>
            <h1 className="mt-[53px] font-semibold text-3xl leading-[20px]">
              Todos votamos!
            </h1>
            <p className="sm:hidden font-normal text-sm leading-5 mt-[14px] mb-[22px]">
              Regístrate, valida tu voto
            </p>
            <p className="hidden font-normal text-sm leading-5 mt-[14px] mb-[22px]">
              Regístrate para ingresar
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <label className="app-label-1 text-[#F8F7FA]" htmlFor="">
                Email
              </label>
              <div className="flex flex-col relative">
                <input
                  className="min-h-[56px] bg-transparent p-[16px] border border-[#F8F7FA] rounded-[5px]"
                  type="text"
                  placeholder=" ejemplo@mail.com"
                  {...register('email')}
                  // value={Email}
                  onChange={handleChangeEmail}
                />

                <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                  {validEmail ? <Approved></Approved> : <Error></Error>}
                </div>
              </div>
              <div className="flex gap-[9px]">
                <div className="flex flex-col gap-2">
                  <label className="app-label-1 text-[#F8F7FA]" htmlFor="">
                    Nombre
                  </label>
                  <input
                    className="sm:max-w-[213px] min-h-[56px] max-w-[146.85px] bg-transparent border border-[#F8F7FA] rounded-[5px] p-[16px]"
                    type="text"
                    placeholder=" Erik"
                    {...register('firstName')}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="app-label-1 text-[#F8F7FA]" htmlFor="">
                    Apellido
                  </label>
                  <input
                    className="sm:max-w-[213px] min-h-[56px] max-w-[146.85px] bg-transparent border border-[#F8F7FA] rounded-[5px] p-[16px]"
                    type="text"
                    placeholder=" Perez"
                    {...register('lastName')}
                  />
                </div>
              </div>
              <label className="app-label-1 text-[#F8F7FA]" htmlFor="">
                Contraseña
              </label>
              <div className="flex flex-col relative">
                <input
                  className="min-h-[56px] bg-transparent border border-[#F8F7FA] rounded-[5px] p-[16px]"
                  type={showPassword ? 'text' : 'password'}
                  placeholder=" ***********"
                  {...register('password')}
                  onChange={handleChangePassword}
                />
                <button
                  className="absolute top-1/2 right-11 transform -translate-y-1/2 focus:outline-none"
                  onClick={handleShowPassword}
                >
                  <Hide></Hide>
                </button>
                <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                  {validPassword ? <Approved></Approved> : <Error></Error>}
                </div>
              </div>
              <div className="relative max-w-full"></div>
              <p className="app-label-2">
                &#8226; La contraseña debe tener mayúsculas, minúsculas y
                números
              </p>
              <button className="font-Inter mt-[18px] py-[12.63px] bg-app-yellow text-black">
                Crear cuenta
              </button>
              <div className="mt-[14.74px] mb-[34px] flex justify-center">
                <Link
                  className="font-Inter font-normal text-sm leading-5 underline text-app-yellow"
                  href={'/login'}
                >
                  O inicia sesión
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
