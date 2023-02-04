import { addDoc, collection, doc, DocumentReference, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote, savignNewNote, setNotes, setSaving, updateNote, setPhotosToActiveNote } from "./";
import { loadNotes } from "../../helpers";
import { fileUpload } from "../../helpers/fileUpload";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savignNewNote());
    // console.log(getState())
    //uid
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = await addDoc(
      collection(FirebaseDB, `${uid}/journal/notes`),
      newNote
    );
    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const notas = await loadNotes(uid);

    dispatch(setNotes(notas));
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {

    dispatch(setSaving());

    const { uid } = getState().auth;
    const { active: note } = getState().journal;
    const noteToFirestore = { ...note };
    delete noteToFirestore.id; //se debe de eliminar el id, porque es un update de la nota

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${ note.id }`)
    await setDoc(docRef, noteToFirestore, { merge: true })

    dispatch(updateNote( note ));
    
  };
};


export const startUploadingFiles = ( files = [] ) =>{
  return async (dispatch, getState) => {

    dispatch(setSaving());

    //await fileUpload( files[0] );

    const fileLoadPromises = [];

    for (const file of files) {
      fileLoadPromises.push( fileUpload( file ) );
    }

     const photosUrls =  await Promise.all( fileLoadPromises );
    
     dispatch(setPhotosToActiveNote(photosUrls));
  }
}