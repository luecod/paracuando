import Image from 'next/image';
import Plus from '../../components/assets/svg/Plus';
import Header from '../../components/navigation/header/Header';
import { User } from '../../lib/interfaces/user.interface';
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
const ConfigPage = () => {
  return (
    <div>
      <Header />
      <div className="bg-app-blue min-h-[129px] min-w-full">
        <h1 className="app-title-1 text-white pt-[37px] pl-[50px] lg:pl-[170px] ">
          Perfil
        </h1>
      </div>
      <div className="max-w-[940px] m-auto mt-[77px] flex flex-col">
        <div>
          <h2 className="app-title-2 ml-5 lg:ml-0">Información de Contacto</h2>

          <div className="mt-[34px] flex flex-col md:flex-row gap-[80px] justify-center">
            <div className="flex flex-col items-center">
              <div className="min-w-[220px] min-h-[206px] rounded-[15px] bg-[#D9D9D9] mb-[19px] flex items-center justify-center">
                <Plus></Plus>
              </div>
              <p className="app-texto-1 text-[16px] text-[#6E6A6C]">
                Agrega una foto para tu perfil
              </p>
            </div>

            <div className="flex flex-col gap-[53.37px] justify-center items-center">
              <div className="relative flex flex-col px-5">
                <input
                  className="w-[314px] sm:w-[540px] max-w-[640px] md:min-w-[500px] lg:min-w-[640px] min-h-[49.63px] border border-[#7D7D7D] rounded-[11px] px-5"
                  type="text"
                />
                <label
                  className="absolute left-[30.04px] -top-2 px-5 bg-white text-[#7D7D7D]"
                  htmlFor=""
                >
                  First Name
                </label>
              </div>
              <div className="relative flex flex-col px-5">
                <input
                  className="w-[314px] sm:w-[540px] max-w-[640px] md:min-w-[500px] lg:min-w-[640px] min-h-[49.63px] border border-[#7D7D7D] rounded-[11px] px-5"
                  type="text"
                />
                <label
                  className="absolute left-[30.04px] -top-2 px-5 bg-white text-[#7D7D7D]"
                  htmlFor=""
                >
                  Last Name
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[57px]">
          <h2 className="app-title-2 ml-5 lg:ml-0">Mis intereses</h2>
          <div className="mt-[29px] flex justify-center gap-5 flex-wrap">
            <div className="flex flex-col gap-[19px] items-center">
              <div className="min-w-[300px] min-h-[152px] rounded-[15px] bg-[#D9D9D9] flex items-center justify-center">
                <button>
                  <Plus></Plus>
                </button>
              </div>
              <p className="app-texto-1 text-[16px] text-[#6E6A6C]">
                Añade una categoría
              </p>
            </div>
            <div className="flex flex-col gap-[19px] items-center">
              <div className="min-w-[300px] min-h-[152px] rounded-[15px] bg-[#D9D9D9] flex items-center justify-center">
                <Plus></Plus>
              </div>
              <p className="app-texto-1 text-[16px] text-[#6E6A6C]">
                Añade una categoría
              </p>
            </div>
            <div className="flex flex-col gap-[19px] items-center">
              <div className="min-w-[300px] min-h-[152px] rounded-[15px] bg-[#D9D9D9] flex items-center justify-center">
                <Plus></Plus>
              </div>
              <p className="app-texto-1 text-[16px] text-[#6E6A6C]">
                Añade una categoría
              </p>
            </div>
          </div>
        </div>
        <button className="bg-app-blue text-white rounded-[31px] px-[25px] py-[13.5px] m-auto mt-[43px]">
          Guardar Cambios
        </button>
      </div>
      <div className="mt-[86px] min-h-[182px] relative">
        <Image src={'/footer-banner.png'} fill objectFit="cover" alt=""></Image>
      </div>
    </div>
  );
};

export default ConfigPage;
