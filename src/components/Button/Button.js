import "./Button.css";

export default function Button({ aria, className, type, children, onClick }) {
  return (
    <button
      className={className}
      type={type}
      aria-label={aria}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
