import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "REP.js",
    description:
      "A web application for gym enthusiasts to calculate and track their Estimated One-Rep Max (E1RM). Designed for auto-regulating and optimizing training, it features profile management and interactive data visualization.",
    link: "https://repjs.vercel.app", // External link or the specific URL for this project
  },
  {
    id: 2,
    name: "Pictory",
    description: "In the works, stay tuned!",
    link: "#", // Placeholder link for the project
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Projects
      </h1>
      {projects.map((project) => (
        <Link
          key={project.id}
          href={project.link}
          className="block hover:bg-gray-100 dark:hover:bg-neutral-700 transition-all duration-300 rounded-lg p-6 mb-4 border border-gray-300 dark:border-neutral-600"
        >
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
                {project.name}
              </p>
              <p className="text-gray-600 dark:text-neutral-300">
                {project.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

