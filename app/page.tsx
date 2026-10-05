'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import AboutMeSection from './components/AboutMeSection';
import ExperienceSection from './components/ExperienceSection';

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
			<HeroSection />
			<AboutMeSection />
			<ExperienceSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}
