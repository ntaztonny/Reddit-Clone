import Image from "next/image";
import React from "react";
import {
  MenuIcon,
  HomeIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import {
  BellIcon,
  ChatIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
  StarIcon,
  GlobeIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex bg-white x-4 py-2">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          objectFit="contain"
          src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo.png"
          layout="fill"
        />
      </div>
      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
      {/* searh bar */}
      <form className="flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1 ">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="search Tonny's Reddit"
        />
        <button type="submit" hidden />
      </form>
      <div className=" mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <ChatIcon className="icon" />
        <hr className="h-10 borderborder-gray-100" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>

      {/* sign-in & sign-out */}
      <div className="hidden lg:flex items-center space-x-2 border-gray-200 p-2 cursor-pointer">
        <div className="relative h-7 w-7 flex-shrink-0 ">
          <Image
            objectFit="contain"
            src="https://cdn-icons-png.flaticon.com/512/52/52053.png"
            layout="fill"
          />
        </div>
        <p className="text-gray-400">Sign in</p>
      </div>
    </div>
  );
}

export default Header;
