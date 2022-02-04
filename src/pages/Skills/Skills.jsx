import React from 'react';
import Section from '../../components/Section/Section';

const valor = 90;
export default function () {
    return (
        <>
            <div className="mt-5">
                <Section text="PROFESSIONAL SKILLS" />

                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="skill">
                            <span className="skill_name">HTML</span>
                            <div className="progress mt-2">
                                <div className="progress-bar"
                                    role="progressbar"
                                    style={{ width: valor+"%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100">
                                    {valor}%
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="skill">
                            <span className="skill_name">HTML</span>
                            <div className="progress mt-2">
                                <div className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "75%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100">
                                    25%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};