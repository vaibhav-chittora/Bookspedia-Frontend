import React from 'react'

function Cards({ item }) {
    return (
        <div className='my-9'>
            <div className="card bg-base-100 w-80 m-auto md:w-96 md:h-96 shadow-xl hover:scale-105 duration-200 dark:border">
                <figure>
                    <img
                        src={item.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline p-6 rounded-xl">{item.price}</div>
                        <button className="btn btn-outline btn-secondary">Buy Now</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards