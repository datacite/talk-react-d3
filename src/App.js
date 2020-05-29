import React, { Component } from 'react';

// import LineChartVictory from './victory/line.js';
import LineChartRecharts from './recharts/line.js';
import BarChartRecharts from './recharts/bar.js';
// import LineChartRVis from './react-vis/line.js';
import VegaBarChart from './vega/line.js';
// import LineChartVX from './vx/line.js';
import LineChartBritechartsReact from './britecharts-react/line.js';
import BarChartBritechartsReact from './britecharts-react/bar.js';
import LineChartNivo from './nivo/line.js';
import BarChartNivo from './nivo/bar.js';
import SemioticBarChart from './semiotic/bar.js';

import D3Logo from './extra/d3Logo.js';
import Grid from 'react-uikit-grid';
import Article from 'react-uikit-article';
import logo from './logo.svg';
import './App.css';
import 'uikit/dist/css/uikit.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <D3Logo />
        </div>
        <h1>React-D3 Libraries Comparison</h1>
        <div className="App-intro">
          <p>Bar chart demos with different React D3 libraries: Vega, Recharts, Nivo, VX, Britecharts-react and Semiotic.</p>
          <small>Check the code in <a href="https://github.com/kjgarza/talk-react-d3">https://github.com/kjgarza/talk-react-d3</a></small>
        </div>
        <Grid>
       

        <Article col='1-2'
            className="uk-margin-bottom"
            title="Uptake and popularity"
            lead=""
          >
            <section className="demo demo-recharts uk-margin-bottom">
            <img src="https://i.imgur.com/nsrmbfD.png" />
            </section>
          </Article>

          <Article col='1-2'
            className="uk-margin-bottom"
            title="Uptake and popularity"
            lead=""
          >
            <section className="demo demo-recharts uk-margin-bottom">
            <p  align="left">
              In terms of uptake the libraries have marked differences. Recharts is clearly leading the way on this area. 
              
              Vega and Nivo are very close and in second place on this area.

              Semiotic and Brightchart fall down at the bottom in terms of uptake, but they are also newer.


              Rechart its also the most used library with around 27K installs, the closer competitor is Vega with 1.5K install. The other libraries way behind the others.

              Constributors wise Rechart is also leading with 143 contributors, again Vega follows second with 91 constributos. 

              In summary we could say Rechart is the most popular library out there with Vega following second. All the others are not broadly used.

            </p>
            </section>
          </Article>


          <Article col='1-1'
            className="uk-margin-bottom"
            title="Similarities"
            lead=""
          >
            <section className="demo demo-recharts uk-margin-bottom">
            <p  align="left">
            All the libraries are very similar in certain aspects. They all have react wrapper and the all offer DOM interaction for the visulisation.
            In terms of development aid they all are writing in Typescript (with exception of Nivo) which is useful for the development as sone of them do have a complex API.
            All the libraries also use a declarative approach in 

            </p>
            </section>
          </Article>

          <Article col='1-2'
            className="uk-margin-bottom"
            title="Recharts"
            lead="A composable charting library built on React components"
          >
            <section className="demo demo-recharts uk-margin-bottom">
              <BarChartRecharts />
            </section>
          </Article>

          <Article col='1-2'
            className="uk-margin-bottom"
            title="Comparison"
            lead="A composable charting library built on React components"
          >
            <section className="demo demo-recharts uk-margin-bottom">
            <p>Line chart demos with different React D3 libraries: Victory.js, Recharts, Nivo, VX, Britecharts-react and react-vis.</p>

            <p  align="left">
            Differences:
            </p>
            <br/>
            <ul align="left">
            <li> Declarative components approach</li>
            </ul>  
            </section>
          </Article>

          <Article col='1-2'
            className="uk-margin-bottom"
            title="Nivo"
            lead="Nivo provides a rich set of dataviz components, built on top of the awesome d3 and Reactjs libraries."
          >
            <section className="demo demo-nivo uk-margin-bottom">
              <BarChartNivo />
            </section>
          </Article>

          <Article col='1-2'
            className="uk-margin-bottom"
            title="Comparison"
            lead="A composable charting library built on React components"
          >
            <section className="demo demo-recharts uk-margin-bottom">
            <p>Line chart demos with different React D3 libraries: Victory.js, Recharts, Nivo, VX, Britecharts-react and react-vis.</p>
            <br/>
            <ul align="left">
            <li>Has a comprehensive and customizible API. but a bit confusing</li>
            <li> Declarative approach</li>
          </ul>
            </section>
          </Article>

          <Article col='1-2'
            className="uk-margin-bottom"
            title="Vega"
            lead="Vega is a visualization grammar, a declarative language for creating, saving, and sharing interactive visualization designs."
          >
            <section className="demo demo-nivo uk-margin-bottom">
              <VegaBarChart />
            </section>
          </Article>

          <Article col='1-2'
            className="uk-margin-bottom"
            title="Comparison"
            lead=""
          >
            <section className="demo demo-recharts uk-margin-bottom">
            <p  align="left">
              In declarative visualization, you provide a description of the graphic that you want. This description does not correspond with a chart type; rather, you describe the various entities that should make up the chart and the relationships between those entities. These entities might include:

            What data does your chart have?
            Does it have axes and legends? Where should they be placed?
            What kind of shapes are shown in your graph? How do they link to the data?

            This is ultimately what it means to be declarative: describing what your chart should show, not how it should be created.
            </p>
            <br/>
            <p  align="left">
              Differences:
            </p>
            <br/>
            <ul align="left">
            <li> It can be used in Jupyter Notebooks.</li>
            <li>Has a comprehensive and customizible API.</li>
            <li> Declarative approach</li>
          </ul>
            </section>
          </Article>

          <Article col='1-2'
            className="uk-margin-bottom"
            title="Semiotic"
            lead="Semiotic provides a rich set of dataviz components, built on top of the awesome d3 and Reactjs libraries."
          >
            <section className="demo uk-margin-bottom">
              <SemioticBarChart />
            </section>
          </Article>

          <Article col='1-2'
            className="uk-margin-bottom"
            title="Comparison"
            lead="A composable charting library built on React components"
          >
            <section className="demo demo-recharts uk-margin-bottom">
            <p>
              Line chart demos with different React D3 libraries: Victory.js, Recharts, Nivo, VX, Britecharts-react and react-vis.

            </p>


            <br/>
            <p  align="left">
            Differences:
            </p>
            <br/>
            <ul align="left">
            <li> It can be used in Jupyter Notebooks.</li>
            <li> Declarative approach</li>
            <li> Medium size API</li>

            </ul>
            </section>
          </Article>



          <Article col='1-2'
            className="uk-margin-bottom"
            title="Britecharts-React"
            lead="React wrapper for Britecharts"
          >
            <section className="demo demo-bcr uk-margin-bottom">
              <BarChartBritechartsReact
                width={400}
                height={200}
              />
            </section>
          </Article>

          <Article col='1-2'
            className="uk-margin-bottom"
            title="Comparison"
            lead="A composable charting library built on React components"
          >
            <section className="demo demo-recharts uk-margin-bottom">
            <p  align="left">
              Britecharts-react proposes a way of integrating Britecharts and React that promotes a clear separation of concerns between the libraries and aims for easy and effortless maintenance of the charts.
            </p>
            <br/>
            <p  align="left">
            Differences:
            </p>
            <br/>
            <ul align="left">
            <li> Declarative approach</li>
            <li> Medium size API</li>
            </ul>            

            </section>
          </Article>


          <Article col='1-1'
            className="uk-margin-bottom"
            title="Summary and suggestion"
            lead=""
          >
            <section className="demo demo-recharts uk-margin-bottom">
            <p  align="left">
            I think there are three groups. 
            The first groups is composed by Britecharts and Semiotic, these two libraries have a medium size and pretty similar APIs but they lack of popularity and updtake compared to rest.
            The second group is comformed by Vega and Nivo, they are the kind of the opposite to the first group: way more popular and extensive and customizible API.
            The third group includes only Recharts the most popular of all, it has  medium size API and it also the only one that uses a component base approach to build the charts.

            My suggestion is that we choose a library from the Second or third group. I would discard Nivo as their API seems extreamly complex, so even making a simple chart its difficult.
            Therefore we should probably choose between Vega and Recharts.
            </p>
            </section>
          </Article>

        </Grid>
      </div>
    );
  }
}

export default App;
