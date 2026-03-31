import { Link } from 'react-router';
import { ArrowRight, CheckCircle, Play, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const instructors = [
    {
      id: 1,
      name: 'Chef Carlos Mendoza',
      specialty: 'Marketing Digital para Restaurantes',
      credentials: 'MBA en Marketing | 15+ años de experiencia',
      description: 'Experto en transformación digital de negocios gastronómicos. Ha asesorado a más de 200 restaurantes.',
      image: 'https://images.unsplash.com/photo-1771594836586-837aa05be563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjaGVmJTIwcG9ydHJhaXQlMjBjb25maWRlbnQlMjBtYWxlfGVufDF8fHx8MTc3NDg4MDI1N3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: 'Chef Ana Martínez',
      specialty: 'Branding y Experiencia Gastronómica',
      credentials: 'Chef Ejecutiva | Especialista en Brand Strategy',
      description: 'Creadora de identidades culinarias memorables. Fundadora de 3 restaurantes premiados internacionalmente.',
      image: 'https://images.unsplash.com/photo-1659354219212-b9ec7231ec6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBjaGVmJTIwcHJvZmVzc2lvbmFsJTIwY3VsaW5hcnklMjBleHBlcnR8ZW58MXx8fHwxNzc0ODgwMjU3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      name: 'Chef Roberto Silva',
      specialty: 'Redes Sociales y Contenido Gastronómico',
      credentials: 'Content Creator | 2M+ seguidores',
      description: 'Pionero en marketing culinario digital. Sus estrategias han generado millones en ventas.',
      image: 'https://images.unsplash.com/photo-1578366941741-9e517759c620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWxpbmFyeSUyMGluc3RydWN0b3IlMjB0ZWFjaGluZyUyMGNvb2tpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc0ODgwMjU4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      name: 'Daniela Torres',
      specialty: 'Estrategia Comercial y Ventas',
      credentials: 'Consultora Gastronómica | TEDx Speaker',
      description: 'Especialista en crecimiento y escalabilidad de negocios gastronómicos con enfoque en ROI.',
      image: 'https://images.unsplash.com/photo-1586447610613-58e59e3f9d9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbWFya2V0aW5nJTIwZXhwZXJ0JTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0ODgwMjU4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Institucional */}
      <section className="bg-[#15313D] text-white py-20 lg:py-28 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#65A5C0] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#FFC789] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FFC789] rounded-full mb-6">
              <GraduationCap className="w-10 h-10 text-[#15313D]" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Formando Expertos en Marketing Culinario
            </h1>
            
            <p className="text-lg md:text-xl text-[#C6C6C6] leading-relaxed">
              En MKTCook Academy, unimos la pasión por la gastronomía con las estrategias 
              de marketing más innovadoras. Nuestro equipo de expertos está comprometido con 
              tu éxito profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra Misión */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#15313D] mb-6">
                Nuestra Misión
              </h2>
              <p className="text-lg text-[#2F505E] leading-relaxed mb-6">
                Creemos que cada negocio gastronómico merece tener acceso a las mejores 
                estrategias de marketing. Nuestra misión es democratizar el conocimiento 
                premium y ayudar a miles de emprendedores a alcanzar su máximo potencial.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FFC789] flex-shrink-0" />
                  <span className="text-[#2F505E]">Educación de calidad mundial</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FFC789] flex-shrink-0" />
                  <span className="text-[#2F505E]">Resultados medibles y comprobados</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FFC789] flex-shrink-0" />
                  <span className="text-[#2F505E]">Comunidad global de profesionales</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FFC789] flex-shrink-0" />
                  <span className="text-[#2F505E]">Soporte continuo y actualizado</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#FFC789]/20 rounded-3xl blur-2xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759521296047-89338c8e083d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZ291cm1ldCUyMHBsYXRpbmclMjBmb29kJTIwYXJ0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NDg4MDI1OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="MKTCook Academy"
                className="relative z-10 w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Instructores */}
      <section className="py-20 bg-[#C6C6C6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#15313D] mb-4">
              Nuestros Instructores Expertos
            </h2>
            <p className="text-lg text-[#2F505E] max-w-3xl mx-auto">
              Profesionales reconocidos internacionalmente con décadas de experiencia 
              en marketing culinario, quienes comparten sus conocimientos y estrategias 
              comprobadas para impulsar tu éxito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Circular Profile Image */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#65A5C0]/20 to-[#FFC789]/20 rounded-full blur-xl scale-110"></div>
                  <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#C6C6C6]/20 hover:border-[#FFC789] transition-colors">
                    <ImageWithFallback
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Verification badge */}
                  <div className="absolute bottom-2 right-1/2 translate-x-16 w-10 h-10 bg-[#FFC789] rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-5 h-5 text-[#15313D]" />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl text-[#15313D] mb-2">
                    {instructor.name}
                  </h3>
                  <p className="text-[#65A5C0] mb-2 text-sm">
                    {instructor.specialty}
                  </p>
                  <div className="inline-block bg-[#2F505E]/5 rounded-full px-3 py-1 mb-3">
                    <p className="text-xs text-[#2F505E]">
                      {instructor.credentials}
                    </p>
                  </div>
                  <p className="text-sm text-[#2F505E] leading-relaxed">
                    {instructor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Institucional */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#15313D] mb-4">
              Conoce Nuestra Historia
            </h2>
            <p className="text-lg text-[#2F505E] max-w-2xl mx-auto">
              Descubre cómo estamos transformando carreras y negocios gastronómicos en todo el mundo
            </p>
          </div>

          <div className="bg-[#2F505E] rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-[#15313D] to-[#2F505E] flex items-center justify-center relative group cursor-pointer">
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FFC789] rounded-full mb-4 group-hover:scale-110 transition-transform shadow-xl">
                  <Play className="w-10 h-10 text-[#15313D] ml-1" />
                </div>
                <p className="text-white text-xl">Ver Video Institucional</p>
                <p className="text-[#C6C6C6] text-sm mt-2">3 minutos</p>
              </div>
            </div>
            
            <div className="p-8 text-white">
              <h3 className="text-2xl mb-4">Por Qué Elegirnos</h3>
              <p className="text-[#C6C6C6] leading-relaxed mb-6">
                Con más de 10,000 estudiantes satisfechos y más de 50 cursos especializados, 
                MKTCook Academy se ha convertido en la plataforma líder en educación de 
                marketing culinario. Nuestro enfoque práctico y orientado a resultados 
                ha ayudado a miles de negocios a alcanzar sus objetivos.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-[#15313D]/50 rounded-xl">
                  <p className="text-3xl text-[#FFC789] mb-2">10K+</p>
                  <p className="text-sm text-[#C6C6C6]">Estudiantes Activos</p>
                </div>
                <div className="text-center p-4 bg-[#15313D]/50 rounded-xl">
                  <p className="text-3xl text-[#FFC789] mb-2">50+</p>
                  <p className="text-sm text-[#C6C6C6]">Cursos Especializados</p>
                </div>
                <div className="text-center p-4 bg-[#15313D]/50 rounded-xl">
                  <p className="text-3xl text-[#FFC789] mb-2">4.9</p>
                  <p className="text-sm text-[#C6C6C6]">Rating Promedio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#15313D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            ¿Listo para Empezar?
          </h2>
          <p className="text-lg text-[#C6C6C6] mb-8">
            Únete a nuestra comunidad de profesionales y comienza a transformar tu negocio hoy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/catalog"
              className="inline-flex items-center justify-center gap-2 bg-[#FFC789] text-[#15313D] px-10 py-4 rounded-lg hover:bg-[#ffd5a3] transition-all hover:scale-105 shadow-xl text-lg"
            >
              Explorar Cursos
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#65A5C0] text-white px-10 py-4 rounded-lg hover:bg-[#65A5C0]/10 transition-all text-lg"
            >
              Crear Cuenta Gratis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
