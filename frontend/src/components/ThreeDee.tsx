import React, { useState, useEffect } from 'react';
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

const containerStyles = {
  width: '100%',
  height: '100vh',
};

interface Props {
  data?: any,
}

const svgSquare = {
  shape: 'rect',
  shapeProps: {
    width: 20,
    height: 20,
    x: -10,
    y: -10,
  },
};


const ThreeDee = (props: Props) => {
  const { data }: Props = props;
  const [position, setPosition] = useState({ x: 400, y: 400 });
  const [treeContainer, setTreeContainer] = useState<Element | null>(null);

  useEffect(() => {
    if (treeContainer?.getBoundingClientRect) {
      const dim = treeContainer.getBoundingClientRect();
      setPosition({
        x: dim.width / 2,
        y: dim.height / 2,
      });
    }
  }, []);

  return (
    <div id="treeWrapper" style={{ width: '80%', height: '100vh', textAlign: 'center' }}>

      <Tree data={myTreeData} nodeSvgShape={svgSquare} />
      <div style={containerStyles} ref={(container) => setTreeContainer(container)}>
        <Tree
          data={myTreeData}
          translate={position}
          orientation={'horizontal'}
        />
      </div>

    </div>
  );
};

export default ThreeDee;
