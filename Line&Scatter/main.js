d3.csv('Line&Scatter/data.csv').then(
    res => {
        let myGraph = document.getElementById('LineScatter');

        let trace1 = {}
        trace1.mode = "lines";
        trace1.type = "scatter";
        trace1.visible = true;
        trace1.name = "總計";
        trace1.marker = {
            size:10
        }
        trace1.text = [];
        trace1.textposition = "bottom center"
        trace1.x = [];
        trace1.y = [];

        let trace2 = [];

        let year = 69
        let count = 0;
        let check = true
        trace1.y[0] = 0;
        

        for(let i=0; i < res.length;i++){
                if(_.isEmpty((trace2[res[i]["Category2Title"]]))){
                    trace2[res[i]["Category2Title"]] = {};
                    trace2[res[i]["Category2Title"]].y = [];
                    trace2[res[i]["Category2Title"]].y[0] = 0;
                    trace2[res[i]["Category2Title"]].x = [];
                    trace2[res[i]["Category2Title"]].x[0] = 0;
                    trace2[res[i]["Category2Title"]].mode = "lines";
                    trace2[res[i]["Category2Title"]].type = "scatter";
                    trace2[res[i]["Category2Title"]].name = res[i]["Category2Title"];
                }
                if(res[i]["Category1Title"] == '總計'){
                    check = true;
                    trace1.y[year-69] += Number(res[i]['Val']);
                    trace2[res[i]["Category2Title"]].y[year-69] += Number(res[i]['Val']);
                    trace2[res[i]["Category2Title"]].y[year-68] = 0;
                    trace2[res[i]["Category2Title"]].x[year-69] = year;
                    count++;
                }
                else if(check){
                    trace1.y[year-69] /= count;
                    trace1.x[year-69] = year;
                    trace2[res[i]["Category2Title"]].x[year-69] = year;
                    year++;
                    trace1.y[year-69] = 0;
                    count = 0;
                    check = false;
                }
        }

        

        let data = [];
        data.push(trace1);
        for(var key in trace2){
            data.push(trace2[key]);
        }

        let layout = {
            width: 1100,
            height: 500,
            margin:{
                t:75
            },
            xaxis:{range:[69,110]},
            title: {
                text:'台灣各產業近40年平均薪資',
                font:{
                    size : 30
                }
            }
        };
        Plotly.newPlot(myGraph, data, layout);
    }
);