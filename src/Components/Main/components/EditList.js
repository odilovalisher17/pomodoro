import React, {useState, useEffect} from 'react';import fotoUp from '../caret-up.png'
import fotoDown from '../caret-down.png'
import fotoLock from '../lock-black.png'

const EditList = props => {
  const {lists, setLists, index ,header, note, num, allNum, setEdit} = props
  const [taskHeader, setTaskHeader] = useState(header)
  const [taskNoteNum, setTaskNoteNum] = useState(allNum)
  const [taskNote, setTaskNote] = useState(note)
  const [taskNum, setTaskNum] = useState(num)

  const changingNote = x => {
      const btn = document.querySelector('.edit-btn')
      const area = document.querySelector('.edit-area')
      if(x){
        area.style.display = 'flex'
      }else{
        btn.style.display = 'block'
        area.style.display = 'none'
      }
  }

  const handleAddingList = () => {
    setEdit(false)
  }

  const onClickSave = () =>{
    let newLists = [...lists]
    newLists[index].header = taskHeader.trim();
    newLists[index].allNum = taskNoteNum;
    newLists[index].note = taskNote.trim();
    newLists[index].num = taskNum;
    setLists(newLists)
    setEdit(false)
  }

  return (
    <div className="tasks-edit">
    <div className="task-edition">
      <div className="task-options-edit">
        <div style={{padding:"8px 0"}}>
          <input 
          type="text" 
          placeholder="What are you working on?"
          value={taskHeader}
          onChange={e=>{setTaskHeader(e.target.value)}} 
          autoFocus />
        </div>

        <div className='task-num'>
          <div style={{display:"flex"}}>
            <div className='task-num-text'>Act /</div>
            <div className='task-num-text'>Est Pomodoros</div>
          </div>

          <input 
          type="number" 
          min='0' 
          defaultValue={taskNum}
          value={taskNum}
          onChange={e=>setTaskNum(e.target.value)} />

          <input 
          type="number" 
          min='1' 
          defaultValue={1}
          value={taskNoteNum}
          onChange={e=>setTaskNoteNum(e.target.value)} />
          <button onClick={()=>setTaskNoteNum(t=>Number(t)+1)}> <img src={fotoUp} alt="" /> </button>
          <button onClick={()=>setTaskNoteNum(t=> t>1 ? t-1 : t)}> <img src={fotoDown} alt="" /> </button>
        </div>

        <div className="task-notes">
          {note.length > 0 ? changingNote(true) : <button onClick={()=>changingNote(true)} className='edit-btn'>+Add Note</button>} 
          <textarea
          className='edit-area' 
          placeholder="Some notes..." 
          autoFocus
          value={taskNote}
          onChange={e=>setTaskNote(e.target.value)}></textarea>
          <button>+Add Project <img src={fotoLock} alt="" /></button>
        </div>
      </div>

      <div className="task-footer">
        <button className="task-footer-del">Delete</button>

        <div class="task-btns">
          <button onClick={()=>handleAddingList()} className="task-footer-cancel">Cancel</button>
          <button onClick={onClickSave} disabled={taskHeader.trim() !== '' ? false : true} className={taskHeader.trim() !== '' ? "task-save-enable" : "task-footer-save"}>Save</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default EditList;
