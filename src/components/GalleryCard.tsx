interface GalleryCardProps {
  image: string;
  title: string;
  author: string;
  onClick: () => void;
}

export default function GalleryCard({ image, title, author, onClick }: GalleryCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-xl bg-card border border-border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{author}</p>
      </div>
    </div>
  );
}
