import { useState } from "react";
import Hamburger from "../Hamburger";
import SearchInput from "../SearchInput";
import DashBoardLink from "./Links/DashBoardLink";
import MasterLink from "./Links/MasterLink";
import SaleLink from "./Links/SaleLink";
import PurchaseLink from "./Links/PurchaseLink";
import AccountTransactionLink from "./Links/AccountTransactionLink";
import StockManagementLink from "./Links/StockManagementLink";
import BankingLink from "./Links/BankingLink";
import ReportLink from "./Links/ReportLink";
import CRMLink from "./Links/CRMLink";
import UtilsAndTools from "./Links/UtilsAndTools";

export default function SideBar() {
  const [show, setShow] = useState(false);

  return (
    <div
      className="bg-gray-900 w-fit flex flex-col py-2 transition-[width] duration-300 min-h-screen"
      style={{ width: show ? "250px" : "60px" }}
    >
      <button
        className="self-end mx-4 my-3"
        onClick={() => setShow((prev) => !prev)}
      >
        <Hamburger
          className="w-7"
          barColor="bg-white"
          toggleTransition={show}
        />
      </button>

      <SearchInput show={show} />

      <ul>
        <DashBoardLink show={show} />

        <MasterLink show={show} />

        <SaleLink show={show} />

        <PurchaseLink show={show} />

        <AccountTransactionLink show={show} />

        <StockManagementLink show={show} />

        <BankingLink show={show} />

        <ReportLink show={show} />

        <CRMLink show={show} />

        <UtilsAndTools show={show} />
      </ul>
    </div>
  );
}
