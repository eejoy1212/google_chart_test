import './App.css';
import { Chart} from "react-google-charts";
import { DataModel } from './model/DataModel';
import { useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import { useState } from 'react';
let vvv=[];
let temp=[];
let xPos=0;
let timer;
/*
1. 핀치 줌
2. 크로스 헤어
3. 로그스케일-변화율 파악이 더 쉽다고 함.
*/
function App() {

  const dispatch=useDispatch();
  const dataReducer=useSelector(state=>state.dataReducer);
  console.log('dr length',dataReducer.length);
  const [datas,setDatas]=useState([]);
  console.log('dataslength',datas.length);
  // temp.push(dataReducer);
// console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>vvv 1111',vvv);
  // const dataModel= new DataModel();
  
  // console.log(dataModel);
// console.log(vvv);
   const data = [
    ["Year", "a", "b"],
    // vvv.map(it=>[it.x,it.v,it.a])
    // vvv!==[]&&vvv.map(it=>[it.x,it.v,it.a])
    // ...vvv.map(it=>[it.x.toString(),it.v,it.a])
 [0,0,0],
...datas,

//  ...vvv
    // ["2004", 1000, 400],
    // ...vvv
    // ...dataReducer
    // ["2005", 1170, 460],
    // ["2006", 660, 1120],
    // ["2007", 1030, 540],
  ];
  console.log('data 길이',data);

   const options = {
    filterColumnIndex:0,
    async: true,
    // title: "Test",
    // curveType: "function",
    // series: [{ color: "#D9544C" }],
    // intervals: { style: "bars" },
    lineWidth: 1,
    animation:{
      duration: 0,
      // easing: 'out',
    },
  range:{
    start:0,
    end:datas.length
  },
    explorer: {
      actions: ['dragToZoom', 'rightClickToReset']
      ,keepInBounds: true 
      /* you can add more options */
    }
    // hAxis: {viewWindow: {min:datas.length-200, max:datas.length}}
    // intervals: { lineWidth: 5, barWidth: 1, style: "boxes" },
    // legend: "none",
   ,  crosshair: { trigger: 'both' }
   ,  trendlines: {
    0: {
      type: 'linear',
      color: 'green',
      lineWidth: 3,
      opacity: 0.3,
      showR2: true,
      visibleInLegend: true
    }
  },
  vAxis:{ viewWindowMode: 'pretty',},
  interpolateNulls:true
  //  vAxis: { gridlines: { count: 4 } }
//     vAxis: {
//     scaleType: 'log'
// }
// vAxis: {
//   viewWindowMode:'explicit',
//   // viewWindow: {
//   //     min: 0,
//   //     max: 5
//   // }
// }                                                                                                                                                                                                                                          
// vAxis: { ticks: [16, {v:32, f:'thirty two'}, {v:64, f:'sixty four'}, 128] },
  // theme: 'material'
  // ticks: [0,1,2,3,4,5,6,7,8,9,10]
   }

  return (
  <>
    <button onClick={()=>{
      	timer=setInterval(() => {
          console.log('타이머');
          for (var i = 0; i < 200; i++) {

            let a = Math.random() * 5 + 1;
            let b = Math.random() * 5 + 1;
            // console.log('a',a);
            // console.log('b',b);
            //
            console.log('xPos',xPos);
          vvv.push([(xPos+i).toString(),a,b]);
     
     
            // dataModel.push({...dataModel,...vvv});
           
            
          }
          xPos+=200;
          setDatas([...vvv])
          // console.log('vvv',vvv);
      
     
        }, 200);


    }}>차트 시작</button>
    <button onClick={()=>{
      clearInterval(timer);
    }}>차트 멈춤</button>
  
    <Chart
  chartType="LineChart"
  // explorer={{ actions: ['dragToZoom', 'rightClickToReset'],  axis: 'horizontal',
  // keepInBounds: true,
  // maxZoomIn: 4.0}}
  data={data}
  options={options}
  width="100%"
  height="400px"
  legendToggle
/>
<Chart
  chartType="LineChart"
  // explorer={{ actions: ['dragToZoom', 'rightClickToReset'],  axis: 'horizontal',
  // keepInBounds: true,
  // maxZoomIn: 4.0}}
  data={data}
  options={options}
  width="100%"
  height="400px"
  legendToggle
/>
<Chart
  chartType="LineChart"
  // explorer={{ actions: ['dragToZoom', 'rightClickToReset'],  axis: 'horizontal',
  // keepInBounds: true,
  // maxZoomIn: 4.0}}
  chartPackages={["corechart", "controls"]}
  data={data}
  options={options}
  controls={[
    {
      controlType: "ChartRangeFilter",
      options: {
        filterColumnIndex: 0,
        ui: {
          chartType: "LineChart",
          chartOptions: {
            chartArea: { width: "90%", height: "50%" },
            hAxis: { baselineColor: "none" }
          }
        }
      },
      controlPosition: "bottom",
      controlWrapperParams: {
        state: {
          range: {
           start: 0,
            end: datas.length
          }
        }
      }
    }
  ]}
  width="100%"
  height="400px"
  legendToggle
/>
  </>
    
  );

 
}

export default App;
