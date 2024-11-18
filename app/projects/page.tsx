import React from 'react';

const projects = [
    { id: 1, name: 'REP.js', description: 'A web application for gym enthusiasts to calculate and track their Estimated One-Rep Max (E1RM). Designed for auto-regulating and optimizing training, it features profile management and interactive data visualization.' },
];

const ProjectsPage: React.FC = () => {
    return (
        <div>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Projects
            </h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectsPage;