import React, { useEffect, useRef } from 'react';
import { Diagram, NodeState, RootStore } from 'react-easy-diagram';
import { reaction } from 'mobx';

export default function () {
  const storeRef = useRef<RootStore>(null);

  // To react on changes in the diagram state, in addition to callbacks the library provides,
  // you can also use mobx functions like reaction, autorun and when. More info here: https://mobx.js.org/reactions.html
  // Here is example that will help you to do some work when selection changed.
  useEffect(
    () =>
      reaction(
        () => {
          if (storeRef.current) {
            // When you read properties in any observable object mobx subscribes to changes in this properties 
            // and will call function you provide as a second argument to reaction function.
            return storeRef.current.selectionState.selectedItems.map(i => i);
          }
        },
        (selectedItems, prevSelectedItems) => {
          console.log(
            'Selection updated. Current selected nodes: ',
            selectedItems
              ?.filter((i) => i instanceof NodeState)
              .map((n) => n.id)
          );
        }
      ),
    [storeRef.current]
  );

  return (
    <Diagram
      storeRef={storeRef}
      settings={{
        callbacks: {
          nodesAdded: (addResults, failedToAdd, importing, store) => {
            console.log('Added nodes:');
            console.log(addResults.map((r) => r.export()));
          },
          nodePositionChanged: (node, oldPos, newPos, isDragActive, store) => {
            console.log(
              `Position of node '${
                node.id
              }' changed from '${oldPos.toString()}' to '${newPos.toString()}'`
            );
          },
          dragStateChanged: (nodes, dragStarted, store) => {
            console.log(
              `${dragStarted ? 'Start' : 'Finish'} dragging nodes: '${nodes
                .map((n) => n.id)
                .reduce((prev, val) => prev + ', ' + val)}'`
            );
          },
        },
      }}
      initState={{
        nodes: [
          {
            id: 'node_1',
            label: 'Node 1',
            position: [300, 300],
            type: 'output_horizontal',
          },
          {
            id: 'node_2',
            label: 'Node 2',
            position: [520, 400],
            type: 'input_output_horizontal',
          },
          {
            id: 'node_3',
            label: 'Node 3',
            position: [520, 200],
            type: 'input_horizontal',
          },
        ],
        links: [
          {
            source: {
              nodeId: 'node_1',
              portId: 'output',
            },
            target: {
              nodeId: 'node_2',
              portId: 'input',
            },
          },
          {
            source: {
              nodeId: 'node_1',
              portId: 'output',
            },
            target: {
              nodeId: 'node_3',
              portId: 'input',
            },
          },
          {
            source: {
              nodeId: 'node_3',
              portId: 'input',
            },
            target: {
              nodeId: 'node_2',
              portId: 'output',
            },
          },
        ],
      }}
    />
  );
}
