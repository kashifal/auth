import { useState } from "react";
import { Dialog, Switch } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Sidebar from "../layouts/Sidebar";
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Invoices", href: "#" },
  { name: "Clients", href: "#" },
  { name: "Expenses", href: "#" },
];
const secondaryNavigation = [
  { name: "General", href: "#", icon: UserCircleIcon, current: true },
  { name: "Security", href: "#", icon: FingerPrintIcon, current: false },
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
  { name: "Plan", href: "#", icon: CubeIcon, current: false },
  { name: "Billing", href: "#", icon: CreditCardIcon, current: false },
  { name: "Team members", href: "#", icon: UsersIcon, current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Settings() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);

  return (
    <Sidebar>
      <div className="mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8">
        <h1 className="sr-only">General Settings</h1>

        <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
          <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Profile
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Full name
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Tom Cook</div>
                    <button
                      type="button"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Email address
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">tom.cook@example.com</div>
                    <button
                      type="button"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Title
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Human Resources Manager</div>
                    <button
                      type="button"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="py-4">
              <h1 className="text-2xl font-semibold text-gray-800">
                Change Password
              </h1>
              <form action="" className="mt-8">
                <div className="">
                  <label htmlFor="">Old Password</label>
                  <input
                    type="password"
                    placeholder="*****"
                    className="px-2 max-w-sm w-full py-1.5 block mt-1 rounded-md bg-gray-100"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="">New Password</label>
                  <input
                    type="password"
                    placeholder="*****"
                    className="px-2 max-w-sm w-full py-1.5 block mt-1 rounded-md bg-gray-100"
                  />
                </div>

                <button className="text-white bg-indigo-700 px-8 mt-4 py-2.5 rounded-lg">
                  Save{" "}
                </button>
              </form>
            </div>
            <div className="py-4">
              <h1 className="text-2xl font-semibold text-gray-800">
                Change Email
              </h1>
              <form action="" className="mt-8">
                <div className="">
                  <label htmlFor="">New Email</label>
                  <input
                    type="password"
                    placeholder="*****"
                    className="px-2 max-w-sm w-full py-1.5 block mt-1 rounded-md bg-gray-100"
                  />
                </div>

                <button className="text-white bg-indigo-700 px-8 mt-4 py-2.5 rounded-lg">
                  Save{" "}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </Sidebar>
  );
}
