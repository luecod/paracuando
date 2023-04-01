import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Heart } from '../assets/svg/Heart';
import VotePerson from '../assets/svg/VotePerson';

interface ICardProps {
  title: string;
  content: string;
  url: string;
  image: string;
  votes: number;
}

const Card: React.FC<ICardProps> = ({ title, content, url, image, votes }) => {
  return (
    <div className="m-1.5">
      <div className="w-[299px] h-[454px] rounded-[20px] bg-app-grayLighter shadow-[0_2px_4px_rgba(0,0,0,0.25)] flex flex-col overflow-auto">
        <div className="relative w-[299px] h-[239px] rounded-t-[20px]">
          {/* <img className="sm:w-[299px] sm:h-[239px] rounded-t-[20px] relative" src={image} alt={title} /> */}
          <Image className="rounded-t-[20px]" fill src={image} alt=""></Image>
          <button>
            <Heart
              className="absolute right-[22px] -bottom-[15px]"
              isActive={false}
            />
          </button>
        </div>
        <div className="h-[215px] flex flex-col pl-[23px] pr-[22px]">
          {/* <div>
          <h2 className="sm:text-xl text-lg font-semibold w-[240.31px] sm:w-[253.31px] flex justify-center text-left m-auto h-auto ml-2">
            {title}
          </h2>
        </div> */}
          <h3 className="mt-[15px] font-semibold text-[20px] leading-[23.44px]">
            {title}
          </h3>
          {/* <div>
          <p className="sm:w-[254px] w-[230px] h-[92px] app-texto-1 m-auto flex justify-center text-app-grayDark">
            {content}
          </p>
        </div> */}
          <p className="mt-[5px] font-normal text-[15px] leading-[17.58px] text-app-grayDark">
            {content}
          </p>
          <p className="mt-[12px] font-medium text-[14px] leading-[16.41px] text-app-blue">
            <Link href={url}>{url}</Link>
          </p>
          {/* <div>
          <Link
            className="text-sm font-medium text-app-blue w-[60%] sm:w-[50%] h-auto flex text-right justify-center mb-1"
            href={url}
          >
            {url}
          </Link>
        </div> */}
          <div className="mt-[9px] flex gap-2">
            <VotePerson className="text-left" />
            <p className="text-sm font-medium">{votes} votos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
