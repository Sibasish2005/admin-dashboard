"use client"

import { ColumnDef } from "@tanstack/react-table"
import DeleteDialog from "./componenrts/dialogs/delete"
import EditUser from "./componenrts/dialogs/edit-data"

export type User = {
    id:string,
    name:string,
    email:string,
    role:string
}

export const columns = (fetchUser: () => Promise<void>): ColumnDef<User>[] => [
{
    accessorKey:"id",
    header:"id",
},
{
    accessorKey:"name",
    header:"Name",
},
{
    accessorKey:"email",
    header:"Email",
},
{
    accessorKey:"role",
    header:"Role",
},
{
    id:"actions",
    header:"Actions",
    cell:({row}) =>{
        const users =row.original;
        return(
            <div className="flex items-center gap-2">
                <DeleteDialog id={row.original.id} fetchUser={fetchUser}/>
                <EditUser user={row.original} fetchUser={fetchUser}/>
            </div>
        )
    }

}
]