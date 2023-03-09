import "./Icon.css";
import { ReactComponent as StarFilled } from "../../assets/images/star-filled.svg";
import { ReactComponent as Star } from "../../assets/images/star.svg";
import { useState } from "react";

export default function Icon() {
  const [isFavorite, setFavorite] = useState(false);

  return (
    <button
      className="icon-button"
      aria-label="favorite button"
      type="button"
      onClick={(event) => {
        setFavorite(!isFavorite);
        console.log(isFavorite, event.target);
      }}
    >
      {isFavorite ? (
        <StarFilled title="marked as favorite" />
      ) : (
        <Star title="not marked as favorite" />
      )}
    </button>
  );
}
