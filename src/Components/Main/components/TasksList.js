import React, {useState} from 'react';
import foto1 from '../threedots-white.png'
import foto2 from '../plus-circle-white.png'
import List from './List';
import img1 from '../delete-black.png'
import img2 from '../clear-black.png'
import img3 from '../save-black2.png'
import img4 from '../plus-black.png'
import AddingList from './AddingList';

const TasksList = props => {
  const {lists, setLists, pomodoro, shortBreak, longBreak, intervalBreaks, selectedList ,setSelectedList} = props
  const [taskTopOption, setTaskTopOption] = useState(false)

  const handleAddingList = x => {
    const listdiv = document.querySelector('.tasks')
    const addbtn = document.querySelector('.tasks-add')
    if(x){
      listdiv.style.display = 'block'
      addbtn.style.display = 'none'
    }else{
      addbtn.style.display = 'flex'
      listdiv.style.display = 'none'
    }
  }

  let countingEst = () => {
    let est = 0;
    lists.map(l=>{
    est = Number(est) + Number(l.num > l.allNum ? l.num : l.allNum)
    })
  return est;
  }

  let countingAct = () => {
    let act = 0;
    lists.map(l=>{
      act = Number(act) + Number(l.num)
    })
    return act;
  }

  let finishTime = () => {
    let time = new Date();
    let plusTime = 0;
    let allLists = 0;
    lists.filter(x=>(x.allNum>x.num)&& !x.complete).map(l=>{
      allLists = Number(allLists) + Number(l.allNum)
    })

    let numShort = allLists>0 ? allLists - Math.floor(allLists%intervalBreaks === 0 ? Math.floor(allLists/intervalBreaks)-1 : allLists/(intervalBreaks)) - 1 : 0
    let numLong = allLists>0 ? allLists%(intervalBreaks) === 0 ? Math.floor(allLists / (intervalBreaks)) - 1 : Math.floor(allLists / (intervalBreaks)) : 0
    plusTime = Number(pomodoro) * Number(allLists) + Number(numShort) * Number(shortBreak) + Number(numLong) * Number(longBreak)

    time = new Date(time.getFullYear(), time.getMonth(), time.getDate() ,time.getHours(), time.getMinutes(), (time.getSeconds() + plusTime))

    let finishTime = `${time.getHours() > 9 ? time.getHours() : `0${time.getHours()}`}:${time.getMinutes()>9 ? time.getMinutes() : `0${time.getMinutes()}`}`
    return finishTime;
  }
  
  // interval 4
  // 1 => 4 => 8 => 12 => ...
  // 10
  // 5 => 10:15 >> 10*55 + 7*5 + 2*15
  // 5*55 + 7*5 + 2

  const changeTaskTopOption = () => {
    setTaskTopOption(t=> !t)
    const taskTopOptionDiv = document.querySelector('.task-top-options') 
    if(taskTopOption){
      taskTopOptionDiv.style.display = 'block'
    }else{
      taskTopOptionDiv.style.display = 'none'
    }
  }

  const onClickTaskOptions = (x) => {
    changeTaskTopOption()
    console.log('hu')
    if(x === 'clearFinished'){
      let newLists = [...lists]
      newLists = newLists.filter(l=> !l.complete)
      setLists(newLists)
    }
    if(x === 'clearAct'){
      let newLists = [...lists]
      newLists = newLists.map(l=> {l.num = 0; return l})
      setLists(newLists)
      console.log(newLists)
    }
    if(x === 'save'){
      alert('Please login to use the template feature.')
    }
    if(x === 'addTemp'){
      alert('Please login to use the template feature.')
    }
    if(x === 'clearAll'){
      if(window.confirm('Are you sure you want to delete all tasks?')){
        setLists([])
      }else{
        //Nothing
      }
    }
  }

  
  return (
    <div className='tasks-list'>
      <div className="tasks-top">
          <div className="task-top-logo">
              Tasks
          </div>

          <div className="task-top-menu">
              <button onClick={changeTaskTopOption}><img src={foto1} alt="" style={{width:"16px"}} /></button>

              <div className='task-top-options'>
                <div onClick={()=>onClickTaskOptions('clearFinished')}>
                  <img src={img1} alt="clear icon"  />Clear finished tasks
                </div>
                <div onClick={()=>onClickTaskOptions('clearAct')}>
                  <img src={img2} alt="clear icon"  />Clear act pomodoros
                </div>
                <div onClick={()=>onClickTaskOptions('save')}>
                  <img src={img3} alt="save icon"  />Save as template
                </div>
                <div onClick={()=>onClickTaskOptions('addTemp')}>
                  <img src={img4} alt="plus icon"  />Add from templates
                </div>
                <div onClick={()=>onClickTaskOptions('clearAll')}>
                  <img src={img1} alt="clear icon"  />Clear all tasks
                </div>
              </div>
          </div>
      </div>

      {lists.length !== 0 && lists.map(l =>
        (<List
        header={l.header}
        allNum={l.allNum}
        note={l.note}
        num={l.num}
        complete={l.complete}
        lists={lists}
        setLists={setLists}
        index={lists.indexOf(l)}
        selectedList = {selectedList}
        setSelectedList={setSelectedList} />
      ))}

      <AddingList
      lists={lists}
      setLists={setLists}
      handleAddingList={handleAddingList} />

      <div className="tasks-add" onClick={()=>handleAddingList(true)}>
              <img src={foto2} alt="" />
              <div> Add Task </div>
      </div>

      {lists.length !== 0 && 
      <div className="tasks-timer-table">
        <div>
          <div>Est: <span className="timer-table">{countingEst()}</span></div>
          <div>Act: <span className="timer-table">{countingAct()}</span></div>
          <div>Finish at <span className="timer-table">{finishTime()}</span></div>
        </div>
      </div>}
     </div>
  );
}

export default TasksList;
