import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

// Components
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import SkillsSection from '../Components/SkillsSection';
import ExperienceSection from '../Components/ExperienceSection';
import ProjectsSection from '../Components/ProjectsSection';
import ContactSection from '../Components/ContactSection';

export default function Portfolio({ portfolioData }) {
    return (
        <>
            <Head title="Данила Скворцов - Fullstack разработчик">
                <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
                <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="48x48" href="/favicons/favicon-48x48.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="192x192" href="/favicons/favicon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="512x512" href="/favicons/favicon-512x512.png"/>
            </Head>

            <div className="App">
                <Header/>

                <main>
                    <HeroSection data={portfolioData?.hero}/>
                    <AboutSection data={portfolioData?.about}/>
                    <SkillsSection data={portfolioData?.skills}/>
                    <ExperienceSection data={portfolioData?.experience}/>
                    <ProjectsSection data={portfolioData?.projects}/>
                    <ContactSection data={portfolioData?.contact}/>
                </main>
            </div>
        </>
    );
}

