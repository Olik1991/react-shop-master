import React from "react"

export function Footer() {
    return (
        <footer className='bg-black text-white'>
            <div className='max-w-[1240px] mx-auto py-2 text-sm sm:text-base'>
                <div className='flex justify-center'>
                   
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <p className='text-center'>© Copyright 2023 CloThes Shop | All Rights Reserved</p>
                    <a href='https://www.instagram.com/oleg05050505/'
                       target="_blank"
                       rel="noreferrer"
                       className='hover:text-gray-300 transition'
                    >
                        Created by Oleg Nakonechnyy
                    </a>
                </div>
            </div>
        </footer>
    )
}
