import "./Icon.css";
import { ReactComponent as StarFilled } from "../../assets/images/star-filled.svg";
import { ReactComponent as Star } from "../../assets/images/star.svg";
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
        <Svg variant="github" width="24px" />
      ) : (
        <Svg variant="face" width="24px" />
      )}
    </button>
  );
}