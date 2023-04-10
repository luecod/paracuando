import Link from 'next/link';
import EmptyHeart from '../../assets/svg/EmptyHeart';
import IconConfiguration from '../../assets/svg/IconConfiguration';
import IconOff from '../../assets/svg/IconOff';
import Plus from '../../assets/svg/Plus';

interface INavbarMobile {
  isActive: boolean;
}

const NavbarMobile: React.FC<INavbarMobile> = ({ isActive = false }) => {
  if (!isActive) return null;
  return (
    <nav className="absolute z-10 top-[70px] h-[240px] rounded-b-[20px] w-screen flex flex-col gap-5 shadow-[0_2px_4px_rgba(0,0,0,0.25)] bg-white">
      <Link
        href={'/profile/create-post'}
        className="mt-[35px] flex justify-center"
      >
        <button className="flex items-center w-[166px]">
          <Plus />
          <p className="ml-6">Crear Publicación</p>
        </button>
      </Link>
      <Link href={'/profile'} className="flex justify-center">
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
        <button className="flex items-center w-[166px]">
          <IconOff /> <p className="ml-6">Cerrar sesión</p>
        </button>
      </div>
    </nav>
  );
};

export default NavbarMobile;
