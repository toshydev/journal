import Tab from "../Tab/Tab";
import "./TabBar.css";

export default function TabBar() {
  return (
    <ul className="tab-bar">
      <Tab text="All Entries" number={3} active />
      <Tab text="Favorites" number={1} />
    </ul>
  );
}
