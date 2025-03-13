import type { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import image1 from "../../../public/images/image1.png";
import image2 from "../../../public/images/image2.png";

export const metadata: Metadata = {
    title: "Proyek",
    description: "Halaman proyek",
    openGraph: {
        title: "Proyek",
        description: "Halaman proyek",
    },
};

type ProjectItemProps = {
    name: string;
    url: string;
    urlDisplay: string;
    imageSrc: StaticImageData;
};

function ProjectItem({ name, url, urlDisplay, imageSrc }: ProjectItemProps) {
    return (
        <li>
            <a href={url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="max-w-sm rounded overflow-hidden shadow-lg transition hover:shadow-xl">
                    <Image className="w-full" src={imageSrc} alt={name} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{name}</div>
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

export default function Projects() {
    return (
        <div className="mt-16 px-8">
            <header>
                <h1 className="font-bold text-4xl text-zinc-800">Proyek Saya</h1>
            </header>
            <div className="mt-16">
                <h2 className="text-2xl">Aplikasi</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-16 mt-6">
                    <ProjectItem name="Aplikasi 1" url="https://example.com" urlDisplay="App Store" imageSrc={image1} />
                    <ProjectItem name="Aplikasi 2" url="https://example.com" urlDisplay="Google Play" imageSrc={image2} />
                </ul>
            </div>
        </div>
    );
}
