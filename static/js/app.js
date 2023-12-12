// read in the samples data
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';
d3.json(url).then(data=>console.log(data));

// initialize
function init() {
    let dropdownMenu = d3.select('#selDataset');
    d3.json(url).then((data)=>{
        let names = data.names;
        names.forEach(id=>{
            dropdownMenu.append('option')
            .text(id).property('value', id);
        });
        let selection = names[0];
        console.log(selection);
        barChart(selection);
        bubbleChart(selection);
        metadataPanel(selection);
        gaugeChart(selection);
    });
};

// bar chart
function barChart(sample) {
    d3.json(url).then((data)=>{
        let selection = data.samples.filter(match=>match.id === sample)[0];
        let trace = {
            x: selection.sample_values.slice(0,10),
            y: selection.otu_ids.slice(0, 10).map(id => `OTU ${id}`),

            text: selection.otu_labels.slice(0,10),
            type: 'bar',
            orientation: 'h'
        };
        Plotly.newPlot('bar', [trace]);
    })
};

// bubble chart
function bubbleChart(sample) {
    d3.json(url).then((data)=>{
        let selection = data.samples.filter(match=>match.id === sample)[0];
        let trace = {
            x: selection.otu_ids,
            y: selection.sample_values,
            text: selection.otu_labels,
            mode: 'markers',
            marker: {
                size: selection.sample_values,
                //sizeref: 2.0 * Math.max(selection.sample_values)/(10**2),
                //sizemode: 'area',
                color: selection.sample_values,
                colorscale: 'Phase'
            }
        };
        let layout = {
            height: 600,
            width: 1500,
            xaxis: {title: {text: 'OTU IDs'}}
        };
        Plotly.newPlot('bubble', [trace], layout);
    })
};

// metadata panel
function metadataPanel(sample) {
    d3.json(url).then((data)=>{
        let selection = data.metadata.filter(match=>match.id === parseInt(sample))[0];
        console.log(selection);
        let panelSelect = d3.select('#sample-metadata');
        panelSelect.html('');
        Object.entries(selection).forEach(([key, value])=>{
            panelSelect.append('p').text(`${key}: ${value}`)
        });
    })
};

// bonus gauge chart
function gaugeChart(sample) {
    d3.json(url).then((data)=>{
        let selection = data.metadata.filter(match=>match.id === parseInt(sample))[0];
        let trace = {
            domain: {
                x: [0,1],
                y: [0,1]
            },
            value: Object.values(selection)[6],
            title: { text: '<b>Belly Button Washing Frequency</b> <br>Scrubs per Week</br>'},
            type: 'indicator',
            mode: 'gauge+number',
            gauge: {
                axis: {range: [0,9], tickmode: 'linear', tickwidth: 1},
                // added
                bar: {color: 'darkblue'},
                bgcolor: 'white',
                borderwidth: 2,
                bordercolor: 'red',
                steps: [
                    {range: [0,1], color: '#f0f0f0'},
                    {range: [1,2], color: '#e0f3ea'},
                    {range: [2,3], color: '#c1e6d4'},
                    {range: [3,4], color: '#a2d9bf'},
                    {range: [4,5], color: '#83ccaa'},
                    {range: [5,6], color: '#64bf94'},
                    {range: [6,7], color: '#45b27f'},
                    {range: [7,8], color: '#26a56a'},
                    {range: [8,9], color: '#079855'}
                ],
            }
        };
        let layout = {
            width: 400,
            height: 400,
            annotations: {
                // added
                ax: 0.5,
                ay: 0,
                x: 0.5+0.7 * Math.cos(Math.PI/180*93.5),
                y: 0.7 * Math.sin(Math.PI/180*93.5),
                xref: 'x',
                yref: 'y',
                showarrow: true,
                arrowhead: 8
            }
        }
        Plotly.newPlot('gauge', [trace], layout);
    })
};

// dropdown selection
function optionChanged(sample) {
    console.log(sample);
    barChart(sample);
    bubbleChart(sample);
    metadataPanel(sample);
    gaugeChart(sample);
};

init();