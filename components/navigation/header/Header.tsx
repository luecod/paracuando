import Link from 'next/link';
import React from 'react';
import { User } from '../../../lib/interfaces/user.interface';
import { IconLogo } from '../../assets/logo/IconLogo';
import DownArrow from '../../assets/svg/DownArrow';
import EmptyHeart from '../../assets/svg/EmptyHeart';
import IconPerson from '../../assets/svg/IconPerson';
import Plus from '../../assets/svg/Plus';

interface IHeader {
  isLoggedIn: boolean;
  currentUser: User;
}

const Header: React.FC<IHeader> = ({ isLoggedIn, currentUser }) => {
  return (
    <div className="bg-black text-white flex items-center justify-between px-4 sm:px-12 py-4 min-h-[70px] text-sm">
      <Link href={'/'}>
        <IconLogo></IconLogo>
      </Link>

      <div className="right-[27] flex items-center gap-[27] space-x-8">
        {isLoggedIn ? (
          <div className="space-x-8 flex items-center">
            <Link
              className="text-app-blue sm:inline-flex space-x-2 hidden"
              href={'/profile/create-post'}
            >
              <Plus></Plus>
              <span>Crear Publicación</span>
            </Link>
            <Link
              className="sm:inline-flex space-x-2 hidden"
              href={'/profile/create-post'}
            >
              <EmptyHeart></EmptyHeart> <span>Mis Votos</span>
            </Link>
            <button className="items-center inline-flex space-x-2">
              <IconPerson></IconPerson>
              <span>{currentUser.email}</span>
              <DownArrow></DownArrow>
            </button>
          </div>
        ) : (
          <div className="space-x-4 sm:space-x-8 flex items-center">
            <Link
              className="text-app-blue inline-flex space-x-2"
              href={'/profile/create-post'}
            >
              <Plus></Plus>
              <span>Crear Publicación</span>
            </Link>
            <div className="space-x-4 sm:space-x-5">
              <Link href={'/category/marcas-y-tiendas'}>Log In</Link>
              <Link href={'/category/marcas-y-tiendas'}>Sing Up</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
