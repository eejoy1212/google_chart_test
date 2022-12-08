import React, { useState } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
let timer;
let xPos=0;
let a=[];
export default  function HighApp(props) {

    const [aDatas,setADatas]=useState([]);
    console.log('aDatas length',aDatas);
    const initialOptions = {
        title : { text : "chart test" },
        // chart : { type : "line" },
        // xAxis : {data:[0,12,]},
  series: [{
    data: aDatas,
    lineWidth: 0.5,
    name: 'A'
  },
  {
    data: aDatas,
    lineWidth: 0.5,
    name: 'A'
  }] // 데이터가 처음엔 비어았다.
    };  
  
    // const [ options, setOptions ] = useState(initialOptions);
    return (
        <div>
            <button 
             onClick={()=>{
                timer=setInterval(() => {
                    console.log('타이머');
                    
                    for (var i = 0; i < 200; i++) {
          
                      let tempA = Math.random() * 5 + 1;
                      let b = Math.random() * 5 + 1;
                      // console.log('a',a);
                      // console.log('b',b);
                      //
                      console.log('xPos',xPos);
                      a.push(tempA);
                    // vvv.push([(xPos+i).toString(),a,b]);
                  
               
               
                      // dataModel.push({...dataModel,...vvv});
                     
                      
                    }
                    xPos+=200;
                    setADatas([...a])
                    console.log('a',aDatas);
                    // setDatas([...vvv])
                    // console.log('vvv',vvv);
                
               
                  }, 200);
             }}
             >chart start</button>
             <button
             onClick={()=>{
                    clearInterval(timer); 
             }}
             >chart pause</button>
            <HighchartsReact 
            highcharts={ Highcharts } 
            options={ initialOptions }
            />
        </div>
    );
}
