import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />
      
      <main className="container mx-auto max-w-3xl px-4 py-12">
        <div className="prose prose-invert prose-zinc max-w-none">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sobre Mí
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Full Stack Developer especializado en backend con enfoque en arquitecturas escalables
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-zinc-200">¡Hola! 👋</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Soy <strong className="text-zinc-100">Ignacio Aroza</strong>, un Full Stack Developer de Córdoba, Argentina, 
                con un fuerte enfoque en el desarrollo backend. Me apasiona construir sistemas robustos, escalables 
                y bien estructurados, especializándome en el ecosistema JavaScript/TypeScript.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Tengo un profundo entendimiento de Clean Architecture y principios SOLID, y me enfoco en 
                proyectos donde la calidad del código y la mantenibilidad son clave. En el frontend, 
                trabajo principalmente con React y Next.js para crear interfaces limpias y responsivas.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Actualmente trabajo en plataformas complejas como sistemas de reservas, gestión de alquileres 
                inmobiliarios y software de logística, combinando bases de datos relacionales, 
                procesamiento de imágenes y automatización de procesos.
              </p>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-zinc-200">Tecnologías y Herramientas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-zinc-300">Frontend</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-zinc-400">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      React / Next.js
                    </li>
                    <li className="flex items-center text-zinc-400">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      TypeScript / JavaScript
                    </li>
                    <li className="flex items-center text-zinc-400">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Tailwind CSS
                    </li>
                    <li className="flex items-center text-zinc-400">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                      Redux
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3 text-zinc-300">Backend</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-zinc-400">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      Node.js / Express
                    </li>
                    <li className="flex items-center text-zinc-400">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      NestJS
                    </li>
                    <li className="flex items-center text-zinc-400">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      PostgreSQL
                    </li>
                    <li className="flex items-center text-zinc-400">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      MongoDB / Prisma
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-zinc-300">Arquitectura & Testing</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-zinc-400">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                      Clean Architecture
                    </li>
                    <li className="flex items-center text-zinc-400">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                      SOLID Principles
                    </li>
                    <li className="flex items-center text-zinc-400">
                      <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                      Jest / Supertest
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3 text-zinc-300">DevOps & Tools</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-zinc-400">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Docker
                    </li>
                    <li className="flex items-center text-zinc-400">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      Git / GitHub
                    </li>
                    <li className="flex items-center text-zinc-400">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      Postman / Swagger
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-zinc-200">Proyectos Destacados</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-blue-400 pl-6 pb-6">
                  <h3 className="text-lg font-medium text-zinc-200">Sistemas de Reservas & Gestión Inmobiliaria</h3>
                  <p className="text-zinc-400 text-sm mb-2">Presente</p>
                  <p className="text-zinc-300 leading-relaxed">
                    Desarrollo de plataformas complejas para booking systems y gestión de alquileres inmobiliarios, 
                    integrando bases de datos relacionales, procesamiento de imágenes y automatización de procesos.
                  </p>
                </div>
                
                <div className="border-l-2 border-purple-400 pl-6 pb-6">
                  <h3 className="text-lg font-medium text-zinc-200">Software de Logística</h3>
                  <p className="text-zinc-400 text-sm mb-2">Presente</p>
                  <p className="text-zinc-300 leading-relaxed">
                    Implementación de sistemas de logística utilizando Clean Architecture y principios SOLID, 
                    con enfoque en escalabilidad y mantenibilidad del código.
                  </p>
                </div>

                <div className="border-l-2 border-green-400 pl-6 pb-6">
                  <h3 className="text-lg font-medium text-zinc-200">Full Stack Development</h3>
                  <p className="text-zinc-400 text-sm mb-2">2022 - Presente</p>
                  <p className="text-zinc-300 leading-relaxed">
                    Desarrollo completo de aplicaciones web utilizando React, Next.js en el frontend y 
                    Node.js, NestJS en el backend, con bases de datos PostgreSQL y MongoDB.
                  </p>
                </div>
              </div>
            </section>

            {/* Interests */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-zinc-200">Intereses & Filosofía</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Me apasiona la optimización de flujos de trabajo y la entrega de soluciones eficientes 
                y de largo plazo. Siempre estoy aprendiendo nuevas herramientas y tecnologías para 
                mejorar mi desarrollo y crear código de alta calidad.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Mi enfoque se centra en Clean Architecture, principios SOLID y las mejores prácticas 
                de desarrollo. Disfruto trabajando en proyectos complejos donde la estructura del 
                código y la escalabilidad son fundamentales.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Cuando no estoy programando, comparto conocimientos a través de este blog y contribuyo 
                a proyectos de código abierto en GitHub, donde mantengo 46 repositorios públicos.
              </p>
            </section>

            {/* Contact CTA */}
            <section className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-200">¡Conectemos!</h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                ¿Tienes un proyecto interesante o quieres charlar sobre tecnología? 
                Me encantaría escuchar de ti.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:ignacioaroza.ia@gmail.com"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-zinc-900 hover:text-white rounded-lg transition-colors font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Enviar Email
                </a>
                
                <a
                  href="https://portfolio-eifk.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-zinc-100 rounded-lg transition-colors font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  Ver Portfolio
                </a>
                
                <a
                  href="https://www.linkedin.com/in/ignacio-aroza-0b005328a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-zinc-100 rounded-lg transition-colors font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export const metadata = {
  title: 'Sobre Mí - Ignacio Aroza',
  description: 'Backend Developer especializado en .NET, Node.js y arquitecturas escalables. Conoce más sobre mi experiencia y tecnologías.',
  openGraph: {
    title: 'Sobre Mí - Ignacio Aroza',
    description: 'Backend Developer especializado en .NET, Node.js y arquitecturas escalables.',
    type: 'website',
  },
};
