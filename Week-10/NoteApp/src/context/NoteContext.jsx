import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types'

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
    NoteProvider.propTypes = {
        children: PropTypes.node.isRequired
    }

    // Notlar için renkler
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
    const [search, setSearch] = useState(""); // Arama


    // Notu güncelle
    const handleChange = (e) => {
        const newNote = e.target.value;
        setNote(newNote);
        console.log(note);
    }

    // Renk değiştir
    const handleColorChange = (e) => {
        const newColor = e.target.value;
        setColor(newColor);
        console.log(e.target.value);
    }

    // Not ekle
    const handleAddNote = () => {
        if (note.trim() !== "") {
            setNotes([...notes, { note, color }]);
            setNote('');
        } else {
            console.log("Please enter a note");
        }
    }

    // Notu seç
    const setSelectedNote = (note) => {
        alert(`${note.note}`)
    }

    // Notları filtrele
    const filteredNotes = notes.filter(note => 
        note.note.toLowerCase().includes(search.toLowerCase())
    )

    const data = {
        notes,
        note,
        color,
        colors,
        search,
        filteredNotes,
        handleChange, 
        handleColorChange, 
        handleAddNote,
        setSelectedNote,
        setSearch,
    }
    return <NoteContext.Provider value={data}>{children}</NoteContext.Provider>
}

export const useNote = () => useContext(NoteContext)