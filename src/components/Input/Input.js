import "./Input.css";

export default function Input({ text, placeholder }) {
  return (
    <>
      <label className="input-label" htmlFor={text.toLowerCase()}>
        {text}
      </label>
      <input
        className="input-field"
        type="text"
        id={text.toLowerCase()}
        name={text.toLowerCase()}
        placeholder={placeholder}
      />
    </>
  );
}
