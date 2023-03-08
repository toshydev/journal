import Icon from "../Icon/Icon";
import "./Entry.css";

export default function Entry({ title, date, text, active }) {
  return (
    <article className="entry">
      <aside className="entry__date">{date}</aside>
      <section className="entry__title-container">
        <h2 className="entry__title">{title}</h2>
        <Icon active={active} />
      </section>
      <p className="entry__text">{text}</p>
      <div className="entry__breakline" />
    </article>
  );
}
