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
import ScatterPlot from './ScatterPlot/ScatterPlot'
import WorkingWithTime from './WorkingWithTime/WorkingWithTime'
import LineChart from './LineChart/LineChart'
import Menus from './Menus/Menus'
import ScatterPlotWithMenus from './ScatterPlotWithMenus/ScatterPlotWithMenus'
import PolishedScatterPlotWithMenus from './PolishedScatterPlotWithMenus/PolishedScatterPlotWithMenus'


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
      {/* <ScatterPlot /> */}
      {/* <WorkingWithTime /> */}
      {/* <LineChart /> */}
      {/* <Menus /> */}
      {/* <ScatterPlotWithMenus /> */}
      {/* <PolishedScatterPlotWithMenus /> */}
    </div>
  );
}

export default App;
