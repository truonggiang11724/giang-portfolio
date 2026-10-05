'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);

	return (
		<section className="min-h-screen relative overflow-hidden py-24 md:py-0">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
			</div>

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-8 md:mb-12"
				>
					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
						<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500" style={{ lineHeight: '1.3' }}>
							Nguyen Truong Giang
						</h1>

						<h2 className="text-2xl md:text-4xl font-bold text-white">
							Junior Full Stack Developer
						</h2>

						<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
							I build full-stack web applications with a focus on backend development,
							real-time systems, databases, and scalable APIs.
						</p>

						<p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
							Experienced with PHP, Node.js, React, MySQL, MongoDB, WebSocket,
							Docker, Linux, and Azure.
						</p>
					</div>

					<div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">
							Node.js & NestJS
						</span>

						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">
							React.js
						</span>

						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm">
							PHP & Yii2
						</span>

						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">
							MySQL & MongoDB
						</span>

						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">
							Docker & Azure
						</span>
					</div>
				</motion.div>

				{/* Interactive Development Stack */}
				<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">

							{/* Frontend */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'frontend'
										? 'bg-blue-500/20 border-blue-500/50'
										: 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('frontend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400">
									Frontend Development
								</h3>

								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										React.js & Modern UI
									</li>

									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Responsive Web Applications
									</li>

									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										API Integration
									</li>
								</ul>
							</div>

							{/* Backend */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'backend'
										? 'bg-purple-500/20 border-purple-500/50'
										: 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('backend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400">
									Backend Development
								</h3>

								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										NestJS, Node.js & PHP
									</li>

									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										RESTful APIs & Authentication
									</li>

									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										WebSocket & Real-time Systems
									</li>
								</ul>
							</div>

							{/* DevOps */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'devops'
										? 'bg-teal-500/20 border-teal-500/50'
										: 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('devops')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-400">
									DevOps & Deployment
								</h3>

								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Docker & Linux
									</li>

									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Nginx & Server Deployment
									</li>

									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Azure Cloud Deployment
									</li>
								</ul>
							</div>

						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
