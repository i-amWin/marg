// import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Fund Summary",
    valueType: "In Value",
    values: [
      {
        label: "Bank Balance",
        value: -2927528.0,
      },
      {
        label: "Cash Balance",
        value: 3067238.0,
      },
      {
        label: "Cash Deposited",
        value: 0,
      },
      {
        label: "Withdrawal",
        value: 0,
      },
      {
        label: "Cheque For Deposit",
        value: 0,
      },
    ],
  },
  {
    title: "Outstanding",
    valueType: "In Value",
    values: [
      {
        label: "Current Receivable",
        value: -110000.0,
      },
      {
        label: "Overdue Receivable",
        value: -110000.0,
      },
      {
        label: "Current Payable",
        value: -3557011.67,
      },
      {
        label: "Overdue Payable",
        value: -3557011.67,
      },
    ],
  },
  {
    title: "Business",
    valueType: "In Value",
    values: [
      {
        label: "CGST Payable",
        value: 31189.54,
      },
      {
        label: "SGST Payable",
        value: 31189.54,
      },
      {
        label: "IGST Payable",
        value: 0,
      },
    ],
  },
  {
    title: "New Added",
    valueType: "In No.",
    values: [
      {
        label: "Items",
        value: 839,
      },
      {
        label: "Agency",
        value: 21,
      },
      {
        label: "Customer",
        value: 1,
      },
      {
        label: "Category",
        value: 0,
      },
      {
        label: "Supplier",
        value: 68,
      },
    ],
  },
  {
    title: "Stock",
    valueType: "In No.",
    values: [
      {
        label: "Expired",
        value: 28,
      },
      {
        label: "Near Expired",
        value: 4,
      },
      {
        label: "Reorder",
        value: 0,
      },
      {
        label: "Dumb Stock",
        value: 190,
      },
      {
        label: "Supplier",
        value: 68,
      },
    ],
  },
  {
    title: "Pending",
    valueType: "In No.",
    values: [
      {
        label: "Sales Challan",
        value: 0,
      },
      {
        label: "Sales Order",
        value: 0,
      },
      {
        label: "Purchase Order",
        value: 0,
      },
      {
        label: "Purchase Challan",
        value: 0,
      },
      {
        label: "Prescription",
        value: 0,
      },
    ],
  },
];

// ₹

export default function Cards() {
  return (
    <>
      {cardData.map((card) => (
        <div key={card.title} className="p-4 bg-white rounded-md">
          <div className="flex justify-between mb-3">
            <h2 className="text-lg font-semibold relative after:w-1/2 after:h-0.5 after:bg-blue-500 after:absolute after:bottom-0 after:left-0">
              {card.title}
            </h2>
            <p className="font-medium">{card.valueType}</p>
          </div>
          <ul>
            {card.values.map((value) => (
              <li
                key={value.label}
                className="flex justify-between cursor-pointer hover:text-blue-500"
              >
                <span>{value.label}</span>
                <span>₹ {value.value.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
