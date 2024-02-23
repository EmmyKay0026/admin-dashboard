import React from "react";
import Image from "next/image";
import emmanuel2 from "../../../../public/Emmanuel.gif";
import "./transaction.css";

const Transaction = () => {
  return (
    <div className=" p-[20px] bg-[#222] rounded-[20px]">
      <h2 className="font-bold ">Latest Transactions</h2>
      <table className="w-full">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-[10px]">
                <Image src={emmanuel2} width={40} height={40} />
                Emmanuel Kadiri
              </div>
            </td>
            <td>
              <span className="rounded-[5px] p-[5px] text-[14px] bg-[#ffc200] ">
                Pending
              </span>
            </td>
            <td>15.02.2024</td>
            <td>$3.200</td>
          </tr>
          {/* <tr>
            <td>
              <div className="flex items-center gap-[10px]">
                <Image src={emmanuel2} width={40} height={40} />
                Emmanuel Kadiri
              </div>
            </td>
            <td>
              <span className="rounded-[5px] p-[5px] text-[14px] bg-[green]">
                Done
              </span>
            </td>
            <td>15.02.2024</td>
            <td>$3.200</td>
          </tr> */}
          <tr>
            <td>
              <div className="flex items-center gap-[10px]">
                <Image src={emmanuel2} width={40} height={40} />
                Emmanuel Kadiri
              </div>
            </td>
            <td>
              <span className="rounded-[5px] p-[5px] text-[14px] bg-[green]">
                Done
              </span>
            </td>
            <td>15.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center gap-[10px]">
                <Image src={emmanuel2} width={40} height={40} />
                Emmanuel Kadiri
              </div>
            </td>
            <td>
              <span className="rounded-[5px] p-[5px] text-[14px] bg-[red]">
                Canceled
              </span>
            </td>
            <td>15.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center gap-[10px]">
                <Image src={emmanuel2} width={40} height={40} />
                Emmanuel Kadiri
              </div>
            </td>
            <td>
              <span className="rounded-[5px] p-[5px] text-[14px] bg-[#ffc200] ">
                Pending
              </span>
            </td>
            <td>15.02.2024</td>
            <td>$3.200</td>
          </tr>
          {/* <tr>
            <td>
              <div className="flex items-center gap-[10px]">
                <Image src={emmanuel2} width={40} height={40} />
                Emmanuel Kadiri
              </div>
            </td>
            <td>
              <span className="rounded-[5px] p-[5px] text-[14px] bg-[green]">
                Done
              </span>
            </td>
            <td>15.02.2024</td>
            <td>$3.200</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
