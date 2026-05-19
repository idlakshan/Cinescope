import { Metadata } from "next";
import LogoutButton from "./logout-button"

export const metadata: Metadata = {
  title: "Dashboard | CineScope Dashboard",
  description: "Your gateway to cinematic insights",
};

const page = () => {
  return (
   <div className="flex-10 flex flex-col gap-6 items-center justify-center">
      <h1 className="text-4xl font-bold">Dashboard Page</h1>

      <LogoutButton />
    </div>
  )
}

export default page