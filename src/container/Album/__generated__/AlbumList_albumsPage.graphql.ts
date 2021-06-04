/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AlbumList_albumsPage = {
    readonly data: ReadonlyArray<{
        readonly id: string | null;
        readonly title: string | null;
    } | null> | null;
    readonly " $refType": "AlbumList_albumsPage";
};
export type AlbumList_albumsPage$data = AlbumList_albumsPage;
export type AlbumList_albumsPage$key = {
    readonly " $data"?: AlbumList_albumsPage$data;
    readonly " $fragmentRefs": FragmentRefs<"AlbumList_albumsPage">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AlbumList_albumsPage",
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
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AlbumsPage",
  "abstractKey": null
};
(node as any).hash = 'f1652c769252d3eac8759f050e469447';
export default node;
