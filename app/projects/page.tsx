import React from 'react';

const projects = [
<<<<<<< HEAD
    { id: 1, name: 'Project One', description: 'Description for project one' },
    { id: 2, name: 'Project Two', description: 'Description for project two' },
    { id: 3, name: 'Project Three', description: 'Description for project three' },
=======
    { id: 1, name: 'REP.js', description: 'A web application for gym enthusiasts to calculate and track their Estimated One-Rep Max (E1RM). Designed for auto-regulating and optimizing training, it features profile management and interactive data visualization.' },
>>>>>>> 242dd96 (project page added)
];

const ProjectsPage: React.FC = () => {
    return (
        <div>
<<<<<<< HEAD
            <h1>Projects</h1>
=======
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Projects
            </h1>
>>>>>>> 242dd96 (project page added)
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