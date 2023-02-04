import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
    // active:{
    //    id: '',
    //    title: '',
    //    body:'',
    //    date:'123465',
    //    imagesURL: []
    // }
  },
  reducers: {
    savignNewNote: (state) => {
      state.isSaving = true;
    },

    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = '';
      // console.log(action.payload);
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = '';

      //TODO: mensaje de error
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          //Se prevee que el payload sea la nora actualizada.
          return action.payload;
        }
        return note; 
      });

      state.messageSaved = `${ action.payload.title }, actualizado correctamente.`;

    },

    setPhotosToActiveNote: (state, action)=>{
      state.active.imageUrls = [ ...state.active.imageUrls, ... action.payload ];
      state.isSaving = false;
    },

    deleteNoteById: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  savignNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  setPhotosToActiveNote
} = journalSlice.actions;
