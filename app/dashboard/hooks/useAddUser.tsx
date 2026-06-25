"use client"

import { User } from "./useFetchUsers"
import { useState } from "react"

export default function AddUser() {
    const [loading,setLoading] = useState(false);
    
    const createUser = async(userData:User) => {
        try {
            setLoading(true);

            const response = await fetch("/api/dashboard",{
                method:"POST",
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
    return {createUser,loading}
}