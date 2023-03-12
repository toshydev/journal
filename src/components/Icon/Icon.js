import "./Icon.css";
import SVGIcon from "../SVGIcon/SVGIcon";

export default function Icon({ onToggleFavorite, entry }) {
  return (
    <button
      className="icon-button"
      aria-label="favorite button"
      type="button"
      onClick={() => {
        onToggleFavorite(entry.id);
      }}
    >
      {entry.isFavorite ? (
        <SVGIcon
          variant="starFilled"
          width="24px"
          color="#FF4A11"
          stroke="#FF4A11"
          strokeWidth="2"
        />
      ) : (
        <SVGIcon
          variant="starEmpty"
          width="24px"
          color="white"
          stroke="#252629"
          strokeWidth="2"
        />
      )}
    </button>
  );
}
