/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type useRemoveAlbumMutationVariables = {
    id: string;
};
export type useRemoveAlbumMutationResponse = {
    readonly deleteAlbum: boolean | null;
};
export type useRemoveAlbumMutation = {
    readonly response: useRemoveAlbumMutationResponse;
    readonly variables: useRemoveAlbumMutationVariables;
};



/*
mutation useRemoveAlbumMutation(
  $id: ID!
) {
  deleteAlbum(id: $id)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
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
      }
    ],
    "kind": "ScalarField",
    "name": "deleteAlbum",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useRemoveAlbumMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useRemoveAlbumMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "54334b246db9a601cfb34e3dc108ef27",
    "id": null,
    "metadata": {},
    "name": "useRemoveAlbumMutation",
    "operationKind": "mutation",
    "text": "mutation useRemoveAlbumMutation(\n  $id: ID!\n) {\n  deleteAlbum(id: $id)\n}\n"
  }
};
})();
(node as any).hash = '3d83cd6935220424a98cf9e96afdfd94';
export default node;
