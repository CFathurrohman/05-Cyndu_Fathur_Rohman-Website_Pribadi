"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import profilePic from "../../public/images/profile_picture.jpg";

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="mt-16 px-8 flex flex-col md:flex-row items-center gap-8">
      <div className="w-80 h-100 relative transform scale-95 hover:scale-100 transition-transform duration-500">
        <Image
          src={profilePic}
          alt="Profile Picture"
          fill
          className="object-cover rounded-2xl shadow-lg"
        />
      </div>

      <div className="max-w-6/12 ml-9">
        <h1 className="text-5xl font-bold text-zinc-800">Tentang Saya</h1>
        <p
          className={`mt-6 text-2xl text-zinc-700 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Halo! saya Cyndu Fathur Rohman
        </p>
        <p
          className={`mt-6 text-2xl text-zinc-700 transition-all duration-700 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Saya seorang pengembang web yang memiliki pengalaman dalam membangun
          dan mengelola berbagai proyek berbasis website. Saya berfokus pada
          pengembangan backend dan sistem yang efisien untuk meningkatkan
          performa dan skalabilitas aplikasi web.
        </p>
      </div>
    </div>
  );
}