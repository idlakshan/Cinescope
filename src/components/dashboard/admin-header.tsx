import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { UserNav } from "./user-nav";


export default async function AdminHeader() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const handleLogout = async () => {
    "use server";

    await auth.api.signOut({
      headers: await headers(),
    });

    redirect("/login");
  };

  console.log("AdminHeader session:", session.user);

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <UserNav handleLogout={handleLogout} user={session.user} />
      </div>
    </header>
  );
}