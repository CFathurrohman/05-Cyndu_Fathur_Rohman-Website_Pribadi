import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

type FooterLinkProps = {
    text: string;
    url: string;
};

function FooterLink({ text, url }: FooterLinkProps) {
    return (
        <a className="transition hover:text-teal-500" href={url}>
            {text}
        </a>
    );
}

export default function Footer() {
    return (
        <footer className="mt-24 pt-10 px-8 pb-16 border-t">
            <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex gap-6 text-sm font-medium text-zinc-600">
                    <FooterLink text="Tentang Saya" url="/" />
                    <FooterLink text="Proyek" url="/projects" />
                    <FooterLink text="Esai" url="/essays" />
                </div>
                <p className="text-sm text-zinc-400">
                    @ 2025 Cyndu Fathur Rohman. All right reserved.
                </p>
            </div>
            <div className="flex flex-col gap-4 mt-6">
                <a
                    href="https://linkedin.com/in/cfathur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-600 hover:text-teal-600 transition-colors duration-300 text"
                >
                    <FaLinkedin className="text" />
                    <span>Cyndu Fathur Rohman</span>
                </a>

                <a
                    href="https://github.com/cfathurrohman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-600 hover:text-teal-600 transition-colors duration-300 text"
                >
                    <FaGithub className="text" />
                    <span>cfathurrohman</span>
                </a>

                <a
                    href="mailto:cfr@gmail.com"
                    className="flex items-center gap-2 text-zinc-600 hover:text-teal-600 transition-colors duration-300 text"
                >
                    <FaEnvelope className="text-2xl" />
                    <span>cfr@gmail.com</span>
                </a>
            </div>
        </footer>
    );
}