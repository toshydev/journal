import EntryList from "../EntryList/EntryList";
import TabBar from "../TabBar/TabBar";
import "./EntrySection.css";

export default function EntrySection({
  entries,
  onToggleFavorite,
  onShowAllEntries,
  onShowFavoriteEntries,
  filter,
  allEntriesCount,
  favoriteEntriesCount,
}) {
  return (
    <section className="entry-section">
      <TabBar
        onShowAllEntries={onShowAllEntries}
        onShowFavoriteEntries={onShowFavoriteEntries}
        filter={filter}
        allEntriesCount={allEntriesCount}
        favoriteEntriesCount={favoriteEntriesCount}
      />
      <EntryList entries={entries} onToggleFavorite={onToggleFavorite} />
    </section>
  );
}
