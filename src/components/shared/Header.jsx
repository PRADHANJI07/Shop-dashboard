import { Popover, Transition, Menu } from "@headlessui/react";
import classNames from "classnames";
import React, { Fragment } from "react";
import {
  HiOutlineSearch,
  HiOutlineChatAlt,
  HiOutlineBell,
} from "react-icons/hi";
import backgroundImage from "../lib/consts/Utils/bhabesh.jpg"
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder="Search...."
          className="text-small focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4"
        />
      </div>
      <div className="flex items-center gap-2 mr-2">
        <Popover className="relative">
          {({ open }) => {
            return (
              <>
                <Popover.Button
                  className={classNames(
                    open && "bg-gray-100",
                    "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-gray-900 focus:outline-none active:bg-gray-100"
                  )}
                >
                  <HiOutlineChatAlt fontSize={24} />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-in-out duration-200"
                  enterFrom="opacity-0 translation-y-1"
                  enterTo="opacity-100 translation-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translation-y-0"
                  leaveTo="opacity-0 translation-y-1"
                >
                  <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                      <strong className="text-gray-700 font-medium">
                        Messages
                      </strong>
                      <div className="mt-2 py-1 text-sm">
                        This is messages panel.
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            );
          }}
        </Popover>
        <Popover className="relative">
          {({ open }) => {
            return (
              <>
                <Popover.Button
                  className={classNames(
                    open && "bg-gray-100",
                    "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-gray-900 focus:outline-none active:bg-gray-100"
                  )}
                >
                  <HiOutlineBell fontSize={24} />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-in-out duration-200"
                  enterFrom="opacity-0 translation-y-1"
                  enterTo="opacity-100 translation-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translation-y-0"
                  leaveTo="opacity-0 translation-y-1"
                >
                  <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                      <strong className="text-gray-700 font-medium">
                        Notifications
                      </strong>
                      <div className="mt-2 py-1 text-sm">
                        This is notifications panel.
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            );
          }}
        </Popover>
        <Menu>
          <div>
            <Menu.Button className="inline-flex ml-2 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <span className="sr-only">Open user menu</span>
              <div
                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                }}
              >
                <span className="sr-only">Bhabesh Pradhan</span>
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="opacity-100 transform scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100 transform scale-100"
            leaveTo="opacity-0 transform scale-95"
          >
            <Menu.Items className=" origin-top-right z-10 absolute right-0 mt-[10rem] w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-opacity-5 focus:outline-none mr-[3rem] ">
              <Menu.Item>
                {({ active }) => (
                  <div onClick={() => navigate("/profile")}
                  className={classNames( active && 'bg-gray-100',"text-gray-700 focus:bg-gray-200 block cursor-pointer rounded-sm px-4 py-2")}>
                    Your Profile
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div onClick={() => navigate("/settings")}
                  className={classNames( active && 'bg-gray-100',"text-gray-700 focus:bg-gray-200 block cursor-pointer rounded-sm px-4 py-2")}>
                    Settings
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div onClick={() => navigate("/logout")}
                  className={classNames( active && 'bg-gray-100',"text-gray-700 focus:bg-gray-200 block cursor-pointer rounded-sm px-4 py-2")}>
                    Logout
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
