import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { BookOpen, Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in real app, this would call an API
    console.log('Login attempt:', formData);
    // Simulate successful login
    navigate('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-[#15313D] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFC789] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#65A5C0] rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left side - Branding */}
        <div className="hidden lg:block text-white">
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
            Transforma tu Pasión Gastronómica en Éxito
          </h2>
          
          <p className="text-lg text-[#C6C6C6] mb-8 leading-relaxed">
            Accede a cursos premium diseñados por expertos de la industria y 
            lleva tu negocio gastronómico al siguiente nivel.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#FFC789]/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 rounded-full bg-[#FFC789]"></div>
              </div>
              <div>
                <h3 className="text-lg mb-1">Certificación Profesional</h3>
                <p className="text-[#C6C6C6] text-sm">Obtén certificados avalados por expertos</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#FFC789]/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 rounded-full bg-[#FFC789]"></div>
              </div>
              <div>
                <h3 className="text-lg mb-1">Aprende a tu Ritmo</h3>
                <p className="text-[#C6C6C6] text-sm">Acceso ilimitado desde cualquier dispositivo</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#FFC789]/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 rounded-full bg-[#FFC789]"></div>
              </div>
              <div>
                <h3 className="text-lg mb-1">Comunidad Exclusiva</h3>
                <p className="text-[#C6C6C6] text-sm">Conecta con profesionales de todo el mundo</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#2F505E]">
            <div className="grid grid-cols-3 gap-6">
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
                <p className="text-sm text-[#C6C6C6]">Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full">
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
                Accede a tu Academia
              </h2>
              <p className="text-[#2F505E]">
                Continúa tu formación en marketing gastronómico
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full pl-12 pr-4 py-3.5 border border-[#C6C6C6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#65A5C0] focus:border-transparent transition-all"
                  />
                </div>
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
                    placeholder="••••••••"
                    required
                    className="w-full pl-12 pr-12 py-3.5 border border-[#C6C6C6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#65A5C0] focus:border-transparent transition-all"
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
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="w-4 h-4 border-[#C6C6C6] rounded text-[#65A5C0] focus:ring-[#65A5C0] focus:ring-offset-0 cursor-pointer"
                  />
                  <span className="text-[#2F505E] text-sm group-hover:text-[#15313D] transition-colors">
                    Recordarme
                  </span>
                </label>
                
                <Link
                  to="/forgot-password"
                  className="text-sm text-[#65A5C0] hover:text-[#5394af] transition-colors"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#FFC789] text-[#15313D] py-4 rounded-lg hover:bg-[#ffd5a3] transition-all hover:scale-[1.02] shadow-lg"
              >
                Iniciar Sesión
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#C6C6C6]"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-[#2F505E]">o</span>
                </div>
              </div>

              {/* Create Account Button */}
              <Link
                to="/register"
                className="block w-full text-center border-2 border-[#15313D] text-[#15313D] py-4 rounded-lg hover:bg-[#15313D] hover:text-white transition-all"
              >
                Crear una Cuenta Nueva
              </Link>
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
      </div>
    </div>
  );
}