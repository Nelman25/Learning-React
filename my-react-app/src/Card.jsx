import profilePic from "./assets/FormalPic200x200.jpg"

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="my image" />
            <h2 className="card-title">Jonel Villaver</h2>
            <p className="card-text">I am a Freshman student at National University - Manila, pursuing a Bachelor of Science in Information Technology with a major in Mobile and Web Applications
            </p>
        </div>
    );
}

export default Card