import './App.css';
import MouseFollower from './Components/MouseFollower'
import LoadingAndParsing from './Components/LoadingAndParsing'
import VegaLite from './Components/VegaLite'
import VisualizingData from './Components/VisualizingData'
import VisualizingData2 from './Components/VisualizingData2'
import MakingABarChart from './Components/MakingABarChart'
import AddingMarginsAndAxes from './Components/AddingMarginsAndAxes'
import RefactoredBarChart from './RefactoredBarChart/RefactoredBarChart'
import StylizedBarChart from './StylizedBarChart/StylizedBarChart'


function App() {
  return (
    <div className="App">
      {/* <MouseFollower /> */}
      {/* <LoadingAndParsing /> */}
      {/* <VisualizingData /> */}
      {/* <VisualizingData2 /> */}
      {/* <MakingABarChart /> */}
      {/* <AddingMarginsAndAxes /> */}
      {/* <RefactoredBarChart /> */}
      <StylizedBarChart />
    </div>
  );
}

export default App;
