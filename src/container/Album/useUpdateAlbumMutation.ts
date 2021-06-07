import { useMutation } from "react-relay";
import { useCallback } from "react";
import {
  useUpdateAlbumMutationResponse,
  UpdateAlbumInput
} from "./__generated__/useUpdateAlbumMutation.graphql";

const graphql = require("babel-plugin-relay/macro");

const mutation = graphql`
  mutation useUpdateAlbumMutation($id:ID! ,$input: UpdateAlbumInput!) {
    updateAlbum(id:$id, input: $input) {
      id
      title
    }
  }
`;

function getOptimisticResponse(
  title: string, id: string
): useUpdateAlbumMutationResponse {
  return {
    updateAlbum: {
      title: title,
      id: id
    }
  }
}

export default function useUpdateAlbumMutation() {
  const [commit] = useMutation(mutation);
  return [
    useCallback(
      (title: string, id: string, userId: string) => {
        const input: UpdateAlbumInput = {
          title,
          userId
        };
        return commit({
          variables: { id, input },
          optimisticResponse: getOptimisticResponse(title, id),
          onCompleted: response => {
            console.log(response)
          },
          onError: error => {
            console.log(error)
          }
        });
      },
      [commit]
    )
  ];
}
