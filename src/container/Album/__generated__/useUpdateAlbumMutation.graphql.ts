/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpdateAlbumInput = {
    title?: string | null;
    userId?: string | null;
};
export type useUpdateAlbumMutationVariables = {
    id: string;
    input: UpdateAlbumInput;
};
export type useUpdateAlbumMutationResponse = {
    readonly updateAlbum: {
        readonly id: string | null;
        readonly title: string | null;
    } | null;
};
export type useUpdateAlbumMutation = {
    readonly response: useUpdateAlbumMutationResponse;
    readonly variables: useUpdateAlbumMutationVariables;
};



/*
mutation useUpdateAlbumMutation(
  $id: ID!
  $input: UpdateAlbumInput!
) {
  updateAlbum(id: $id, input: $input) {
    id
    title
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Album",
    "kind": "LinkedField",
    "name": "updateAlbum",
    "plural": false,
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useUpdateAlbumMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useUpdateAlbumMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "825e3d1a95d6417a05121dbea7cb84ce",
    "id": null,
    "metadata": {},
    "name": "useUpdateAlbumMutation",
    "operationKind": "mutation",
    "text": "mutation useUpdateAlbumMutation(\n  $id: ID!\n  $input: UpdateAlbumInput!\n) {\n  updateAlbum(id: $id, input: $input) {\n    id\n    title\n  }\n}\n"
  }
};
})();
(node as any).hash = '4708a2f43418a244664d7059ef60dee0';
export default node;
