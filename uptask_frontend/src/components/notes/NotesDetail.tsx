import type { Note } from "@/types/index"


type NoteDetailProps = {
    note : Note
}

export default function NotesDetail({note} : NoteDetailProps) {

  return (
    <>
      <p>{note.content}</p>
    </>
  )
}
