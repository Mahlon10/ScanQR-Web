'use client';

const ThemeToggle = () => {

  const personalIcons = [
    { icon: 'https://i.ibb.co/mCtxbMCf/telegram-svgrepo-com.png', name: 'Telegram', link: 'https://web.telegram.org/' },
    { icon: 'https://i.ibb.co/1YbGKCjF/spotify-color-svgrepo-com.png', name: 'Spotify', link: 'https://accounts.spotify.com/en/login' },
    { icon: 'https://i.ibb.co/HLHLqmjJ/soundcloud-color-svgrepo-com.png', name: 'Soundcloud', link: 'https://soundcloud.com/signin/forgot' },
    { icon: 'https://i.ibb.co/whR71vxc/mack.png', name: 'Audiomack', link: 'https://audiomack.com/login' },
    { icon: 'https://i.ibb.co/DHQ30TTX/tiktok-svgrepo-com.png', name: 'Tiktok', link: 'https://www.tiktok.com/login' },
    { icon: 'https://i.ibb.co/gMD99QpF/pod.png', name: 'Podbean', link: 'https://www.podbean.com/login' },
    { icon: 'https://i.ibb.co/HfNWkgRr/apple-music-logo-svgrepo-com.png', name: 'Apple Music', link: 'https://music.apple.com/us/login' },
    { icon: 'https://i.ibb.co/qFVgtJcy/beat.png', name: 'Beatstars', link: 'https://shorturl.at/hn6cd' },
    { icon: 'https://i.ibb.co/20Z411rr/instagram.png', name: 'Instagram Creator Account', link: 'https://www.instagram.com/accounts/login/' },
  ];

  return (
    <div className="flex flex-col items-center space-y-1 text-white mx-[-140] mb-18">

      {/* Icons Grid */}
      <div
          className={`grid grid-cols-3 gap-3`}
      >
        {(personalIcons).map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-xs hover:opacity-80 transform transition-transform duration-500 hover:scale-110"
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
