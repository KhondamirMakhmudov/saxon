import React from 'react';
import Image from "next/image";

const Index = () => {
    return (
        <div className={"relative z-0"}>
            <form className={""}>
                <input type={"text"} className={" rounded-[2px] w-[270px]"}/>
                <button className={"absolute z-10 right-0 top-0 bottom-0 "}>
                    <Image src={"/icons/search.svg"} alt={"search"} width={20} height={20} className={"border"}/>
                </button>
            </form>
        </div>
    );
};

export default Index;