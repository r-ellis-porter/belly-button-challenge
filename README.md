# Belly Button Biodiversity Dashboard

Deployed url: https://r-ellis-porter.github.io/belly-button-challenge/

## Overview/Purpose

The Belly Button Biodiversity Dashboard project aims to build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset reveals insights into the microbial species present in human navels, with some species being prevalent across a large percentage of individuals while others are relatively rare. The purpose of this project is to create visualizations that allow users to interactively explore and analyze the data to gain insights into the microbial diversity of human navels.

## Summary

This project involves creating an interactive dashboard that displays various visualizations of the Belly Button Biodiversity dataset. The dashboard includes:

- A dropdown menu to select individual test subject IDs.
- A horizontal bar chart displaying the top 10 operational taxonomic units (OTUs) found in the selected individual, based on sample values, OTU IDs as labels, and OTU labels as hover text.
- A bubble chart displaying each sample, with OTU IDs on the x-axis, sample values on the y-axis, marker size representing sample values, marker colors representing OTU IDs, and text values representing OTU labels.
- Display of sample metadata, including demographic information, for the selected individual.
- A gauge chart displaying the weekly washing frequency of the individual.

## Important Findings

- The bar chart provides a clear visualization of the top 10 OTUs found in each individual, allowing users to identify prevalent microbial species.
- The bubble chart offers insights into the distribution of OTUs across samples, with marker size indicating abundance and marker colors representing different OTUs.
- The metadata panel provides demographic information about the selected individual, allowing users to contextualize the microbial data.
- The gauge chart visualizes the weekly washing frequency of the individual, providing additional context to understand the microbial diversity.

## Screenshots

![Horizontal Bar Chart](screenshots/bar_chart.png)

*Screenshot of the horizontal bar chart displaying top 10 OTUs in a selected individual.*

![Bubble Chart](screenshots/bubble_chart.png)

*Screenshot of the bubble chart displaying OTU distribution across samples.*

![Metadata Panel](screenshots/metadata_panel.png)

*Screenshot of the metadata panel displaying demographic information of the selected individual.*

![Gauge Chart](screenshots/gauge_chart.png)

*Screenshot of the gauge chart displaying the weekly washing frequency of the individual.*

## Technical Details

### Files Structure

- `index.html`: HTML file containing the structure of the dashboard.
- `app.js`: JavaScript file containing the logic for reading data, creating visualizations, and handling user interactions.
- `bonus.js`: JavaScript file containing the logic for the optional gauge chart.
- `/static`: Directory containing static files such as CSS and JavaScript.
  - `/js`: Directory containing JavaScript files.

### Dependencies

- D3.js: A JavaScript library for manipulating documents based on data.
- Plotly.js: A JavaScript library for creating interactive plots and charts.

## Running the Code

1. Clone the repository to your local machine.
2. Open `index.html` in a web browser.

## Conclusion

The Belly Button Biodiversity Dashboard project provides an interactive platform for exploring and analyzing the microbial diversity of human navels. By visualizing the dataset through various charts and providing demographic information, the dashboard facilitates understanding of the microbial composition and its variations across individuals. Users can gain valuable insights into the prevalence and distribution of microbial species, as well as the impact of factors such as washing frequency on microbial diversity.

