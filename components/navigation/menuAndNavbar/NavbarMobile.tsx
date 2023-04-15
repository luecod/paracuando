import Cookie from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import EmptyHeart from '../../assets/svg/EmptyHeart';
import IconConfiguration from '../../assets/svg/IconConfiguration';
import IconOff from '../../assets/svg/IconOff';
import Line from '../../assets/svg/Line';
import Plus from '../../assets/svg/Plus';

interface INavbarMobile {
  isActive: boolean;
}

const NavbarMobile: React.FC<INavbarMobile> = ({ isActive = false }) => {
  const router = useRouter();
  const logout = () => {
    Cookie.remove('token');
    router.push('/');
  };

  if (!isActive) return null;
  return (
    <nav className="absolute z-10 top-[70px] h-[240px] rounded-b-[20px] w-screen flex flex-col gap-5 shadow-[0_2px_4px_rgba(0,0,0,0.25)] bg-white sm:h-[171px] sm:w-[198px] sm:rounded-[20px] sm:pt-[27px] sm:gap-[18px] sm:items-center sm:right-10 sm:top-[60px]">
      <Link
        href={'/profile/create-post'}
        className="sm:hidden mt-[35px] flex justify-center"
      >
        <button className="flex items-center w-[166px]">
          <Plus />
          <p className="ml-6">Crear Publicación</p>
        </button>
      </Link>

      <Link href={'/profile'} className="sm:hidden flex justify-center">
        <button className="flex items-center w-[166px]">
          <EmptyHeart /> <p className="ml-6">Mis Votos</p>
        </button>
      </Link>

      <Link href={'/profile/config'} className="flex justify-center">
        <button className="flex items-center w-[166px]">
          <IconConfiguration /> <p className="ml-6">Configuración</p>
        </button>
      </Link>

      <div className="flex justify-center">
        <button className="flex items-center w-[166px]" onClick={logout}>
          <IconOff /> <p className="ml-6">Cerrar sesión</p>
        </button>
      </div>

      <div className="hidden sm:block">
        <Line />
      </div>

      <Link href={'/'} className="hidden sm:block">
        <button className="text-app-grayDark">Ayuda y soporte</button>
      </Link>
    </nav>
  );
};

export default NavbarMobile;
