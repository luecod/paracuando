import Link from "next/link";
import React from "react"
import { Heart } from "../assets/svg/Heart";
import VotePerson from "../assets/svg/VotePerson";


interface CardProps {
    title: string;
    content: string;
    url: string;
    image: string;
    votes: string;
}

const Card: React.FC<CardProps> = ({ title, content, url, image, votes }) => {
    return (
        <div className=" sm:w-[299px] sm:h-[454px] bg-app-grayLighter rounded-[20px] shadow-app-card grid">
            <div>
                <img className="sm:w-[299px] sm:h-[239px] rounded-t-[20px] relative" src={image} alt={title} />
                <Heart className="absolute left-[69.25%] right-[7.36%] top-[46.15%] bottom-[44.05%] " isActive={false} />
            </div>
            <div>
                <h2 className="text-xl font-semibold m-auto w-[253.31px] h-auto  flex justify-center">{title}</h2>
            </div>
            <div >
                <p className="w-[254px] h-[92px] app-texto-1 m-auto flex justify-center ">{content}</p>
            </div>
            <div>
                <Link className="text-sm font-medium text-app-blue  w-[50%] h-auto flex text-right justify-center" href={url} >{url}</Link>
            </div>
            <div className="flex relative space-x-3" >
                <VotePerson className="" />
                <p className="text-sm font-medium bg-app-blackLight ">{votes} votos</p>
            </div>
        </div>
    );
};


export default Card