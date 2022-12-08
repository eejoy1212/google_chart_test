import 'zingchart/es6'
import ZingChart from 'zingchart-react'
import { useState } from 'react';

// const { Component } = require("react");
// const ZingChart = require("zingchart-react");
let aaa=[]
let bbb=[]
let temp=[];
let xPos=0;
let timer;
let aSeries = []
export default  function ZingApp(props) {
    const [datas,setAdatas]=useState({a:[],b:[]});
    // const [bDatas,setBdatas]=useState([]);
    console.log('aDatas',datas);
    console.log(aSeries);

    const myData = {
        type: 'line',
        scaleY: {
            // minValue: 0,
            // maxValue: 6000000,
            // format: '%v',
            short: true,
          
            // lineWidth: '10px',
           
          
            tick: {
              visible: true
            }
          },
        series:[
            {
                lineWidth:'1px',
                values: [...datas.a] },
            { 
                lineWidth:'1px',
                values: [...datas.b] }
          ]
    };
    

    return (
        <>
        <button 
        onClick={()=>{
            timer=setInterval(() => {
                console.log('타이머');
                for (var i = 0; i < 200; i++) {
      
                  let a = Math.random() * 5 + 1;
                  let b = Math.random() * 5 + 1;
                  // console.log('a',a);
                  // console.log('b',b);
                  //
          aaa.push(a)
           bbb.push(b)
           
                  // dataModel.push({...dataModel,...vvv});
                 
                  
                }
                console.log(aaa.length);
                // xPos+=200;
                setAdatas({a:aaa,b:bbb})
                console.log('aData in set',datas);
            ///////////////////////
         
    //         for (const k in 200) {
    //             let a = Math.random() * 5 + 1;
    //             let b = Math.random() * 5 + 1;
    //          aSeries[k]=[];
    //          aSeries[k][0].push(a);
    // aSeries[k][1] = [];
    //         }
     
           
              }, 200);
      
        }}
        >chart start</button>
              <ZingChart data={myData} />
        </>
    );
}
