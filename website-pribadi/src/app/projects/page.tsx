import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Proyek',
  description: 'Halaman proyek',
  openGraph: {
    title: 'Proyek',
    description: 'Halaman proyek'
  },
};

export default function Essays(){
  return (
  <div className="mt-16 px-8">
    <header>
      <h1 className="font-bold text-4xl text-zinc-800">Proyek</h1>
    </header>
  </div>)
}