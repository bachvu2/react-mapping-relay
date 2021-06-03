/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AlbumListPageQueryVariables = {};
export type AlbumListPageQueryResponse = {
    readonly albums: {
        readonly " $fragmentRefs": FragmentRefs<"AlbumList_albums">;
    } | null;
};
export type AlbumListPageQuery = {
    readonly response: AlbumListPageQueryResponse;
    readonly variables: AlbumListPageQueryVariables;
};



/*
query AlbumListPageQuery {
  albums {
    ...AlbumList_albums
  }
}

fragment AlbumList_albums on AlbumsPage {
  data {
    ...Album_album
    id
  }
}

fragment Album_album on Album {
  id
  title
}
*/

const node: ConcreteRequest = {
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AlbumList_albums"
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c3e6a910ce795897537026ce99b391eb",
    "id": null,
    "metadata": {},
    "name": "AlbumListPageQuery",
    "operationKind": "query",
    "text": "query AlbumListPageQuery {\n  albums {\n    ...AlbumList_albums\n  }\n}\n\nfragment AlbumList_albums on AlbumsPage {\n  data {\n    ...Album_album\n    id\n  }\n}\n\nfragment Album_album on Album {\n  id\n  title\n}\n"
  }
};
(node as any).hash = '0ec5bbadb31ad3833aeb880ccf27db48';
export default node;
