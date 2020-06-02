# React-D3 Libraries Demo

> Line chart demos with different React D3 libraries: Recharts, Nivo, Semiotic, Britecharts-react and Vega.


## Uptake

![Comparison](https://i.imgur.com/nsrmbfD.png)



In terms of uptake the libraries have marked differences. Recharts is clearly leading the way on this area. Vega and Nivo are very close and in second place on this area. Semiotic and Brightchart fall down at the bottom in terms of uptake, but they are also newer. Rechart its also the most used library with around 27K installs, the closer competitor is Vega with 1.5K install. The other libraries way behind the others. Constributors wise Rechart is also leading with 143 contributors, again Vega follows second with 91 constributos. In summary we could say Rechart is the most popular library out there with Vega following second. All the others are not broadly used.

## Similarities

All the libraries are very similar in certain aspects. They all have react wrapper and the all offer DOM interaction for the visulisation. In terms of development aid they all are writing in Typescript (with exception of Nivo) which is useful for the development as sone of them do have a complex API. All the libraries also use a declarative approach. In declarative visualization, you provide a description of the graphic that you want. This description does not correspond with a chart type; rather, you describe the various entities that should make up the chart and the relationships between those entities. These entities might include: This is ultimately what it means to be declarative: describing what your chart should show, not how it should be created.

## Recharts

A composable charting library built on React components

All the components of Recharts are clearly separated. The lineChart is composed of x axis, tooltip, grid, and line items, and each of them is an independent React Component. The clear separation and composition of components is one of the principle Recharts follows.

Differences:

  

*   Declarative components approach
*   Medium size API

## Nivo


Nivo provides a rich set of dataviz components, built on top of the awesome d3 and Reactjs libraries.

Line chart demos with different React D3 libraries: Victory.js, Recharts, Nivo, VX, Britecharts-react and react-vis.

  

*   Has a comprehensive and customizible API. but a bit confusing
*   Declarative approach

## Vega


Vega is a visualization grammar, a declarative language for creating, saving, and sharing interactive visualization designs.

ABCDEFGHIrepository0102030405060708090100count

A Vega specification defines an interactive visualization in a JSON format. Specifications are parsed by Vega’s JavaScript runtime to generate both static images or interactive web-based views. Vega provides a convenient representation for computational generation of visualizations, and can serve as a foundation for new APIs and visual analysis tools.

Differences:

  

*   It can be used in Jupyter Notebooks.
*   Has a comprehensive and customizible API.
*   Declarative approach

## Semiotic


Semiotic is a data visualization framework for React.

It provides three types of frames XYFrame, OrdinalFrame, NetworkFrame, to deploy a wide variety of charts.

Differences:

  

*   It can be used in Jupyter Notebooks.
*   Declarative approach
*   Medium size API

React wrapper for Britecharts

## Britecharts

Britecharts-react proposes a way of integrating Britecharts and React that promotes a clear separation of concerns between the libraries and aims for easy and effortless maintenance of the charts.

Differences:

  

*   Declarative approach
*   Medium size API

## summary and suggestion

I think there are three groups. The first groups is composed by Britecharts and Semiotic, these two libraries have a medium size and pretty similar APIs but they lack of popularity and updtake compared to rest. The second group is comformed by Vega and Nivo, they are the kind of the opposite to the first group: way more popular and extensive and customizible API. The third group includes only Recharts the most popular of all, it has medium size API and it also the only one that uses a component base approach to build the charts. My suggestion is that we choose a library from the Second or third group. I would discard Nivo as their API seems extreamly complex, so even making a simple chart its difficult. Therefore we should probably choose between Vega and Recharts.

## Setup
Install dependencies and start the demo with:
```
    npm install/yarn
    npm/yarn start
```

## Customize
You could modify the demo adding other charts and send a PR.

## Acknowledgments
Demo based on [create-react-app](https://github.com/facebookincubator/create-react-app).


[demoSS]: https://github.com/Golodhros/talk-react-d3/blob/master/public/talk-react-d3-demo.png "Demo screenshots"
[demoLink]: https://golodhros.github.io/talk-react-d3/
