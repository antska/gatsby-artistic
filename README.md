# Gatsby website built with Typescript, styled-components & RevealJS

A website built with [Gatsby](https://www.gatsbyjs.org/) & [RevealJS](https://revealjs.com/)

## Features

- Configurable
  - Use the config to easily change the most important information
  - Change the theming for styled-components
  - Navigation powered by a .yaml file
- TypeScript
- react-spring animations
- Uses styled-components + styled-system for styling
- Google Analytics support
- SEO
  - Sitemap
  - Schema.org JSONLD
  - OpenGraph Tags
  - Twitter Tags
- Offline Support
- WebApp Manifest Support
- Responsive Images
  - Right image sizes
  - Blurred loading animation
  - WebP support

### Adding a new page

Create a new `.tsx` file in the `src/pages` directory

### Adding new features/plugins

You can add other features by having a look at the official [plugins page](https://www.gatsbyjs.org/docs/plugins/)

### Building your site

```
npm run build
```

Copy the content of the `public` folder to your webhost or use a website like Netlify which automates that for you.

## Configuration

You can configure your setup in `config/index.js`:

```JS
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'YourTitle', // Navigation and Site Title
  siteTitleAlt: 'YourTitle - Alt Title', // Alternative Site title for SEO
  siteTitleShort: 'short_name', // short_name for manifest
  siteHeadline: 'YourtTitle', // Headline for schema.org JSONLD
  siteUrl: 'https://url.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo.png', // Used for SEO and manifest
  siteDescription: 'Description here',
  author: 'Antonis Skandalis', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@ant_skandalis', // Twitter Username
  ogSiteName: 'antska', // Facebook Site Name
  ogLanguage: 'en_US', // og:language
  googleAnalyticsID: 'UA-XXXXXX-X',

  // Manifest and Progress color
  themeColor: '#db7436',
  backgroundColor: '#3b3c4f',
}
```

You can also configure the styling of the site by editing the theme variables in `config/theme.ts`.

```typescript
interface ThemeShape {
  breakpoints: string[];
  fontSizes: string[];
  colors: {
    [key: string]: string;
  };
  space: string[];
  fontWeights: {
    [key: string]: number;
  };
  sidebarWidth: {
    [key: string]: string;
  };
}

const theme: ThemeShape = {
  breakpoints: ['480px', '650px', '1000px', '1200px', '1400px'],
  fontSizes: ['1rem', '1.2rem', '1.44rem', '1.728rem', '2.074rem', '2.488rem'],
  colors: {
    primary: '#c66131',
    secondary: '#494992',
    grey: '#646066',
    shade: '#f5f5f5',
  },
  space: [
    '0',
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '4rem',
    '6rem',
    '8rem',
    '12rem',
    '16rem',
  ],
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  sidebarWidth: {
    big: '375px',
    normal: '320px',
  },
};

export default theme;
```

**Attention:** You also need to edit `static/robots.txt` to include your domain!
