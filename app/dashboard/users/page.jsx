import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import levi from "../../../public/levi.jpg";
import "./users.css";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchUsers } from "@/app/lib/data";
import { deleteUser } from "@/app/lib/action";

const Users = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <div className="mt-[20px] rounded-[20px] p-[20px] bg-techko-second">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for user" />
        <Link href="/dashboard/users/addusers">
          <button>Add new</button>
        </Link>
      </div>
      <table className="w-full  mt-[20px]">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const userID = user._id;
            return (
              <tr key={user._id}>
                <td>
                  <div className="flex items-center gap-2">
                    <Image
                      src={user.img || levi}
                      width={30}
                      height={30}
                      className="rounded-[100%]"
                    />
                    {user.username}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4, 16)}</td>
                <td>{user.isAdmin ? "Admin" : "Client"}</td>
                <td>{user.isActive ? "Active" : "Inactive"}</td>
                <td>
                  <div className="flex gap-[10px]">
                    <Link href={`/dashboard/users/${user._id}`}>
                      <button className="px-[10px] py-[5px] bg-[teal] rounded-[5px] cursor-pointer">
                        View
                      </button>
                    </Link>
                    <form action={deleteUser}>
                      <input type="hidden" name="_id" value={`${user._id}`} />
                      <button className="px-[10px] py-[5px] bg-[crimson] rounded-[5px] cursor-pointer">
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>
              <div className="flex items-center gap-2">
                <Image
                  src={levi}
                  widdth={30}
                  heyight={30}
                  className="h-[30px] w-[30px] rounded-[100%]"
                />
                Levi Ackerman
              </div>
            </td>
            <td>leviackerman@gmail.com</td>
            <td>16.02.2024</td>
            <td>Commander</td>
            <td>Inactive</td>
            <td>
              <div className="flex gap-[10px]">
                <Link href="/dashboard/users/1">
                  <button className="px-[10px] py-[5px] bg-[teal] rounded-[5px] cursor-pointer">
                    View
                  </button>
                </Link>
                <button className="px-[10px] py-[5px] bg-[crimson] rounded-[5px] cursor-pointer">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Users;
