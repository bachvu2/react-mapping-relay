/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AlbumListPageQueryVariables = {};
export type AlbumListPageQueryResponse = {
    readonly albums: {
        readonly data: ReadonlyArray<{
            readonly id: string | null;
            readonly title: string | null;
        } | null> | null;
        readonly " $fragmentRefs": FragmentRefs<"AlbumList_albumsPage">;
    } | null;
};
export type AlbumListPageQuery = {
    readonly response: AlbumListPageQueryResponse;
    readonly variables: AlbumListPageQueryVariables;
};



/*
query AlbumListPageQuery {
  albums {
    data {
      id
      title
    }
    ...AlbumList_albumsPage
  }
}

fragment AlbumList_albumsPage on AlbumsPage {
  data {
    id
    title
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AlbumListPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AlbumsPage",
        "kind": "LinkedField",
        "name": "albums",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AlbumList_albumsPage"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AlbumListPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AlbumsPage",
        "kind": "LinkedField",
        "name": "albums",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "dc3a635a8c282b58242ba138a24a73d4",
    "id": null,
    "metadata": {},
    "name": "AlbumListPageQuery",
    "operationKind": "query",
    "text": "query AlbumListPageQuery {\n  albums {\n    data {\n      id\n      title\n    }\n    ...AlbumList_albumsPage\n  }\n}\n\nfragment AlbumList_albumsPage on AlbumsPage {\n  data {\n    id\n    title\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e403be04ed8173ff7f93b679a5768871';
export default node;
