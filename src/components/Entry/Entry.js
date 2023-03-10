import Icon from "../Icon/Icon";
import "./Entry.css";

export default function Entry({ entry, onToggleFavorite }) {
  return (
    <article className="entry">
      <aside className="entry__date">{entry.date}</aside>
      <section className="entry__title-container">
        <h2 className="entry__title">{entry.motto}</h2>
        <Icon entry={entry} onToggleFavorite={onToggleFavorite} />
      </section>
      <p className="entry__text">{entry.notes}</p>
    </article>
  );
}
