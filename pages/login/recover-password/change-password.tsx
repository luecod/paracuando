import Image from 'next/image';
import { useEffect, useState } from 'react';
import Approved from '../../../components/assets/svg/Approved';
import Error from '../../../components/assets/svg/Error';
import Hide from '../../../components/assets/svg/Hide';

const ChangePassPage = () => {
  const [password, setPassword] = useState(''); //
  const [confirmPassword, setConfirmPassword] = useState(''); //
  const [showFirstPassword, setFirstPassword] = useState(false);
  const [showSecondPassword, setSecondPassword] = useState(false);
  const handleShowFirstPassword = () => {
    setFirstPassword(!showFirstPassword);
  };
  const handleShowSecondPassword = () => {
    setSecondPassword(!showSecondPassword);
  };

  const [validPassword, setValidPassword] = useState(false);
  const [validCheckPassword, setValidCheckPassword] = useState(false);
  const [showFirstChecker, setShowFirstChecker] = useState(false);
  const [showSecondChecker, setShowSecondChecker] = useState(false);
  const handleChangeFirstPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
    const newPassword = event.target.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    setValidPassword(regex.test(newPassword));
    setShowFirstChecker(true);
  };
  const handleChangeSecondPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
    console.log(confirmPassword);
    setShowSecondChecker(true);
  };

  useEffect(() => {
    if (password === confirmPassword) {
      setValidCheckPassword(true);
    } else {
      setValidCheckPassword(false);
    }
  }, [password, confirmPassword]);

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
            Elige una contraseña
          </h2>
          <label className="mt-[44px]" htmlFor="">
            Elige una contraseña
          </label>
          <div className="mt-[8px] flex flex-col relative">
            <input
              className="min-h-[56px] bg-transparent border border-[#F8F7FA] rounded-[5px] p-[16px]"
              type={showFirstPassword ? 'text' : 'password'}
              placeholder=" ***********"
              value={password}
              onChange={handleChangeFirstPassword}
            />
            <button
              className="absolute top-1/2 right-11 transform -translate-y-1/2 focus:outline-none"
              onClick={handleShowFirstPassword}
            >
              <Hide></Hide>
            </button>
            <div>
              {showFirstChecker && (
                <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                  {validPassword ? <Approved></Approved> : <Error></Error>}
                </div>
              )}
            </div>
          </div>
          {showFirstChecker && !validPassword && (
            <p className="mt-[8px] font-normal text-[14px] leading-5">
              &#8226; La contraseña debe tener mayúsculas, minúsculas, números y
              mínimo 8 caracteres
            </p>
          )}
          <label className="mt-[22px]" htmlFor="">
            Escríbela de nuevo
          </label>
          <div className="mt-[8px] flex flex-col relative">
            <input
              className="min-h-[56px] bg-transparent border border-[#F8F7FA] rounded-[5px] p-[16px]"
              type={showSecondPassword ? 'text' : 'password'}
              placeholder=" ***********"
              value={confirmPassword}
              onChange={handleChangeSecondPassword}
            />
            <button
              className="absolute top-1/2 right-11 transform -translate-y-1/2 focus:outline-none"
              onClick={handleShowSecondPassword}
            >
              <Hide></Hide>
            </button>

            {showSecondChecker && (
              <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                {validCheckPassword ? <Approved></Approved> : <Error></Error>}
              </div>
            )}
          </div>
          {!validCheckPassword && (
            <p className="mt-[8px] font-normal text-[14px] leading-5">
              &#8226; Las contraseñas no coinciden
            </p>
          )}
          <button className="bg-app-yellow font-semibold text-[16px] leading-4 mt-[62px] rounded-[5px] px-[18px] h-[46px] font-Inter text-black">
            <p className="">Cambiar contraseña</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassPage;
