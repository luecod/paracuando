import Link from "next/link";
import React from "react"
import { Heart } from "../assets/svg/Heart";
import VotePerson from "../assets/svg/VotePerson";


interface ICardProps {
    title: string;
    content: string;
    url: string;
    image: string;
    votes: number;
}

const Card: React.FC<ICardProps> = ({ title, content, url, image, votes }) => {
    return (
        <div className=" w-[250px] h-[370px] sm:w-[299px] sm:h-[454px] sm:p-2 rounded-[20px] bg-app-grayLighter shadow-app-card grid items-center justify-center ">
            <div>
                <img className="sm:w-[299px] sm:h-[239px] rounded-t-[20px] relative" src={image} alt={title} />
                <Heart className="absolute left-[50.25%] lg:left-[60.25%] md:left-[45.25%] sm:left-[57.25%]  right-[7.36%] top-[36.40%] sm:top-[46.15%] bottom-[44.05%] " isActive={false} />
            </div>
            <div>
                <h2 className="sm:text-xl text-lg font-semibold w-[240.31px] sm:w-[253.31px] flex justify-center text-left m-auto h-auto ml-2">{title}</h2>
            </div>
            <div >
                <p className="sm:w-[254px] w-[230px] h-[92px] app-texto-1 m-auto flex justify-center text-app-grayDark">{content}</p>
            </div>
            <div>
                <Link className="text-sm font-medium text-app-blue w-[60%] sm:w-[50%] h-auto flex text-right justify-center mb-1" href={url} >{url}</Link>
            </div>
            <div className="flex flex-row items-center gap-2 xs:ml-7 xs:mb-5" >
                <VotePerson className="text-left" />
                <p className="text-sm font-medium bg-app-blackLight ">{votes} votos</p>
            </div>
        </div>
    );
};


export default Card