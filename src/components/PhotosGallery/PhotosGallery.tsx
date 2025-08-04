import type { Photo } from '../../types/photo';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';

interface PhotoGalleryProps {
  onClick: (photo: Photo) => void;
  photos: Photo[];
}

export default function PhotosGallery({ onClick, photos }: PhotoGalleryProps) {
  return (
    <Grid>
      {/* // як передати значення у лішку ????? */}
      {photos.map(photo => (
        // десь у тегу <li ......></li> поставити
        // onClick={() => onSelect(photos)}
        // key={photos.id}
        <GridItem key={photo.id}>
          <PhotosGalleryItem photo={photo} onClick={onClick} />
        </GridItem>
      ))}
    </Grid>
  );
}
