import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import download1 from "../../../public/download1.jpg";
import download from "../../../public/download.jpeg";
import "./products.css";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { searchParams } from "next/navigation";
import { fetchProducts } from "@/app/lib/data";
import { deleteProducts } from "@/app/lib/action";

const Products = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, page);

  const produscts = [
    {
      _id: 1,
      title: "test1",
      description: "desc",
      price: "34",
      createdAt: "222",
      stock: "246",
    },
    {
      _id: 2,
      title: "test1",
      description: "desc",
      price: "34",
      createdAt: "222",
      stock: "246",
    },
    {
      _id: 3,
      title: "test1",
      description: "desc",
      price: "34",
      createdAt: "222",
      stock: "246",
    },
  ];
  // tryDB();
  return (
    <div className="mt-[20px] rounded-[20px] p-[20px] bg-techko-second">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for product" />
        <Link href="/dashboard/products/addproducts">
          <button>Add new</button>
        </Link>
      </div>
      <table className="w-full mt-[20px]">
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product._id}>
                <td>
                  <div className="flex items-center gap-2">
                    <Image
                      src={product.img || download1}
                      width={30}
                      height={30}
                      className="rounded-[100%]"
                    />
                    {product.title}
                  </div>
                </td>
                <td>{product.desc}</td>
                <td>{product.price}</td>
                <td>{product.createdAt?.toString().slice(4, 16)}</td>
                <td>{product.stock}</td>
                <td>
                  <div className="flex gap-[10px]">
                    <Link href={`/dashboard/products/${product._id}`}>
                      <button className="px-[10px] py-[5px] bg-[teal] rounded-[5px] cursor-pointer">
                        View
                      </button>
                    </Link>
                    <form action={deleteProducts}>
                      <input
                        type="hidden"
                        name="_id"
                        value={`${product._id}`}
                      />
                      <button className="px-[10px] py-[5px] bg-[crimson] rounded-[5px] cursor-pointer">
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Products;
