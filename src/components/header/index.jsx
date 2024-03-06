import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Search from "@/components/search";

const Header = () => {
    return (
        <div className={"grid grid-cols-12 bg-[#006C42] py-2"}>
            <div className={"col-span-12 container flex justify-between "}>
                <div className={" flex gap-x-8 font-bold text-sm"}>
                    <Link href={'/'} className={"flex gap-x-2 items-center"}>
                        <Image src={'/icons/message.svg'} alt={'message'} width={24} height={24}/>
                        <span className={"text-[#fff]"}>info@saxonscienceliaison.uz</span>
                    </Link>

                    <Link href={'/'} className={"flex gap-x-2 items-center"}>
                        <Image src={'/icons/phone.svg'} alt={'message'} width={24} height={24}/>
                        <span className={"text-[#fff]"}>+99890 000 00 00</span>
                    </Link>
                </div>

                <div className={"flex gap-x-[100px]"}>
                    <Search/>
                    <div className={"flex gap-x-1"}>
                        <Link href={"/"}><span className={"text-[#fff]"}>Ro’yhatdan o’tish </span></Link>
                        <span className={"text-[#fff]"}>/</span>
                        <Link href={"/"}><span className={"text-[#fff]"}>
                        Kirish
                    </span></Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Header;