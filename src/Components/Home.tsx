import React from "react";
import bgImg from "../resources/skyline.jpg";

export default function Home() {
    const style = {
        backgroundImage: `url(${bgImg})`,
    }

    return(
        <div>
            <div className="container mx-auto min-h-screen flex flex-col items-center justify-center py-12 sm:py-24 bg-top">
                <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-center text-gray-800 font-black leading-7 md:leading-10">
                        David Chiu
                    </h1>
                    <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
                        testing
                    </p>
                </div>
            </div>
            <div>
                Projects
                <div className="grid grid-cols-2 gap-3 p-3">
                    <div className="flex items-center justify-around">
                        <div>test</div>
                        <div>test2</div>
                    </div>
                    <div className="bg-gray-600">2</div>
                    <div className="bg-gray-800">3</div>
                    <div className="bg-gray-600">4</div>
                </div>
            </div>
        </div>
    )
}