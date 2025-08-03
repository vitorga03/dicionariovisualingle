import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { wordsDatabase } from '../data/words';
import { Copy, CheckCircle, ArrowLeft, Share2, Volume2, RefreshCw } from 'lucide-react';

const WordPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [copied, setCopied] = useState(false);
  
  const word = wordsDatabase.find(w => w.id === parseInt(id || '0'));
  
  if (!word) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Palavra não encontrada</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(word.prompt_pratica);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  const speakWord = (text: string, lang: string = 'en-US') => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsDatabase.length);
    const randomWord = wordsDatabase[randomIndex];
    window.location.href = `/word/${randomWord.id}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Voltar ao início</span>
          </Link>
          
          <div className="flex space-x-2">
            <button
              onClick={getRandomWord}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              <span className="hidden sm:inline">Nova palavra</span>
            </button>
            
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: `Palavra: ${word.palavra_ingles}`,
                    text: `Aprenda a palavra "${word.palavra_ingles}" (${word.traducao_portugues}) no Dicionário Visual Ilustrado`,
                    url: window.location.href
                  });
                }
              }}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Share2 className="h-4 w-4" />
              <span className="hidden sm:inline">Compartilhar</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-500 to-purple-600">
            <img
              src={word.imagem_url}
              alt={word.palavra_ingles}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block px-3 py-1 bg-white bg-opacity-90 text-blue-700 text-sm font-semibold rounded-full mb-2">
                {word.categoria}
              </span>
            </div>
          </div>

          <div className="p-8">
            {/* Word Title */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
                  {word.palavra_ingles}
                </h1>
                <button
                  onClick={() => speakWord(word.palavra_ingles)}
                  className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full transition-colors"
                  title="Ouvir pronuncia"
                >
                  <Volume2 className="h-6 w-6" />
                </button>
              </div>
              <p className="text-2xl text-gray-700 font-medium">
                {word.traducao_portugues}
              </p>
            </div>

            {/* Examples Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                  💬 Exemplo em Inglês
                  <button
                    onClick={() => speakWord(word.frase_exemplo_ingles)}
                    className="ml-2 p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded transition-colors"
                  >
                    <Volume2 className="h-4 w-4" />
                  </button>
                </h3>
                <p className="text-gray-800 text-lg italic leading-relaxed">
                  "{word.frase_exemplo_ingles}"
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  📌 Tradução
                </h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  "{word.frase_exemplo_portugues}"
                </p>
              </div>
            </div>

            {/* AI Practice Section */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                🤖 Prática com IA
              </h3>
              <p className="text-gray-700 mb-4">
                Copie este prompt e cole no ChatGPT para praticar esta palavra de forma personalizada:
              </p>
              
              <div className="bg-white rounded-lg p-4 border border-purple-200 mb-4">
                <p className="text-gray-800 text-sm font-mono leading-relaxed">
                  {word.prompt_pratica}
                </p>
              </div>

              <button
                onClick={copyPrompt}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  copied 
                    ? 'bg-green-600 text-white' 
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                {copied ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-5 w-5" />
                    <span>Copiar Prompt</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation to other words */}
        <div className="mt-8 flex justify-center">
          <Link
            to={`/category/${word.categoria}`}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Ver mais palavras da categoria "{word.categoria}"
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WordPage;