import { useLocalstorage } from "./hooks/useLocalStorage";
import { usePreline } from "./hooks/usePreline";

export type Note = {
  id: string;
} & NoteData;

export type RawNote = {
  id: string,
} & RawNoteData

export type RawNoteData = {
  title: string;
  body: string;
  tagIds: string[];
};

export type NoteData = {
  title: string;
  body: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

function App() {
  usePreline();

  const [notes, setNotes] = useLocalstorage<RawNote[]>("NOTES", [])
  const [tags, setTags] = useLocalstorage<Tag[]>("TAGS", []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
