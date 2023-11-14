d3.csv('https://raw.githubusercontent.com/ryanchung403/dataset/main/train_data_titanic.csv').then(
    res => {
        DrawHistogram(res)
    }
)

function DrawHistogram(res){
    console.log(res)
    let myGraph = document.getElementById('Histogram');

    let trace1 = {};
    trace1.type = "histogram";
    trace1.x = [];
    trace1.name = "父母&小孩"
    trace1.opacity = 1;
    trace1.xbins = {
        size:1,
        start:0,
        end:10
    }

    let trace2 = {};
    trace2.type = "histogram";
    trace2.x = [];
    trace2.name = "兄弟姊妹&配偶"
    trace2.xbins = {
        size:1,
        start:0,
        end:10
    }
    trace2.opacity = 0.5;

    for(let i=0;i<res.length;i++){
        trace1.x[i] = res[i]['Parch'];
        trace2.x[i] = res[i]['SibSp'];
    }

    let data = [];
    data.push(trace1);
    data.push(trace2);


    let layout = {
        margin:{
            t:0
        },
        barmode : "overlay"
    };
    Plotly.newPlot(myGraph, data, layout);
}

