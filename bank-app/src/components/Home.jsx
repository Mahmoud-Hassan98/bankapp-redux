import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const accounts = useSelector((state) => state.accounts);

  return (
    <>
      <br /><br /><br />
      <div className="Container">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Customer Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Account Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Account Type
                </th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account) => (
                <tr key={account.id}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {account.id}
                  </th>
                  <td className="px-6 py-4">{account.customerName}</td>
                  <td className="px-6 py-4">{account.accountNumber}</td>
                  <td className="px-6 py-4">{account.accountType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </>
  );
}
