import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import toast from "react-hot-toast";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import { type Photo } from "../../types/photo";
import { useState } from "react";
import { getPhotos } from "../../services/photos";
import Loader from "../Loader/Loader";
import Text from "../Text/Text";
import Modal from "../Modal/Modal";

export default function App() {
  const [photo, setPoto] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectPhoto, setSelectPhoto] = useState<Photo | null>(null);

  // const closeModal = () => setIsModalOpen(false);

  const handleSelectPhoto = (photo: Photo) => {
    setSelectPhoto(photo);
    setIsModalOpen(true);
  };

  const handleForm = async (query: string) => {
    console.log("input", query);
    setIsLoading(true);
    setIsEmpty(false);
    try {
      setPoto([]); // очищаю попередній запит
      const resultArrPhotos = await getPhotos(query);
      console.log("responce", resultArrPhotos); // відповідь - масив

      if (!resultArrPhotos.length) {
        setIsEmpty(true);
        toast.error("Не знайдено фото, по Вашему запиту!");
        return;
      }

      setPoto(resultArrPhotos);
      // зміна стану з отриманими результатами пошуку
    } catch {
      console.log("Error", "Помилка");
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  };

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={handleForm} />
          {photo.length > 0 && (
            <PhotosGallery
              photos={photo}
              //для модалки
              onClick={handleSelectPhoto}
              // функція обробки при кліку хендл селект фото
            />
          )}
          {isLoading && <Loader />}
          {isEmpty && (
            <Text textAlign="center" marginBottom="18">
              Зробіть повторний запит!
            </Text>
          )}
          {isModalOpen && selectPhoto && (
            <Modal
              onClose={() => {
                setIsModalOpen(false);
              }}
            >
              <img src={selectPhoto.src.large} alt={selectPhoto.alt} />
            </Modal>
          )}
        </Container>
      </Section>
    </>
  );
}
