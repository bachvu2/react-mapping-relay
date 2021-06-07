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
    user {
      id
      name
      username
      email
      website
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
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
          {
            "alias": null,
            "args": null,
            "concreteType": "Album",
            "kind": "LinkedField",
            "name": "data",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/)
            ],
            "storageKey": null
          },
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
          {
            "alias": null,
            "args": null,
            "concreteType": "Album",
            "kind": "LinkedField",
            "name": "data",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "75fb462294b9f8ad23171a9eb645f831",
    "id": null,
    "metadata": {},
    "name": "AlbumListPageQuery",
    "operationKind": "query",
    "text": "query AlbumListPageQuery {\n  albums {\n    data {\n      id\n      title\n    }\n    ...AlbumList_albumsPage\n  }\n}\n\nfragment AlbumList_albumsPage on AlbumsPage {\n  data {\n    id\n    title\n    user {\n      id\n      name\n      username\n      email\n      website\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e403be04ed8173ff7f93b679a5768871';
export default node;
