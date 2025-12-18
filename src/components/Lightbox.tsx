import { useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface LightboxProps {
  image: string;
  title: string;
  author: string;
  onClose: () => void;
}

export default function Lightbox({ image, title, author, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
        aria-label="Закрыть"
      >
        <Icon name="X" size={32} />
      </button>

      <div 
        className="max-w-5xl w-full animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-lg shadow-2xl"
        />
        <div className="mt-6 text-center">
          <h3 className="text-3xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-lg text-white/70">{author}</p>
        </div>
      </div>
    </div>
  );
}
