import React, { memo, useCallback, useEffect, useState, Component } from 'react';

import {
  QueryRenderer,
  useFragment,
  usePreloadedQuery,
  PreloadedQuery
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro';
import { ErrorBoundary } from "react-error-boundary";
import * as AlbumListPageQuery from "./__generated__/AlbumListPageQuery.graphql";
import AlbumList from './AlbumList';

interface Props {
  initialQueryRef: PreloadedQuery<AlbumListPageQuery.AlbumListPageQuery>;
}

function AlbumListPage(props: Props) {
  const data = usePreloadedQuery(
    graphql`
      query AlbumListPageQuery{
        albums {
          data{
            id
            title
          }
          ...AlbumList_albumsPage
        }
      }
    `,
    props.initialQueryRef
  );
  console.log("xxxx", data)

  const albums = data.albums;
  if (!albums) {
    throw new Error("Expected user to be defined");
  }
  return (
    <AlbumList albums={albums} />

  );
}

export default function AlbumListPageWrapper({ initialQueryRef }: Props) {
  return (
    <ErrorBoundary fallbackRender={({ error }) => <div>{error.message}</div>}>
      <React.Suspense fallback={<div>Loading</div>}>
        <AlbumListPage initialQueryRef={initialQueryRef} />
      </React.Suspense>
    </ErrorBoundary>
  );
}

