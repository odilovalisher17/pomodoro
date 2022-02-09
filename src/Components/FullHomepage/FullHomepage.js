import React from 'react';
import Footer from '../Footer/Footer';
import Homepage from '../Homepage/Homepage';
import './FullHomepage.css'

const FullHomepage = () => {
  return (
    <div>
      <Homepage />

      <div className='container'>
          <h1 className='fullhomepage-header'>
          An online Pomodoro Timer to boost <br /> your productivity
          </h1>
      </div>

      <div className="sections container">
          <div className="section-one">
              <h2>What is Pomofocus?</h2>

              <p>
              Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by <a href="https://francescocirillo.com/pages/pomodoro-technique" target="_blank">Pomodoro Technique</a> which is a time management method developed by Francesco Cirillo.
              </p>
          </div>

          <div className="section-two">
              <h2>What is Pomodoro Technique?</h2>

              <p>
              The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. - <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank">Wikipedia</a>
              </p>
          </div>

          <div className="section-three">
              <h2>How to use the Pomodoro Timer?</h2>

              <p>
                <ol>
                    <li>Add tasks to work on today</li>
                    <li>Set estimate pomodoros (1 = 25min of work) for each tasks</li>
                    <li>Select a task to work on</li>
                    <li>Start timer and focus on the task for 25 minutes</li>
                    <li>Take a break for 5 minutes when the alarm ring</li>
                    <li>Iterate 3-5 until you finish the tasks</li>
                </ol>
              </p>
          </div>

          <div className="section-four">
              <h2>Features</h2>

              <p>
                  <ul>
                      <li>Responsive design that works with desktop and mobile</li>
                      <li>Color transition to switch moods between work time and rest time</li>
                      <li>Audio notification at the end of a timer period</li>
                      <li>Customizable timer intervals to suit your preference</li>
                  </ul>
              </p>
          </div>

          <div className="section-five">
              <h2>Download App</h2>

              <p>
                  <ul>
                      <li> <a href="https://pomofocus.io/downloadable/pomofocus-darwin-x64-1.1.0.zip" download>For macOS</a> (zip file)</li>
                      <li> <a href="https://pomofocus.io/downloadable/pomofocus-1.1.0 Setup.exe" download>For Windows</a> (exe file)</li>
                  </ul>
              </p>
          </div>
      </div>

      <Footer />
    </div>
  );
}

export default FullHomepage;
