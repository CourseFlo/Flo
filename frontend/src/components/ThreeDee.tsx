import React from 'react';
import Tree from 'react-d3-tree';

const myTreeData = [
  {
    name: 'Parent Node',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    nodeSvgShape: {
      shape: 'circle',
      shapeProps: {
        r: 10,
        fill: 'blue',
      },
    },
    children: [
      {
        name: 'Inner Node',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
        nodeSvgShape: {
          shape: 'rect',
          shapeProps: {
            width: 20,
            height: 20,
            x: -10,
            y: -10,
            fill: 'red',
          },
        },
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
];

interface Props {
  data?: any
}

const svgSquare = {
  shape: 'rect',
  shapeProps: {
    width: 20,
    height: 20,
    x: -10,
    y: -10,
  }
}

const ThreeDee = (props: Props) => {
  return (
    <div id="treeWrapper" style={{width: '100vh', height: '100vh'}}>

      <Tree data={myTreeData}  nodeSvgShape={svgSquare}/>

    </div>
  );
};

export default ThreeDee;
