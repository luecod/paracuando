import Link from "next/link";
import React from "react"
import { Heart } from "../assets/svg/Heart";

interface CardProps {
    title: string;
    content: string;
    url: string;
    image: string;
    votes: string;
}

const Card: React.FC<CardProps> = ({ title, content, url, image, votes }) => {
    return (
        <div className="w-[299px] h-[454px] bg-app-grayLighter rounded-[20px] shadow-app-card">
            <div>
                <img className="w-[299px] h-[239px] rounded-t-[20px] rounded-b-[20px]" src={image} alt={title} />
                {/* <Heart /> */}
            </div>
            <div>
                <h2 className="text-xl font-semibold pt-2">{title}</h2>
                <p className="w-[254px] h-[72px] app-texto-1 ">{content}</p>
            </div>
            <div>
                <Link className="text-sm font-medium text-app-blue" href={url} >{url}</Link>
                <p className="text-sm font-medium">{votes}</p>
            </div>
        </div>
    );
};


export default Card