import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function Modal(props: any) {
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={props.setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl sm:p-6">
                <h1 className="text-gray-900 text-2xl font-semibold">
                  {props.selected.name}{" "}
                  <small className="text-xs text-gray-700 bg-gray-100 px-2 py-1 ml-1 rounded-sm">
                    Error
                  </small>
                </h1>
                <p className="text-xs mt-1 text-gray-500">
                  1 week by{" "}
                  <span className="font-semibold underline">
                    Kasshif Sulehria
                  </span>
                </p>
                <div className="py-4">
                  <p className="text-gray-600 text-base font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo eos fuga ad, impedit quos cum tenetur qui
                    reiciendis culpa, doloremque sapiente tempora deserunt minus
                    error eveniet, dignissimos accusantium praesentium vel!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima omnis fugit odio ducimus placeat repudiandae, vitae
                    ad a aperiam quibusdam impedit tenetur, quam aspernatur
                    dolor facilis aut pariatur illum in.
                  </p>
                </div>

                <div className="flex items-center mt-4 gap-3">
                  <button className="bg-red-600 px-6 text-white  py-2 rounded-md">
                    Delete
                  </button>
                  <button className="bg-gray-600 px-6 text-white  py-2 rounded-md">
                    Edit
                  </button>
                </div>

                <div className="h-80 p-4 rounded-md  bg-gray-100 mt-4">
                  <pre>Code will go here</pre>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
