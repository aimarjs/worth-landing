module.exports = {
  images: {
    domains: ['static.wixstatic.com'],
  },

  async redirects() {
    return [
      {
        source: '/nl',
        destination: 'https://worthsystems.com',
        permanent: true,
      },
      {
        source: '/en',
        destination: 'https://worthsystems.com',
        permanent: true,
      },
      {
        source: '/nl-onze-aanpak',
        destination: 'https://worthsystems.com/onze-aanpak',
        permanent: true,
      },
      {
        source: '/en-our-approach',
        destination: 'https://worthsystems.com/onze-aanpak',
        permanent: true,
      },
      {
        source: '/nl-succesverhalen',
        destination: 'https://worthsystems.com/projects',
        permanent: true,
      },
      {
        source: '/en-success-stories',
        destination: 'https://worthsystems.com/projects',
        permanent: true,
      },
      {
        source: '/nl-blog',
        destination: 'https://worthsystems.com/blog',
        permanent: true,
      },
      {
        source: '/en-blog',
        destination: 'https://worthsystems.com/blog',
        permanent: true,
      },
      {
        source: '/nl-over-worth',
        destination: 'https://worthsystems.com/over-ons',
        permanent: true,
      },
      {
        source: '/en-about-worth',
        destination: 'https://worthsystems.com/over-ons',
        permanent: true,
      },
      {
        source: '/nl-contact',
        destination: 'https://worthsystems.com/contact',
        permanent: true,
      },
      {
        source: '/en-get-in-touch',
        destination: 'https://worthsystems.com/contact',
        permanent: true,
      },
      {
        source: '/nl-project/:path*',
        destination: 'https://worthsystems.com/project/:path*',
        permanent: true,
      },
      {
        source: '/post/:path*',
        destination: 'https://worthsystems.com/post/:path*',
        permanent: true,
      },
    ];
  },
};
