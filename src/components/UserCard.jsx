import React from 'react'

const UserCard = ({ name, email }) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-title d-flex justify-content-center">
                    <span className='fw-bold'>{name}</span>
                </div>
                <div className="card-text d-flex justify-content-center">
                    <span>{email}</span>
                </div>
            </div>
        </div>
    )
}

export default UserCard