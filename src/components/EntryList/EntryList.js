import Entry from "../Entry/Entry";
import "./EntryList.css";
import Divider from "../Divider/Divider";
import { Fragment } from "react";

export default function EntryList({ entries, onToggleFavorite }) {
  return (
    <ul className="entry-container">
      {entries.map((entry, index) => {
        return (
          <Fragment key={entry.id}>
            {index > 0 && <Divider />}
            <Entry entry={entry} onToggleFavorite={onToggleFavorite} />
          </Fragment>
        );
      })}
    </ul>
  );
}
