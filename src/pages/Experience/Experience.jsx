import React from 'react';
import Section from '../../components/Section/Section';

export default function Experience() {
    return (
        <>
            <div className="work">
                <Section text="WORK SPERIENCE" />

                <div className="apcard mt-4">
                    <section className="apcard-company">
                        <h5 className="mr-5">Frontend Developer</h5>
                        <small>at Creative Agency</small>
                    </section>
                    <span className="apcard-time">May, 2015 - Preset</span>
                    <p className="mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi pariatur
                        asperiores nemo repudiandae! Ratione doloribus earum, laborum eaque sint mollitia?
                    </p>
                </div>

                <div className="apcard mt-3">
                    <section className="apcard-company">
                        <h5 className="mr-5">Frontend Developer</h5>
                        <small>at Creative Agency</small>
                    </section>
                    <span className="apcard-time">June, 2013 - May, 2015</span>
                    <p className="mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi pariatur
                        asperiores nemo repudiandae! Ratione doloribus earum, laborum eaque sint mollitia?
                    </p>
                </div>
            </div>
        </>
    );
};