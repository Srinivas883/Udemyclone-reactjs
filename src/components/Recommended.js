import c1 from "../assets/images/C1.jpg"
import c2 from "../assets/images/C2.jpg"
import c3 from "../assets/images/C3.jpg"
import c4 from "../assets/images/C4.jpg"

function Recommended() {
    return (
        <div className="Recommended">
            <h1 className="Recommended__title">Recommended for you</h1>
            <p>Pick the best fit</p>
            <div className="Recommended__container">

                <div className="course-card">
                    <img src={c1} alt="image not found"/>
                        <h3>2023 Python Data Visulation Master className</h3>
                        <p>Col Steele</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>449 <del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={c2} alt="image not found"/>
                        <h3>Webdevelopment Boot camp 2023</h3>
                        <p>Col Steele</p>
                        <p>3.9 ⭐⭐⭐</p>
                        <p>449 <del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={c3} alt="image not found"/>
                        <h3>Basic to Advance programming with EMC</h3>
                        <p>Col Steele</p>
                        <p>4.8 ⭐⭐⭐⭐</p>
                        <p>449 <del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={c4} alt="image not found"/>
                        <h3>Master UI/UX designing with Figma</h3>
                        <p>Col Steele</p>
                        <p>3.9 ⭐⭐⭐</p>
                        <p>449 <del>1999</del></p>
                </div>
            </div>
        </div>
    )
}


export default Recommended