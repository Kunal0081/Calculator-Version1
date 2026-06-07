
import styles from "./App.module.css";

function App() {
  

  return (
    <div className={styles.calculator}>
      <input id="diplay" type ="text" />
      <div id="Buttons-container">
        <butoon>C</butoon>
      </div>
    </div>
  )
}

export default App
