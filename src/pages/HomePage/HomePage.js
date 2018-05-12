import React from 'react';
import './HomePage.css';

const HomePage = () => (
    <section className='container body'>
        <div className='row mt-3 mb-3'>
            <img src='../../../../images/me.jpg' className='mx-auto self'/>
        </div>
        <div className='row'>
            <p className='text-center info'>
            Highly organized and detail-oriented Web Developer with a passion for learning and using technologies to solve problems and improve upon existing methods. Uses  prior experience in the arts and communications to think outside of the box and appreciate input from others. Recent graduate of the Coding Bootcamp at UNC Charlotte where I utilized my high energy, work ethic, focused organization and agile learning skills to excel at all projects given. Passionate about solving programming challenges from different angles, and collaborating with others to create innovative web applications.
            </p>
        </div>
        <div className='row'>
            <button className='btn mx-auto'>
                <img />Email
            </button>
        </div>
    </section>
);

export default HomePage;