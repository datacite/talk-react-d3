# React-D3 Libraries Demo

> Line chart demos with different React D3 libraries: Recharts, Nivo, Semiotic, Britecharts-react, and Vega.

## How to run the demo
Install dependencies and start the demo with:

```
    npm install/yarn
    npm/yarn start
```


## Uptake

![Comparison](https://i.imgur.com/nsrmbfD.png)



In terms of uptake, the libraries have marked differences. Recharts is leading the way to this area. Vega and Nivo are very close and in second place in this area. Semiotic and Brightchart fall at the bottom in terms of uptake, but they are also newer. Rechart it's even the most used library with around 27K installs, the closest competitor is Vega with 1.5K install. The other libraries way behind the others. Contributors wise Rechart is also leading with 143 contributors, and again Vega follows second with 91 contributors. In summary, we could say Rechart is the most popular library out there with Vega following second. All the others are not broadly used.

> Runner-up: Vega

> Winner: Recharts

## API customization

All the libraries offer good API to create charts. Nivo and Vega seem to have the larger are more customizable APIs. Nivo had the disadvantage (In my experience) of making it too difficult to make a simple bar chart. That is not something that happens with any of all the other libraries. In terms of features, one big difference in the Vega API is that it offers API that the other libraries do not include. For example, it has Data API for data transformation (very much like `dplyr`), which is very useful to manipulate the data before visualization without depending on extra code. It also includes a Layout API, which can be used to compose many charts together.


> Runner-up: Recharts, Semiotic, Brithcarts

> Winner: Vega


## Approach

All the libraries use a declarative approach to create visualizations. In declarative visualization, you describe the graphic that you want. This description does not correspond with a chart type; instead, you define the various entities that should make up the chart and the relationships between those entities. This ultimately is what it means to be declarative: describing what your chart should show, not how it should be created. All the libraries achieve by creating a react object to declare the chart visualization (see demo examples). However, two libraries have distinguishing characteristics. Recharts takes the declarative approach a step further as it creates components for each element of the visualization, so it uses a Declarative components approach. On the other hand, Vega does something slightly different, as it uses a schema to define the chart visualization. This schema can be exported to JSON and used anywhere else using the Vega runtime.

> Runner-up: all others

> Winner: Recharts and Vega   


## Compatibility with another DataCite tooling

Another Datacite tooling here refers to two tools: Jupyter Notebooks and React. The only two libraries that successfully check this box are Semiotic and Vega. The rest do not have Jupyetr notebook support.

> Winner: Semiotic and Vega  


## Documentation and Support

In terms of development aid, all libraries are written in Typescript (except for Nivo), which is useful for the development as sone of them does have a complex API. 

All the libraries have a fair amount of documentation. In terms of examples that one can reuse, I do think that Vega provides more samples to look at thanks to a large number of vega specifications available in JSON format.

Only Vega provides a [online playground](https://vega.github.io/editor/#/examples/vega/bar-chart), where the charts can be edited in isolation, this is actually very useful to isolate the visualization from React or your application during development.



> Winner: Vega  

!----------

## Recharts

A composable charting library built on React components

Differences:

*   Declarative components approach
*   Medium size API

## Nivo


Nivo provides a rich set of dataviz components, built on top of the awesome d3 and Reactjs libraries.
  

*   Has a comprehensive and customizible API. but a bit confusing
*   Declarative approach

## Vega


Vega is a visualization grammar, a declarative language for creating, saving, and sharing interactive visualization designs.


Differences:


*   It can be used in Jupyter Notebooks.
*   Has a comprehensive and customizible API.
*   Declarative approach
*   dplyr type of data api
*   Chart specs can be share in json.


## Semiotic


Semiotic is a data visualization framework for React.


Differences:


*   It can be used in Jupyter Notebooks.
*   Declarative approach
*   Medium size API


## Britecharts

Britecharts-react proposes a way of integrating Britecharts and React that promotes a clear separation of concerns between the libraries and aims for easy and effortless maintenance of the charts.

Differences:

*   Declarative approach
*   Medium size API

## summary and suggestion

I have managed to create simple visualizations with all the libraries, which show that they are all excellent libraries. However, in terms of looking for the best, I think that one would find Recharts and, especially, Vega's shining brighter than the other libraries.

My suggestion is to decide for either Recharts or Vega as the charting library to use.


## Customize
You could modify the demo adding other charts and send a PR.

## Acknowledgments
Demo based on [create-react-app](https://github.com/facebookincubator/create-react-app).


[demoSS]: https://github.com/Golodhros/talk-react-d3/blob/master/public/talk-react-d3-demo.png "Demo screenshots"
[demoLink]: https://golodhros.github.io/talk-react-d3/
