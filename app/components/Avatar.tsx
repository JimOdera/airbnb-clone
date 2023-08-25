'use client'

import Image from "next/image";

const Avatar = () => {
    return ( 
        <Image src="/images/placeholder.jpg" height={30} width={30} className="rounded-full" alt="Avatar" />
     );
}
 
export default Avatar;