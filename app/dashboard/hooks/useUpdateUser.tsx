"use client"

import { User } from "./useFetchUsers"
import { useState } from "react"

export default function useUpdateUser() {
    const [loading,setLoading] = useState(false);
    
    const editUser = async(userData:User) => {
        try {
            setLoading(true);

            const response = await fetch(`/api/dashboard/${userData.id}`,{
                method:"PUT",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(userData), 
            });
            return await response.json();
        } finally{
            setLoading(false);
        }
    }
    return {editUser,loading}
}