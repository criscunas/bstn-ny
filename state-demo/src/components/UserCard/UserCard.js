import './UserCard.scss'

function UserCard ({first_name, last_name, id, handler}) {
    return (
        <div className="card">
            <h1>{first_name}</h1>
            <p>{last_name}</p>
            <p>{id}</p>

            <div>
                {/* handler is our function being passed down from App.js */}
                <button onClick={() => handler(first_name, last_name, id)}>
                    Change User
                </button>
            </div>
        </div>
    )
}

export default UserCard