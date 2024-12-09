import React from 'react'
import Cards from './Cards'
import list from '../assets/list.json'
import { useNavigate } from 'react-router-dom'

function Course() {

    const navigate = useNavigate()
    return (
        <>
            <div className='max-w-screen-2xl mx-auto container md:px-20 px-4'>
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-5xl'>We are Delighted to have you {" "}
                        <span className='text-pink-500'>here...
                        </span>
                    </h1>
                    <p className='mt-12 '>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti eum ea nulla nemo pariatur excepturi beatae temporibus dignissimos inventore, eligendi minus sunt magni minima quam expedita atque! Sunt, placeat fuga! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto fugit aliquam optio iste aperiam molestias.
                    </p>
                    <button
                        className='btn btn-secondary px-7 mt-8'
                        onClick={() => navigate('/')}
                    >

                        Back</button>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
                    {
                        list.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course