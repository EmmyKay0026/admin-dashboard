import React from "react";
import Card from "../ui/dashboard/card/card";
import Transaction from "../ui/dashboard/transaction/transaction";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/rightbar/rightbar";

const Dashboard = () => {
  return (
    <div className="flex gap-5 mt-[20px]">
      <div className="flex flex-col justify-around flex-[3] gap-[20px]">
        <div className="flex gap-[20px]">
          <Card active={true} />
          <Card active={false} />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className="flex-[1]">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
