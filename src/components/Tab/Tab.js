import "./Tab.css";

export default function Tab({ text, number, active, onClick }) {
  return (
    <button
      className={active ? "tab --tab-active" : "tab"}
      type="button"
      aria-label={`Show ${text}`}
      onClick={onClick}
    >
      {text}
      <span
        aria-label={text}
        className={active ? "tab__badge --badge-active" : "tab__badge"}
      >
        {number}
      </span>
    </button>
  );
}
