import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
    NoteProvider.PropTypes = {
        children: PropTypes.node.isRequired
    }

    const colors = [
        { name: "pink", hex: "#f36795" },
        { name: "purple", hex: "#ba68c8" },
        { name: "yellow", hex: "#ffd44f" },
        { name: "blue", hex: "#56c4f4" },
        { name: "green", hex: "#aed581" },
    ]

    const [notes, setNotes] = useState([]); // Notlar
    const [note, setNote] = useState(""); // Not
    const [color, setColor] = useState("pink"); // Renk


    const handleChange = (e) => {
        const newNote = e.target.value;
        setNote(newNote);
        console.log(note);
    }

    const handleColorChange = (e) => {
        const newColor = e.target.value;
        setColor(newColor);
        console.log(e.target.value);
    }

    const handleAddNote = () => {
        if (note.trim() !== "") {
            setNotes([...notes, { note, color}]);
            setNote('');
        } else {
            console.log("Please enter a note");
        }
    }

    useEffect(() => {   
        
    }, [notes])

    const data = {
        note,
        color,
        colors,
        handleChange, 
        handleColorChange, 
        handleAddNote,
    }
    return <NoteContext.Provider value={data}>{children}</NoteContext.Provider>
}

export const useNote = () => useContext(NoteContext)