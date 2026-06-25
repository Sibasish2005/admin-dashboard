"use client"

import { DataTable } from './data-table'
import { columns } from './coloumn'
import useFetchUsers from './hooks/useFetchUsers'
import CreateNewData from './componenrts/dialogs/create-new-data'


export default function Dashboard() {

  const {user,loading,fetchUser} = useFetchUsers();
  return (
    <div className='gap-10 p-10 flex-col'>
      <CreateNewData fetchUser={fetchUser}/>
      <DataTable columns={columns(fetchUser)} data={user}/>
    </div>
  )
}
