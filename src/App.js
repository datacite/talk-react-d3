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
        <h1>React-D3 Libraries  Comparison</h1>
        <div className="App-intro">
          <p>Bar chart demos with different React D3 libraries: Semiotic, Vega, Recharts, Nivo, and Britecharts-react.</p>
          <small>Check the code in <a href="https://github.com/kjgarza/talk-react-d3">https://github.com/kjgarza/talk-react-d3</a></small>
        </div>
        <Grid>

        <Article col='1-5'></Article>

        <Article col="3-5">
        <h2 id="uptake">Uptake</h2>
<img src="https://i.imgur.com/nsrmbfD.png" alt="Comparison"></img>
<p>In terms of uptake, the libraries have marked differences. Recharts is leading the way to this area. Vega and Nivo
  are very close and in second place in this area. Semiotic and Brightchart fall at the bottom in terms of uptake, but
  they are also newer. Rechart it&#39;s even the most used library with around 27K installs, the closest competitor is
  Vega with 1.5K install. The other libraries way behind the others. Contributors wise Rechart is also leading with 143
  contributors, and again Vega follows second with 91 contributors. In summary, we could say Rechart is the most popular
  library out there with Vega following second. All the others are not broadly used.</p>
<blockquote>
  <p>Runner-up: Vega</p>
  <p>Winner: Recharts</p>
</blockquote>
<h2 id="api-customization">API customization</h2>
<p>All the libraries offer good API to create charts. Nivo and Vega seem to have the larger are more customizable APIs.
  Nivo had the disadvantage (In my experience) of making it too difficult to make a simple bar chart. That is not
  something that happens with any of all the other libraries. In terms of features, one big difference in the Vega API
  is that it offers API that the other libraries do not include. For example, it has Data API for data transformation
  (very much like <code>dplyr</code>), which is very useful to manipulate the data before visualization without
  depending on extra code. It also includes a Layout API, which can be used to compose many charts together.</p>
<blockquote>
  <p>Runner-up: Recharts, Semiotic, Brithcarts</p>
  <p>Winner: Vega</p>
</blockquote>
<h2 id="approach">Approach</h2>
<p>All the libraries use a declarative approach to create visualizations. In declarative visualization, you describe the
  graphic that you want. This description does not correspond with a chart type; instead, you define the various
  entities that should make up the chart and the relationships between those entities. This ultimately is what it means
  to be declarative: describing what your chart should show, not how it should be created. All the libraries achieve by
  creating a react object to declare the chart visualization (see demo examples). However, two libraries have
  distinguishing characteristics. Recharts takes the declarative approach a step further as it creates components for
  each element of the visualization, so it uses a Declarative components approach. On the other hand, Vega does
  something slightly different, as it uses a schema to define the chart visualization. This schema can be exported to
  JSON and used anywhere else using the Vega runtime.</p>
<blockquote>
  <p>Runner-up: all others</p>
  <p>Winner: Recharts and Vega </p>
</blockquote>
<h2 id="compatibility-with-another-datacite-tooling">Compatibility with another DataCite tooling</h2>
<p>Another Datacite tooling here refers to two tools: Jupyter Notebooks and React. The only two libraries that
  successfully check this box are Semiotic and Vega. The rest do not have Jupyetr notebook support.</p>
<blockquote>
  <p>Winner: Semiotic and Vega </p>
</blockquote>
<h2 id="documentation-and-support">Documentation and Support</h2>
<p>In terms of development aid, all libraries are written in Typescript (except for Nivo), which is useful for the
  development as sone of them does have a complex API. </p>
<p>All the libraries have a fair amount of documentation. In terms of examples that one can reuse, I do think that Vega
  provides more samples to look at thanks to a large number of vega specifications available in JSON format.</p>
<p>Only Vega provides a <a href="https://vega.github.io/editor/#/examples/vega/bar-chart">online playground</a>, where
  the charts can be edited in isolation, this is actually very useful to isolate the visualization from React or your
  application during development.</p>
<blockquote>
  <p>Winner: Vega </p>
</blockquote>


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
            title= "Recharts"
          >
            <section className="demo demo-recharts uk-margin-bottom">

            <p  align="left">
            Differences:
            </p>
            <br/>
            <ul align="left">
            <li> Declarative components approach</li>
            <li> Medium size API</li>
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
            title= "Nivo"
          >
            <section className="demo demo-recharts uk-margin-bottom">
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
            title= "Vega"
            lead=""
          >
            <section className="demo demo-recharts uk-margin-bottom">
        
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
            lead="Semiotic  is a data visualization framework for React."
          >
            <section className="demo uk-margin-bottom">
              <SemioticBarChart />
            </section>
          </Article>

          <Article col='1-2'
            className="uk-margin-bottom"
            title= "Semiotic"
            lead=""
          >
            <section className="demo demo-recharts uk-margin-bottom">
            


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
            title= "Britecharts-React"
          >
            <section className="demo demo-recharts uk-margin-bottom">
      
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

          <Article col='1-5'></Article>
          <Article col='3-5'
            className="uk-margin-bottom"
            title="Summary and suggestion"
            lead=""
          >
            <section className="demo demo-recharts uk-margin-bottom">
            <p  align="left">
            I have managed to create simple visualizations with all the libraries, which show that they are all excellent libraries. However, in terms of looking for the best, I think that one would find Recharts and, especially, Vega's shining brighter than the other libraries.

My suggestion is to decide for either Recharts or Vega as the charting library to use.
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
