/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AlbumList_albums = {
    readonly data: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"Album_album">;
    } | null> | null;
    readonly " $refType": "AlbumList_albums";
};
export type AlbumList_albums$data = AlbumList_albums;
export type AlbumList_albums$key = {
    readonly " $data"?: AlbumList_albums$data;
    readonly " $fragmentRefs": FragmentRefs<"AlbumList_albums">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AlbumList_albums",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Album",
      "kind": "LinkedField",
      "name": "data",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Album_album"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AlbumsPage",
  "abstractKey": null
};
(node as any).hash = 'e00745f165cab4831b19af3ce988f87a';
export default node;
