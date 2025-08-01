import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto max-w-3xl px-4 py-6">
        <nav className="flex flex-col items-center text-center space-y-4 md:flex-row md:justify-between md:space-y-0">
          <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-4">
            {/* Imagen de perfil */}
            <div className="relative mb-3 md:mb-0">
              <Image
                src="/profile.png" // Aquí debes poner tu imagen
                alt="Ignacio Aroza"
                width={56}
                height={56}
                className="rounded-full border-2 border-zinc-700 hover:border-blue-400 transition-colors"
                priority
              />
            </div>
            
            {/* Información del perfil */}
            <div className="flex flex-col items-center md:items-start">
              <Link href="/" className="text-2xl font-bold text-zinc-100 hover:text-blue-400 transition-colors">
                Ignacio Aroza
              </Link>
              <p className="text-sm text-zinc-400 mt-1">
                Backend Developer
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-zinc-400 hover:text-zinc-100 transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-zinc-400 hover:text-zinc-100 transition-colors font-medium"
            >
              About
            </Link>
            <a
              href="mailto:ignacioaroza.ia@gmail.com"
              className="text-zinc-400 hover:text-zinc-100 transition-colors font-medium"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
