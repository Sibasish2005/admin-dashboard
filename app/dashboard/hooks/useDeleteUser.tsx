"use client"
export default function useDeleteUser() {
    const deleteUser = async (id: string) => {
        const response = await fetch(`/api/dashboard/${id}`,
            { method: "DELETE" }
        )
    }
    return deleteUser;
}