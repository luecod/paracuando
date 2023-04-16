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

const Card: React.FC<ICardProps> = ({
  id,
  title,
  content,
  url,
  image,
  votes,
}) => {
  // const titleKebabCase = title.replace(/\s+/g, '-').toLowerCase();

  const router = useRouter();

  const handleClick = () => {
    // router.push(`/events/${titleKebabCase}`);
    router.push(`/events/${id}`);
  };
  return (
    <div className="m-1.5">
      <div className="w-[299px] h-[454px] rounded-[20px] bg-app-grayLighter shadow-[0_2px_4px_rgba(0,0,0,0.25)] flex flex-col overflow-auto">
        <div className="relative w-[299px] h-[239px] rounded-t-[20px]">
          <Image className="rounded-t-[20px]" fill src={image} alt=""></Image>
          <button>
            <Heart
              className="absolute right-[22px] -bottom-[15px]"
              isActive={false}
            />
          </button>
        </div>
        <div className="h-[215px] flex flex-col pl-[23px] pr-[22px]">
          <button className="flex" onClick={handleClick}>
            <h3 className="mt-[15px] font-semibold text-[20px] leading-[23.44px] h-[31px] overflow-hidden">
              {title}
            </h3>
          </button>

          <p className="mt-[5px] font-normal text-[15px] leading-[17.58px] text-app-grayDark h-[72px] overflow-hidden">
            {content}
          </p>
          <p className="mt-[12px] font-medium text-[14px] leading-[16.41px] text-app-blue">
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

export default Card;
