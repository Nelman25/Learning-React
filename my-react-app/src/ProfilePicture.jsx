
function ProfilePicture() {
    const imageUrl = './src/assets/CryingCat.png';
    const handleClick = (e) => e.target.style.display = "none";
    
    return(<img onClick={(e) => handleClick(e)} src={imageUrl}></img>);
}
export default ProfilePicture