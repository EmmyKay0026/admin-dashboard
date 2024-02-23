import { addUser } from "@/app/lib/action";
import "./addusers.css";

const AddUserPage = () => {
  return (
    <div className="mt-[30px]">
      <form className=" flex flex-wrap justify-between" action={addUser}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          id="username"
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          required
        />
        <input type="phone" placeholder="Phone" name="phone" id="phone" />
        <select name="IsAdmin" id="IsAdmin">
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="IsActive" id="IsActive">
          <option value={false}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          name="address"
          id="address"
          rows="8"
          placeholder="Address"
          className="w-full"
        ></textarea>
        <button
          className="w-full p-[30px] border-0 rounded-[5px] bg-[teal] cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
