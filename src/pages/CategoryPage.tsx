import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getWordsByCategory, categories } from '../data/words';
import WordCard from '../components/WordCard';
import { ArrowLeft } from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const words = getWordsByCategory(categoryId || '');
  const category = categories.find(cat => cat.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Categoria não encontrada</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Voltar ao início</span>
          </Link>
          
          <div className="text-center">
            <div className={`inline-block ${category.color} rounded-2xl px-8 py-6 mb-6`}>
              <div className="text-6xl mb-2">{category.icon}</div>
              <h1 className="text-3xl md:text-4xl font-bold">
                {category.name}
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore {words.length} palavras relacionadas a {category.name.toLowerCase()}
            </p>
          </div>
        </div>

        {/* Words Grid */}
        {words.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {words.map((word) => (
              <WordCard key={word.id} word={word} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Em breve mais palavras
            </h3>
            <p className="text-gray-500">
              Esta categoria será expandida com mais vocabulário
            </p>
          </div>
        )}

        {/* Back to categories */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Explorar outras categorias
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;