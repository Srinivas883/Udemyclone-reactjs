// import all componenets 
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Saleimage from "./components/Saleimage";
import Recommended from "./components/Recommended"
import Topic from "./components/Topic";
import Popular from "./components/Popular";
import Footers from "./components/footer";

function App(){
    return(
        <>
        
        <Navbar/>
        <Categories/>
        <Saleimage/>
        <Recommended/>
        <Topic/>
        <Popular/>
        <Footers/>
        
        </>
    )
}

export default App