import "./Icon.css";
import { ReactComponent as StarFilled } from "../../assets/images/star-filled.svg";
import { ReactComponent as Star } from "../../assets/images/star.svg";

export default function Icon({ active }) {
  return (
    <button className="icon-button" aria-label="favorite button" type="button">
      {active ? (
        <StarFilled title="marked as favorite" />
      ) : (
        <Star title="not marked as favorite" />
      )}
    </button>
  );
}
