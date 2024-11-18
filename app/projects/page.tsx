import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "REP.js",
    description:
      "A web application for gym enthusiasts to calculate and track their Estimated One-Rep Max (E1RM). Designed for auto-regulating and optimizing training, it features profile management and interactive data visualization.",
    link: "https://repjs.vercel.app", // External link or the specific URL for this project
    image:
      "https://private-user-images.githubusercontent.com/30121038/340376107-19b5edda-b0c4-416f-83f5-97557af7ac8b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzE5NTYyMTUsIm5iZiI6MTczMTk1NTkxNSwicGF0aCI6Ii8zMDEyMTAzOC8zNDAzNzYxMDctMTliNWVkZGEtYjBjNC00MTZmLTgzZjUtOTc1NTdhZjdhYzhiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMTglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTE4VDE4NTE1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE2NjAzZTg1ZTBjZjg5ZjNhNzkyZDU3ZDliYzFhNjZiNTQ4ZTE2YWM4ZDBiZTYzZjMwZDU1YTQxZTcxN2QxMjQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.U6_zrHB2Zclg3DYc_8lUo9-LeQb9SkA_HC1kTPEY4DM", // Example image URL (replace with actual)
  },
  {
    id: 2,
    name: "Pictory",
    description: "In the works, stay tuned!",
    link: "#", // Placeholder link for the project
    image: null, // No image for this project
  },
];

export function ProjectsPage() {
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
            {/* Conditionally render the image if it exists */}
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            )}
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

