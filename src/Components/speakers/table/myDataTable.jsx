import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

export const MyDataTable = ({speakers}) => {

    return(
        <DataTable value={speakers} >
            <Column field='name' header="Name"></Column>
            <Column field='bio' header="Bio"></Column>
            <Column field='webSite' header="WebSite"></Column>
        </DataTable>
    );

}
