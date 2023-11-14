d3.csv('Pie-Chart/data.csv').then(
    res => {
        let myGraph = document.getElementById('Pie-Chart');


        let trace1 = {};
        trace1.type = "pie";
        trace1.visible = true;
        trace1.title ={
            font:{
                size:20
            },
            text:"預估潛能量"
        };
        trace1.titleposition = "middle center";
        trace1.hole = 0.5;
        trace1.labels = [];
        trace1.values = [];
        trace1.text = [];
        trace1.sort = false;
        trace1.domain = {
            row:0,
            column:0
        };
        trace1.textinfo = 'value';
        trace1.textfont = {
            size:15
        };

        let trace2 = {};
        trace2.type = "pie";
        trace2.visible = true;
        trace2.title ={
            font:{
                size:20
            },
            text:"以商轉及規劃中廠家"
        };
        trace2.titleposition = "middle center";
        trace2.hole = 0.5;
        trace2.labels = [];
        trace2.values = [];
        trace2.text = [];
        trace2.sort = false;
        trace2.domain = {
            row:0,
            column:1
        };
        trace2.textinfo = "value";
        trace2.textposition = "inside";
        trace2.textfont = {
            size:15
        };

        let trace3 = {};
        trace3.type = "pie";
        trace3.visible = true;
        trace3.title ={
            font:{
                size:20
            },
            text:"剩餘預估潛能量"
        };
        trace3.titleposition = "middle center";
        trace3.hole = 0.5;
        trace3.labels = [];
        trace3.values = [];
        trace3.text = [];
        trace3.sort = false;
        trace3.domain = {
            row:0,
            column:2
        };
        trace3.textinfo = "value";
        trace3.textfont = {
            size:15
        };




        for(let i=0; i<res.length; i++){
            trace1.labels[i] = res[i]["地熱潛能區"];
            trace1.values[i] = res[i]["預估潛能量(MW)"];
            trace2.labels[i] = res[i]["地熱潛能區"];
            trace2.values[i] = res[i]["已商轉家數"]+res[i]["籌設規劃中家數"];
            trace3.labels[i] = res[i]["地熱潛能區"];
            trace3.values[i] = res[i]["預估潛能量(MW)"]-res[i]["已設置容量(MW)"]-res[i]["籌設規劃中容量(MW)"];
        }



        let data = [];
        data.push(trace1);
        data.push(trace2);
        data.push(trace3);


        let layout = {
            height: 600,
            width: 1000,
            margin:{
                t:50,
                l:50
            },
            grid:{
                rows:1,
                columns:3
            },
            title: {
                text:'台灣各地區地熱發電潛能分析 (單位:MW)',
                font:{
                    size : 30
                }
            }
        };
        Plotly.newPlot(myGraph, data, layout);
    }
);