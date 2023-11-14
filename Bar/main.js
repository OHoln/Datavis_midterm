d3.csv('Bar/data.csv').then(
    res => {
        let myGraph = document.getElementById('Bar');

        let traces = [];

        for(let i=0; i < res.length ; i++){ //x軸年紀 y軸占比
            if(!traces[res[i]["區域別"]]){
                traces[res[i]["區域別"]] = {};
                traces[res[i]["區域別"]].type = "bar";
                traces[res[i]["區域別"]].name = res[i]["區域別"];
                traces[res[i]["區域別"]].x = [];
                traces[res[i]["區域別"]].y = [];
            }
            if(res[i]["性別"] == "計"){
                if(res[i]["年齡別"] == "總計"){
                    traces[res[i]["區域別"]].sum = res[i]["總計"];
                }
                else{
                    traces[res[i]["區域別"]].x.push(res[i]["年齡別"]);
                    traces[res[i]["區域別"]].y.push(res[i]["總計"]/traces[res[i]["區域別"]].sum);
                }
            }
        }


        let data = [];
        for(var key in traces){
            data.push(traces[key]);
        }

        let layout = {
            height: 600,
            width: 800,
            margin:{
                t:60
            },
            title: {
                text:'台北市各區各年齡層人口占比',
                font:{
                    size : 30
                }
            }
        };
        Plotly.newPlot(myGraph, data, layout);
    }
);