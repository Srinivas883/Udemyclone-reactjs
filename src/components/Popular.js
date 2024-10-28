import c5 from "../assets/images/C5.jpg"
import c6 from "../assets/images/C6.jpg"
import c7 from "../assets/images/C7.jpg"
import c8 from "../assets/images/C8.jpg"
import c9 from "../assets/images/C9.jpg"
import c10 from "../assets/images/C10.jpg"
import c11 from "../assets/images/C11.jpg"
import c12 from "../assets/images/C12.jpg"

function Popular(){
    return(
        <div className="popular">
        <h1 className="popular__title">Most popular</h1>
        <p className="popular__subtitle">Pick the best fit</p>
        <div className="popular__container">

            <div className="course-card">
                <img src={c5} alt=""/>
                <h3>2023 Python Data Visulation Master className</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={c6} alt=""/>
                <h3>Webdevelopment Boot camp 2023</h3>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={c7} alt=""/>
                <h3>Basic to Advance programming with EMC</h3>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={c8} alt=""/>
                <h3>Master UI/UX designing with Figma</h3>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={c9} alt=""/>
                <h3>2023 Python Data Visulation Master className</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={c10} alt=""/>
                <h3>Webdevelopment Boot camp 2023</h3>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={c11} alt=""/>
                <h3>Basic to Advance programming with EMC</h3>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={c12}alt=""/>
                <h3>Master UI/UX designing with Figma</h3>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

        </div>
    </div>
    )
}

export default Popular