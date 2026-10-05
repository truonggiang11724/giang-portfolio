'use client';

import { motion } from 'framer-motion';

export default function AboutMeSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-5xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="space-y-10"
				>
					{/* Section Heading */}
					<div className="text-center space-y-4">
						<h2 className="text-3xl md:text-4xl font-bold">
							About Me
						</h2>

						<p className="text-gray-400 max-w-2xl mx-auto">
							A little bit about my background, experience, and what I enjoy building.
						</p>
					</div>

					{/* Content */}
					<div className="grid md:grid-cols-2 gap-10 items-center">
						{/* Introduction */}
						<div className="space-y-5">
							<h3 className="text-2xl font-semibold">
								Hi, I&apos;m Giang 👋
							</h3>

							<p className="text-gray-400 leading-relaxed">
								I&apos;m a Junior Full-stack Developer and a recent IT graduate
								with hands-on experience building and maintaining web
								applications.
							</p>

							<p className="text-gray-400 leading-relaxed">
								My main focus is backend and full-stack development. I work
								primarily with NestJS, Node.js, PHP, Laravel, Yii2, ReactJS,
								and MySQL. I also have experience working with MongoDB,
								Docker, Linux, Nginx, and Azure for deployment and server
								management.
							</p>

							<p className="text-gray-400 leading-relaxed">
								I enjoy solving practical problems, learning new technologies,
								and building applications that are reliable, maintainable,
								and easy to scale.
							</p>
						</div>

						{/* Skills Overview */}
						<div className="grid grid-cols-2 gap-4">
							<div className="p-5 rounded-xl border border-gray-800 bg-gray-900/40">
								<h4 className="font-semibold mb-2">Frontend</h4>
								<p className="text-sm text-gray-400">
									ReactJS · JavaScript · TypeScript · Tailwind CSS
								</p>
							</div>

							<div className="p-5 rounded-xl border border-gray-800 bg-gray-900/40">
								<h4 className="font-semibold mb-2">Backend</h4>
								<p className="text-sm text-gray-400">
									NestJS · Node.js · PHP · Laravel · Yii2
								</p>
							</div>

							<div className="p-5 rounded-xl border border-gray-800 bg-gray-900/40">
								<h4 className="font-semibold mb-2">Database</h4>
								<p className="text-sm text-gray-400">
									MySQL · MongoDB · Prisma ORM
								</p>
							</div>

							<div className="p-5 rounded-xl border border-gray-800 bg-gray-900/40">
								<h4 className="font-semibold mb-2">DevOps</h4>
								<p className="text-sm text-gray-400">
									Docker · Linux · Nginx · Azure · Git
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
