import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React, { useCallback, SyntheticEvent, useState } from "react";
import { useFragment } from "react-relay";
import { AlbumList_albumsPage$key } from "./__generated__/AlbumList_albumsPage.graphql";
import styles from './AlbumsRelay.module.css';
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';
import useUpdateAlbumMutation from "./useUpdateAlbumMutation";
import useRemoveAlbumMutation from "./useRemoveAlbumMutation";
import { Button, Modal } from "@material-ui/core";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
const graphql = require("babel-plugin-relay/macro");

interface Props {
  albums: AlbumList_albumsPage$key;
}

export default function AlbumList(props: Props) {
  const albums = useFragment(
    graphql`
      fragment AlbumList_albumsPage on AlbumsPage {
        data  {
            id
            title
            user{
                id
                name
                username
                email
                website
              }
        }
      }
    `,
    props.albums
  );
  const data = albums.data && albums.data.length ? albums.data : [];
  const [updateAlbumMutation] = useUpdateAlbumMutation();
  const [removeAlbumMutation] = useRemoveAlbumMutation();
  const [openModal, setOpenModal] = useState(false);

  const handleTextInputSave = useCallback(
    (prm: any, evt: any) => {
      let userId = data.find(d => d.id == prm.id).user.id
      updateAlbumMutation(prm.props.value, prm.id, userId);
    },
    [updateAlbumMutation]
  );
  const handleDelete = useCallback(
    (id: any) => {
      removeAlbumMutation(id)

    },
    [removeAlbumMutation]
  );

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Title', width: 450, editable: true },
    {
      field: 'action', headerName: ' ', width: 100, renderCell: (pr) => {
        return (
          <Button variant="contained" color="secondary" onClick={() => { handleDelete(pr.id) }}>
            <DeleteOutlinedIcon />
          </Button>
        )
      }
    },
  ];
  return (
    <section className="TodoList">
      <Card>
        <CardHeader color="warning">
          <h4 className={styles.cardTitleWhite}>Albums</h4>
          <p className={styles.cardCategoryWhite}>
            New employees on 15th September, 2016
              </p>
          <Button variant="contained" color="primary" onClick={() => { setOpenModal(true) }}>
            <AddCircleIcon />
          </Button>
        </CardHeader>
        <CardBody>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={data}
              columns={columns}
              onEditCellChangeCommitted={(prm, evt) => handleTextInputSave(prm, evt)}
            />
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
