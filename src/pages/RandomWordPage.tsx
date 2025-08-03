import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRandomWord, Word } from '../data/words';
import { ArrowLeft, RefreshCw, ExternalLink } from 'lucide-react';

const RandomWordPage: React.FC = () => {
  const [word, setWord] = useState<Word | null>(null);

  useEffect(() => {
    setWord(getRandomWord());
  }, []);

  const getNewRandomWord = () => {
    setWord(getRandomWord());
  };

  if (!word) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Carregando palavra aleatória...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Voltar ao início</span>
          </Link>
          
          <button
            onClick={getNewRandomWord}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <RefreshCw className="h-5 w-5" />
            <span>Nova Palavra</span>
          </button>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎲 Palavra Aleatória
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descobra uma nova palavra para expandir seu vocabulário diariamente
          </p>
        </div>

        {/* Random Word Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          {/* Image */}
          <div className="relative h-64 md:h-80 bg-gradient-to-r from-green-500 to-blue-600">
            <img
              src={word.imagem_url}
              alt={word.palavra_ingles}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute top-4 right-4">
              <span className="inline-block px-3 py-1 bg-white bg-opacity-90 text-green-700 text-sm font-semibold rounded-full">
                {word.categoria}
              </span>
            </div>
          </div>

          <div className="p-8">
            {/* Word Info */}
            <div className="text-center mb-8">
              <h2 className="text-5xl font-bold text-green-600 mb-4">
                {word.palavra_ingles}
              </h2>
              <p className="text-2xl text-gray-700 font-medium mb-6">
                {word.traducao_portugues}
              </p>
            </div>

            {/* Example */}
            <div className="bg-green-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                💬 Exemplo de uso:
              </h3>
              <p className="text-gray-800 text-lg italic mb-2">
                "{word.frase_exemplo_ingles}"
              </p>
              <p className="text-gray-700">
                "{word.frase_exemplo_portugues}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={getNewRandomWord}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                <RefreshCw className="h-5 w-5" />
                <span>Outra Palavra Aleatória</span>
              </button>
              
              <Link
                to={`/word/${word.id}`}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Ver Detalhes Completos</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Suggestion */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-200 text-center">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">
            💡 Sugestão
          </h3>
          <p className="text-gray-700">
            Que tal estudar uma palavra aleatória todos os dias? 
            Adicione esta página aos seus favoritos e visite diariamente para expandir seu vocabulário!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RandomWordPage;