import React, { Component } from 'react';
import LineChartVictory from './victory/line.js';
import LineChartRecharts from './recharts/line.js';
import LineChartRVis from './react-vis/line.js';
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
        <h1>React + D3 Library Demo</h1>
        <div className="App-intro">
          <p>Implementations of a line chart with different React D3 libraries: Victory.js, Recharts and react-vis.</p>
          <small>Check the code in <a href="https://github.com/Golodhros/talk-react-d3">https://github.com/Golodhros/talk-react-d3</a></small>
        </div>
        <Grid>
          <Article col='1-1'
            className="uk-margin-bottom"
            title="Victory.js"
            lead="Low level charting library by Formidable Labs"
          >
            <section className="demo demo-victory uk-margin-bottom">
              <LineChartVictory />
            </section>
          </Article>
          <Article col='1-1'
            className="uk-margin-bottom"
            title="Recharts"
            lead="A composable charting library built on React components"
          >
            <section className="demo demo-recharts uk-margin-bottom">
              <LineChartRecharts />
            </section>
          </Article>
          <Article col='1-1'
            className="uk-margin-bottom"
            title="react-vis"
            lead="Uber's visualization library"
          >
            <section className="demo demo-react-vis uk-margin-bottom">
              <LineChartRVis />
            </section>
          </Article>
        </Grid>
      </div>
    );
  }
}

export default App;