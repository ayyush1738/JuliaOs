// types.d.ts
declare module 'three-stdlib/loaders/ColladaLoader' {
  import { Loader } from 'three';
  import { LoadingManager, Group } from 'three';

  export class ColladaLoader extends Loader {
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (collada: { scene: Group }) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}
