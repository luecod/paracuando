import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Heart } from '../assets/svg/Heart';
import VotePerson from '../assets/svg/VotePerson';

interface ICardProps {
  id: string;
  title: string;
  content: string;
  url: string;
  image: string;
  votes: number;
}

const HorizontalCard: React.FC<ICardProps> = ({
  id,
  title,
  content,
  url,
  image,
  votes,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/events/${id}`);
  };
  return (
    <div className="m-1.5 mb-5">
      <div className="relative w-[394px] h-[197px] rounded-[20px] bg-app-grayLighter shadow-[0_2px_4px_rgba(0,0,0,0.25)] flex gap-6 md:w-[850px] md:gap-[28px] lg:gap-[58px] lg:w-[934px] lg:h-[239px] sm:w-[550px]">
        <button className="absolute right-[13px]">
          <Heart isActive={false} />
        </button>

        <div className="relative w-[121px] h-[197px] rounded-[20px] lg:h-[239px] md:w-[299px] sm:w-[200px]">
          <Image
            className="rounded-[20px]"
            fill
            objectFit="cover"
            src={image}
            alt=""
          ></Image>
        </div>

        <div className="relative h-[215px] w-[200px] flex flex-col md:w-[410px] sm:w-[300px]">
          <button className="flex" onClick={handleClick}>
            <h3 className="mt-[34px] font-semibold text-[16px] leading-[18.75px] h-[19px] overflow-hidden">
              {title}
            </h3>
          </button>
          <p className="mt-[5px] font-normal text-[15px] leading-[17.58px] text-app-grayDark h-[72px] overflow-hidden">
            {content}
          </p>
          <p className="mt-[12px] font-medium text-[12px] leading-[14.06px] text-app-blue">
            <Link href={url}>{url}</Link>
          </p>
          <div className="mt-[9px] flex gap-2 items-center">
            <VotePerson className="text-left" />
            <p className="text-sm font-medium">{votes} votos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
