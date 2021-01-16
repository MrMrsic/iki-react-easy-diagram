import { observer } from 'mobx-react-lite';
import React from 'react';
import { useNotifyRef } from '../hooks/useNotifyRef';
import { LinkState } from '../states/linkState';

export const LinkWrapper = observer<{ link: LinkState }>(({ link }) => {
  const draggableRef = useNotifyRef(null);
  const Component = link.componentDefinition.component;
  const path = link.path;
  
  return (
    <g>
      <Component
        draggableRef={draggableRef}
        path={link.path}
        entity={link}
        settings={link.componentDefinition.settings}
      />
    </g>
  );
});
