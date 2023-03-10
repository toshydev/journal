import "./Textarea.css";

export default function Textarea({ text, placeholder }) {
  return (
    <>
      <label className="textarea-label" htmlFor={text.toLowerCase()}>
        {text}
      </label>
      <textarea
        className="textarea-field"
        id={text.toLowerCase()}
        name={text.toLowerCase()}
        placeholder={placeholder}
        rows={5}
      />
    </>
  );
}
