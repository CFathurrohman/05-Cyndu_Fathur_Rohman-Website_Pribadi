import type { Metadata } from "next";
import { defaultMetadata } from "../utils/metadata";
import Image, { StaticImageData } from "next/image";
import image1 from "../../../public/images/image1.png";
import image2 from "../../../public/images/image2.png";

export const metadata: Metadata = {
    title: "Esai",
    description: "Halaman untuk menampilkan esai saya.",
    openGraph: {
        images: "https://example.com/default-image.jpg",
        url: "https://example.com",
    },
};

type EssayItemProps = {
    name: string;
    url: string;
    urlDisplay: string;
    imageSrc: StaticImageData;
};

function EssayItem({ name, url, urlDisplay, imageSrc }: EssayItemProps) {
    return (
        <li>
            <a href={url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="max-w-sm rounded overflow-hidden shadow-lg transition hover:shadow-xl">
                    <div className="relative w-full aspect-square">
                        <Image className="object-cover" src={imageSrc} alt={name} fill />
                    </div>
                    <div className="px-6 py-4">
                        <h3 className="font-bold text-xl mb-2">{name}</h3>
                    </div>
                    <div className="px-6 pb-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                            {urlDisplay}
                        </span>
                    </div>
                </div>
            </a>
        </li>
    );
}

export default function Essays() {
    return (
        <div className="mt-16 px-8">
            <header>
                <h1 className="font-bold text-4xl text-zinc-800">Esai Saya</h1>
            </header>
            <div className="mt-16">
                <h2 className="text-2xl">Esai</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-6">
                <EssayItem name="Esai 1" url="https://example.com" urlDisplay="View" imageSrc={image1} />
                    <EssayItem name="Esai 2" url="https://example.com" urlDisplay="View" imageSrc={image2} />
                </ul>
            </div>
        </div>
    );
}