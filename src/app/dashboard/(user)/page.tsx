"use client";

import React from "react";

export default function UserDashboard() {
  // Sample data - replace with actual data from your backend
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    accountType: "Individual",
    joinDate: "March 2024",
    totalTransactions: 12,
    totalSpent: "$1,234.56",
  };

  const transactions = [
    {
      id: "TRX001",
      date: "2024-03-15",
      merchant: "Store A",
      amount: "$123.45",
      status: "Completed",
      type: "Purchase",
    },
    {
      id: "TRX002",
      date: "2024-03-14",
      merchant: "Store B",
      amount: "$67.89",
      status: "Completed",
      type: "Purchase",
    },
    {
      id: "TRX003",
      date: "2024-03-13",
      merchant: "Store C",
      amount: "$45.67",
      status: "Pending",
      type: "Purchase",
    },
    {
      id: "TRX004",
      date: "2024-03-12",
      merchant: "Store D",
      amount: "$89.12",
      status: "Completed",
      type: "Purchase",
    },
  ];

  return (
    <>
      {/* Profile Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="flex items-center space-x-4">
          <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-2xl text-gray-600">
              {userProfile.name.charAt(0)}
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {userProfile.name}
            </h2>
            <p className="text-gray-600">{userProfile.email}</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Account Type</p>
            <p className="text-lg font-semibold text-gray-900">
              {userProfile.accountType}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Join Date</p>
            <p className="text-lg font-semibold text-gray-900">
              {userProfile.joinDate}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Total Transactions</p>
            <p className="text-lg font-semibold text-gray-900">
              {userProfile.totalTransactions}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Total Spent</p>
            <p className="text-lg font-semibold text-gray-900">
              {userProfile.totalSpent}
            </p>
          </div>
        </div>
      </div>

      {/* Transactions Section */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium text-gray-900">
            Recent Transactions
          </h3>
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
                  Merchant
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
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
                    {transaction.merchant}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.amount}
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.type}
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
