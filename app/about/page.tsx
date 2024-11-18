import React from "react";

const sections = [
  {
    id: 1,
    title: "Education",
    content: (
      <>
        <p className="text-neutral-900 dark:text-neutral-100">
          <strong>Cologne, Germany</strong> — Rheinische Hochschule Köln
        </p>
        <p className="text-gray-600 dark:text-neutral-300">
          <strong>B.Sc. Informatik</strong> (2023 – Present)
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Employment",
    content: (
      <>
        <div className="mb-4">
          <p className="text-neutral-900 dark:text-neutral-100">
            <strong>Student Assisstant</strong> — RST-Gruppe (2021 – Present)
          </p>
          <ul className="list-disc ml-6 text-gray-600 dark:text-neutral-300">
            <li>
              <p className="text-gray-600 dark:text-neutral-300">
                <strong>Digital Strategies & Marketing:</strong>
              </p>
              Optimized online stores and marketing campaigns to boost
              visibility and revenue.
            </li>
            <li>
              <p className="text-gray-600 dark:text-neutral-300">
                <strong>User Experience & Training Materials:</strong>
              </p>
              Designed user-friendly web interfaces and created engaging
              training resources.
            </li>
            <li>
              <p className="text-gray-600 dark:text-neutral-300">
                <strong>Employee Training & Process Optimization:</strong>
              </p>
              Delivered workshops for software adoption and improved digital workflows for efficiency.
            </li>
          </ul>
        </div>
      </>
    ),
  },
];

export function ResumePage() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Resume
      </h1>
      {sections.map((section) => (
        <div
          key={section.id}
          className="block hover:bg-gray-100 dark:hover:bg-neutral-700 transition-all duration-300 rounded-lg p-6 mb-4 border border-gray-300 dark:border-neutral-600"
        >
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
                {section.title}
              </p>
              <div>{section.content}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResumePage;
