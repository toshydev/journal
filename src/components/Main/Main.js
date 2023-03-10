import EntrySection from "../EntrySection/EntrySection";
import Form from "../Form/Form";
import "./Main.css";
import { useState } from "react";
import { uid } from "uid";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
    isFavorite: false,
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
    isFavorite: false,
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
    isFavorite: false,
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
    isFavorite: false,
  },
];

export default function Main() {
  const [entries, setEntries] = useState(initialEntries);
  const [filter, setFilter] = useState("all");
  const favoriteEntries = entries.filter((entry) => entry.isFavorite);

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([
      ...entries,
      { ...newEntry, id: uid(), date: date, isFavorite: false },
    ]);
  }

  function handleToggleFavorite(id) {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry
      )
    );
  }

  function handleShowFavoriteEntries() {
    setFilter("favorites");
  }

  function handleShowAllEntries() {
    setFilter("all");
  }

  return (
    <main className="main">
      <Form onAddEntry={handleAddEntry} />
      <EntrySection
        entries={filter === "all" ? entries : favoriteEntries}
        onToggleFavorite={handleToggleFavorite}
        onShowAllEntries={handleShowAllEntries}
        onShowFavoriteEntries={handleShowFavoriteEntries}
        filter={filter}
        allEntriesCount={entries.length}
        favoriteEntriesCount={favoriteEntries.length}
      />
    </main>
  );
}
