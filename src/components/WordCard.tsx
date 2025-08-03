import React from 'react';
import { Link } from 'react-router-dom';
import { Word } from '../data/words';
import { ExternalLink } from 'lucide-react';

interface WordCardProps {
  word: Word;
  showCategory?: boolean;
}

const WordCard: React.FC<WordCardProps> = ({ word, showCategory = false }) => {
  return (
    <Link to={`/word/${word.id}`} className="group">
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 overflow-hidden">
        <div className="aspect-w-16 aspect-h-9 bg-gray-100">
          <img
            src={word.imagem_url}
            alt={word.palavra_ingles}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
              {word.palavra_ingles}
            </h3>
            <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </div>
          
          <p className="text-gray-700 font-medium mb-2">
            {word.traducao_portugues}
          </p>
          
          {showCategory && (
            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
              {word.categoria}
            </span>
          )}
          
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-600 italic line-clamp-2">
              "{word.frase_exemplo_ingles}"
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WordCard;