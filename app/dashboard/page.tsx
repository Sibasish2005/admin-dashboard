"use client"

import { DataTable } from './data-table'
import { columns } from './coloumn'
import useFetchUsers from './hooks/useFetchUsers'
import CreateNewData from './componenrts/dialogs/create-new-data'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


export default function Dashboard() {

  const {user,loading,fetchUser} = useFetchUsers();
  return (
    <div className='gap-10 p-4 flex-col'>
      <Button variant='outline'><Link href={"/"}>Back To Homepage</Link></Button>
      <CreateNewData fetchUser={fetchUser}/>
      <DataTable columns={columns(fetchUser)} data={user}/>
    </div>
  )
}
