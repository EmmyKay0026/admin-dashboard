import { addProducts } from "@/app/lib/action";
import "./addproduct.css";

const AddProductPage = () => {
  return (
    <div className="mt-[30px]">
      <form className=" flex flex-wrap justify-between" action={addProducts}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          id="title"
          required
        />
        <select name="cat" id="cat">
          <option value="general">Choose a Catergory</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" name="price" id="price" placeholder="Price" />
        <input type="number" name="stock" id="stock" placeholder="Stock" />
        <input type="text" name="color" id="color" placeholder="Color" />
        <input type="text" name="size" id="size" placeholder="Size" />
        <textarea
          name="desc"
          id="desc"
          rows="8"
          placeholder="Description"
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

export default AddProductPage;
