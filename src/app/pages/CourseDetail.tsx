import { useParams, Link, useNavigate } from 'react-router';
import { Star, Clock, Users, Award, CheckCircle, ArrowLeft } from 'lucide-react';
import { coursesData } from '../data/coursesData';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();
  
  const course = coursesData.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-[#15313D] mb-4">Curso no encontrado</h2>
          <Link to="/catalog" className="text-[#65A5C0] hover:underline">
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  const courseImages = [
    'https://images.unsplash.com/photo-1588560107833-167198a53677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzcwNzgwOTk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1697020358336-3db2f502242a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHNvY2lhbCUyMG1lZGlhfGVufDF8fHx8MTc3MDc4MDk5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1610957899934-fcc0db8d7287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYnJhbmRpbmclMjBlbGVnYW50fGVufDF8fHx8MTc3MDc4MDk5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1760383710574-73f43fd3370d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHklMjBwcm9mZXNzaW9uYWwlMjBzdHlsaW5nfGVufDF8fHx8MTc3MDcwNjIyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1599110906471-54c8ba535658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZW1haWwlMjBuZXdzbGV0dGVyfGVufDF8fHx8MTc3MDc4MDk5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1761515397001-c8e82879c4c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYW5hbHl0aWNzJTIwZGF0YSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzA3ODA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  const isInCart = cartItems.some(item => item.id === course.id);

  const handleAddToCart = () => {
    addToCart(course);
    navigate('/cart');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Back Button */}
      <div className="bg-[#15313D] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white hover:text-[#FFC789] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver
          </button>
        </div>
      </div>

      {/* Course Header */}
      <section className="bg-[#15313D] text-white pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm bg-[#65A5C0] px-3 py-1 rounded-full">
                  {course.category}
                </span>
                <span className="text-sm bg-[#2F505E] px-3 py-1 rounded-full">
                  {course.level}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6">
                {course.title}
              </h1>

              <p className="text-lg text-[#C6C6C6] mb-6">
                {course.description}
              </p>

              <div className="flex items-center gap-6 mb-6 pb-6 border-b border-[#2F505E]">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#FFC789] fill-current" />
                  <span className="text-lg">{course.rating}</span>
                </div>
                <div className="flex items-center gap-2 text-[#C6C6C6]">
                  <Users className="w-5 h-5" />
                  <span>{course.studentsCount.toLocaleString()} estudiantes</span>
                </div>
                <div className="flex items-center gap-2 text-[#C6C6C6]">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[#FFC789]" />
                <span className="text-[#C6C6C6]">Instructor: <span className="text-white">{course.instructor}</span></span>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <ImageWithFallback
                  src={courseImages[parseInt(course.id) - 1]}
                  alt={course.title}
                  className="w-full h-64 object-cover"
                />
                
                <div className="p-8">
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-4xl text-[#15313D]">${course.price}</span>
                    <span className="text-[#2F505E] line-through">$249.99</span>
                  </div>

                  {isInCart ? (
                    <Link
                      to="/cart"
                      className="block w-full text-center bg-[#65A5C0] text-white py-4 rounded-lg hover:bg-[#5394af] transition-colors mb-3"
                    >
                      Ver en el Carrito
                    </Link>
                  ) : (
                    <button
                      onClick={handleAddToCart}
                      className="w-full bg-[#FFC789] text-[#15313D] py-4 rounded-lg hover:bg-[#ffd5a3] transition-all hover:scale-105 mb-3 shadow-lg"
                    >
                      Comprar Ahora
                    </button>
                  )}

                  <div className="space-y-3 text-sm text-[#2F505E]">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#65A5C0]" />
                      <span>Acceso de por vida</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#65A5C0]" />
                      <span>Certificado de finalización</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#65A5C0]" />
                      <span>Garantía de devolución 30 días</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#65A5C0]" />
                      <span>Soporte directo del instructor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Modules */}
              <div className="mb-12">
                <h2 className="text-3xl text-[#15313D] mb-6">Contenido del Curso</h2>
                <div className="space-y-4">
                  {course.modules.map((module, index) => (
                    <div
                      key={module.id}
                      className="bg-white border border-[#C6C6C6]/30 rounded-xl p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl text-[#15313D]">
                          Módulo {index + 1}: {module.title}
                        </h3>
                        <span className="text-sm text-[#2F505E] bg-[#C6C6C6]/20 px-3 py-1 rounded-full">
                          {module.duration}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-start gap-2 text-[#2F505E]">
                            <CheckCircle className="w-4 h-4 mt-0.5 text-[#65A5C0] flex-shrink-0" />
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div>
                <h2 className="text-3xl text-[#15313D] mb-6">Testimonios</h2>
                <div className="space-y-6">
                  {course.testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-[#2F505E]/5 border border-[#C6C6C6]/30 rounded-xl p-6"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#65A5C0] rounded-full flex items-center justify-center text-white text-xl">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-lg text-[#15313D]">{testimonial.name}</h4>
                          <p className="text-sm text-[#2F505E]">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 mb-3">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-[#FFC789] fill-current" />
                        ))}
                      </div>
                      <p className="text-[#2F505E] leading-relaxed">{testimonial.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#2F505E] text-white rounded-xl p-6 sticky top-24">
                <h3 className="text-xl mb-4">¿Por qué este curso?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FFC789] flex-shrink-0 mt-0.5" />
                    <span>Contenido actualizado y relevante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FFC789] flex-shrink-0 mt-0.5" />
                    <span>Casos prácticos reales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FFC789] flex-shrink-0 mt-0.5" />
                    <span>Soporte continuo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FFC789] flex-shrink-0 mt-0.5" />
                    <span>Certificación profesional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FFC789] flex-shrink-0 mt-0.5" />
                    <span>Comunidad activa</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
