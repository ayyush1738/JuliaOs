declare module 'three/examples/jsm/loaders/ColladaLoader' {
  import { LoadingManager } from 'three';
  import { Group } from 'three';

  export class ColladaLoader {
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (collada: { scene: Group; animations: any[] }) => void,
      onProgress?: (event: ProgressEvent<EventTarget>) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}
