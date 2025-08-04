import { RingLoader } from "react-spinners";
import style from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={style.backdrop}>
      <RingLoader color="#0400ff" size={100} />
      {/* spinner */}
    </div>
  );
}
