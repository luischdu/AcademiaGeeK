import { db } from "../firebase/firebase-config";
import { loadNote } from "../helpers/loadNote";
import { types } from "../types/types";

export const notesAdd = (notes) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const docRef = await db.collection(`${uid}/jurnal/notes`).add(newNote);
    dispatch(activeNotes(docRef.id, newNote));
  };
};

export const activeNotes = (id, notes) => {
  return {
    type: types.notesActive,
    payload: {
      id,
      ...notes,
    },
  };
};

export const setNote = (notes) => {
  return {
    type: types.notesLoad,
    payload: notes,
  };
};

export const startLoadingNote = (uid) => {
  return async (dispatch) => {
    const notes = await loadNote(uid);
    dispatch(setNote(notes));
  };
};

export const startSaveNote = (notes) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!notes.url) {
      delete notes.url;
    }

    const noteToFirestore = { ...notes };
    delete noteToFirestore.id;

    await db.doc(`${uid}/jurnal/notes/${notes.id}`).update(noteToFirestore)

  };
};
