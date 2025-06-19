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
            <Head title="Данила Скворцов - Fullstack разработчик" />
            
            <div className="App">
                <Header />
                
                <main>
                    <HeroSection data={portfolioData?.hero} />
                    <AboutSection data={portfolioData?.about} />
                    <SkillsSection data={portfolioData?.skills} />
                    <ExperienceSection data={portfolioData?.experience} />
                    <ProjectsSection data={portfolioData?.projects} />
                    <ContactSection data={portfolioData?.contact} />
                </main>
            </div>
        </>
    );
}

