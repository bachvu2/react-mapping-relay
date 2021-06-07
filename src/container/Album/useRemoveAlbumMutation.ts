import { useMutation } from "react-relay";
import { useCallback } from "react";
import { ConnectionHandler, RecordSourceSelectorProxy } from "relay-runtime";

const graphql = require("babel-plugin-relay/macro");

const mutation = graphql`
  mutation useRemoveAlbumMutation($id: ID!) {
    deleteAlbum(id:$id)
  }
`;

export default function useRemoveAlbumMutation() {
  const [commit] = useMutation(mutation);
  return [
    useCallback(
      (id: string) => {
        return commit({
          variables: {
            id
          },
        });
      },
      [commit]
    )
  ];
}
