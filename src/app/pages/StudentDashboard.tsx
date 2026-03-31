import { Link } from 'react-router';
import { BookOpen, Award, Clock, Download, Play, TrendingUp } from 'lucide-react';
import { Progress } from '../components/ui/progress';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function StudentDashboard() {
  // Mock enrolled courses data
  const enrolledCourses = [
    {
      id: '1',
      title: 'Marketing Culinario Digital',
      progress: 65,
      lastAccessed: '2026-02-10',
      instructor: 'Chef María González',
    },
    {
      id: '2',
      title: 'Gestión de Redes Sociales para Chefs',
      progress: 30,
      lastAccessed: '2026-02-08',
      totalModules: 6,
      completedModules: 2,
      image: 'https://images.unsplash.com/photo-1697020358336-3db2f502242a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHNvY2lhbCUyMG1lZGlhfGVufDF8fHx8MTc3MDc4MDk5Nnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: '4',
      title: 'Fotografía Gastronómica Profesional',
      progress: 90,
      lastAccessed: '2026-02-11',
      totalModules: 5,
      completedModules: 5,
      image: 'https://images.unsplash.com/photo-1760383710574-73f43fd3370d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHklMjBwcm9mZXNzaW9uYWwlMjBzdHlsaW5nfGVufDF8fHx8MTc3MDcwNjIyMHww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const certificates = [
    {
      id: '1',
      courseName: 'Email Marketing para Restaurantes',
      completedDate: '2026-01-15',
      certificateId: 'CERT-2026-001543'
    }
  ];

  const stats = {
    totalCourses: enrolledCourses.length,
    completedCourses: 1,
    totalHours: 45,
    certificates: certificates.length
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#15313D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">Mi Dashboard</h1>
          <p className="text-lg text-[#C6C6C6]">
            Bienvenido de nuevo. Continúa tu camino de aprendizaje.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white border border-[#C6C6C6]/30 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="bg-[#65A5C0]/10 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-[#65A5C0]" />
              </div>
              <span className="text-3xl text-[#15313D]">{stats.totalCourses}</span>
            </div>
            <h3 className="text-[#2F505E]">Cursos Activos</h3>
          </div>

          <div className="bg-white border border-[#C6C6C6]/30 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="bg-[#FFC789]/10 p-3 rounded-lg">
                <Award className="w-6 h-6 text-[#FFC789]" />
              </div>
              <span className="text-3xl text-[#15313D]">{stats.completedCourses}</span>
            </div>
            <h3 className="text-[#2F505E]">Cursos Completados</h3>
          </div>

          <div className="bg-white border border-[#C6C6C6]/30 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="bg-[#2F505E]/10 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-[#2F505E]" />
              </div>
              <span className="text-3xl text-[#15313D]">{stats.totalHours}</span>
            </div>
            <h3 className="text-[#2F505E]">Horas de Estudio</h3>
          </div>

          <div className="bg-white border border-[#C6C6C6]/30 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="bg-[#FFC789]/10 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-[#FFC789]" />
              </div>
              <span className="text-3xl text-[#15313D]">{stats.certificates}</span>
            </div>
            <h3 className="text-[#2F505E]">Certificados</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Courses */}
            <div>
              <h2 className="text-3xl text-[#15313D] mb-6">Mis Cursos</h2>
              <div className="space-y-6">
                {enrolledCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white border border-[#C6C6C6]/30 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row">
                      <ImageWithFallback
                        src={course.image}
                        alt={course.title}
                        className="w-full sm:w-48 h-48 object-cover"
                      />
                      
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl text-[#15313D]">
                            {course.title}
                          </h3>
                          {course.progress === 100 && (
                            <Award className="w-6 h-6 text-[#FFC789] flex-shrink-0" />
                          )}
                        </div>
                        
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm text-[#2F505E] mb-2">
                            <span>Progreso: {course.progress}%</span>
                            <span>
                              {course.completedModules}/{course.totalModules} módulos
                            </span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Link
                            to={`/course/${course.id}`}
                            className="flex items-center justify-center gap-2 bg-[#FFC789] text-[#15313D] px-6 py-2.5 rounded-lg hover:bg-[#ffd5a3] transition-colors"
                          >
                            <Play className="w-4 h-4" />
                            Continuar Curso
                          </Link>
                          {course.progress === 100 && (
                            <button className="flex items-center justify-center gap-2 bg-[#65A5C0] text-white px-6 py-2.5 rounded-lg hover:bg-[#5394af] transition-colors">
                              <Download className="w-4 h-4" />
                              Descargar Certificado
                            </button>
                          )}
                        </div>
                        
                        <p className="text-xs text-[#2F505E] mt-3">
                          Último acceso: {new Date(course.lastAccessed).toLocaleDateString('es-ES', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div>
              <h2 className="text-3xl text-[#15313D] mb-6">Mis Certificados</h2>
              {certificates.length === 0 ? (
                <div className="bg-[#C6C6C6]/10 rounded-xl p-8 text-center">
                  <Award className="w-16 h-16 text-[#C6C6C6] mx-auto mb-4" />
                  <p className="text-[#2F505E]">
                    Aún no tienes certificados. Completa un curso para obtener tu primer certificado.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {certificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="bg-white border border-[#C6C6C6]/30 rounded-xl p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="bg-[#FFC789]/10 p-3 rounded-lg">
                            <Award className="w-8 h-8 text-[#FFC789]" />
                          </div>
                          <div>
                            <h3 className="text-lg text-[#15313D] mb-1">
                              {cert.courseName}
                            </h3>
                            <p className="text-sm text-[#2F505E] mb-2">
                              Completado el {new Date(cert.completedDate).toLocaleDateString('es-ES', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                              })}
                            </p>
                            <p className="text-xs text-[#2F505E]">
                              ID: {cert.certificateId}
                            </p>
                          </div>
                        </div>
                        <button className="flex items-center gap-2 text-[#65A5C0] hover:text-[#5394af] transition-colors">
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              {/* Explore More */}
              <div className="bg-[#2F505E] text-white rounded-xl p-6">
                <h3 className="text-xl mb-3">Explora Más Cursos</h3>
                <p className="text-[#C6C6C6] text-sm mb-4">
                  Continúa ampliando tus conocimientos con nuestros cursos especializados.
                </p>
                <Link
                  to="/catalog"
                  className="block w-full text-center bg-[#FFC789] text-[#15313D] py-3 rounded-lg hover:bg-[#ffd5a3] transition-colors"
                >
                  Ver Catálogo
                </Link>
              </div>

              {/* Learning Tips */}
              <div className="bg-white border border-[#C6C6C6]/30 rounded-xl p-6">
                <h3 className="text-xl text-[#15313D] mb-4">Consejos de Estudio</h3>
                <ul className="space-y-3 text-sm text-[#2F505E]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#65A5C0]">•</span>
                    <span>Dedica al menos 30 minutos diarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#65A5C0]">•</span>
                    <span>Toma notas durante las lecciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#65A5C0]">•</span>
                    <span>Practica lo aprendido inmediatamente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#65A5C0]">•</span>
                    <span>Participa en la comunidad</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}