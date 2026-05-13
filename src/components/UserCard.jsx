import React from 'react'

const UserCard = ({ name, age, handleDelete }) => {
    return (
        <div className="card">
            <div className="card-body d-flex flex-column">
                <div className="card-title d-flex justify-content-center">
                    <span className='fw-bold'>{name}</span>
                </div>
                <div className="card-text d-flex justify-content-center">
                    <span>{age}</span>
                </div>
                <button onClick={handleDelete} className='btn btn-danger'>Delete user</button>
            </div>
        </div>
    )
}

export default UserCard