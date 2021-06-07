/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AlbumList_albumsPage = {
    readonly data: ReadonlyArray<{
        readonly id: string | null;
        readonly title: string | null;
        readonly user: {
            readonly id: string | null;
            readonly name: string | null;
            readonly username: string | null;
            readonly email: string | null;
            readonly website: string | null;
        } | null;
    } | null> | null;
    readonly " $refType": "AlbumList_albumsPage";
};
export type AlbumList_albumsPage$data = AlbumList_albumsPage;
export type AlbumList_albumsPage$key = {
    readonly " $data"?: AlbumList_albumsPage$data;
    readonly " $fragmentRefs": FragmentRefs<"AlbumList_albumsPage">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
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
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "user",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "username",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "email",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "website",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AlbumsPage",
  "abstractKey": null
};
})();
(node as any).hash = '3218f0c16ee0b4f9698f9299bc172882';
export default node;
