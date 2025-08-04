import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";
import style from "./Form.module.css";

interface FormSearchProps {
  onSubmit: (value: string) => void;
  // value =  (const search =...)
}

export default function Form({ onSubmit }: FormSearchProps) {
  const handleSubmit = (formData: FormData): void => {
    const search = formData.get("search") as string;
    if (!search.trim()) {
      toast.error("Будьласка, введіть запит!");
      return;
    }
    onSubmit(search);
  };

  return (
    <form className={style.form} action={handleSubmit}>
      <input
        className={style.input}
        placeholder="Які побажання для пошуку?"
        name="search"
        autoFocus
      />

      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
}
