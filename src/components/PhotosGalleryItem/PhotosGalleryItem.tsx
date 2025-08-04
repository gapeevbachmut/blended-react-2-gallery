import styles from './PhotosGalleryItem.module.css';
import { type Photo } from '../../types/photo';

interface PhotosGalleryItemProps {
  photo: Photo;
  onClick: (photo: Photo) => void;
}

export default function PhotosGalleryItem({
  photo,
  onClick,
}: PhotosGalleryItemProps) {
  return (
    <div
      className={styles.thumb}
      style={{
        backgroundColor: photo.avg_color,
        borderColor: photo.avg_color,
      }}
    >
      <img
        src={photo.src.original}
        alt={photo.alt}
        onClick={() => onClick(photo)}
      />
    </div>
  );
}
