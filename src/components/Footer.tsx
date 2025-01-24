import { Link } from "react-router-dom";
import { Github, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Acerca de
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/sobre-nosotros" className="text-base text-gray-500 hover:text-gray-900">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-base text-gray-500 hover:text-gray-900">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Recursos
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/guia" className="text-base text-gray-500 hover:text-gray-900">
                  Guía de Uso
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-base text-gray-500 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/privacidad" className="text-base text-gray-500 hover:text-gray-900">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terminos" className="text-base text-gray-500 hover:text-gray-900">
                  Términos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Social
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="https://github.com" className="text-base text-gray-500 hover:text-gray-900 flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-base text-gray-500 hover:text-gray-900 flex items-center gap-2">
                  <Twitter className="h-5 w-5" />
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} StudyGroupie. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};