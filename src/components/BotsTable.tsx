import { useState } from "react";
import Modal from "./Modal";

export default function Bots({ bots }: any) {
  console.log(typeof bots);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const statusMessage = (status: String) => {
    return (
      <div
        className={
          status === "Active"
            ? "text-emerald-700 px-2 inline-flex py-1 rounded-md font-semibold bg-emerald-100 "
            : status === "Inactive"
              ? "text-yellow-700 px-2 inline-flex py-1 rounded-md font-semibold bg-yellow-100"
              : ""
        }
      >
        {status}
      </div>
    );
  };
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Modal selected={selected} open={open} setOpen={setOpen} />
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Bots
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the Bots in your account including their name, title,
            email and role.
          </p>
        </div>
        <button className="px-5 py-2 bg-indigo-600 rounded-md text-white ">
          Add new Bot
        </button>
      </div>
      {bots.length <= 0 ? (
        <p className="text-center text-5xl font-black mt-20 text-emerald-600">
          0 Bots
        </p>
      ) : (
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {bots.map((bot) => (
                    <tr key={bot.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {bot.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {statusMessage(bot.status)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {bot.desc}
                      </td>
                      <td className="whitespace-nowrap flex items-center gap-2 px-3 py-4 text-sm text-gray-500">
                        {bot.details}
                        <span
                          className="cursor-pointer"
                          onClick={() => {
                            setSelected(bot);
                            setOpen(!open);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                          </svg>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
