import { observer } from 'mobx-react-lite';
import React from 'react';
import { LinksStore } from '../states/linksStore';
import { LinkWrapper } from './LinkWrapper';

export const LinksLayer = observer<{linksStore: LinksStore}>(({linksStore}) => {
  return (
    <svg style={{
      pointerEvents: 'auto'
    }}>
      {Array.from(linksStore.links).map(([id, link]) => (
        <LinkWrapper key={link.id} link={link} />
      ))}
      {<LinkWrapper key='__creation__' link={linksStore.linkCreation} />}
    </svg>
  );
});
