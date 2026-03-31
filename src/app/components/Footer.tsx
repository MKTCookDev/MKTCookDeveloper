import { Link } from 'react-router';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#15313D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl mb-4 text-[#FFC789]">MKTCook Academy</h3>
            <p className="text-[#C6C6C6] text-sm leading-relaxed">
              La plataforma líder en educación de marketing culinario. 
              Aprende de los mejores profesionales del sector.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog" className="text-[#C6C6C6] hover:text-[#FFC789] transition-colors text-sm">
                  Explorar Cursos
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-[#C6C6C6] hover:text-[#FFC789] transition-colors text-sm">
                  Mi Dashboard
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#C6C6C6] hover:text-[#FFC789] transition-colors text-sm">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#C6C6C6] hover:text-[#FFC789] transition-colors text-sm">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[#C6C6C6] text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-[#65A5C0]" />
                <span>info@mktcookacademy.com</span>
              </li>
              <li className="flex items-start gap-2 text-[#C6C6C6] text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-[#65A5C0]" />
                <span>+34 900 123 456</span>
              </li>
              <li className="flex items-start gap-2 text-[#C6C6C6] text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-[#65A5C0]" />
                <span>Madrid, España</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-[#2F505E] p-2.5 rounded-lg hover:bg-[#FFC789] hover:text-[#15313D] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-[#2F505E] p-2.5 rounded-lg hover:bg-[#FFC789] hover:text-[#15313D] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-[#2F505E] p-2.5 rounded-lg hover:bg-[#FFC789] hover:text-[#15313D] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-[#2F505E] p-2.5 rounded-lg hover:bg-[#FFC789] hover:text-[#15313D] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-[#C6C6C6] text-sm">
                Únete a nuestra comunidad de más de <span className="text-[#FFC789]">10,000</span> estudiantes.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2F505E] mt-10 pt-8 text-center">
          <p className="text-[#C6C6C6] text-sm">
            © 2026 MKTCook Academy. Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <Link to="/" className="text-[#C6C6C6] hover:text-[#FFC789] text-xs transition-colors">
              Términos de Uso
            </Link>
            <Link to="/" className="text-[#C6C6C6] hover:text-[#FFC789] text-xs transition-colors">
              Política de Privacidad
            </Link>
            <Link to="/" className="text-[#C6C6C6] hover:text-[#FFC789] text-xs transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}