import React, { Component } from 'react';

import OrdinalFrame from "semiotic/lib/OrdinalFrame"


const barData =  [
    { repository: 'A', count: 28 },
    { repository: 'B', count: 55 },
    { repository: 'C', count: 43 },
    { repository: 'D', count: 91 },
    { repository: 'E', count: 81 },
    { repository: 'F', count: 53 },
    { repository: 'G', count: 19 },
    { repository: 'H', count: 87 },
    { repository: 'I', count: 52 },
  ];



const frameProps = {   
  data: barData,
  size: [500,300],
  type: "bar",
  oAccessor: "repository",
  rAccessor: "count",
  style: { fill: "#ac58e5", stroke: "white" },
  title: "repos",
  oLabel: true
}


class BarChart extends Component {
  render() {
      return (
        <OrdinalFrame {...frameProps} />
      );
  }
}



export default BarChart;
