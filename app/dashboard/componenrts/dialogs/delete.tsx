"use client"
import React, { useState } from 'react'
import { Dialog,DialogContent,DialogTrigger,DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import useDeleteUser from '../../hooks/useDeleteUser';

export default function DeleteDialog({ id, fetchUser }: { id: string; fetchUser: () => Promise<void> }) {
    const [open,setOpen]=useState(false)

    const deleteUser =useDeleteUser();
    
    const handleDelete = async() =>{
        console.log(`the is is ${id}`)
        await deleteUser(id);

        await  fetchUser();
        setOpen(false);

    }
    return(
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild> 
                    <Button variant='destructive'>
                        <Trash/>
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <p>Are You sure , You want to delete the User</p>
                    <DialogClose asChild>
                        <Button variant='outline'>cancel</Button>
                    </DialogClose>
                    <Button variant='destructive' onClick={handleDelete}>Delete</Button>
                </DialogContent>
            </Dialog>
        </div>
    )
}