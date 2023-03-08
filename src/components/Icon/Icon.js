import "./Icon.css";

export default function Icon({ active }) {
  return (
    <a className="icon-button" aria-label="favorite button">
      <svg>
        {active ? (
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#FF4A11"
            stroke="#FF4A11"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        ) : (
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="none"
            stroke="#252629"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        )}
      </svg>
    </a>
  );
}
