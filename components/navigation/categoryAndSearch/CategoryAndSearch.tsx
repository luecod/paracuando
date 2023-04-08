import Link from 'next/link';
import EventButton from '../../assets/svg/EventButton';
import Loupe from '../../assets/svg/Loupe';

const CategoryAndSearch = () => {
  return (
    <div className="h-[114px] pt-[38px] shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
      <div className="sm:container lg:max-w-6xl flex justify-between items-center m-auto">
        <div className="ml-[21px] sm:ml-0 self-start md:hidden p-[10.11px] rounded-full border border-app-gray">
          <EventButton></EventButton>
        </div>
        <div className="hidden text-app-gray self-start md:flex gap-[9px]">
          <Link className="" href={'/category/marcas-y-tiendas'}>
            <button className="border bg-white border-app-gray px-[18.43px] rounded-[26px] py-[14.5px] font-medium text-[13px] leading-[15.23px] hover:bg-app-blue hover:text-white">
              Marcas y tiendas
            </button>
          </Link>
          <Link href={'/category/artistas-y-conciertos'}>
            <button className="border bg-white border-app-gray px-[18.42px] rounded-[26px] py-[14.5px] font-medium text-[13px] leading-[15.23px] hover:bg-app-blue hover:text-white">
              Artistas y conciertos
            </button>
          </Link>

          <Link href={'/category/torneos'}>
            <button className="border bg-white border-app-gray px-[19px] rounded-[26px] py-[14.5px] font-medium text-[13px] leading-[15.23px] hover:bg-app-blue hover:text-white">
              Torneos
            </button>
          </Link>
        </div>
        <div className="self-end relative mr-[20px] md:mr-[0px]">
          <input
            className="rounded-[23px] pt-[15px] pb-[14px] px-6 w-[305px] sm:w-[373px] bg-white font-normal text-[13px] leading-[15.23px] text-app-gray border border-app-gray"
            type="text"
            placeholder="¿Qué quieres ver en tu ciudad?"
          />
          <button className="btn btn-success absolute right-[21px] top-[14px]">
            <Loupe />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryAndSearch;
