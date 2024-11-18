import React from "react";

const projects = [
  {
    id: 1,
    name: "REP.js",
    description:
      "A web application for gym enthusiasts to calculate and track their Estimated One-Rep Max (E1RM). Designed for auto-regulating and optimizing training, it features profile management and interactive data visualization.",
  },
  { id: 2, name: "Pictory", description: "In the works, stay tuned!" },
];

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>
      <ul className="space-y-4">
        {" "}
        {/* This will add space between list items */}
        {projects.map((project) => (
          <li key={project.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-700">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
