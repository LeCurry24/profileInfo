const ProfilePhoto = ({images}) => {
    return (
        <>
        <h2>Profile</h2>
        {images.length > 0 ? (
             <div style={{ maxWidth: 320, height: 'auto' }}>
                {images.map((image) =>(
                    <img
                    src={URL.createObjectURL(image)}
                    style={{ width: '50%' }}
                    key={image.lastModified}
                    />
                ))}
            </div>
        ) : ( 
            <p>No Profile Photo</p>   
        )}
        </>
    )
}
export default ProfilePhoto