import { fetchUser } from "@/app/lib/data";
import itachi from "../../../../public/itachi.jpg";
import "./id.css";
import { updateUser } from "@/app/lib/action";

const { default: Image } = require("next/image");

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className="flex gap-[50px] mt-[20px]">
      <div className="flex-1">
        <div className="w-[300px] rounded-[10px] h-[300px] font-bold relative">
          <Image
            src={user.img || itachi}
            width={300}
            height={300}
            className=" mb-[20px]"
          />
          <p>Username:{user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.address}</p>
          <p>Is Admin: {user.isAdmin}</p>
        </div>
      </div>
      <div className="flex-3 w-full">
        <form className="flex flex-col gap-[15px] w-full" action={updateUser}>
          <input type="hidden" name="_id" value={`${user._id}`} />
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder={user.username} />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder={user.email} />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="*****" />
          <label htmlFor="phone">Phone</label>
          <input type="phone" name="phone" placeholder={user.phone} />
          <label htmlFor="address">Address</label>
          <input type="address" name="address" placeholder={user.address} />
          <label htmlFor="IsAdmin">Is Admin?</label>
          <select name="IsAdmin" id="IsAdmin">
            {/* <option>{user.isAdmin ? "Yes" : "No"}</option> */}
            <option selected={user.isAdmin} value={true}>
              Yes
            </option>
            <option selected={!user.isAdmin} value={false}>
              No
            </option>
          </select>
          <label htmlFor="IsActive">Is Active?</label>
          <select
            // defaultValue="No"
            // {user.isActive ? "Yes" : "No"}

            name="IsActive"
            id="IsActive"
          >
            <option selected={user.isActive} value={true}>
              Yes
            </option>
            <option selected={!user.isActive} value={false}>
              No
            </option>
          </select>
          <button
            className="w-full p-[15px] border-0 rounded-[5px] bg-[teal] cursor-pointer"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
