export interface Word {
  id: number;
  palavra_ingles: string;
  traducao_portugues: string;
  categoria: string;
  frase_exemplo_ingles: string;
  frase_exemplo_portugues: string;
  imagem_url: string;
  prompt_pratica: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  { id: 'animals', name: 'Animais', icon: '🐾', color: 'bg-gradient-to-br from-green-400 to-blue-500' },
  { id: 'food', name: 'Comida', icon: '🍎', color: 'bg-gradient-to-br from-red-400 to-pink-500' },
  { id: 'house', name: 'Casa', icon: '🏠', color: 'bg-gradient-to-br from-blue-400 to-purple-500' },
  { id: 'transport', name: 'Transporte', icon: '🚗', color: 'bg-gradient-to-br from-yellow-400 to-orange-500' },
  { id: 'clothes', name: 'Roupas', icon: '👕', color: 'bg-gradient-to-br from-purple-400 to-pink-500' },
  { id: 'nature', name: 'Natureza', icon: '🌳', color: 'bg-gradient-to-br from-green-400 to-teal-500' },
  { id: 'body', name: 'Corpo', icon: '👤', color: 'bg-gradient-to-br from-orange-400 to-red-500' },
  { id: 'actions', name: 'Ações', icon: '🏃', color: 'bg-gradient-to-br from-indigo-400 to-blue-500' },
  { id: 'objects', name: 'Objetos', icon: '📱', color: 'bg-gradient-to-br from-gray-400 to-blue-500' },
  { id: 'emotions', name: 'Emoções', icon: '😊', color: 'bg-gradient-to-br from-yellow-400 to-pink-500' }
];

export const wordsDatabase: Word[] = [
  // ANIMALS (50 words)
  {
    id: 1,
    palavra_ingles: "cat",
    traducao_portugues: "gato",
    categoria: "animals",
    frase_exemplo_ingles: "The cat is sleeping on the sofa.",
    frase_exemplo_portugues: "O gato está dormindo no sofá.",
    imagem_url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'cat' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 2,
    palavra_ingles: "dog",
    traducao_portugues: "cachorro",
    categoria: "animals",
    frase_exemplo_ingles: "My dog loves to play in the park.",
    frase_exemplo_portugues: "Meu cachorro adora brincar no parque.",
    imagem_url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'dog' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 3,
    palavra_ingles: "bird",
    traducao_portugues: "pássaro",
    categoria: "animals",
    frase_exemplo_ingles: "The bird is singing in the tree.",
    frase_exemplo_portugues: "O pássaro está cantando na árvore.",
    imagem_url: "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'bird' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 4,
    palavra_ingles: "fish",
    traducao_portugues: "peixe",
    categoria: "animals",
    frase_exemplo_ingles: "There are colorful fish in the aquarium.",
    frase_exemplo_portugues: "Há peixes coloridos no aquário.",
    imagem_url: "https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'fish' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 5,
    palavra_ingles: "horse",
    traducao_portugues: "cavalo",
    categoria: "animals",
    frase_exemplo_ingles: "The horse is running across the field.",
    frase_exemplo_portugues: "O cavalo está correndo pelo campo.",
    imagem_url: "https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg",
    prompt_pratica: "Me ajude a treinar o uso da palavra 'horse' em diferentes contextos. Crie frases, perguntas e respostas para eu praticar vocabulário e gramática com ela."
  },
  {
    id: 6,
    palavra_ingles: "elephant",
    traducao_portugues: "elefante",
    categoria: "animals",
    frase_exemplo_ingles: "The elephant is the largest land animal.",
    frase_exemplo_portugues: "O elefante é o maior animal terrestre.",
    imagem_url: "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg",
    prompt_pratica: "Pratique com 'elephant': Compare elefantes com outros animais usando comparativos. Fale sobre habitat, características físicas e comportamento dos elefantes."
  },
  {
    id: 7,
    palavra_ingles: "lion",
    traducao_portugues: "leão",
    categoria: "animals",
    frase_exemplo_ingles: "The lion roars loudly in the jungle.",
    frase_exemplo_portugues: "O leão ruge alto na selva.",
    imagem_url: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg",
    prompt_pratica: "Pratique com 'lion': Use 'lion' em expressões como 'brave as a lion'. Descreva a vida dos leões na savana. Compare leões machos e fêmeas."
  },
  {
    id: 8,
    palavra_ingles: "tiger",
    traducao_portugues: "tigre",
    categoria: "animals",
    frase_exemplo_ingles: "The tiger has beautiful orange stripes.",
    frase_exemplo_portugues: "O tigre tem lindas listras laranja.",
    imagem_url: "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg",
    prompt_pratica: "Pratique com 'tiger': Descreva as características físicas dos tigres. Compare tigres com outros felinos. Use 'tiger' em metáforas e expressões."
  },
  {
    id: 9,
    palavra_ingles: "monkey",
    traducao_portugues: "macaco",
    categoria: "animals",
    frase_exemplo_ingles: "The monkey swings from tree to tree.",
    frase_exemplo_portugues: "O macaco balança de árvore em árvore.",
    imagem_url: "https://images.pexels.com/photos/50988/ape-berber-monkeys-mammal-affchen-50988.jpeg",
    prompt_pratica: "Pratique com 'monkey': Fale sobre diferentes tipos de macacos. Use verbos como 'swing', 'climb', 'jump' com 'monkey'. Descreva comportamentos dos macacos."
  },
  {
    id: 10,
    palavra_ingles: "rabbit",
    traducao_portugues: "coelho",
    categoria: "animals",
    frase_exemplo_ingles: "The rabbit hops quickly through the garden.",
    frase_exemplo_portugues: "O coelho pula rapidamente pelo jardim.",
    imagem_url: "https://images.pexels.com/photos/104373/pexels-photo-104373.jpeg",
    prompt_pratica: "Pratique com 'rabbit': Use 'rabbit' com verbos como 'hop', 'nibble', 'hide'. Fale sobre coelhos domésticos vs. selvagens. Crie histórias com coelhos."
  },
  {
    id: 11,
    palavra_ingles: "bear",
    traducao_portugues: "urso",
    categoria: "animals",
    frase_exemplo_ingles: "The bear catches fish in the river.",
    frase_exemplo_portugues: "O urso pesca no rio.",
    imagem_url: "https://images.pexels.com/photos/1770918/pexels-photo-1770918.jpeg",
    prompt_pratica: "Pratique com 'bear': Fale sobre diferentes tipos de ursos (polar, pardo, panda). Use 'bear' como verbo (suportar). Descreva hibernação."
  },
  {
    id: 12,
    palavra_ingles: "wolf",
    traducao_portugues: "lobo",
    categoria: "animals",
    frase_exemplo_ingles: "The wolf howls at the full moon.",
    frase_exemplo_portugues: "O lobo uiva para a lua cheia.",
    imagem_url: "https://images.pexels.com/photos/1123771/pexels-photo-1123771.jpeg",
    prompt_pratica: "Pratique com 'wolf': Use expressões como 'lone wolf', 'wolf pack'. Fale sobre comportamento dos lobos. Compare lobos e cachorros."
  },
  {
    id: 13,
    palavra_ingles: "fox",
    traducao_portugues: "raposa",
    categoria: "animals",
    frase_exemplo_ingles: "The clever fox hunts at night.",
    frase_exemplo_portugues: "A raposa esperta caça à noite.",
    imagem_url: "https://images.pexels.com/photos/39310/fox-animal-nature-red-39310.jpeg",
    prompt_pratica: "Pratique com 'fox': Use adjetivos como 'sly', 'clever', 'red' com 'fox'. Fale sobre raposas em fábulas e histórias. Descreva habitat das raposas."
  },
  {
    id: 14,
    palavra_ingles: "deer",
    traducao_portugues: "veado",
    categoria: "animals",
    frase_exemplo_ingles: "The deer grazes peacefully in the meadow.",
    frase_exemplo_portugues: "O veado pasta pacificamente no prado.",
    imagem_url: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg",
    prompt_pratica: "Pratique com 'deer': Note que 'deer' é igual no singular e plural. Use com verbos como 'graze', 'leap', 'run'. Fale sobre chifres e habitat."
  },
  {
    id: 15,
    palavra_ingles: "cow",
    traducao_portugues: "vaca",
    categoria: "animals",
    frase_exemplo_ingles: "The cow gives fresh milk every morning.",
    frase_exemplo_portugues: "A vaca dá leite fresco toda manhã.",
    imagem_url: "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg",
    prompt_pratica: "Pratique com 'cow': Fale sobre produtos derivados do leite. Use 'cow' em expressões idiomáticas. Descreva vida na fazenda com vacas."
  },
  {
    id: 16,
    palavra_ingles: "pig",
    traducao_portugues: "porco",
    categoria: "animals",
    frase_exemplo_ingles: "The pig rolls in the mud to stay cool.",
    frase_exemplo_portugues: "O porco se revolve na lama para se refrescar.",
    imagem_url: "https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg",
    prompt_pratica: "Pratique com 'pig': Use expressões como 'happy as a pig in mud'. Fale sobre diferentes usos dos porcos. Compare porcos domésticos e selvagens."
  },
  {
    id: 17,
    palavra_ingles: "sheep",
    traducao_portugues: "ovelha",
    categoria: "animals",
    frase_exemplo_ingles: "The sheep provides wool for clothing.",
    frase_exemplo_portugues: "A ovelha fornece lã para roupas.",
    imagem_url: "https://images.pexels.com/photos/2647053/pexels-photo-2647053.jpeg",
    prompt_pratica: "Pratique com 'sheep': Note que 'sheep' é igual no singular e plural. Fale sobre lã, pastoreio e rebanhos. Use expressões com 'sheep'."
  },
  {
    id: 18,
    palavra_ingles: "goat",
    traducao_portugues: "cabra",
    categoria: "animals",
    frase_exemplo_ingles: "The goat climbs steep mountain rocks.",
    frase_exemplo_portugues: "A cabra escala rochas íngremes da montanha.",
    imagem_url: "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg",
    prompt_pratica: "Pratique com 'goat': Fale sobre agilidade das cabras. Use 'goat' em expressões como 'scapegoat'. Compare cabras e ovelhas."
  },
  {
    id: 19,
    palavra_ingles: "chicken",
    traducao_portugues: "galinha",
    categoria: "animals",
    frase_exemplo_ingles: "The chicken lays eggs in the nest.",
    frase_exemplo_portugues: "A galinha põe ovos no ninho.",
    imagem_url: "https://images.pexels.com/photos/1300361/pexels-photo-1300361.jpeg",
    prompt_pratica: "Pratique com 'chicken': Fale sobre ovos, criação de galinhas. Use 'chicken' como adjetivo (covarde). Compare 'chicken', 'hen', 'rooster'."
  },
  {
    id: 20,
    palavra_ingles: "duck",
    traducao_portugues: "pato",
    categoria: "animals",
    frase_exemplo_ingles: "The duck swims gracefully on the pond.",
    frase_exemplo_portugues: "O pato nada graciosamente na lagoa.",
    imagem_url: "https://images.pexels.com/photos/133459/pexels-photo-133459.jpeg",
    prompt_pratica: "Pratique com 'duck': Use 'duck' como verbo (abaixar). Fale sobre patos em lagos e rios. Descreva características dos patos."
  },
  {
    id: 21,
    palavra_ingles: "snake",
    traducao_portugues: "cobra",
    categoria: "animals",
    frase_exemplo_ingles: "The snake slithers silently through the grass.",
    frase_exemplo_portugues: "A cobra desliza silenciosamente pela grama.",
    imagem_url: "https://images.pexels.com/photos/34426/snake-rainbow-boa-reptile-scale.jpeg",
    prompt_pratica: "Pratique com 'snake': Use verbos como 'slither', 'coil', 'hiss' com 'snake'. Fale sobre cobras venenosas e não-venenosas. Use metáforas com 'snake'."
  },
  {
    id: 22,
    palavra_ingles: "turtle",
    traducao_portugues: "tartaruga",
    categoria: "animals",
    frase_exemplo_ingles: "The turtle moves slowly across the sand.",
    frase_exemplo_portugues: "A tartaruga se move lentamente pela areia.",
    imagem_url: "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg",
    prompt_pratica: "Pratique com 'turtle': Compare 'turtle' e 'tortoise'. Use expressões como 'slow as a turtle'. Fale sobre tartarugas marinhas e terrestres."
  },
  {
    id: 23,
    palavra_ingles: "frog",
    traducao_portugues: "sapo",
    categoria: "animals",
    frase_exemplo_ingles: "The frog jumps from lily pad to lily pad.",
    frase_exemplo_portugues: "O sapo pula de vitória-régia em vitória-régia.",
    imagem_url: "https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg",
    prompt_pratica: "Pratique com 'frog': Use verbos como 'croak', 'hop', 'leap' com 'frog'. Fale sobre metamorfose de girinos. Use 'frog' em expressões idiomáticas."
  },
  {
    id: 24,
    palavra_ingles: "butterfly",
    traducao_portugues: "borboleta",
    categoria: "animals",
    frase_exemplo_ingles: "The butterfly lands gently on the flower.",
    frase_exemplo_portugues: "A borboleta pousa delicadamente na flor.",
    imagem_url: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg",
    prompt_pratica: "Pratique com 'butterfly': Fale sobre metamorfose das borboletas. Use adjetivos como 'colorful', 'delicate', 'beautiful'. Descreva padrões das asas."
  },
  {
    id: 25,
    palavra_ingles: "bee",
    traducao_portugues: "abelha",
    categoria: "animals",
    frase_exemplo_ingles: "The bee collects nectar from flowers.",
    frase_exemplo_portugues: "A abelha coleta néctar das flores.",
    imagem_url: "https://images.pexels.com/photos/56876/honey-bee-insect-bee-flower-56876.jpeg",
    prompt_pratica: "Pratique com 'bee': Fale sobre produção de mel, colmeias. Use expressões como 'busy as a bee'. Descreva importância das abelhas para polinização."
  },
  {
    id: 26,
    palavra_ingles: "spider",
    traducao_portugues: "aranha",
    categoria: "animals",
    frase_exemplo_ingles: "The spider weaves an intricate web.",
    frase_exemplo_portugues: "A aranha tece uma teia intrincada.",
    imagem_url: "https://images.pexels.com/photos/40795/spider-macro-zebra-spider-insect-40795.jpeg",
    prompt_pratica: "Pratique com 'spider': Fale sobre teias de aranha, diferentes tipos. Use verbos como 'weave', 'crawl', 'catch'. Descreva características das aranhas."
  },
  {
    id: 27,
    palavra_ingles: "ant",
    traducao_portugues: "formiga",
    categoria: "animals",
    frase_exemplo_ingles: "The ant carries food back to the colony.",
    frase_exemplo_portugues: "A formiga carrega comida de volta para a colônia.",
    imagem_url: "https://images.pexels.com/photos/86722/pexels-photo-86722.jpeg",
    prompt_pratica: "Pratique com 'ant': Fale sobre trabalho em equipe das formigas. Use expressões como 'busy as an ant'. Descreva organização das colônias."
  },
  {
    id: 28,
    palavra_ingles: "whale",
    traducao_portugues: "baleia",
    categoria: "animals",
    frase_exemplo_ingles: "The whale sings beautiful songs in the ocean.",
    frase_exemplo_portugues: "A baleia canta belas canções no oceano.",
    imagem_url: "https://images.pexels.com/photos/892548/pexels-photo-892548.jpeg",
    prompt_pratica: "Pratique com 'whale': Fale sobre diferentes tipos de baleias. Use verbos como 'dive', 'breach', 'migrate'. Descreva tamanho e comportamento das baleias."
  },
  {
    id: 29,
    palavra_ingles: "dolphin",
    traducao_portugues: "golfinho",
    categoria: "animals",
    frase_exemplo_ingles: "The dolphin jumps high out of the water.",
    frase_exemplo_portugues: "O golfinho pula alto para fora da água.",
    imagem_url: "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg",
    prompt_pratica: "Pratique com 'dolphin': Fale sobre inteligência dos golfinhos. Use verbos como 'jump', 'swim', 'play'. Descreva comunicação entre golfinhos."
  },
  {
    id: 30,
    palavra_ingles: "shark",
    traducao_portugues: "tubarão",
    categoria: "animals",
    frase_exemplo_ingles: "The shark swims powerfully through deep waters.",
    frase_exemplo_portugues: "O tubarão nada poderosamente pelas águas profundas.",
    imagem_url: "https://images.pexels.com/photos/544551/pexels-photo-544551.jpeg",
    prompt_pratica: "Pratique com 'shark': Fale sobre diferentes tipos de tubarões. Use adjetivos como 'dangerous', 'powerful', 'fast'. Descreva características dos tubarões."
  },
  {
    id: 31,
    palavra_ingles: "octopus",
    traducao_portugues: "polvo",
    categoria: "animals",
    frase_exemplo_ingles: "The octopus changes color to hide from predators.",
    frase_exemplo_portugues: "O polvo muda de cor para se esconder dos predadores.",
    imagem_url: "https://images.pexels.com/photos/3046639/pexels-photo-3046639.jpeg",
    prompt_pratica: "Pratique com 'octopus': Fale sobre tentáculos, inteligência dos polvos. Use verbos como 'camouflage', 'squeeze', 'grab'. Descreva habilidades únicas."
  },
  {
    id: 32,
    palavra_ingles: "crab",
    traducao_portugues: "caranguejo",
    categoria: "animals",
    frase_exemplo_ingles: "The crab scuttles sideways across the beach.",
    frase_exemplo_portugues: "O caranguejo corre de lado pela praia.",
    imagem_url: "https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg",
    prompt_pratica: "Pratique com 'crab': Use verbos como 'scuttle', 'pinch', 'hide'. Fale sobre caranguejos na praia e no mar. Descreva garras e caranguejos."
  },
  {
    id: 33,
    palavra_ingles: "lobster",
    traducao_portugues: "lagosta",
    categoria: "animals",
    frase_exemplo_ingles: "The lobster hides under rocks on the ocean floor.",
    frase_exemplo_portugues: "A lagosta se esconde sob rochas no fundo do oceano.",
    imagem_url: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg",
    prompt_pratica: "Pratique com 'lobster': Fale sobre lagostas como comida e animal marinho. Use verbos como 'crawl', 'molt', 'catch'. Compare lagosta e caranguejo."
  },
  {
    id: 34,
    palavra_ingles: "penguin",
    traducao_portugues: "pinguim",
    categoria: "animals",
    frase_exemplo_ingles: "The penguin waddles across the icy ground.",
    frase_exemplo_portugues: "O pinguim caminha desajeitadamente pelo chão gelado.",
    imagem_url: "https://images.pexels.com/photos/86405/penguin-funny-blue-water-86405.jpeg",
    prompt_pratica: "Pratique com 'penguin': Fale sobre vida na Antártica. Use verbos como 'waddle', 'swim', 'huddle'. Descreva comportamento social dos pinguins."
  },
  {
    id: 35,
    palavra_ingles: "eagle",
    traducao_portugues: "águia",
    categoria: "animals",
    frase_exemplo_ingles: "The eagle soars high above the mountains.",
    frase_exemplo_portugues: "A águia voa alto acima das montanhas.",
    imagem_url: "https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg",
    prompt_pratica: "Pratique com 'eagle': Use verbos como 'soar', 'hunt', 'dive'. Fale sobre águias como símbolos. Use expressões como 'eagle eye'."
  },
  {
    id: 36,
    palavra_ingles: "owl",
    traducao_portugues: "coruja",
    categoria: "animals",
    frase_exemplo_ingles: "The owl hoots softly in the dark forest.",
    frase_exemplo_portugues: "A coruja pia suavemente na floresta escura.",
    imagem_url: "https://images.pexels.com/photos/86596/owl-bird-eyes-eagle-owl-86596.jpeg",
    prompt_pratica: "Pratique com 'owl': Fale sobre hábitos noturnos das corujas. Use verbos como 'hoot', 'hunt', 'perch'. Descreva visão e audição das corujas."
  },
  {
    id: 37,
    palavra_ingles: "parrot",
    traducao_portugues: "papagaio",
    categoria: "animals",
    frase_exemplo_ingles: "The colorful parrot repeats words clearly.",
    frase_exemplo_portugues: "O papagaio colorido repete palavras claramente.",
    imagem_url: "https://images.pexels.com/photos/56733/pexels-photo-56733.jpeg",
    prompt_pratica: "Pratique com 'parrot': Fale sobre capacidade de imitar sons. Use verbos como 'repeat', 'mimic', 'squawk'. Descreva cores e inteligência dos papagaios."
  },
  {
    id: 38,
    palavra_ingles: "peacock",
    traducao_portugues: "pavão",
    categoria: "animals",
    frase_exemplo_ingles: "The peacock displays its magnificent tail feathers.",
    frase_exemplo_portugues: "O pavão exibe suas magníficas penas da cauda.",
    imagem_url: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    prompt_pratica: "Pratique com 'peacock': Fale sobre plumagem colorida. Use verbos como 'display', 'strut', 'show off'. Compare pavão macho e fêmea (peahen)."
  },
  {
    id: 39,
    palavra_ingles: "swan",
    traducao_portugues: "cisne",
    categoria: "animals",
    frase_exemplo_ingles: "The elegant swan glides across the lake.",
    frase_exemplo_portugues: "O cisne elegante desliza pelo lago.",
    imagem_url: "https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg",
    prompt_pratica: "Pratique com 'swan': Use adjetivos como 'elegant', 'graceful', 'white'. Fale sobre cisnes em lagos. Use expressões como 'swan song'."
  },
  {
    id: 40,
    palavra_ingles: "flamingo",
    traducao_portugues: "flamingo",
    categoria: "animals",
    frase_exemplo_ingles: "The pink flamingo stands on one leg.",
    frase_exemplo_portugues: "O flamingo rosa fica em pé numa perna só.",
    imagem_url: "https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg",
    prompt_pratica: "Pratique com 'flamingo': Fale sobre cor rosa, habitat. Use verbos como 'wade', 'filter', 'flock'. Descreva comportamento único dos flamingos."
  },
  {
    id: 41,
    palavra_ingles: "kangaroo",
    traducao_portugues: "canguru",
    categoria: "animals",
    frase_exemplo_ingles: "The kangaroo hops across the Australian outback.",
    frase_exemplo_portugues: "O canguru pula pelo interior australiano.",
    imagem_url: "https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg",
    prompt_pratica: "Pratique com 'kangaroo': Fale sobre marsupiais, Austrália. Use verbos como 'hop', 'box', 'carry'. Descreva bolsa marsupial e filhotes."
  },
  {
    id: 42,
    palavra_ingles: "koala",
    traducao_portugues: "coala",
    categoria: "animals",
    frase_exemplo_ingles: "The sleepy koala clings to the eucalyptus tree.",
    frase_exemplo_portugues: "O coala sonolento se agarra à árvore de eucalipto.",
    imagem_url: "https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg",
    prompt_pratica: "Pratique com 'koala': Fale sobre eucalipto, sono. Use verbos como 'cling', 'sleep', 'climb'. Descreva habitat e dieta dos coalas."
  },
  {
    id: 43,
    palavra_ingles: "panda",
    traducao_portugues: "panda",
    categoria: "animals",
    frase_exemplo_ingles: "The giant panda munches on bamboo shoots.",
    frase_exemplo_portugues: "O panda gigante mastiga brotos de bambu.",
    imagem_url: "https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg",
    prompt_pratica: "Pratique com 'panda': Fale sobre bambu, conservação. Use verbos como 'munch', 'roll', 'climb'. Descreva características únicas dos pandas."
  },
  {
    id: 44,
    palavra_ingles: "giraffe",
    traducao_portugues: "girafa",
    categoria: "animals",
    frase_exemplo_ingles: "The tall giraffe reaches leaves on high branches.",
    frase_exemplo_portugues: "A girafa alta alcança folhas nos galhos altos.",
    imagem_url: "https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg",
    prompt_pratica: "Pratique com 'giraffe': Fale sobre altura, pescoço longo. Use verbos como 'reach', 'stretch', 'bend'. Descreva padrões das manchas."
  },
  {
    id: 45,
    palavra_ingles: "zebra",
    traducao_portugues: "zebra",
    categoria: "animals",
    frase_exemplo_ingles: "The zebra's black and white stripes are unique.",
    frase_exemplo_portugues: "As listras pretas e brancas da zebra são únicas.",
    imagem_url: "https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg",
    prompt_pratica: "Pratique com 'zebra': Fale sobre listras, savana africana. Use adjetivos como 'striped', 'wild', 'fast'. Compare zebras e cavalos."
  },
  {
    id: 46,
    palavra_ingles: "hippo",
    traducao_portugues: "hipopótamo",
    categoria: "animals",
    frase_exemplo_ingles: "The huge hippo wallows in the muddy river.",
    frase_exemplo_portugues: "O hipopótamo enorme se revolve no rio lamacento.",
    imagem_url: "https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg",
    prompt_pratica: "Pratique com 'hippo': Use 'hippo' como forma abreviada de 'hippopotamus'. Fale sobre rios africanos. Use verbos como 'wallow', 'submerge'."
  },
  {
    id: 47,
    palavra_ingles: "rhino",
    traducao_portugues: "rinoceronte",
    categoria: "animals",
    frase_exemplo_ingles: "The powerful rhino charges through the grassland.",
    frase_exemplo_portugues: "O rinoceronte poderoso avança pela pastagem.",
    imagem_url: "https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg",
    prompt_pratica: "Pratique com 'rhino': Use 'rhino' como abreviação. Fale sobre chifres, conservação. Use verbos como 'charge', 'graze', 'protect'."
  },
  {
    id: 48,
    palavra_ingles: "camel",
    traducao_portugues: "camelo",
    categoria: "animals",
    frase_exemplo_ingles: "The camel walks steadily across the desert sand.",
    frase_exemplo_portugues: "O camelo caminha firmemente pela areia do deserto.",
    imagem_url: "https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg",
    prompt_pratica: "Pratique com 'camel': Fale sobre deserto, corcova. Use verbos como 'trek', 'carry', 'survive'. Descreva adaptações ao deserto."
  },
  {
    id: 49,
    palavra_ingles: "llama",
    traducao_portugues: "lhama",
    categoria: "animals",
    frase_exemplo_ingles: "The fluffy llama grazes on mountain slopes.",
    frase_exemplo_portugues: "A lhama fofa pasta nas encostas da montanha.",
    imagem_url: "https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg",
    prompt_pratica: "Pratique com 'llama': Fale sobre Andes, lã. Use adjetivos como 'fluffy', 'gentle', 'sure-footed'. Compare lhama e alpaca."
  },
  {
    id: 50,
    palavra_ingles: "donkey",
    traducao_portugues: "burro",
    categoria: "animals",
    frase_exemplo_ingles: "The hardworking donkey carries heavy loads.",
    frase_exemplo_portugues: "O burro trabalhador carrega cargas pesadas.",
    imagem_url: "https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg",
    prompt_pratica: "Pratique com 'donkey': Fale sobre trabalho, fazendas. Use verbos como 'carry', 'bray', 'plod'. Use expressões idiomáticas com 'donkey'."
  },

  // FOOD (50 words)
  {
    id: 51,
    palavra_ingles: "apple",
    traducao_portugues: "maçã",
    categoria: "food",
    frase_exemplo_ingles: "I eat a red apple for breakfast every day.",
    frase_exemplo_portugues: "Eu como uma maçã vermelha no café da manhã todos os dias.",
    imagem_url: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    prompt_pratica: "Pratique com 'apple': Use diferentes cores de maçãs (red, green, yellow). Fale sobre pratos com maçã (apple pie, apple juice). Use expressões como 'an apple a day keeps the doctor away'."
  },
  {
    id: 52,
    palavra_ingles: "banana",
    traducao_portugues: "banana",
    categoria: "food",
    frase_exemplo_ingles: "The monkey loves to eat ripe bananas.",
    frase_exemplo_portugues: "O macaco adora comer bananas maduras.",
    imagem_url: "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg",
    prompt_pratica: "Pratique com 'banana': Fale sobre vitaminas, potássio. Use adjetivos como 'ripe', 'yellow', 'sweet'. Crie frases sobre smoothies e vitaminas."
  },
  {
    id: 53,
    palavra_ingles: "orange",
    traducao_portugues: "laranja",
    categoria: "food",
    frase_exemplo_ingles: "Fresh orange juice is full of vitamin C.",
    frase_exemplo_portugues: "Suco de laranja fresco é cheio de vitamina C.",
    imagem_url: "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg",
    prompt_pratica: "Pratique com 'orange': Note que 'orange' é cor e fruta. Fale sobre suco, vitamina C. Use em receitas e descrições de sabor."
  },
  {
    id: 54,
    palavra_ingles: "grape",
    traducao_portugues: "uva",
    categoria: "food",
    frase_exemplo_ingles: "Purple grapes grow in large clusters on vines.",
    frase_exemplo_portugues: "Uvas roxas crescem em grandes cachos nas videiras.",
    imagem_url: "https://images.pexels.com/photos/23042/pexels-photo-23042.jpg",
    prompt_pratica: "Pratique com 'grape': Fale sobre vinhos, vinhedos. Use 'grapes' sempre no plural quando se refere à fruta. Descreva diferentes tipos de uva."
  },
  {
    id: 55,
    palavra_ingles: "strawberry",
    traducao_portugues: "morango",
    categoria: "food",
    frase_exemplo_ingles: "Sweet strawberries are perfect for desserts.",
    frase_exemplo_portugues: "Morangos doces são perfeitos para sobremesas.",
    imagem_url: "https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg",
    prompt_pratica: "Pratique com 'strawberry': Fale sobre sobremesas, vitaminas. Use adjetivos como 'sweet', 'juicy', 'red'. Crie receitas com morangos."
  },
  {
    id: 56,
    palavra_ingles: "watermelon",
    traducao_portugues: "melancia",
    categoria: "food",
    frase_exemplo_ingles: "Cold watermelon is refreshing on hot summer days.",
    frase_exemplo_portugues: "Melancia gelada é refrescante em dias quentes de verão.",
    imagem_url: "https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg",
    prompt_pratica: "Pratique com 'watermelon': Fale sobre verão, hidratação. Use adjetivos como 'juicy', 'refreshing', 'sweet'. Descreva sementes e polpa."
  },
  {
    id: 57,
    palavra_ingles: "pineapple",
    traducao_portugues: "abacaxi",
    categoria: "food",
    frase_exemplo_ingles: "Tropical pineapple adds sweetness to fruit salads.",
    frase_exemplo_portugues: "Abacaxi tropical adiciona doçura às saladas de frutas.",
    imagem_url: "https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg",
    prompt_pratica: "Pratique com 'pineapple': Fale sobre frutas tropicais, enzimas. Use em receitas de pizza, sucos. Descreva textura e sabor únicos."
  },
  {
    id: 58,
    palavra_ingles: "mango",
    traducao_portugues: "manga",
    categoria: "food",
    frase_exemplo_ingles: "Ripe mango has a sweet, tropical flavor.",
    frase_exemplo_portugues: "Manga madura tem um sabor doce e tropical.",
    imagem_url: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg",
    prompt_pratica: "Pratique com 'mango': Fale sobre frutas tropicais, vitaminas. Use adjetivos como 'sweet', 'juicy', 'tropical'. Descreva textura cremosa."
  },
  {
    id: 59,
    palavra_ingles: "lemon",
    traducao_portugues: "limão",
    categoria: "food",
    frase_exemplo_ingles: "Sour lemon juice makes the fish taste better.",
    frase_exemplo_portugues: "Suco de limão azedo faz o peixe ficar mais saboroso.",
    imagem_url: "https://images.pexels.com/photos/1414130/pexels-photo-1414130.jpeg",
    prompt_pratica: "Pratique com 'lemon': Fale sobre acidez, vitamina C. Use em receitas, temperos. Compare 'lemon' (amarelo) e 'lime' (verde)."
  },
  {
    id: 60,
    palavra_ingles: "cherry",
    traducao_portugues: "cereja",
    categoria: "food",
    frase_exemplo_ingles: "Red cherries are delicious in pies and cakes.",
    frase_exemplo_portugues: "Cerejas vermelhas são deliciosas em tortas e bolos.",
    imagem_url: "https://images.pexels.com/photos/162689/cherry-pair-fruits-sweet-162689.jpeg",
    prompt_pratica: "Pratique com 'cherry': Fale sobre sobremesas, antioxidantes. Use expressões como 'cherry on top'. Descreva diferentes variedades de cereja."
  },
  {
    id: 61,
    palavra_ingles: "peach",
    traducao_portugues: "pêssego",
    categoria: "food",
    frase_exemplo_ingles: "Soft peaches are perfect for summer smoothies.",
    frase_exemplo_portugues: "Pêssegos macios são perfeitos para vitaminas de verão.",
    imagem_url: "https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg",
    prompt_pratica: "Pratique com 'peach': Fale sobre textura macia, sabor doce. Use adjetivos como 'soft', 'fuzzy', 'sweet'. Compare com nectarina."
  },
  {
    id: 62,
    palavra_ingles: "pear",
    traducao_portugues: "pera",
    categoria: "food",
    frase_exemplo_ingles: "Juicy pears are excellent for healthy snacks.",
    frase_exemplo_portugues: "Peras suculentas são excelentes para lanches saudáveis.",
    imagem_url: "https://images.pexels.com/photos/568471/pexels-photo-568471.jpeg",
    prompt_pratica: "Pratique com 'pear': Fale sobre formato único, fibras. Use adjetivos como 'juicy', 'sweet', 'crisp'. Compare diferentes variedades."
  },
  {
    id: 63,
    palavra_ingles: "coconut",
    traducao_portugues: "coco",
    categoria: "food",
    frase_exemplo_ingles: "Fresh coconut water is naturally hydrating.",
    frase_exemplo_portugues: "Água de coco fresca é naturalmente hidratante.",
    imagem_url: "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg",
    prompt_pratica: "Pratique com 'coconut': Fale sobre água de coco, óleo de coco. Use em receitas tropicais. Descreva casca dura e polpa branca."
  },
  {
    id: 64,
    palavra_ingles: "avocado",
    traducao_portugues: "abacate",
    categoria: "food",
    frase_exemplo_ingles: "Creamy avocado is rich in healthy fats.",
    frase_exemplo_portugues: "Abacate cremoso é rico em gorduras saudáveis.",
    imagem_url: "https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg",
    prompt_pratica: "Pratique com 'avocado': Fale sobre gorduras boas, guacamole. Use adjetivos como 'creamy', 'nutritious', 'green'. Descreva usos culinários."
  },
  {
    id: 65,
    palavra_ingles: "tomato",
    traducao_portugues: "tomate",
    categoria: "food",
    frase_exemplo_ingles: "Fresh tomatoes make the salad more colorful.",
    frase_exemplo_portugues: "Tomates frescos deixam a salada mais colorida.",
    imagem_url: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg",
    prompt_pratica: "Pratique com 'tomato': Note que botanicamente é fruta, culinariamente é vegetal. Fale sobre molhos, saladas. Use em receitas italianas."
  },
  {
    id: 66,
    palavra_ingles: "potato",
    traducao_portugues: "batata",
    categoria: "food",
    frase_exemplo_ingles: "Baked potatoes are a healthy side dish.",
    frase_exemplo_portugues: "Batatas assadas são um acompanhamento saudável.",
    imagem_url: "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg",
    prompt_pratica: "Pratique com 'potato': Fale sobre diferentes preparos (mashed, baked, fried). Use 'potatoes' no plural. Descreva importância nutricional."
  },
  {
    id: 67,
    palavra_ingles: "carrot",
    traducao_portugues: "cenoura",
    categoria: "food",
    frase_exemplo_ingles: "Orange carrots are good for your eyesight.",
    frase_exemplo_portugues: "Cenouras laranja são boas para a visão.",
    imagem_url: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg",
    prompt_pratica: "Pratique com 'carrot': Fale sobre vitamina A, beta-caroteno. Use expressões como 'carrot and stick'. Descreva cor laranja característica."
  },
  {
    id: 68,
    palavra_ingles: "onion",
    traducao_portugues: "cebola",
    categoria: "food",
    frase_exemplo_ingles: "Chopping onions always makes me cry.",
    frase_exemplo_portugues: "Cortar cebolas sempre me faz chorar.",
    imagem_url: "https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg",
    prompt_pratica: "Pratique com 'onion': Fale sobre chorar ao cortar, sabor forte. Use em receitas básicas. Descreva diferentes tipos (red, white, yellow)."
  },
  {
    id: 69,
    palavra_ingles: "garlic",
    traducao_portugues: "alho",
    categoria: "food",
    frase_exemplo_ingles: "Fresh garlic adds strong flavor to pasta.",
    frase_exemplo_portugues: "Alho fresco adiciona sabor forte à massa.",
    imagem_url: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg",
    prompt_pratica: "Pratique com 'garlic': Fale sobre tempero, propriedades medicinais. Use 'clove of garlic' para dente de alho. Descreva aroma característico."
  },
  {
    id: 70,
    palavra_ingles: "pepper",
    traducao_portugues: "pimentão",
    categoria: "food",
    frase_exemplo_ingles: "Colorful bell peppers brighten up any dish.",
    frase_exemplo_portugues: "Pimentões coloridos alegram qualquer prato.",
    imagem_url: "https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg",
    prompt_pratica: "Pratique com 'pepper': Diferencie 'bell pepper' (pimentão) de 'black pepper' (pimenta). Fale sobre cores diferentes. Use em saladas e refogados."
  },
  {
    id: 71,
    palavra_ingles: "lettuce",
    traducao_portugues: "alface",
    categoria: "food",
    frase_exemplo_ingles: "Crisp lettuce is the base of most salads.",
    frase_exemplo_portugues: "Alface crocante é a base da maioria das saladas.",
    imagem_url: "https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg",
    prompt_pratica: "Pratique com 'lettuce': Fale sobre saladas, folhas verdes. Use adjetivos como 'crisp', 'fresh', 'green'. Descreva diferentes tipos de alface."
  },
  {
    id: 72,
    palavra_ingles: "cucumber",
    traducao_portugues: "pepino",
    categoria: "food",
    frase_exemplo_ingles: "Cool cucumber slices are refreshing in summer.",
    frase_exemplo_portugues: "Fatias de pepino gelado são refrescantes no verão.",
    imagem_url: "https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg",
    prompt_pratica: "Pratique com 'cucumber': Fale sobre hidratação, saladas. Use expressões como 'cool as a cucumber'. Descreva textura crocante e sabor suave."
  },
  {
    id: 73,
    palavra_ingles: "broccoli",
    traducao_portugues: "brócolis",
    categoria: "food",
    frase_exemplo_ingles: "Green broccoli is packed with vitamins.",
    frase_exemplo_portugues: "Brócolis verde é cheio de vitaminas.",
    imagem_url: "https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg",
    prompt_pratica: "Pratique com 'broccoli': Fale sobre vegetais verdes, nutrição. Use diferentes formas de preparo (steamed, roasted). Descreva formato de árvore pequena."
  },
  {
    id: 74,
    palavra_ingles: "spinach",
    traducao_portugues: "espinafre",
    categoria: "food",
    frase_exemplo_ingles: "Fresh spinach leaves are great in smoothies.",
    frase_exemplo_portugues: "Folhas de espinafre fresco são ótimas em vitaminas.",
    imagem_url: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg",
    prompt_pratica: "Pratique com 'spinach': Fale sobre ferro, folhas verdes. Use em saladas, vitaminas. Reference Popeye e força do espinafre."
  },
  {
    id: 75,
    palavra_ingles: "corn",
    traducao_portugues: "milho",
    categoria: "food",
    frase_exemplo_ingles: "Sweet corn on the cob is a summer favorite.",
    frase_exemplo_portugues: "Milho doce na espiga é um favorito do verão.",
    imagem_url: "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg",
    prompt_pratica: "Pratique com 'corn': Fale sobre 'corn on the cob', popcorn. Use diferentes preparos. Descreva grãos amarelos e doçura natural."
  },
  {
    id: 76,
    palavra_ingles: "rice",
    traducao_portugues: "arroz",
    categoria: "food",
    frase_exemplo_ingles: "White rice is a staple food in many countries.",
    frase_exemplo_portugues: "Arroz branco é um alimento básico em muitos países.",
    imagem_url: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg",
    prompt_pratica: "Pratique com 'rice': Fale sobre diferentes tipos (white, brown, wild). Use como acompanhamento. Descreva importância cultural mundial."
  },
  {
    id: 77,
    palavra_ingles: "bread",
    traducao_portugues: "pão",
    categoria: "food",
    frase_exemplo_ingles: "Fresh bread smells wonderful in the morning.",
    frase_exemplo_portugues: "Pão fresco tem um cheiro maravilhoso pela manhã.",
    imagem_url: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg",
    prompt_pratica: "Pratique com 'bread': Fale sobre diferentes tipos (white, whole wheat, sourdough). Use expressões como 'daily bread'. Descreva textura e aroma."
  },
  {
    id: 78,
    palavra_ingles: "cheese",
    traducao_portugues: "queijo",
    categoria: "food",
    frase_exemplo_ingles: "Aged cheese has a strong, complex flavor.",
    frase_exemplo_portugues: "Queijo envelhecido tem um sabor forte e complexo.",
    imagem_url: "https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg",
    prompt_pratica: "Pratique com 'cheese': Fale sobre diferentes tipos (cheddar, mozzarella, brie). Use em sanduíches, pizzas. Descreva processo de envelhecimento."
  },
  {
    id: 79,
    palavra_ingles: "milk",
    traducao_portugues: "leite",
    categoria: "food",
    frase_exemplo_ingles: "Cold milk is perfect with chocolate cookies.",
    frase_exemplo_portugues: "Leite gelado é perfeito com biscoitos de chocolate.",
    imagem_url: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg",
    prompt_pratica: "Pratique com 'milk': Fale sobre diferentes tipos (whole, skim, almond). Use expressões como 'spilled milk'. Descreva importância nutricional."
  },
  {
    id: 80,
    palavra_ingles: "egg",
    traducao_portugues: "ovo",
    categoria: "food",
    frase_exemplo_ingles: "Scrambled eggs are easy to make for breakfast.",
    frase_exemplo_portugues: "Ovos mexidos são fáceis de fazer no café da manhã.",
    imagem_url: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg",
    prompt_pratica: "Pratique com 'egg': Fale sobre diferentes preparos (fried, boiled, scrambled). Use em receitas de bolo. Descreva proteína completa."
  },
  {
    id: 81,
    palavra_ingles: "chicken",
    traducao_portugues: "frango",
    categoria: "food",
    frase_exemplo_ingles: "Grilled chicken breast is a healthy protein choice.",
    frase_exemplo_portugues: "Peito de frango grelhado é uma escolha saudável de proteína.",
    imagem_url: "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg",
    prompt_pratica: "Pratique com 'chicken': Fale sobre diferentes cortes e preparos. Use como proteína magra. Compare 'chicken' (comida) com 'chicken' (animal)."
  },
  {
    id: 82,
    palavra_ingles: "beef",
    traducao_portugues: "carne bovina",
    categoria: "food",
    frase_exemplo_ingles: "Tender beef steak is perfect for special dinners.",
    frase_exemplo_portugues: "Bife de carne macia é perfeito para jantares especiais.",
    imagem_url: "https://images.pexels.com/photos/361184/asparagus-steak-veal-chop-361184.jpeg",
    prompt_pratica: "Pratique com 'beef': Fale sobre diferentes cortes (steak, ground beef). Use diferentes pontos de cozimento. Descreva sabor rico da carne."
  },
  {
    id: 83,
    palavra_ingles: "pork",
    traducao_portugues: "carne suína",
    categoria: "food",
    frase_exemplo_ingles: "Roasted pork with herbs tastes delicious.",
    frase_exemplo_portugues: "Carne suína assada com ervas fica deliciosa.",
    imagem_url: "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg",
    prompt_pratica: "Pratique com 'pork': Fale sobre diferentes cortes (chops, bacon, ham). Use temperos e marinadas. Descreva diferentes preparos."
  },
  {
    id: 84,
    palavra_ingles: "fish",
    traducao_portugues: "peixe",
    categoria: "food",
    frase_exemplo_ingles: "Fresh fish provides healthy omega-3 fatty acids.",
    frase_exemplo_portugues: "Peixe fresco fornece ácidos graxos ômega-3 saudáveis.",
    imagem_url: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg",
    prompt_pratica: "Pratique com 'fish': Fale sobre diferentes tipos (salmon, tuna, cod). Use métodos de preparo (grilled, baked). Descreva benefícios para saúde."
  },
  {
    id: 85,
    palavra_ingles: "shrimp",
    traducao_portugues: "camarão",
    categoria: "food",
    frase_exemplo_ingles: "Grilled shrimp with garlic is a tasty appetizer.",
    frase_exemplo_portugues: "Camarão grelhado com alho é um aperitivo saboroso.",
    imagem_url: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg",
    prompt_pratica: "Pratique com 'shrimp': Fale sobre frutos do mar, diferentes preparos. Use em saladas, massas. Descreva textura delicada e sabor suave."
  },
  {
    id: 86,
    palavra_ingles: "pasta",
    traducao_portugues: "massa",
    categoria: "food",
    frase_exemplo_ingles: "Italian pasta with tomato sauce is always satisfying.",
    frase_exemplo_portugues: "Massa italiana com molho de tomate é sempre satisfatória.",
    imagem_url: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    prompt_pratica: "Pratique com 'pasta': Fale sobre diferentes formatos (spaghetti, penne, fusilli). Use diferentes molhos. Descreva tradição italiana."
  },
  {
    id: 87,
    palavra_ingles: "pizza",
    traducao_portugues: "pizza",
    categoria: "food",
    frase_exemplo_ingles: "Hot pizza with melted cheese is irresistible.",
    frase_exemplo_portugues: "Pizza quente com queijo derretido é irresistível.",
    imagem_url: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
    prompt_pratica: "Pratique com 'pizza': Fale sobre diferentes coberturas (toppings). Use 'slice of pizza'. Descreva massa crocante e queijo derretido."
  },
  {
    id: 88,
    palavra_ingles: "sandwich",
    traducao_portugues: "sanduíche",
    categoria: "food",
    frase_exemplo_ingles: "A turkey sandwich makes a quick, healthy lunch.",
    frase_exemplo_portugues: "Um sanduíche de peru faz um almoço rápido e saudável.",
    imagem_url: "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg",
    prompt_pratica: "Pratique com 'sandwich': Fale sobre diferentes recheios, tipos de pão. Use como refeição rápida. Descreva camadas de ingredientes."
  },
  {
    id: 89,
    palavra_ingles: "soup",
    traducao_portugues: "sopa",
    categoria: "food",
    frase_exemplo_ingles: "Warm chicken soup is comforting on cold days.",
    frase_exemplo_portugues: "Sopa de frango quente é reconfortante em dias frios.",
    imagem_url: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg",
    prompt_pratica: "Pratique com 'soup': Fale sobre diferentes tipos (chicken, vegetable, tomato). Use como entrada ou prato principal. Descreva calor reconfortante."
  },
  {
    id: 90,
    palavra_ingles: "salad",
    traducao_portugues: "salada",
    categoria: "food",
    frase_exemplo_ingles: "Fresh green salad is perfect for a light meal.",
    frase_exemplo_portugues: "Salada verde fresca é perfeita para uma refeição leve.",
    imagem_url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    prompt_pratica: "Pratique com 'salad': Fale sobre diferentes ingredientes, molhos (dressing). Use como acompanhamento ou prato principal. Descreva frescor e cores."
  },
  {
    id: 91,
    palavra_ingles: "cake",
    traducao_portugues: "bolo",
    categoria: "food",
    frase_exemplo_ingles: "Chocolate cake is my favorite birthday dessert.",
    frase_exemplo_portugues: "Bolo de chocolate é minha sobremesa favorita de aniversário.",
    imagem_url: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
    prompt_pratica: "Pratique com 'cake': Fale sobre diferentes sabores, ocasiões especiais. Use expressões como 'piece of cake'. Descreva textura fofa e doçura."
  },
  {
    id: 92,
    palavra_ingles: "cookie",
    traducao_portugues: "biscoito",
    categoria: "food",
    frase_exemplo_ingles: "Homemade cookies smell amazing when baking.",
    frase_exemplo_portugues: "Biscoitos caseiros têm um cheiro incrível quando estão assando.",
    imagem_url: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg",
    prompt_pratica: "Pratique com 'cookie': Fale sobre diferentes tipos (chocolate chip, oatmeal). Use em lanches, sobremesas. Descreva textura crocante ou macia."
  },
  {
    id: 93,
    palavra_ingles: "ice cream",
    traducao_portugues: "sorvete",
    categoria: "food",
    frase_exemplo_ingles: "Cold ice cream is the perfect summer treat.",
    frase_exemplo_portugues: "Sorvete gelado é a sobremesa perfeita do verão.",
    imagem_url: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg",
    prompt_pratica: "Pratique com 'ice cream': Fale sobre diferentes sabores, coberturas. Use como sobremesa refrescante. Descreva textura cremosa e fria."
  },
  {
    id: 94,
    palavra_ingles: "chocolate",
    traducao_portugues: "chocolate",
    categoria: "food",
    frase_exemplo_ingles: "Dark chocolate has many health benefits.",
    frase_exemplo_portugues: "Chocolate amargo tem muitos benefícios para a saúde.",
    imagem_url: "https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg",
    prompt_pratica: "Pratique com 'chocolate': Fale sobre diferentes tipos (dark, milk, white). Use em sobremesas, bebidas. Descreva sabor rico e indulgente."
  },
  {
    id: 95,
    palavra_ingles: "candy",
    traducao_portugues: "doce",
    categoria: "food",
    frase_exemplo_ingles: "Colorful candy brings joy to children's faces.",
    frase_exemplo_portugues: "Doces coloridos trazem alegria aos rostos das crianças.",
    imagem_url: "https://images.pexels.com/photos/33162/candy-sweetmeats-colorful-color.jpeg",
    prompt_pratica: "Pratique com 'candy': Fale sobre diferentes tipos, ocasiões especiais. Use como guloseima ocasional. Descreva cores vibrantes e doçura."
  },
  {
    id: 96,
    palavra_ingles: "honey",
    traducao_portugues: "mel",
    categoria: "food",
    frase_exemplo_ingles: "Natural honey is a healthy alternative to sugar.",
    frase_exemplo_portugues: "Mel natural é uma alternativa saudável ao açúcar.",
    imagem_url: "https://images.pexels.com/photos/33162/honey-sweet-syrup-organic.jpeg",
    prompt_pratica: "Pratique com 'honey': Fale sobre abelhas, propriedades naturais. Use como adoçante natural. Descreva textura viscosa e sabor floral."
  },
  {
    id: 97,
    palavra_ingles: "coffee",
    traducao_portugues: "café",
    categoria: "food",
    frase_exemplo_ingles: "Hot coffee helps me wake up in the morning.",
    frase_exemplo_portugues: "Café quente me ajuda a acordar pela manhã.",
    imagem_url: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
    prompt_pratica: "Pratique com 'coffee': Fale sobre diferentes preparos (espresso, latte, cappuccino). Use como bebida energizante. Descreva aroma e sabor."
  },
  {
    id: 98,
    palavra_ingles: "tea",
    traducao_portugues: "chá",
    categoria: "food",
    frase_exemplo_ingles: "Herbal tea is relaxing before bedtime.",
    frase_exemplo_portugues: "Chá de ervas é relaxante antes de dormir.",
    imagem_url: "https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg",
    prompt_pratica: "Pratique com 'tea': Fale sobre diferentes tipos (green, black, herbal). Use em diferentes momentos do dia. Descreva propriedades calmantes."
  },
  {
    id: 99,
    palavra_ingles: "water",
    traducao_portugues: "água",
    categoria: "food",
    frase_exemplo_ingles: "Clean water is essential for good health.",
    frase_exemplo_portugues: "Água limpa é essencial para uma boa saúde.",
    imagem_url: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg",
    prompt_pratica: "Pratique com 'water': Fale sobre hidratação, importância vital. Use diferentes tipos (tap, bottled, sparkling). Descreva pureza e transparência."
  },
  {
    id: 100,
    palavra_ingles: "juice",
    traducao_portugues: "suco",
    categoria: "food",
    frase_exemplo_ingles: "Fresh orange juice provides vitamin C.",
    frase_exemplo_portugues: "Suco de laranja fresco fornece vitamina C.",
    imagem_url: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg",
    prompt_pratica: "Pratique com 'juice': Fale sobre diferentes frutas, vitaminas. Use como bebida saudável. Descreva frescor e sabores naturais."
  },

  // HOUSE (50 words)
  {
    id: 101,
    palavra_ingles: "house",
    traducao_portugues: "casa",
    categoria: "house",
    frase_exemplo_ingles: "My house has a beautiful garden in the backyard.",
    frase_exemplo_portugues: "Minha casa tem um jardim bonito no quintal.",
    imagem_url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    prompt_pratica: "Pratique com 'house': Descreva diferentes tipos de casas. Compare 'house' e 'home'. Fale sobre cômodos, jardim, vizinhança."
  },
  {
    id: 102,
    palavra_ingles: "room",
    traducao_portugues: "quarto/cômodo",
    categoria: "house",
    frase_exemplo_ingles: "This room is very bright and spacious.",
    frase_exemplo_portugues: "Este cômodo é muito claro e espaçoso.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'room': Fale sobre diferentes cômodos (bedroom, living room, bathroom). Use adjetivos como 'spacious', 'cozy', 'bright'."
  },
  {
    id: 103,
    palavra_ingles: "kitchen",
    traducao_portugues: "cozinha",
    categoria: "house",
    frase_exemplo_ingles: "The kitchen is the heart of every home.",
    frase_exemplo_portugues: "A cozinha é o coração de toda casa.",
    imagem_url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    prompt_pratica: "Pratique com 'kitchen': Fale sobre eletrodomésticos, utensílios de cozinha. Descreva atividades como cooking, baking, washing dishes."
  },
  {
    id: 104,
    palavra_ingles: "bathroom",
    traducao_portugues: "banheiro",
    categoria: "house",
    frase_exemplo_ingles: "The bathroom has a large mirror and bathtub.",
    frase_exemplo_portugues: "O banheiro tem um espelho grande e banheira.",
    imagem_url: "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg",
    prompt_pratica: "Pratique com 'bathroom': Fale sobre itens do banheiro (toilet, shower, sink). Use atividades como brushing teeth, taking a shower."
  },
  {
    id: 105,
    palavra_ingles: "bedroom",
    traducao_portugues: "quarto de dormir",
    categoria: "house",
    frase_exemplo_ingles: "My bedroom is quiet and comfortable for sleeping.",
    frase_exemplo_portugues: "Meu quarto é silencioso e confortável para dormir.",
    imagem_url: "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg",
    prompt_pratica: "Pratique com 'bedroom': Fale sobre móveis (bed, dresser, closet). Descreva atividades como sleeping, getting dressed, relaxing."
  },
  {
    id: 106,
    palavra_ingles: "living room",
    traducao_portugues: "sala de estar",
    categoria: "house",
    frase_exemplo_ingles: "We watch TV together in the living room.",
    frase_exemplo_portugues: "Assistimos TV juntos na sala de estar.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'living room': Fale sobre móveis (sofa, coffee table, TV). Descreva atividades familiares como watching TV, reading, talking."
  },
  {
    id: 107,
    palavra_ingles: "dining room",
    traducao_portugues: "sala de jantar",
    categoria: "house",
    frase_exemplo_ingles: "The dining room table seats eight people comfortably.",
    frase_exemplo_portugues: "A mesa da sala de jantar acomoda oito pessoas confortavelmente.",
    imagem_url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    prompt_pratica: "Pratique com 'dining room': Fale sobre refeições em família, móveis (table, chairs). Descreva ocasiões especiais e jantares formais."
  },
  {
    id: 108,
    palavra_ingles: "garage",
    traducao_portugues: "garagem",
    categoria: "house",
    frase_exemplo_ingles: "Dad parks his car in the garage every night.",
    frase_exemplo_portugues: "Papai estaciona o carro na garagem toda noite.",
    imagem_url: "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg",
    prompt_pratica: "Pratique com 'garage': Fale sobre carros, ferramentas, armazenamento. Use atividades como parking, fixing cars, storing items."
  },
  {
    id: 109,
    palavra_ingles: "garden",
    traducao_portugues: "jardim",
    categoria: "house",
    frase_exemplo_ingles: "Beautiful flowers bloom in our garden every spring.",
    frase_exemplo_portugues: "Flores bonitas florescem em nosso jardim toda primavera.",
    imagem_url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    prompt_pratica: "Pratique com 'garden': Fale sobre plantas, flores, jardinagem. Use atividades como planting, watering, weeding, harvesting."
  },
  {
    id: 110,
    palavra_ingles: "door",
    traducao_portugues: "porta",
    categoria: "house",
    frase_exemplo_ingles: "Please close the door when you leave the room.",
    frase_exemplo_portugues: "Por favor, feche a porta quando sair do cômodo.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'door': Fale sobre diferentes tipos (front door, back door). Use verbos como open, close, knock, lock, unlock."
  },
  {
    id: 111,
    palavra_ingles: "window",
    traducao_portugues: "janela",
    categoria: "house",
    frase_exemplo_ingles: "Sunlight streams through the large window.",
    frase_exemplo_portugues: "A luz do sol entra pela janela grande.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'window': Fale sobre luz natural, ventilação. Use verbos como open, close, look through. Descreva cortinas e persianas."
  },
  {
    id: 112,
    palavra_ingles: "wall",
    traducao_portugues: "parede",
    categoria: "house",
    frase_exemplo_ingles: "We painted the wall a beautiful shade of blue.",
    frase_exemplo_portugues: "Pintamos a parede de um belo tom de azul.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'wall': Fale sobre decoração, cores, quadros. Use atividades como painting, hanging pictures, leaning against."
  },
  {
    id: 113,
    palavra_ingles: "floor",
    traducao_portugues: "chão",
    categoria: "house",
    frase_exemplo_ingles: "The wooden floor creaks when you walk on it.",
    frase_exemplo_portugues: "O chão de madeira range quando você caminha sobre ele.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'floor': Fale sobre diferentes materiais (wood, tile, carpet). Use atividades como sweeping, mopping, walking on."
  },
  {
    id: 114,
    palavra_ingles: "ceiling",
    traducao_portugues: "teto",
    categoria: "house",
    frase_exemplo_ingles: "The ceiling fan helps cool the room in summer.",
    frase_exemplo_portugues: "O ventilador de teto ajuda a refrescar o cômodo no verão.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'ceiling': Fale sobre altura, ventiladores, lustres. Use expressões como 'hit the ceiling' (ficar furioso)."
  },
  {
    id: 115,
    palavra_ingles: "roof",
    traducao_portugues: "telhado",
    categoria: "house",
    frase_exemplo_ingles: "The red roof protects the house from rain.",
    frase_exemplo_portugues: "O telhado vermelho protege a casa da chuva.",
    imagem_url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    prompt_pratica: "Pratique com 'roof': Fale sobre proteção, materiais (tiles, shingles). Use expressões como 'roof over your head'."
  },
  {
    id: 116,
    palavra_ingles: "stairs",
    traducao_portugues: "escadas",
    categoria: "house",
    frase_exemplo_ingles: "Be careful walking down the steep stairs.",
    frase_exemplo_portugues: "Tenha cuidado ao descer as escadas íngremes.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'stairs': Note que é sempre plural. Use verbos como go up, go down, climb, fall down. Fale sobre corrimão (handrail)."
  },
  {
    id: 117,
    palavra_ingles: "furniture",
    traducao_portugues: "móveis",
    categoria: "house",
    frase_exemplo_ingles: "We bought new furniture for the living room.",
    frase_exemplo_portugues: "Compramos móveis novos para a sala de estar.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'furniture': É substantivo incontável. Fale sobre diferentes peças (chair, table, sofa). Use 'piece of furniture'."
  },
  {
    id: 118,
    palavra_ingles: "chair",
    traducao_portugues: "cadeira",
    categoria: "house",
    frase_exemplo_ingles: "The comfortable chair is perfect for reading.",
    frase_exemplo_portugues: "A cadeira confortável é perfeita para ler.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'chair': Fale sobre diferentes tipos (armchair, office chair). Use verbos como sit, stand up, pull up a chair."
  },
  {
    id: 119,
    palavra_ingles: "table",
    traducao_portugues: "mesa",
    categoria: "house",
    frase_exemplo_ingles: "We eat dinner together at the kitchen table.",
    frase_exemplo_portugues: "Jantamos juntos na mesa da cozinha.",
    imagem_url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    prompt_pratica: "Pratique com 'table': Fale sobre diferentes tipos (dining table, coffee table). Use atividades como setting the table, clearing the table."
  },
  {
    id: 120,
    palavra_ingles: "sofa",
    traducao_portugues: "sofá",
    categoria: "house",
    frase_exemplo_ingles: "The soft sofa is great for watching movies.",
    frase_exemplo_portugues: "O sofá macio é ótimo para assistir filmes.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'sofa': Compare com 'couch'. Fale sobre conforto, relaxamento. Use atividades como lying down, sitting, napping."
  },
  {
    id: 121,
    palavra_ingles: "bed",
    traducao_portugues: "cama",
    categoria: "house",
    frase_exemplo_ingles: "I make my bed every morning after waking up.",
    frase_exemplo_portugues: "Arrumo minha cama toda manhã depois de acordar.",
    imagem_url: "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg",
    prompt_pratica: "Pratique com 'bed': Fale sobre dormir, descansar. Use expressões como 'make the bed', 'go to bed', 'get out of bed'."
  },
  {
    id: 122,
    palavra_ingles: "pillow",
    traducao_portugues: "travesseiro",
    categoria: "house",
    frase_exemplo_ingles: "A soft pillow helps me sleep better at night.",
    frase_exemplo_portugues: "Um travesseiro macio me ajuda a dormir melhor à noite.",
    imagem_url: "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg",
    prompt_pratica: "Pratique com 'pillow': Fale sobre conforto, sono. Use adjetivos como soft, fluffy, comfortable. Descreva diferentes tamanhos."
  },
  {
    id: 123,
    palavra_ingles: "blanket",
    traducao_portugues: "cobertor",
    categoria: "house",
    frase_exemplo_ingles: "The warm blanket keeps me cozy on cold nights.",
    frase_exemplo_portugues: "O cobertor quente me mantém aconchegado em noites frias.",
    imagem_url: "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg",
    prompt_pratica: "Pratique com 'blanket': Fale sobre calor, conforto. Use adjetivos como warm, soft, thick. Compare com 'sheet' e 'comforter'."
  },
  {
    id: 124,
    palavra_ingles: "closet",
    traducao_portugues: "armário",
    categoria: "house",
    frase_exemplo_ingles: "I organize my clothes in the bedroom closet.",
    frase_exemplo_portugues: "Organizo minhas roupas no armário do quarto.",
    imagem_url: "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg",
    prompt_pratica: "Pratique com 'closet': Fale sobre organização, roupas. Use atividades como hanging clothes, organizing, finding clothes."
  },
  {
    id: 125,
    palavra_ingles: "mirror",
    traducao_portugues: "espelho",
    categoria: "house",
    frase_exemplo_ingles: "I check my appearance in the bathroom mirror.",
    frase_exemplo_portugues: "Verifico minha aparência no espelho do banheiro.",
    imagem_url: "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg",
    prompt_pratica: "Pratique com 'mirror': Fale sobre reflexo, aparência. Use atividades como looking in, checking appearance, brushing hair."
  },
  {
    id: 126,
    palavra_ingles: "lamp",
    traducao_portugues: "lâmpada/luminária",
    categoria: "house",
    frase_exemplo_ingles: "The reading lamp provides perfect light for books.",
    frase_exemplo_portugues: "A luminária de leitura fornece luz perfeita para livros.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'lamp': Fale sobre iluminação, diferentes tipos. Use verbos como turn on, turn off, adjust. Compare table lamp e floor lamp."
  },
  {
    id: 127,
    palavra_ingles: "television",
    traducao_portugues: "televisão",
    categoria: "house",
    frase_exemplo_ingles: "We watch the news on television every evening.",
    frase_exemplo_portugues: "Assistimos ao noticiário na televisão toda noite.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'television': Use também 'TV'. Fale sobre programas, canais. Use atividades como watching, changing channels, turning on/off."
  },
  {
    id: 128,
    palavra_ingles: "refrigerator",
    traducao_portugues: "geladeira",
    categoria: "house",
    frase_exemplo_ingles: "Keep the milk cold in the refrigerator.",
    frase_exemplo_portugues: "Mantenha o leite gelado na geladeira.",
    imagem_url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    prompt_pratica: "Pratique com 'refrigerator': Use também 'fridge'. Fale sobre conservar alimentos. Use atividades como storing food, keeping cold."
  },
  {
    id: 129,
    palavra_ingles: "stove",
    traducao_portugues: "fogão",
    categoria: "house",
    frase_exemplo_ingles: "I cook dinner on the gas stove every night.",
    frase_exemplo_portugues: "Cozinho o jantar no fogão a gás toda noite.",
    imagem_url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    prompt_pratica: "Pratique com 'stove': Fale sobre cozinhar, diferentes tipos (gas, electric). Use atividades como cooking, boiling, frying."
  },
  {
    id: 130,
    palavra_ingles: "oven",
    traducao_portugues: "forno",
    categoria: "house",
    frase_exemplo_ingles: "The cake is baking in the hot oven.",
    frase_exemplo_portugues: "O bolo está assando no forno quente.",
    imagem_url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    prompt_pratica: "Pratique com 'oven': Fale sobre assar, diferentes temperaturas. Use atividades como baking, roasting, preheating."
  },
  {
    id: 131,
    palavra_ingles: "microwave",
    traducao_portugues: "micro-ondas",
    categoria: "house",
    frase_exemplo_ingles: "Heat the food quickly in the microwave.",
    frase_exemplo_portugues: "Aqueça a comida rapidamente no micro-ondas.",
    imagem_url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    prompt_pratica: "Pratique com 'microwave': Fale sobre aquecimento rápido, conveniência. Use atividades como heating, defrosting, cooking quickly."
  },
  {
    id: 132,
    palavra_ingles: "dishwasher",
    traducao_portugues: "lava-louças",
    categoria: "house",
    frase_exemplo_ingles: "The dishwasher cleans all the dirty plates.",
    frase_exemplo_portugues: "A lava-louças limpa todos os pratos sujos.",
    imagem_url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    prompt_pratica: "Pratique com 'dishwasher': Fale sobre limpeza automática, economia de tempo. Use atividades como loading, unloading, running a cycle."
  },
  {
    id: 133,
    palavra_ingles: "washing machine",
    traducao_portugues: "máquina de lavar",
    categoria: "house",
    frase_exemplo_ingles: "The washing machine cleans our clothes efficiently.",
    frase_exemplo_portugues: "A máquina de lavar limpa nossas roupas eficientemente.",
    imagem_url: "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg",
    prompt_pratica: "Pratique com 'washing machine': Fale sobre lavar roupas, diferentes ciclos. Use atividades como loading, adding detergent, selecting cycle."
  },
  {
    id: 134,
    palavra_ingles: "dryer",
    traducao_portugues: "secadora",
    categoria: "house",
    frase_exemplo_ingles: "The dryer makes clothes soft and warm.",
    frase_exemplo_portugues: "A secadora deixa as roupas macias e quentes.",
    imagem_url: "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg",
    prompt_pratica: "Pratique com 'dryer': Fale sobre secar roupas, diferentes configurações. Use atividades como drying, removing clothes, cleaning lint."
  },
  {
    id: 135,
    palavra_ingles: "vacuum cleaner",
    traducao_portugues: "aspirador de pó",
    categoria: "house",
    frase_exemplo_ingles: "I use the vacuum cleaner to clean the carpets.",
    frase_exemplo_portugues: "Uso o aspirador de pó para limpar os tapetes.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'vacuum cleaner': Use também 'vacuum' como verbo. Fale sobre limpeza, diferentes superfícies. Use atividades como vacuuming, cleaning."
  },
  {
    id: 136,
    palavra_ingles: "air conditioner",
    traducao_portugues: "ar condicionado",
    categoria: "house",
    frase_exemplo_ingles: "The air conditioner keeps the house cool in summer.",
    frase_exemplo_portugues: "O ar condicionado mantém a casa fresca no verão.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'air conditioner': Use também 'AC'. Fale sobre controle de temperatura, economia de energia. Use atividades como cooling, adjusting temperature."
  },
  {
    id: 137,
    palavra_ingles: "heater",
    traducao_portugues: "aquecedor",
    categoria: "house",
    frase_exemplo_ingles: "The heater warms the room on cold winter days.",
    frase_exemplo_portugues: "O aquecedor esquenta o cômodo em dias frios de inverno.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'heater': Fale sobre aquecimento, diferentes tipos. Use atividades como warming, adjusting temperature, saving energy."
  },
  {
    id: 138,
    palavra_ingles: "fan",
    traducao_portugues: "ventilador",
    categoria: "house",
    frase_exemplo_ingles: "The ceiling fan circulates air throughout the room.",
    frase_exemplo_portugues: "O ventilador de teto circula o ar por todo o cômodo.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'fan': Fale sobre circulação de ar, diferentes tipos (ceiling, table, floor). Use atividades como cooling, circulating air."
  },
  {
    id: 139,
    palavra_ingles: "curtain",
    traducao_portugues: "cortina",
    categoria: "house",
    frase_exemplo_ingles: "Beautiful curtains frame the living room window.",
    frase_exemplo_portugues: "Cortinas bonitas emolduram a janela da sala de estar.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'curtain': Fale sobre decoração, privacidade. Use atividades como opening, closing, hanging. Compare com 'blinds'."
  },
  {
    id: 140,
    palavra_ingles: "carpet",
    traducao_portugues: "tapete",
    categoria: "house",
    frase_exemplo_ingles: "The soft carpet feels comfortable under bare feet.",
    frase_exemplo_portugues: "O tapete macio é confortável sob os pés descalços.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'carpet': Fale sobre conforto, decoração. Use atividades como walking on, vacuuming, cleaning. Compare com 'rug'."
  },
  {
    id: 141,
    palavra_ingles: "painting",
    traducao_portugues: "quadro",
    categoria: "house",
    frase_exemplo_ingles: "The colorful painting brightens up the wall.",
    frase_exemplo_portugues: "O quadro colorido alegra a parede.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'painting': Fale sobre arte, decoração. Use atividades como hanging, admiring, creating. Descreva diferentes estilos artísticos."
  },
  {
    id: 142,
    palavra_ingles: "clock",
    traducao_portugues: "relógio",
    categoria: "house",
    frase_exemplo_ingles: "The wall clock shows the correct time.",
    frase_exemplo_portugues: "O relógio de parede mostra a hora certa.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'clock': Fale sobre tempo, diferentes tipos. Use atividades como checking time, setting alarm, winding up."
  },
  {
    id: 143,
    palavra_ingles: "bookshelf",
    traducao_portugues: "estante de livros",
    categoria: "house",
    frase_exemplo_ingles: "The tall bookshelf holds hundreds of books.",
    frase_exemplo_portugues: "A estante alta comporta centenas de livros.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'bookshelf': Fale sobre organização, leitura. Use atividades como organizing books, dusting, browsing. Compare com 'bookcase'."
  },
  {
    id: 144,
    palavra_ingles: "desk",
    traducao_portugues: "escrivaninha",
    categoria: "house",
    frase_exemplo_ingles: "I study and work at my wooden desk.",
    frase_exemplo_portugues: "Estudo e trabalho na minha escrivaninha de madeira.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'desk': Fale sobre trabalho, estudo. Use atividades como working, studying, organizing. Descreva diferentes tipos e materiais."
  },
  {
    id: 145,
    palavra_ingles: "drawer",
    traducao_portugues: "gaveta",
    categoria: "house",
    frase_exemplo_ingles: "I keep my socks organized in the top drawer.",
    frase_exemplo_portugues: "Mantenho minhas meias organizadas na gaveta de cima.",
    imagem_url: "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg",
    prompt_pratica: "Pratique com 'drawer': Fale sobre organização, armazenamento. Use atividades como opening, closing, organizing, searching through."
  },
  {
    id: 146,
    palavra_ingles: "shelf",
    traducao_portugues: "prateleira",
    categoria: "house",
    frase_exemplo_ingles: "The kitchen shelf holds spices and cooking supplies.",
    frase_exemplo_portugues: "A prateleira da cozinha guarda temperos e utensílios de cozinha.",
    imagem_url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    prompt_pratica: "Pratique com 'shelf': Fale sobre armazenamento, organização. Use atividades como placing items, organizing, dusting. Note plural 'shelves'."
  },
  {
    id: 147,
    palavra_ingles: "cabinet",
    traducao_portugues: "armário",
    categoria: "house",
    frase_exemplo_ingles: "The medicine cabinet contains first aid supplies.",
    frase_exemplo_portugues: "O armário de remédios contém suprimentos de primeiros socorros.",
    imagem_url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    prompt_pratica: "Pratique com 'cabinet': Fale sobre armazenamento, diferentes tipos (kitchen, medicine, filing). Use atividades como storing, organizing, accessing."
  },
  {
    id: 148,
    palavra_ingles: "switch",
    traducao_portugues: "interruptor",
    categoria: "house",
    frase_exemplo_ingles: "Turn on the light using the wall switch.",
    frase_exemplo_portugues: "Acenda a luz usando o interruptor da parede.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'switch': Fale sobre controle elétrico. Use verbos como turn on, turn off, flip, press. Descreva diferentes tipos de interruptores."
  },
  {
    id: 149,
    palavra_ingles: "outlet",
    traducao_portugues: "tomada",
    categoria: "house",
    frase_exemplo_ingles: "Plug the charger into the electrical outlet.",
    frase_exemplo_portugues: "Conecte o carregador na tomada elétrica.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'outlet': Use também 'socket'. Fale sobre eletricidade, segurança. Use atividades como plugging in, unplugging, checking voltage."
  },
  {
    id: 150,
    palavra_ingles: "key",
    traducao_portugues: "chave",
    categoria: "house",
    frase_exemplo_ingles: "I always carry my house key in my pocket.",
    frase_exemplo_portugues: "Sempre carrego a chave de casa no bolso.",
    imagem_url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    prompt_pratica: "Pratique com 'key': Fale sobre segurança, acesso. Use atividades como locking, unlocking, losing, finding. Use expressões como 'key to success'."
  },

  // TRANSPORT (50 words)
  {
    id: 151,
    palavra_ingles: "car",
    traducao_portugues: "carro",
    categoria: "transport",
    frase_exemplo_ingles: "My red car is parked in the driveway.",
    frase_exemplo_portugues: "Meu carro vermelho está estacionado na entrada da garagem.",
    imagem_url: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg",
    prompt_pratica: "Pratique com 'car': Fale sobre diferentes tipos, cores, marcas. Use atividades como driving, parking, washing. Descreva partes do carro."
  },
  {
    id: 152,
    palavra_ingles: "bus",
    traducao_portugues: "ônibus",
    categoria: "transport",
    frase_exemplo_ingles: "The yellow school bus picks up children every morning.",
    frase_exemplo_portugues: "O ônibus escolar amarelo pega as crianças toda manhã.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'bus': Fale sobre transporte público, diferentes tipos. Use atividades como catching, riding, waiting for. Descreva rotas e horários."
  },
  {
    id: 153,
    palavra_ingles: "train",
    traducao_portugues: "trem",
    categoria: "transport",
    frase_exemplo_ingles: "The fast train travels between cities efficiently.",
    frase_exemplo_portugues: "O trem rápido viaja entre cidades eficientemente.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'train': Fale sobre viagens longas, estações. Use atividades como boarding, riding, arriving. Descreva diferentes tipos de trem."
  },
  {
    id: 154,
    palavra_ingles: "airplane",
    traducao_portugues: "avião",
    categoria: "transport",
    frase_exemplo_ingles: "The airplane flies high above the clouds.",
    frase_exemplo_portugues: "O avião voa alto acima das nuvens.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'airplane': Use também 'plane'. Fale sobre viagens internacionais, aeroportos. Use atividades como flying, taking off, landing."
  },
  {
    id: 155,
    palavra_ingles: "bicycle",
    traducao_portugues: "bicicleta",
    categoria: "transport",
    frase_exemplo_ingles: "I ride my bicycle to work every morning.",
    frase_exemplo_portugues: "Ando de bicicleta para o trabalho toda manhã.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'bicycle': Use também 'bike'. Fale sobre exercício, meio ambiente. Use atividades como riding, pedaling, balancing."
  },
  {
    id: 156,
    palavra_ingles: "motorcycle",
    traducao_portugues: "motocicleta",
    categoria: "transport",
    frase_exemplo_ingles: "The motorcycle speeds through city traffic easily.",
    frase_exemplo_portugues: "A motocicleta passa rapidamente pelo trânsito da cidade.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'motorcycle': Use também 'motorbike'. Fale sobre velocidade, agilidade. Use atividades como riding, accelerating, wearing helmet."
  },
  {
    id: 157,
    palavra_ingles: "truck",
    traducao_portugues: "caminhão",
    categoria: "transport",
    frase_exemplo_ingles: "The delivery truck brings packages to our house.",
    frase_exemplo_portugues: "O caminhão de entrega traz pacotes para nossa casa.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'truck': Fale sobre transporte de carga, diferentes tamanhos. Use atividades como loading, delivering, driving. Descreva tipos específicos."
  },
  {
    id: 158,
    palavra_ingles: "taxi",
    traducao_portugues: "táxi",
    categoria: "transport",
    frase_exemplo_ingles: "We took a taxi to the airport this morning.",
    frase_exemplo_portugues: "Pegamos um táxi para o aeroporto esta manhã.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'taxi': Fale sobre transporte urbano, conveniência. Use atividades como calling, hailing, paying fare. Compare com ride-sharing."
  },
  {
    id: 159,
    palavra_ingles: "subway",
    traducao_portugues: "metrô",
    categoria: "transport",
    frase_exemplo_ingles: "The subway system connects all parts of the city.",
    frase_exemplo_portugues: "O sistema de metrô conecta todas as partes da cidade.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'subway': Use também 'metro', 'underground'. Fale sobre transporte urbano rápido. Use atividades como riding, transferring, buying tickets."
  },
  {
    id: 160,
    palavra_ingles: "boat",
    traducao_portugues: "barco",
    categoria: "transport",
    frase_exemplo_ingles: "The small boat sails peacefully on the lake.",
    frase_exemplo_portugues: "O barco pequeno navega pacificamente no lago.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'boat': Fale sobre navegação, diferentes tipos. Use atividades como sailing, rowing, fishing. Descreva uso recreativo e comercial."
  },
  {
    id: 161,
    palavra_ingles: "ship",
    traducao_portugues: "navio",
    categoria: "transport",
    frase_exemplo_ingles: "The large ship carries cargo across the ocean.",
    frase_exemplo_portugues: "O navio grande transporta carga pelo oceano.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'ship': Fale sobre transporte marítimo, viagens longas. Use atividades como sailing, loading, navigating. Compare tamanhos com 'boat'."
  },
  {
    id: 162,
    palavra_ingles: "helicopter",
    traducao_portugues: "helicóptero",
    categoria: "transport",
    frase_exemplo_ingles: "The rescue helicopter hovers above the accident scene.",
    frase_exemplo_portugues: "O helicóptero de resgate paira sobre o local do acidente.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'helicopter': Fale sobre resgate, versatilidade. Use atividades como hovering, landing, rescuing. Descreva diferentes usos."
  },
  {
    id: 163,
    palavra_ingles: "scooter",
    traducao_portugues: "patinete",
    categoria: "transport",
    frase_exemplo_ingles: "Children love riding their scooters in the park.",
    frase_exemplo_portugues: "As crianças adoram andar de patinete no parque.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'scooter': Fale sobre diferentes tipos (kick scooter, motor scooter). Use atividades como riding, pushing, balancing."
  },
  {
    id: 164,
    palavra_ingles: "skateboard",
    traducao_portugues: "skate",
    categoria: "transport",
    frase_exemplo_ingles: "Teenagers practice tricks on their skateboards.",
    frase_exemplo_portugues: "Adolescentes praticam manobras em seus skates.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'skateboard': Fale sobre esporte, manobras. Use atividades como riding, doing tricks, practicing. Descreva cultura do skate."
  },
  {
    id: 165,
    palavra_ingles: "van",
    traducao_portugues: "van",
    categoria: "transport",
    frase_exemplo_ingles: "The family van has space for eight passengers.",
    frase_exemplo_portugues: "A van da família tem espaço para oito passageiros.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'van': Fale sobre transporte familiar, espaço. Use atividades como loading, traveling, camping. Descreva versatilidade."
  },
  {
    id: 166,
    palavra_ingles: "ambulance",
    traducao_portugues: "ambulância",
    categoria: "transport",
    frase_exemplo_ingles: "The ambulance rushes to the hospital with sirens on.",
    frase_exemplo_portugues: "A ambulância corre para o hospital com as sirenes ligadas.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'ambulance': Fale sobre emergências médicas, urgência. Use atividades como rushing, transporting patients, saving lives."
  },
  {
    id: 167,
    palavra_ingles: "fire truck",
    traducao_portugues: "caminhão de bombeiros",
    categoria: "transport",
    frase_exemplo_ingles: "The red fire truck races to extinguish the flames.",
    frase_exemplo_portugues: "O caminhão de bombeiros vermelho corre para extinguir as chamas.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'fire truck': Fale sobre emergências, combate a incêndios. Use atividades como racing, extinguishing, rescuing."
  },
  {
    id: 168,
    palavra_ingles: "police car",
    traducao_portugues: "viatura policial",
    categoria: "transport",
    frase_exemplo_ingles: "The police car patrols the neighborhood at night.",
    frase_exemplo_portugues: "A viatura policial patrulha o bairro à noite.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'police car': Fale sobre segurança pública, patrulhamento. Use atividades como patrolling, chasing, protecting."
  },
  {
    id: 169,
    palavra_ingles: "tram",
    traducao_portugues: "bonde",
    categoria: "transport",
    frase_exemplo_ingles: "The electric tram glides smoothly along the tracks.",
    frase_exemplo_portugues: "O bonde elétrico desliza suavemente pelos trilhos.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'tram': Fale sobre transporte urbano histórico. Use atividades como riding, boarding, following tracks. Descreva charme nostálgico."
  },
  {
    id: 170,
    palavra_ingles: "ferry",
    traducao_portugues: "balsa",
    categoria: "transport",
    frase_exemplo_ingles: "The ferry transports cars and passengers across the river.",
    frase_exemplo_portugues: "A balsa transporta carros e passageiros pelo rio.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'ferry': Fale sobre travessias aquáticas, transporte misto. Use atividades como crossing, loading vehicles, enjoying views."
  },
  {
    id: 171,
    palavra_ingles: "rocket",
    traducao_portugues: "foguete",
    categoria: "transport",
    frase_exemplo_ingles: "The space rocket launches astronauts to the moon.",
    frase_exemplo_portugues: "O foguete espacial lança astronautas para a lua.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'rocket': Fale sobre exploração espacial, tecnologia. Use atividades como launching, exploring space, carrying astronauts."
  },
  {
    id: 172,
    palavra_ingles: "jet",
    traducao_portugues: "jato",
    categoria: "transport",
    frase_exemplo_ingles: "The military jet flies faster than the speed of sound.",
    frase_exemplo_portugues: "O jato militar voa mais rápido que a velocidade do som.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'jet': Fale sobre velocidade, tecnologia militar. Use atividades como flying fast, breaking sound barrier, defending airspace."
  },
  {
    id: 173,
    palavra_ingles: "glider",
    traducao_portugues: "planador",
    categoria: "transport",
    frase_exemplo_ingles: "The silent glider soars gracefully without an engine.",
    frase_exemplo_portugues: "O planador silencioso voa graciosamente sem motor.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'glider': Fale sobre voo silencioso, correntes de ar. Use atividades como soaring, gliding, using thermals."
  },
  {
    id: 174,
    palavra_ingles: "balloon",
    traducao_portugues: "balão",
    categoria: "transport",
    frase_exemplo_ingles: "The colorful hot air balloon floats peacefully in the sky.",
    frase_exemplo_portugues: "O balão de ar quente colorido flutua pacificamente no céu.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'balloon': Fale sobre voo recreativo, ar quente. Use atividades como floating, heating air, enjoying views."
  },
  {
    id: 175,
    palavra_ingles: "canoe",
    traducao_portugues: "canoa",
    categoria: "transport",
    frase_exemplo_ingles: "We paddle the canoe gently down the quiet river.",
    frase_exemplo_portugues: "Remamos a canoa suavemente rio abaixo.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'canoe': Fale sobre navegação recreativa, remos. Use atividades como paddling, navigating rivers, enjoying nature."
  },
  {
    id: 176,
    palavra_ingles: "kayak",
    traducao_portugues: "caiaque",
    categoria: "transport",
    frase_exemplo_ingles: "The kayak moves swiftly through the white water rapids.",
    frase_exemplo_portugues: "O caiaque se move rapidamente pelas corredeiras.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'kayak': Fale sobre esporte aquático, agilidade. Use atividades como paddling, navigating rapids, balancing."
  },
  {
    id: 177,
    palavra_ingles: "yacht",
    traducao_portugues: "iate",
    categoria: "transport",
    frase_exemplo_ingles: "The luxury yacht anchors in the beautiful bay.",
    frase_exemplo_portugues: "O iate de luxo ancora na baía bonita.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'yacht': Fale sobre luxo, navegação recreativa. Use atividades como sailing, anchoring, entertaining guests."
  },
  {
    id: 178,
    palavra_ingles: "sailboat",
    traducao_portugues: "veleiro",
    categoria: "transport",
    frase_exemplo_ingles: "The white sailboat catches the wind beautifully.",
    frase_exemplo_portugues: "O veleiro branco pega o vento lindamente.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'sailboat': Fale sobre navegação à vela, vento. Use atividades como sailing, adjusting sails, racing."
  },
  {
    id: 179,
    palavra_ingles: "speedboat",
    traducao_portugues: "lancha",
    categoria: "transport",
    frase_exemplo_ingles: "The speedboat races across the lake at high speed.",
    frase_exemplo_portugues: "A lancha corre pelo lago em alta velocidade.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'speedboat': Fale sobre velocidade na água, recreação. Use atividades como racing, water skiing, enjoying speed."
  },
  {
    id: 180,
    palavra_ingles: "submarine",
    traducao_portugues: "submarino",
    categoria: "transport",
    frase_exemplo_ingles: "The submarine explores the deep ocean floor.",
    frase_exemplo_portugues: "O submarino explora o fundo profundo do oceano.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'submarine': Fale sobre exploração submarina, militar. Use atividades como diving, exploring depths, staying underwater."
  },
  {
    id: 181,
    palavra_ingles: "trolley",
    traducao_portugues: "bonde/carrinho",
    categoria: "transport",
    frase_exemplo_ingles: "The shopping trolley makes carrying groceries easier.",
    frase_exemplo_portugues: "O carrinho de compras facilita carregar mantimentos.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'trolley': Note diferentes significados (transporte público, carrinho de compras). Use atividades como pushing, loading, maneuvering."
  },
  {
    id: 182,
    palavra_ingles: "cart",
    traducao_portugues: "carrinho",
    categoria: "transport",
    frase_exemplo_ingles: "The horse pulls the wooden cart down the country road.",
    frase_exemplo_portugues: "O cavalo puxa o carrinho de madeira pela estrada rural.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'cart': Fale sobre transporte tradicional, diferentes tipos. Use atividades como pulling, loading, transporting goods."
  },
  {
    id: 183,
    palavra_ingles: "sled",
    traducao_portugues: "trenó",
    categoria: "transport",
    frase_exemplo_ingles: "Children ride the sled down the snowy hill.",
    frase_exemplo_portugues: "As crianças descem a colina nevada no trenó.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'sled': Fale sobre diversão na neve, inverno. Use atividades como sledding, sliding down hills, enjoying winter."
  },
  {
    id: 184,
    palavra_ingles: "snowmobile",
    traducao_portugues: "snowmobile",
    categoria: "transport",
    frase_exemplo_ingles: "The snowmobile speeds across the frozen landscape.",
    frase_exemplo_portugues: "O snowmobile acelera pela paisagem congelada.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'snowmobile': Fale sobre transporte na neve, recreação. Use atividades como riding, exploring snowy terrain, racing."
  },
  {
    id: 185,
    palavra_ingles: "segway",
    traducao_portugues: "segway",
    categoria: "transport",
    frase_exemplo_ingles: "Tourists explore the city on electric Segways.",
    frase_exemplo_portugues: "Turistas exploram a cidade em Segways elétricos.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'Segway': Fale sobre transporte moderno, equilíbrio. Use atividades como balancing, touring, learning to ride."
  },
  {
    id: 186,
    palavra_ingles: "hovercraft",
    traducao_portugues: "aerodeslizador",
    categoria: "transport",
    frase_exemplo_ingles: "The hovercraft glides over both land and water.",
    frase_exemplo_portugues: "O aerodeslizador desliza sobre terra e água.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'hovercraft': Fale sobre tecnologia única, versatilidade. Use atividades como hovering, crossing different terrains, floating on air."
  },
  {
    id: 187,
    palavra_ingles: "rickshaw",
    traducao_portugues: "riquixá",
    categoria: "transport",
    frase_exemplo_ingles: "The bicycle rickshaw carries passengers through narrow streets.",
    frase_exemplo_portugues: "O riquixá de bicicleta carrega passageiros pelas ruas estreitas.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'rickshaw': Fale sobre transporte tradicional asiático. Use atividades como pedaling, carrying passengers, navigating streets."
  },
  {
    id: 188,
    palavra_ingles: "cable car",
    traducao_portugues: "teleférico",
    categoria: "transport",
    frase_exemplo_ingles: "The cable car climbs slowly up the steep mountain.",
    frase_exemplo_portugues: "O teleférico sobe lentamente a montanha íngreme.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'cable car': Fale sobre transporte em montanhas, turismo. Use atividades como climbing, enjoying views, overcoming steep terrain."
  },
  {
    id: 189,
    palavra_ingles: "monorail",
    traducao_portugues: "monotrilho",
    categoria: "transport",
    frase_exemplo_ingles: "The futuristic monorail connects different parts of the city.",
    frase_exemplo_portugues: "O monotrilho futurista conecta diferentes partes da cidade.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'monorail': Fale sobre transporte moderno, eficiência. Use atividades como gliding, connecting areas, reducing traffic."
  },
  {
    id: 190,
    palavra_ingles: "escalator",
    traducao_portugues: "escada rolante",
    categoria: "transport",
    frase_exemplo_ingles: "The moving escalator carries people between floors.",
    frase_exemplo_portugues: "A escada rolante carrega pessoas entre os andares.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'escalator': Fale sobre conveniência, edifícios modernos. Use atividades como riding, moving between floors, standing or walking."
  },
  {
    id: 191,
    palavra_ingles: "elevator",
    traducao_portugues: "elevador",
    categoria: "transport",
    frase_exemplo_ingles: "The elevator quickly takes us to the top floor.",
    frase_exemplo_portugues: "O elevador nos leva rapidamente ao último andar.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'elevator': Use também 'lift' (britânico). Fale sobre edifícios altos, conveniência. Use atividades como riding, pressing buttons, waiting."
  },
  {
    id: 192,
    palavra_ingles: "wheelchair",
    traducao_portugues: "cadeira de rodas",
    categoria: "transport",
    frase_exemplo_ingles: "The wheelchair provides mobility for people with disabilities.",
    frase_exemplo_portugues: "A cadeira de rodas fornece mobilidade para pessoas com deficiência.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'wheelchair': Fale sobre acessibilidade, independência. Use atividades como rolling, maneuvering, accessing ramps."
  },
  {
    id: 193,
    palavra_ingles: "stroller",
    traducao_portugues: "carrinho de bebê",
    categoria: "transport",
    frase_exemplo_ingles: "Parents push the baby stroller through the park.",
    frase_exemplo_portugues: "Os pais empurram o carrinho de bebê pelo parque.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'stroller': Use também 'pushchair' (britânico). Fale sobre cuidado infantil, mobilidade. Use atividades como pushing, folding, maneuvering."
  },
  {
    id: 194,
    palavra_ingles: "wagon",
    traducao_portugues: "vagão",
    categoria: "transport",
    frase_exemplo_ingles: "The train wagon carries passengers across the country.",
    frase_exemplo_portugues: "O vagão do trem carrega passageiros pelo país.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'wagon': Fale sobre transporte ferroviário, diferentes tipos. Use atividades como boarding, traveling, connecting cars."
  },
  {
    id: 195,
    palavra_ingles: "trailer",
    traducao_portugues: "reboque",
    categoria: "transport",
    frase_exemplo_ingles: "The truck pulls a heavy trailer full of cargo.",
    frase_exemplo_portugues: "O caminhão puxa um reboque pesado cheio de carga.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'trailer': Fale sobre transporte de carga, acoplamento. Use atividades como pulling, loading, hauling goods."
  },
  {
    id: 196,
    palavra_ingles: "limousine",
    traducao_portugues: "limusine",
    categoria: "transport",
    frase_exemplo_ingles: "The elegant limousine arrives for the special occasion.",
    frase_exemplo_portugues: "A limusine elegante chega para a ocasião especial.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'limousine': Use também 'limo'. Fale sobre luxo, ocasiões especiais. Use atividades como arriving in style, celebrating, impressing."
  },
  {
    id: 197,
    palavra_ingles: "convertible",
    traducao_portugues: "conversível",
    categoria: "transport",
    frase_exemplo_ingles: "We drive the convertible with the top down on sunny days.",
    frase_exemplo_portugues: "Dirigimos o conversível com a capota abaixada em dias ensolarados.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'convertible': Fale sobre liberdade, tempo bom. Use atividades como putting top down, enjoying breeze, feeling free."
  },
  {
    id: 198,
    palavra_ingles: "pickup truck",
    traducao_portugues: "caminhonete",
    categoria: "transport",
    frase_exemplo_ingles: "The pickup truck hauls tools and equipment to the job site.",
    frase_exemplo_portugues: "A caminhonete transporta ferramentas e equipamentos para o local de trabalho.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'pickup truck': Use também 'pickup'. Fale sobre trabalho, versatilidade. Use atividades como hauling, loading bed, working."
  },
  {
    id: 199,
    palavra_ingles: "minivan",
    traducao_portugues: "minivan",
    categoria: "transport",
    frase_exemplo_ingles: "The family minivan comfortably seats seven people.",
    frase_exemplo_portugues: "A minivan da família acomoda confortavelmente sete pessoas.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'minivan': Fale sobre famílias grandes, praticidade. Use atividades como carpooling, traveling with family, loading cargo."
  },
  {
    id: 200,
    palavra_ingles: "hatchback",
    traducao_portugues: "hatchback",
    categoria: "transport",
    frase_exemplo_ingles: "The compact hatchback is perfect for city driving.",
    frase_exemplo_portugues: "O hatchback compacto é perfeito para dirigir na cidade.",
    imagem_url: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg",
    prompt_pratica: "Pratique com 'hatchback': Fale sobre eficiência, cidade. Use atividades como parking easily, saving fuel, maneuvering in traffic."
  },

  // CLOTHES (50 words)
  {
    id: 201,
    palavra_ingles: "shirt",
    traducao_portugues: "camisa",
    categoria: "clothes",
    frase_exemplo_ingles: "He wears a clean white shirt to work every day.",
    frase_exemplo_portugues: "Ele usa uma camisa branca limpa para trabalhar todos os dias.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'shirt': Fale sobre diferentes tipos (dress shirt, t-shirt, polo). Use cores, materiais. Descreva ocasiões formais e casuais."
  },
  {
    id: 202,
    palavra_ingles: "pants",
    traducao_portugues: "calças",
    categoria: "clothes",
    frase_exemplo_ingles: "These comfortable pants are perfect for casual wear.",
    frase_exemplo_portugues: "Essas calças confortáveis são perfeitas para uso casual.",
    imagem_url: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
    prompt_pratica: "Pratique com 'pants': Note que é sempre plural. Use também 'trousers'. Fale sobre diferentes estilos (jeans, dress pants, casual)."
  },
  {
    id: 203,
    palavra_ingles: "dress",
    traducao_portugues: "vestido",
    categoria: "clothes",
    frase_exemplo_ingles: "She looks elegant in her beautiful red dress.",
    frase_exemplo_portugues: "Ela fica elegante em seu lindo vestido vermelho.",
    imagem_url: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
    prompt_pratica: "Pratique com 'dress': Fale sobre diferentes estilos (casual, formal, evening). Use cores, comprimentos. Descreva ocasiões especiais."
  },
  {
    id: 204,
    palavra_ingles: "skirt",
    traducao_portugues: "saia",
    categoria: "clothes",
    frase_exemplo_ingles: "The flowing skirt moves gracefully when she walks.",
    frase_exemplo_portugues: "A saia fluida se move graciosamente quando ela caminha.",
    imagem_url: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
    prompt_pratica: "Pratique com 'skirt': Fale sobre diferentes comprimentos (mini, midi, maxi). Use materiais, estilos. Descreva movimento e elegância."
  },
  {
    id: 205,
    palavra_ingles: "jacket",
    traducao_portugues: "jaqueta",
    categoria: "clothes",
    frase_exemplo_ingles: "The warm jacket protects him from the cold wind.",
    frase_exemplo_portugues: "A jaqueta quente o protege do vento frio.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'jacket': Fale sobre diferentes tipos (leather, denim, winter). Use para proteção, estilo. Descreva materiais e ocasiões."
  },
  {
    id: 206,
    palavra_ingles: "coat",
    traducao_portugues: "casaco",
    categoria: "clothes",
    frase_exemplo_ingles: "She buttons up her heavy coat before going outside.",
    frase_exemplo_portugues: "Ela abotoa seu casaco pesado antes de sair.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'coat': Fale sobre proteção contra frio, diferentes tipos (winter coat, raincoat). Use materiais pesados, comprimentos."
  },
  {
    id: 207,
    palavra_ingles: "sweater",
    traducao_portugues: "suéter",
    categoria: "clothes",
    frase_exemplo_ingles: "The cozy sweater keeps me warm on chilly evenings.",
    frase_exemplo_portugues: "O suéter aconchegante me mantém aquecido em noites frias.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'sweater': Use também 'jumper' (britânico). Fale sobre conforto, calor. Descreva diferentes materiais (wool, cotton)."
  },
  {
    id: 208,
    palavra_ingles: "t-shirt",
    traducao_portugues: "camiseta",
    categoria: "clothes",
    frase_exemplo_ingles: "A simple t-shirt is perfect for hot summer days.",
    frase_exemplo_portugues: "Uma camiseta simples é perfeita para dias quentes de verão.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 't-shirt': Fale sobre casualidade, conforto. Use diferentes cores, estampas. Descreva uso diário e exercícios."
  },
  {
    id: 209,
    palavra_ingles: "jeans",
    traducao_portugues: "jeans",
    categoria: "clothes",
    frase_exemplo_ingles: "Blue jeans are a classic choice for casual outfits.",
    frase_exemplo_portugues: "Jeans azuis são uma escolha clássica para looks casuais.",
    imagem_url: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
    prompt_pratica: "Pratique com 'jeans': Note que é sempre plural. Fale sobre versatilidade, durabilidade. Descreva diferentes cortes e lavagens."
  },
  {
    id: 210,
    palavra_ingles: "shorts",
    traducao_portugues: "shorts",
    categoria: "clothes",
    frase_exemplo_ingles: "Comfortable shorts are ideal for playing sports.",
    frase_exemplo_portugues: "Shorts confortáveis são ideais para praticar esportes.",
    imagem_url: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
    prompt_pratica: "Pratique com 'shorts': Note que é sempre plural. Fale sobre verão, esportes. Descreva diferentes comprimentos e materiais."
  },
  {
    id: 211,
    palavra_ingles: "shoes",
    traducao_portugues: "sapatos",
    categoria: "clothes",
    frase_exemplo_ingles: "New shoes make walking more comfortable and stylish.",
    frase_exemplo_portugues: "Sapatos novos tornam o caminhar mais confortável e elegante.",
    imagem_url: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
    prompt_pratica: "Pratique com 'shoes': Sempre plural. Fale sobre diferentes tipos (sneakers, dress shoes, boots). Use para diferentes ocasiões."
  },
  {
    id: 212,
    palavra_ingles: "socks",
    traducao_portugues: "meias",
    categoria: "clothes",
    frase_exemplo_ingles: "Warm socks keep my feet cozy in winter.",
    frase_exemplo_portugues: "Meias quentes mantêm meus pés aconchegados no inverno.",
    imagem_url: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
    prompt_pratica: "Pratique com 'socks': Sempre plural. Fale sobre conforto, diferentes materiais. Use expressões como 'knock your socks off'."
  },
  {
    id: 213,
    palavra_ingles: "hat",
    traducao_portugues: "chapéu",
    categoria: "clothes",
    frase_exemplo_ingles: "The wide-brimmed hat protects her face from the sun.",
    frase_exemplo_portugues: "O chapéu de aba larga protege o rosto dela do sol.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'hat': Fale sobre proteção solar, estilo. Descreva diferentes tipos (baseball cap, fedora, beanie)."
  },
  {
    id: 214,
    palavra_ingles: "cap",
    traducao_portugues: "boné",
    categoria: "clothes",
    frase_exemplo_ingles: "He wears a baseball cap to shade his eyes.",
    frase_exemplo_portugues: "Ele usa um boné de baseball para proteger os olhos.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'cap': Fale sobre esportes, proteção. Compare com 'hat'. Descreva diferentes estilos (baseball, trucker)."
  },
  {
    id: 215,
    palavra_ingles: "gloves",
    traducao_portugues: "luvas",
    categoria: "clothes",
    frase_exemplo_ingles: "Leather gloves keep hands warm and protected.",
    frase_exemplo_portugues: "Luvas de couro mantêm as mãos aquecidas e protegidas.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'gloves': Sempre plural. Fale sobre proteção, diferentes materiais. Use para inverno, trabalho, esportes."
  },
  {
    id: 216,
    palavra_ingles: "scarf",
    traducao_portugues: "cachecol",
    categoria: "clothes",
    frase_exemplo_ingles: "The colorful scarf adds warmth and style to her outfit.",
    frase_exemplo_portugues: "O cachecol colorido adiciona calor e estilo ao look dela.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'scarf': Fale sobre calor, acessório de moda. Descreva diferentes materiais, formas de usar."
  },
  {
    id: 217,
    palavra_ingles: "belt",
    traducao_portugues: "cinto",
    categoria: "clothes",
    frase_exemplo_ingles: "A leather belt completes his professional appearance.",
    frase_exemplo_portugues: "Um cinto de couro completa sua aparência profissional.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'belt': Fale sobre funcionalidade, estilo. Descreva diferentes materiais, fivelas. Use expressões como 'tighten your belt'."
  },
  {
    id: 218,
    palavra_ingles: "tie",
    traducao_portugues: "gravata",
    categoria: "clothes",
    frase_exemplo_ingles: "He adjusts his silk tie before the important meeting.",
    frase_exemplo_portugues: "Ele ajusta sua gravata de seda antes da reunião importante.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'tie': Fale sobre formalidade, negócios. Descreva diferentes padrões, como amarrar. Use em contextos profissionais."
  },
  {
    id: 219,
    palavra_ingles: "suit",
    traducao_portugues: "terno",
    categoria: "clothes",
    frase_exemplo_ingles: "The elegant suit makes him look very professional.",
    frase_exemplo_portugues: "O terno elegante o faz parecer muito profissional.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'suit': Fale sobre formalidade, negócios. Descreva diferentes cores, ocasiões. Use para entrevistas, casamentos."
  },
  {
    id: 220,
    palavra_ingles: "uniform",
    traducao_portugues: "uniforme",
    categoria: "clothes",
    frase_exemplo_ingles: "The nurse wears a clean white uniform at work.",
    frase_exemplo_portugues: "A enfermeira usa um uniforme branco limpo no trabalho.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'uniform': Fale sobre profissões, identificação. Descreva diferentes tipos (school, military, medical)."
  },
  {
    id: 221,
    palavra_ingles: "pajamas",
    traducao_portugues: "pijama",
    categoria: "clothes",
    frase_exemplo_ingles: "Soft pajamas make sleeping more comfortable.",
    frase_exemplo_portugues: "Pijamas macios tornam o sono mais confortável.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'pajamas': Use também 'pyjamas' (britânico). Sempre plural. Fale sobre conforto, sono, relaxamento."
  },
  {
    id: 222,
    palavra_ingles: "underwear",
    traducao_portugues: "roupa íntima",
    categoria: "clothes",
    frase_exemplo_ingles: "Comfortable underwear is essential for daily wear.",
    frase_exemplo_portugues: "Roupa íntima confortável é essencial para o uso diário.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'underwear': Fale sobre conforto, higiene. Use diferentes materiais, importância da qualidade."
  },
  {
    id: 223,
    palavra_ingles: "swimsuit",
    traducao_portugues: "maiô",
    categoria: "clothes",
    frase_exemplo_ingles: "She wears a colorful swimsuit at the beach.",
    frase_exemplo_portugues: "Ela usa um maiô colorido na praia.",
    imagem_url: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
    prompt_pratica: "Pratique com 'swimsuit': Use também 'bathing suit'. Fale sobre praia, piscina, natação. Descreva diferentes estilos."
  },
  {
    id: 224,
    palavra_ingles: "bikini",
    traducao_portugues: "biquíni",
    categoria: "clothes",
    frase_exemplo_ingles: "The bright bikini is perfect for sunbathing.",
    frase_exemplo_portugues: "O biquíni colorido é perfeito para tomar sol.",
    imagem_url: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
    prompt_pratica: "Pratique com 'bikini': Fale sobre praia, verão, bronzeado. Descreva diferentes cores e estilos."
  },
  {
    id: 225,
    palavra_ingles: "boots",
    traducao_portugues: "botas",
    categoria: "clothes",
    frase_exemplo_ingles: "Waterproof boots keep feet dry in rainy weather.",
    frase_exemplo_portugues: "Botas impermeáveis mantêm os pés secos em tempo chuvoso.",
    imagem_url: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
    prompt_pratica: "Pratique com 'boots': Sempre plural. Fale sobre proteção, diferentes tipos (rain boots, hiking boots, fashion boots)."
  },
  {
    id: 226,
    palavra_ingles: "sandals",
    traducao_portugues: "sandálias",
    categoria: "clothes",
    frase_exemplo_ingles: "Comfortable sandals are perfect for warm weather.",
    frase_exemplo_portugues: "Sandálias confortáveis são perfeitas para tempo quente.",
    imagem_url: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
    prompt_pratica: "Pratique com 'sandals': Sempre plural. Fale sobre verão, conforto, ventilação. Descreva diferentes estilos."
  },
  {
    id: 227,
    palavra_ingles: "sneakers",
    traducao_portugues: "tênis",
    categoria: "clothes",
    frase_exemplo_ingles: "White sneakers go well with casual outfits.",
    frase_exemplo_portugues: "Tênis brancos combinam bem com looks casuais.",
    imagem_url: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
    prompt_pratica: "Pratique com 'sneakers': Sempre plural. Use também 'trainers' (britânico). Fale sobre esportes, conforto, estilo casual."
  },
  {
    id: 228,
    palavra_ingles: "heels",
    traducao_portugues: "salto alto",
    categoria: "clothes",
    frase_exemplo_ingles: "High heels make her look taller and more elegant.",
    frase_exemplo_portugues: "Salto alto a faz parecer mais alta e elegante.",
    imagem_url: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
    prompt_pratica: "Pratique com 'heels': Sempre plural. Fale sobre elegância, altura, ocasiões formais. Descreva diferentes alturas."
  },
  {
    id: 229,
    palavra_ingles: "slippers",
    traducao_portugues: "chinelos",
    categoria: "clothes",
    frase_exemplo_ingles: "Cozy slippers keep feet warm inside the house.",
    frase_exemplo_portugues: "Chinelos aconchegantes mantêm os pés aquecidos dentro de casa.",
    imagem_url: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
    prompt_pratica: "Pratique com 'slippers': Sempre plural. Fale sobre conforto doméstico, relaxamento, materiais macios."
  },
  {
    id: 230,
    palavra_ingles: "robe",
    traducao_portugues: "roupão",
    categoria: "clothes",
    frase_exemplo_ingles: "The soft robe is perfect for relaxing after a shower.",
    frase_exemplo_portugues: "O roupão macio é perfeito para relaxar depois do banho.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'robe': Fale sobre conforto, relaxamento, spa. Descreva diferentes materiais (terry, silk)."
  },
  {
    id: 231,
    palavra_ingles: "apron",
    traducao_portugues: "avental",
    categoria: "clothes",
    frase_exemplo_ingles: "The chef wears an apron to protect clothes while cooking.",
    frase_exemplo_portugues: "O chef usa um avental para proteger as roupas enquanto cozinha.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'apron': Fale sobre proteção, cozinha, trabalho. Descreva diferentes tipos (kitchen, work, decorative)."
  },
  {
    id: 232,
    palavra_ingles: "vest",
    traducao_portugues: "colete",
    categoria: "clothes",
    frase_exemplo_ingles: "The formal vest completes his three-piece suit.",
    frase_exemplo_portugues: "O colete formal completa seu terno de três peças.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'vest': Fale sobre formalidade, camadas. Compare diferentes tipos (dress vest, safety vest)."
  },
  {
    id: 233,
    palavra_ingles: "cardigan",
    traducao_portugues: "cardigã",
    categoria: "clothes",
    frase_exemplo_ingles: "The button-up cardigan is perfect for layering.",
    frase_exemplo_portugues: "O cardigã com botões é perfeito para usar em camadas.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'cardigan': Fale sobre versatilidade, camadas, conforto. Descreva diferentes materiais e estilos."
  },
  {
    id: 234,
    palavra_ingles: "hoodie",
    traducao_portugues: "moletom com capuz",
    categoria: "clothes",
    frase_exemplo_ingles: "The comfortable hoodie is great for casual wear.",
    frase_exemplo_portugues: "O moletom com capuz confortável é ótimo para uso casual.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'hoodie': Fale sobre casualidade, conforto, juventude. Descreva capuz, bolso frontal."
  },
  {
    id: 235,
    palavra_ingles: "blazer",
    traducao_portugues: "blazer",
    categoria: "clothes",
    frase_exemplo_ingles: "The navy blazer works well for business casual events.",
    frase_exemplo_portugues: "O blazer azul marinho funciona bem para eventos business casual.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'blazer': Fale sobre versatilidade, profissionalismo casual. Compare com suit jacket."
  },
  {
    id: 236,
    palavra_ingles: "polo shirt",
    traducao_portugues: "camisa polo",
    categoria: "clothes",
    frase_exemplo_ingles: "The polo shirt strikes a balance between casual and formal.",
    frase_exemplo_portugues: "A camisa polo equilibra entre casual e formal.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'polo shirt': Fale sobre versatilidade, esportes, business casual. Descreva gola e botões."
  },
  {
    id: 237,
    palavra_ingles: "tank top",
    traducao_portugues: "regata",
    categoria: "clothes",
    frase_exemplo_ingles: "The tank top is perfect for hot summer workouts.",
    frase_exemplo_portugues: "A regata é perfeita para exercícios no verão quente.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'tank top': Fale sobre verão, exercícios, ventilação. Descreva ausência de mangas."
  },
  {
    id: 238,
    palavra_ingles: "leggings",
    traducao_portugues: "legging",
    categoria: "clothes",
    frase_exemplo_ingles: "Stretchy leggings are comfortable for yoga and exercise.",
    frase_exemplo_portugues: "Leggings elásticas são confortáveis para yoga e exercícios.",
    imagem_url: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
    prompt_pratica: "Pratique com 'leggings': Sempre plural. Fale sobre flexibilidade, exercícios, conforto. Descreva material elástico."
  },
  {
    id: 239,
    palavra_ingles: "tights",
    traducao_portugues: "meia-calça",
    categoria: "clothes",
    frase_exemplo_ingles: "Black tights complement her dress perfectly.",
    frase_exemplo_portugues: "A meia-calça preta complementa perfeitamente o vestido dela.",
    imagem_url: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
    prompt_pratica: "Pratique com 'tights': Sempre plural. Fale sobre elegância, proteção, diferentes cores e espessuras."
  },
  {
    id: 240,
    palavra_ingles: "stockings",
    traducao_portugues: "meias altas",
    categoria: "clothes",
    frase_exemplo_ingles: "Silk stockings add elegance to formal outfits.",
    frase_exemplo_portugues: "Meias altas de seda adicionam elegância a looks formais.",
    imagem_url: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
    prompt_pratica: "Pratique com 'stockings': Sempre plural. Fale sobre elegância, formalidade, diferentes materiais."
  },
  {
    id: 241,
    palavra_ingles: "overalls",
    traducao_portugues: "macacão",
    categoria: "clothes",
    frase_exemplo_ingles: "Denim overalls are both practical and stylish.",
    frase_exemplo_portugues: "Macacão jeans é tanto prático quanto estiloso.",
    imagem_url: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
    prompt_pratica: "Pratique com 'overalls': Sempre plural. Fale sobre trabalho, praticidade, moda casual. Descreva alças e bolsos."
  },
  {
    id: 242,
    palavra_ingles: "jumpsuit",
    traducao_portugues: "macacão",
    categoria: "clothes",
    frase_exemplo_ingles: "The elegant jumpsuit is perfect for evening events.",
    frase_exemplo_portugues: "O macacão elegante é perfeito para eventos noturnos.",
    imagem_url: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
    prompt_pratica: "Pratique com 'jumpsuit': Fale sobre elegância, praticidade, moda moderna. Compare com overalls."
  },
  {
    id: 243,
    palavra_ingles: "kimono",
    traducao_portugues: "quimono",
    categoria: "clothes",
    frase_exemplo_ingles: "The silk kimono represents traditional Japanese clothing.",
    frase_exemplo_portugues: "O quimono de seda representa a roupa tradicional japonesa.",
    imagem_url: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
    prompt_pratica: "Pratique com 'kimono': Fale sobre cultura japonesa, tradição, cerimônias. Descreva padrões e cores."
  },
  {
    id: 244,
    palavra_ingles: "poncho",
    traducao_portugues: "poncho",
    categoria: "clothes",
    frase_exemplo_ingles: "The colorful poncho protects from rain and wind.",
    frase_exemplo_portugues: "O poncho colorido protege da chuva e do vento.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'poncho': Fale sobre proteção, cultura latino-americana, praticidade. Descreva forma e uso."
  },
  {
    id: 245,
    palavra_ingles: "cape",
    traducao_portugues: "capa",
    categoria: "clothes",
    frase_exemplo_ingles: "The dramatic cape flows behind her as she walks.",
    frase_exemplo_portugues: "A capa dramática flutua atrás dela enquanto caminha.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'cape': Fale sobre drama, elegância, super-heróis. Descreva movimento e estilo."
  },
  {
    id: 246,
    palavra_ingles: "shawl",
    traducao_portugues: "xale",
    categoria: "clothes",
    frase_exemplo_ingles: "The delicate shawl adds warmth and elegance.",
    frase_exemplo_portugues: "O xale delicado adiciona calor e elegância.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'shawl': Fale sobre elegância, ocasiões formais, diferentes materiais. Descreva formas de usar."
  },
  {
    id: 247,
    palavra_ingles: "mittens",
    traducao_portugues: "luvas sem dedos",
    categoria: "clothes",
    frase_exemplo_ingles: "Warm mittens keep fingers together for extra warmth.",
    frase_exemplo_portugues: "Luvas sem dedos mantêm os dedos juntos para calor extra.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'mittens': Sempre plural. Compare com 'gloves'. Fale sobre calor, inverno, design especial."
  },
  {
    id: 248,
    palavra_ingles: "earmuffs",
    traducao_portugues: "protetor de ouvido",
    categoria: "clothes",
    frase_exemplo_ingles: "Fluffy earmuffs protect ears from cold winter wind.",
    frase_exemplo_portugues: "Protetores de ouvido fofos protegem as orelhas do vento frio do inverno.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'earmuffs': Sempre plural. Fale sobre proteção, inverno, conforto. Descreva design e materiais."
  },
  {
    id: 249,
    palavra_ingles: "suspenders",
    traducao_portugues: "suspensórios",
    categoria: "clothes",
    frase_exemplo_ingles: "Classic suspenders hold up pants with vintage style.",
    frase_exemplo_portugues: "Suspensórios clássicos seguram as calças com estilo vintage.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'suspenders': Sempre plural. Use também 'braces' (britânico). Fale sobre estilo vintage, funcionalidade."
  },
  {
    id: 250,
    palavra_ingles: "bow tie",
    traducao_portugues: "gravata borboleta",
    categoria: "clothes",
    frase_exemplo_ingles: "The elegant bow tie completes his formal tuxedo.",
    frase_exemplo_portugues: "A gravata borboleta elegante completa seu smoking formal.",
    imagem_url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    prompt_pratica: "Pratique com 'bow tie': Fale sobre formalidade extrema, eventos especiais. Compare com regular tie."
  },

  // NATURE (50 words)
  {
    id: 251,
    palavra_ingles: "tree",
    traducao_portugues: "árvore",
    categoria: "nature",
    frase_exemplo_ingles: "The old oak tree provides shade in the park.",
    frase_exemplo_portugues: "A velha árvore de carvalho fornece sombra no parque.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'tree': Fale sobre diferentes tipos (oak, pine, maple). Use partes (trunk, branches, leaves). Descreva importância ambiental."
  },
  {
    id: 252,
    palavra_ingles: "flower",
    traducao_portugues: "flor",
    categoria: "nature",
    frase_exemplo_ingles: "Beautiful flowers bloom in the garden every spring.",
    frase_exemplo_portugues: "Flores bonitas florescem no jardim toda primavera.",
    imagem_url: "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg",
    prompt_pratica: "Pratique com 'flower': Fale sobre diferentes tipos (rose, tulip, daisy). Use cores, fragrâncias. Descreva jardins e bouquets."
  },
  {
    id: 253,
    palavra_ingles: "grass",
    traducao_portugues: "grama",
    categoria: "nature",
    frase_exemplo_ingles: "Green grass covers the entire lawn beautifully.",
    frase_exemplo_portugues: "Grama verde cobre todo o gramado lindamente.",
    imagem_url: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg",
    prompt_pratica: "Pratique com 'grass': Fale sobre gramados, parques, manutenção. Use atividades como mowing, watering, walking on."
  },
  {
    id: 254,
    palavra_ingles: "leaf",
    traducao_portugues: "folha",
    categoria: "nature",
    frase_exemplo_ingles: "Each leaf changes color in the autumn season.",
    frase_exemplo_portugues: "Cada folha muda de cor na estação do outono.",
    imagem_url: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg",
    prompt_pratica: "Pratique com 'leaf': Note plural 'leaves'. Fale sobre estações, cores, fotossíntese. Descreva formas e texturas."
  },
  {
    id: 255,
    palavra_ingles: "branch",
    traducao_portugues: "galho",
    categoria: "nature",
    frase_exemplo_ingles: "Birds build their nests on strong tree branches.",
    frase_exemplo_portugues: "Pássaros constroem seus ninhos em galhos fortes de árvores.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'branch': Fale sobre estrutura das árvores, ninhos de pássaros. Use verbos como climb, break, grow."
  },
  {
    id: 256,
    palavra_ingles: "root",
    traducao_portugues: "raiz",
    categoria: "nature",
    frase_exemplo_ingles: "Strong roots anchor the tree firmly in the ground.",
    frase_exemplo_portugues: "Raízes fortes ancoram a árvore firmemente no solo.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'root': Fale sobre fundação, nutrição das plantas. Use expressões como 'get to the root of the problem'."
  },
  {
    id: 257,
    palavra_ingles: "seed",
    traducao_portugues: "semente",
    categoria: "nature",
    frase_exemplo_ingles: "A tiny seed grows into a magnificent tree.",
    frase_exemplo_portugues: "Uma pequena semente cresce e vira uma árvore magnífica.",
    imagem_url: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg",
    prompt_pratica: "Pratique com 'seed': Fale sobre crescimento, potencial, plantio. Use verbos como plant, grow, sprout."
  },
  {
    id: 258,
    palavra_ingles: "forest",
    traducao_portugues: "floresta",
    categoria: "nature",
    frase_exemplo_ingles: "The dense forest is home to many wild animals.",
    frase_exemplo_portugues: "A floresta densa é lar de muitos animais selvagens.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'forest': Fale sobre biodiversidade, conservação. Compare com 'woods'. Descreva diferentes tipos de florestas."
  },
  {
    id: 259,
    palavra_ingles: "mountain",
    traducao_portugues: "montanha",
    categoria: "nature",
    frase_exemplo_ingles: "Snow covers the mountain peak all year round.",
    frase_exemplo_portugues: "Neve cobre o pico da montanha o ano todo.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'mountain': Fale sobre escalada, altitude, paisagens. Use partes (peak, slope, base). Descreva diferentes tipos."
  },
  {
    id: 260,
    palavra_ingles: "river",
    traducao_portugues: "rio",
    categoria: "nature",
    frase_exemplo_ingles: "The clear river flows gently through the valley.",
    frase_exemplo_portugues: "O rio claro flui suavemente pelo vale.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'river': Fale sobre fluxo de água, navegação, pesca. Use verbos como flow, cross, follow."
  },
  {
    id: 261,
    palavra_ingles: "lake",
    traducao_portugues: "lago",
    categoria: "nature",
    frase_exemplo_ingles: "The peaceful lake reflects the surrounding mountains.",
    frase_exemplo_portugues: "O lago pacífico reflete as montanhas ao redor.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'lake': Fale sobre água parada, recreação, reflexos. Compare com 'pond'. Use atividades aquáticas."
  },
  {
    id: 262,
    palavra_ingles: "ocean",
    traducao_portugues: "oceano",
    categoria: "nature",
    frase_exemplo_ingles: "The vast ocean stretches beyond the horizon.",
    frase_exemplo_portugues: "O vasto oceano se estende além do horizonte.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'ocean': Fale sobre imensidão, vida marinha, navegação. Compare com 'sea'. Descreva ondas e marés."
  },
  {
    id: 263,
    palavra_ingles: "beach",
    traducao_portugues: "praia",
    categoria: "nature",
    frase_exemplo_ingles: "Golden sand covers the beautiful tropical beach.",
    frase_exemplo_portugues: "Areia dourada cobre a bela praia tropical.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'beach': Fale sobre areia, ondas, recreação. Use atividades como swimming, sunbathing, building sandcastles."
  },
  {
    id: 264,
    palavra_ingles: "desert",
    traducao_portugues: "deserto",
    categoria: "nature",
    frase_exemplo_ingles: "The hot desert receives very little rainfall annually.",
    frase_exemplo_portugues: "O deserto quente recebe muito pouca chuva anualmente.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'desert': Fale sobre aridez, adaptação, dunas. Descreva vida no deserto, temperaturas extremas."
  },
  {
    id: 265,
    palavra_ingles: "valley",
    traducao_portugues: "vale",
    categoria: "nature",
    frase_exemplo_ingles: "Green fields fill the fertile valley completely.",
    frase_exemplo_portugues: "Campos verdes preenchem completamente o vale fértil.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'valley': Fale sobre geografia, agricultura, rios. Descreva formação entre montanhas."
  },
  {
    id: 266,
    palavra_ingles: "hill",
    traducao_portugues: "colina",
    categoria: "nature",
    frase_exemplo_ingles: "Children love rolling down the grassy hill.",
    frase_exemplo_portugues: "Crianças adoram rolar colina abaixo na grama.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'hill': Compare com 'mountain'. Fale sobre inclinação, vista, atividades. Use verbos como climb, roll down."
  },
  {
    id: 267,
    palavra_ingles: "cliff",
    traducao_portugues: "penhasco",
    categoria: "nature",
    frase_exemplo_ingles: "The steep cliff overlooks the crashing waves below.",
    frase_exemplo_portugues: "O penhasco íngreme tem vista para as ondas que quebram embaixo.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'cliff': Fale sobre altura, perigo, vistas espetaculares. Use adjetivos como steep, dangerous, dramatic."
  },
  {
    id: 268,
    palavra_ingles: "cave",
    traducao_portugues: "caverna",
    categoria: "nature",
    frase_exemplo_ingles: "The dark cave hides ancient rock formations.",
    frase_exemplo_portugues: "A caverna escura esconde formações rochosas antigas.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'cave': Fale sobre exploração, formações geológicas, mistério. Use verbos como explore, discover, hide."
  },
  {
    id: 269,
    palavra_ingles: "rock",
    traducao_portugues: "rocha",
    categoria: "nature",
    frase_exemplo_ingles: "Large rocks create natural barriers in the landscape.",
    frase_exemplo_portugues: "Rochas grandes criam barreiras naturais na paisagem.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'rock': Fale sobre geologia, diferentes tipos, formações. Use como material de construção, decoração."
  },
  {
    id: 270,
    palavra_ingles: "stone",
    traducao_portugues: "pedra",
    categoria: "nature",
    frase_exemplo_ingles: "Smooth stones line the peaceful garden path.",
    frase_exemplo_portugues: "Pedras lisas alinham o caminho pacífico do jardim.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'stone': Compare com 'rock'. Fale sobre construção, decoração, diferentes tipos. Use em jardins, caminhos."
  },
  {
    id: 271,
    palavra_ingles: "sand",
    traducao_portugues: "areia",
    categoria: "nature",
    frase_exemplo_ingles: "Fine sand feels soft between your toes.",
    frase_exemplo_portugues: "Areia fina é macia entre os dedos dos pés.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'sand': Fale sobre praias, construção, texturas. Use atividades como building sandcastles, walking on."
  },
  {
    id: 272,
    palavra_ingles: "soil",
    traducao_portugues: "solo",
    categoria: "nature",
    frase_exemplo_ingles: "Rich soil helps plants grow strong and healthy.",
    frase_exemplo_portugues: "Solo rico ajuda as plantas a crescerem fortes e saudáveis.",
    imagem_url: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg",
    prompt_pratica: "Pratique com 'soil': Fale sobre agricultura, nutrientes, jardinagem. Compare com 'dirt'. Use em contextos de plantio."
  },
  {
    id: 273,
    palavra_ingles: "mud",
    traducao_portugues: "lama",
    categoria: "nature",
    frase_exemplo_ingles: "Heavy rain turns the dry earth into sticky mud.",
    frase_exemplo_portugues: "Chuva forte transforma a terra seca em lama pegajosa.",
    imagem_url: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg",
    prompt_pratica: "Pratique com 'mud': Fale sobre chuva, textura, dificuldades. Use verbos como stick, slip, get dirty."
  },
  {
    id: 274,
    palavra_ingles: "waterfall",
    traducao_portugues: "cachoeira",
    categoria: "nature",
    frase_exemplo_ingles: "The powerful waterfall creates a misty spray.",
    frase_exemplo_portugues: "A cachoeira poderosa cria uma névoa borrifada.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'waterfall': Fale sobre força da água, beleza natural, som. Use verbos como cascade, flow, spray."
  },
  {
    id: 275,
    palavra_ingles: "stream",
    traducao_portugues: "riacho",
    categoria: "nature",
    frase_exemplo_ingles: "The gentle stream babbles softly through the woods.",
    frase_exemplo_portugues: "O riacho suave murmura baixinho pela floresta.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'stream': Compare com 'river'. Fale sobre tamanho menor, som suave. Use verbos como babble, trickle."
  },
  {
    id: 276,
    palavra_ingles: "pond",
    traducao_portugues: "lagoa",
    categoria: "nature",
    frase_exemplo_ingles: "Ducks swim peacefully in the small pond.",
    frase_exemplo_portugues: "Patos nadam pacificamente na pequena lagoa.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'pond': Compare com 'lake'. Fale sobre tamanho menor, vida aquática. Use para jardins, parques."
  },
  {
    id: 277,
    palavra_ingles: "island",
    traducao_portugues: "ilha",
    categoria: "nature",
    frase_exemplo_ingles: "The tropical island is surrounded by crystal clear water.",
    frase_exemplo_portugues: "A ilha tropical é cercada por água cristalina.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'island': Fale sobre isolamento, turismo, vida marinha. Descreva diferentes tipos (tropical, volcanic)."
  },
  {
    id: 278,
    palavra_ingles: "volcano",
    traducao_portugues: "vulcão",
    categoria: "nature",
    frase_exemplo_ingles: "The active volcano occasionally releases hot lava.",
    frase_exemplo_portugues: "O vulcão ativo ocasionalmente libera lava quente.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'volcano': Fale sobre atividade geológica, lava, perigo. Use adjetivos como active, dormant, extinct."
  },
  {
    id: 279,
    palavra_ingles: "glacier",
    traducao_portugues: "geleira",
    categoria: "nature",
    frase_exemplo_ingles: "The ancient glacier slowly moves down the mountain.",
    frase_exemplo_portugues: "A geleira antiga se move lentamente montanha abaixo.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'glacier': Fale sobre gelo, movimento lento, mudanças climáticas. Descreva formação e derretimento."
  },
  {
    id: 280,
    palavra_ingles: "canyon",
    traducao_portugues: "cânion",
    categoria: "nature",
    frase_exemplo_ingles: "The deep canyon reveals millions of years of geology.",
    frase_exemplo_portugues: "O cânion profundo revela milhões de anos de geologia.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'canyon': Fale sobre erosão, tempo geológico, formações. Descreva profundidade e beleza."
  },
  {
    id: 281,
    palavra_ingles: "meadow",
    traducao_portugues: "prado",
    categoria: "nature",
    frase_exemplo_ingles: "Wildflowers bloom across the sunny meadow.",
    frase_exemplo_portugues: "Flores silvestres florescem pelo prado ensolarado.",
    imagem_url: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg",
    prompt_pratica: "Pratique com 'meadow': Fale sobre campos abertos, flores silvestres, pastagem. Descreva beleza natural e paz."
  },
  {
    id: 282,
    palavra_ingles: "field",
    traducao_portugues: "campo",
    categoria: "nature",
    frase_exemplo_ingles: "Golden wheat waves gently in the open field.",
    frase_exemplo_portugues: "Trigo dourado balança suavemente no campo aberto.",
    imagem_url: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg",
    prompt_pratica: "Pratique com 'field': Fale sobre agricultura, cultivo, espaços abertos. Use diferentes tipos de campos (wheat, corn)."
  },
  {
    id: 283,
    palavra_ingles: "jungle",
    traducao_portugues: "selva",
    categoria: "nature",
    frase_exemplo_ingles: "Dense vegetation fills the humid tropical jungle.",
    frase_exemplo_portugues: "Vegetação densa preenche a selva tropical úmida.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'jungle': Compare com 'forest'. Fale sobre densidade, umidade, biodiversidade. Descreva vida selvagem."
  },
  {
    id: 284,
    palavra_ingles: "swamp",
    traducao_portugues: "pântano",
    categoria: "nature",
    frase_exemplo_ingles: "The murky swamp is home to alligators and birds.",
    frase_exemplo_portugues: "O pântano turvo é lar de jacarés e pássaros.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'swamp': Fale sobre água parada, vida selvagem, ecossistema único. Use adjetivos como murky, humid."
  },
  {
    id: 285,
    palavra_ingles: "marsh",
    traducao_portugues: "brejo",
    categoria: "nature",
    frase_exemplo_ingles: "Tall reeds grow abundantly in the coastal marsh.",
    frase_exemplo_portugues: "Juncos altos crescem abundantemente no brejo costeiro.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'marsh': Compare com 'swamp'. Fale sobre plantas aquáticas, aves migratórias, ecossistema."
  },
  {
    id: 286,
    palavra_ingles: "oasis",
    traducao_portugues: "oásis",
    categoria: "nature",
    frase_exemplo_ingles: "The desert oasis provides water and shade for travelers.",
    frase_exemplo_portugues: "O oásis do deserto fornece água e sombra para viajantes.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'oasis': Fale sobre contraste com deserto, vida, esperança. Use como metáfora para alívio."
  },
  {
    id: 287,
    palavra_ingles: "plateau",
    traducao_portugues: "planalto",
    categoria: "nature",
    frase_exemplo_ingles: "The high plateau offers stunning panoramic views.",
    frase_exemplo_portugues: "O planalto alto oferece vistas panorâmicas deslumbrantes.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'plateau': Fale sobre elevação, superfície plana, formação geológica. Descreva vistas e altitude."
  },
  {
    id: 288,
    palavra_ingles: "ridge",
    traducao_portugues: "crista",
    categoria: "nature",
    frase_exemplo_ingles: "The mountain ridge forms a natural boundary.",
    frase_exemplo_portugues: "A crista da montanha forma uma fronteira natural.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'ridge': Fale sobre formações montanhosas, divisores de água, fronteiras naturais."
  },
  {
    id: 289,
    palavra_ingles: "peak",
    traducao_portugues: "pico",
    categoria: "nature",
    frase_exemplo_ingles: "Snow covers the mountain peak year-round.",
    frase_exemplo_portugues: "Neve cobre o pico da montanha o ano todo.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'peak': Fale sobre ponto mais alto, escalada, conquista. Use como metáfora para sucesso."
  },
  {
    id: 290,
    palavra_ingles: "slope",
    traducao_portugues: "encosta",
    categoria: "nature",
    frase_exemplo_ingles: "Skiers enjoy the steep mountain slope in winter.",
    frase_exemplo_portugues: "Esquiadores aproveitam a encosta íngreme da montanha no inverno.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'slope': Fale sobre inclinação, esqui, dificuldade. Use adjetivos como steep, gentle, dangerous."
  },
  {
    id: 291,
    palavra_ingles: "shore",
    traducao_portugues: "margem",
    categoria: "nature",
    frase_exemplo_ingles: "Waves gently wash against the rocky shore.",
    frase_exemplo_portugues: "Ondas lavam suavemente contra a margem rochosa.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'shore': Fale sobre encontro entre terra e água. Compare com 'coast', 'beach'. Use diferentes tipos."
  },
  {
    id: 292,
    palavra_ingles: "coast",
    traducao_portugues: "costa",
    categoria: "nature",
    frase_exemplo_ingles: "The rugged coast attracts many tourists annually.",
    frase_exemplo_portugues: "A costa acidentada atrai muitos turistas anualmente.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'coast': Fale sobre linha costeira, turismo, geografia. Compare com 'shore'. Descreva diferentes tipos."
  },
  {
    id: 293,
    palavra_ingles: "bay",
    traducao_portugues: "baía",
    categoria: "nature",
    frase_exemplo_ingles: "Sailboats anchor safely in the protected bay.",
    frase_exemplo_portugues: "Veleiros ancoram com segurança na baía protegida.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'bay': Fale sobre proteção natural, navegação, portos. Descreva formato e função."
  },
  {
    id: 294,
    palavra_ingles: "cape",
    traducao_portugues: "cabo",
    categoria: "nature",
    frase_exemplo_ingles: "The lighthouse stands proudly on the rocky cape.",
    frase_exemplo_portugues: "O farol fica orgulhosamente no cabo rochoso.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'cape': Fale sobre projeção de terra, navegação, marcos geográficos. Compare com 'peninsula'."
  },
  {
    id: 295,
    palavra_ingles: "peninsula",
    traducao_portugues: "península",
    categoria: "nature",
    frase_exemplo_ingles: "The narrow peninsula extends far into the sea.",
    frase_exemplo_portugues: "A península estreita se estende mar adentro.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'peninsula': Fale sobre geografia, formação de terra cercada por água. Compare com 'cape'."
  },
  {
    id: 296,
    palavra_ingles: "strait",
    traducao_portugues: "estreito",
    categoria: "nature",
    frase_exemplo_ingles: "Ships navigate carefully through the narrow strait.",
    frase_exemplo_portugues: "Navios navegam cuidadosamente pelo estreito.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'strait': Fale sobre passagem estreita entre terras, navegação, geografia. Descreva importância comercial."
  },
  {
    id: 297,
    palavra_ingles: "channel",
    traducao_portugues: "canal",
    categoria: "nature",
    frase_exemplo_ingles: "The natural channel connects two large bodies of water.",
    frase_exemplo_portugues: "O canal natural conecta duas grandes massas de água.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'channel': Fale sobre passagem de água, navegação, comunicação. Compare natural vs. artificial."
  },
  {
    id: 298,
    palavra_ingles: "delta",
    traducao_portugues: "delta",
    categoria: "nature",
    frase_exemplo_ingles: "The river delta creates fertile land for farming.",
    frase_exemplo_portugues: "O delta do rio cria terra fértil para agricultura.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'delta': Fale sobre formação na foz do rio, fertilidade, agricultura. Descreva formato triangular."
  },
  {
    id: 299,
    palavra_ingles: "estuary",
    traducao_portugues: "estuário",
    categoria: "nature",
    frase_exemplo_ingles: "The estuary provides a nursery for young fish.",
    frase_exemplo_portugues: "O estuário fornece um berçário para peixes jovens.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'estuary': Fale sobre encontro de rio e mar, ecossistema único, vida marinha."
  },
  {
    id: 300,
    palavra_ingles: "reef",
    traducao_portugues: "recife",
    categoria: "nature",
    frase_exemplo_ingles: "Colorful fish swim around the coral reef.",
    frase_exemplo_portugues: "Peixes coloridos nadam ao redor do recife de coral.",
    imagem_url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg",
    prompt_pratica: "Pratique com 'reef': Fale sobre vida marinha, mergulho, conservação. Descreva biodiversidade e beleza."
  },

  // BODY (50 words)
  {
    id: 301,
    palavra_ingles: "head",
    traducao_portugues: "cabeça",
    categoria: "body",
    frase_exemplo_ingles: "She nods her head to show agreement.",
    frase_exemplo_portugues: "Ela balança a cabeça para mostrar concordância.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'head': Fale sobre partes da cabeça, movimentos. Use expressões como 'head over heels', 'use your head'."
  },
  {
    id: 302,
    palavra_ingles: "face",
    traducao_portugues: "rosto",
    categoria: "body",
    frase_exemplo_ingles: "A smile brightens up her beautiful face.",
    frase_exemplo_portugues: "Um sorriso ilumina seu rosto bonito.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'face': Fale sobre expressões faciais, emoções. Use verbos como smile, frown, blush. Descreva características."
  },
  {
    id: 303,
    palavra_ingles: "eye",
    traducao_portugues: "olho",
    categoria: "body",
    frase_exemplo_ingles: "Her blue eyes sparkle in the sunlight.",
    frase_exemplo_portugues: "Seus olhos azuis brilham na luz do sol.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'eye': Fale sobre cores, visão, expressões. Use 'eyes' no plural. Expressões como 'eye to eye', 'keep an eye on'."
  },
  {
    id: 304,
    palavra_ingles: "nose",
    traducao_portugues: "nariz",
    categoria: "body",
    frase_exemplo_ingles: "The delicious smell reaches my nose immediately.",
    frase_exemplo_portugues: "O cheiro delicioso chega ao meu nariz imediatamente.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'nose': Fale sobre olfato, respiração, formas. Use expressões como 'follow your nose', 'nose around'."
  },
  {
    id: 305,
    palavra_ingles: "mouth",
    traducao_portugues: "boca",
    categoria: "body",
    frase_exemplo_ingles: "He opens his mouth to speak clearly.",
    frase_exemplo_portugues: "Ele abre a boca para falar claramente.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'mouth': Fale sobre fala, alimentação, expressões. Use verbos como open, close, smile. Expressões idiomáticas."
  },
  {
    id: 306,
    palavra_ingles: "ear",
    traducao_portugues: "orelha",
    categoria: "body",
    frase_exemplo_ingles: "Music sounds beautiful in my ears.",
    frase_exemplo_portugues: "Música soa linda nos meus ouvidos.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'ear': Fale sobre audição, equilíbrio. Use 'ears' no plural. Expressões como 'all ears', 'ear to ear'."
  },
  {
    id: 307,
    palavra_ingles: "hair",
    traducao_portugues: "cabelo",
    categoria: "body",
    frase_exemplo_ingles: "She brushes her long hair every morning.",
    frase_exemplo_portugues: "Ela escova seu cabelo longo toda manhã.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'hair': Fale sobre cores, texturas, estilos. Use verbos como brush, cut, wash. Descreva diferentes penteados."
  },
  {
    id: 308,
    palavra_ingles: "neck",
    traducao_portugues: "pescoço",
    categoria: "body",
    frase_exemplo_ingles: "The scarf keeps my neck warm in winter.",
    frase_exemplo_portugues: "O cachecol mantém meu pescoço aquecido no inverno.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'neck': Fale sobre movimento, proteção, acessórios. Use expressões como 'neck and neck', 'pain in the neck'."
  },
  {
    id: 309,
    palavra_ingles: "shoulder",
    traducao_portugues: "ombro",
    categoria: "body",
    frase_exemplo_ingles: "He carries the heavy bag on his shoulder.",
    frase_exemplo_portugues: "Ele carrega a bolsa pesada no ombro.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'shoulder': Fale sobre carregar peso, gestos. Use 'shoulders' no plural. Expressões como 'shoulder to shoulder'."
  },
  {
    id: 310,
    palavra_ingles: "arm",
    traducao_portugues: "braço",
    categoria: "body",
    frase_exemplo_ingles: "She raises her arm to ask a question.",
    frase_exemplo_portugues: "Ela levanta o braço para fazer uma pergunta.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'arm': Fale sobre movimentos, força. Use 'arms' no plural. Expressões como 'arm in arm', 'twist someone's arm'."
  },
  {
    id: 311,
    palavra_ingles: "hand",
    traducao_portugues: "mão",
    categoria: "body",
    frase_exemplo_ingles: "They shake hands when they meet.",
    frase_exemplo_portugues: "Eles apertam as mãos quando se encontram.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'hand': Fale sobre gestos, trabalho manual. Use 'hands' no plural. Muitas expressões idiomáticas."
  },
  {
    id: 312,
    palavra_ingles: "finger",
    traducao_portugues: "dedo",
    categoria: "body",
    frase_exemplo_ingles: "She points with her finger to show direction.",
    frase_exemplo_portugues: "Ela aponta com o dedo para mostrar a direção.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'finger': Fale sobre precisão, toque. Use 'fingers' no plural. Nomes específicos (thumb, index finger)."
  },
  {
    id: 313,
    palavra_ingles: "thumb",
    traducao_portugues: "polegar",
    categoria: "body",
    frase_exemplo_ingles: "He gives a thumbs up to show approval.",
    frase_exemplo_portugues: "Ele faz sinal de positivo com o polegar para mostrar aprovação.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'thumb': Fale sobre gestos, aprovação. Expressões como 'thumbs up', 'rule of thumb', 'all thumbs'."
  },
  {
    id: 314,
    palavra_ingles: "chest",
    traducao_portugues: "peito",
    categoria: "body",
    frase_exemplo_ingles: "He takes a deep breath, expanding his chest.",
    frase_exemplo_portugues: "Ele respira fundo, expandindo o peito.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'chest': Fale sobre respiração, força, orgulho. Expressões como 'get off your chest', 'chest out'."
  },
  {
    id: 315,
    palavra_ingles: "back",
    traducao_portugues: "costas",
    categoria: "body",
    frase_exemplo_ingles: "She feels pain in her back after lifting boxes.",
    frase_exemplo_portugues: "Ela sente dor nas costas depois de levantar caixas.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'back': Fale sobre postura, dor, apoio. Muitas expressões como 'back to back', 'behind your back'."
  },
  {
    id: 316,
    palavra_ingles: "stomach",
    traducao_portugues: "estômago",
    categoria: "body",
    frase_exemplo_ingles: "My stomach growls when I'm hungry.",
    frase_exemplo_portugues: "Meu estômago ronca quando estou com fome.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'stomach': Fale sobre digestão, fome, emoções. Expressões como 'stomach ache', 'butterflies in stomach'."
  },
  {
    id: 317,
    palavra_ingles: "waist",
    traducao_portugues: "cintura",
    categoria: "body",
    frase_exemplo_ingles: "The belt fits perfectly around her waist.",
    frase_exemplo_portugues: "O cinto fica perfeito na cintura dela.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'waist': Fale sobre roupas, medidas, forma do corpo. Use com cintos, medições."
  },
  {
    id: 318,
    palavra_ingles: "hip",
    traducao_portugues: "quadril",
    categoria: "body",
    frase_exemplo_ingles: "She places her hands on her hips confidently.",
    frase_exemplo_portugues: "Ela coloca as mãos no quadril com confiança.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'hip': Fale sobre postura, dança, movimento. Use 'hips' no plural. Expressões como 'hip hop'."
  },
  {
    id: 319,
    palavra_ingles: "leg",
    traducao_portugues: "perna",
    categoria: "body",
    frase_exemplo_ingles: "He stretches his legs after sitting for hours.",
    frase_exemplo_portugues: "Ele estica as pernas depois de ficar sentado por horas.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'leg': Fale sobre movimento, exercício. Use 'legs' no plural. Expressões como 'pull your leg', 'leg up'."
  },
  {
    id: 320,
    palavra_ingles: "knee",
    traducao_portugues: "joelho",
    categoria: "body",
    frase_exemplo_ingles: "She bends her knee to pick up the fallen book.",
    frase_exemplo_portugues: "Ela dobra o joelho para pegar o livro que caiu.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'knee': Fale sobre flexibilidade, lesões. Use 'knees' no plural. Expressões como 'on your knees'."
  },
  {
    id: 321,
    palavra_ingles: "foot",
    traducao_portugues: "pé",
    categoria: "body",
    frase_exemplo_ingles: "My foot hurts after walking all day.",
    frase_exemplo_portugues: "Meu pé dói depois de caminhar o dia todo.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'foot': Note plural 'feet'. Fale sobre caminhar, sapatos. Expressões como 'foot in mouth', 'on foot'."
  },
  {
    id: 322,
    palavra_ingles: "toe",
    traducao_portugues: "dedo do pé",
    categoria: "body",
    frase_exemplo_ingles: "She paints her toes with bright red polish.",
    frase_exemplo_portugues: "Ela pinta os dedos dos pés com esmalte vermelho brilhante.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'toe': Use 'toes' no plural. Fale sobre equilíbrio, sapatos. Expressões como 'toe to toe', 'on your toes'."
  },
  {
    id: 323,
    palavra_ingles: "heel",
    traducao_portugues: "calcanhar",
    categoria: "body",
    frase_exemplo_ingles: "The new shoes rub against my heel uncomfortably.",
    frase_exemplo_portugues: "Os sapatos novos esfregam no meu calcanhar desconfortavelmente.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'heel': Fale sobre sapatos, caminhada. Expressões como 'Achilles heel', 'head over heels'."
  },
  {
    id: 324,
    palavra_ingles: "ankle",
    traducao_portugues: "tornozelo",
    categoria: "body",
    frase_exemplo_ingles: "She twists her ankle while running in the park.",
    frase_exemplo_portugues: "Ela torce o tornozelo enquanto corre no parque.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'ankle': Fale sobre lesões, flexibilidade. Use 'ankles' no plural. Descreva movimentos e cuidados."
  },
  {
    id: 325,
    palavra_ingles: "wrist",
    traducao_portugues: "pulso",
    categoria: "body",
    frase_exemplo_ingles: "He wears a watch on his left wrist.",
    frase_exemplo_portugues: "Ele usa um relógio no pulso esquerdo.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'wrist': Fale sobre relógios, movimento das mãos. Use 'wrists' no plural. Descreva flexibilidade."
  },
  {
    id: 326,
    palavra_ingles: "elbow",
    traducao_portugues: "cotovelo",
    categoria: "body",
    frase_exemplo_ingles: "She rests her elbow on the table while reading.",
    frase_exemplo_portugues: "Ela apoia o cotovelo na mesa enquanto lê.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'elbow': Fale sobre apoio, movimento. Use 'elbows' no plural. Expressões como 'elbow room', 'elbow grease'."
  },
  {
    id: 327,
    palavra_ingles: "skin",
    traducao_portugues: "pele",
    categoria: "body",
    frase_exemplo_ingles: "Sunscreen protects your skin from harmful rays.",
    frase_exemplo_portugues: "Protetor solar protege sua pele dos raios nocivos.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'skin': Fale sobre proteção, cuidados, tipos. Expressões como 'thick skin', 'skin deep'."
  },
  {
    id: 328,
    palavra_ingles: "bone",
    traducao_portugues: "osso",
    categoria: "body",
    frase_exemplo_ingles: "Strong bones support your entire body structure.",
    frase_exemplo_portugues: "Ossos fortes sustentam toda a estrutura do seu corpo.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'bone': Fale sobre estrutura, força, saúde. Use 'bones' no plural. Expressões como 'bone to pick'."
  },
  {
    id: 329,
    palavra_ingles: "muscle",
    traducao_portugues: "músculo",
    categoria: "body",
    frase_exemplo_ingles: "Exercise helps build strong muscles throughout the body.",
    frase_exemplo_portugues: "Exercício ajuda a construir músculos fortes por todo o corpo.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'muscle': Fale sobre exercício, força, desenvolvimento. Use 'muscles' no plural. Expressões como 'muscle in'."
  },
  {
    id: 330,
    palavra_ingles: "blood",
    traducao_portugues: "sangue",
    categoria: "body",
    frase_exemplo_ingles: "Blood carries oxygen to all parts of the body.",
    frase_exemplo_portugues: "O sangue carrega oxigênio para todas as partes do corpo.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'blood': Fale sobre circulação, saúde, doação. Expressões como 'blood pressure', 'bad blood'."
  },
  {
    id: 331,
    palavra_ingles: "heart",
    traducao_portugues: "coração",
    categoria: "body",
    frase_exemplo_ingles: "Your heart beats faster when you exercise.",
    frase_exemplo_portugues: "Seu coração bate mais rápido quando você se exercita.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'heart': Fale sobre emoções, saúde, amor. Muitas expressões como 'heart attack', 'by heart'."
  },
  {
    id: 332,
    palavra_ingles: "lung",
    traducao_portugues: "pulmão",
    categoria: "body",
    frase_exemplo_ingles: "Deep breathing exercises strengthen your lungs.",
    frase_exemplo_portugues: "Exercícios de respiração profunda fortalecem seus pulmões.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'lung': Use 'lungs' no plural. Fale sobre respiração, saúde, exercício. Descreva função respiratória."
  },
  {
    id: 333,
    palavra_ingles: "brain",
    traducao_portugues: "cérebro",
    categoria: "body",
    frase_exemplo_ingles: "The brain controls all body functions automatically.",
    frase_exemplo_portugues: "O cérebro controla todas as funções do corpo automaticamente.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'brain': Fale sobre inteligência, controle, pensamento. Expressões como 'brain storm', 'brain drain'."
  },
  {
    id: 334,
    palavra_ingles: "liver",
    traducao_portugues: "fígado",
    categoria: "body",
    frase_exemplo_ingles: "The liver filters toxins from your bloodstream.",
    frase_exemplo_portugues: "O fígado filtra toxinas da sua corrente sanguínea.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'liver': Fale sobre função de filtração, saúde, cuidados. Descreva importância para o corpo."
  },
  {
    id: 335,
    palavra_ingles: "kidney",
    traducao_portugues: "rim",
    categoria: "body",
    frase_exemplo_ingles: "Healthy kidneys filter waste from your blood.",
    frase_exemplo_portugues: "Rins saudáveis filtram resíduos do seu sangue.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'kidney': Use 'kidneys' no plural. Fale sobre filtração, saúde, hidratação. Descreva função renal."
  },
  {
    id: 336,
    palavra_ingles: "tooth",
    traducao_portugues: "dente",
    categoria: "body",
    frase_exemplo_ingles: "Brush each tooth carefully to prevent cavities.",
    frase_exemplo_portugues: "Escove cada dente cuidadosamente para prevenir cáries.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'tooth': Note plural 'teeth'. Fale sobre higiene, alimentação. Expressões como 'sweet tooth', 'tooth and nail'."
  },
  {
    id: 337,
    palavra_ingles: "tongue",
    traducao_portugues: "língua",
    categoria: "body",
    frase_exemplo_ingles: "Your tongue helps you taste different flavors.",
    frase_exemplo_portugues: "Sua língua ajuda você a sentir sabores diferentes.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'tongue': Fale sobre paladar, fala, idiomas. Expressões como 'mother tongue', 'tongue twister'."
  },
  {
    id: 338,
    palavra_ingles: "lip",
    traducao_portugues: "lábio",
    categoria: "body",
    frase_exemplo_ingles: "She applies lipstick to her lips before going out.",
    frase_exemplo_portugues: "Ela aplica batom nos lábios antes de sair.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'lip': Use 'lips' no plural. Fale sobre fala, beijos, cuidados. Expressões como 'bite your lip'."
  },
  {
    id: 339,
    palavra_ingles: "chin",
    traducao_portugues: "queixo",
    categoria: "body",
    frase_exemplo_ingles: "He strokes his chin while thinking deeply.",
    frase_exemplo_portugues: "Ele acaricia o queixo enquanto pensa profundamente.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'chin': Fale sobre gestos de pensamento, formato do rosto. Expressões como 'chin up', 'take it on the chin'."
  },
  {
    id: 340,
    palavra_ingles: "cheek",
    traducao_portugues: "bochecha",
    categoria: "body",
    frase_exemplo_ingles: "The baby's cheeks turn red in the cold air.",
    frase_exemplo_portugues: "As bochechas do bebê ficam vermelhas no ar frio.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'cheek': Use 'cheeks' no plural. Fale sobre emoções, temperatura. Expressões como 'cheek to cheek'."
  },
  {
    id: 341,
    palavra_ingles: "forehead",
    traducao_portugues: "testa",
    categoria: "body",
    frase_exemplo_ingles: "Sweat drips from his forehead after exercising.",
    frase_exemplo_portugues: "Suor escorre da testa dele depois de se exercitar.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'forehead': Fale sobre expressões, temperatura, pensamento. Descreva sinais de esforço ou preocupação."
  },
  {
    id: 342,
    palavra_ingles: "eyebrow",
    traducao_portugues: "sobrancelha",
    categoria: "body",
    frase_exemplo_ingles: "She raises her eyebrow to show surprise.",
    frase_exemplo_portugues: "Ela levanta a sobrancelha para mostrar surpresa.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'eyebrow': Use 'eyebrows' no plural. Fale sobre expressões faciais, surpresa, ceticismo."
  },
  {
    id: 343,
    palavra_ingles: "eyelash",
    traducao_portugues: "cílio",
    categoria: "body",
    frase_exemplo_ingles: "Long eyelashes frame her beautiful eyes perfectly.",
    frase_exemplo_portugues: "Cílios longos emolduram perfeitamente seus olhos bonitos.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'eyelash': Use 'eyelashes' no plural. Fale sobre beleza, proteção dos olhos, maquiagem."
  },
  {
    id: 344,
    palavra_ingles: "beard",
    traducao_portugues: "barba",
    categoria: "body",
    frase_exemplo_ingles: "His thick beard makes him look distinguished.",
    frase_exemplo_portugues: "Sua barba espessa o faz parecer distinto.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'beard': Fale sobre estilos, cuidados, aparência masculina. Descreva diferentes tipos e comprimentos."
  },
  {
    id: 345,
    palavra_ingles: "mustache",
    traducao_portugues: "bigode",
    categoria: "body",
    frase_exemplo_ingles: "The gentleman twirls his mustache thoughtfully.",
    frase_exemplo_portugues: "O cavalheiro torce o bigode pensativamente.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'mustache': Use também 'moustache' (britânico). Fale sobre estilos, época, personalidade."
  },
  {
    id: 346,
    palavra_ingles: "wrinkle",
    traducao_portugues: "ruga",
    categoria: "body",
    frase_exemplo_ingles: "Smile lines create gentle wrinkles around her eyes.",
    frase_exemplo_portugues: "Linhas de sorriso criam rugas suaves ao redor dos olhos dela.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'wrinkle': Use 'wrinkles' no plural. Fale sobre idade, expressões, cuidados com a pele."
  },
  {
    id: 347,
    palavra_ingles: "freckle",
    traducao_portugues: "sarda",
    categoria: "body",
    frase_exemplo_ingles: "Cute freckles dot her nose and cheeks.",
    frase_exemplo_portugues: "Sardas fofas pontilham seu nariz e bochechas.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'freckle': Use 'freckles' no plural. Fale sobre características naturais, sol, beleza única."
  },
  {
    id: 348,
    palavra_ingles: "dimple",
    traducao_portugues: "covinha",
    categoria: "body",
    frase_exemplo_ingles: "Her dimples appear when she smiles widely.",
    frase_exemplo_portugues: "Suas covinhas aparecem quando ela sorri amplamente.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'dimple': Use 'dimples' no plural. Fale sobre charme, sorriso, características atrativas."
  },
  {
    id: 349,
    palavra_ingles: "scar",
    traducao_portugues: "cicatriz",
    categoria: "body",
    frase_exemplo_ingles: "The small scar tells a story of childhood adventure.",
    frase_exemplo_portugues: "A pequena cicatriz conta uma história de aventura da infância.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'scar': Fale sobre histórias, cura, memórias. Use como metáfora para experiências marcantes."
  },
  {
    id: 350,
    palavra_ingles: "birthmark",
    traducao_portugues: "marca de nascença",
    categoria: "body",
    frase_exemplo_ingles: "The heart-shaped birthmark makes her unique.",
    frase_exemplo_portugues: "A marca de nascença em formato de coração a torna única.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'birthmark': Fale sobre características únicas, identidade, aceitação. Descreva diferentes formas e tamanhos."
  },

  // ACTIONS (50 words)
  {
    id: 351,
    palavra_ingles: "walk",
    traducao_portugues: "caminhar",
    categoria: "actions",
    frase_exemplo_ingles: "I walk to work every morning for exercise.",
    frase_exemplo_portugues: "Eu caminho para o trabalho toda manhã para me exercitar.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'walk': Use em diferentes tempos verbais. Fale sobre diferentes tipos (stroll, march, hike). Compare com outros movimentos."
  },
  {
    id: 352,
    palavra_ingles: "run",
    traducao_portugues: "correr",
    categoria: "actions",
    frase_exemplo_ingles: "She runs five miles every morning before breakfast.",
    frase_exemplo_portugues: "Ela corre cinco milhas toda manhã antes do café da manhã.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'run': Fale sobre exercício, velocidade, competições. Use expressões como 'run out of', 'run into'."
  },
  {
    id: 353,
    palavra_ingles: "jump",
    traducao_portugues: "pular",
    categoria: "actions",
    frase_exemplo_ingles: "Children love to jump on the trampoline.",
    frase_exemplo_portugues: "Crianças adoram pular no trampolim.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'jump': Fale sobre altura, alegria, esportes. Use expressões como 'jump for joy', 'jump to conclusions'."
  },
  {
    id: 354,
    palavra_ingles: "sit",
    traducao_portugues: "sentar",
    categoria: "actions",
    frase_exemplo_ingles: "Please sit down and make yourself comfortable.",
    frase_exemplo_portugues: "Por favor, sente-se e fique à vontade.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'sit': Use 'sit down', 'sit up'. Fale sobre postura, móveis, relaxamento. Compare com 'seat'."
  },
  {
    id: 355,
    palavra_ingles: "stand",
    traducao_portugues: "ficar em pé",
    categoria: "actions",
    frase_exemplo_ingles: "Everyone stands when the judge enters the courtroom.",
    frase_exemplo_portugues: "Todos ficam em pé quando o juiz entra no tribunal.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'stand': Use 'stand up', 'stand out'. Fale sobre respeito, postura. Expressões como 'stand for'."
  },
  {
    id: 356,
    palavra_ingles: "lie",
    traducao_portugues: "deitar",
    categoria: "actions",
    frase_exemplo_ingles: "I lie down on the soft bed to rest.",
    frase_exemplo_portugues: "Eu me deito na cama macia para descansar.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'lie': Note diferença entre 'lie down' (deitar) e 'lie' (mentir). Use 'lie down', 'lying'."
  },
  {
    id: 357,
    palavra_ingles: "sleep",
    traducao_portugues: "dormir",
    categoria: "actions",
    frase_exemplo_ingles: "Babies sleep up to 16 hours per day.",
    frase_exemplo_portugues: "Bebês dormem até 16 horas por dia.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'sleep': Fale sobre descanso, sonhos, horários. Use expressões como 'sleep tight', 'sleep on it'."
  },
  {
    id: 358,
    palavra_ingles: "eat",
    traducao_portugues: "comer",
    categoria: "actions",
    frase_exemplo_ingles: "We eat dinner together as a family every night.",
    frase_exemplo_portugues: "Jantamos juntos em família toda noite.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'eat': Fale sobre refeições, nutrição, hábitos. Use 'eat out', 'eat up'. Compare com 'have' para refeições."
  },
  {
    id: 359,
    palavra_ingles: "drink",
    traducao_portugues: "beber",
    categoria: "actions",
    frase_exemplo_ingles: "Remember to drink plenty of water throughout the day.",
    frase_exemplo_portugues: "Lembre-se de beber bastante água durante o dia.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'drink': Fale sobre hidratação, diferentes bebidas. Use expressões como 'drink up', 'drink to'."
  },
  {
    id: 360,
    palavra_ingles: "cook",
    traducao_portugues: "cozinhar",
    categoria: "actions",
    frase_exemplo_ingles: "My grandmother loves to cook traditional recipes.",
    frase_exemplo_portugues: "Minha avó adora cozinhar receitas tradicionais.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'cook': Fale sobre métodos (bake, fry, boil). Use como substantivo (the cook). Descreva habilidades culinárias."
  },
  {
    id: 361,
    palavra_ingles: "read",
    traducao_portugues: "ler",
    categoria: "actions",
    frase_exemplo_ingles: "She reads at least one book every month.",
    frase_exemplo_portugues: "Ela lê pelo menos um livro todo mês.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'read': Fale sobre diferentes materiais (books, newspapers, signs). Use expressões como 'read between the lines'."
  },
  {
    id: 362,
    palavra_ingles: "write",
    traducao_portugues: "escrever",
    categoria: "actions",
    frase_exemplo_ingles: "Students write essays to practice their English skills.",
    frase_exemplo_portugues: "Estudantes escrevem redações para praticar suas habilidades em inglês.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'write': Fale sobre diferentes tipos (letters, stories, notes). Use 'write down', 'write up'."
  },
  {
    id: 363,
    palavra_ingles: "speak",
    traducao_portugues: "falar",
    categoria: "actions",
    frase_exemplo_ingles: "He speaks three languages fluently.",
    frase_exemplo_portugues: "Ele fala três idiomas fluentemente.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'speak': Compare com 'talk', 'say', 'tell'. Fale sobre idiomas, comunicação. Use 'speak up', 'speak out'."
  },
  {
    id: 364,
    palavra_ingles: "listen",
    traducao_portugues: "escutar",
    categoria: "actions",
    frase_exemplo_ingles: "Good students listen carefully to their teachers.",
    frase_exemplo_portugues: "Bons estudantes escutam atentamente seus professores.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'listen': Compare com 'hear'. Use 'listen to'. Fale sobre atenção, música, conselhos."
  },
  {
    id: 365,
    palavra_ingles: "watch",
    traducao_portugues: "assistir",
    categoria: "actions",
    frase_exemplo_ingles: "We watch movies together on Friday nights.",
    frase_exemplo_portugues: "Assistimos filmes juntos nas noites de sexta-feira.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'watch': Compare com 'see', 'look'. Fale sobre TV, filmes, observação. Use 'watch out'."
  },
  {
    id: 366,
    palavra_ingles: "look",
    traducao_portugues: "olhar",
    categoria: "actions",
    frase_exemplo_ingles: "Look both ways before crossing the street.",
    frase_exemplo_portugues: "Olhe para os dois lados antes de atravessar a rua.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'look': Use 'look at', 'look for', 'look after'. Compare com 'see', 'watch'. Muitas expressões."
  },
  {
    id: 367,
    palavra_ingles: "see",
    traducao_portugues: "ver",
    categoria: "actions",
    frase_exemplo_ingles: "I can see the mountains clearly from here.",
    frase_exemplo_portugues: "Posso ver as montanhas claramente daqui.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'see': Compare com 'look', 'watch'. Fale sobre visão, compreensão. Use 'see you', 'I see'."
  },
  {
    id: 368,
    palavra_ingles: "hear",
    traducao_portugues: "ouvir",
    categoria: "actions",
    frase_exemplo_ingles: "Can you hear the birds singing outside?",
    frase_exemplo_portugues: "Você consegue ouvir os pássaros cantando lá fora?",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'hear': Compare com 'listen'. Fale sobre sons, notícias. Use 'hear from', 'hear about'."
  },
  {
    id: 369,
    palavra_ingles: "touch",
    traducao_portugues: "tocar",
    categoria: "actions",
    frase_exemplo_ingles: "Please don't touch the wet paint on the wall.",
    frase_exemplo_portugues: "Por favor, não toque na tinta molhada da parede.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'touch': Fale sobre sentidos, contato físico. Use expressões como 'in touch', 'touch base'."
  },
  {
    id: 370,
    palavra_ingles: "smell",
    traducao_portugues: "cheirar",
    categoria: "actions",
    frase_exemplo_ingles: "The flowers smell wonderful in the garden.",
    frase_exemplo_portugues: "As flores cheiram maravilhosamente no jardim.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'smell': Use como verbo e substantivo. Fale sobre aromas, perfumes, comida. Descreva diferentes cheiros."
  },
  {
    id: 371,
    palavra_ingles: "taste",
    traducao_portugues: "provar",
    categoria: "actions",
    frase_exemplo_ingles: "Would you like to taste this delicious soup?",
    frase_exemplo_portugues: "Você gostaria de provar esta sopa deliciosa?",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'taste': Use como verbo e substantivo. Fale sobre sabores, comida, preferências. Descreva gostos."
  },
  {
    id: 372,
    palavra_ingles: "think",
    traducao_portugues: "pensar",
    categoria: "actions",
    frase_exemplo_ingles: "I think this is the best solution to our problem.",
    frase_exemplo_portugues: "Eu acho que esta é a melhor solução para nosso problema.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'think': Use 'think about', 'think of'. Fale sobre opiniões, reflexão. Compare com 'believe'."
  },
  {
    id: 373,
    palavra_ingles: "know",
    traducao_portugues: "saber",
    categoria: "actions",
    frase_exemplo_ingles: "Do you know how to play the guitar?",
    frase_exemplo_portugues: "Você sabe tocar violão?",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'know': Compare com 'know about', 'know how to'. Fale sobre conhecimento, habilidades, pessoas."
  },
  {
    id: 374,
    palavra_ingles: "learn",
    traducao_portugues: "aprender",
    categoria: "actions",
    frase_exemplo_ingles: "Children learn new things every single day.",
    frase_exemplo_portugues: "Crianças aprendem coisas novas todos os dias.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'learn': Fale sobre educação, habilidades, experiência. Use 'learn about', 'learn how to'."
  },
  {
    id: 375,
    palavra_ingles: "teach",
    traducao_portugues: "ensinar",
    categoria: "actions",
    frase_exemplo_ingles: "My father teaches me how to drive safely.",
    frase_exemplo_portugues: "Meu pai me ensina como dirigir com segurança.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'teach': Use estrutura 'teach someone something'. Fale sobre educação, transmissão de conhecimento."
  },
  {
    id: 376,
    palavra_ingles: "work",
    traducao_portugues: "trabalhar",
    categoria: "actions",
    frase_exemplo_ingles: "She works as a doctor at the local hospital.",
    frase_exemplo_portugues: "Ela trabalha como médica no hospital local.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'work': Use como verbo e substantivo. Fale sobre profissões, esforço. Use 'work out', 'work on'."
  },
  {
    id: 377,
    palavra_ingles: "play",
    traducao_portugues: "brincar/jogar",
    categoria: "actions",
    frase_exemplo_ingles: "Children play games in the playground happily.",
    frase_exemplo_portugues: "Crianças brincam no playground alegremente.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'play': Fale sobre jogos, instrumentos, esportes. Use 'play with', 'play against'. Múltiplos significados."
  },
  {
    id: 378,
    palavra_ingles: "study",
    traducao_portugues: "estudar",
    categoria: "actions",
    frase_exemplo_ingles: "Students study hard for their final exams.",
    frase_exemplo_portugues: "Estudantes estudam muito para suas provas finais.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'study': Fale sobre educação, concentração, matérias. Use como verbo e substantivo."
  },
  {
    id: 379,
    palavra_ingles: "help",
    traducao_portugues: "ajudar",
    categoria: "actions",
    frase_exemplo_ingles: "Can you help me carry these heavy boxes?",
    frase_exemplo_portugues: "Você pode me ajudar a carregar essas caixas pesadas?",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'help': Use 'help someone do something'. Fale sobre assistência, cooperação. Use como substantivo também."
  },
  {
    id: 380,
    palavra_ingles: "give",
    traducao_portugues: "dar",
    categoria: "actions",
    frase_exemplo_ingles: "Please give me your phone number.",
    frase_exemplo_portugues: "Por favor, me dê seu número de telefone.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'give': Use 'give someone something'. Fale sobre presentes, informações. Muitas expressões com 'give'."
  },
  {
    id: 381,
    palavra_ingles: "take",
    traducao_portugues: "pegar",
    categoria: "actions",
    frase_exemplo_ingles: "Take an umbrella because it might rain today.",
    frase_exemplo_portugues: "Pegue um guarda-chuva porque pode chover hoje.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'take': Múltiplos significados. Use 'take off', 'take care', 'take time'. Muito versátil."
  },
  {
    id: 382,
    palavra_ingles: "bring",
    traducao_portugues: "trazer",
    categoria: "actions",
    frase_exemplo_ingles: "Don't forget to bring your passport to the airport.",
    frase_exemplo_portugues: "Não esqueça de trazer seu passaporte para o aeroporto.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'bring': Compare com 'take'. Fale sobre direção do movimento. Use 'bring back', 'bring up'."
  },
  {
    id: 383,
    palavra_ingles: "carry",
    traducao_portugues: "carregar",
    categoria: "actions",
    frase_exemplo_ingles: "Strong men carry heavy furniture up the stairs.",
    frase_exemplo_portugues: "Homens fortes carregam móveis pesados escada acima.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'carry': Fale sobre peso, transporte. Use 'carry on', 'carry out'. Descreva diferentes formas de carregar."
  },
  {
    id: 384,
    palavra_ingles: "push",
    traducao_portugues: "empurrar",
    categoria: "actions",
    frase_exemplo_ingles: "Push the door gently to open it quietly.",
    frase_exemplo_portugues: "Empurre a porta suavemente para abri-la silenciosamente.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'push': Compare com 'pull'. Fale sobre força, direção. Use expressões como 'push yourself'."
  },
  {
    id: 385,
    palavra_ingles: "pull",
    traducao_portugues: "puxar",
    categoria: "actions",
    frase_exemplo_ingles: "Pull the rope firmly to ring the bell.",
    frase_exemplo_portugues: "Puxe a corda firmemente para tocar o sino.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'pull': Compare com 'push'. Fale sobre força, direção. Use 'pull over', 'pull through'."
  },
  {
    id: 386,
    palavra_ingles: "throw",
    traducao_portugues: "jogar/arremessar",
    categoria: "actions",
    frase_exemplo_ingles: "Throw the ball to your friend across the field.",
    frase_exemplo_portugues: "Jogue a bola para seu amigo do outro lado do campo.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'throw': Fale sobre esportes, força, direção. Use 'throw away', 'throw up'. Compare com 'toss'."
  },
  {
    id: 387,
    palavra_ingles: "catch",
    traducao_portugues: "pegar/agarrar",
    categoria: "actions",
    frase_exemplo_ingles: "Try to catch the ball with both hands.",
    frase_exemplo_portugues: "Tente pegar a bola com as duas mãos.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'catch': Fale sobre esportes, reflexos. Use 'catch up', 'catch on'. Múltiplos significados."
  },
  {
    id: 388,
    palavra_ingles: "hold",
    traducao_portugues: "segurar",
    categoria: "actions",
    frase_exemplo_ingles: "Hold my hand while we cross the busy street.",
    frase_exemplo_portugues: "Segure minha mão enquanto atravessamos a rua movimentada.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'hold': Fale sobre segurança, apoio. Use 'hold on', 'hold up'. Múltiplos significados e usos."
  },
  {
    id: 389,
    palavra_ingles: "open",
    traducao_portugues: "abrir",
    categoria: "actions",
    frase_exemplo_ingles: "Open the window to let fresh air inside.",
    frase_exemplo_portugues: "Abra a janela para deixar ar fresco entrar.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'open': Use como verbo e adjetivo. Fale sobre portas, janelas, lojas. Use 'open up'."
  },
  {
    id: 390,
    palavra_ingles: "close",
    traducao_portugues: "fechar",
    categoria: "actions",
    frase_exemplo_ingles: "Please close the door when you leave the room.",
    frase_exemplo_portugues: "Por favor, feche a porta quando sair do cômodo.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'close': Use como verbo e adjetivo. Compare 'close' (fechar) e 'close' (perto). Use 'close down'."
  },
  {
    id: 391,
    palavra_ingles: "turn",
    traducao_portugues: "virar",
    categoria: "actions",
    frase_exemplo_ingles: "Turn left at the next traffic light.",
    frase_exemplo_portugues: "Vire à esquerda no próximo semáforo.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'turn': Fale sobre direções, mudanças. Use 'turn on', 'turn off', 'turn around'. Muito versátil."
  },
  {
    id: 392,
    palavra_ingles: "start",
    traducao_portugues: "começar",
    categoria: "actions",
    frase_exemplo_ingles: "Let's start the meeting with introductions.",
    frase_exemplo_portugues: "Vamos começar a reunião com apresentações.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'start': Compare com 'begin'. Use como verbo e substantivo. Fale sobre início, motores."
  },
  {
    id: 393,
    palavra_ingles: "stop",
    traducao_portugues: "parar",
    categoria: "actions",
    frase_exemplo_ingles: "The bus stops at every corner in downtown.",
    frase_exemplo_portugues: "O ônibus para em toda esquina no centro da cidade.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'stop': Use como verbo e substantivo. Fale sobre movimento, atividades. Use 'stop by', 'stop over'."
  },
  {
    id: 394,
    palavra_ingles: "move",
    traducao_portugues: "mover",
    categoria: "actions",
    frase_exemplo_ingles: "We need to move the furniture to clean underneath.",
    frase_exemplo_portugues: "Precisamos mover os móveis para limpar embaixo.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'move': Fale sobre mudança de posição, casa. Use 'move in', 'move out', 'move on'."
  },
  {
    id: 395,
    palavra_ingles: "dance",
    traducao_portugues: "dançar",
    categoria: "actions",
    frase_exemplo_ingles: "They dance beautifully together at the wedding.",
    frase_exemplo_portugues: "Eles dançam lindamente juntos no casamento.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'dance': Fale sobre diferentes estilos, música, celebrações. Use como verbo e substantivo."
  },
  {
    id: 396,
    palavra_ingles: "sing",
    traducao_portugues: "cantar",
    categoria: "actions",
    frase_exemplo_ingles: "She sings beautifully in the church choir.",
    frase_exemplo_portugues: "Ela canta lindamente no coral da igreja.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'sing': Fale sobre música, voz, emoções. Use 'sing along', 'sing out'. Descreva diferentes estilos."
  },
  {
    id: 397,
    palavra_ingles: "laugh",
    traducao_portugues: "rir",
    categoria: "actions",
    frase_exemplo_ingles: "Everyone laughs at his funny jokes.",
    frase_exemplo_portugues: "Todos riem das piadas engraçadas dele.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'laugh': Fale sobre humor, alegria. Use 'laugh at', 'laugh about'. Compare com 'smile'."
  },
  {
    id: 398,
    palavra_ingles: "cry",
    traducao_portugues: "chorar",
    categoria: "actions",
    frase_exemplo_ingles: "The baby cries when she is hungry or tired.",
    frase_exemplo_portugues: "O bebê chora quando está com fome ou cansado.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'cry': Fale sobre emoções, lágrimas. Use 'cry out', 'cry for'. Diferentes razões para chorar."
  },
  {
    id: 399,
    palavra_ingles: "smile",
    traducao_portugues: "sorrir",
    categoria: "actions",
    frase_exemplo_ingles: "She smiles warmly when greeting new people.",
    frase_exemplo_portugues: "Ela sorri calorosamente ao cumprimentar pessoas novas.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'smile': Use como verbo e substantivo. Fale sobre felicidade, cortesia. Compare com 'laugh'."
  },
  {
    id: 400,
    palavra_ingles: "kiss",
    traducao_portugues: "beijar",
    categoria: "actions",
    frase_exemplo_ingles: "Parents kiss their children goodnight before bed.",
    frase_exemplo_portugues: "Pais beijam seus filhos para dar boa noite antes de dormir.",
    imagem_url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
    prompt_pratica: "Pratique com 'kiss': Use como verbo e substantivo. Fale sobre afeto, diferentes tipos de beijos, culturas."
  },

  // OBJECTS (50 words)
  {
    id: 401,
    palavra_ingles: "book",
    traducao_portugues: "livro",
    categoria: "objects",
    frase_exemplo_ingles: "I read an interesting book about space exploration.",
    frase_exemplo_portugues: "Eu li um livro interessante sobre exploração espacial.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'book': Fale sobre diferentes tipos (novel, textbook, cookbook). Use como verbo (reservar). Expressões como 'by the book'."
  },
  {
    id: 402,
    palavra_ingles: "pen",
    traducao_portugues: "caneta",
    categoria: "objects",
    frase_exemplo_ingles: "Please use a blue pen to sign the document.",
    frase_exemplo_portugues: "Por favor, use uma caneta azul para assinar o documento.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'pen': Compare com 'pencil'. Fale sobre escrita, diferentes tipos. Use expressões como 'pen pal'."
  },
  {
    id: 403,
    palavra_ingles: "pencil",
    traducao_portugues: "lápis",
    categoria: "objects",
    frase_exemplo_ingles: "Students use pencils for math calculations and drawings.",
    frase_exemplo_portugues: "Estudantes usam lápis para cálculos matemáticos e desenhos.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'pencil': Fale sobre escola, desenho, apagar. Use 'pencil in' (agendar provisoriamente). Compare com 'pen'."
  },
  {
    id: 404,
    palavra_ingles: "paper",
    traducao_portugues: "papel",
    categoria: "objects",
    frase_exemplo_ingles: "Write your name clearly on the paper.",
    frase_exemplo_portugues: "Escreva seu nome claramente no papel.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'paper': Fale sobre diferentes tipos, usos. Use 'on paper' (teoricamente). Compare papel físico vs. digital."
  },
  {
    id: 405,
    palavra_ingles: "computer",
    traducao_portugues: "computador",
    categoria: "objects",
    frase_exemplo_ingles: "My computer helps me work efficiently from home.",
    frase_exemplo_portugues: "Meu computador me ajuda a trabalhar eficientemente de casa.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'computer': Fale sobre tecnologia, trabalho, diferentes tipos (desktop, laptop). Use verbos relacionados."
  },
  {
    id: 406,
    palavra_ingles: "phone",
    traducao_portugues: "telefone",
    categoria: "objects",
    frase_exemplo_ingles: "My phone battery died during the important call.",
    frase_exemplo_portugues: "A bateria do meu telefone acabou durante a ligação importante.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'phone': Fale sobre comunicação, diferentes tipos. Use como verbo (telefonar). Expressões com 'phone'."
  },
  {
    id: 407,
    palavra_ingles: "camera",
    traducao_portugues: "câmera",
    categoria: "objects",
    frase_exemplo_ingles: "She takes beautiful photos with her new camera.",
    frase_exemplo_portugues: "Ela tira fotos bonitas com sua câmera nova.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'camera': Fale sobre fotografia, diferentes tipos, tecnologia. Use verbos como 'take pictures', 'record'."
  },
  {
    id: 408,
    palavra_ingles: "watch",
    traducao_portugues: "relógio",
    categoria: "objects",
    frase_exemplo_ingles: "His expensive watch shows the time in multiple zones.",
    frase_exemplo_portugues: "Seu relógio caro mostra a hora em múltiplos fusos horários.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'watch': Compare substantivo (relógio) e verbo (assistir). Fale sobre tempo, diferentes tipos de relógios."
  },
  {
    id: 409,
    palavra_ingles: "clock",
    traducao_portugues: "relógio",
    categoria: "objects",
    frase_exemplo_ingles: "The old clock in the tower chimes every hour.",
    frase_exemplo_portugues: "O relógio antigo na torre bate a cada hora.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'clock': Compare com 'watch'. Fale sobre diferentes tipos (wall clock, alarm clock). Expressões com 'clock'."
  },
  {
    id: 410,
    palavra_ingles: "bag",
    traducao_portugues: "bolsa/sacola",
    categoria: "objects",
    frase_exemplo_ingles: "She carries her laptop in a leather bag.",
    frase_exemplo_portugues: "Ela carrega seu laptop numa bolsa de couro.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'bag': Fale sobre diferentes tipos (handbag, shopping bag, backpack). Use expressões como 'bag of tricks'."
  },
  {
    id: 411,
    palavra_ingles: "wallet",
    traducao_portugues: "carteira",
    categoria: "objects",
    frase_exemplo_ingles: "Keep your credit cards safe in your wallet.",
    frase_exemplo_portugues: "Mantenha seus cartões de crédito seguros na sua carteira.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'wallet': Fale sobre dinheiro, cartões, segurança. Compare com 'purse'. Descreva conteúdo típico."
  },
  {
    id: 412,
    palavra_ingles: "key",
    traducao_portugues: "chave",
    categoria: "objects",
    frase_exemplo_ingles: "I lost my house key and can't get inside.",
    frase_exemplo_portugues: "Perdi a chave de casa e não consigo entrar.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'key': Fale sobre segurança, acesso. Use como adjetivo (principal). Expressões como 'key point'."
  },
  {
    id: 413,
    palavra_ingles: "bottle",
    traducao_portugues: "garrafa",
    categoria: "objects",
    frase_exemplo_ingles: "Drink water from a reusable bottle to help environment.",
    frase_exemplo_portugues: "Beba água de uma garrafa reutilizável para ajudar o meio ambiente.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'bottle': Fale sobre diferentes tipos, materiais, conteúdos. Use como verbo (engarrafar). Sustentabilidade."
  },
  {
    id: 414,
    palavra_ingles: "cup",
    traducao_portugues: "xícara",
    categoria: "objects",
    frase_exemplo_ingles: "Would you like a cup of coffee or tea?",
    frase_exemplo_portugues: "Você gostaria de uma xícara de café ou chá?",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'cup': Fale sobre bebidas quentes, diferentes materiais. Compare com 'mug'. Use como medida."
  },
  {
    id: 415,
    palavra_ingles: "glass",
    traducao_portugues: "copo",
    categoria: "objects",
    frase_exemplo_ingles: "Fill the glass with cold water from the refrigerator.",
    frase_exemplo_portugues: "Encha o copo com água gelada da geladeira.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'glass': Compare substantivo (copo/vidro) e material. Fale sobre transparência, fragilidade, reciclagem."
  },
  {
    id: 416,
    palavra_ingles: "plate",
    traducao_portugues: "prato",
    categoria: "objects",
    frase_exemplo_ingles: "Serve the delicious meal on a clean white plate.",
    frase_exemplo_portugues: "Sirva a refeição deliciosa num prato branco limpo.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'plate': Fale sobre refeições, diferentes tamanhos, materiais. Use expressões como 'clean your plate'."
  },
  {
    id: 417,
    palavra_ingles: "bowl",
    traducao_portugues: "tigela",
    categoria: "objects",
    frase_exemplo_ingles: "Mix the ingredients thoroughly in a large bowl.",
    frase_exemplo_portugues: "Misture os ingredientes completamente numa tigela grande.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'bowl': Fale sobre cozinha, diferentes usos, formatos. Compare com 'dish'. Use em receitas."
  },
  {
    id: 418,
    palavra_ingles: "spoon",
    traducao_portugues: "colher",
    categoria: "objects",
    frase_exemplo_ingles: "Use a spoon to stir the soup gently.",
    frase_exemplo_portugues: "Use uma colher para mexer a sopa suavemente.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'spoon': Fale sobre utensílios, diferentes tamanhos. Use como verbo (dar colheradas). Expressões idiomáticas."
  },
  {
    id: 419,
    palavra_ingles: "fork",
    traducao_portugues: "garfo",
    categoria: "objects",
    frase_exemplo_ingles: "Hold the fork in your left hand while cutting.",
    frase_exemplo_portugues: "Segure o garfo na mão esquerda enquanto corta.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'fork': Fale sobre etiqueta à mesa, diferentes tipos. Use como verbo (bifurcar). Expressões com 'fork'."
  },
  {
    id: 420,
    palavra_ingles: "knife",
    traducao_portugues: "faca",
    categoria: "objects",
    frase_exemplo_ingles: "Be careful with the sharp knife when chopping vegetables.",
    frase_exemplo_portugues: "Tenha cuidado com a faca afiada ao cortar vegetais.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'knife': Fale sobre segurança, diferentes tipos, usos. Note plural 'knives'. Expressões idiomáticas."
  },
  {
    id: 421,
    palavra_ingles: "box",
    traducao_portugues: "caixa",
    categoria: "objects",
    frase_exemplo_ingles: "Pack your belongings carefully in this sturdy box.",
    frase_exemplo_portugues: "Embale seus pertences cuidadosamente nesta caixa resistente.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'box': Fale sobre armazenamento, mudanças, diferentes materiais. Use como verbo (encaixotar). Múltiplos significados."
  },
  {
    id: 422,
    palavra_ingles: "ball",
    traducao_portugues: "bola",
    categoria: "objects",
    frase_exemplo_ingles: "Children play with a colorful ball in the park.",
    frase_exemplo_portugues: "Crianças brincam com uma bola colorida no parque.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'ball': Fale sobre esportes, brincadeiras, diferentes tipos. Use expressões como 'ball game', 'on the ball'."
  },
  {
    id: 423,
    palavra_ingles: "toy",
    traducao_portugues: "brinquedo",
    categoria: "objects",
    frase_exemplo_ingles: "Every child has a favorite toy for comfort.",
    frase_exemplo_portugues: "Toda criança tem um brinquedo favorito para conforto.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'toy': Fale sobre infância, diferentes tipos, desenvolvimento. Use como verbo (brincar com). Segurança infantil."
  },
  {
    id: 424,
    palavra_ingles: "game",
    traducao_portugues: "jogo",
    categoria: "objects",
    frase_exemplo_ingles: "Board games bring families together on rainy days.",
    frase_exemplo_portugues: "Jogos de tabuleiro unem famílias em dias chuvosos.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'game': Fale sobre diferentes tipos (board, video, card games). Use expressões como 'game over', 'fair game'."
  },
  {
    id: 425,
    palavra_ingles: "tool",
    traducao_portugues: "ferramenta",
    categoria: "objects",
    frase_exemplo_ingles: "Every craftsman needs the right tool for each job.",
    frase_exemplo_portugues: "Todo artesão precisa da ferramenta certa para cada trabalho.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'tool': Fale sobre trabalho, construção, diferentes tipos. Use como metáfora para recursos úteis."
  },
  {
    id: 426,
    palavra_ingles: "hammer",
    traducao_portugues: "martelo",
    categoria: "objects",
    frase_exemplo_ingles: "Use the hammer to drive nails into the wood.",
    frase_exemplo_portugues: "Use o martelo para cravar pregos na madeira.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'hammer': Fale sobre construção, força, precisão. Use como verbo (martelar). Expressões idiomáticas."
  },
  {
    id: 427,
    palavra_ingles: "nail",
    traducao_portugues: "prego",
    categoria: "objects",
    frase_exemplo_ingles: "Drive the nail straight into the wooden board.",
    frase_exemplo_portugues: "Crave o prego direto na tábua de madeira.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'nail': Compare 'nail' (prego) e 'nail' (unha). Fale sobre construção, fixação. Expressões como 'hit the nail'."
  },
  {
    id: 428,
    palavra_ingles: "screw",
    traducao_portugues: "parafuso",
    categoria: "objects",
    frase_exemplo_ingles: "Tighten the screw with a screwdriver carefully.",
    frase_exemplo_portugues: "Aperte o parafuso com uma chave de fenda cuidadosamente.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'screw': Use como substantivo e verbo. Fale sobre montagem, diferentes tipos. Expressões idiomáticas."
  },
  {
    id: 429,
    palavra_ingles: "rope",
    traducao_portugues: "corda",
    categoria: "objects",
    frase_exemplo_ingles: "Tie the boat securely with a strong rope.",
    frase_exemplo_portugues: "Amarre o barco com segurança com uma corda forte.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'rope': Fale sobre diferentes usos, materiais, resistência. Use expressões como 'know the ropes', 'rope in'."
  },
  {
    id: 430,
    palavra_ingles: "chain",
    traducao_portugues: "corrente",
    categoria: "objects",
    frase_exemplo_ingles: "The heavy chain secures the bicycle to the post.",
    frase_exemplo_portugues: "A corrente pesada prende a bicicleta ao poste.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'chain': Fale sobre segurança, conexão, diferentes tipos. Use como verbo (acorrentar). Metáforas com 'chain'."
  },
  {
    id: 431,
    palavra_ingles: "wire",
    traducao_portugues: "fio/arame",
    categoria: "objects",
    frase_exemplo_ingles: "Connect the electrical wire to the correct terminal.",
    frase_exemplo_portugues: "Conecte o fio elétrico ao terminal correto.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'wire': Fale sobre eletricidade, conexões, diferentes tipos. Use como verbo (conectar). Segurança elétrica."
  },
  {
    id: 432,
    palavra_ingles: "battery",
    traducao_portugues: "bateria",
    categoria: "objects",
    frase_exemplo_ingles: "Replace the old battery with a new one.",
    frase_exemplo_portugues: "Substitua a bateria velha por uma nova.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'battery': Fale sobre energia, diferentes tipos, reciclagem. Use em dispositivos eletrônicos, carros."
  },
  {
    id: 433,
    palavra_ingles: "button",
    traducao_portugues: "botão",
    categoria: "objects",
    frase_exemplo_ingles: "Press the red button to start the machine.",
    frase_exemplo_portugues: "Aperte o botão vermelho para ligar a máquina.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'button': Fale sobre roupas, controles, diferentes tipos. Use como verbo (abotoar). Expressões idiomáticas."
  },
  {
    id: 434,
    palavra_ingles: "zipper",
    traducao_portugues: "zíper",
    categoria: "objects",
    frase_exemplo_ingles: "The jacket zipper is stuck and won't close.",
    frase_exemplo_portugues: "O zíper da jaqueta está travado e não fecha.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'zipper': Fale sobre roupas, bolsas, funcionamento. Use como verbo (fechar com zíper). Problemas comuns."
  },
  {
    id: 435,
    palavra_ingles: "thread",
    traducao_portugues: "linha",
    categoria: "objects",
    frase_exemplo_ingles: "Use strong thread to sew the fabric pieces together.",
    frase_exemplo_portugues: "Use linha forte para costurar as peças de tecido juntas.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'thread': Fale sobre costura, diferentes materiais, cores. Use como verbo (enfiar). Expressões com 'thread'."
  },
  {
    id: 436,
    palavra_ingles: "needle",
    traducao_portugues: "agulha",
    categoria: "objects",
    frase_exemplo_ingles: "Thread the needle carefully to avoid pricking your finger.",
    frase_exemplo_portugues: "Enfie a linha na agulha cuidadosamente para evitar furar o dedo.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'needle': Fale sobre costura, medicina, diferentes tipos. Expressões como 'needle in a haystack'."
  },
  {
    id: 437,
    palavra_ingles: "scissors",
    traducao_portugues: "tesoura",
    categoria: "objects",
    frase_exemplo_ingles: "Cut the paper carefully with sharp scissors.",
    frase_exemplo_portugues: "Corte o papel cuidadosamente com uma tesoura afiada.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'scissors': Sempre plural. Fale sobre corte, diferentes tipos, segurança. Use 'a pair of scissors'."
  },
  {
    id: 438,
    palavra_ingles: "tape",
    traducao_portugues: "fita adesiva",
    categoria: "objects",
    frase_exemplo_ingles: "Use tape to attach the poster to the wall.",
    frase_exemplo_portugues: "Use fita adesiva para colar o pôster na parede.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'tape': Fale sobre diferentes tipos, usos, aderência. Use como verbo (colar com fita). Múltiplos significados."
  },
  {
    id: 439,
    palavra_ingles: "glue",
    traducao_portugues: "cola",
    categoria: "objects",
    frase_exemplo_ingles: "Apply glue evenly to both surfaces before joining.",
    frase_exemplo_portugues: "Aplique cola uniformemente nas duas superfícies antes de juntar.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'glue': Use como substantivo e verbo. Fale sobre aderência, diferentes tipos, projetos artesanais."
  },
  {
    id: 440,
    palavra_ingles: "rubber",
    traducao_portugues: "borracha",
    categoria: "objects",
    frase_exemplo_ingles: "Erase the mistake with a clean rubber eraser.",
    frase_exemplo_portugues: "Apague o erro com uma borracha limpa.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'rubber': Compare 'rubber' (material) e 'eraser' (borracha de apagar). Fale sobre elasticidade, usos."
  },
  {
    id: 441,
    palavra_ingles: "plastic",
    traducao_portugues: "plástico",
    categoria: "objects",
    frase_exemplo_ingles: "Reduce plastic waste by using reusable containers.",
    frase_exemplo_portugues: "Reduza o desperdício de plástico usando recipientes reutilizáveis.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'plastic': Fale sobre material, meio ambiente, reciclagem. Use como adjetivo. Sustentabilidade."
  },
  {
    id: 442,
    palavra_ingles: "metal",
    traducao_portugues: "metal",
    categoria: "objects",
    frase_exemplo_ingles: "The metal frame provides strong support for the structure.",
    frase_exemplo_portugues: "A estrutura de metal fornece suporte forte para a construção.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'metal': Fale sobre diferentes tipos, propriedades, usos. Use como adjetivo. Reciclagem de metais."
  },
  {
    id: 443,
    palavra_ingles: "wood",
    traducao_portugues: "madeira",
    categoria: "objects",
    frase_exemplo_ingles: "Furniture made from solid wood lasts for generations.",
    frase_exemplo_portugues: "Móveis feitos de madeira maciça duram por gerações.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'wood': Fale sobre diferentes tipos, construção, sustentabilidade. Use como material natural vs. sintético."
  },
  {
    id: 444,
    palavra_ingles: "fabric",
    traducao_portugues: "tecido",
    categoria: "objects",
    frase_exemplo_ingles: "Choose soft fabric for comfortable clothing.",
    frase_exemplo_portugues: "Escolha tecido macio para roupas confortáveis.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'fabric': Fale sobre diferentes tipos, texturas, usos. Compare tecidos naturais vs. sintéticos."
  },
  {
    id: 445,
    palavra_ingles: "leather",
    traducao_portugues: "couro",
    categoria: "objects",
    frase_exemplo_ingles: "Genuine leather shoes are durable and comfortable.",
    frase_exemplo_portugues: "Sapatos de couro genuíno são duráveis e confortáveis.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'leather': Fale sobre qualidade, durabilidade, diferentes tipos. Use em roupas, acessórios, móveis."
  },
  {
    id: 446,
    palavra_ingles: "cotton",
    traducao_portugues: "algodão",
    categoria: "objects",
    frase_exemplo_ingles: "Cotton shirts are breathable and perfect for summer.",
    frase_exemplo_portugues: "Camisas de algodão são respiráveis e perfeitas para o verão.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'cotton': Fale sobre fibra natural, conforto, diferentes usos. Compare com fibras sintéticas."
  },
  {
    id: 447,
    palavra_ingles: "silk",
    traducao_portugues: "seda",
    categoria: "objects",
    frase_exemplo_ingles: "The elegant silk dress feels smooth against the skin.",
    frase_exemplo_portugues: "O vestido elegante de seda é macio contra a pele.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'silk': Fale sobre luxo, suavidade, origem natural. Use expressões como 'smooth as silk'."
  },
  {
    id: 448,
    palavra_ingles: "wool",
    traducao_portugues: "lã",
    categoria: "objects",
    frase_exemplo_ingles: "Warm wool sweaters keep you cozy in winter.",
    frase_exemplo_portugues: "Suéteres quentes de lã mantêm você aconchegado no inverno.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'wool': Fale sobre calor, origem animal, diferentes tipos. Use em roupas de inverno, tapetes."
  },
  {
    id: 449,
    palavra_ingles: "diamond",
    traducao_portugues: "diamante",
    categoria: "objects",
    frase_exemplo_ingles: "The sparkling diamond ring symbolizes eternal love.",
    frase_exemplo_portugues: "O anel de diamante cintilante simboliza amor eterno.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'diamond': Fale sobre valor, dureza, joias. Use expressões como 'diamond in the rough'. Diferentes usos."
  },
  {
    id: 450,
    palavra_ingles: "gold",
    traducao_portugues: "ouro",
    categoria: "objects",
    frase_exemplo_ingles: "Pure gold jewelry never tarnishes or loses its shine.",
    frase_exemplo_portugues: "Joias de ouro puro nunca mancham ou perdem o brilho.",
    imagem_url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    prompt_pratica: "Pratique com 'gold': Fale sobre valor, investimento, joias. Use como cor. Expressões como 'good as gold'."
  },

  // EMOTIONS (55 words)
  {
    id: 451,
    palavra_ingles: "happy",
    traducao_portugues: "feliz",
    categoria: "emotions",
    frase_exemplo_ingles: "She feels happy when spending time with family.",
    frase_exemplo_portugues: "Ela se sente feliz quando passa tempo com a família.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'happy': Fale sobre diferentes graus de felicidade. Use 'happy about', 'happy with'. Compare com 'glad', 'joyful'."
  },
  {
    id: 452,
    palavra_ingles: "sad",
    traducao_portugues: "triste",
    categoria: "emotions",
    frase_exemplo_ingles: "He looks sad after hearing the disappointing news.",
    frase_exemplo_portugues: "Ele parece triste depois de ouvir a notícia decepcionante.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'sad': Fale sobre diferentes causas de tristeza. Compare com 'unhappy', 'depressed'. Use 'sad about'."
  },
  {
    id: 453,
    palavra_ingles: "angry",
    traducao_portugues: "bravo/irritado",
    categoria: "emotions",
    frase_exemplo_ingles: "Don't make decisions when you're feeling angry.",
    frase_exemplo_portugues: "Não tome decisões quando estiver se sentindo bravo.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'angry': Fale sobre controle emocional. Use 'angry at/with someone', 'angry about something'. Compare intensidades."
  },
  {
    id: 454,
    palavra_ingles: "excited",
    traducao_portugues: "animado",
    categoria: "emotions",
    frase_exemplo_ingles: "Children get excited about their birthday parties.",
    frase_exemplo_portugues: "Crianças ficam animadas com suas festas de aniversário.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'excited': Fale sobre antecipação positiva. Use 'excited about', 'excited to do'. Compare com 'enthusiastic'."
  },
  {
    id: 455,
    palavra_ingles: "nervous",
    traducao_portugues: "nervoso",
    categoria: "emotions",
    frase_exemplo_ingles: "Students feel nervous before important exams.",
    frase_exemplo_portugues: "Estudantes se sentem nervosos antes de provas importantes.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'nervous': Fale sobre ansiedade, situações estressantes. Use 'nervous about'. Compare com 'anxious', 'worried'."
  },
  {
    id: 456,
    palavra_ingles: "scared",
    traducao_portugues: "assustado",
    categoria: "emotions",
    frase_exemplo_ingles: "She's scared of spiders and loud noises.",
    frase_exemplo_portugues: "Ela tem medo de aranhas e barulhos altos.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'scared': Fale sobre medos, fobias. Use 'scared of'. Compare com 'afraid', 'frightened', 'terrified'."
  },
  {
    id: 457,
    palavra_ingles: "surprised",
    traducao_portugues: "surpreso",
    categoria: "emotions",
    frase_exemplo_ingles: "Everyone was surprised by the unexpected announcement.",
    frase_exemplo_portugues: "Todos ficaram surpresos com o anúncio inesperado.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'surprised': Fale sobre eventos inesperados. Use 'surprised by/at'. Compare com 'shocked', 'amazed'."
  },
  {
    id: 458,
    palavra_ingles: "confused",
    traducao_portugues: "confuso",
    categoria: "emotions",
    frase_exemplo_ingles: "The complex instructions left me feeling confused.",
    frase_exemplo_portugues: "As instruções complexas me deixaram confuso.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'confused': Fale sobre falta de clareza. Use 'confused about'. Compare com 'puzzled', 'bewildered'."
  },
  {
    id: 459,
    palavra_ingles: "tired",
    traducao_portugues: "cansado",
    categoria: "emotions",
    frase_exemplo_ingles: "After working all day, I feel extremely tired.",
    frase_exemplo_portugues: "Depois de trabalhar o dia todo, me sinto extremamente cansado.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'tired': Fale sobre fadiga física e mental. Use 'tired of' (farto de). Compare com 'exhausted', 'weary'."
  },
  {
    id: 460,
    palavra_ingles: "bored",
    traducao_portugues: "entediado",
    categoria: "emotions",
    frase_exemplo_ingles: "Students get bored during long, repetitive lectures.",
    frase_exemplo_portugues: "Estudantes ficam entediados durante aulas longas e repetitivas.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'bored': Fale sobre falta de interesse. Use 'bored with/by'. Compare com 'boring' (que causa tédio)."
  },
  {
    id: 461,
    palavra_ingles: "worried",
    traducao_portugues: "preocupado",
    categoria: "emotions",
    frase_exemplo_ingles: "Parents worry about their children's safety constantly.",
    frase_exemplo_portugues: "Pais se preocupam constantemente com a segurança dos filhos.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'worried': Fale sobre ansiedade, cuidado. Use 'worried about'. Compare com 'concerned', 'anxious'."
  },
  {
    id: 462,
    palavra_ingles: "proud",
    traducao_portugues: "orgulhoso",
    categoria: "emotions",
    frase_exemplo_ingles: "She feels proud of her academic achievements.",
    frase_exemplo_portugues: "Ela se sente orgulhosa de suas conquistas acadêmicas.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'proud': Fale sobre conquistas, autoestima. Use 'proud of'. Compare orgulho positivo vs. arrogância."
  },
  {
    id: 463,
    palavra_ingles: "embarrassed",
    traducao_portugues: "envergonhado",
    categoria: "emotions",
    frase_exemplo_ingles: "He felt embarrassed after making a mistake publicly.",
    frase_exemplo_portugues: "Ele se sentiu envergonhado depois de cometer um erro publicamente.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'embarrassed': Fale sobre situações constrangedoras. Use 'embarrassed about/by'. Compare com 'ashamed'."
  },
  {
    id: 464,
    palavra_ingles: "jealous",
    traducao_portugues: "ciumento",
    categoria: "emotions",
    frase_exemplo_ingles: "Don't be jealous of other people's success.",
    frase_exemplo_portugues: "Não seja ciumento do sucesso de outras pessoas.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'jealous': Fale sobre inveja, relacionamentos. Use 'jealous of'. Compare com 'envious'."
  },
  {
    id: 465,
    palavra_ingles: "lonely",
    traducao_portugues: "solitário",
    categoria: "emotions",
    frase_exemplo_ingles: "Moving to a new city can make you feel lonely.",
    frase_exemplo_portugues: "Mudar para uma cidade nova pode fazer você se sentir solitário.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'lonely': Fale sobre isolamento social. Compare 'lonely' (sentimento) com 'alone' (estado físico)."
  },
  {
    id: 466,
    palavra_ingles: "grateful",
    traducao_portugues: "grato",
    categoria: "emotions",
    frase_exemplo_ingles: "I'm grateful for all the help you've given me.",
    frase_exemplo_portugues: "Sou grato por toda a ajuda que você me deu.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'grateful': Fale sobre reconhecimento, gratidão. Use 'grateful for/to'. Compare com 'thankful'."
  },
  {
    id: 467,
    palavra_ingles: "disappointed",
    traducao_portugues: "desapontado",
    categoria: "emotions",
    frase_exemplo_ingles: "Fans were disappointed when the concert was cancelled.",
    frase_exemplo_portugues: "Fãs ficaram desapontados quando o show foi cancelado.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'disappointed': Fale sobre expectativas não atendidas. Use 'disappointed in/with/by'."
  },
  {
    id: 468,
    palavra_ingles: "frustrated",
    traducao_portugues: "frustrado",
    categoria: "emotions",
    frase_exemplo_ingles: "Students get frustrated when they can't understand concepts.",
    frase_exemplo_portugues: "Estudantes ficam frustrados quando não conseguem entender conceitos.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'frustrated': Fale sobre obstáculos, dificuldades. Use 'frustrated with/by'. Compare com 'annoyed'."
  },
  {
    id: 469,
    palavra_ingles: "relaxed",
    traducao_portugues: "relaxado",
    categoria: "emotions",
    frase_exemplo_ingles: "Vacation makes everyone feel relaxed and refreshed.",
    frase_exemplo_portugues: "Férias fazem todos se sentirem relaxados e renovados.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'relaxed': Fale sobre calma, descanso. Compare com 'calm', 'peaceful'. Atividades relaxantes."
  },
  {
    id: 470,
    palavra_ingles: "stressed",
    traducao_portugues: "estressado",
    categoria: "emotions",
    frase_exemplo_ingles: "Work deadlines make employees feel stressed and overwhelmed.",
    frase_exemplo_portugues: "Prazos de trabalho fazem funcionários se sentirem estressados e sobrecarregados.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'stressed': Fale sobre pressão, ansiedade. Use 'stressed about/by'. Técnicas de gerenciamento de estresse."
  },
  {
    id: 471,
    palavra_ingles: "calm",
    traducao_portugues: "calmo",
    categoria: "emotions",
    frase_exemplo_ingles: "Stay calm during emergency situations to think clearly.",
    frase_exemplo_portugues: "Mantenha-se calmo durante situações de emergência para pensar claramente.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'calm': Use como adjetivo e verbo. Fale sobre tranquilidade, controle emocional. 'Calm down'."
  },
  {
    id: 472,
    palavra_ingles: "peaceful",
    traducao_portugues: "pacífico",
    categoria: "emotions",
    frase_exemplo_ingles: "The quiet garden creates a peaceful atmosphere.",
    frase_exemplo_portugues: "O jardim silencioso cria uma atmosfera pacífica.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'peaceful': Fale sobre tranquilidade, harmonia. Compare com 'calm', 'serene'. Ambientes pacíficos."
  },
  {
    id: 473,
    palavra_ingles: "hopeful",
    traducao_portugues: "esperançoso",
    categoria: "emotions",
    frase_exemplo_ingles: "Despite challenges, she remains hopeful about the future.",
    frase_exemplo_portugues: "Apesar dos desafios, ela permanece esperançosa sobre o futuro.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'hopeful': Fale sobre otimismo, expectativas positivas. Use 'hopeful about/that'. Compare com 'optimistic'."
  },
  {
    id: 474,
    palavra_ingles: "hopeless",
    traducao_portugues: "sem esperança",
    categoria: "emotions",
    frase_exemplo_ingles: "Never give up, even when situations seem hopeless.",
    frase_exemplo_portugues: "Nunca desista, mesmo quando situações parecem sem esperança.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'hopeless': Fale sobre desespero, situações difíceis. Compare com 'desperate'. Superação de adversidades."
  },
  {
    id: 475,
    palavra_ingles: "confident",
    traducao_portugues: "confiante",
    categoria: "emotions",
    frase_exemplo_ingles: "Practice makes you feel more confident in your abilities.",
    frase_exemplo_portugues: "Prática faz você se sentir mais confiante em suas habilidades.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'confident': Fale sobre autoestima, segurança. Use 'confident about/in'. Compare com 'self-assured'."
  },
  {
    id: 476,
    palavra_ingles: "insecure",
    traducao_portugues: "inseguro",
    categoria: "emotions",
    frase_exemplo_ingles: "Teenagers often feel insecure about their appearance.",
    frase_exemplo_portugues: "Adolescentes frequentemente se sentem inseguros sobre sua aparência.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'insecure': Fale sobre falta de confiança. Use 'insecure about'. Compare com 'uncertain', 'doubtful'."
  },
  {
    id: 477,
    palavra_ingles: "curious",
    traducao_portugues: "curioso",
    categoria: "emotions",
    frase_exemplo_ingles: "Children are naturally curious about how things work.",
    frase_exemplo_portugues: "Crianças são naturalmente curiosas sobre como as coisas funcionam.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'curious': Fale sobre interesse, descoberta. Use 'curious about'. Compare com 'interested', 'inquisitive'."
  },
  {
    id: 478,
    palavra_ingles: "amazed",
    traducao_portugues: "impressionado",
    categoria: "emotions",
    frase_exemplo_ingles: "Visitors are amazed by the beauty of the ancient temple.",
    frase_exemplo_portugues: "Visitantes ficam impressionados com a beleza do templo antigo.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'amazed': Fale sobre admiração, espanto. Use 'amazed by/at'. Compare com 'astonished', 'impressed'."
  },
  {
    id: 479,
    palavra_ingles: "shocked",
    traducao_portugues: "chocado",
    categoria: "emotions",
    frase_exemplo_ingles: "Everyone was shocked by the sudden news announcement.",
    frase_exemplo_portugues: "Todos ficaram chocados com o anúncio repentino da notícia.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'shocked': Fale sobre surpresa extrema. Use 'shocked by/at'. Compare intensidade com 'surprised'."
  },
  {
    id: 480,
    palavra_ingles: "delighted",
    traducao_portugues: "encantado",
    categoria: "emotions",
    frase_exemplo_ingles: "Grandparents are delighted when grandchildren visit them.",
    frase_exemplo_portugues: "Avós ficam encantados quando os netos os visitam.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'delighted': Fale sobre alegria intensa. Use 'delighted with/by/to'. Compare com 'pleased', 'thrilled'."
  },
  {
    id: 481,
    palavra_ingles: "disgusted",
    traducao_portugues: "enojado",
    categoria: "emotions",
    frase_exemplo_ingles: "She felt disgusted by the terrible smell.",
    frase_exemplo_portugues: "Ela se sentiu enojada pelo cheiro terrível.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'disgusted': Fale sobre repulsa, nojo. Use 'disgusted by/with'. Compare com 'revolted', 'sickened'."
  },
  {
    id: 482,
    palavra_ingles: "annoyed",
    traducao_portugues: "irritado",
    categoria: "emotions",
    frase_exemplo_ingles: "Loud music from neighbors makes me feel annoyed.",
    frase_exemplo_portugues: "Música alta dos vizinhos me deixa irritado.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'annoyed': Fale sobre irritação leve. Use 'annoyed by/with/at'. Compare com 'angry', 'frustrated'."
  },
  {
    id: 483,
    palavra_ingles: "pleased",
    traducao_portugues: "satisfeito",
    categoria: "emotions",
    frase_exemplo_ingles: "Teachers are pleased when students show improvement.",
    frase_exemplo_portugues: "Professores ficam satisfeitos quando estudantes mostram melhora.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'pleased': Fale sobre satisfação moderada. Use 'pleased with/about'. Compare com 'happy', 'satisfied'."
  },
  {
    id: 484,
    palavra_ingles: "content",
    traducao_portugues: "contente",
    categoria: "emotions",
    frase_exemplo_ingles: "After retirement, he feels content with his simple life.",
    frase_exemplo_portugues: "Depois da aposentadoria, ele se sente contente com sua vida simples.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'content': Fale sobre satisfação tranquila. Use 'content with'. Compare com 'satisfied', 'happy'."
  },
  {
    id: 485,
    palavra_ingles: "miserable",
    traducao_portugues: "miserável",
    categoria: "emotions",
    frase_exemplo_ingles: "Rainy weather makes some people feel miserable.",
    frase_exemplo_portugues: "Tempo chuvoso faz algumas pessoas se sentirem miseráveis.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'miserable': Fale sobre tristeza profunda. Compare intensidade com 'sad', 'unhappy'. Causas de miséria."
  },
  {
    id: 486,
    palavra_ingles: "cheerful",
    traducao_portugues: "alegre",
    categoria: "emotions",
    frase_exemplo_ingles: "Her cheerful personality brightens everyone's day.",
    frase_exemplo_portugues: "Sua personalidade alegre ilumina o dia de todos.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'cheerful': Fale sobre alegria contagiante. Compare com 'happy', 'joyful'. Personalidades positivas."
  },
  {
    id: 487,
    palavra_ingles: "gloomy",
    traducao_portugues: "melancólico",
    categoria: "emotions",
    frase_exemplo_ingles: "Dark winter days can make people feel gloomy.",
    frase_exemplo_portugues: "Dias escuros de inverno podem fazer pessoas se sentirem melancólicas.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'gloomy': Fale sobre tristeza sombria. Use para descrever humor e ambiente. Compare com 'depressed'."
  },
  {
    id: 488,
    palavra_ingles: "enthusiastic",
    traducao_portugues: "entusiasmado",
    categoria: "emotions",
    frase_exemplo_ingles: "Students are enthusiastic about the upcoming field trip.",
    frase_exemplo_portugues: "Estudantes estão entusiasmados com a excursão que se aproxima.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'enthusiastic': Fale sobre paixão, energia positiva. Use 'enthusiastic about'. Compare com 'excited'."
  },
  {
    id: 489,
    palavra_ingles: "indifferent",
    traducao_portugues: "indiferente",
    categoria: "emotions",
    frase_exemplo_ingles: "He seems indifferent to criticism and praise alike.",
    frase_exemplo_portugues: "Ele parece indiferente tanto a críticas quanto a elogios.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'indifferent': Fale sobre falta de interesse. Use 'indifferent to'. Compare com 'apathetic', 'unconcerned'."
  },
  {
    id: 490,
    palavra_ingles: "overwhelmed",
    traducao_portugues: "sobrecarregado",
    categoria: "emotions",
    frase_exemplo_ingles: "New parents often feel overwhelmed by responsibilities.",
    frase_exemplo_portugues: "Pais novos frequentemente se sentem sobrecarregados pelas responsabilidades.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'overwhelmed': Fale sobre excesso, incapacidade de lidar. Use 'overwhelmed by/with'."
  },
  {
    id: 491,
    palavra_ingles: "relieved",
    traducao_portugues: "aliviado",
    categoria: "emotions",
    frase_exemplo_ingles: "Students feel relieved after finishing difficult exams.",
    frase_exemplo_portugues: "Estudantes se sentem aliviados depois de terminar provas difíceis.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'relieved': Fale sobre alívio após tensão. Use 'relieved that/to'. Compare com 'grateful'."
  },
  {
    id: 492,
    palavra_ingles: "terrified",
    traducao_portugues: "aterrorizado",
    categoria: "emotions",
    frase_exemplo_ingles: "She was terrified during the horror movie.",
    frase_exemplo_portugues: "Ela ficou aterrorizada durante o filme de terror.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'terrified': Fale sobre medo extremo. Use 'terrified of/by'. Compare intensidade com 'scared', 'afraid'."
  },
  {
    id: 493,
    palavra_ingles: "thrilled",
    traducao_portugues: "emocionado",
    categoria: "emotions",
    frase_exemplo_ingles: "Fans were thrilled to meet their favorite celebrity.",
    frase_exemplo_portugues: "Fãs ficaram emocionados ao conhecer sua celebridade favorita.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'thrilled': Fale sobre excitação intensa. Use 'thrilled about/with/to'. Compare com 'excited', 'delighted'."
  },
  {
    id: 494,
    palavra_ingles: "devastated",
    traducao_portugues: "devastado",
    categoria: "emotions",
    frase_exemplo_ingles: "The family was devastated by the sudden loss.",
    frase_exemplo_portugues: "A família ficou devastada pela perda repentina.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'devastated': Fale sobre tristeza extrema. Use 'devastated by'. Compare intensidade com 'sad', 'heartbroken'."
  },
  {
    id: 495,
    palavra_ingles: "ecstatic",
    traducao_portugues: "extasiado",
    categoria: "emotions",
    frase_exemplo_ingles: "Winners were ecstatic about their lottery prize.",
    frase_exemplo_portugues: "Ganhadores ficaram extasiados com seu prêmio da loteria.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'ecstatic': Fale sobre alegria extrema. Use 'ecstatic about'. Compare intensidade com 'happy', 'thrilled'."
  },
  {
    id: 496,
    palavra_ingles: "furious",
    traducao_portugues: "furioso",
    categoria: "emotions",
    frase_exemplo_ingles: "Parents were furious about the school's poor decision.",
    frase_exemplo_portugues: "Pais ficaram furiosos com a decisão ruim da escola.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'furious': Fale sobre raiva intensa. Use 'furious about/with'. Compare intensidade com 'angry', 'mad'."
  },
  {
    id: 497,
    palavra_ingles: "melancholy",
    traducao_portugues: "melancólico",
    categoria: "emotions",
    frase_exemplo_ingles: "Autumn weather often brings a melancholy mood.",
    frase_exemplo_portugues: "O tempo de outono frequentemente traz um humor melancólico.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'melancholy': Use como substantivo e adjetivo. Fale sobre tristeza poética, nostalgia. Compare com 'sad'."
  },
  {
    id: 498,
    palavra_ingles: "euphoric",
    traducao_portugues: "eufórico",
    categoria: "emotions",
    frase_exemplo_ingles: "Athletes feel euphoric after winning championships.",
    frase_exemplo_portugues: "Atletas se sentem eufóricos depois de ganhar campeonatos.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'euphoric': Fale sobre alegria intensa e temporária. Compare com 'ecstatic', 'elated'. Contextos de vitória."
  },
  {
    id: 499,
    palavra_ingles: "serene",
    traducao_portugues: "sereno",
    categoria: "emotions",
    frase_exemplo_ingles: "Meditation helps people achieve a serene state of mind.",
    frase_exemplo_portugues: "Meditação ajuda pessoas a alcançar um estado de espírito sereno.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'serene': Fale sobre paz profunda, tranquilidade. Compare com 'calm', 'peaceful'. Práticas de mindfulness."
  },
  {
    id: 500,
    palavra_ingles: "nostalgic",
    traducao_portugues: "nostálgico",
    categoria: "emotions",
    frase_exemplo_ingles: "Old photographs make people feel nostalgic about childhood.",
    frase_exemplo_portugues: "Fotografias antigas fazem pessoas se sentirem nostálgicas sobre a infância.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'nostalgic': Fale sobre saudade do passado. Use 'nostalgic about/for'. Compare com 'sentimental'."
  },
  {
    id: 501,
    palavra_ingles: "optimistic",
    traducao_portugues: "otimista",
    categoria: "emotions",
    frase_exemplo_ingles: "Despite setbacks, she remains optimistic about success.",
    frase_exemplo_portugues: "Apesar dos contratempos, ela permanece otimista sobre o sucesso.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'optimistic': Fale sobre esperança, atitude positiva. Use 'optimistic about'. Compare com 'hopeful', 'positive'."
  },
  {
    id: 502,
    palavra_ingles: "pessimistic",
    traducao_portugues: "pessimista",
    categoria: "emotions",
    frase_exemplo_ingles: "Don't be pessimistic about your chances of success.",
    frase_exemplo_portugues: "Não seja pessimista sobre suas chances de sucesso.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'pessimistic': Fale sobre expectativas negativas. Use 'pessimistic about'. Compare com 'negative', 'cynical'."
  },
  {
    id: 503,
    palavra_ingles: "sympathetic",
    traducao_portugues: "compreensivo",
    categoria: "emotions",
    frase_exemplo_ingles: "Good friends are sympathetic during difficult times.",
    frase_exemplo_portugues: "Bons amigos são compreensivos durante momentos difíceis.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'sympathetic': Fale sobre empatia, compreensão. Use 'sympathetic to/towards'. Compare com 'empathetic'."
  },
  {
    id: 504,
    palavra_ingles: "apathetic",
    traducao_portugues: "apático",
    categoria: "emotions",
    frase_exemplo_ingles: "Students become apathetic when lessons are boring.",
    frase_exemplo_portugues: "Estudantes ficam apáticos quando as aulas são chatas.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'apathetic': Fale sobre falta de interesse/emoção. Use 'apathetic about/towards'. Compare com 'indifferent'."
  },
  {
    id: 505,
    palavra_ingles: "passionate",
    traducao_portugues: "apaixonado",
    categoria: "emotions",
    frase_exemplo_ingles: "Artists are passionate about their creative work.",
    frase_exemplo_portugues: "Artistas são apaixonados por seu trabalho criativo.",
    imagem_url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    prompt_pratica: "Pratique com 'passionate': Fale sobre intensidade emocional, dedicação. Use 'passionate about'. Compare com 'enthusiastic'."
  }
];

export function searchWords(query: string): Word[] {
  if (!query.trim()) {
    return wordsDatabase;
  }
  
  const searchTerm = query.toLowerCase().trim();
  
  return wordsDatabase.filter(word => 
    word.palavra_ingles.toLowerCase().includes(searchTerm) ||
    word.traducao_portugues.toLowerCase().includes(searchTerm) ||
    word.categoria.toLowerCase().includes(searchTerm) ||
    word.frase_exemplo_ingles.toLowerCase().includes(searchTerm) ||
    word.frase_exemplo_portugues.toLowerCase().includes(searchTerm)
  );
}

export function getWordsByCategory(categoryId: string): Word[] {
  return wordsDatabase.filter(word => word.categoria === categoryId);
}

export function getRandomWord(): Word {
  const randomIndex = Math.floor(Math.random() * wordsDatabase.length);
  return wordsDatabase[randomIndex];
}

export function getWordById(id: number): Word | undefined {
  return wordsDatabase.find(word => word.id === id);
}