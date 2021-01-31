import {
  IDiagramSettings,
  ILinksSettings,
  INodesSettings,
  IPortsSettings,
} from '.';
import { ILinkState } from './linkState';
import { INodeState } from './nodeState';
import { RootStore } from './rootStore';

export class DiagramApi {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  addNode = (node: INodeState) => {
    this.rootStore.nodesStore.addNode(node);
  };

  reinitState = (nodes?: INodeState[], links?: ILinkState[]) => {
    this.rootStore.nodesStore.fromJson(nodes);
    this.rootStore.linksStore.fromJson(links);
  };

  reinitSettings = (settings: ISettings) => {
    this.rootStore.diagramSettings.fromJson(settings.diagram);
    this.rootStore.nodesSettings.fromJson(settings.nodes);
    this.rootStore.linksSettings.fromJson(settings.links);
    this.rootStore.portsSettings.fromJson(settings.ports);
  };

  zoomIn = () => this.rootStore.diagramState.zoomIntoCenter(1 / 0.8);
  zoomOut = () => this.rootStore.diagramState.zoomIntoCenter(0.8);

  recalculatePortPosition = () => {
    //
  };
}

export interface ISettings {
  diagram?: IDiagramSettings;
  nodes?: INodesSettings;
  links?: ILinksSettings;
  ports?: IPortsSettings;
}
