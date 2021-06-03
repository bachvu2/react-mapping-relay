/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Album_album = {
    readonly id: string | null;
    readonly title: string | null;
    readonly " $refType": "Album_album";
};
export type Album_album$data = Album_album;
export type Album_album$key = {
    readonly " $data"?: Album_album$data;
    readonly " $fragmentRefs": FragmentRefs<"Album_album">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Album_album",
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
  "type": "Album",
  "abstractKey": null
};
(node as any).hash = 'a069f40c5529fe3b3d3173ea388db598';
export default node;
