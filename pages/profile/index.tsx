import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/navigation/header/Header';
import { User } from '../../lib/interfaces/user.interface';

// const ProfilePage: NextPageWithLayout = () => {
const ProfilePage = () => {
  const userExample: User = {
    firstName: 'Luis',
    lastName: 'Valladolid',
    userName: 'luisvalladolid',
    email: 'eduvalladolid@gmail.com',
    password: '123456',
    imageUrl: '/elipse.png',
    codePhone: '',
    phone: '',
  };
  return (
    <div>
      <Header isLoggedIn={true} currentUser={userExample} />
      <div className="flex flex-col items-center relative">
        <div className="bg-app-blue min-h-[129px] min-w-full"></div>
        <Image
          src={userExample.imageUrl}
          width={117}
          height={117}
          alt="user imagen"
          className="rounded-full -mt-[65px]"
        ></Image>
        <div className="mt-[36.5px] flex gap-[11px]">
          <Link href={'/'}>
            <button className="px-[40px] py-[7.5px] border border-[#A7A6A7] rounded-[23px]">
              Mis Votos
            </button>
          </Link>
          <Link href={'/'}>
            <button className="px-[15.5px] py-[7.5px] border border-[#A7A6A7] rounded-[23px]">
              Mis Publicaciones
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-[65px] bg-app-blue min-h-[1207px]">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="mt-[82px] flex justify-center">
        <button className="text-white bg-app-blue rounded-[31px] py-[13.5px] px-[18px] sm:hidden">
          Ver más
        </button>
        <ul className="hidden pl-0 list-none sm:flex sm:gap-[3.5px] mt-0 mb-0">
          <li className="cursor-pointer w-[42.15px] h-[42.15px] flex justify-center items-center rounded-[2.96px]">
            1
          </li>
          <li className="cursor-pointer w-[42.15px] h-[42.15px] flex justify-center items-center rounded-[2.96px]">
            2
          </li>
          <li className="cursor-pointer w-[42.15px] h-[42.15px] flex justify-center items-center rounded-[2.96px]">
            3
          </li>
          <li className="cursor-pointer w-[42.15px] h-[42.15px] flex justify-center items-center rounded-[2.96px]">
            4
          </li>
          <li className="cursor-pointer w-[42.15px] h-[42.15px] flex justify-center items-center rounded-[2.96px]">
            5
          </li>
          <li className="cursor-pointer w-[42.15px] h-[42.15px] flex justify-center items-center rounded-[2.96px]">
            6
          </li>
          <li className="cursor-pointer w-[42.15px] h-[42.15px] flex justify-center items-center rounded-[2.96px]">
            7
          </li>
          <li className="cursor-pointer w-[42.15px] h-[42.15px] flex justify-center items-center rounded-[2.96px]"></li>
        </ul>
      </div>
      <div className="mt-[65px] min-h-[182px] relative">
        <Image src={'/footer-banner.png'} fill objectFit="cover" alt=""></Image>
      </div>
    </div>
  );
};

// ProfilePage.getLayout = (page) => {
//   return <Layout>{page}</Layout>;
// };

export default ProfilePage;
