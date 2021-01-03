import { LinkDefault } from '../components/LinkDefault';
import {
  IVisualComponentProps,
  IVisualComponentsObject,
  VisualComponents,
} from './visualComponents';
import { makeAutoObservable } from 'mobx';
import { LinkState } from './linkState';
import { createCurvedLinkPathConstructor } from '../linkConstructors/curved';

export class LinksSettings {
  pathConstructor: ILinkPathConstructor = createCurvedLinkPathConstructor();
  visualComponents: VisualComponents<
    LinkState,
    ILinkVisualComponentProps
  > = new VisualComponents<LinkState, ILinkVisualComponentProps>(LinkDefault);

  constructor() {
    makeAutoObservable(this);
  }

  fromJson = (obj: ILinksSettingsObject) => {
    this.visualComponents.fromJson(obj);
    this.pathConstructor = obj.pathConstructor;
  }
}

export interface ILinkVisualComponentProps<TSettings = {}>
  extends IVisualComponentProps<LinkState, TSettings> {
  draggableRef: React.RefObject<any>;
  path: string;
}

export interface ILinksSettingsObject
  extends IVisualComponentsObject<ILinkVisualComponentProps> {
  pathConstructor: ILinkPathConstructor;
}

export type ILinkPathConstructor = (state: LinkState) => string;
