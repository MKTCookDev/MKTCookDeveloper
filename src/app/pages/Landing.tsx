import { Link } from 'react-router';
import { ArrowRight, Award, Users, BookOpen, TrendingUp, Star, Clock } from 'lucide-react';
import { coursesData } from '../data/coursesData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Landing() {
  const featuredCourses = coursesData.slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#15313D] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#65A5C0] via-transparent to-[#FFC789]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-[#2F505E] rounded-full">
                <span className="text-[#FFC789] text-sm tracking-wide">Educación Premium en Marketing Culinario</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Aprende Marketing Culinario como un Profesional
              </h1>
              <p className="text-lg md:text-xl text-[#C6C6C6] mb-8 leading-relaxed">
                Domina las estrategias de marketing más efectivas para restaurantes, 
                chefs y negocios gastronómicos. Aprende de expertos con experiencia real.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/catalog"
                  className="inline-flex items-center justify-center gap-2 bg-[#FFC789] text-[#15313D] px-8 py-4 rounded-lg hover:bg-[#ffd5a3] transition-all hover:scale-105 shadow-lg"
                >
                  Explorar Cursos
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/catalog"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#65A5C0] text-white px-8 py-4 rounded-lg hover:bg-[#65A5C0]/10 transition-all"
                >
                  Ver Demo Gratis
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#2F505E]">
                <div>
                  <p className="text-3xl text-[#FFC789] mb-1">10K+</p>
                  <p className="text-sm text-[#C6C6C6]">Estudiantes</p>
                </div>
                <div>
                  <p className="text-3xl text-[#FFC789] mb-1">50+</p>
                  <p className="text-sm text-[#C6C6C6]">Cursos</p>
                </div>
                <div>
                  <p className="text-3xl text-[#FFC789] mb-1">4.9</p>
                  <p className="text-sm text-[#C6C6C6]">Rating Promedio</p>
                </div>
              </div>
            </div>

            {/* Hero Image - Circular Format */}
            <div className="relative flex justify-center items-center">
              {/* Decorative blur effect */}
              <div className="absolute inset-0 bg-[#FFC789]/20 rounded-full blur-3xl"></div>
              
              {/* Circular image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1750943024048-a4c9912b1425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmclMjBlbGVnYW50fGVufDF8fHx8MTc3MDczMTkyOXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Platillo gourmet elegante"
                  className="relative z-10 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#15313D] mb-4">
              Cursos Destacados
            </h2>
            <p className="text-lg text-[#2F505E] max-w-2xl mx-auto">
              Descubre nuestros programas más populares diseñados por expertos de la industria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => {
              const images = [
                'https://images.unsplash.com/photo-1588560107833-167198a53677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzcwNzgwOTk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
                'https://images.unsplash.com/photo-1697020358336-3db2f502242a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHNvY2lhbCUyMG1lZGlhfGVufDF8fHx8MTc3MDc4MDk5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
                'https://images.unsplash.com/photo-1610957899934-fcc0db8d7287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYnJhbmRpbmclMjBlbGVnYW50fGVufDF8fHx8MTc3MDc4MDk5Nnww&ixlib=rb-4.1.0&q=80&w=1080'
              ];
              
              return (
                <div
                  key={course.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
                >
                  <div className="relative overflow-hidden h-48">
                    <ImageWithFallback
                      src={images[index]}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-[#FFC789] text-[#15313D] px-3 py-1 rounded-full text-sm">
                      ${course.price}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs bg-[#65A5C0]/10 text-[#2F505E] px-3 py-1 rounded-full">
                        {course.level}
                      </span>
                      <div className="flex items-center gap-1 text-[#FFC789]">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm text-[#15313D]">{course.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl text-[#15313D] mb-2 line-clamp-2">
                      {course.title}
                    </h3>
                    
                    <p className="text-[#2F505E] text-sm mb-4 line-clamp-2">
                      {course.shortDescription}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-[#2F505E] mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{course.studentsCount}</span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/course/${course.id}`}
                      className="block w-full text-center bg-[#15313D] text-white py-3 rounded-lg hover:bg-[#2F505E] transition-colors"
                    >
                      Ver Curso
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 text-[#15313D] border-2 border-[#15313D] px-8 py-3 rounded-lg hover:bg-[#15313D] hover:text-white transition-all"
            >
              Ver Todos los Cursos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#2F505E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              ¿Por qué MKTCook Academy?
            </h2>
            <p className="text-lg text-[#C6C6C6] max-w-2xl mx-auto">
              La plataforma educativa que transformará tu negocio gastronómico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFC789] rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-[#15313D]" />
              </div>
              <h3 className="text-xl mb-3">Certificación Profesional</h3>
              <p className="text-[#C6C6C6]">
                Obtén certificados avalados por expertos reconocidos en la industria
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFC789] rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-[#15313D]" />
              </div>
              <h3 className="text-xl mb-3">Comunidad Activa</h3>
              <p className="text-[#C6C6C6]">
                Conecta con miles de profesionales y comparte experiencias
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFC789] rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-[#15313D]" />
              </div>
              <h3 className="text-xl mb-3">Contenido Actualizado</h3>
              <p className="text-[#C6C6C6]">
                Aprende las últimas tendencias y mejores prácticas del sector
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFC789] rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-[#15313D]" />
              </div>
              <h3 className="text-xl mb-3">Resultados Reales</h3>
              <p className="text-[#C6C6C6]">
                Implementa estrategias probadas que generan resultados medibles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#15313D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Comienza Tu Transformación Hoy
          </h2>
          <p className="text-lg text-[#C6C6C6] mb-8">
            Únete a miles de profesionales que ya están potenciando sus negocios gastronómicos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 bg-[#FFC789] text-[#15313D] px-10 py-4 rounded-lg hover:bg-[#ffd5a3] transition-all hover:scale-105 shadow-xl text-lg"
            >
              Crear Cuenta Gratis
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/catalog"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#65A5C0] text-white px-10 py-4 rounded-lg hover:bg-[#65A5C0]/10 transition-all text-lg"
            >
              Explorar Cursos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
