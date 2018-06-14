import React from 'react';
import './HomePage.css';
import Me from '../../me.json'

const HomePage = () => (
    <section className='container body'>
        <div className='row mt-5 mb-5'>

            <div className='col-sm-6 col-md-6'>
                <img src={Me[0].me2} className='mx-auto self' alt='Daniel Doyle'/>
            </div>
            <div className='col-sm-6 col-md-6'>
                <p className='text-center info'>
                Highly organized and detail-oriented Web Developer with a passion for learning and using technologies to solve problems and improve upon existing methods. Uses  prior experience in the arts and communications to think outside of the box and appreciate input from others. Recent graduate of the Coding Bootcamp at UNC Charlotte where I utilized my high energy, work ethic, focused organization and agile learning skills to excel at all projects given. Passionate about solving programming challenges from different angles, and collaborating with others to create innovative web applications.
                </p>
            </div>
        </div>
        <div className='row emailBtn'>
            <button className='btn mx-auto mt-4 mb-4'>
                <a className='email' href='mailto:dbdoyle182@gmail.com' target='_top' rel='noopener noreferrer'><i class="fa fa-envelope"></i> Email</a>
            </button>
        </div>
    </section>
);

export default HomePage;