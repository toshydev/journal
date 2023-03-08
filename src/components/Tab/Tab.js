import "./Tab.css";

export default function Tab({ text, number, active }) {
  return (
    <li className="tab-container">
      <p
        className={
          active ? "tab-container__text --text-active" : "tab-container__text"
        }
      >
        {text}
      </p>
      <span
        aria-label={text}
        className={
          active
            ? "tab-container__badge --badge-active"
            : "tab-container__badge"
        }
      >
        {number}
      </span>
    </li>
  );
}
