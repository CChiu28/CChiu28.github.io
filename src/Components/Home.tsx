import React from "react";

export default function Home() {

    return(
        <div>
            <div>
                <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                    <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-center text-gray-800 font-black leading-7 md:leading-10">
                            David Chiu
                        </h1>
                        <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">A professonal website drives sales. Create a beautiful website to impress and engage new customers and establish your business online </p>
                    </div>
                </div>
            </div>
        </div>
    )
}