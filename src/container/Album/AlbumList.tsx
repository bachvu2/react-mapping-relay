import { Pagination } from "@material-ui/lab";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import Table from "components/Table/Table";
import React, { useCallback, SyntheticEvent } from "react";
import { useFragment } from "react-relay";
import { AlbumList_albumsPage$key } from "./__generated__/AlbumList_albumsPage.graphql";
import styles from './AlbumsRelay.module.css';

const graphql = require("babel-plugin-relay/macro");

interface Props {
  albums: AlbumList_albumsPage$key;
}

export default function AlbumList(props: Props) {
  const albums = useFragment(
    graphql`
      fragment AlbumList_albumsPage on AlbumsPage  {
        data {
            id
            title
        }
      }
    `,
    props.albums
  );
  // const [markAllTodos] = useMarkAllTodosMutation();
  // const { todos, totalCount, completedCount } = user;

  // const handleMarkAllChange = useCallback(
  //   (e: SyntheticEvent<HTMLInputElement>) => {
  //     const complete = e.currentTarget.checked;

  //     if (todos != null && todos.edges != null) {
  //       const todoIds = todos.edges
  //         .map(edge => edge?.node?.id)
  //         .filter(id => id != null);
  //       markAllTodos({
  //         complete,
  //         todoIds,
  //         userId: user.id,
  //         totalCount: user.totalCount
  //       });
  //     }
  //   },
  //   [markAllTodos, todos, user.id, user.totalCount]
  // );
  const convertDataTable = (data, fields) => {
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
  const data = albums.data && albums.data.length ? albums.data : [];
  const dataTable = convertDataTable(data, ["id", "title"])
  return (
    <section className="TodoList">
      <Card>
        <CardHeader color="warning">
          <h4 className={styles.cardTitleWhite}>Albums</h4>
          <p className={styles.cardCategoryWhite}>
            New employees on 15th September, 2016
              </p>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="warning"
            tableHead={['ID', 'Title']}
            tableData={dataTable}
          />
          <Pagination count={10} color="primary" />
        </CardBody>
      </Card>
    </section>
  );
}
