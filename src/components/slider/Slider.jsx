import slide1 from '../../../public/image/slider1.jpg'
import slide2 from '../../../public/image/slide2.jpg'
import slide3 from '../../../public/image/slide3.jpg'
import { Typewriter } from 'react-simple-typewriter'


const Slider = () => {
    return (
        <div>
            <div className="carousel w-full lg:h-[80vh] md:h-[70vh] h-[50vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slide1} className="h-full w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute top-0 h-full flex flex-col justify-center lg:left-28 md:left-24 left-20'>
                        <div className='space-y-2'>
                            <h1 className='md:text-4xl font-bold text-white'>
                                Discover the Hidden of {' '}
                                <span style={{ color: 'red', backgroundColor: "white" , fontWeight: 'bold' }}>
                                    {/* Style will be inherited from the parent element */}
                                    <Typewriter
                                        words={['Country!', 'Country!']}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                        // onLoopDone={handleDone}
                                        // onType={handleType}
                                    />
                                </span>
                            </h1>
                            <p className='md:text-lg w-4/6 text-gray-500 bg-[#EEF5FF] ps-2 border-l-4 border-red-600'>Explore Countrie's Rich Culture, Scenic Landscapes, and Culinary Delights!.</p>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slide2} className="h-full w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute top-0 h-full flex flex-col justify-center lg:left-28 md:left-24 left-20'>
                        <div className='space-y-2'>
                            <h1 className='md:text-4xl font-bold text-white'>
                                Discover the Hidden of {' '}
                                <span style={{ color: 'red', backgroundColor: "white", fontWeight: 'bold' }}>
                                    {/* Style will be inherited from the parent element */}
                                    <Typewriter
                                        words={['Country!', 'Country!']}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />
                                </span>
                            </h1>
                            <p className='md:text-lg w-4/6 text-gray-500 bg-[#EEF5FF] ps-2 border-l-4 border-red-600'>Explore Countrie's Rich Culture, Scenic Landscapes, and Culinary Delights!.</p>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slide3} className="h-full w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute top-0 h-full flex flex-col justify-center lg:left-28 md:left-24 left-20'>
                        <div className='space-y-2'>
                            <h1 className='md:text-4xl font-bold text-white'>
                                Discover the Hidden of {' '}
                                <span style={{ color: 'red', backgroundColor: "white", fontWeight: 'bold' }}>
                                    {/* Style will be inherited from the parent element */}
                                    <Typewriter
                                        words={['Country!', 'Country!']}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />
                                </span>
                            </h1>
                            <p className='md:text-lg w-4/6 text-gray-500 bg-[#EEF5FF] ps-2 border-l-4 border-red-600'>Explore Countrie's Rich Culture, Scenic Landscapes, and Culinary Delights!.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;