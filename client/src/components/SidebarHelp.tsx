import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarPageProps {
  children: React.ReactNode;
}

const sections = [
  {
    title: 'Tutorial',
    links: [
      { name: 'Create an account', path: '/tutorial/create-account' },
      { name: 'Editing profile', path: '/tutorial/edit-profile' },
      { name: 'Uploading a game', path: '/tutorial/upload-game' },
      { name: 'Submitting a review', path: '/tutorial/submit-review' },
    ],
  },
  {
    title: 'FAQ',
    links: [
      { name: 'Create an account', path: '/faq/create-account' },
      { name: 'Editing profile', path: '/faq/edit-profile' },
      { name: 'Uploading a game', path: '/faq/upload-game' },
      { name: 'Submitting a review', path: '/faq/submit-review' },
    ],
  },
];

const SidebarPage: React.FC<SidebarPageProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        {sections.map((section, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="font-bold mb-2">{section.title}</h2>
            <ul>
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className={`block py-1 pl-2 rounded hover:bg-gray-700 ${
                      location.pathname === link.path ? 'text-yellow-400' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button className="mt-4 text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600">
          Back to menu
        </button>
      </aside>

      <main className="flex-1 p-8 bg-white overflow-y-auto">{children}</main>
    </div>
  );
};

export default SidebarPage;
