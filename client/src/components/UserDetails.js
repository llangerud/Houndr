const UserDetails = ({ profile }) => {
    return (
        <div className="profile-details">
            <h4>{profile.title}</h4>
            <p>Name: {profile.name}</p>
            <p> {profile.image}</p>
            <p>Breed: {profile.breed}</p>
            <p>Description: {profile.description}</p>
            <p>{profile.createdAt}</p>
        </div>
    )
}

export default UserDetails;