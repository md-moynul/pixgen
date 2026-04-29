import { Card, Link } from "@heroui/react";
import Image from "next/image";
import { BiSolidDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";

export default function PhotoCard({ photo }) {
    return (
        <Card className=" border rounded-xl">
            <div className="relative w-full aspect-square">
                <Image
                    src={photo.imageUrl}
                    alt={photo.title}
                    fill
                    className="object-cover rounded-xl"

                />
            </div>

            <Card.Header>
                <Card.Title className="font-bold text-2xl">{photo.title}</Card.Title>

            </Card.Header>
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <FaHeart size={20} className="text-pink-500"/> {photo.likes}
                </div>
                <div className="flex gap-2 items-center">
                    <BiSolidDownload size={20} className="text-green-500"/> {photo.likes}
                </div>
            </div>
            <Card.Footer>
                <Link
                    href="/"
                    
                >
                    See Details
                    <Link.Icon aria-hidden="true" />
                </Link>
            </Card.Footer>
        </Card>
    );
}