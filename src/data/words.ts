export interface Word {
  id: number;
  palavra_ingles: string;
  traducao_portugues: string;
  categoria: string;
  imagem_url: string;
  frase_exemplo_ingles: string;
  frase_exemplo_portugues: string;
  prompt_pratica: string;
}

export const categories = [
  { id: 'alimentos', name: 'Alimentos', icon: '🍎', color: 'bg-red-100 text-red-700' },
  { id: 'corpo', name: 'Corpo Humano', icon: '👤', color: 'bg-blue-100 text-blue-700' },
  { id: 'casa', name: 'Casa e Objetos', icon: '🏠', color: 'bg-green-100 text-green-700' },
  { id: 'profissoes', name: 'Profissões', icon: '💼', color: 'bg-purple-100 text-purple-700' },
  { id: 'transporte', name: 'Transporte', icon: '🚗', color: 'bg-yellow-100 text-yellow-700' },
  { id: 'esportes', name: 'Esportes', icon: '⚽', color: 'bg-orange-100 text-orange-700' },
  { id: 'natureza', name: 'Natureza e Animais', icon: '🌳', color: 'bg-emerald-100 text-emerald-700' },
  { id: 'sentimentos', name: 'Sentimentos', icon: '😊', color: 'bg-pink-100 text-pink-700' },
  { id: 'roupas', name: 'Roupas', icon: '👕', color: 'bg-indigo-100 text-indigo-700' },
  { id: 'verbos', name: 'Verbos e Ações', icon: '🏃', color: 'bg-teal-100 text-teal-700' }
];

export const wordsDatabase: Word[] = [
  // ALIMENTOS - 50 palavras
  {
    id: 1,
    palavra_ingles: "apple",
    traducao_portugues: "maçã",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She eats an apple every morning before going to work.",
    frase_exemplo_portugues: "Ela come uma maçã todas as manhãs antes de ir trabalhar.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'apple' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 2,
    palavra_ingles: "bread",
    traducao_portugues: "pão",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "We buy fresh bread from the bakery every Sunday.",
    frase_exemplo_portugues: "Compramos pão fresco da padaria todo domingo.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'bread' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 3,
    palavra_ingles: "water",
    traducao_portugues: "água",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Drinking water regularly is essential for good health.",
    frase_exemplo_portugues: "Beber água regularmente é essencial para uma boa saúde.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'water' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 4,
    palavra_ingles: "coffee",
    traducao_portugues: "café",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "I drink coffee every morning to start my day.",
    frase_exemplo_portugues: "Eu bebo café toda manhã para começar meu dia.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'coffee' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 5,
    palavra_ingles: "milk",
    traducao_portugues: "leite",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Children need milk for strong bones and teeth.",
    frase_exemplo_portugues: "As crianças precisam de leite para ossos e dentes fortes.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'milk' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 6,
    palavra_ingles: "cheese",
    traducao_portugues: "queijo",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "This cheese goes perfectly with wine and crackers.",
    frase_exemplo_portugues: "Este queijo combina perfeitamente com vinho e biscoitos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'cheese' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 7,
    palavra_ingles: "egg",
    traducao_portugues: "ovo",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She cooks an egg for breakfast every morning.",
    frase_exemplo_portugues: "Ela cozinha um ovo no café da manhã toda manhã.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'egg' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 8,
    palavra_ingles: "meat",
    traducao_portugues: "carne",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The restaurant serves the best meat in town.",
    frase_exemplo_portugues: "O restaurante serve a melhor carne da cidade.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'meat' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 9,
    palavra_ingles: "fish",
    traducao_portugues: "peixe",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Fresh fish is healthy and delicious when cooked properly.",
    frase_exemplo_portugues: "Peixe fresco é saudável e delicioso quando cozido adequadamente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'fish' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 10,
    palavra_ingles: "chicken",
    traducao_portugues: "frango",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Grilled chicken is a healthy protein option for dinner.",
    frase_exemplo_portugues: "Frango grelhado é uma opção saudável de proteína para o jantar.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'chicken' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 11,
    palavra_ingles: "rice",
    traducao_portugues: "arroz",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Rice is a staple food in many Asian countries.",
    frase_exemplo_portugues: "Arroz é um alimento básico em muitos países asiáticos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'rice' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 12,
    palavra_ingles: "pasta",
    traducao_portugues: "macarrão",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Italian pasta with tomato sauce is my favorite dish.",
    frase_exemplo_portugues: "Macarrão italiano com molho de tomate é meu prato favorito.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'pasta' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 13,
    palavra_ingles: "potato",
    traducao_portugues: "batata",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Baked potato with butter is a simple but tasty meal.",
    frase_exemplo_portugues: "Batata assada com manteiga é uma refeição simples mas saborosa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'potato' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 14,
    palavra_ingles: "tomato",
    traducao_portugues: "tomate",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Fresh tomato adds flavor and color to any salad.",
    frase_exemplo_portugues: "Tomate fresco adiciona sabor e cor a qualquer salada.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'tomato' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 15,
    palavra_ingles: "carrot",
    traducao_portugues: "cenoura",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Carrots are rich in vitamin A and good for your eyes.",
    frase_exemplo_portugues: "Cenouras são ricas em vitamina A e boas para os olhos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'carrot' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 16,
    palavra_ingles: "onion",
    traducao_portugues: "cebola",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Chopping onions always makes me cry.",
    frase_exemplo_portugues: "Cortar cebolas sempre me faz chorar.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'onion' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 17,
    palavra_ingles: "banana",
    traducao_portugues: "banana",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "A banana is a perfect snack for quick energy.",
    frase_exemplo_portugues: "Uma banana é um lanche perfeito para energia rápida.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'banana' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 18,
    palavra_ingles: "orange",
    traducao_portugues: "laranja",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Fresh orange juice is full of vitamin C.",
    frase_exemplo_portugues: "Suco de laranja fresco é cheio de vitamina C.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'orange' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 19,
    palavra_ingles: "lemon",
    traducao_portugues: "limão",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Add lemon juice to your tea for extra flavor.",
    frase_exemplo_portugues: "Adicione suco de limão ao seu chá para sabor extra.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'lemon' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 20,
    palavra_ingles: "strawberry",
    traducao_portugues: "morango",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Strawberries and cream make a delicious dessert.",
    frase_exemplo_portugues: "Morangos com creme fazem uma sobremesa deliciosa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'strawberry' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 21,
    palavra_ingles: "grape",
    traducao_portugues: "uva",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Purple grapes are sweeter than green ones.",
    frase_exemplo_portugues: "Uvas roxas são mais doces que as verdes.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'grape' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 22,
    palavra_ingles: "pineapple",
    traducao_portugues: "abacaxi",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1071878/pexels-photo-1071878.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Pineapple on pizza is a controversial topic.",
    frase_exemplo_portugues: "Abacaxi na pizza é um tópico controverso.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'pineapple' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 23,
    palavra_ingles: "mango",
    traducao_portugues: "manga",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Ripe mango is incredibly sweet and juicy.",
    frase_exemplo_portugues: "Manga madura é incrivelmente doce e suculenta.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'mango' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 24,
    palavra_ingles: "avocado",
    traducao_portugues: "abacate",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Avocado toast has become very popular recently.",
    frase_exemplo_portugues: "Torrada de abacate se tornou muito popular recentemente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'avocado' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 25,
    palavra_ingles: "lettuce",
    traducao_portugues: "alface",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Fresh lettuce is the base of a good salad.",
    frase_exemplo_portugues: "Alface fresco é a base de uma boa salada.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'lettuce' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 26,
    palavra_ingles: "cucumber",
    traducao_portugues: "pepino",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Cucumber slices make sandwiches more refreshing.",
    frase_exemplo_portugues: "Fatias de pepino tornam sanduíches mais refrescantes.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'cucumber' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 27,
    palavra_ingles: "pepper",
    traducao_portugues: "pimentão",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Red pepper adds color and sweetness to stir-fry.",
    frase_exemplo_portugues: "Pimentão vermelho adiciona cor e doçura ao refogado.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'pepper' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 28,
    palavra_ingles: "broccoli",
    traducao_portugues: "brócolis",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1359326/pexels-photo-1359326.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Steamed broccoli is nutritious and easy to prepare.",
    frase_exemplo_portugues: "Brócolis no vapor é nutritivo e fácil de preparar.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'broccoli' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 29,
    palavra_ingles: "spinach",
    traducao_portugues: "espinafre",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Spinach is packed with iron and vitamins.",
    frase_exemplo_portugues: "Espinafre é rico em ferro e vitaminas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'spinach' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 30,
    palavra_ingles: "corn",
    traducao_portugues: "milho",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Grilled corn on the cob is a summer favorite.",
    frase_exemplo_portugues: "Milho na espiga grelhado é um favorito do verão.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'corn' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 31,
    palavra_ingles: "beans",
    traducao_portugues: "feijão",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1359326/pexels-photo-1359326.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Black beans are a great source of protein.",
    frase_exemplo_portugues: "Feijão preto é uma ótima fonte de proteína.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'beans' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 32,
    palavra_ingles: "peas",
    traducao_portugues: "ervilhas",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Green peas add sweetness to any dish.",
    frase_exemplo_portugues: "Ervilhas verdes adicionam doçura a qualquer prato.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'peas' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 33,
    palavra_ingles: "mushroom",
    traducao_portugues: "cogumelo",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Mushrooms add an earthy flavor to pasta dishes.",
    frase_exemplo_portugues: "Cogumelos adicionam um sabor terroso aos pratos de massa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'mushroom' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 34,
    palavra_ingles: "garlic",
    traducao_portugues: "alho",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Garlic makes everything taste better.",
    frase_exemplo_portugues: "Alho faz tudo ter um sabor melhor.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'garlic' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 35,
    palavra_ingles: "ginger",
    traducao_portugues: "gengibre",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Fresh ginger adds spice to Asian cooking.",
    frase_exemplo_portugues: "Gengibre fresco adiciona tempero à culinária asiática.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'ginger' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 36,
    palavra_ingles: "honey",
    traducao_portugues: "mel",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Natural honey is a healthy alternative to sugar.",
    frase_exemplo_portugues: "Mel natural é uma alternativa saudável ao açúcar.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'honey' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 37,
    palavra_ingles: "sugar",
    traducao_portugues: "açúcar",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Too much sugar is bad for your health.",
    frase_exemplo_portugues: "Muito açúcar faz mal à saúde.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'sugar' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 38,
    palavra_ingles: "salt",
    traducao_portugues: "sal",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "A pinch of salt enhances the flavor of food.",
    frase_exemplo_portugues: "Uma pitada de sal realça o sabor da comida.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'salt' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 39,
    palavra_ingles: "butter",
    traducao_portugues: "manteiga",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Fresh butter makes toast taste amazing.",
    frase_exemplo_portugues: "Manteiga fresca faz a torrada ter um sabor incrível.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'butter' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 40,
    palavra_ingles: "oil",
    traducao_portugues: "óleo",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Olive oil is healthier than other cooking oils.",
    frase_exemplo_portugues: "Azeite de oliva é mais saudável que outros óleos de cozinha.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'oil' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 41,
    palavra_ingles: "vinegar",
    traducao_portugues: "vinagre",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Balsamic vinegar adds flavor to salad dressing.",
    frase_exemplo_portugues: "Vinagre balsâmico adiciona sabor ao molho de salada.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'vinegar' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 42,
    palavra_ingles: "flour",
    traducao_portugues: "farinha",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Wheat flour is essential for baking bread.",
    frase_exemplo_portugues: "Farinha de trigo é essencial para assar pão.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'flour' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 43,
    palavra_ingles: "chocolate",
    traducao_portugues: "chocolate",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Dark chocolate is rich in antioxidants.",
    frase_exemplo_portugues: "Chocolate amargo é rico em antioxidantes.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'chocolate' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 44,
    palavra_ingles: "cake",
    traducao_portugues: "bolo",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Birthday cake makes celebrations more special.",
    frase_exemplo_portugues: "Bolo de aniversário torna as celebrações mais especiais.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'cake' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 45,
    palavra_ingles: "cookie",
    traducao_portugues: "biscoito",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Chocolate chip cookies are my favorite snack.",
    frase_exemplo_portugues: "Biscoitos com gotas de chocolate são meu lanche favorito.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'cookie' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 46,
    palavra_ingles: "ice cream",
    traducao_portugues: "sorvete",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Vanilla ice cream is perfect on a hot summer day.",
    frase_exemplo_portugues: "Sorvete de baunilha é perfeito em um dia quente de verão.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'ice cream' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 47,
    palavra_ingles: "yogurt",
    traducao_portugues: "iogurte",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Greek yogurt is high in protein and probiotics.",
    frase_exemplo_portugues: "Iogurte grego é rico em proteína e probióticos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'yogurt' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 48,
    palavra_ingles: "soup",
    traducao_portugues: "sopa",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Hot soup is comforting on a cold winter day.",
    frase_exemplo_portugues: "Sopa quente é reconfortante em um dia frio de inverno.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'soup' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 49,
    palavra_ingles: "sandwich",
    traducao_portugues: "sanduíche",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "A turkey sandwich is perfect for lunch.",
    frase_exemplo_portugues: "Um sanduíche de peru é perfeito para o almoço.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'sandwich' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 50,
    palavra_ingles: "pizza",
    traducao_portugues: "pizza",
    categoria: "alimentos",
    imagem_url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Pizza is one of the most popular foods worldwide.",
    frase_exemplo_portugues: "Pizza é uma das comidas mais populares no mundo todo.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'pizza' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },

  // CORPO HUMANO - 50 palavras
  {
    id: 51,
    palavra_ingles: "head",
    traducao_portugues: "cabeça",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She nodded her head to show agreement.",
    frase_exemplo_portugues: "Ela balançou a cabeça para mostrar concordância.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'head' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 52,
    palavra_ingles: "face",
    traducao_portugues: "rosto",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Her face lit up with joy when she saw the surprise.",
    frase_exemplo_portugues: "O rosto dela se iluminou de alegria quando viu a surpresa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'face' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 53,
    palavra_ingles: "eye",
    traducao_portugues: "olho",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Her eyes are the most beautiful shade of blue.",
    frase_exemplo_portugues: "Os olhos dela são do mais belo tom de azul.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'eye' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 54,
    palavra_ingles: "nose",
    traducao_portugues: "nariz",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The dog's nose is always cold and wet.",
    frase_exemplo_portugues: "O nariz do cachorro está sempre frio e molhado.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'nose' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 55,
    palavra_ingles: "mouth",
    traducao_portugues: "boca",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Keep your mouth closed while chewing food.",
    frase_exemplo_portugues: "Mantenha a boca fechada enquanto mastiga a comida.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'mouth' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 56,
    palavra_ingles: "ear",
    traducao_portugues: "orelha",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She whispered something in his ear.",
    frase_exemplo_portugues: "Ela sussurrou algo no ouvido dele.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'ear' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 57,
    palavra_ingles: "hair",
    traducao_portugues: "cabelo",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She brushes her hair every morning before work.",
    frase_exemplo_portugues: "Ela escova o cabelo toda manhã antes do trabalho.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'hair' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 58,
    palavra_ingles: "neck",
    traducao_portugues: "pescoço",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He wore a scarf around his neck to stay warm.",
    frase_exemplo_portugues: "Ele usou um cachecol no pescoço para se manter aquecido.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'neck' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 59,
    palavra_ingles: "shoulder",
    traducao_portugues: "ombro",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She carried the bag on her shoulder.",
    frase_exemplo_portugues: "Ela carregou a bolsa no ombro.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'shoulder' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 60,
    palavra_ingles: "arm",
    traducao_portugues: "braço",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He broke his arm while playing football.",
    frase_exemplo_portugues: "Ele quebrou o braço jogando futebol.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'arm' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 61,
    palavra_ingles: "hand",
    traducao_portugues: "mão",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He raised his hand to ask a question in class.",
    frase_exemplo_portugues: "Ele levantou a mão para fazer uma pergunta na aula.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'hand' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 62,
    palavra_ingles: "finger",
    traducao_portugues: "dedo",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She pointed with her finger to show the direction.",
    frase_exemplo_portugues: "Ela apontou com o dedo para mostrar a direção.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'finger' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 63,
    palavra_ingles: "thumb",
    traducao_portugues: "polegar",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He gave a thumbs up to show approval.",
    frase_exemplo_portugues: "Ele fez sinal de positivo com o polegar para mostrar aprovação.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'thumb' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 64,
    palavra_ingles: "chest",
    traducao_portugues: "peito",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He felt pain in his chest after running.",
    frase_exemplo_portugues: "Ele sentiu dor no peito depois de correr.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'chest' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 65,
    palavra_ingles: "back",
    traducao_portugues: "costas",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She has a tattoo on her back.",
    frase_exemplo_portugues: "Ela tem uma tatuagem nas costas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'back' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 66,
    palavra_ingles: "stomach",
    traducao_portugues: "estômago",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "My stomach hurts after eating too much.",
    frase_exemplo_portugues: "Meu estômago dói depois de comer demais.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'stomach' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 67,
    palavra_ingles: "waist",
    traducao_portugues: "cintura",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She wore a belt around her waist.",
    frase_exemplo_portugues: "Ela usou um cinto na cintura.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'waist' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 68,
    palavra_ingles: "hip",
    traducao_portugues: "quadril",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She put her hands on her hips and waited.",
    frase_exemplo_portugues: "Ela colocou as mãos no quadril e esperou.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'hip' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 69,
    palavra_ingles: "leg",
    traducao_portugues: "perna",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He injured his leg during the soccer match.",
    frase_exemplo_portugues: "Ele machucou a perna durante a partida de futebol.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'leg' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 70,
    palavra_ingles: "knee",
    traducao_portugues: "joelho",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She scraped her knee when she fell off the bike.",
    frase_exemplo_portugues: "Ela ralou o joelho quando caiu da bicicleta.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'knee' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 71,
    palavra_ingles: "foot",
    traducao_portugues: "pé",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He stepped on my foot by accident.",
    frase_exemplo_portugues: "Ele pisou no meu pé por acidente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'foot' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 72,
    palavra_ingles: "toe",
    traducao_portugues: "dedo do pé",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She painted her toes with red nail polish.",
    frase_exemplo_portugues: "Ela pintou os dedos dos pés com esmalte vermelho.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'toe' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 73,
    palavra_ingles: "ankle",
    traducao_portugues: "tornozelo",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She twisted her ankle while hiking.",
    frase_exemplo_portugues: "Ela torceu o tornozelo enquanto caminhava.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'ankle' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 74,
    palavra_ingles: "heel",
    traducao_portugues: "calcanhar",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Her heel was sore from wearing high heels.",
    frase_exemplo_portugues: "O calcanhar dela estava dolorido por usar salto alto.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'heel' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 75,
    palavra_ingles: "elbow",
    traducao_portugues: "cotovelo",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He bumped his elbow on the table.",
    frase_exemplo_portugues: "Ele bateu o cotovelo na mesa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'elbow' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 76,
    palavra_ingles: "wrist",
    traducao_portugues: "pulso",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She wore a watch on her wrist.",
    frase_exemplo_portugues: "Ela usava um relógio no pulso.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'wrist' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 77,
    palavra_ingles: "palm",
    traducao_portugues: "palma da mão",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He held the coin in the palm of his hand.",
    frase_exemplo_portugues: "Ele segurou a moeda na palma da mão.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'palm' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 78,
    palavra_ingles: "skin",
    traducao_portugues: "pele",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Sunscreen protects your skin from UV rays.",
    frase_exemplo_portugues: "Protetor solar protege sua pele dos raios UV.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'skin' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 79,
    palavra_ingles: "bone",
    traducao_portugues: "osso",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The doctor said the bone will heal in six weeks.",
    frase_exemplo_portugues: "O médico disse que o osso vai sarar em seis semanas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'bone' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 80,
    palavra_ingles: "muscle",
    traducao_portugues: "músculo",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Exercise helps build strong muscles.",
    frase_exemplo_portugues: "Exercício ajuda a construir músculos fortes.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'muscle' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 81,
    palavra_ingles: "blood",
    traducao_portugues: "sangue",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The nurse took a blood sample for testing.",
    frase_exemplo_portugues: "A enfermeira coletou uma amostra de sangue para teste.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'blood' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 82,
    palavra_ingles: "heart",
    traducao_portugues: "coração",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "His heart beats faster when he exercises.",
    frase_exemplo_portugues: "O coração dele bate mais rápido quando se exercita.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'heart' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 83,
    palavra_ingles: "lung",
    traducao_portugues: "pulmão",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Deep breathing exercises strengthen your lungs.",
    frase_exemplo_portugues: "Exercícios de respiração profunda fortalecem seus pulmões.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'lung' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 84,
    palavra_ingles: "brain",
    traducao_portugues: "cérebro",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Reading books exercises your brain.",
    frase_exemplo_portugues: "Ler livros exercita seu cérebro.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'brain' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 85,
    palavra_ingles: "liver",
    traducao_portugues: "fígado",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The liver filters toxins from the blood.",
    frase_exemplo_portugues: "O fígado filtra toxinas do sangue.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'liver' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 86,
    palavra_ingles: "kidney",
    traducao_portugues: "rim",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Drinking water helps keep your kidneys healthy.",
    frase_exemplo_portugues: "Beber água ajuda a manter seus rins saudáveis.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'kidney' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 87,
    palavra_ingles: "tooth",
    traducao_portugues: "dente",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She lost a tooth when she was seven years old.",
    frase_exemplo_portugues: "Ela perdeu um dente quando tinha sete anos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'tooth' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 88,
    palavra_ingles: "tongue",
    traducao_portugues: "língua",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She stuck out her tongue playfully.",
    frase_exemplo_portugues: "Ela mostrou a língua brincando.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'tongue' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 89,
    palavra_ingles: "lip",
    traducao_portugues: "lábio",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She applied lipstick to her lips.",
    frase_exemplo_portugues: "Ela aplicou batom nos lábios.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'lip' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 90,
    palavra_ingles: "chin",
    traducao_portugues: "queixo",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He rested his chin on his hand while thinking.",
    frase_exemplo_portugues: "Ele apoiou o queixo na mão enquanto pensava.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'chin' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 91,
    palavra_ingles: "cheek",
    traducao_portugues: "bochecha",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The baby's cheeks were rosy from the cold.",
    frase_exemplo_portugues: "As bochechas do bebê estavam rosadas do frio.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'cheek' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 92,
    palavra_ingles: "forehead",
    traducao_portugues: "testa",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She wiped the sweat from her forehead.",
    frase_exemplo_portugues: "Ela limpou o suor da testa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'forehead' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 93,
    palavra_ingles: "eyebrow",
    traducao_portugues: "sobrancelha",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She raised her eyebrow in surprise.",
    frase_exemplo_portugues: "Ela levantou a sobrancelha de surpresa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'eyebrow' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 94,
    palavra_ingles: "eyelash",
    traducao_portugues: "cílio",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Her long eyelashes made her eyes look beautiful.",
    frase_exemplo_portugues: "Seus cílios longos faziam seus olhos parecerem bonitos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'eyelash' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 95,
    palavra_ingles: "beard",
    traducao_portugues: "barba",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He grew a beard during the winter months.",
    frase_exemplo_portugues: "Ele deixou crescer a barba durante os meses de inverno.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'beard' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 96,
    palavra_ingles: "mustache",
    traducao_portugues: "bigode",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "His mustache made him look distinguished.",
    frase_exemplo_portugues: "Seu bigode o fazia parecer distinto.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'mustache' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 97,
    palavra_ingles: "wrinkle",
    traducao_portugues: "ruga",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Smile lines are the best kind of wrinkles.",
    frase_exemplo_portugues: "Rugas de sorriso são o melhor tipo de rugas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'wrinkle' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 98,
    palavra_ingles: "freckle",
    traducao_portugues: "sarda",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She has cute freckles across her nose.",
    frase_exemplo_portugues: "Ela tem sardas fofas no nariz.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'freckle' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 99,
    palavra_ingles: "dimple",
    traducao_portugues: "covinha",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Her dimples appear when she smiles.",
    frase_exemplo_portugues: "Suas covinhas aparecem quando ela sorri.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'dimple' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 100,
    palavra_ingles: "scar",
    traducao_portugues: "cicatriz",
    categoria: "corpo",
    imagem_url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The scar on his arm tells a story of adventure.",
    frase_exemplo_portugues: "A cicatriz no braço dele conta uma história de aventura.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'scar' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },

  // CASA E OBJETOS - 50 palavras
  {
    id: 101,
    palavra_ingles: "house",
    traducao_portugues: "casa",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Their house has a beautiful garden in the backyard.",
    frase_exemplo_portugues: "A casa deles tem um jardim bonito no quintal.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'house' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 102,
    palavra_ingles: "room",
    traducao_portugues: "quarto/sala",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "This room is perfect for reading and relaxing.",
    frase_exemplo_portugues: "Este quarto é perfeito para ler e relaxar.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'room' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 103,
    palavra_ingles: "door",
    traducao_portugues: "porta",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Please close the door when you leave the room.",
    frase_exemplo_portugues: "Por favor, feche a porta quando sair do quarto.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'door' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 104,
    palavra_ingles: "window",
    traducao_portugues: "janela",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She opened the window to let fresh air in.",
    frase_exemplo_portugues: "Ela abriu a janela para deixar o ar fresco entrar.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'window' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 105,
    palavra_ingles: "wall",
    traducao_portugues: "parede",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "They painted the wall a bright yellow color.",
    frase_exemplo_portugues: "Eles pintaram a parede de uma cor amarela brilhante.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'wall' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 106,
    palavra_ingles: "floor",
    traducao_portugues: "chão",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The wooden floor creaks when you walk on it.",
    frase_exemplo_portugues: "O chão de madeira range quando você caminha sobre ele.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'floor' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 107,
    palavra_ingles: "ceiling",
    traducao_portugues: "teto",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The ceiling fan helps cool down the room.",
    frase_exemplo_portugues: "O ventilador de teto ajuda a resfriar o quarto.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'ceiling' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 108,
    palavra_ingles: "roof",
    traducao_portugues: "telhado",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The red roof makes the house easy to spot.",
    frase_exemplo_portugues: "O telhado vermelho torna a casa fácil de identificar.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'roof' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 109,
    palavra_ingles: "stairs",
    traducao_portugues: "escada",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She ran up the stairs to her bedroom.",
    frase_exemplo_portugues: "Ela subiu correndo as escadas para seu quarto.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'stairs' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 110,
    palavra_ingles: "kitchen",
    traducao_portugues: "cozinha",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The kitchen is the heart of every home.",
    frase_exemplo_portugues: "A cozinha é o coração de toda casa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'kitchen' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 111,
    palavra_ingles: "bathroom",
    traducao_portugues: "banheiro",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The bathroom has a large mirror above the sink.",
    frase_exemplo_portugues: "O banheiro tem um espelho grande acima da pia.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'bathroom' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 112,
    palavra_ingles: "bedroom",
    traducao_portugues: "quarto de dormir",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Her bedroom is decorated with flowers and soft colors.",
    frase_exemplo_portugues: "O quarto dela é decorado com flores e cores suaves.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'bedroom' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 113,
    palavra_ingles: "living room",
    traducao_portugues: "sala de estar",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The family watches TV together in the living room.",
    frase_exemplo_portugues: "A família assiste TV junta na sala de estar.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'living room' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 114,
    palavra_ingles: "dining room",
    traducao_portugues: "sala de jantar",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "We eat dinner together in the dining room every night.",
    frase_exemplo_portugues: "Jantamos juntos na sala de jantar toda noite.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'dining room' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 115,
    palavra_ingles: "garage",
    traducao_portugues: "garagem",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He parks his car in the garage every night.",
    frase_exemplo_portugues: "Ele estaciona o carro na garagem toda noite.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'garage' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 116,
    palavra_ingles: "garden",
    traducao_portugues: "jardim",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She grows beautiful flowers in her garden.",
    frase_exemplo_portugues: "Ela cultiva flores bonitas no jardim.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'garden' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 117,
    palavra_ingles: "chair",
    traducao_portugues: "cadeira",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/586960/pexels-photo-586960.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Please sit down on the comfortable chair by the window.",
    frase_exemplo_portugues: "Por favor, sente-se na cadeira confortável perto da janela.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'chair' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 118,
    palavra_ingles: "table",
    traducao_portugues: "mesa",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The family gathers around the dinner table every evening.",
    frase_exemplo_portugues: "A família se reúne ao redor da mesa de jantar todas as noites.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'table' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 119,
    palavra_ingles: "bed",
    traducao_portugues: "cama",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She makes her bed every morning before breakfast.",
    frase_exemplo_portugues: "Ela arruma a cama toda manhã antes do café da manhã.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'bed' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 120,
    palavra_ingles: "sofa",
    traducao_portugues: "sofá",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The leather sofa is very comfortable for watching movies.",
    frase_exemplo_portugues: "O sofá de couro é muito confortável para assistir filmes.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'sofa' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 121,
    palavra_ingles: "desk",
    traducao_portugues: "escrivaninha",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He does his homework at the wooden desk.",
    frase_exemplo_portugues: "Ele faz a lição de casa na escrivaninha de madeira.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'desk' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 122,
    palavra_ingles: "bookshelf",
    traducao_portugues: "estante de livros",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The bookshelf is filled with novels and textbooks.",
    frase_exemplo_portugues: "A estante de livros está cheia de romances e livros didáticos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'bookshelf' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 123,
    palavra_ingles: "closet",
    traducao_portugues: "armário",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She organized all her clothes in the bedroom closet.",
    frase_exemplo_portugues: "Ela organizou todas as roupas no armário do quarto.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'closet' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 124,
    palavra_ingles: "drawer",
    traducao_portugues: "gaveta",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The keys are in the top drawer of the kitchen cabinet.",
    frase_exemplo_portugues: "As chaves estão na gaveta de cima do armário da cozinha.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'drawer' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 125,
    palavra_ingles: "mirror",
    traducao_portugues: "espelho",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She looks at herself in the mirror every morning.",
    frase_exemplo_portugues: "Ela se olha no espelho toda manhã.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'mirror' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 126,
    palavra_ingles: "lamp",
    traducao_portugues: "lâmpada/luminária",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The reading lamp provides perfect light for studying.",
    frase_exemplo_portugues: "A luminária de leitura fornece luz perfeita para estudar.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'lamp' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 127,
    palavra_ingles: "curtain",
    traducao_portugues: "cortina",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She opened the curtains to let sunlight into the room.",
    frase_exemplo_portugues: "Ela abriu as cortinas para deixar a luz do sol entrar no quarto.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'curtain' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 128,
    palavra_ingles: "carpet",
    traducao_portugues: "tapete",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The soft carpet feels good under bare feet.",
    frase_exemplo_portugues: "O tapete macio é bom de pisar com os pés descalços.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'carpet' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 129,
    palavra_ingles: "pillow",
    traducao_portugues: "travesseiro",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "A soft pillow helps you sleep better at night.",
    frase_exemplo_portugues: "Um travesseiro macio ajuda você a dormir melhor à noite.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'pillow' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 130,
    palavra_ingles: "blanket",
    traducao_portugues: "cobertor",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The warm blanket keeps me cozy on cold nights.",
    frase_exemplo_portugues: "O cobertor quente me mantém aconchegado nas noites frias.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'blanket' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 131,
    palavra_ingles: "sheet",
    traducao_portugues: "lençol",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Clean sheets make the bed feel fresh and comfortable.",
    frase_exemplo_portugues: "Lençóis limpos fazem a cama parecer fresca e confortável.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'sheet' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 132,
    palavra_ingles: "towel",
    traducao_portugues: "toalha",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She dried her hair with a soft towel after showering.",
    frase_exemplo_portugues: "Ela secou o cabelo com uma toalha macia depois do banho.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'towel' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 133,
    palavra_ingles: "soap",
    traducao_portugues: "sabão",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Wash your hands with soap for at least 20 seconds.",
    frase_exemplo_portugues: "Lave as mãos com sabão por pelo menos 20 segundos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'soap' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 134,
    palavra_ingles: "shampoo",
    traducao_portugues: "xampu",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "This shampoo makes my hair soft and shiny.",
    frase_exemplo_portugues: "Este xampu deixa meu cabelo macio e brilhante.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'shampoo' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 135,
    palavra_ingles: "toothbrush",
    traducao_portugues: "escova de dente",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Replace your toothbrush every three months.",
    frase_exemplo_portugues: "Troque sua escova de dente a cada três meses.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'toothbrush' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 136,
    palavra_ingles: "toothpaste",
    traducao_portugues: "pasta de dente",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Fluoride toothpaste helps prevent tooth decay.",
    frase_exemplo_portugues: "Pasta de dente com flúor ajuda a prevenir cáries.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'toothpaste' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 137,
    palavra_ingles: "refrigerator",
    traducao_portugues: "geladeira",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Keep the milk in the refrigerator to stay fresh.",
    frase_exemplo_portugues: "Mantenha o leite na geladeira para ficar fresco.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'refrigerator' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 138,
    palavra_ingles: "stove",
    traducao_portugues: "fogão",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She cooks dinner on the gas stove every evening.",
    frase_exemplo_portugues: "Ela cozinha o jantar no fogão a gás toda noite.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'stove' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 139,
    palavra_ingles: "oven",
    traducao_portugues: "forno",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The cake is baking in the oven for 30 minutes.",
    frase_exemplo_portugues: "O bolo está assando no forno por 30 minutos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'oven' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 140,
    palavra_ingles: "microwave",
    traducao_portugues: "micro-ondas",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Heat the food in the microwave for two minutes.",
    frase_exemplo_portugues: "Aqueça a comida no micro-ondas por dois minutos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'microwave' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 141,
    palavra_ingles: "dishwasher",
    traducao_portugues: "lava-louças",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The dishwasher saves time when cleaning dishes.",
    frase_exemplo_portugues: "A lava-louças economiza tempo ao lavar pratos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'dishwasher' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 142,
    palavra_ingles: "washing machine",
    traducao_portugues: "máquina de lavar",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The washing machine is running a full load of clothes.",
    frase_exemplo_portugues: "A máquina de lavar está rodando uma carga cheia de roupas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'washing machine' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 143,
    palavra_ingles: "dryer",
    traducao_portugues: "secadora",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Put the wet clothes in the dryer for 45 minutes.",
    frase_exemplo_portugues: "Coloque as roupas molhadas na secadora por 45 minutos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'dryer' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 144,
    palavra_ingles: "vacuum cleaner",
    traducao_portugues: "aspirador de pó",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Use the vacuum cleaner to clean the carpet weekly.",
    frase_exemplo_portugues: "Use o aspirador de pó para limpar o tapete semanalmente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'vacuum cleaner' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 145,
    palavra_ingles: "iron",
    traducao_portugues: "ferro de passar",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She uses the iron to remove wrinkles from shirts.",
    frase_exemplo_portugues: "Ela usa o ferro de passar para tirar rugas das camisas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'iron' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 146,
    palavra_ingles: "television",
    traducao_portugues: "televisão",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The family watches the news on television every evening.",
    frase_exemplo_portugues: "A família assiste o noticiário na televisão toda noite.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'television' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 147,
    palavra_ingles: "computer",
    traducao_portugues: "computador",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He works on his computer for eight hours daily.",
    frase_exemplo_portugues: "Ele trabalha no computador por oito horas diariamente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'computer' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 148,
    palavra_ingles: "phone",
    traducao_portugues: "telefone",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The phone is ringing, please answer it.",
    frase_exemplo_portugues: "O telefone está tocando, por favor atenda.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'phone' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 149,
    palavra_ingles: "clock",
    traducao_portugues: "relógio",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The clock on the wall shows it's already midnight.",
    frase_exemplo_portugues: "O relógio na parede mostra que já é meia-noite.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'clock' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 150,
    palavra_ingles: "picture",
    traducao_portugues: "quadro/foto",
    categoria: "casa",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "There's a beautiful picture of mountains on the wall.",
    frase_exemplo_portugues: "Há um quadro bonito de montanhas na parede.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'picture' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },

  // PROFISSÕES - 50 palavras
  {
    id: 151,
    palavra_ingles: "teacher",
    traducao_portugues: "professor/professora",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The teacher explained the lesson clearly to all students.",
    frase_exemplo_portugues: "O professor explicou a lição claramente para todos os alunos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'teacher' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 152,
    palavra_ingles: "doctor",
    traducao_portugues: "médico/médica",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The doctor examined the patient carefully and prescribed medicine.",
    frase_exemplo_portugues: "O médico examinou o paciente cuidadosamente e prescreveu remédio.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'doctor' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 153,
    palavra_ingles: "nurse",
    traducao_portugues: "enfermeiro/enfermeira",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The nurse takes care of patients with great compassion.",
    frase_exemplo_portugues: "A enfermeira cuida dos pacientes com grande compaixão.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'nurse' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 154,
    palavra_ingles: "lawyer",
    traducao_portugues: "advogado/advogada",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The lawyer defended his client in court yesterday.",
    frase_exemplo_portugues: "O advogado defendeu seu cliente no tribunal ontem.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'lawyer' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 155,
    palavra_ingles: "engineer",
    traducao_portugues: "engenheiro/engenheira",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The engineer designed a new bridge for the city.",
    frase_exemplo_portugues: "O engenheiro projetou uma nova ponte para a cidade.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'engineer' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 156,
    palavra_ingles: "police officer",
    traducao_portugues: "policial",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The police officer helps keep the community safe.",
    frase_exemplo_portugues: "O policial ajuda a manter a comunidade segura.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'police officer' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 157,
    palavra_ingles: "firefighter",
    traducao_portugues: "bombeiro",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The brave firefighter rescued the cat from the tree.",
    frase_exemplo_portugues: "O bombeiro corajoso resgatou o gato da árvore.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'firefighter' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 158,
    palavra_ingles: "chef",
    traducao_portugues: "chef/cozinheiro",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The chef creates delicious meals for restaurant guests.",
    frase_exemplo_portugues: "O chef cria refeições deliciosas para os clientes do restaurante.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'chef' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 159,
    palavra_ingles: "pilot",
    traducao_portugues: "piloto",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The pilot safely landed the airplane during the storm.",
    frase_exemplo_portugues: "O piloto pousou o avião com segurança durante a tempestade.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'pilot' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 160,
    palavra_ingles: "dentist",
    traducao_portugues: "dentista",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The dentist cleaned my teeth and checked for cavities.",
    frase_exemplo_portugues: "O dentista limpou meus dentes e verificou se havia cáries.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'dentist' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 161,
    palavra_ingles: "mechanic",
    traducao_portugues: "mecânico",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The mechanic fixed my car's engine in two hours.",
    frase_exemplo_portugues: "O mecânico consertou o motor do meu carro em duas horas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'mechanic' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 162,
    palavra_ingles: "electrician",
    traducao_portugues: "eletricista",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The electrician installed new lights in our kitchen.",
    frase_exemplo_portugues: "O eletricista instalou luzes novas na nossa cozinha.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'electrician' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 163,
    palavra_ingles: "plumber",
    traducao_portugues: "encanador",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The plumber repaired the leaking pipe under the sink.",
    frase_exemplo_portugues: "O encanador consertou o cano vazando embaixo da pia.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'plumber' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 164,
    palavra_ingles: "carpenter",
    traducao_portugues: "carpinteiro",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The carpenter built beautiful wooden furniture for our home.",
    frase_exemplo_portugues: "O carpinteiro construiu móveis de madeira bonitos para nossa casa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'carpenter' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 165,
    palavra_ingles: "painter",
    traducao_portugues: "pintor",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The painter finished painting the house in three days.",
    frase_exemplo_portugues: "O pintor terminou de pintar a casa em três dias.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'painter' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 166,
    palavra_ingles: "farmer",
    traducao_portugues: "fazendeiro/agricultor",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The farmer grows corn and wheat on his land.",
    frase_exemplo_portugues: "O fazendeiro cultiva milho e trigo em sua terra.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'farmer' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 167,
    palavra_ingles: "veterinarian",
    traducao_portugues: "veterinário",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The veterinarian examined our sick dog with care.",
    frase_exemplo_portugues: "O veterinário examinou nosso cachorro doente com cuidado.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'veterinarian' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 168,
    palavra_ingles: "accountant",
    traducao_portugues: "contador",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The accountant helps manage the company's finances.",
    frase_exemplo_portugues: "O contador ajuda a gerenciar as finanças da empresa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'accountant' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 169,
    palavra_ingles: "architect",
    traducao_portugues: "arquiteto",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The architect designed a modern office building downtown.",
    frase_exemplo_portugues: "O arquiteto projetou um prédio de escritórios moderno no centro.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'architect' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 170,
    palavra_ingles: "journalist",
    traducao_portugues: "jornalista",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The journalist interviewed the mayor about city plans.",
    frase_exemplo_portugues: "O jornalista entrevistou o prefeito sobre os planos da cidade.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'journalist' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 171,
    palavra_ingles: "photographer",
    traducao_portugues: "fotógrafo",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The photographer captured beautiful moments at the wedding.",
    frase_exemplo_portugues: "O fotógrafo capturou momentos bonitos no casamento.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'photographer' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 172,
    palavra_ingles: "musician",
    traducao_portugues: "músico",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The talented musician played guitar at the concert.",
    frase_exemplo_portugues: "O músico talentoso tocou guitarra no concerto.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'musician' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 173,
    palavra_ingles: "actor",
    traducao_portugues: "ator",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The actor performed brilliantly in the new movie.",
    frase_exemplo_portugues: "O ator atuou brilhantemente no filme novo.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'actor' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 174,
    palavra_ingles: "artist",
    traducao_portugues: "artista",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The artist painted a beautiful landscape of the mountains.",
    frase_exemplo_portugues: "O artista pintou uma paisagem bonita das montanhas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'artist' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 175,
    palavra_ingles: "writer",
    traducao_portugues: "escritor",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The writer published her first novel last year.",
    frase_exemplo_portugues: "A escritora publicou seu primeiro romance no ano passado.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'writer' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 176,
    palavra_ingles: "librarian",
    traducao_portugues: "bibliotecário",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The librarian helped me find books about history.",
    frase_exemplo_portugues: "O bibliotecário me ajudou a encontrar livros sobre história.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'librarian' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 177,
    palavra_ingles: "scientist",
    traducao_portugues: "cientista",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The scientist discovered a new species of butterfly.",
    frase_exemplo_portugues: "O cientista descobriu uma nova espécie de borboleta.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'scientist' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 178,
    palavra_ingles: "psychologist",
    traducao_portugues: "psicólogo",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The psychologist helps people deal with their emotions.",
    frase_exemplo_portugues: "O psicólogo ajuda as pessoas a lidar com suas emoções.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'psychologist' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 179,
    palavra_ingles: "pharmacist",
    traducao_portugues: "farmacêutico",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The pharmacist explained how to take the medication properly.",
    frase_exemplo_portugues: "O farmacêutico explicou como tomar o medicamento corretamente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'pharmacist' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 180,
    palavra_ingles: "secretary",
    traducao_portugues: "secretário/secretária",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The secretary scheduled all the meetings for next week.",
    frase_exemplo_portugues: "A secretária agendou todas as reuniões para a próxima semana.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'secretary' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 181,
    palavra_ingles: "manager",
    traducao_portugues: "gerente",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The manager leads the team and makes important decisions.",
    frase_exemplo_portugues: "O gerente lidera a equipe e toma decisões importantes.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'manager' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 182,
    palavra_ingles: "salesperson",
    traducao_portugues: "vendedor",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The friendly salesperson helped me choose the right shoes.",
    frase_exemplo_portugues: "O vendedor simpático me ajudou a escolher os sapatos certos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'salesperson' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 183,
    palavra_ingles: "cashier",
    traducao_portugues: "caixa",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The cashier scanned all the items and gave me the receipt.",
    frase_exemplo_portugues: "O caixa escaneou todos os itens e me deu o recibo.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'cashier' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 184,
    palavra_ingles: "waiter",
    traducao_portugues: "garçom",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The waiter brought our food quickly and with a smile.",
    frase_exemplo_portugues: "O garçom trouxe nossa comida rapidamente e com um sorriso.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'waiter' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 185,
    palavra_ingles: "barber",
    traducao_portugues: "barbeiro",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The barber gave me a perfect haircut and shave.",
    frase_exemplo_portugues: "O barbeiro me deu um corte de cabelo e barba perfeitos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'barber' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 186,
    palavra_ingles: "hairdresser",
    traducao_portugues: "cabeleireiro",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The hairdresser styled my hair beautifully for the party.",
    frase_exemplo_portugues: "O cabeleireiro penteou meu cabelo lindamente para a festa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'hairdresser' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 187,
    palavra_ingles: "taxi driver",
    traducao_portugues: "taxista",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The taxi driver knows all the shortcuts in the city.",
    frase_exemplo_portugues: "O taxista conhece todos os atalhos da cidade.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'taxi driver' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 188,
    palavra_ingles: "bus driver",
    traducao_portugues: "motorista de ônibus",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The bus driver safely transports passengers every day.",
    frase_exemplo_portugues: "O motorista de ônibus transporta passageiros com segurança todos os dias.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'bus driver' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 189,
    palavra_ingles: "delivery person",
    traducao_portugues: "entregador",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The delivery person brought my online order to the door.",
    frase_exemplo_portugues: "O entregador trouxe meu pedido online até a porta.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'delivery person' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 190,
    palavra_ingles: "security guard",
    traducao_portugues: "segurança",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The security guard watches the building all night long.",
    frase_exemplo_portugues: "O segurança vigia o prédio a noite toda.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'security guard' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 191,
    palavra_ingles: "cleaner",
    traducao_portugues: "faxineiro",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The cleaner keeps the office spotless and organized.",
    frase_exemplo_portugues: "O faxineiro mantém o escritório impecável e organizado.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'cleaner' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 192,
    palavra_ingles: "gardener",
    traducao_portugues: "jardineiro",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The gardener planted beautiful flowers in the park.",
    frase_exemplo_portugues: "O jardineiro plantou flores bonitas no parque.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'gardener' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 193,
    palavra_ingles: "construction worker",
    traducao_portugues: "operário da construção",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The construction worker builds houses and office buildings.",
    frase_exemplo_portugues: "O operário da construção constrói casas e prédios de escritórios.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'construction worker' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 194,
    palavra_ingles: "programmer",
    traducao_portugues: "programador",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The programmer creates software applications for smartphones.",
    frase_exemplo_portugues: "O programador cria aplicativos de software para smartphones.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'programmer' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 195,
    palavra_ingles: "translator",
    traducao_portugues: "tradutor",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The translator converts documents from English to Spanish.",
    frase_exemplo_portugues: "O tradutor converte documentos do inglês para o espanhol.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'translator' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 196,
    palavra_ingles: "consultant",
    traducao_portugues: "consultor",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The business consultant helps companies improve their operations.",
    frase_exemplo_portugues: "O consultor empresarial ajuda empresas a melhorar suas operações.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'consultant' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 197,
    palavra_ingles: "real estate agent",
    traducao_portugues: "corretor de imóveis",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The real estate agent showed us five houses yesterday.",
    frase_exemplo_portugues: "O corretor de imóveis nos mostrou cinco casas ontem.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'real estate agent' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 198,
    palavra_ingles: "banker",
    traducao_portugues: "banqueiro",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The banker approved our loan application for the house.",
    frase_exemplo_portugues: "O banqueiro aprovou nossa solicitação de empréstimo para a casa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'banker' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 199,
    palavra_ingles: "insurance agent",
    traducao_portugues: "corretor de seguros",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The insurance agent explained all the policy benefits clearly.",
    frase_exemplo_portugues: "O corretor de seguros explicou todos os benefícios da apólice claramente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'insurance agent' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 200,
    palavra_ingles: "social worker",
    traducao_portugues: "assistente social",
    categoria: "profissoes",
    imagem_url: "https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The social worker helps families in difficult situations.",
    frase_exemplo_portugues: "O assistente social ajuda famílias em situações difíceis.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'social worker' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },

  // TRANSPORTE - 50 palavras
  {
    id: 201,
    palavra_ingles: "car",
    traducao_portugues: "carro",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He drives his car to work every morning at 8 AM.",
    frase_exemplo_portugues: "Ele dirige seu carro para o trabalho toda manhã às 8h.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'car' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 202,
    palavra_ingles: "bus",
    traducao_portugues: "ônibus",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "We take the bus to school because it's more economical.",
    frase_exemplo_portugues: "Pegamos o ônibus para a escola porque é mais econômico.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'bus' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 203,
    palavra_ingles: "train",
    traducao_portugues: "trem",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The train arrives at the station every hour.",
    frase_exemplo_portugues: "O trem chega na estação a cada hora.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'train' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 204,
    palavra_ingles: "airplane",
    traducao_portugues: "avião",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The airplane flew over the clouds during the journey.",
    frase_exemplo_portugues: "O avião voou sobre as nuvens durante a viagem.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'airplane' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 205,
    palavra_ingles: "bicycle",
    traducao_portugues: "bicicleta",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She rides her bicycle to work to stay healthy.",
    frase_exemplo_portugues: "Ela vai de bicicleta para o trabalho para se manter saudável.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'bicycle' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 206,
    palavra_ingles: "motorcycle",
    traducao_portugues: "motocicleta",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He bought a new motorcycle for weekend trips.",
    frase_exemplo_portugues: "Ele comprou uma motocicleta nova para viagens de fim de semana.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'motorcycle' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 207,
    palavra_ingles: "taxi",
    traducao_portugues: "táxi",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "We called a taxi to get to the airport on time.",
    frase_exemplo_portugues: "Chamamos um táxi para chegar ao aeroporto na hora.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'taxi' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 208,
    palavra_ingles: "subway",
    traducao_portugues: "metrô",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The subway is the fastest way to travel in the city.",
    frase_exemplo_portugues: "O metrô é a maneira mais rápida de viajar na cidade.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'subway' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 209,
    palavra_ingles: "boat",
    traducao_portugues: "barco",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The fishing boat returned to harbor at sunset.",
    frase_exemplo_portugues: "O barco de pesca retornou ao porto no pôr do sol.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'boat' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 210,
    palavra_ingles: "ship",
    traducao_portugues: "navio",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The cruise ship sailed across the Atlantic Ocean.",
    frase_exemplo_portugues: "O navio de cruzeiro navegou pelo Oceano Atlântico.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'ship' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 211,
    palavra_ingles: "truck",
    traducao_portugues: "caminhão",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The delivery truck brought furniture to our new house.",
    frase_exemplo_portugues: "O caminhão de entrega trouxe móveis para nossa casa nova.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'truck' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 212,
    palavra_ingles: "van",
    traducao_portugues: "van",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The school van picks up children every morning.",
    frase_exemplo_portugues: "A van escolar pega as crianças toda manhã.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'van' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 213,
    palavra_ingles: "helicopter",
    traducao_portugues: "helicóptero",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The rescue helicopter saved people from the flood.",
    frase_exemplo_portugues: "O helicóptero de resgate salvou pessoas da enchente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'helicopter' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 214,
    palavra_ingles: "scooter",
    traducao_portugues: "patinete",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Children love riding their scooters in the park.",
    frase_exemplo_portugues: "As crianças adoram andar de patinete no parque.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'scooter' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 215,
    palavra_ingles: "skateboard",
    traducao_portugues: "skate",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He learned to ride a skateboard when he was ten.",
    frase_exemplo_portugues: "Ele aprendeu a andar de skate quando tinha dez anos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'skateboard' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 216,
    palavra_ingles: "roller skates",
    traducao_portugues: "patins",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She wore roller skates to glide around the rink.",
    frase_exemplo_portugues: "Ela usou patins para deslizar pela pista.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'roller skates' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 217,
    palavra_ingles: "tram",
    traducao_portugues: "bonde",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The old tram still runs through the historic district.",
    frase_exemplo_portugues: "O bonde antigo ainda passa pelo distrito histórico.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'tram' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 218,
    palavra_ingles: "cable car",
    traducao_portugues: "teleférico",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The cable car takes tourists up the mountain safely.",
    frase_exemplo_portugues: "O teleférico leva turistas montanha acima com segurança.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'cable car' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 219,
    palavra_ingles: "ferry",
    traducao_portugues: "balsa",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The ferry crosses the river every thirty minutes.",
    frase_exemplo_portugues: "A balsa atravessa o rio a cada trinta minutos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'ferry' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 220,
    palavra_ingles: "ambulance",
    traducao_portugues: "ambulância",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The ambulance rushed the patient to the hospital.",
    frase_exemplo_portugues: "A ambulância levou o paciente rapidamente ao hospital.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'ambulance' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 221,
    palavra_ingles: "fire truck",
    traducao_portugues: "caminhão de bombeiros",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The fire truck arrived quickly to put out the fire.",
    frase_exemplo_portugues: "O caminhão de bombeiros chegou rapidamente para apagar o fogo.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'fire truck' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 222,
    palavra_ingles: "police car",
    traducao_portugues: "viatura policial",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The police car patrolled the neighborhood all night.",
    frase_exemplo_portugues: "A viatura policial patrulhou o bairro a noite toda.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'police car' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 223,
    palavra_ingles: "garbage truck",
    traducao_portugues: "caminhão de lixo",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The garbage truck comes to our street every Tuesday.",
    frase_exemplo_portugues: "O caminhão de lixo vem à nossa rua toda terça-feira.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'garbage truck' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 224,
    palavra_ingles: "tow truck",
    traducao_portugues: "guincho",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The tow truck helped when our car broke down.",
    frase_exemplo_portugues: "O guincho ajudou quando nosso carro quebrou.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'tow truck' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 225,
    palavra_ingles: "limousine",
    traducao_portugues: "limusine",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "They rented a limousine for their wedding day.",
    frase_exemplo_portugues: "Eles alugaram uma limusine para o dia do casamento.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'limousine' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 226,
    palavra_ingles: "convertible",
    traducao_portugues: "conversível",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She drove the convertible with the top down on sunny days.",
    frase_exemplo_portugues: "Ela dirigiu o conversível com a capota abaixada em dias ensolarados.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'convertible' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 227,
    palavra_ingles: "SUV",
    traducao_portugues: "SUV",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The family bought an SUV for their camping trips.",
    frase_exemplo_portugues: "A família comprou um SUV para suas viagens de camping.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'SUV' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 228,
    palavra_ingles: "pickup truck",
    traducao_portugues: "caminhonete",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The farmer uses his pickup truck to transport hay.",
    frase_exemplo_portugues: "O fazendeiro usa sua caminhonete para transportar feno.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'pickup truck' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 229,
    palavra_ingles: "minivan",
    traducao_portugues: "minivan",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The minivan has enough space for the whole family.",
    frase_exemplo_portugues: "A minivan tem espaço suficiente para toda a família.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'minivan' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 230,
    palavra_ingles: "sports car",
    traducao_portugues: "carro esportivo",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "His red sports car can reach very high speeds.",
    frase_exemplo_portugues: "Seu carro esportivo vermelho pode atingir velocidades muito altas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'sports car' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 231,
    palavra_ingles: "electric car",
    traducao_portugues: "carro elétrico",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Electric cars are better for the environment.",
    frase_exemplo_portugues: "Carros elétricos são melhores para o meio ambiente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'electric car' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 232,
    palavra_ingles: "hybrid car",
    traducao_portugues: "carro híbrido",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The hybrid car uses both gasoline and electricity.",
    frase_exemplo_portugues: "O carro híbrido usa tanto gasolina quanto eletricidade.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'hybrid car' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 233,
    palavra_ingles: "jet",
    traducao_portugues: "jato",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The private jet flew directly to the destination.",
    frase_exemplo_portugues: "O jato particular voou diretamente para o destino.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'jet' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 234,
    palavra_ingles: "glider",
    traducao_portugues: "planador",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The glider soared silently through the sky.",
    frase_exemplo_portugues: "O planador voou silenciosamente pelo céu.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'glider' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 235,
    palavra_ingles: "hot air balloon",
    traducao_portugues: "balão de ar quente",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The hot air balloon floated peacefully over the valley.",
    frase_exemplo_portugues: "O balão de ar quente flutuou pacificamente sobre o vale.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'hot air balloon' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 236,
    palavra_ingles: "yacht",
    traducao_portugues: "iate",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The luxury yacht sailed around the Mediterranean Sea.",
    frase_exemplo_portugues: "O iate de luxo navegou pelo Mar Mediterrâneo.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'yacht' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 237,
    palavra_ingles: "canoe",
    traducao_portugues: "canoa",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "They paddled the canoe down the peaceful river.",
    frase_exemplo_portugues: "Eles remaram a canoa rio abaixo pacificamente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'canoe' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 238,
    palavra_ingles: "kayak",
    traducao_portugues: "caiaque",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She navigated the rapids in her bright yellow kayak.",
    frase_exemplo_portugues: "Ela navegou pelas corredeiras em seu caiaque amarelo brilhante.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'kayak' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 239,
    palavra_ingles: "sailboat",
    traducao_portugues: "veleiro",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The white sailboat glided gracefully across the bay.",
    frase_exemplo_portugues: "O veleiro branco deslizou graciosamente pela baía.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'sailboat' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 240,
    palavra_ingles: "speedboat",
    traducao_portugues: "lancha",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The speedboat raced across the lake at full speed.",
    frase_exemplo_portugues: "A lancha correu pelo lago em velocidade máxima.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'speedboat' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 241,
    palavra_ingles: "jet ski",
    traducao_portugues: "jet ski",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He rented a jet ski for an exciting day on the water.",
    frase_exemplo_portugues: "Ele alugou um jet ski para um dia emocionante na água.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'jet ski' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 242,
    palavra_ingles: "submarine",
    traducao_portugues: "submarino",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The submarine explored the deep ocean floor.",
    frase_exemplo_portugues: "O submarino explorou o fundo profundo do oceano.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'submarine' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 243,
    palavra_ingles: "rocket",
    traducao_portugues: "foguete",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The rocket launched successfully into outer space.",
    frase_exemplo_portugues: "O foguete foi lançado com sucesso para o espaço sideral.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'rocket' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 244,
    palavra_ingles: "spaceship",
    traducao_portugues: "nave espacial",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The spaceship carried astronauts to the space station.",
    frase_exemplo_portugues: "A nave espacial levou astronautas para a estação espacial.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'spaceship' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 245,
    palavra_ingles: "segway",
    traducao_portugues: "segway",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Tourists use segways to explore the city center.",
    frase_exemplo_portugues: "Turistas usam segways para explorar o centro da cidade.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'segway' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 246,
    palavra_ingles: "hoverboard",
    traducao_portugues: "hoverboard",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The teenager rides his hoverboard to school every day.",
    frase_exemplo_portugues: "O adolescente vai de hoverboard para a escola todos os dias.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'hoverboard' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 247,
    palavra_ingles: "rickshaw",
    traducao_portugues: "riquixá",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The rickshaw driver pedaled through the busy streets.",
    frase_exemplo_portugues: "O motorista de riquixá pedalou pelas ruas movimentadas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'rickshaw' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 248,
    palavra_ingles: "trolley",
    traducao_portugues: "bonde elétrico",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The vintage trolley takes tourists around the historic city.",
    frase_exemplo_portugues: "O bonde elétrico vintage leva turistas pela cidade histórica.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'trolley' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 249,
    palavra_ingles: "monorail",
    traducao_portugues: "monotrilho",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The monorail connects the airport to downtown efficiently.",
    frase_exemplo_portugues: "O monotrilho conecta o aeroporto ao centro da cidade eficientemente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'monorail' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 250,
    palavra_ingles: "escalator",
    traducao_portugues: "escada rolante",
    categoria: "transporte",
    imagem_url: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Take the escalator to reach the second floor quickly.",
    frase_exemplo_portugues: "Pegue a escada rolante para chegar ao segundo andar rapidamente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'escalator' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },

  // ESPORTES - 50 palavras
  {
    id: 251,
    palavra_ingles: "football",
    traducao_portugues: "futebol",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The children play football in the park every weekend.",
    frase_exemplo_portugues: "As crianças jogam futebol no parque todo fim de semana.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'football' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 252,
    palavra_ingles: "basketball",
    traducao_portugues: "basquete",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He shoots basketball hoops in his backyard daily.",
    frase_exemplo_portugues: "Ele arremessa cestas de basquete no quintal diariamente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'basketball' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 253,
    palavra_ingles: "tennis",
    traducao_portugues: "tênis",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She plays tennis at the local club twice a week.",
    frase_exemplo_portugues: "Ela joga tênis no clube local duas vezes por semana.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'tennis' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 254,
    palavra_ingles: "volleyball",
    traducao_portugues: "vôlei",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The beach volleyball tournament attracts many players.",
    frase_exemplo_portugues: "O torneio de vôlei de praia atrai muitos jogadores.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'volleyball' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 255,
    palavra_ingles: "baseball",
    traducao_portugues: "beisebol",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Baseball is considered America's favorite pastime sport.",
    frase_exemplo_portugues: "Beisebol é considerado o esporte favorito dos americanos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'baseball' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 256,
    palavra_ingles: "swimming",
    traducao_portugues: "natação",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Swimming is an excellent exercise for the whole body.",
    frase_exemplo_portugues: "Natação é um excelente exercício para todo o corpo.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'swimming' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 257,
    palavra_ingles: "running",
    traducao_portugues: "corrida",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Running in the morning helps me start the day energized.",
    frase_exemplo_portugues: "Correr de manhã me ajuda a começar o dia com energia.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'running' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 258,
    palavra_ingles: "cycling",
    traducao_portugues: "ciclismo",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Cycling through the countryside is peaceful and healthy.",
    frase_exemplo_portugues: "Pedalar pelo campo é tranquilo e saudável.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'cycling' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 259,
    palavra_ingles: "golf",
    traducao_portugues: "golfe",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He plays golf every Saturday morning with friends.",
    frase_exemplo_portugues: "Ele joga golfe todo sábado de manhã com amigos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'golf' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 260,
    palavra_ingles: "boxing",
    traducao_portugues: "boxe",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Boxing training improves strength and coordination significantly.",
    frase_exemplo_portugues: "Treino de boxe melhora força e coordenação significativamente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'boxing' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 261,
    palavra_ingles: "wrestling",
    traducao_portugues: "luta livre",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Wrestling requires both physical strength and mental strategy.",
    frase_exemplo_portugues: "Luta livre requer tanto força física quanto estratégia mental.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'wrestling' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 262,
    palavra_ingles: "martial arts",
    traducao_portugues: "artes marciais",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Martial arts teach discipline and self-defense techniques.",
    frase_exemplo_portugues: "Artes marciais ensinam disciplina e técnicas de autodefesa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'martial arts' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 263,
    palavra_ingles: "gymnastics",
    traducao_portugues: "ginástica",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Gymnastics develops flexibility, strength, and grace beautifully.",
    frase_exemplo_portugues: "Ginástica desenvolve flexibilidade, força e graça lindamente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'gymnastics' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 264,
    palavra_ingles: "track and field",
    traducao_portugues: "atletismo",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Track and field events include running, jumping, and throwing.",
    frase_exemplo_portugues: "Eventos de atletismo incluem corrida, salto e arremesso.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'track and field' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 265,
    palavra_ingles: "weightlifting",
    traducao_portugues: "levantamento de peso",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Weightlifting builds muscle mass and increases overall strength.",
    frase_exemplo_portugues: "Levantamento de peso constrói massa muscular e aumenta força geral.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'weightlifting' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 266,
    palavra_ingles: "yoga",
    traducao_portugues: "yoga",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Yoga combines physical poses with breathing and meditation.",
    frase_exemplo_portugues: "Yoga combina poses físicas com respiração e meditação.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'yoga' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 267,
    palavra_ingles: "pilates",
    traducao_portugues: "pilates",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Pilates focuses on core strength and body alignment.",
    frase_exemplo_portugues: "Pilates foca na força do core e alinhamento corporal.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'pilates' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 268,
    palavra_ingles: "aerobics",
    traducao_portugues: "aeróbica",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Aerobics classes are fun and great for cardiovascular health.",
    frase_exemplo_portugues: "Aulas de aeróbica são divertidas e ótimas para saúde cardiovascular.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'aerobics' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 269,
    palavra_ingles: "dancing",
    traducao_portugues: "dança",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Dancing is both artistic expression and physical exercise.",
    frase_exemplo_portugues: "Dança é tanto expressão artística quanto exercício físico.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'dancing' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 270,
    palavra_ingles: "skating",
    traducao_portugues: "patinação",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Ice skating requires balance and graceful movements.",
    frase_exemplo_portugues: "Patinação no gelo requer equilíbrio e movimentos graciosos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'skating' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 271,
    palavra_ingles: "skiing",
    traducao_portugues: "esqui",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Skiing down snowy mountains is thrilling and exciting.",
    frase_exemplo_portugues: "Esquiar montanhas nevadas é emocionante e excitante.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'skiing' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 272,
    palavra_ingles: "snowboarding",
    traducao_portugues: "snowboard",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Snowboarding combines surfing techniques with snow sports.",
    frase_exemplo_portugues: "Snowboard combina técnicas de surf com esportes na neve.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'snowboarding' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 273,
    palavra_ingles: "surfing",
    traducao_portugues: "surf",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Surfing requires balance and understanding of ocean waves.",
    frase_exemplo_portugues: "Surf requer equilíbrio e entendimento das ondas do oceano.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'surfing' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 274,
    palavra_ingles: "sailing",
    traducao_portugues: "vela",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Sailing teaches you to work with wind and water.",
    frase_exemplo_portugues: "Vela ensina você a trabalhar com vento e água.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'sailing' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 275,
    palavra_ingles: "rowing",
    traducao_portugues: "remo",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Rowing is excellent exercise for arms and back muscles.",
    frase_exemplo_portugues: "Remo é excelente exercício para músculos dos braços e costas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'rowing' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 276,
    palavra_ingles: "kayaking",
    traducao_portugues: "canoagem",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Kayaking through calm rivers is peaceful and relaxing.",
    frase_exemplo_portugues: "Canoagem por rios calmos é pacífica e relaxante.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'kayaking' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 277,
    palavra_ingles: "fishing",
    traducao_portugues: "pesca",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Fishing requires patience and knowledge of fish behavior.",
    frase_exemplo_portugues: "Pesca requer paciência e conhecimento do comportamento dos peixes.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'fishing' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 278,
    palavra_ingles: "hunting",
    traducao_portugues: "caça",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Hunting requires skill, patience, and respect for nature.",
    frase_exemplo_portugues: "Caça requer habilidade, paciência e respeito pela natureza.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'hunting' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 279,
    palavra_ingles: "hiking",
    traducao_portugues: "caminhada",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Hiking in mountains provides exercise and beautiful views.",
    frase_exemplo_portugues: "Caminhada nas montanhas proporciona exercício e vistas bonitas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'hiking' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 280,
    palavra_ingles: "climbing",
    traducao_portugues: "escalada",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Rock climbing challenges both physical and mental strength.",
    frase_exemplo_portugues: "Escalada em rocha desafia tanto força física quanto mental.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'climbing' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 281,
    palavra_ingles: "archery",
    traducao_portugues: "tiro com arco",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Archery requires focus, precision, and steady hands.",
    frase_exemplo_portugues: "Tiro com arco requer foco, precisão e mãos firmes.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'archery' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 282,
    palavra_ingles: "shooting",
    traducao_portugues: "tiro esportivo",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Olympic shooting sports require incredible accuracy and control.",
    frase_exemplo_portugues: "Esportes de tiro olímpicos requerem precisão e controle incríveis.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'shooting' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 283,
    palavra_ingles: "fencing",
    traducao_portugues: "esgrima",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Fencing combines speed, strategy, and precise sword techniques.",
    frase_exemplo_portugues: "Esgrima combina velocidade, estratégia e técnicas precisas de espada.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'fencing' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 284,
    palavra_ingles: "equestrian",
    traducao_portugues: "equitação",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Equestrian sports showcase the bond between horse and rider.",
    frase_exemplo_portugues: "Esportes equestres mostram a ligação entre cavalo e cavaleiro.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'equestrian' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 285,
    palavra_ingles: "motorsport",
    traducao_portugues: "automobilismo",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Motorsport racing requires skill, speed, and precise timing.",
    frase_exemplo_portugues: "Corridas de automobilismo requerem habilidade, velocidade e timing preciso.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'motorsport' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 286,
    palavra_ingles: "badminton",
    traducao_portugues: "badminton",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Badminton is played with rackets and a lightweight shuttlecock.",
    frase_exemplo_portugues: "Badminton é jogado com raquetes e uma peteca leve.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'badminton' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 287,
    palavra_ingles: "table tennis",
    traducao_portugues: "tênis de mesa",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Table tennis requires quick reflexes and precise ball control.",
    frase_exemplo_portugues: "Tênis de mesa requer reflexos rápidos e controle preciso da bola.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'table tennis' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 288,
    palavra_ingles: "squash",
    traducao_portugues: "squash",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Squash is played in an enclosed court with walls.",
    frase_exemplo_portugues: "Squash é jogado em uma quadra fechada com paredes.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'squash' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 289,
    palavra_ingles: "racquetball",
    traducao_portugues: "racquetball",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Racquetball combines elements of tennis and squash sports.",
    frase_exemplo_portugues: "Racquetball combina elementos dos esportes tênis e squash.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'racquetball' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 290,
    palavra_ingles: "handball",
    traducao_portugues: "handebol",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Handball is a fast-paced team sport with goals.",
    frase_exemplo_portugues: "Handebol é um esporte de equipe acelerado com gols.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'handball' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 291,
    palavra_ingles: "water polo",
    traducao_portugues: "polo aquático",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Water polo combines swimming skills with ball handling.",
    frase_exemplo_portugues: "Polo aquático combina habilidades de natação com manuseio de bola.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'water polo' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 292,
    palavra_ingles: "rugby",
    traducao_portugues: "rugby",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Rugby is a physical contact sport with oval ball.",
    frase_exemplo_portugues: "Rugby é um esporte de contato físico com bola oval.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'rugby' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 293,
    palavra_ingles: "cricket",
    traducao_portugues: "críquete",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Cricket is popular in England and former British colonies.",
    frase_exemplo_portugues: "Críquete é popular na Inglaterra e ex-colônias britânicas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'cricket' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 294,
    palavra_ingles: "field hockey",
    traducao_portugues: "hóquei na grama",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Field hockey is played with sticks and a small ball.",
    frase_exemplo_portugues: "Hóquei na grama é jogado com tacos e uma bola pequena.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'field hockey' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 295,
    palavra_ingles: "ice hockey",
    traducao_portugues: "hóquei no gelo",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Ice hockey is fast-paced and played on frozen rinks.",
    frase_exemplo_portugues: "Hóquei no gelo é acelerado e jogado em pistas congeladas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'ice hockey' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 296,
    palavra_ingles: "lacrosse",
    traducao_portugues: "lacrosse",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Lacrosse uses sticks with nets to catch and throw balls.",
    frase_exemplo_portugues: "Lacrosse usa tacos com redes para pegar e arremessar bolas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'lacrosse' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 297,
    palavra_ingles: "bowling",
    traducao_portugues: "boliche",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Bowling involves rolling balls to knock down pins.",
    frase_exemplo_portugues: "Boliche envolve rolar bolas para derrubar pinos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'bowling' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 298,
    palavra_ingles: "billiards",
    traducao_portugues: "bilhar",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Billiards requires precision and understanding of ball physics.",
    frase_exemplo_portugues: "Bilhar requer precisão e entendimento da física das bolas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'billiards' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 299,
    palavra_ingles: "darts",
    traducao_portugues: "dardos",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Darts is a precision sport played with small arrows.",
    frase_exemplo_portugues: "Dardos é um esporte de precisão jogado com pequenas setas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'darts' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 300,
    palavra_ingles: "chess",
    traducao_portugues: "xadrez",
    categoria: "esportes",
    imagem_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Chess is a strategic board game requiring mental skill.",
    frase_exemplo_portugues: "Xadrez é um jogo de tabuleiro estratégico que requer habilidade mental.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'chess' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },

  // NATUREZA E ANIMAIS - 50 palavras
  {
    id: 301,
    palavra_ingles: "dog",
    traducao_portugues: "cachorro",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The friendly dog waits for its owner at the park entrance.",
    frase_exemplo_portugues: "O cachorro amigável espera por seu dono na entrada do parque.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'dog' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 302,
    palavra_ingles: "cat",
    traducao_portugues: "gato",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The cat sleeps peacefully in the warm sunlight.",
    frase_exemplo_portugues: "O gato dorme pacificamente na luz quente do sol.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'cat' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 303,
    palavra_ingles: "bird",
    traducao_portugues: "pássaro",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The colorful bird sings beautifully in the morning.",
    frase_exemplo_portugues: "O pássaro colorido canta lindamente de manhã.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'bird' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 304,
    palavra_ingles: "fish",
    traducao_portugues: "peixe",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The tropical fish swim gracefully in the clear water.",
    frase_exemplo_portugues: "Os peixes tropicais nadam graciosamente na água clara.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'fish' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 305,
    palavra_ingles: "tree",
    traducao_portugues: "árvore",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The old tree provides shade during hot summer days.",
    frase_exemplo_portugues: "A árvore velha oferece sombra durante os dias quentes de verão.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'tree' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 306,
    palavra_ingles: "flower",
    traducao_portugues: "flor",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The beautiful flower blooms in spring with bright colors.",
    frase_exemplo_portugues: "A flor bonita floresce na primavera com cores brilhantes.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'flower' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 307,
    palavra_ingles: "grass",
    traducao_portugues: "grama",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The green grass feels soft under bare feet.",
    frase_exemplo_portugues: "A grama verde é macia sob os pés descalços.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'grass' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 308,
    palavra_ingles: "leaf",
    traducao_portugues: "folha",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The autumn leaf falls gently from the tree branch.",
    frase_exemplo_portugues: "A folha de outono cai suavemente do galho da árvore.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'leaf' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 309,
    palavra_ingles: "branch",
    traducao_portugues: "galho",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The bird built its nest on a strong tree branch.",
    frase_exemplo_portugues: "O pássaro construiu seu ninho em um galho forte da árvore.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'branch' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 310,
    palavra_ingles: "root",
    traducao_portugues: "raiz",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The tree's roots grow deep into the rich soil.",
    frase_exemplo_portugues: "As raízes da árvore crescem profundamente no solo rico.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'root' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 311,
    palavra_ingles: "seed",
    traducao_portugues: "semente",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Plant the seed in fertile soil and water regularly.",
    frase_exemplo_portugues: "Plante a semente em solo fértil e regue regularmente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'seed' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 312,
    palavra_ingles: "forest",
    traducao_portugues: "floresta",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The dense forest is home to many wild animals.",
    frase_exemplo_portugues: "A floresta densa é lar de muitos animais selvagens.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'forest' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 313,
    palavra_ingles: "mountain",
    traducao_portugues: "montanha",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The snow-capped mountain looks majestic against the blue sky.",
    frase_exemplo_portugues: "A montanha coberta de neve parece majestosa contra o céu azul.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'mountain' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 314,
    palavra_ingles: "river",
    traducao_portugues: "rio",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The crystal clear river flows gently through the valley.",
    frase_exemplo_portugues: "O rio cristalino flui suavemente pelo vale.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'river' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 315,
    palavra_ingles: "lake",
    traducao_portugues: "lago",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The peaceful lake reflects the surrounding mountains perfectly.",
    frase_exemplo_portugues: "O lago pacífico reflete as montanhas ao redor perfeitamente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'lake' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 316,
    palavra_ingles: "ocean",
    traducao_portugues: "oceano",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The vast ocean stretches endlessly to the horizon.",
    frase_exemplo_portugues: "O oceano vasto se estende infinitamente até o horizonte.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'ocean' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 317,
    palavra_ingles: "beach",
    traducao_portugues: "praia",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The sandy beach is perfect for relaxing and sunbathing.",
    frase_exemplo_portugues: "A praia arenosa é perfeita para relaxar e tomar sol.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'beach' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 318,
    palavra_ingles: "desert",
    traducao_portugues: "deserto",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The hot desert has very little water or vegetation.",
    frase_exemplo_portugues: "O deserto quente tem muito pouca água ou vegetação.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'desert' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 319,
    palavra_ingles: "island",
    traducao_portugues: "ilha",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The tropical island is surrounded by turquoise water.",
    frase_exemplo_portugues: "A ilha tropical é cercada por água turquesa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'island' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 320,
    palavra_ingles: "valley",
    traducao_portugues: "vale",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The green valley is nestled between two tall mountains.",
    frase_exemplo_portugues: "O vale verde está aninhado entre duas montanhas altas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'valley' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 321,
    palavra_ingles: "hill",
    traducao_portugues: "colina",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Children love to roll down the grassy hill.",
    frase_exemplo_portugues: "As crianças adoram rolar colina abaixo na grama.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'hill' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 322,
    palavra_ingles: "cave",
    traducao_portugues: "caverna",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The dark cave is home to many bats.",
    frase_exemplo_portugues: "A caverna escura é lar de muitos morcegos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'cave' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 323,
    palavra_ingles: "rock",
    traducao_portugues: "rocha",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The large rock has been shaped by wind and rain.",
    frase_exemplo_portugues: "A rocha grande foi moldada pelo vento e chuva.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'rock' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 324,
    palavra_ingles: "stone",
    traducao_portugues: "pedra",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She skipped the smooth stone across the water surface.",
    frase_exemplo_portugues: "Ela fez a pedra lisa quicar na superfície da água.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'stone' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 325,
    palavra_ingles: "sand",
    traducao_portugues: "areia",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The warm sand feels pleasant between your toes.",
    frase_exemplo_portugues: "A areia quente é agradável entre os dedos dos pés.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'sand' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 326,
    palavra_ingles: "soil",
    traducao_portugues: "solo",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Rich soil is essential for growing healthy plants.",
    frase_exemplo_portugues: "Solo rico é essencial para cultivar plantas saudáveis.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'soil' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 327,
    palavra_ingles: "mud",
    traducao_portugues: "lama",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "After the rain, the path was covered with mud.",
    frase_exemplo_portugues: "Depois da chuva, o caminho estava coberto de lama.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'mud' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 328,
    palavra_ingles: "butterfly",
    traducao_portugues: "borboleta",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The colorful butterfly landed gently on the flower.",
    frase_exemplo_portugues: "A borboleta colorida pousou suavemente na flor.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'butterfly' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 329,
    palavra_ingles: "bee",
    traducao_portugues: "abelha",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The busy bee collects nectar from various flowers.",
    frase_exemplo_portugues: "A abelha ocupada coleta néctar de várias flores.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'bee' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 330,
    palavra_ingles: "ant",
    traducao_portugues: "formiga",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The tiny ant can carry objects much heavier than itself.",
    frase_exemplo_portugues: "A formiga pequena pode carregar objetos muito mais pesados que ela.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'ant' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 331,
    palavra_ingles: "spider",
    traducao_portugues: "aranha",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The spider weaves an intricate web to catch insects.",
    frase_exemplo_portugues: "A aranha tece uma teia intrincada para pegar insetos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'spider' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 332,
    palavra_ingles: "frog",
    traducao_portugues: "sapo",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The green frog jumps from lily pad to lily pad.",
    frase_exemplo_portugues: "O sapo verde pula de vitória-régia em vitória-régia.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'frog' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 333,
    palavra_ingles: "snake",
    traducao_portugues: "cobra",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The snake slithers silently through the tall grass.",
    frase_exemplo_portugues: "A cobra desliza silenciosamente pela grama alta.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'snake' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 334,
    palavra_ingles: "lizard",
    traducao_portugues: "lagarto",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The small lizard basks in the warm sunlight.",
    frase_exemplo_portugues: "O lagarto pequeno se aquece na luz quente do sol.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'lizard' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 335,
    palavra_ingles: "turtle",
    traducao_portugues: "tartaruga",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The old turtle moves slowly across the sandy beach.",
    frase_exemplo_portugues: "A tartaruga velha se move lentamente pela praia arenosa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'turtle' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 336,
    palavra_ingles: "rabbit",
    traducao_portugues: "coelho",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The white rabbit hops quickly through the garden.",
    frase_exemplo_portugues: "O coelho branco pula rapidamente pelo jardim.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'rabbit' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 337,
    palavra_ingles: "squirrel",
    traducao_portugues: "esquilo",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The playful squirrel collects nuts for the winter.",
    frase_exemplo_portugues: "O esquilo brincalhão coleta nozes para o inverno.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'squirrel' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 338,
    palavra_ingles: "mouse",
    traducao_portugues: "rato",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The tiny mouse scurries quickly across the kitchen floor.",
    frase_exemplo_portugues: "O ratinho corre rapidamente pelo chão da cozinha.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'mouse' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 339,
    palavra_ingles: "deer",
    traducao_portugues: "veado",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The graceful deer drinks water from the clear stream.",
    frase_exemplo_portugues: "O veado gracioso bebe água do riacho claro.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'deer' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 340,
    palavra_ingles: "bear",
    traducao_portugues: "urso",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The large bear searches for food in the forest.",
    frase_exemplo_portugues: "O urso grande procura comida na floresta.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'bear' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 341,
    palavra_ingles: "wolf",
    traducao_portugues: "lobo",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The wild wolf howls at the full moon.",
    frase_exemplo_portugues: "O lobo selvagem uiva para a lua cheia.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'wolf' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 342,
    palavra_ingles: "fox",
    traducao_portugues: "raposa",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The clever fox hunts for small animals at night.",
    frase_exemplo_portugues: "A raposa esperta caça pequenos animais à noite.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'fox' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 343,
    palavra_ingles: "lion",
    traducao_portugues: "leão",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The mighty lion is known as the king of the jungle.",
    frase_exemplo_portugues: "O leão poderoso é conhecido como o rei da selva.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'lion' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 344,
    palavra_ingles: "tiger",
    traducao_portugues: "tigre",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The striped tiger is a powerful and beautiful predator.",
    frase_exemplo_portugues: "O tigre listrado é um predador poderoso e bonito.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'tiger' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 345,
    palavra_ingles: "elephant",
    traducao_portugues: "elefante",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The giant elephant uses its trunk to pick up food.",
    frase_exemplo_portugues: "O elefante gigante usa sua tromba para pegar comida.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'elephant' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 346,
    palavra_ingles: "monkey",
    traducao_portugues: "macaco",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The playful monkey swings from branch to branch.",
    frase_exemplo_portugues: "O macaco brincalhão balança de galho em galho.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'monkey' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 347,
    palavra_ingles: "horse",
    traducao_portugues: "cavalo",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The beautiful horse gallops freely across the open field.",
    frase_exemplo_portugues: "O cavalo bonito galopa livremente pelo campo aberto.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'horse' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 348,
    palavra_ingles: "cow",
    traducao_portugues: "vaca",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The dairy cow provides fresh milk for the family.",
    frase_exemplo_portugues: "A vaca leiteira fornece leite fresco para a família.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'cow' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 349,
    palavra_ingles: "pig",
    traducao_portugues: "porco",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The pink pig rolls happily in the cool mud.",
    frase_exemplo_portugues: "O porco rosa rola alegremente na lama fresca.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'pig' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 350,
    palavra_ingles: "sheep",
    traducao_portugues: "ovelha",
    categoria: "natureza",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The fluffy sheep provides wool for making warm clothes.",
    frase_exemplo_portugues: "A ovelha fofa fornece lã para fazer roupas quentes.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'sheep' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },

  // SENTIMENTOS - 50 palavras
  {
    id: 351,
    palavra_ingles: "happy",
    traducao_portugues: "feliz",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She feels very happy when spending time with her family.",
    frase_exemplo_portugues: "Ela se sente muito feliz quando passa tempo com sua família.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'happy' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 352,
    palavra_ingles: "sad",
    traducao_portugues: "triste",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He felt sad when his best friend moved away.",
    frase_exemplo_portugues: "Ele se sentiu triste quando seu melhor amigo se mudou.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'sad' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 353,
    palavra_ingles: "angry",
    traducao_portugues: "bravo/zangado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She was angry because someone broke her favorite vase.",
    frase_exemplo_portugues: "Ela estava brava porque alguém quebrou seu vaso favorito.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'angry' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 354,
    palavra_ingles: "excited",
    traducao_portugues: "animado/empolgado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The children are excited about going to the amusement park.",
    frase_exemplo_portugues: "As crianças estão animadas para ir ao parque de diversões.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'excited' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 355,
    palavra_ingles: "scared",
    traducao_portugues: "assustado/com medo",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She was scared of the loud thunder during the storm.",
    frase_exemplo_portugues: "Ela estava assustada com o trovão alto durante a tempestade.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'scared' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 356,
    palavra_ingles: "surprised",
    traducao_portugues: "surpreso",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He was surprised to see his old friend at the party.",
    frase_exemplo_portugues: "Ele ficou surpreso ao ver seu velho amigo na festa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'surprised' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 357,
    palavra_ingles: "confused",
    traducao_portugues: "confuso",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She looked confused when trying to solve the math problem.",
    frase_exemplo_portugues: "Ela parecia confusa ao tentar resolver o problema de matemática.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'confused' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 358,
    palavra_ingles: "worried",
    traducao_portugues: "preocupado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The mother was worried when her child came home late.",
    frase_exemplo_portugues: "A mãe estava preocupada quando seu filho chegou tarde em casa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'worried' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 359,
    palavra_ingles: "nervous",
    traducao_portugues: "nervoso",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He felt nervous before giving his first public speech.",
    frase_exemplo_portugues: "Ele se sentiu nervoso antes de fazer seu primeiro discurso público.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'nervous' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 360,
    palavra_ingles: "calm",
    traducao_portugues: "calmo",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She remained calm during the emergency situation.",
    frase_exemplo_portugues: "Ela permaneceu calma durante a situação de emergência.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'calm' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 361,
    palavra_ingles: "relaxed",
    traducao_portugues: "relaxado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "After the massage, she felt completely relaxed and peaceful.",
    frase_exemplo_portugues: "Depois da massagem, ela se sentiu completamente relaxada e em paz.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'relaxed' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 362,
    palavra_ingles: "tired",
    traducao_portugues: "cansado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He was tired after working all day in the garden.",
    frase_exemplo_portugues: "Ele estava cansado depois de trabalhar o dia todo no jardim.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'tired' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 363,
    palavra_ingles: "energetic",
    traducao_portugues: "energético/cheio de energia",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The children are very energetic after eating candy.",
    frase_exemplo_portugues: "As crianças estão muito energéticas depois de comer doces.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'energetic' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 364,
    palavra_ingles: "bored",
    traducao_portugues: "entediado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She felt bored during the long and repetitive meeting.",
    frase_exemplo_portugues: "Ela se sentiu entediada durante a reunião longa e repetitiva.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'bored' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 365,
    palavra_ingles: "interested",
    traducao_portugues: "interessado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He is very interested in learning about space exploration.",
    frase_exemplo_portugues: "Ele está muito interessado em aprender sobre exploração espacial.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'interested' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 366,
    palavra_ingles: "proud",
    traducao_portugues: "orgulhoso",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The parents were proud of their daughter's graduation.",
    frase_exemplo_portugues: "Os pais estavam orgulhosos da formatura da filha.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'proud' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 367,
    palavra_ingles: "ashamed",
    traducao_portugues: "envergonhado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He felt ashamed after telling a lie to his friend.",
    frase_exemplo_portugues: "Ele se sentiu envergonhado depois de contar uma mentira para seu amigo.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'ashamed' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 368,
    palavra_ingles: "embarrassed",
    traducao_portugues: "constrangido",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She was embarrassed when she tripped in front of everyone.",
    frase_exemplo_portugues: "Ela ficou constrangida quando tropeçou na frente de todos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'embarrassed' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 369,
    palavra_ingles: "jealous",
    traducao_portugues: "ciumento/com ciúmes",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He felt jealous when his friend got a new bicycle.",
    frase_exemplo_portugues: "Ele sentiu ciúmes quando seu amigo ganhou uma bicicleta nova.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'jealous' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 370,
    palavra_ingles: "grateful",
    traducao_portugues: "grato",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She was grateful for all the help during difficult times.",
    frase_exemplo_portugues: "Ela estava grata por toda a ajuda durante os tempos difíceis.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'grateful' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 371,
    palavra_ingles: "disappointed",
    traducao_portugues: "desapontado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He was disappointed when the concert was cancelled.",
    frase_exemplo_portugues: "Ele ficou desapontado quando o concerto foi cancelado.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'disappointed' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 372,
    palavra_ingles: "frustrated",
    traducao_portugues: "frustrado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She felt frustrated when the computer kept crashing.",
    frase_exemplo_portugues: "Ela se sentiu frustrada quando o computador continuava travando.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'frustrated' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 373,
    palavra_ingles: "hopeful",
    traducao_portugues: "esperançoso",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Despite the challenges, she remained hopeful about the future.",
    frase_exemplo_portugues: "Apesar dos desafios, ela permaneceu esperançosa sobre o futuro.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'hopeful' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 374,
    palavra_ingles: "hopeless",
    traducao_portugues: "sem esperança",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He felt hopeless after failing the exam three times.",
    frase_exemplo_portugues: "Ele se sentiu sem esperança depois de reprovar no exame três vezes.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'hopeless' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 375,
    palavra_ingles: "confident",
    traducao_portugues: "confiante",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She felt confident about her presentation after practicing.",
    frase_exemplo_portugues: "Ela se sentiu confiante sobre sua apresentação depois de praticar.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'confident' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 376,
    palavra_ingles: "insecure",
    traducao_portugues: "inseguro",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He felt insecure about his appearance at the party.",
    frase_exemplo_portugues: "Ele se sentiu inseguro sobre sua aparência na festa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'insecure' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 377,
    palavra_ingles: "lonely",
    traducao_portugues: "solitário",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She felt lonely after moving to a new city.",
    frase_exemplo_portugues: "Ela se sentiu solitária depois de se mudar para uma cidade nova.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'lonely' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 378,
    palavra_ingles: "loved",
    traducao_portugues: "amado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The child felt loved and supported by his family.",
    frase_exemplo_portugues: "A criança se sentiu amada e apoiada por sua família.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'loved' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 379,
    palavra_ingles: "rejected",
    traducao_portugues: "rejeitado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He felt rejected when his friends didn't invite him.",
    frase_exemplo_portugues: "Ele se sentiu rejeitado quando seus amigos não o convidaram.",
    proud_pratica: "Me ajude a treinar o uso da palavra 'rejected' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 380,
    palavra_ingles: "accepted",
    traducao_portugues: "aceito",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She felt accepted by her new classmates immediately.",
    frase_exemplo_portugues: "Ela se sentiu aceita pelos novos colegas de classe imediatamente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'accepted' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 381,
    palavra_ingles: "stressed",
    traducao_portugues: "estressado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He felt stressed about the upcoming final exams.",
    frase_exemplo_portugues: "Ele se sentiu estressado com os próximos exames finais.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'stressed' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 382,
    palavra_ingles: "peaceful",
    traducao_portugues: "em paz",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She felt peaceful while meditating in the quiet garden.",
    frase_exemplo_portugues: "Ela se sentiu em paz enquanto meditava no jardim silencioso.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'peaceful' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 383,
    palavra_ingles: "anxious",
    traducao_portugues: "ansioso",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She felt anxious about the job interview tomorrow.",
    frase_exemplo_portugues: "Ela se sentiu ansiosa com a entrevista de emprego amanhã.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'anxious' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 384,
    palavra_ingles: "content",
    traducao_portugues: "satisfeito",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He felt content with his simple but fulfilling life.",
    frase_exemplo_portugues: "Ele se sentiu satisfeito com sua vida simples mas gratificante.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'content' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 385,
    palavra_ingles: "overwhelmed",
    traducao_portugues: "sobrecarregado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She felt overwhelmed by all the work assignments.",
    frase_exemplo_portugues: "Ela se sentiu sobrecarregada com todas as tarefas de trabalho.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'overwhelmed' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 386,
    palavra_ingles: "relieved",
    traducao_portugues: "aliviado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He felt relieved when the doctor said everything was fine.",
    frase_exemplo_portugues: "Ele se sentiu aliviado quando o médico disse que estava tudo bem.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'relieved' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 387,
    palavra_ingles: "guilty",
    traducao_portugues: "culpado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She felt guilty for forgetting her friend's birthday.",
    frase_exemplo_portugues: "Ela se sentiu culpada por esquecer o aniversário da amiga.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'guilty' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 388,
    palavra_ingles: "innocent",
    traducao_portugues: "inocente",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The child looked innocent despite the broken vase nearby.",
    frase_exemplo_portugues: "A criança parecia inocente apesar do vaso quebrado por perto.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'innocent' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 389,
    palavra_ingles: "motivated",
    traducao_portugues: "motivado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She felt motivated to exercise after reading success stories.",
    frase_exemplo_portugues: "Ela se sentiu motivada a se exercitar depois de ler histórias de sucesso.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'motivated' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 390,
    palavra_ingles: "discouraged",
    traducao_portugues: "desencorajado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He felt discouraged after receiving multiple job rejections.",
    frase_exemplo_portugues: "Ele se sentiu desencorajado depois de receber várias rejeições de emprego.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'discouraged' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 391,
    palavra_ingles: "optimistic",
    traducao_portugues: "otimista",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Despite the setbacks, she remained optimistic about success.",
    frase_exemplo_portugues: "Apesar dos contratempos, ela permaneceu otimista sobre o sucesso.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'optimistic' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 392,
    palavra_ingles: "pessimistic",
    traducao_portugues: "pessimista",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He tends to be pessimistic about economic recovery.",
    frase_exemplo_portugues: "Ele tende a ser pessimista sobre a recuperação econômica.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'pessimistic' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 393,
    palavra_ingles: "curious",
    traducao_portugues: "curioso",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The child was curious about how the machine worked.",
    frase_exemplo_portugues: "A criança estava curiosa sobre como a máquina funcionava.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'curious' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 394,
    palavra_ingles: "indifferent",
    traducao_portugues: "indiferente",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She seemed indifferent to the outcome of the game.",
    frase_exemplo_portugues: "Ela parecia indiferente ao resultado do jogo.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'indifferent' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 395,
    palavra_ingles: "amazed",
    traducao_portugues: "impressionado/maravilhado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She was amazed by the beautiful sunset over the ocean.",
    frase_exemplo_portugues: "Ela ficou maravilhada com o belo pôr do sol sobre o oceano.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'amazed' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 396,
    palavra_ingles: "disgusted",
    traducao_portugues: "enojado/com nojo",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He felt disgusted by the smell of rotten food.",
    frase_exemplo_portugues: "Ele se sentiu enojado com o cheiro de comida podre.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'disgusted' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 397,
    palavra_ingles: "delighted",
    traducao_portugues: "encantado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She was delighted to receive flowers on her birthday.",
    frase_exemplo_portugues: "Ela ficou encantada ao receber flores no seu aniversário.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'delighted' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 398,
    palavra_ingles: "terrified",
    traducao_portugues: "aterrorizado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He was terrified during the horror movie last night.",
    frase_exemplo_portugues: "Ele ficou aterrorizado durante o filme de terror ontem à noite.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'terrified' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 399,
    palavra_ingles: "thrilled",
    traducao_portugues: "emocionado/empolgado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She was thrilled to win the first prize competition.",
    frase_exemplo_portugues: "Ela ficou emocionada ao ganhar o primeiro prêmio da competição.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'thrilled' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 400,
    palavra_ingles: "devastated",
    traducao_portugues: "devastado/arrasado",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He was devastated when his pet dog passed away.",
    frase_exemplo_portugues: "Ele ficou arrasado quando seu cachorro de estimação morreu.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'devastated' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },

  // ROUPAS - 50 palavras
  {
    id: 401,
    palavra_ingles: "shirt",
    traducao_portugues: "camisa",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He wears a clean white shirt to work every day.",
    frase_exemplo_portugues: "Ele usa uma camisa branca limpa para trabalhar todos os dias.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'shirt' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 402,
    palavra_ingles: "pants",
    traducao_portugues: "calça",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She bought new black pants for the job interview.",
    frase_exemplo_portugues: "Ela comprou uma calça preta nova para a entrevista de emprego.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'pants' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 403,
    palavra_ingles: "dress",
    traducao_portugues: "vestido",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The beautiful dress looks perfect for the wedding ceremony.",
    frase_exemplo_portugues: "O vestido bonito fica perfeito para a cerimônia de casamento.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'dress' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 404,
    palavra_ingles: "skirt",
    traducao_portugues: "saia",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She wore a long skirt with a matching blouse.",
    frase_exemplo_portugues: "Ela usou uma saia longa com uma blusa combinando.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'skirt' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 405,
    palavra_ingles: "blouse",
    traducao_portugues: "blusa",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The silk blouse feels comfortable and looks elegant.",
    frase_exemplo_portugues: "A blusa de seda é confortável e parece elegante.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'blouse' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 406,
    palavra_ingles: "jacket",
    traducao_portugues: "jaqueta",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He put on his leather jacket before going outside.",
    frase_exemplo_portugues: "Ele vestiu sua jaqueta de couro antes de sair.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'jacket' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 407,
    palavra_ingles: "coat",
    traducao_portugues: "casaco",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The warm coat keeps her comfortable during winter.",
    frase_exemplo_portugues: "O casaco quente a mantém confortável durante o inverno.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'coat' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 408,
    palavra_ingles: "sweater",
    traducao_portugues: "suéter",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She knitted a beautiful sweater for her grandson.",
    frase_exemplo_portugues: "Ela tricotou um suéter bonito para seu neto.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'sweater' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 409,
    palavra_ingles: "t-shirt",
    traducao_portugues: "camiseta",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He prefers wearing comfortable t-shirts on weekends.",
    frase_exemplo_portugues: "Ele prefere usar camisetas confortáveis nos fins de semana.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 't-shirt' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 410,
    palavra_ingles: "jeans",
    traducao_portugues: "jeans",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Blue jeans are popular clothing items around the world.",
    frase_exemplo_portugues: "Jeans azuis são peças de roupa populares ao redor do mundo.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'jeans' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 411,
    palavra_ingles: "shorts",
    traducao_portugues: "shorts",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Summer shorts are perfect for hot weather activities.",
    frase_exemplo_portugues: "Shorts de verão são perfeitos para atividades em clima quente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'shorts' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 412,
    palavra_ingles: "underwear",
    traducao_portugues: "roupa íntima",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Comfortable underwear is essential for daily activities.",
    frase_exemplo_portugues: "Roupa íntima confortável é essencial para atividades diárias.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'underwear' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 413,
    palavra_ingles: "socks",
    traducao_portugues: "meias",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Warm socks keep your feet comfortable in cold weather.",
    frase_exemplo_portugues: "Meias quentes mantêm seus pés confortáveis no tempo frio.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'socks' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 414,
    palavra_ingles: "shoes",
    traducao_portugues: "sapatos",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Good shoes are important for walking long distances.",
    frase_exemplo_portugues: "Sapatos bons são importantes para caminhar longas distâncias.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'shoes' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 415,
    palavra_ingles: "boots",
    traducao_portugues: "botas",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Waterproof boots are perfect for hiking in muddy trails.",
    frase_exemplo_portugues: "Botas impermeáveis são perfeitas para caminhar em trilhas lamacentas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'boots' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 416,
    palavra_ingles: "sneakers",
    traducao_portugues: "tênis",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "White sneakers go well with casual outfits.",
    frase_exemplo_portugues: "Tênis brancos combinam bem com roupas casuais.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'sneakers' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 417,
    palavra_ingles: "sandals",
    traducao_portugues: "sandálias",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Comfortable sandals are ideal for beach vacations.",
    frase_exemplo_portugues: "Sandálias confortáveis são ideais para férias na praia.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'sandals' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 418,
    palavra_ingles: "hat",
    traducao_portugues: "chapéu",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "A wide-brimmed hat protects your face from the sun.",
    frase_exemplo_portugues: "Um chapéu de aba larga protege seu rosto do sol.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'hat' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 419,
    palavra_ingles: "cap",
    traducao_portugues: "boné",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He wears a baseball cap to keep the sun out of his eyes.",
    frase_exemplo_portugues: "Ele usa um boné de beisebol para manter o sol longe dos olhos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'cap' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 420,
    palavra_ingles: "scarf",
    traducao_portugues: "cachecol",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The colorful scarf adds style to her winter outfit.",
    frase_exemplo_portugues: "O cachecol colorido adiciona estilo ao seu visual de inverno.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'scarf' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 421,
    palavra_ingles: "gloves",
    traducao_portugues: "luvas",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Warm gloves protect your hands from cold weather.",
    frase_exemplo_portugues: "Luvas quentes protegem suas mãos do tempo frio.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'gloves' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 422,
    palavra_ingles: "belt",
    traducao_portugues: "cinto",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "A leather belt completes his formal business attire.",
    frase_exemplo_portugues: "Um cinto de couro completa seu traje formal de negócios.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'belt' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 423,
    palavra_ingles: "tie",
    traducao_portugues: "gravata",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He learned how to tie a necktie for the wedding.",
    frase_exemplo_portugues: "Ele aprendeu como amarrar uma gravata para o casamento.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'tie' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 424,
    palavra_ingles: "suit",
    traducao_portugues: "terno",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "A well-fitted suit makes a professional impression.",
    frase_exemplo_portugues: "Um terno bem ajustado causa uma impressão profissional.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'suit' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 425,
    palavra_ingles: "uniform",
    traducao_portugues: "uniforme",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "School students must wear their uniform every day.",
    frase_exemplo_portugues: "Estudantes da escola devem usar seu uniforme todos os dias.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'uniform' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 426,
    palavra_ingles: "pajamas",
    traducao_portugues: "pijama",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Comfortable pajamas help you sleep better at night.",
    frase_exemplo_portugues: "Pijamas confortáveis ajudam você a dormir melhor à noite.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'pajamas' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 427,
    palavra_ingles: "robe",
    traducao_portugues: "roupão",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She put on her soft robe after taking a shower.",
    frase_exemplo_portugues: "Ela vestiu seu roupão macio depois de tomar banho.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'robe' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 428,
    palavra_ingles: "swimsuit",
    traducao_portugues: "maiô/biquíni",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She bought a new swimsuit for the beach vacation.",
    frase_exemplo_portugues: "Ela comprou um maiô novo para as férias na praia.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'swimsuit' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 429,
    palavra_ingles: "apron",
    traducao_portugues: "avental",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The chef wears an apron to protect his clothes while cooking.",
    frase_exemplo_portugues: "O chef usa um avental para proteger suas roupas enquanto cozinha.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'apron' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 430,
    palavra_ingles: "vest",
    traducao_portugues: "colete",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He wore a formal vest with his three-piece suit.",
    frase_exemplo_portugues: "Ele usou um colete formal com seu terno de três peças.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'vest' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 431,
    palavra_ingles: "cardigan",
    traducao_portugues: "cardigã",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The soft cardigan is perfect for cool spring evenings.",
    frase_exemplo_portugues: "O cardigã macio é perfeito para noites frescas de primavera.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'cardigan' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 432,
    palavra_ingles: "hoodie",
    traducao_portugues: "moletom com capuz",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Students often wear hoodies to stay warm on campus.",
    frase_exemplo_portugues: "Estudantes frequentemente usam moletons com capuz para se manter aquecidos no campus.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'hoodie' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 433,
    palavra_ingles: "polo shirt",
    traducao_portugues: "camisa polo",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "A polo shirt is appropriate for casual business meetings.",
    frase_exemplo_portugues: "Uma camisa polo é apropriada para reuniões de negócios casuais.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'polo shirt' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 434,
    palavra_ingles: "tank top",
    traducao_portugues: "regata",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Tank tops are comfortable clothing for hot summer days.",
    frase_exemplo_portugues: "Regatas são roupas confortáveis para dias quentes de verão.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'tank top' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 435,
    palavra_ingles: "leggings",
    traducao_portugues: "legging",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Black leggings are versatile and comfortable for exercise.",
    frase_exemplo_portugues: "Leggings pretas são versáteis e confortáveis para exercícios.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'leggings' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 436,
    palavra_ingles: "tights",
    traducao_portugues: "meia-calça",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She wore black tights under her short dress.",
    frase_exemplo_portugues: "Ela usou meia-calça preta sob seu vestido curto.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'tights' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 437,
    palavra_ingles: "stockings",
    traducao_portugues: "meias altas",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Silk stockings were fashionable in the 1940s.",
    frase_exemplo_portugues: "Meias altas de seda eram moda nos anos 1940.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'stockings' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 438,
    palavra_ingles: "high heels",
    traducao_portugues: "salto alto",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "High heels make her look taller and more elegant.",
    frase_exemplo_portugues: "Salto alto a faz parecer mais alta e elegante.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'high heels' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 439,
    palavra_ingles: "flip-flops",
    traducao_portugues: "chinelos",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Flip-flops are perfect footwear for the beach.",
    frase_exemplo_portugues: "Chinelos são calçados perfeitos para a praia.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'flip-flops' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 440,
    palavra_ingles: "slippers",
    traducao_portugues: "pantufas",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Warm slippers keep your feet cozy at home.",
    frase_exemplo_portugues: "Pantufas quentes mantêm seus pés aconchegados em casa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'slippers' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 441,
    palavra_ingles: "jewelry",
    traducao_portugues: "joias",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She inherited beautiful jewelry from her grandmother.",
    frase_exemplo_portugues: "Ela herdou joias bonitas de sua avó.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'jewelry' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 442,
    palavra_ingles: "necklace",
    traducao_portugues: "colar",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The pearl necklace was a gift from her husband.",
    frase_exemplo_portugues: "O colar de pérolas foi um presente do marido.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'necklace' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 443,
    palavra_ingles: "earrings",
    traducao_portugues: "brincos",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Diamond earrings sparkle beautifully in the light.",
    frase_exemplo_portugues: "Brincos de diamante brilham lindamente na luz.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'earrings' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 444,
    palavra_ingles: "bracelet",
    traducao_portugues: "pulseira",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She wears a silver bracelet on her left wrist.",
    frase_exemplo_portugues: "Ela usa uma pulseira de prata no pulso esquerdo.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'bracelet' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 445,
    palavra_ingles: "ring",
    traducao_portugues: "anel",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The engagement ring has a beautiful diamond stone.",
    frase_exemplo_portugues: "O anel de noivado tem uma pedra de diamante bonita.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'ring' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 446,
    palavra_ingles: "watch",
    traducao_portugues: "relógio de pulso",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "His expensive watch shows both time and date.",
    frase_exemplo_portugues: "Seu relógio caro mostra tanto a hora quanto a data.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'watch' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 447,
    palavra_ingles: "sunglasses",
    traducao_portugues: "óculos de sol",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Dark sunglasses protect your eyes from bright sunlight.",
    frase_exemplo_portugues: "Óculos de sol escuros protegem seus olhos da luz solar brilhante.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'sunglasses' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 448,
    palavra_ingles: "glasses",
    traducao_portugues: "óculos",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Reading glasses help him see small text clearly.",
    frase_exemplo_portugues: "Óculos de leitura o ajudam a ver textos pequenos claramente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'glasses' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 449,
    palavra_ingles: "purse",
    traducao_portugues: "bolsa",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She carries her essentials in a small leather purse.",
    frase_exemplo_portugues: "Ela carrega seus itens essenciais em uma pequena bolsa de couro.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'purse' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 450,
    palavra_ingles: "backpack",
    traducao_portugues: "mochila",
    categoria: "roupas",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Students use backpacks to carry books and supplies.",
    frase_exemplo_portugues: "Estudantes usam mochilas para carregar livros e materiais.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'backpack' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },

  // VERBOS E AÇÕES - 50 palavras
  {
    id: 451,
    palavra_ingles: "run",
    traducao_portugues: "correr",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "They run together in the park every morning for exercise.",
    frase_exemplo_portugues: "Eles correm juntos no parque toda manhã para se exercitar.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'run' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 452,
    palavra_ingles: "walk",
    traducao_portugues: "caminhar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She likes to walk slowly through the beautiful garden.",
    frase_exemplo_portugues: "Ela gosta de caminhar devagar pelo jardim bonito.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'walk' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 453,
    palavra_ingles: "eat",
    traducao_portugues: "comer",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "We eat dinner together as a family every night.",
    frase_exemplo_portugues: "Comemos jantar juntos em família todas as noites.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'eat' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 454,
    palavra_ingles: "drink",
    traducao_portugues: "beber",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "You should drink plenty of water throughout the day.",
    frase_exemplo_portugues: "Você deve beber bastante água durante o dia.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'drink' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 455,
    palavra_ingles: "sleep",
    traducao_portugues: "dormir",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Young children need to sleep at least 10 hours every night.",
    frase_exemplo_portugues: "Crianças pequenas precisam dormir pelo menos 10 horas toda noite.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'sleep' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 456,
    palavra_ingles: "wake up",
    traducao_portugues: "acordar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "I wake up early every morning to exercise.",
    frase_exemplo_portugues: "Eu acordo cedo toda manhã para me exercitar.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'wake up' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 457,
    palavra_ingles: "sit",
    traducao_portugues: "sentar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Please sit down and make yourself comfortable.",
    frase_exemplo_portugues: "Por favor, sente-se e fique à vontade.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'sit' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 458,
    palavra_ingles: "stand",
    traducao_portugues: "ficar em pé",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Everyone must stand when the judge enters the courtroom.",
    frase_exemplo_portugues: "Todos devem ficar em pé quando o juiz entra no tribunal.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'stand' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 459,
    palavra_ingles: "jump",
    traducao_portugues: "pular",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Children love to jump on the trampoline in the backyard.",
    frase_exemplo_portugues: "As crianças adoram pular na cama elástica no quintal.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'jump' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 460,
    palavra_ingles: "dance",
    traducao_portugues: "dançar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "They dance beautifully together at the wedding party.",
    frase_exemplo_portugues: "Eles dançam lindamente juntos na festa de casamento.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'dance' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 461,
    palavra_ingles: "sing",
    traducao_portugues: "cantar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She loves to sing her favorite songs in the shower.",
    frase_exemplo_portugues: "Ela adora cantar suas músicas favoritas no chuveiro.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'sing' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 462,
    palavra_ingles: "speak",
    traducao_portugues: "falar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He can speak three different languages fluently.",
    frase_exemplo_portugues: "Ele consegue falar três idiomas diferentes fluentemente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'speak' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 463,
    palavra_ingles: "listen",
    traducao_portugues: "escutar/ouvir",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Students should listen carefully to their teacher's instructions.",
    frase_exemplo_portugues: "Estudantes devem escutar cuidadosamente as instruções do professor.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'listen' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 464,
    palavra_ingles: "read",
    traducao_portugues: "ler",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She likes to read interesting books before going to bed.",
    frase_exemplo_portugues: "Ela gosta de ler livros interessantes antes de dormir.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'read' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 465,
    palavra_ingles: "write",
    traducao_portugues: "escrever",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He writes in his personal diary every single night.",
    frase_exemplo_portugues: "Ele escreve em seu diário pessoal toda noite.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'write' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 466,
    palavra_ingles: "draw",
    traducao_portugues: "desenhar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The artist can draw realistic portraits with pencil.",
    frase_exemplo_portugues: "O artista consegue desenhar retratos realistas com lápis.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'draw' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 467,
    palavra_ingles: "paint",
    traducao_portugues: "pintar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "They paint the house walls with bright colors.",
    frase_exemplo_portugues: "Eles pintam as paredes da casa com cores brilhantes.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'paint' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 468,
    palavra_ingles: "cook",
    traducao_portugues: "cozinhar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "My grandmother loves to cook traditional family recipes.",
    frase_exemplo_portugues: "Minha avó adora cozinhar receitas tradicionais da família.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'cook' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 469,
    palavra_ingles: "clean",
    traducao_portugues: "limpar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "We clean the entire house every Saturday morning.",
    frase_exemplo_portugues: "Limpamos a casa inteira todo sábado de manhã.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'clean' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 470,
    palavra_ingles: "wash",
    traducao_portugues: "lavar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Remember to wash your hands before eating meals.",
    frase_exemplo_portugues: "Lembre-se de lavar as mãos antes de comer.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'wash' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 471,
    palavra_ingles: "drive",
    traducao_portugues: "dirigir",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She learned to drive when she turned eighteen.",
    frase_exemplo_portugues: "Ela aprendeu a dirigir quando fez dezoito anos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'drive' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 472,
    palavra_ingles: "fly",
    traducao_portugues: "voar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Birds fly south during the cold winter months.",
    frase_exemplo_portugues: "Pássaros voam para o sul durante os meses frios de inverno.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'fly' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 473,
    palavra_ingles: "swim",
    traducao_portugues: "nadar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Children learn to swim in the community pool.",
    frase_exemplo_portugues: "Crianças aprendem a nadar na piscina da comunidade.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'swim' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 474,
    palavra_ingles: "climb",
    traducao_portugues: "escalar/subir",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "They climb the mountain every summer for adventure.",
    frase_exemplo_portugues: "Eles escalam a montanha todo verão por aventura.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'climb' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 475,
    palavra_ingles: "fall",
    traducao_portugues: "cair",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Leaves fall from trees during the autumn season.",
    frase_exemplo_portugues: "Folhas caem das árvores durante a estação do outono.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'fall' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 476,
    palavra_ingles: "throw",
    traducao_portugues: "arremessar/jogar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He can throw the baseball very far and accurately.",
    frase_exemplo_portugues: "Ele consegue arremessar a bola de beisebol muito longe e com precisão.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'throw' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 477,
    palavra_ingles: "catch",
    traducao_portugues: "pegar/agarrar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The goalkeeper tries to catch every ball kicked.",
    frase_exemplo_portugues: "O goleiro tenta pegar toda bola chutada.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'catch' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 478,
    palavra_ingles: "push",
    traducao_portugues: "empurrar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "You need to push the heavy door to open it.",
    frase_exemplo_portugues: "Você precisa empurrar a porta pesada para abri-la.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'push' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 479,
    palavra_ingles: "pull",
    traducao_portugues: "puxar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Pull the rope gently to ring the church bell.",
    frase_exemplo_portugues: "Puxe a corda suavemente para tocar o sino da igreja.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'pull' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 480,
    palavra_ingles: "lift",
    traducao_portugues: "levantar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He can lift heavy weights at the gym.",
    frase_exemplo_portugues: "Ele consegue levantar pesos pesados na academia.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'lift' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 481,
    palavra_ingles: "carry",
    traducao_portugues: "carregar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She helps carry groceries from the car to house.",
    frase_exemplo_portugues: "Ela ajuda a carregar compras do carro para casa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'carry' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 482,
    palavra_ingles: "hold",
    traducao_portugues: "segurar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Please hold my hand while crossing the busy street.",
    frase_exemplo_portugues: "Por favor, segure minha mão ao atravessar a rua movimentada.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'hold' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 483,
    palavra_ingles: "touch",
    traducao_portugues: "tocar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Don't touch the hot stove with your bare hands.",
    frase_exemplo_portugues: "Não toque no fogão quente com as mãos nuas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'touch' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 484,
    palavra_ingles: "point",
    traducao_portugues: "apontar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She used her finger to point at the correct answer.",
    frase_exemplo_portugues: "Ela usou o dedo para apontar para a resposta correta.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'point' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 485,
    palavra_ingles: "look",
    traducao_portugues: "olhar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Look both ways before crossing the street safely.",
    frase_exemplo_portugues: "Olhe para ambos os lados antes de atravessar a rua com segurança.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'look' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 486,
    palavra_ingles: "see",
    traducao_portugues: "ver",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "I can see beautiful mountains from my bedroom window.",
    frase_exemplo_portugues: "Posso ver montanhas bonitas da janela do meu quarto.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'see' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 487,
    palavra_ingles: "watch",
    traducao_portugues: "assistir",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "We watch movies together every Friday evening.",
    frase_exemplo_portugues: "Assistimos filmes juntos toda sexta-feira à noite.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'watch' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 488,
    palavra_ingles: "smile",
    traducao_portugues: "sorrir",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She always smiles when greeting her friends warmly.",
    frase_exemplo_portugues: "Ela sempre sorri ao cumprimentar seus amigos calorosamente.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'smile' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 489,
    palavra_ingles: "laugh",
    traducao_portugues: "rir",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Children laugh loudly while playing fun games together.",
    frase_exemplo_portugues: "Crianças riem alto enquanto brincam de jogos divertidos juntas.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'laugh' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 490,
    palavra_ingles: "cry",
    traducao_portugues: "chorar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "The baby started to cry when feeling hungry.",
    frase_exemplo_portugues: "O bebê começou a chorar quando sentiu fome.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'cry' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 491,
    palavra_ingles: "think",
    traducao_portugues: "pensar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "I need time to think about this important decision.",
    frase_exemplo_portugues: "Preciso de tempo para pensar sobre esta decisão importante.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'think' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 492,
    palavra_ingles: "know",
    traducao_portugues: "saber/conhecer",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She knows how to solve complex mathematical problems.",
    frase_exemplo_portugues: "Ela sabe como resolver problemas matemáticos complexos.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'know' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 493,
    palavra_ingles: "learn",
    traducao_portugues: "aprender",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Students learn new concepts every day at school.",
    frase_exemplo_portugues: "Estudantes aprendem novos conceitos todos os dias na escola.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'learn' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 494,
    palavra_ingles: "teach",
    traducao_portugues: "ensinar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Parents teach their children important life values.",
    frase_exemplo_portugues: "Pais ensinam aos filhos valores importantes da vida.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'teach' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 495,
    palavra_ingles: "study",
    traducao_portugues: "estudar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She studies hard every night for her exams.",
    frase_exemplo_portugues: "Ela estuda muito toda noite para seus exames.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'study' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 496,
    palavra_ingles: "work",
    traducao_portugues: "trabalhar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "He works eight hours a day at the office.",
    frase_exemplo_portugues: "Ele trabalha oito horas por dia no escritório.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'work' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 497,
    palavra_ingles: "play",
    traducao_portugues: "brincar/jogar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Children love to play games in the playground.",
    frase_exemplo_portugues: "Crianças adoram brincar de jogos no parquinho.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'play' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 498,
    palavra_ingles: "help",
    traducao_portugues: "ajudar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Good friends always help each other in difficult times.",
    frase_exemplo_portugues: "Bons amigos sempre se ajudam em tempos difíceis.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'help' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 499,
    palavra_ingles: "give",
    traducao_portugues: "dar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "She likes to give presents to her family.",
    frase_exemplo_portugues: "Ela gosta de dar presentes para sua família.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'give' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 500,
    palavra_ingles: "take",
    traducao_portugues: "pegar/levar",
    categoria: "verbos",
    imagem_url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Please take your umbrella because it might rain.",
    frase_exemplo_portugues: "Por favor, pegue seu guarda-chuva porque pode chover.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'take' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },

  // PALAVRAS BÔNUS - 5 palavras
  {
    id: 501,
    palavra_ingles: "love",
    traducao_portugues: "amor",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Love is the most powerful emotion in human life.",
    frase_exemplo_portugues: "Amor é a emoção mais poderosa na vida humana.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'love' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 502,
    palavra_ingles: "friend",
    traducao_portugues: "amigo",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "A true friend is always there when you need them.",
    frase_exemplo_portugues: "Um amigo verdadeiro está sempre lá quando você precisa.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'friend' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 503,
    palavra_ingles: "family",
    traducao_portugues: "família",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Family is the most important thing in my life.",
    frase_exemplo_portugues: "Família é a coisa mais importante na minha vida.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'family' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 504,
    palavra_ingles: "dream",
    traducao_portugues: "sonho",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Never give up on your dreams, no matter how difficult.",
    frase_exemplo_portugues: "Nunca desista dos seus sonhos, não importa quão difícil.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'dream' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 505,
    palavra_ingles: "hope",
    traducao_portugues: "esperança",
    categoria: "sentimentos",
    imagem_url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=300",
    frase_exemplo_ingles: "Hope gives us strength to overcome any challenge.",
    frase_exemplo_portugues: "Esperança nos dá força para superar qualquer desafio.",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'hope' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  }
];

// Função para buscar palavras
export const searchWords = (query: string): Word[] => {
  if (!query.trim()) return wordsDatabase;
  
  const searchTerm = query.toLowerCase().trim();
  return wordsDatabase.filter(word => 
    word.palavra_ingles.toLowerCase().includes(searchTerm) ||
    word.traducao_portugues.toLowerCase().includes(searchTerm) ||
    word.categoria.toLowerCase().includes(searchTerm)
  );
};

// Função para obter palavra aleatória
export const getRandomWord = (): Word => {
  const randomIndex = Math.floor(Math.random() * wordsDatabase.length);
  return wordsDatabase[randomIndex];
};

// Função para obter palavras por categoria
export const getWordsByCategory = (category: string): Word[] => {
  return wordsDatabase.filter(word => word.categoria === category);
};