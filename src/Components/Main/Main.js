import React, {useState, useEffect} from 'react';
import TasksList from './components/TasksList';
import './Main.css'
import foto1 from './next-white3.png'

const Main = () => {
  const [pomodoro, setPomodoro] = useState(55*60)
  const [shortBreak, setShortBreak] = useState(5*60)
  const [longBreak, setLongBreak] = useState(15*60)
  const [intervalBreaks, setIntervalBreaks] = useState(4)
  const [current, setCurrent] = useState(1)
  const [time, setTime] = useState(pomodoro)
  const [isGoing, setIsGoing] = useState(false)
  const [taskNum, setTaskNum] = useState(1)
  const [lists, setLists] = useState([])
  const [selectedList, setSelectedList] = useState(0)

  useEffect(()=>{
    const nextBtn = document.querySelector('.next-btn')

    let timer = null;
    if(isGoing && time > 0){
      timer = setInterval(()=>{
        setTime(t=>t-1)
      },1000)

      nextBtn.style.opacity = '1'
      nextBtn.style.pointerEvents = 'auto'
    }else if(time === 0 && isGoing){
      setTaskNum(t=>t+1)
      clearInterval(timer)
      setIsGoing(false)

      setTimeout(()=>{
        if(current < 3){
          if((taskNum/intervalBreaks) > 0 && taskNum%intervalBreaks === 0 && current !== 2){
            setCurrent(c=> c===3 ? 1 : 3)
            changingMode(current ? 1 : 3)
          }else{
            setCurrent(c=> c===1 ? 2 :1)
            changingMode(current ? 2 :1)
          }
        }else{
          setCurrent(1)
          changingMode(1)
        }
      },500)

      if(current === 1){
        let newLists = [...lists]
        newLists[selectedList].num = newLists[selectedList].num + 1;
        if(newLists[selectedList].num >= newLists[selectedList].allNum){
          newLists[selectedList].complete = true;
        }else{
          newLists[selectedList].complete = false;
        }
        setLists(newLists)
      }

      nextBtn.style.opacity = '0'
      nextBtn.style.pointerEvents = 'none'
    }else{
      clearInterval(timer)
      nextBtn.style.opacity = '0'
      nextBtn.style.pointerEvents = 'none'
    }

    return () => clearInterval(timer)
  }, [time,isGoing])

  const changingMode = (x) => {
    const home = document.querySelector('.homepage')
    const startBtn = document.querySelector('.main-start-btn')
    
    if(x === 1){
      setCurrent(x)
      home.style.background = 'rgb(217, 85, 80)'
      startBtn.style.color = 'rgb(217, 85, 80)'
      setTime(pomodoro)
    }
    if(x === 2){
      setCurrent(x)
      home.style.background = 'rgb(76, 145, 149)'
      startBtn.style.color = 'rgb(76, 145, 149)'
      setTime(shortBreak)
    }
    if(x === 3){
      setCurrent(x)
      home.style.background = 'rgb(69, 124, 163)'
      startBtn.style.color = 'rgb(69, 124, 163)'
      setTime(longBreak)
    }
  }

  const onClickChange = x => {
    setIsGoing(g => !g)
  }

  const onClickNext = (x,y) => {
    if (window.confirm('Are you sure you want to finish the round early? (The remaining time will not be counted in the report.)')) {
      setIsGoing(false)
      if((taskNum/intervalBreaks) > 0 && taskNum%intervalBreaks === 0 && current !== 2){
        setCurrent(c=> c===3 ? 1 : 3)
        changingMode(current === 3 ? 1 : 3)
      }else{
        setCurrent(c=> c===1 ? 2 :1)
        changingMode( current===1 ? 2 :1)
      }
      if( x === 2 && y ){
        setTaskNum(t=>t+1)
      }

      if(x === 2 && y){
          let newLists = [...lists]
          newLists[selectedList].num = newLists[selectedList].num + 1;
          setLists(newLists)
      }
    } else {
      // Do nothing!
    }
  }

  return (
    <div className='main'>
      <div className="main-timer">
          <div className='main-timer-top'>
              <button className={current === 1 ?'main-top-btn main-btn-active' : 'main-top-btn'} onClick={isGoing ? ()=> onClickNext(1) : ()=>changingMode(1)}>Pomodoro</button>
              <button className={current === 2 ?'main-top-btn main-btn-active' : 'main-top-btn'} onClick={isGoing ? ()=>onClickNext(2) : ()=>changingMode(2)}>Short Break</button>
              <button className={current === 3 ?'main-top-btn main-btn-active' : 'main-top-btn'} onClick={isGoing ? ()=>onClickNext(3) : ()=>changingMode(3)}>Long Break</button>
          </div>

          <div className="main-time">
              {(time/60) > 9 ? Math.floor(time/60) : `0${Math.floor(time/60)}`}:{(time%60) > 9 ? time%60 : `0${time%60}`}
          </div>

          <div className='start-stop-div'>
              <button className={isGoing ? 'main-start-btn main-start-btn-active' : 'main-start-btn'} onClick={()=>onClickChange(isGoing)}>
                {isGoing ? 'STOP' : "START"}
              </button>

              <div className="main-next">
                <button onClick={()=>onClickNext(current<3? current+1 : 1, true)} className="next-btn">
                  <img src={foto1} />
                </button>
              </div>
          </div>
      </div>

      <div className="main-counting">
          #{taskNum}
      </div>

      <div className="main-bottom-text">
        {current === 1 ?lists[selectedList] !== undefined && lists[selectedList].header !== '' ? lists[selectedList].header : "Time to focus!" : "Time for break!"}
      </div>

      <TasksList
      lists={lists}
      setLists={setLists}
      taskNum={taskNum}
      pomodoro={pomodoro}
      shortBreak={shortBreak}
      longBreak={longBreak}
      intervalBreaks={intervalBreaks}
      selectedList={selectedList}
      setSelectedList={setSelectedList} />
    </div>
  );
}

export default Main;
