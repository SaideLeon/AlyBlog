import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const findImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Fallback to a default image if not found, though this shouldn't happen
    return { id: 'fallback', description: '', imageUrl: 'https://picsum.photos/seed/fallback/600/400', imageHint: 'abstract' };
  }
  return image;
};

export const posts = [
  {
    id: 1,
    title: "A Essência da Kizomba: Mais que uma Dança, uma Conexão",
    category: "Estilo de Vida",
    image: findImage('post-1'),
    description: "Explore as raízes profundas e o significado cultural da Kizomba, e como ela transcende a dança para se tornar uma forma de comunicação e conexão humana."
  },
  {
    id: 2,
    title: "Nos Bastidores do Meu Novo Single: 'Coração Vermelho'",
    category: "Bastidores",
    image: findImage('post-2'),
    description: "Um olhar exclusivo sobre o processo criativo, as inspirações e as longas noites no estúdio que deram vida ao meu mais recente trabalho."
  },
  {
    id: 3,
    title: "Diário de Turnê: As Luzes e Sombras da Vida na Estrada",
    category: "Turnês",
    image: findImage('post-3'),
    description: "Acompanhe-me em minha última turnê, descobrindo as alegrias de se conectar com fãs ao redor do mundo e os desafios de estar longe de casa."
  },
  {
    id: 4,
    title: "Minhas Influências Musicais: De Onde Vem Minha Inspiração",
    category: "Músicas",
    image: findImage('post-4'),
    description: "Uma viagem pessoal através dos artistas e gêneros que moldaram meu som e continuam a inspirar minha jornada musical."
  },
];

export type Post = typeof posts[0];

export const tracks = [
  {
    id: 1,
    title: "Coração Vermelho",
    artist: "Aly dos Santos",
    duration: "3:45",
    albumArt: findImage('album-art-1'),
  },
  {
    id: 2,
    title: "Noite de Luanda",
    artist: "Aly dos Santos",
    duration: "4:12",
    albumArt: findImage('album-art-1'),
  },
  {
    id: 3,
    title: "Dança Comigo",
    artist: "Aly dos Santos",
    duration: "3:58",
    albumArt: findImage('album-art-1'),
  },
  {
    id: 4,
    title: "Saudade",
    artist: "Aly dos Santos",
    duration: "4:30",
    albumArt: findImage('album-art-1'),
  },
];
export type Track = typeof tracks[0];

export const highlights = [
    {
        id: 1,
        title: "Novo Álbum 'Alma' Lançado!",
        description: "Meu novo álbum já está disponível em todas as plataformas de streaming. Ouça agora!",
        image: findImage('highlight-1'),
        link: "#"
    },
    {
        id: 2,
        title: "Vencedor do Prémio 'Melhor Artista Kizomba'",
        description: "Grato por receber este reconhecimento. Obrigado a todos os fãs pelo apoio!",
        image: findImage('highlight-2'),
        link: "#"
    }
];

export type Highlight = typeof highlights[0];
