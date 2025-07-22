import React from 'react';
import verj from "../assets/verj.png"

function LastPart(){
    return(
        <div className=" relative top-[1050px] h-[440px] bg-[#101623]">
            <img className="absolute top-[320px]" src="https://amaranoc.am/_next/image?url=%2Fimages%2Ffooter%2Ffooter-background.png&w=1920&q=75" />
            <img className="absolute top-[50px] h-[200px] w-[85%] left-[100px]" src={verj} />
        </div>
    )
}
export default LastPart;