import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { wordsDatabase, getRandomWord } from '../data/words';
import { ArrowLeft, Eye, EyeOff, RotateCcw, CheckCircle2, ArrowRight } from 'lucide-react';

const StudyPage: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(getRandomWord());
  const [showTranslation, setShowTranslation] = useState(false);
  const [studiedWords, setStudiedWords] = useState<number[]>([]);

  const nextWord = () => {
    setCurrentWord(getRandomWord());
    setShowTranslation(false);
  };

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  const markAsStudied = () => {
    if (!studiedWords.includes(currentWord.id)) {
      setStudiedWords([...studiedWords, currentWord.id]);
    }
    nextWord();
  };

  const resetProgress = () => {
    setStudiedWords([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
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
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              Estudadas: {studiedWords.length}
            </div>
            <button
              onClick={resetProgress}
              className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🧠 Modo Estudo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pratique seu vocabulário de forma ativa. Veja a imagem e palavra, tente lembrar da tradução, depois revele a resposta.
          </p>
        </div>

        {/* Study Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          {/* Image */}
          <div className="relative h-64 md:h-80 bg-gradient-to-r from-purple-500 to-blue-600">
            <img
              src={currentWord.imagem_url}
              alt={currentWord.palavra_ingles}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>

          <div className="p-8">
            {/* Word */}
            <div className="text-center mb-8">
              <h2 className="text-5xl font-bold text-blue-600 mb-4">
                {currentWord.palavra_ingles}
              </h2>
              
              <div className="min-h-[2rem] mb-6">
                {showTranslation && (
                  <p className="text-2xl text-gray-700 font-medium animate-fade-in">
                    {currentWord.traducao_portugues}
                  </p>
                )}
              </div>

              {/* Toggle Translation Button */}
              <button
                onClick={toggleTranslation}
                className={`flex items-center space-x-2 mx-auto px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  showTranslation
                    ? 'bg-gray-600 text-white hover:bg-gray-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {showTranslation ? (
                  <>
                    <EyeOff className="h-5 w-5" />
                    <span>Ocultar Tradução</span>
                  </>
                ) : (
                  <>
                    <Eye className="h-5 w-5" />
                    <span>Revelar Tradução</span>
                  </>
                )}
              </button>
            </div>

            {/* Example (shown when translation is revealed) */}
            {showTranslation && (
              <div className="bg-blue-50 rounded-xl p-6 mb-6 animate-fade-in">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  💬 Exemplo de uso:
                </h3>
                <p className="text-gray-800 text-lg italic mb-2">
                  "{currentWord.frase_exemplo_ingles}"
                </p>
                <p className="text-gray-700">
                  "{currentWord.frase_exemplo_portugues}"
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={nextWord}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                <ArrowRight className="h-5 w-5" />
                <span>Próxima Palavra</span>
              </button>
              
              <button
                onClick={markAsStudied}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                <CheckCircle2 className="h-5 w-5" />
                <span>Marcar como Estudada</span>
              </button>

              <Link
                to={`/word/${currentWord.id}`}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                <span>Ver Detalhes</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Study Tips */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
          <h3 className="text-lg font-semibold text-orange-800 mb-3">
            💡 Dicas de Estudo
          </h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Primeiro tente lembrar da tradução antes de revelar</li>
            <li>• Pratique pronunciar a palavra em voz alta</li>
            <li>• Crie suas próprias frases usando a palavra</li>
            <li>• Marque como estudada apenas quando se sentir confiante</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudyPage;