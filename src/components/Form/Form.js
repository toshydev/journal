import Button from "../Button/Button";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import "./Form.css";

export default function Form({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddEntry(data);

    event.target.reset();
    event.target.motto.focus();
  }

  return (
    <form
      className="form"
      aria-label="Create new entry"
      onSubmit={handleSubmit}
    >
      <fieldset className="form__fieldset">
        <legend className="form__legend">New Entry</legend>
        <Input text="Motto" placeholder="That's life in the city" />
        <Textarea
          text="Notes"
          placeholder="5000$ for a 15 square meter apartment... welcome to the city!"
        />
      </fieldset>
      <Button aria="Create new entry" className="button--submit" type="submit">
        Create
      </Button>
    </form>
  );
}
