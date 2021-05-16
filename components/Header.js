import Image from 'next/image'
import { ChatIcon, SearchIcon, ViewGridIcon } from '@heroicons/react/solid'
import { HomeIcon, FlagIcon, PlayIcon, ShoppingBagIcon, UserGroupIcon, BellIcon, ChevronDownIcon } from '@heroicons/react/outline'

import HeaderIcon from './HeaderIcon'
function Header() {

    return (
        <div className="sticky top-0 z-50 flex items-center justify-between p-2 bg-white shadow-md lg:px-5">
            {/* Left */}
            <div className="flex items-center">
                <Image src="https://links.papareact.com/5me" width={40} height={40} layout="fixed" />
                <div className="flex items-center p-2 ml-2 bg-gray-100 rounded-full">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input className="items-center flex-shrink hidden ml-2 placeholder-gray-500 bg-transparent outline-none md:inline-flex" type="text" placeholder="Search Facebook" />
                </div>
            </div>
            {/* Center */}
            <div className="flex flex-row justify-center">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon Icon={HomeIcon} active />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingBagIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            {/* Right */}
            <div className="flex items-center justify-end sm:space-x-2">
                {/* Profile Pic */}
                <p className="pr-3 font-semibold whitespace-nowrap">An Doan</p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
        </div>
    )
}

export default Header
