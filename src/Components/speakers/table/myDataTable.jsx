import React from "react"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"

// eslint-disable-next-line react/prop-types
export const MyDataTable = ({ speakers }) => (
  <DataTable value={speakers}>
    <Column field="name" header="Name" />
    <Column field="bio" header="Bio" />
    <Column field="webSite" header="WebSite" />
  </DataTable>
)
