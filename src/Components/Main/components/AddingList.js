import React, {useState} from 'react';import fotoUp from '../caret-up.png'
import fotoDown from '../caret-down.png'
import fotoLock from '../lock-black.png'

const AddingList = props => {
    const {lists, setLists, handleAddingList} = props
  const [taskHeader, setTaskHeader] = useState('')
  const [taskNoteNum, setTaskNoteNum] = useState(1)
  const [taskNote, setTaskNote] = useState('')

  const onAddNote = x => {
    const btn = document.querySelector('.task-notes-btn')
    const area = document.querySelector('.task-notes-area')
    if(x){
      btn.style.display='none'
      area.style.display='block'
    }else{
      area.style.display='none'
      btn.style.display='inline-block'
    }
  }

  const onClickSave = () =>{
    let list = {}
    list.header = taskHeader.trim();
    list.allNum = taskNoteNum;
    list.note = taskNote.trim();
    list.num = 0;
    list.complete = false;
    let newLists = [...lists];
    newLists.push(list)
    setLists(newLists)
    
    setTaskHeader('')
    setTaskNoteNum(1)
    setTaskNote('')
    onAddNote(false)

    console.log(lists)
  }

  return (
    <div className="tasks">
    <div className="task-edition">
      <div className="task-options">
        <div style={{padding:"8px 0"}}>
          <input 
          type="text" 
          placeholder="What are you working on?"
          value={taskHeader}
          onChange={e=>{setTaskHeader(e.target.value)}} 
          autoFocus />
        </div>

        <div className='task-num'>
          <div className='task-num-text'>Est Pomodoros</div>

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
          <button onClick={()=>onAddNote(true)} className='task-notes-btn'>+Add Note</button>
          <textarea 
          className='task-notes-area' 
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
          <button onClick={()=>handleAddingList(false)} className="task-footer-cancel">Cancel</button>
          <button onClick={onClickSave} disabled={taskHeader.trim() !== '' ? false : true} className={taskHeader.trim() !== '' ? "task-save-enable" : "task-footer-save"}>Save</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AddingList;
