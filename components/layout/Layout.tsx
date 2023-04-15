import React from 'react';
import { User } from '../../lib/interfaces/user.interface';
import { Footer } from '../navigation/footer/Footer';
import Header from '../navigation/header/Header';

interface ILayout {
  children: React.ReactNode;
}
const userExample: User = {
  firstName: 'Luis',
  lastName: 'Valladolid',
  userName: 'luisvalladolid',
  email: 'eduvalladolid@gmail.com',
  password: '123456',
  imageUrl: '',
  codePhone: '',
  phone: '',
};

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* <Header isLoggedIn={true} currentUser={userExample} /> */}
        <Header />
        <main className="app-container ">{children}</main>
        <Footer />
      </div>
    </>
  );
};
