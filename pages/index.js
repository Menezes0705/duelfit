import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/halter.jpg"
          alt="Background Academia"
          fill
          priority
          className="object-cover brightness-50"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-screen">
        <div className="h-full flex flex-col items-center pt-12">
          {/* Título centralizado */}
          <div className="text-center mb-12">
            <h1 className="text-7xl font-bold font-poppins tracking-tight">
              <span className="text-blue-600">Duel</span>
              <span className="text-white">Fit</span>
            </h1>
            <p className="text-white text-xl mt-4 font-light">
              Transforme seus treinos em duelos épicos
            </p>
          </div>

          {/* Card de Login */}
          <div className="w-full max-w-md bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-blue-600">
                {isLoginMode ? 'Bem-vindo de volta!' : 'Crie sua conta'}
              </h2>
              <p className="mt-2 text-gray-700">
                {isLoginMode ? 'Entre na sua conta' : 'Comece sua jornada fitness'}
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Senha
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02]"
              >
                {isLoginMode ? 'Entrar' : 'Criar Conta'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLoginMode(!isLoginMode)}
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                {isLoginMode ? 'Criar uma nova conta' : 'Já tenho uma conta'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}