import React, { memo, useCallback, useEffect, useState, Component } from 'react';

import {
  QueryRenderer,
  useFragment
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro';

import environment from 'services/Enviroment';
import fetchRelay from 'services/RelayEnvironment';

import Album from './Album';
import AlbumList from './AlbumList';

const AlbumListPageQuery = graphql`
  query AlbumListPageQuery {
    albums{
      ...AlbumList_albums
    }
  }
`
class AlbumListPage extends Component {

  render() {
    return (
      <QueryRenderer
        environment={fetchRelay}
        query={AlbumListPageQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <AlbumList albums={props.albums} />
          }
          return <div>Loading</div>
        }}
      />
    )
  }
}

export default AlbumListPage


