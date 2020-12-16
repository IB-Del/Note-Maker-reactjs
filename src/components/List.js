import React, {useState, useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from '../components/Form.js'
import {getNotes, createNote} from '../utils/noteHelpers.js'



export default function List({selectedNote, setSelectedNote, notes}) {
  const jsonNoteArray = JSON.stringify(notes)
  const onSelectNote = (note) => {
    setSelectedNote(note)
  }
  console.log('notes', notes)
  return (
    <ListGroup as="ul">
      {notes.map((note, index) => (
        <ListGroup.Item
          active={selectedNote ? note.id === selectedNote.id : null}
          onClick={() => onSelectNote(note)}
          as="li"
        >
          {note.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}