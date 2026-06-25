import type { Note } from "@/types/index"
import { formatDate } from "@/utils/utils"


type NoteDetailProps = {
    note : Note
}

export default function NotesDetail({note} : NoteDetailProps) {

  return (
    <>
        <div className="p-3 flex justify-between items-center">
            <div>
                <p>{note.content} por: <span className="font-bold">{note.createdBy.name}</span></p>
            </div>
            <p className="text-xs text-slate-500">
                {formatDate(note.createdAt)}
            </p>
        </div>
      
    </>
  )
}
