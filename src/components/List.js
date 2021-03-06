
import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default function List({selectedNote, setSelectedNote, notes}) {
  const onSelectNote = (note) => {
    setSelectedNote(note)
  }

  if (!notes) return null
  if (!notes.length) return <p>list empty</p>
  return (
    <ListGroup as="ul" className="mb-3">
      {notes.map((note, index) => (
        <ListGroup.Item
          active={selectedNote ? note.id === selectedNote.id : false}
          onClick={() => onSelectNote(note)}
          as="li"
        >
          {note.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}