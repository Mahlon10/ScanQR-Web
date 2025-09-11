'use client';

const ThemeToggle = () => {

  const personalIcons = [
    { icon: 'https://i.ibb.co/ccyF6Qq9/youtube-circle-logo-svgrepo-com.png', name: 'Youtube', link: 'https://www.youtube.com/account' },
    { icon: 'https://i.ibb.co/sdX0T2Mr/blogger.png', name: 'Blogger', link: 'https://www.blogger.com/' },
    { icon: 'https://i.ibb.co/Pz4b0kDT/medium-alt-svgrepo-com-22.png', name: 'Medium', link: 'https://medium.com/m/signin' },
    { icon: 'https://i.ibb.co/JjFGnMmW/sub.png', name: 'Substack', link: 'https://substack.com/sign-in' },
    { icon: 'https://i.ibb.co/nqPLRzmx/wordpress-color-svgrepo-com.png', name: 'Wordpress', link: 'https://wordpress.com/log-in/' },
    { icon: 'https://i.ibb.co/DHQ30TTX/tiktok-svgrepo-com.png', name: 'Tiktok', link: 'https://www.tiktok.com/login' },
    { icon: 'https://i.ibb.co/s9cpJ10K/press.png', name: 'Pressfolios', link: 'https://pressfolios.com/' },
    { icon: 'https://i.ibb.co/C5mHvDG8/twitch-v2-svgrepo-com.png', name: 'Twtch', link: 'https://www.twitch.tv/login' },
    { icon: 'https://i.ibb.co/4wtH10BJ/ghost.png', name: 'Ghost', link: 'https://account.ghost.org/signin/' },
  ];

  return (
    <div className="flex flex-col items-center space-y-4 text-white mx-[-90] mb-15 mr-[-40/]">

      {/* Icons Grid */}
      <div
          className={`grid grid-cols-3 gap-4`}
      >
        {(personalIcons).map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center px-1 text-xs hover:opacity-80 transform transition-transform duration-500 hover:scale-110"
          >
            <img src={item.icon} alt={item.name} className="w-11 h-11" />
            <span className="mt-1 text-[10px]">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;
