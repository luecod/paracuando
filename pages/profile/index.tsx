import Image from 'next/image';
import Link from 'next/link';
import Card from '../../components/cards/Card';
import Header from '../../components/navigation/header/Header';
import { eventsMock } from '../../lib/data/events.mock';
import { User } from '../../lib/interfaces/user.interface';
import { useUserMe } from '../../lib/services/user.service';

// const ProfilePage: NextPageWithLayout = () => {
const ProfilePage = () => {
  const { data: userME } = useUserMe();

  console.log(userME);

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
            <button className="px-[40px] py-[7.5px] border border-[#A7A6A7] rounded-[23px] font-medium text-[13px] leading-[15.23px] text-app-gray hover:bg-app-blue hover:text-white">
              Mis Votos
            </button>
          </Link>
          <Link href={'/'}>
            <button className="px-[15.5px] py-[7.5px] border border-[#A7A6A7] rounded-[23px] font-medium text-[13px] leading-[15.23px] text-app-gray hover:bg-app-blue hover:text-white">
              Mis Publicaciones
            </button>
          </Link>
        </div>
      </div>

      {/* cards */}
      <div className="container m-auto mt-[65px] lg:max-w-[941px] flex flex-col md:flex-row md:flex-wrap">
        {eventsMock.map((event, index) => (
          <div className="m-auto mb-[43px] sm:mb-[45px]" key={index}>
            <Card
              image={event.image}
              title={event.title}
              content={event.short_description}
              url={event.url}
              votes={event.votes}
            />
          </div>
        ))}
      </div>

      {/* pages */}
      <div className="flex justify-center">
        <button className="mt-[22px] text-white bg-app-blue rounded-[31px] py-[13.5px] px-[18px] md:hidden">
          Ver más
        </button>
        <ul className="mt-[37px] hidden pl-0 list-none md:flex md:gap-[3.5px] mb-0">
          <li className="cursor-pointer w-[42.15px] h-[42.15px] flex justify-center items-center rounded-[2.96px] hover:bg-app-blue hover:text-white">
            1
          </li>
          <li className="cursor-pointer w-[42.15px] h-[42.15px] flex justify-center items-center rounded-[2.96px] hover:bg-app-blue hover:text-white">
            2
          </li>
          <li className="cursor-pointer w-[42.15px] h-[42.15px] flex justify-center items-center rounded-[2.96px] hover:bg-app-blue hover:text-white">
            3
          </li>
          <li className="cursor-pointer w-[42.15px] h-[42.15px] flex justify-center items-center rounded-[2.96px] hover:bg-app-blue hover:text-white">
            4
          </li>
          <li className="cursor-pointer w-[42.15px] h-[42.15px] flex justify-center items-center rounded-[2.96px] hover:bg-app-blue hover:text-white">
            5
          </li>
          <li className="cursor-pointer w-[42.15px] h-[42.15px] flex justify-center items-center rounded-[2.96px] hover:bg-app-blue hover:text-white">
            6
          </li>
          <li className="cursor-pointer w-[42.15px] h-[42.15px] flex justify-center items-center rounded-[2.96px] hover:bg-app-blue hover:text-white">
            7
          </li>
          <li className="cursor-pointer w-[42.15px] h-[42.15px] flex justify-center items-center rounded-[2.96px] hover:bg-app-blue hover:text-white"></li>
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
