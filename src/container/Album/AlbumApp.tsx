import AlbumListPage from 'container/Album/AlbumListPage'
import TodoAppEnvironment from "services/TodoAppEnvironment";
import * as AlbumListPageQuery from "container/Album/__generated__/AlbumListPageQuery.graphql";
import { loadQuery, RelayEnvironmentProvider } from "react-relay";

// core components

const initialQueryRef = loadQuery<AlbumListPageQuery.AlbumListPageQuery>(
    TodoAppEnvironment,
    AlbumListPageQuery.default,
    {
        userId: "me"
    }
);
function AlbumApp() {
    return (
        <RelayEnvironmentProvider environment={TodoAppEnvironment}>
            <AlbumListPage initialQueryRef={initialQueryRef} />
        </RelayEnvironmentProvider>
    );
}

export default AlbumApp;
