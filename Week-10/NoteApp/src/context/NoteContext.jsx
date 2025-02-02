import { createContext, useContext } from "react";
import PropTypes from 'prop-types'

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
    NoteProvider.PropTypes = {
        children: PropTypes.node.isRequired
    }



    const data = {}
    return <NoteContext.Provider value={data}>{children}</NoteContext.Provider>
}

export const useNote = () => useContext(NoteContext)