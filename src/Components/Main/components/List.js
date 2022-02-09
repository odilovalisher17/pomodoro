import React, {useState, useEffect} from 'react';
import fotoOptions from '../vertical-ellipsis.png'
import '../Main.css'
import EditList from './EditList';

const List = props => {
  const {header, allNum, note, num, complete,lists, setLists, index, selectedList ,setSelectedList} = props;
  const [edit, setEdit] = useState(false)

  const handleComplete = () => {
      let newLists = [...lists];
      newLists[index].complete = !newLists[index].complete;
      setLists(newLists)
  }

  const changeSelectedList = () => {
    setSelectedList(index)
  }

  useEffect(()=>{
    const listDiv = document.querySelector(`#list${index}`)
    listDiv.style.display = edit ? 'none' : "block" 
  },[edit])

  const editList = () => {
      setEdit(true)
      console.log(edit)
  }

  return (
    <div draggable="true">
        <div className={index === selectedList ? `list list-active` : `list`} id={`list${index}`}>
            <div onClick={changeSelectedList} className='list-top'>
                <div className="list-header">
                    <div onClick={handleComplete} className={complete ? "list-header-icon-true" : "list-header-icon"}></div>
                    <span className="list-header-head">
                         {header}
                    </span>
                </div>
                    
                <div className="list-right">
                    <span className="list-right-num">
                        {num}<span>/ {allNum}</span>
                    </span>
                    <div onClick={editList} className="list-right-options">
                        <div>
                            <img src={fotoOptions} alt="" />
                        </div>
                    </div>
                </div>
            </div>
                
            {note && 
            <div draggable="true" className="list-note">
            <p>{note}</p>
            </div>}
        </div>    

        {edit &&
        <EditList
        lists={lists}
        setLists={setLists}
        index={index}
        header={header}
        note={note}
        num={num}
        allNum={allNum}
        setEdit={setEdit} />}
    </div>
  );
}

export default List;
