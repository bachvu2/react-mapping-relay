import React, { memo, useCallback, useEffect, useState, Component } from 'react';

import {
  createFragmentContainer
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro';

import Album from './Album';

class AlbumList extends Component<{ albums: any }> {

  render() {
    // const Albums = []
    console.log("xxxxxxxx", this.props.albums)
    return (
      <div>
        {/* {this.props.albums.map(e => {
          <Album key={e.id} album={e} />
        })
        } */}
      </div>
    )
  }
}

export default createFragmentContainer(AlbumList, graphql`
  fragment AlbumList_albums on AlbumsPage {
      data  {
          ...Album_album
      }
  }
`)
