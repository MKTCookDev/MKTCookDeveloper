import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { BookOpen, Eye, EyeOff, Lock, Mail, User, CheckCircle } from 'lucide-react';

export function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors: Record<string, string> = {};
    
    if (formData.fullName.length < 3) {
      newErrors.fullName = 'El nombre debe tener al menos 3 caracteres';
    }
    
    if (!formData.email.includes('@')) {
      newErrors.email = 'Ingresa un correo válido';
    }
    
    if (formData.password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Mock registration - in real app, this would call an API
    console.log('Registration attempt:', formData);
    // Simulate successful registration
    navigate('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen bg-[#15313D] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC789] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#65A5C0] rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left side - Registration Form */}
        <div className="w-full lg:order-1 order-2">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center gap-3 mb-8 justify-center">
              <div className="bg-[#FFC789] p-2.5 rounded-lg">
                <BookOpen className="w-6 h-6 text-[#15313D]" />
              </div>
              <div>
                <h1 className="text-xl text-[#15313D]">MKTCook Academy</h1>
                <p className="text-[10px] text-[#65A5C0] uppercase tracking-widest">Marketing Culinario</p>
              </div>
            </div>

            <div className="mb-8 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl text-[#15313D] mb-3">
                Crea tu Cuenta
              </h2>
              <p className="text-[#2F505E]">
                Comienza tu viaje en el marketing gastronómico
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name Field */}
              <div>
                <label htmlFor="fullName" className="block text-[#15313D] mb-2">
                  Nombre Completo
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2F505E]" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Juan Pérez"
                    required
                    className={`w-full pl-12 pr-4 py-3.5 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? 'border-red-500 focus:ring-red-300'
                        : 'border-[#C6C6C6] focus:ring-[#65A5C0] focus:border-transparent'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-[#15313D] mb-2">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2F505E]" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className={`w-full pl-12 pr-4 py-3.5 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-300'
                        : 'border-[#C6C6C6] focus:ring-[#65A5C0] focus:border-transparent'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-[#15313D] mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2F505E]" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Mínimo 8 caracteres"
                    required
                    className={`w-full pl-12 pr-12 py-3.5 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.password
                        ? 'border-red-500 focus:ring-red-300'
                        : 'border-[#C6C6C6] focus:ring-[#65A5C0] focus:border-transparent'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2F505E] hover:text-[#15313D] transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-[#15313D] mb-2">
                  Confirmar Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2F505E]" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Repite tu contraseña"
                    required
                    className={`w-full pl-12 pr-12 py-3.5 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.confirmPassword
                        ? 'border-red-500 focus:ring-red-300'
                        : 'border-[#C6C6C6] focus:ring-[#65A5C0] focus:border-transparent'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2F505E] hover:text-[#15313D] transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Terms & Conditions */}
              <div className="bg-[#C6C6C6]/10 p-4 rounded-lg">
                <p className="text-xs text-[#2F505E] leading-relaxed">
                  Al crear una cuenta, aceptas nuestros{' '}
                  <Link to="/terms" className="text-[#65A5C0] hover:underline">
                    Términos de Servicio
                  </Link>{' '}
                  y{' '}
                  <Link to="/privacy" className="text-[#65A5C0] hover:underline">
                    Política de Privacidad
                  </Link>
                  .
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#FFC789] text-[#15313D] py-4 rounded-lg hover:bg-[#ffd5a3] transition-all hover:scale-[1.02] shadow-lg"
              >
                Crear mi Cuenta
              </button>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-[#2F505E]">
                  ¿Ya tienes una cuenta?{' '}
                  <Link to="/login" className="text-[#65A5C0] hover:underline">
                    Inicia sesión
                  </Link>
                </p>
              </div>
            </form>

            {/* Footer Links */}
            <div className="mt-8 pt-6 border-t border-[#C6C6C6]/30 text-center">
              <p className="text-sm text-[#2F505E]">
                ¿Necesitas ayuda?{' '}
                <Link to="/contact" className="text-[#65A5C0] hover:underline">
                  Contáctanos
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Benefits */}
        <div className="hidden lg:block text-white lg:order-2 order-1">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#FFC789] p-3 rounded-xl">
                <BookOpen className="w-8 h-8 text-[#15313D]" />
              </div>
              <div>
                <h1 className="text-2xl">MKTCook Academy</h1>
                <p className="text-xs text-[#65A5C0] uppercase tracking-widest">Marketing Culinario</p>
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
            Únete a Nuestra Comunidad de Profesionales
          </h2>
          
          <p className="text-lg text-[#C6C6C6] mb-8 leading-relaxed">
            Crea tu cuenta y comienza a transformar tu negocio gastronómico 
            con estrategias comprobadas de marketing.
          </p>

          <div className="space-y-4 mb-12">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#FFC789] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg mb-1">Acceso Inmediato</h3>
                <p className="text-[#C6C6C6] text-sm">
                  Comienza a aprender desde el primer momento con contenido premium
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#FFC789] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg mb-1">Cursos Especializados</h3>
                <p className="text-[#C6C6C6] text-sm">
                  Más de 50 cursos enfocados en marketing gastronómico
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#FFC789] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg mb-1">Certificados Profesionales</h3>
                <p className="text-[#C6C6C6] text-sm">
                  Valida tus conocimientos con certificaciones reconocidas
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#FFC789] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg mb-1">Soporte Continuo</h3>
                <p className="text-[#C6C6C6] text-sm">
                  Acceso directo a instructores y comunidad activa
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#FFC789] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg mb-1">Garantía Total</h3>
                <p className="text-[#C6C6C6] text-sm">
                  30 días de garantía de satisfacción o te devolvemos tu dinero
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#2F505E] rounded-xl p-6">
            <p className="text-[#C6C6C6] text-sm mb-4">
              "MKTCook Academy cambió completamente mi negocio. Los cursos son 
              prácticos, actualizados y generan resultados reales."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FFC789] rounded-full flex items-center justify-center text-[#15313D] text-lg">
                CR
              </div>
              <div>
                <p className="text-white">Carlos Ramírez</p>
                <p className="text-[#C6C6C6] text-sm">Propietario, Bistro del Mar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}