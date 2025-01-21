import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import GenreDropDown from './GenreDropDown';
import Searchinput from './Searchinput';

const Header = () => {
    return (
        <div className='w-full flex item-center justify-between p-5 bg-[#121212]'>
           
           {/* logo */}
            <Link href={"/"}>
                <Image  //! next config fájlban be kell állíteni!! 
                    src="https://i.ibb.co/ZW0SbjJ/logo-dark.png"
                    alt="Logo"
                    width={120}
                    height={100}
                    priority={true}
                    className="cursor-pointer w-40 h-auto"
                />
            </Link>

            {/* others */}
            <div className='text-white flex space-x-2 items-center'>
                {/* genre */}
                <GenreDropDown/>
                {/* search */}
                <Searchinput />
                {/* theme */}


            </div>
        </div>     
    )
}

export default Header