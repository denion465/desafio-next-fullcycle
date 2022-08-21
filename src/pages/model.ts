import { v4 as uuidv4 } from 'uuid';

export interface Post {
  id: string;
  name: string;
  image_url: string;
  image_profile: string;
}

const generatePosts = () => {
  const arrayLength = Math.floor(Math.random() * 10) + 15;
  const list = [];
  for (let i = 0; i < arrayLength; i++) {
    const p = Math.floor(Math.random() * 1000);
    list.push({
      id: uuidv4(),
      name: `Usuário ${p}`,
      description: 'descrição do produto',
      image_url: `https://source.unsplash.com/random?product,${p}`,
      image_profile: `https://source.unsplash.com/random?profile,${p}`,
    });
  }
  return list;
};

export const posts: Post[] = generatePosts();
