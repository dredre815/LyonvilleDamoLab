export const NavBar = () => {
  const dropdownData = [
    {
      label: 'About Lyonville',
      labelLink: '/about',
      items: [
        { name: 'Feedback and Ideas', link: '/feedback' },
        { name: 'Facebook', link: 'https://www.facebook.com/lyonville' },
      ],
    },
    {
      label: 'Getting There',
      labelLink: '/getting-there',
      items: [
        { name: 'Real Estate', link: '/real-estate' },
        { name: 'Flora and Fauna', link: '/flora-and-fauna' },
      ],
    },
    {
      label: 'History',
      labelLink: '/history',
      items: [
        { name: 'Gardens', link: '/gardens' },
        { name: 'Weather', link: '/weather' },
        { name: 'Local Business', link: '/local-business' },
      ],
    },
    {
      label: 'Things to Do',
      labelLink: '/things-to-do',
      items: [
        { name: 'Woodchop', link: '/woodchop' },
        { name: 'Bakeoff', link: '/bakeoff' },
      ],
    },
    {
      label: 'Community Page',
      labelLink: '/community-page',
      items: [
        { name: 'Hepburn Shire', link: '/hepburn-shire' },
        { name: 'Community Newsletter', link: '/community-newsletter' },
        { name: 'Committees and Working Group', link: '/committees' },
      ],
    },

  ];

  return (
    <div className="navbar bg-base-300 rounded-box flex justify-between items-center h-16">
      <ul className="flex space-x-4">
        {dropdownData.map((dropdown, index) => (
          <li className="relative" key={index}>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn btn-ghost rounded-btn">
                <a href={dropdown.labelLink}>{dropdown.label}</a>{' '}
                {/* Add the link to the label */}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {dropdown.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <a className="text-lg font-bold px-6" href="/">
        Lyonville
      </a>
    </div>
  );
};
