'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">

				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-16 text-center"
				>
					Featured Projects
				</motion.h2>

				<div className="space-y-16">

					{/* ===================================================== */}
					{/* Korean Quiz Battle */}
					{/* ===================================================== */}

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">

							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

								<div className="space-y-6">

									<div>
										<h3 className="text-2xl font-bold mb-4">
											Korean Quiz Battle
										</h3>

										<p className="text-gray-400">
											A real-time multiplayer quiz and card battle game
											where players answer Korean language questions
											to compete against other players.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">

										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">
												Frontend
											</h4>

											<ul className="space-y-2 text-sm text-gray-400">
												<li>• React.js</li>
												<li>• Vite</li>
												<li>• Real-time game UI</li>
												<li>• WebSocket client</li>
											</ul>
										</div>

										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">
												Backend
											</h4>

											<ul className="space-y-2 text-sm text-gray-400">
												<li>• NestJS</li>
												<li>• Socket.IO</li>
												<li>• MySQL & MongoDB</li>
												<li>• JWT Authentication</li>
											</ul>
										</div>

									</div>

									<div className="space-y-3">

										<h4 className="text-sm font-semibold text-teal-400">
											Key Features
										</h4>

										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Real-time multiplayer matches</li>
											<li>• Room & matchmaking system</li>
											<li>• Quiz question management</li>
											<li>• Card battle & leaderboard system</li>
										</ul>

									</div>

									<div className="flex flex-wrap gap-2 pt-2">
										{[
											'NestJS',
											'React',
											'WebSocket',
											'Socket.IO',
											'MySQL',
											'MongoDB',
											'Docker',
										].map((tech) => (
											<span
												key={tech}
												className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-400"
											>
												{tech}
											</span>
										))}
									</div>

									<div className="flex gap-4 pt-2">
										<a
											href="https://gamengoaingu.com"
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
										>
											View Website →
										</a>
									</div>

								</div>

								{/* Architecture */}
								<div className="bg-black/30 rounded-xl p-6">

									<h4 className="text-sm font-semibold text-gray-400 mb-4">
										Real-time Architecture
									</h4>

									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">

										<svg
											className="w-full h-full"
											viewBox="0 0 400 300"
										>

											{/* Players */}
											<rect
												x="20"
												y="20"
												width="170"
												height="45"
												rx="4"
												className="fill-blue-500/20 stroke-blue-500"
												strokeWidth="1"
											/>

											<rect
												x="210"
												y="20"
												width="170"
												height="45"
												rx="4"
												className="fill-blue-500/20 stroke-blue-500"
												strokeWidth="1"
											/>

											<text
												x="105"
												y="47"
												textAnchor="middle"
												className="fill-gray-400 text-[12px]"
											>
												Player A
											</text>

											<text
												x="295"
												y="47"
												textAnchor="middle"
												className="fill-gray-400 text-[12px]"
											>
												Player B
											</text>

											{/* WebSocket */}
											<rect
												x="20"
												y="100"
												width="360"
												height="45"
												rx="4"
												className="fill-purple-500/20 stroke-purple-500"
												strokeWidth="1"
											/>

											<text
												x="200"
												y="127"
												textAnchor="middle"
												className="fill-gray-400 text-[12px]"
											>
												NestJS + Socket.IO
											</text>

											{/* Game */}
											<rect
												x="20"
												y="175"
												width="170"
												height="45"
												rx="4"
												className="fill-teal-500/20 stroke-teal-500"
												strokeWidth="1"
											/>

											<rect
												x="210"
												y="175"
												width="170"
												height="45"
												rx="4"
												className="fill-teal-500/20 stroke-teal-500"
												strokeWidth="1"
											/>

											<text
												x="105"
												y="202"
												textAnchor="middle"
												className="fill-gray-400 text-[12px]"
											>
												Game Logic
											</text>

											<text
												x="295"
												y="202"
												textAnchor="middle"
												className="fill-gray-400 text-[12px]"
											>
												Quiz System
											</text>

											{/* Database */}
											<rect
												x="20"
												y="250"
												width="170"
												height="30"
												rx="4"
												className="fill-blue-500/20 stroke-blue-500"
												strokeWidth="1"
											/>

											<rect
												x="210"
												y="250"
												width="170"
												height="30"
												rx="4"
												className="fill-purple-500/20 stroke-purple-500"
												strokeWidth="1"
											/>

											<text
												x="105"
												y="270"
												textAnchor="middle"
												className="fill-gray-400 text-[12px]"
											>
												MySQL
											</text>

											<text
												x="295"
												y="270"
												textAnchor="middle"
												className="fill-gray-400 text-[12px]"
											>
												MongoDB
											</text>

											{/* Lines */}
											<g
												className="stroke-gray-600"
												strokeWidth="1"
											>
												<line x1="105" y1="65" x2="105" y2="100" />
												<line x1="295" y1="65" x2="295" y2="100" />
												<line x1="105" y1="145" x2="105" y2="175" />
												<line x1="295" y1="145" x2="295" y2="175" />
												<line x1="105" y1="220" x2="105" y2="250" />
												<line x1="295" y1="220" x2="295" y2="250" />
											</g>

										</svg>

									</div>
								</div>

							</div>
						</div>
					</motion.div>


					{/* ===================================================== */}
					{/* Korean Learning Platform */}
					{/* ===================================================== */}

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">

							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

								<div className="space-y-6">

									<div>
										<h3 className="text-2xl font-bold mb-4">
											Korean Learning Platform
										</h3>

										<p className="text-gray-400">
											A Korean language learning platform providing video
											lessons, exams, quizzes and interactive learning
											features for EPS and TOPIK learners.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">

										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">
												Application
											</h4>

											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Yii2 Framework</li>
												<li>• JavaScript</li>
												<li>• Responsive UI</li>
												<li>• Video learning</li>
											</ul>
										</div>

										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">
												Backend & Data
											</h4>

											<ul className="space-y-2 text-sm text-gray-400">
												<li>• PHP / Yii2</li>
												<li>• MySQL</li>
												<li>• WebSocket</li>
												<li>• REST APIs</li>
											</ul>
										</div>

									</div>

									<div className="space-y-3">

										<h4 className="text-sm font-semibold text-teal-400">
											Key Features
										</h4>

										<ul className="space-y-2 text-sm text-gray-400">
											<li>• EPS & TOPIK learning content</li>
											<li>• Video lessons and examinations</li>
											<li>• Interactive quiz system</li>
											<li>• Real-time features using WebSocket</li>
										</ul>

									</div>

									<div className="flex flex-wrap gap-2 pt-2">
										{[
											'PHP',
											'Yii2',
											'MySQL',
											'JavaScript',
											'WebSocket',
											'REST API',
										].map((tech) => (
											<span
												key={tech}
												className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-400"
											>
												{tech}
											</span>
										))}
									</div>

									<div className="flex gap-4 pt-2">
										<a
											href="https://www.videotienghan.com"
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
										>
											Visit Website →
										</a>
									</div>

								</div>

								{/* Architecture */}
								<div className="bg-black/30 rounded-xl p-6">

									<h4 className="text-sm font-semibold text-gray-400 mb-4">
										Application Architecture
									</h4>

									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">

										<svg
											className="w-full h-full"
											viewBox="0 0 400 300"
										>

											{/* Client */}
											<rect
												x="20"
												y="20"
												width="360"
												height="45"
												rx="4"
												className="fill-blue-500/20 stroke-blue-500"
												strokeWidth="1"
											/>

											<text
												x="200"
												y="47"
												textAnchor="middle"
												className="fill-gray-400 text-[12px]"
											>
												Web Browser
											</text>

											{/* Application */}
											<rect
												x="20"
												y="90"
												width="360"
												height="45"
												rx="4"
												className="fill-purple-500/20 stroke-purple-500"
												strokeWidth="1"
											/>

											<text
												x="200"
												y="117"
												textAnchor="middle"
												className="fill-gray-400 text-[12px]"
											>
												PHP / Yii2 Application
											</text>

											{/* Services */}
											<rect
												x="20"
												y="160"
												width="170"
												height="45"
												rx="4"
												className="fill-teal-500/20 stroke-teal-500"
												strokeWidth="1"
											/>

											<rect
												x="210"
												y="160"
												width="170"
												height="45"
												rx="4"
												className="fill-teal-500/20 stroke-teal-500"
												strokeWidth="1"
											/>

											<text
												x="105"
												y="187"
												textAnchor="middle"
												className="fill-gray-400 text-[12px]"
											>
												REST API
											</text>

											<text
												x="295"
												y="187"
												textAnchor="middle"
												className="fill-gray-400 text-[12px]"
											>
												WebSocket
											</text>

											{/* Database */}
											<rect
												x="20"
												y="230"
												width="360"
												height="45"
												rx="4"
												className="fill-blue-500/20 stroke-blue-500"
												strokeWidth="1"
											/>

											<text
												x="200"
												y="257"
												textAnchor="middle"
												className="fill-gray-400 text-[12px]"
											>
												MySQL Database
											</text>

											{/* Lines */}
											<g
												className="stroke-gray-600"
												strokeWidth="1"
											>
												<line x1="200" y1="65" x2="200" y2="90" />
												<line x1="105" y1="135" x2="105" y2="160" />
												<line x1="295" y1="135" x2="295" y2="160" />
												<line x1="105" y1="205" x2="105" y2="230" />
												<line x1="295" y1="205" x2="295" y2="230" />
											</g>

										</svg>

									</div>
								</div>

							</div>
						</div>
					</motion.div>


					{/* ===================================================== */}
					{/* TeeZone - E-commerce */}
					{/* ===================================================== */}

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

								<div className="space-y-6">

									<div>
										<h3 className="text-2xl font-bold mb-4">
											TeeZone – Fashion E-commerce
										</h3>

										<p className="text-gray-400">
											A full-stack fashion e-commerce platform with product
											management, authentication, shopping cart, orders,
											payments, reviews and role-based access control.
										</p>
									</div>

									{/* Technology */}
									<div className="grid grid-cols-2 gap-6">

										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">
												Frontend
											</h4>

											<ul className="space-y-2 text-sm text-gray-400">
												<li>• React.js</li>
												<li>• Vite</li>
												<li>• Responsive UI</li>
												<li>• REST API Integration</li>
											</ul>
										</div>

										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">
												Backend
											</h4>

											<ul className="space-y-2 text-sm text-gray-400">
												<li>• NestJS & TypeScript</li>
												<li>• Prisma ORM</li>
												<li>• MySQL</li>
												<li>• JWT Authentication</li>
											</ul>
										</div>

									</div>

									{/* Deployment */}
									<div className="space-y-3">

										<h4 className="text-sm font-semibold text-teal-400">
											Deployment & Features
										</h4>

										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Role-based access control</li>
											<li>• Product & order management</li>
											<li>• Docker / Linux deployment</li>
											<li>• Azure deployment</li>
										</ul>

									</div>

									{/* Tech badges */}
									<div className="flex flex-wrap gap-2 pt-2">
										{[
											'NestJS',
											'React',
											'TypeScript',
											'MySQL',
											'Prisma',
											'JWT',
											'Docker',
											'Azure',
										].map((tech) => (
											<span
												key={tech}
												className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-400"
											>
												{tech}
											</span>
										))}
									</div>

									{/* Links */}
									<div className="flex gap-4 pt-2">
										<a
											href="https://github.com/truonggiang11724/fashion_shop"
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
										>
											View GitHub →
										</a>
									</div>

								</div>

								{/* Architecture */}
								<div className="bg-black/30 rounded-xl p-6">

									<h4 className="text-sm font-semibold text-gray-400 mb-4">
										System Architecture
									</h4>

									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">

										<svg
											className="w-full h-full"
											viewBox="0 0 400 300"
										>

											{/* Frontend */}
											<rect
												x="20"
												y="20"
												width="360"
												height="45"
												rx="4"
												className="fill-blue-500/20 stroke-blue-500"
												strokeWidth="1"
											/>

											<text
												x="200"
												y="47"
												textAnchor="middle"
												className="fill-gray-400 text-[12px]"
											>
												React.js Frontend
											</text>

											{/* Backend */}
											<rect
												x="20"
												y="90"
												width="360"
												height="45"
												rx="4"
												className="fill-purple-500/20 stroke-purple-500"
												strokeWidth="1"
											/>

											<text
												x="200"
												y="117"
												textAnchor="middle"
												className="fill-gray-400 text-[12px]"
											>
												NestJS REST API
											</text>

											{/* Prisma */}
											<rect
												x="20"
												y="160"
												width="170"
												height="45"
												rx="4"
												className="fill-teal-500/20 stroke-teal-500"
												strokeWidth="1"
											/>

											<rect
												x="210"
												y="160"
												width="170"
												height="45"
												rx="4"
												className="fill-teal-500/20 stroke-teal-500"
												strokeWidth="1"
											/>

											<text
												x="105"
												y="187"
												textAnchor="middle"
												className="fill-gray-400 text-[12px]"
											>
												Prisma ORM
											</text>

											<text
												x="295"
												y="187"
												textAnchor="middle"
												className="fill-gray-400 text-[12px]"
											>
												Authentication
											</text>

											{/* Database */}
											<rect
												x="20"
												y="230"
												width="360"
												height="45"
												rx="4"
												className="fill-blue-500/20 stroke-blue-500"
												strokeWidth="1"
											/>

											<text
												x="200"
												y="257"
												textAnchor="middle"
												className="fill-gray-400 text-[12px]"
											>
												MySQL Database
											</text>

											{/* Lines */}
											<g
												className="stroke-gray-600"
												strokeWidth="1"
											>
												<line x1="200" y1="65" x2="200" y2="90" />
												<line x1="105" y1="135" x2="105" y2="160" />
												<line x1="295" y1="135" x2="295" y2="160" />
												<line x1="105" y1="205" x2="105" y2="230" />
												<line x1="295" y1="205" x2="295" y2="230" />
											</g>

										</svg>

									</div>
								</div>

							</div>
						</div>
					</motion.div>

				</div>
			</div>
		</section>
	);
}
