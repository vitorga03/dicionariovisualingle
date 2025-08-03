import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CategoryGrid from '../components/CategoryGrid';
import WordCard from '../components/WordCard';
import { searchWords, getRandomWord } from '../data/words';
import { Shuffle, BookOpen, Brain, Target } from 'lucide-react';

const HomePage: React.FC = () => {
  const [searchResults, setSearchResults] = useState(searchWords(''));
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    setIsSearching(query.length > 0);
    setSearchResults(searchWords(query));
  };

  const handleRandomWord = () => {
    const randomWord = getRandomWord();
    window.location.href = `/word/${randomWord.id}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            📘 Dicionário Visual Ilustrado
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Aprenda inglês de forma visual e interativa com mais de 500 palavras, 
            exemplos práticos e exercícios com IA
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={handleRandomWord}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <Shuffle className="h-5 w-5" />
              <span>Palavra Aleatória</span>
            </button>
            
            <Link
              to="/study"
              className="bg-yellow-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <Brain className="h-5 w-5" />
              <span>Modo Estudo</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Busque sua palavra
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Digite em inglês ou português para encontrar rapidamente a palavra que você está procurando
            </p>
          </div>
          
          <SearchBar onSearch={handleSearch} />
        </section>

        {/* Search Results or Categories */}
        {isSearching ? (
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Resultados da busca ({searchResults.length} palavras)
              </h2>
            </div>
            
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {searchResults.map((word) => (
                  <WordCard key={word.id} word={word} showCategory={true} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Nenhuma palavra encontrada
                </h3>
                <p className="text-gray-500">
                  Tente buscar por outro termo ou explore nossas categorias
                </p>
              </div>
            )}
          </section>
        ) : (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Explore por Categorias
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Navegue pelas 10 categorias temáticas organizadas para facilitar seu aprendizado
              </p>
            </div>
            
            <CategoryGrid />
          </section>
        )}

        {/* Features Section */}
        <section className="mt-20 py-16 bg-white rounded-2xl shadow-lg">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Por que usar nosso dicionário?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Visual e Ilustrado</h3>
                <p className="text-gray-600">
                  Cada palavra vem com uma imagem representativa para facilitar a memorização
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Exemplos Práticos</h3>
                <p className="text-gray-600">
                  Frases de exemplo em contexto real com tradução para o português
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Prática com IA</h3>
                <p className="text-gray-600">
                  Prompts prontos para treinar vocabulário e gramática no ChatGPT
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;