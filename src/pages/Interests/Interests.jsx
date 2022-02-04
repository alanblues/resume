import React from 'react';
import Section from '../../components/Section/Section';

export default function Interests() {
    return (
        <>
            <Section text="LANGUAGES" />
            <ul className="mt-4">
                <li>Spanish <small>native</small></li>
                <li>English <small>madium/advanced</small></li>
            </ul>

            <section className="mt-5">
                <Section text="HOBIES" />
                <ul className="mt-4">
                    <li>Technologies</li>
                    <li>Sports</li>
                    <li>Books</li>
                    <li>Music</li>
                </ul>
            </section>
        </>
    );
};