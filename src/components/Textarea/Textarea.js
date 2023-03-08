import "./Textarea.css";

export default function Textarea({ text, placeholder }) {
  return (
    <>
      <label className="textarea-label" htmlFor={text}>
        {text}
      </label>
      <textarea
        className="textarea-field"
        id={text}
        name={text}
        placeholder={placeholder}
        rows={5}
      />
    </>
  );
}
