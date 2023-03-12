import Tab from "../Tab/Tab";
import "./TabBar.css";

export default function TabBar({
  onShowAllEntries,
  onShowFavoriteEntries,
  filter,
  allEntriesCount,
  favoriteEntriesCount,
}) {
  return (
    <section className="tab-bar">
      <Tab
        text="All Entries"
        number={allEntriesCount}
        active={filter === "all" ? true : false}
        onClick={onShowAllEntries}
      />
      <Tab
        text="Favorites"
        number={favoriteEntriesCount}
        active={filter === "all" ? false : true}
        onClick={onShowFavoriteEntries}
      />
    </section>
  );
}
