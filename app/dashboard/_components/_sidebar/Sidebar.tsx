"use client";
import { LuStore, LuTruck, LuUser, LuUsers, LuWheat } from "react-icons/lu";
import NavItem from "./NavItem";
import { useEffect, useState } from "react";
import { API_URL } from "@/constants";

interface Response {
  role: string
}

export default function Sidebar() {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    fetch(`${API_URL}/auth/role?email=${email}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Email no encontrado");
        }
        return response.json();
      })
      .then((data: Response) => {
        setRole(data.role);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);
  return (
    <nav className="w-1/12 min-w-[8.3333%] h-[90vh] bg-orange-200 flex flex-col items-center py-20 justify-center gap-10">
      <NavItem
        icon={<LuStore className="text-4xl" />}
        path="/dashboard"
        disable={role === "employee"}
      />
      <NavItem
        icon={<LuTruck className="text-4xl" />}
        path="/dashboard/providers"
        disable={false}
      />
      <NavItem
        icon={<LuWheat className="text-4xl" />}
        path="/dashboard/products"
        disable={false}
      />
      <NavItem
        icon={<LuUser className="text-4xl" />}
        path="/dashboard/managers"
        disable={role === "employee"}
      />
      <NavItem
        icon={<LuUsers className="text-4xl" />}
        path="/dashboard/employees"
        disable={role === "employee"}
      />
    </nav>
  );
}
