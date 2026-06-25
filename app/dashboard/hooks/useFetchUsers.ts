"use client"
import React , {useState,useEffect} from 'react'

export type User = 
    {
        id:string,
        name:string,
        email:string,
        role:string
    }


export default function useFetchUsers() {
  const [user,setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  
  const fetchUser = async () => {
    setLoading(true);
    const response = await fetch("/api/dashboard")
    const data = await response.json() ;
    setUser(data)
    setLoading(false)
  }
  useEffect(()=>{
    fetchUser();
  },[])
  return { user,loading,fetchUser}
}
