import "./Input.css";

export default function Input({ text, placeholder }) {
  return (
    <>
      <label className="input-label" htmlFor={text}>
        {text}
      </label>
      <input
        className="input-field"
        type="text"
        id={text}
        name={text}
        placeholder={placeholder}
      />
    </>
  );
}
