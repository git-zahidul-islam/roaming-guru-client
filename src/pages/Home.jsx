import Footer from "../components/footer/Footer";


const Home = () => {
    return (
        <div className="">
            <div className="h-[50vh] w-full bg-green-400 flex items-center justify-center">
                <h1>this is banner</h1>
            </div>
            <div className="h-[60vh] container mx-auto bg-green-300 flex justify-center items-center">
                <h1>here will show Tourists Spots 6 data</h1>
            </div>
            <div className="bg-green-200 h-[45vh]">
                <h1>this is Countries Section</h1>
            </div>
            <div className="h-[50vh] bg-green-100 flex justify-center items-center">
                <h1>extra section 1</h1>
            </div>
            <div className="h-[50vh] bg-green-200 flex justify-center items-center">
                <h1>extra section 2</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;