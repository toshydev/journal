import EntryList from "../EntryList/EntryList";
import TabBar from "../TabBar/TabBar";
import "./EntrySection.css";

export default function EntrySection() {
  return (
    <section className="entry-section">
      <TabBar />
      <EntryList />
    </section>
  );
}
