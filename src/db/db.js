import Dexie from 'dexie';

// import Note from 'src/modules/Note';

const db = new Dexie('NotesDatabase');

export default db;

db.version(1).stores({ notes: '++id, title, content' });
db.open();

// db.notes.add({ title: 'Note 1', content: 'My first notes content' });

// db.notes.mapToClass(Note);

// console.log(db.notes);

// [{ title, content, ...}]
// [Note]
