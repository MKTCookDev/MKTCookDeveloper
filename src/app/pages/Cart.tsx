import { Link } from 'react-router';
import { ShoppingCart, Trash2, CreditCard, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';

export function Cart() {
  const { cartItems, removeFromCart, getCartTotal, clearCart } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  const courseImages = [
    'https://images.unsplash.com/photo-1588560107833-167198a53677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzcwNzgwOTk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1697020358336-3db2f502242a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHNvY2lhbCUyMG1lZGlhfGVufDF8fHx8MTc3MDc4MDk5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1610957899934-fcc0db8d7287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYnJhbmRpbmclMjBlbGVnYW50fGVufDF8fHx8MTc3MDc4MDk5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1760383710574-73f43fd3370d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHklMjBwcm9mZXNzaW9uYWwlMjBzdHlsaW5nfGVufDF8fHx8MTc3MDcwNjIyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1599110906471-54c8ba535658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZW1haWwlMjBuZXdzbGV0dGVyfGVufDF8fHx8MTc3MDc4MDk5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1761515397001-c8e82879c4c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYW5hbHl0aWNzJTIwZGF0YSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzA3ODA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  const handleCheckout = () => {
    setShowSuccess(true);
    setTimeout(() => {
      clearCart();
      setShowSuccess(false);
    }, 3000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-[#2F505E] text-white rounded-2xl p-8 text-center shadow-2xl">
          <div className="w-20 h-20 bg-[#FFC789] rounded-full flex items-center justify-center mx-auto mb-6">
            <CreditCard className="w-10 h-10 text-[#15313D]" />
          </div>
          <h2 className="text-3xl mb-4">¡Compra Exitosa!</h2>
          <p className="text-[#C6C6C6] mb-6">
            Tus cursos han sido agregados a tu dashboard. Comienza a aprender ahora mismo.
          </p>
          <Link
            to="/dashboard"
            className="inline-block bg-[#FFC789] text-[#15313D] px-8 py-3 rounded-lg hover:bg-[#ffd5a3] transition-colors"
          >
            Ir a Mi Dashboard
          </Link>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <ShoppingCart className="w-24 h-24 text-[#C6C6C6] mx-auto mb-6" />
          <h2 className="text-3xl text-[#15313D] mb-4">Tu carrito está vacío</h2>
          <p className="text-[#2F505E] mb-8">
            Explora nuestro catálogo y encuentra el curso perfecto para ti
          </p>
          <Link
            to="/catalog"
            className="inline-block bg-[#FFC789] text-[#15313D] px-8 py-3 rounded-lg hover:bg-[#ffd5a3] transition-colors"
          >
            Ver Cursos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#15313D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingCart className="w-8 h-8 text-[#FFC789]" />
            <h1 className="text-4xl md:text-5xl">Carrito de Compras</h1>
          </div>
          <p className="text-lg text-[#C6C6C6]">
            {cartItems.length} {cartItems.length === 1 ? 'curso' : 'cursos'} en tu carrito
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((course) => (
                <div
                  key={course.id}
                  className="bg-white border border-[#C6C6C6]/30 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <ImageWithFallback
                      src={courseImages[parseInt(course.id) - 1]}
                      alt={course.title}
                      className="w-full sm:w-32 h-32 object-cover rounded-lg flex-shrink-0"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl text-[#15313D] mb-1">
                            {course.title}
                          </h3>
                          <p className="text-sm text-[#2F505E]">
                            Por {course.instructor}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(course.id)}
                          className="text-[#2F505E] hover:text-red-600 transition-colors p-2"
                          title="Eliminar"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <p className="text-sm text-[#2F505E] mb-3 line-clamp-2">
                        {course.shortDescription}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#2F505E]">
                          {course.duration} • {course.level}
                        </span>
                        <span className="text-2xl text-[#15313D]">
                          ${course.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#2F505E] text-white rounded-xl p-6 sticky top-24">
              <h2 className="text-2xl mb-6">Resumen de Compra</h2>
              
              <div className="space-y-3 mb-6 pb-6 border-b border-[#65A5C0]/30">
                <div className="flex justify-between">
                  <span className="text-[#C6C6C6]">Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#C6C6C6]">Descuento</span>
                  <span className="text-[#FFC789]">-$0.00</span>
                </div>
              </div>
              
              <div className="flex justify-between mb-6 text-xl">
                <span>Total</span>
                <span className="text-[#FFC789]">${getCartTotal().toFixed(2)}</span>
              </div>
              
              <button
                onClick={handleCheckout}
                className="w-full bg-[#FFC789] text-[#15313D] py-4 rounded-lg hover:bg-[#ffd5a3] transition-all hover:scale-105 mb-4 shadow-lg flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" />
                Proceder al Pago
              </button>
              
              <div className="flex items-center justify-center gap-2 text-sm text-[#C6C6C6]">
                <Lock className="w-4 h-4" />
                <span>Pago 100% seguro</span>
              </div>
              
              <div className="mt-6 pt-6 border-t border-[#65A5C0]/30 space-y-3 text-sm text-[#C6C6C6]">
                <p>✓ Acceso inmediato después del pago</p>
                <p>✓ Garantía de devolución de 30 días</p>
                <p>✓ Certificado de finalización incluido</p>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="mt-8 text-center">
          <Link
            to="/catalog"
            className="inline-block text-[#15313D] border-2 border-[#15313D] px-8 py-3 rounded-lg hover:bg-[#15313D] hover:text-white transition-all"
          >
            Continuar Comprando
          </Link>
        </div>
      </div>
    </div>
  );
}
