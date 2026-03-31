import { Link, useLocation } from 'react-router';
import { ShoppingCart, BookOpen, LayoutDashboard, Menu, X, LogIn, UserPlus, Users } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export function Navbar() {
  const location = useLocation();
  const { cartItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/catalog', label: 'Cursos' },
    { path: '/about', label: 'Nosotros', icon: Users },
    { path: '/dashboard', label: 'Mi Aprendizaje' },
  ];

  return (
    <nav className="bg-[#15313D] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-[#FFC789] p-2.5 rounded-lg group-hover:scale-105 transition-transform">
              <BookOpen className="w-6 h-6 text-[#15313D]" />
            </div>
            <div>
              <h1 className="text-xl tracking-wide">MKTCook Academy</h1>
              <p className="text-[10px] text-[#65A5C0] uppercase tracking-widest">Marketing Culinario</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 transition-colors ${
                  isActive(link.path)
                    ? 'text-[#FFC789]'
                    : 'text-white hover:text-[#65A5C0]'
                }`}
              >
                {link.icon && <link.icon className="w-4 h-4" />}
                {link.label}
              </Link>
            ))}
            
            <Link
              to="/cart"
              className="relative hover:text-[#FFC789] transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FFC789] text-[#15313D] text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <Link
              to="/admin"
              className="hover:text-[#65A5C0] transition-colors"
              title="Panel Administrativo"
            >
              <LayoutDashboard className="w-5 h-5" />
            </Link>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-[#2F505E]">
              <Link
                to="/login"
                className="flex items-center gap-2 text-white hover:text-[#FFC789] transition-colors"
              >
                <LogIn className="w-4 h-4" />
                <span>Entrar</span>
              </Link>
              <Link
                to="/register"
                className="flex items-center gap-2 bg-[#FFC789] text-[#15313D] px-4 py-2 rounded-lg hover:bg-[#ffd5a3] transition-colors"
              >
                <UserPlus className="w-4 h-4" />
                <span>Registrarse</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#2F505E]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 transition-colors ${
                    isActive(link.path)
                      ? 'text-[#FFC789]'
                      : 'text-white hover:text-[#65A5C0]'
                  }`}
                >
                  {link.icon && <link.icon className="w-4 h-4" />}
                  {link.label}
                </Link>
              ))}
              <Link
                to="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#FFC789] transition-colors flex items-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Carrito {cartItems.length > 0 && `(${cartItems.length})`}
              </Link>
              <Link
                to="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#65A5C0] transition-colors flex items-center gap-2"
              >
                <LayoutDashboard className="w-5 h-5" />
                Admin
              </Link>
              
              {/* Mobile Auth Buttons */}
              <div className="flex flex-col gap-3 pt-4 mt-4 border-t border-[#2F505E]">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-white hover:text-[#FFC789] transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Iniciar Sesión</span>
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#FFC789] text-[#15313D] px-4 py-2 rounded-lg hover:bg-[#ffd5a3] transition-colors"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Crear Cuenta</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}