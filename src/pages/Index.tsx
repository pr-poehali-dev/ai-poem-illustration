import { useState } from 'react';
import GalleryCard from '@/components/GalleryCard';
import Lightbox from '@/components/Lightbox';
import Icon from '@/components/ui/icon';

interface Artwork {
  id: number;
  image: string;
  title: string;
  author: string;
  work: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    image: 'https://cdn.poehali.dev/projects/01738267-97ba-45f3-a0b7-de53ee4785de/files/d40c3eb8-e35f-4a48-8de1-82f1d55074d7.jpg',
    title: 'Железная дорога',
    author: 'Николай Некрасов',
    work: 'Стихотворение, 1864'
  },
  {
    id: 2,
    image: 'https://cdn.poehali.dev/projects/01738267-97ba-45f3-a0b7-de53ee4785de/files/ae5e7a4a-b94d-4491-8837-bad91a027da5.jpg',
    title: 'Евгений Онегин',
    author: 'Александр Пушкин',
    work: 'Роман в стихах, 1833'
  },
  {
    id: 3,
    image: 'https://cdn.poehali.dev/projects/01738267-97ba-45f3-a0b7-de53ee4785de/files/12b46839-417c-41ac-94fd-32cbe93fa777.jpg',
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    work: 'Роман, 1866'
  }
];

export default function Index() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [activeSection, setActiveSection] = useState<'home' | 'gallery'>('home');

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">
              Литературная галерея
            </h1>
            <div className="flex gap-6">
              <button
                onClick={() => setActiveSection('home')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'home'
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection('gallery')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'gallery'
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Галерея
              </button>
            </div>
          </nav>
        </div>
      </header>

      {activeSection === 'home' && (
        <section className="py-32 px-6 animate-fade-in">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <Icon name="BookOpen" size={64} className="text-primary" />
            </div>
            <h2 className="text-6xl font-bold text-foreground mb-6">
              Шедевры русской литературы
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Погрузитесь в визуальный мир классических произведений. 
              Каждая иллюстрация — это мост между словом и образом, 
              открывающий новые грани литературного наследия.
            </p>
            <button
              onClick={() => setActiveSection('gallery')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium transition-all hover:scale-105 shadow-lg hover:shadow-primary/30"
            >
              Открыть галерею
            </button>
          </div>
        </section>
      )}

      {activeSection === 'gallery' && (
        <section className="py-16 px-6 animate-fade-in">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-12">
              <h2 className="text-5xl font-bold text-foreground mb-4">
                Коллекция иллюстраций
              </h2>
              <p className="text-lg text-muted-foreground">
                Визуальные интерпретации классических произведений
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artworks.map((artwork) => (
                <GalleryCard
                  key={artwork.id}
                  image={artwork.image}
                  title={artwork.title}
                  author={artwork.author}
                  onClick={() => setSelectedArtwork(artwork)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedArtwork && (
        <Lightbox
          image={selectedArtwork.image}
          title={selectedArtwork.title}
          author={`${selectedArtwork.author} — ${selectedArtwork.work}`}
          onClose={() => setSelectedArtwork(null)}
        />
      )}

      <footer className="border-t border-border py-12 px-6 mt-32">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-sm">
            Литературная галерея © 2024
          </p>
        </div>
      </footer>
    </div>
  );
}