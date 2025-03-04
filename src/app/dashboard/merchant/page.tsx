"use client";

import React from "react";

export default function MerchantDashboard() {
  // Sample data - replace with actual data from your backend
  const merchantProfile = {
    businessName: "Store A",
    email: "store.a@example.com",
    phone: "+1 234 567 8900",
    address: "123 Business St, City, Country",
    joinDate: "March 2024",
    totalTransactions: 156,
    totalRevenue: "$12,345.67",
    activeProducts: 24,
    rating: 4.8,
  };

  const transactions = [
    {
      id: "TRX001",
      date: "2024-03-15",
      customer: "John Doe",
      amount: "$123.45",
      status: "Completed",
      product: "Product A",
      paymentMethod: "Card",
    },
    {
      id: "TRX002",
      date: "2024-03-14",
      customer: "Jane Smith",
      amount: "$67.89",
      status: "Completed",
      product: "Product B",
      paymentMethod: "Card",
    },
    {
      id: "TRX003",
      date: "2024-03-13",
      customer: "Mike Johnson",
      amount: "$45.67",
      status: "Pending",
      product: "Product C",
      paymentMethod: "Card",
    },
    {
      id: "TRX004",
      date: "2024-03-12",
      customer: "Sarah Williams",
      amount: "$89.12",
      status: "Completed",
      product: "Product D",
      paymentMethod: "Card",
    },
  ];

  return (
    <>
      {/* Profile Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="flex items-center space-x-4">
          <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-2xl text-gray-600">
              {merchantProfile.businessName.charAt(0)}
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {merchantProfile.businessName}
            </h2>
            <p className="text-gray-600">{merchantProfile.email}</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Total Revenue</p>
            <p className="text-lg font-semibold text-gray-900">
              {merchantProfile.totalRevenue}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Total Transactions</p>
            <p className="text-lg font-semibold text-gray-900">
              {merchantProfile.totalTransactions}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Active Products</p>
            <p className="text-lg font-semibold text-gray-900">
              {merchantProfile.activeProducts}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Rating</p>
            <p className="text-lg font-semibold text-gray-900">
              {merchantProfile.rating} / 5.0
            </p>
          </div>
        </div>
      </div>

      {/* Transactions Section */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">
            Recent Transactions
          </h3>
          <button className="px-4 py-2 bg-mainsecondary text-white rounded-md hover:bg-red-700 transition-colors">
            Export
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.paymentMethod}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        transaction.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
