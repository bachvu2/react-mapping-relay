import React, { memo, useCallback, useEffect, useState, Component } from 'react';
import {
    createFragmentContainer
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro';

class Album extends Component<{ album: any }> {

    convertDataTable = (data, fields) => {
        let result = []
        data.map(ed => {
            let row = []
            fields.map(ef => {
                row.push(ed[ef])
            })
            result.push(row)
        })
        return result
    }
    render() {
        return (
            <div>{this.props.album.title}</div>
        )
    }
}

export default createFragmentContainer(Album, graphql`
  fragment Album_album on Album {
    id
    title
  }
`)

