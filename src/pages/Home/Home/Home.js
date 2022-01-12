import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Contact from '../Contact/Contact';
import CoverArea from '../CoverArea/CoverArea';
import News from '../News/News';
import Portfollio from '../Portfollio/Portfollio';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <CoverArea></CoverArea>
            <About></About>
            <Services></Services>
            <Portfollio></Portfollio>
            <News></News>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;