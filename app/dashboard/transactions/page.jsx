const { default: Chart } = require("@/app/ui/dashboard/chart/chart");
const {
  default: Transaction,
} = require("@/app/ui/dashboard/transaction/transaction");

const Transactions = () => {
  return (
    <>
      <div className="my-[20px]"></div>

      <Chart />
      <div className="my-[20px]"></div>
      <Transaction />
    </>
  );
};

export default Transactions;
