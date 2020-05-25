import React, {
  PureComponent
} from 'react';


import {Bar, Tooltip} from 'britecharts-react';

const data = [
  { name: 'A', value: 28 },
  { name: 'B', value: 55 },
  { name: 'C', value: 43 },
  { name: 'D', value: 91 },
  { name: 'E', value: 81 },
  { name: 'F', value: 53 },
  { name: 'G', value: 19 },
  { name: 'H', value: 87 },
  { name: 'I', value: 52 },
];


const marginObject = {
    left: 100,
    right: 40,
    top: 40,
    bottom: 40,
};

class SimpleBarChart extends PureComponent {

  render() {
    return ( 
      <Bar
      data={data}
      width={500}
      height={300}
      isHorizontal={false}
      margin={marginObject}
    />

    );
  }
}

export default SimpleBarChart;



