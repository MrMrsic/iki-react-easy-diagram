import React, { useEffect } from 'react';
import { PortInnerWrapper } from './PortInnerWrapper';
import { VisualComponent } from '../states/visualComponentState';
import { positionValues, Position, Direction } from '../types/index';
import { PortState } from '../states/portState';
import { observer } from 'mobx-react-lite';

export interface IPortsContainerDefaultSettings {
  style?: React.CSSProperties;
  gapBetweenPorts: string;
  /**
   * If number - offset from origin position in direction from the center of parent element.
   * If Point - horizontal offset and vertical offset.
   */
  offsetFromOriginPosition?: number;
}

export interface IPortsContainerDefaultProps {
  position: Position;
  ports: PortState[];
}

const PortsContainerDefault: React.FC<
  IPortsContainerDefaultProps & IPortsContainerDefaultSettings
> = observer(
  ({ position, ports, style, gapBetweenPorts, offsetFromOriginPosition }) => {
    useEffect(() => {
      ports.forEach((p) =>
        p.setLinkDirectionIfNotYet(positionToDirection[position] as Direction)
      );
    }, [position, ports]);

    let className = 'react_fast_diagram_flex_gap ';
    if (position === 'top' || position === 'bottom') {
      className += 'react_fast_diagram_flex_gap_x';
    } else {
      className += 'react_fast_diagram_flex_gap_y';
    }

    const positionStyle = {
      position: 'absolute',
      left: position === 'left' ? 0 : undefined,
      top:
        position === 'left' || position === 'right' || position === 'top'
          ? 0
          : undefined,
      right: position === 'right' ? 0 : undefined,
      bottom: position === 'bottom' ? 0 : undefined,
      height: position === 'left' || position === 'right' ? '100%' : undefined,
      width: position === 'top' || position === 'bottom' ? '100%' : undefined,
    };

    const offsetFromOriginPositionStyle = {};
    if (offsetFromOriginPosition && positionValues.includes(position)) {
      offsetFromOriginPositionStyle[position] = -offsetFromOriginPosition;
    }

    return (
      <div
        className={className}
        style={{
          // @ts-ignore
          '--gap': gapBetweenPorts,
          ...style,
          ...positionStyle,
          ...offsetFromOriginPositionStyle,
        }}
      >
        {ports &&
          ports.map((port) => <PortInnerWrapper key={port.id} port={port} />)}
      </div>
    );
  }
);

const positionToDirection = {
  left: 'left',
  top: 'up',
  right: 'right',
  bottom: 'down',
};

export function createPortsContainerDefault(
  settings?: Partial<IPortsContainerDefaultSettings>
): VisualComponent<IPortsContainerDefaultProps> {
  return (props: IPortsContainerDefaultProps) => (
    <PortsContainerDefault
      {...{ ...portsContainerDefaultSettings, ...settings }}
      {...props}
    />
  );
}

const portsContainerDefaultSettings: IPortsContainerDefaultSettings = {
  gapBetweenPorts: '8px',
};
