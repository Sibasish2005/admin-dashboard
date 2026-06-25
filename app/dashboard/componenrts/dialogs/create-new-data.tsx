"use client";
import { useState } from "react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import AddUser from "../../hooks/useAddUser";

export default  function CreateNewData({
  fetchUser,
}: {
  fetchUser: () => Promise<void>;
}) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    role: "",
  });

  const [open, setOpen] = useState(false);

  const { createUser, loading } =  AddUser();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUser(formData);
    await fetchUser();
    setOpen(false);
    alert("User Created successfully");
  };

  return (
    <div className=" py-10">
      <Dialog open={open} onOpenChange={setOpen} >
        <DialogTrigger asChild>
          <Button>Add New Data</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle> Add New Data</DialogTitle>
          <form onSubmit={handleSubmit}>
            <Label>id</Label>
            <Input
              value={formData.id}
              onChange={(e) => {
                setFormData({ ...formData, id: e.target.value });
              }}
            />
            <Label>Name</Label>
            <Input
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            />
            <Label>Email</Label>
            <Input
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
            <Label>Role</Label>
            <Select
              onValueChange={(value) => {
                setFormData({ ...formData, role:value });
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="employee">Employee</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Button type="submit">Submit</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
