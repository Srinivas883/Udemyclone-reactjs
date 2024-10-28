
import saleimg from "../assets/images/Sale-image.png"

function Saleimage() {
    return (
        <div className="sale-image">

            <img src={saleimg} alt="image not availabe "/>
                <div className="sale-image__offer">
                    <h2>Udemy FLASH sale! 24 hours left</h2>
                    <p>Get the top courses for just 499.
                        Just 24 hours left, but life time
                        offer!!</p>

                </div>
        </div>
    )
}

export default Saleimage