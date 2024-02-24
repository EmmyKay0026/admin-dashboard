import { fetchProduct } from "@/app/lib/data";
import download1 from "../../../../public/download1.jpg";
import "./id.css";
import { updateProduct } from "@/app/lib/action";

const { default: Image } = require("next/image");

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  // console.log(product);
  // const product = await productt.product;
  return (
    <div className="flex gap-[50px] mt-[20px]">
      <div className="flex-1">
        <div className="w-[300px] rounded-[10px] h-[300px] font-bold relative">
          <Image
            src={product.img || download1}
            width={100}
            height={100}
            className="w-full mb-[20px]"
          />

          <p>Title: {product.title}</p>
          <p>Description: {product.desc}</p>
          <p>Price: {product.price}</p>
          <p>Stock: {product.stock}</p>
          <p>Color: {product.color}</p>
          <p>Size: {product.size}</p>
        </div>
      </div>
      <div className="flex-3 w-full">
        <form
          className="flex flex-col gap-[15px] w-full"
          action={updateProduct}
        >
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder={product.title} />

          <label htmlFor="price">Price</label>
          <input type="number" name="price" placeholder={product.price} />

          <label htmlFor="stock">Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label htmlFor="color">Color</label>
          <input type="text" name="color" placeholder={product.color} />
          <label htmlFor="size">Size</label>
          <input type="text" name="size" placeholder={product.size} />

          <label htmlFor="cat">Select a Catergory</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="8"
            placeholder={product.desc}
            className="w-full"
          ></textarea>
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

export default SingleProductPage;
