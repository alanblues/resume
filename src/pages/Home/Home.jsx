import React from 'react';
import HeaderName from '../../components/HeaderName/HeaderName';
import Layout from '../../layout/Layout';
import Experience from '../Experience/Experience';
import Interests from '../Interests/Interests';
import Skills from '../Skills/Skills';

export default function Home() {
    return (
        <Layout>
            <div className="home">
                <img src="https://picsum.photos/200/300" />
                <h1>Alan Parra</h1>
                <h2>Web Developer & Aspiring Mobile Developer</h2>
                <p>I make lots of modules, CLI tools and apps. Mostly React, Angular & Node.js.</p>
            </div>

            <div className="row mt-5">
                <div className="col-lg-9 mt-4">
                    <Experience />
                    <Skills />
                </div>
                <div className="col-lg-2 offset-lg-1 mt-4">
                    <Interests />
                </div>
            </div>


            <br /><br /><br /><br /><br />
        </Layout>
    );
};


{/* <About /> */ }
{/* <Skills /> */ }
{/* <Education /> */ }