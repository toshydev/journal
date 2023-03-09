import "./Icon.css";
import { useState } from "react";
import Svg from "../Svg/Svg";

export default function Icon() {
  const [isFavorite, setFavorite] = useState(false);

  return (
    <button
      className="icon-button"
      aria-label="favorite button"
      type="button"
      onClick={() => {
        setFavorite(!isFavorite);
      }}
    >
      {isFavorite ? (
        <Svg variant="starFilled" width="24px" color="#FF4A11" />
      ) : (
        <Svg variant="starEmpty" width="24px" />
      )}
    </button>
  );
}
