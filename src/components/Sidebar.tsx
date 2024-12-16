import React from 'react';
import { ChevronRight } from 'lucide-react';

interface SidebarItemProps {
  title: string;
  items: Array<{
    heading: string;
    description?: string;
  }>;
}

function SidebarItem({ title, items }: SidebarItemProps) {
  return (
    <div className="sidebar-item">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="group relative">
            <div className="sidebar-heading flex items-center">
              <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              {item.heading}
            </div>
            {item.description && (
              <div className="sidebar-description">
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Sidebar() {
  const sidebarData = {
    courses: [
      { heading: "Multivariate Calculus with Analytical Geometry" },
      { heading: "Discrete Mathematics" },
      { heading: "Differential Equations" },
      { heading: "Linear Algebra" },
      { heading: "General Physics with Calculus" },
      { heading: "Classical Mechanics" },
      { heading: "Modern Physics" },
      { heading: "Probabilities and Statistics" }
    ],
    honors: [
      {
        heading: "William F. St. Clair Physics Scholarship Endowment",
        description: "Issued by the College of Arts and Sciences, School of Mathematics and Natural Sciences in recognition of a worthy student majoring in Physics."
      },
      {
        heading: "President's List SP24",
        description: "Issued by the Office of the Registrar at USM in recognition of the academic performance in the Fall 2023 academic semester."
      },
      {
        heading: "Academic Excellence Scholarship",
        description: "Merit based scholarship that covers full-tuition for four academic years."
      },
      {
        heading: "Nepal National Parliamentary Debate Team 2022",
        description: "Represented Nepal in all transnational/international tournaments throughout the year, including in the Netherlands World Schools Debating Championship 2022 and the Asian Schools Debating Championship 2022."
      },
      {
        heading: "MahaKumbha National Championship 2022",
        description: "Won Grand Championship of Nepal's flagship National Schools Debating Champion, with representation from 30+ teams. Also awarded Best Speaker, Best Reply Speaker, and Best Open Grand Final Speaker."
      },
      {
        heading: "Asian Schools Debating Championship 2021",
        description: "Won Grand Championship of Asia's flagship Continental Schools Debating Champion, with representation from 50+ teams from 30+ nations. Also awarded Best Open Grand Final Speaker."
      },
      {
        heading: "Nepal National Parliamentary Debate Team 2021",
        description: "Represented Nepal in all transnational/international tournaments throughout the year, including in the Macau World Schools Debating Championship 2021 and the Asian Schools Debating Championship 2021."
      }
    ]
  };

  return (
    <div className="fixed right-0 top-0 h-screen w-72 bg-gray-50 dark:bg-gray-900 shadow-lg overflow-y-auto">
      <div className="py-20">
        <SidebarItem title="Courses" items={sidebarData.courses} />
        <SidebarItem title="Honors & Awards" items={sidebarData.honors} />
      </div>
    </div>
  );
}