import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NotesAppBar } from "./NotesAppBar";
import { useForm } from "../../hooks/useForm";
import { activeNotes } from "../../actions/notesAction";

export const NoteScreen = () => {
  const { active: notes } = useSelector((state) => state.notes);

  const dispatch = useDispatch();

  console.log(notes);

  const [values, handleInputChange, reset] = useForm(notes);
  const { title, body, id } = values;

  const activeId = useRef(notes.id);

  console.log("id", activeId);

  useEffect(() => {
    if (notes.id !== activeId.current) {
      reset(notes);
    }
    activeId.current = notes.id;
  }, [notes, reset]);

  useEffect(() => {
    dispatch(activeNotes(id, { ...values }));
  }, [values, dispatch]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          name="title"
          value={title}
          onChange={handleInputChange}
        />

        <textarea
          placeholder="What happened today"
          className="notes__textarea"
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        <div className="notes__image">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
};
