'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-5xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="space-y-12"
				>
					{/* Heading */}
					<div className="text-center space-y-4">
						<h2 className="text-3xl md:text-4xl font-bold">
							Experience
						</h2>

						<p className="text-gray-400 max-w-2xl mx-auto">
							My professional experience and hands-on work in web development.
						</p>
					</div>

					{/* Experience Item */}
					<div className="relative">
						{/* Timeline line */}
						<div className="absolute left-[7px] top-2 bottom-0 w-px bg-gray-800 hidden sm:block" />

						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="relative sm:pl-10"
						>
							{/* Timeline dot */}
							<div className="hidden sm:block absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-950" />

							<div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8">
								<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
									<div>
										<h3 className="text-xl md:text-2xl font-bold">
											Full-stack Developer
										</h3>

										<p className="text-blue-400 font-medium mt-1">
											Quantum IQ AI Co., Ltd
										</p>
									</div>

									<span className="text-sm text-gray-500 whitespace-nowrap">
										10/2025 – Present
									</span>
								</div>

								<p className="text-gray-400 leading-relaxed mb-6">
									Worked on the development and maintenance of a Korean
									language learning platform, contributing to both backend
									and frontend features and helping improve the overall
									performance and user experience.
								</p>

								<div className="grid md:grid-cols-2 gap-8">
									{/* Responsibilities */}
									<div>
										<h4 className="text-sm font-semibold text-blue-400 mb-4">
											Responsibilities
										</h4>

										<ul className="space-y-3 text-sm text-gray-400">
											<li>
												• Developed and maintained web features using
												PHP/Yii2 and JavaScript.
											</li>

											<li>
												• Built and integrated REST APIs for learning
												content, quizzes, user accounts, and other
												platform features.
											</li>

											<li>
												• Implemented real-time features using WebSocket.
											</li>

											<li>
												• Designed and optimized MySQL queries and
												database structures.
											</li>

											<li>
												• Maintained and improved existing features based
												on user and business requirements.
											</li>
										</ul>
									</div>

									{/* Technical Experience */}
									<div>
										<h4 className="text-sm font-semibold text-purple-400 mb-4">
											Technical Experience
										</h4>

										<div className="flex flex-wrap gap-2">
											{[
												'PHP',
												'Yii2',
												'JavaScript',
												'Node.js',
												'WebSocket',
												'REST API',
												'MySQL',
												'Linux',
												'Nginx',
												'Git',
											].map((tech) => (
												<span
													key={tech}
													className="px-3 py-1.5 text-sm rounded-lg bg-gray-800 text-gray-300 border border-gray-700"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>

								{/* Highlights */}
								<div className="mt-8 pt-6 border-t border-gray-800">
									<h4 className="text-sm font-semibold text-teal-400 mb-4">
										Key Highlights
									</h4>

									<div className="grid sm:grid-cols-3 gap-4">
										<div>
											<p className="text-sm font-medium text-gray-200">
												Full-stack Development
											</p>
											<p className="text-xs text-gray-500 mt-1">
												Backend, frontend & API development
											</p>
										</div>

										<div>
											<p className="text-sm font-medium text-gray-200">
												Real-time Systems
											</p>
											<p className="text-xs text-gray-500 mt-1">
												WebSocket-based interactive features
											</p>
										</div>

										<div>
											<p className="text-sm font-medium text-gray-200">
												Production Environment
											</p>
											<p className="text-xs text-gray-500 mt-1">
												Linux, Nginx & server maintenance
											</p>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}