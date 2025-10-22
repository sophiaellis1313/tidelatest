# Tide Magazine - Jekyll Website

A modern magazine website built with Jekyll, featuring lifestyle, travel, sailing, and environmental content with CloudCannon CMS integration.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development Setup](#development-setup)
- [Running the Site](#running-the-site)
- [Project Structure](#project-structure)
- [Features](#features)
- [Customization](#customization)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before setting up the development environment, ensure you have the following installed:

- **Ruby** (version 2.7 or higher)
- **RubyGems** (usually comes with Ruby)
- **Bundler** gem
- **Node.js** (version 14 or higher)
- **Yarn** package manager

### Installing Prerequisites

#### macOS

```bash
# Install Ruby using Homebrew
brew install ruby

# Install Node.js and Yarn
brew install node yarn

# Install Bundler
gem install bundler
```

#### Windows

```bash
# Install Ruby using RubyInstaller
# Download from: https://rubyinstaller.org/

# Install Node.js from: https://nodejs.org/

# Install Yarn
npm install -g yarn

# Install Bundler
gem install bundler
```

#### Linux (Ubuntu/Debian)

```bash
# Install Ruby and dependencies
sudo apt update
sudo apt install ruby ruby-dev build-essential

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Yarn
npm install -g yarn

# Install Bundler
gem install bundler
```

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd tidelatest
   ```

2. **Install Ruby dependencies**

   ```bash
   bundle install
   ```

3. **Install Node.js dependencies**
   ```bash
   yarn install
   ```
   Note: If facing any issuee wwhile installation follow the setup guide officially [here](https://jekyllrb.com/docs/installation/)

## Development Setup

1. **Verify your installation**

   ```bash
   # Check Ruby version
   ruby --version

   # Check Jekyll installation
   bundle exec jekyll --version

   # Check Node.js version
   node --version

   # Check Yarn version
   yarn --version
   ```

2. **Configure Jekyll** (if needed)
   - Edit `_config.yml` for site-wide configuration
   - The site uses CloudCannon CMS for content management
   - Custom fonts are located in the `fonts/` directory

## Running the Site

### Local Development Server

```bash
# Start the Jekyll development server
bundle exec jekyll serve

# Or with live reload
bundle exec jekyll serve --livereload

# Or with drafts included
bundle exec jekyll serve --drafts
```

The site will be available at:

- **Local**: http://localhost:4000
- **Network**: http://0.0.0.0:4000

### Build for Production

```bash
# Build the site
bundle exec jekyll build

# Build with production settings
JEKYLL_ENV=production bundle exec jekyll build
```

The built site will be in the `_site/` directory.

## Project Structure

```
tidelatest/
├── _config.yml              # Jekyll configuration
├── _data/                   # Site data files (YAML)
├── _includes/               # Reusable HTML components
├── _layouts/                # Page templates
├── _posts/                  # Blog posts (Markdown)
├── _products/               # Product pages
├── _site/                   # Generated site (don't edit)
├── fonts/                   # Custom fonts
├── images/                  # Static images
├── javascript/              # Custom JavaScript files
├── uploads/                 # User uploaded content
├── videos/                  # Video files
├── Gemfile                  # Ruby dependencies
├── package.json             # Node.js dependencies
└── cloudcannon.config.yml   # CloudCannon CMS configuration
```

## Features

- **Responsive Design**: Mobile-first approach with custom CSS
- **Content Management**: CloudCannon CMS integration
- **Custom Collections**: Posts, products, and articles
- **Interactive Elements**: Swiper.js for sliders and carousels
- **Custom Fonts**: Calibre font family for typography
- **SEO Optimized**: Meta tags and structured data
- **Fast Loading**: Optimized images and assets

## Customization

### Adding New Posts

1. Create a new Markdown file in `_posts/`
2. Use the format: `YYYY-MM-DD-title.md`
3. Include front matter with title, date, categories, and tags

### Modifying Site Data

- Edit YAML files in `_data/` directory
- Files include navigation, footer, homepage content, etc.

### Customizing Layouts

- Modify HTML templates in `_layouts/`
- Update includes in `_includes/` for reusable components

### Styling

- Main stylesheet: `style.css`
- Custom fonts in `fonts/` directory
- Images and assets in respective directories

## Deployment

### GitHub Pages

```bash
# Build and deploy
bundle exec jekyll build
# Push to GitHub Pages branch
```

### CloudCannon

- The site is configured for CloudCannon CMS
- Configuration in `cloudcannon.config.yml`
- Supports live editing and content management

### Other Hosting Services

- Build the site: `bundle exec jekyll build`
- Upload the `_site/` directory to your web server

## Troubleshooting

### Common Issues

1. **Bundle install fails**

   ```bash
   # Update bundler
   gem update bundler

   # Clear bundle cache
   bundle clean --force

   # Reinstall dependencies
   rm Gemfile.lock
   bundle install
   ```

2. **Jekyll serve fails**

   ```bash
   # Check for port conflicts
   bundle exec jekyll serve --port 4001

   # Check Jekyll version compatibility
   bundle exec jekyll --version
   ```

3. **Node dependencies issues**

   ```bash
   # Clear yarn cache
   yarn cache clean

   # Reinstall dependencies
   rm yarn.lock
   yarn install
   ```

4. **Permission issues (Linux/macOS)**
   ```bash
   # Fix gem permissions
   sudo chown -R $(whoami) $(gem environment home)
   ```

### Getting Help

- Check Jekyll documentation: https://jekyllrb.com/docs/
- CloudCannon documentation: https://cloudcannon.com/docs/
- Ruby version compatibility: Ensure you're using Ruby 2.7+

### Development Tips

- Use `--livereload` flag for automatic browser refresh
- Use `--drafts` flag to include draft posts
- Check `_site/` directory for built files
- Use browser developer tools for debugging
# Tide Magazine - Jekyll Website

A modern magazine website built with Jekyll, featuring lifestyle, travel, sailing, and environmental content with CloudCannon CMS integration.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development Setup](#development-setup)
- [Running the Site](#running-the-site)
- [Project Structure](#project-structure)
- [Features](#features)
- [Customization](#customization)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before setting up the development environment, ensure you have the following installed:

- **Ruby** (version 2.7 or higher)
- **RubyGems** (usually comes with Ruby)
- **Bundler** gem
- **Node.js** (version 14 or higher)
- **Yarn** package manager

### Installing Prerequisites

#### macOS

```bash
# Install Ruby using Homebrew
brew install ruby

# Install Node.js and Yarn
brew install node yarn

# Install Bundler
gem install bundler
```

#### Windows

```bash
# Install Ruby using RubyInstaller
# Download from: https://rubyinstaller.org/

# Install Node.js from: https://nodejs.org/

# Install Yarn
npm install -g yarn

# Install Bundler
gem install bundler
```

#### Linux (Ubuntu/Debian)

```bash
# Install Ruby and dependencies
sudo apt update
sudo apt install ruby ruby-dev build-essential

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Yarn
npm install -g yarn

# Install Bundler
gem install bundler
```

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd tidelatest
   ```

2. **Install Ruby dependencies**

   ```bash
   bundle install
   ```

3. **Install Node.js dependencies**
   ```bash
   yarn install
   ```
   Note: If facing any issuee wwhile installation follow the setup guide officially [here](https://jekyllrb.com/docs/installation/)

## Development Setup

1. **Verify your installation**

   ```bash
   # Check Ruby version
   ruby --version

   # Check Jekyll installation
   bundle exec jekyll --version

   # Check Node.js version
   node --version

   # Check Yarn version
   yarn --version
   ```

2. **Configure Jekyll** (if needed)
   - Edit `_config.yml` for site-wide configuration
   - The site uses CloudCannon CMS for content management
   - Custom fonts are located in the `fonts/` directory

## Running the Site

### Local Development Server

```bash
# Start the Jekyll development server
bundle exec jekyll serve

# Or with live reload
bundle exec jekyll serve --livereload

# Or with drafts included
bundle exec jekyll serve --drafts
```

The site will be available at:

- **Local**: http://localhost:4000
- **Network**: http://0.0.0.0:4000

### Build for Production

```bash
# Build the site
bundle exec jekyll build

# Build with production settings
JEKYLL_ENV=production bundle exec jekyll build
```

The built site will be in the `_site/` directory.

## Project Structure

```
tidelatest/
├── _config.yml              # Jekyll configuration
├── _data/                   # Site data files (YAML)
├── _includes/               # Reusable HTML components
├── _layouts/                # Page templates
├── _posts/                  # Blog posts (Markdown)
├── _products/               # Product pages
├── _site/                   # Generated site (don't edit)
├── fonts/                   # Custom fonts
├── images/                  # Static images
├── javascript/              # Custom JavaScript files
├── uploads/                 # User uploaded content
├── videos/                  # Video files
├── Gemfile                  # Ruby dependencies
├── package.json             # Node.js dependencies
└── cloudcannon.config.yml   # CloudCannon CMS configuration
```

## Features

- **Responsive Design**: Mobile-first approach with custom CSS
- **Content Management**: CloudCannon CMS integration
- **Custom Collections**: Posts, products, and articles
- **Interactive Elements**: Swiper.js for sliders and carousels
- **Custom Fonts**: Calibre font family for typography
- **SEO Optimized**: Meta tags and structured data
- **Fast Loading**: Optimized images and assets

## Customization

### Adding New Posts

1. Create a new Markdown file in `_posts/`
2. Use the format: `YYYY-MM-DD-title.md`
3. Include front matter with title, date, categories, and tags

### Modifying Site Data

- Edit YAML files in `_data/` directory
- Files include navigation, footer, homepage content, etc.

### Customizing Layouts

- Modify HTML templates in `_layouts/`
- Update includes in `_includes/` for reusable components

### Styling

- Main stylesheet: `style.css`
- Custom fonts in `fonts/` directory
- Images and assets in respective directories

## Deployment

### GitHub Pages

```bash
# Build and deploy
bundle exec jekyll build
# Push to GitHub Pages branch
```

### CloudCannon

- The site is configured for CloudCannon CMS
- Configuration in `cloudcannon.config.yml`
- Supports live editing and content management

### Other Hosting Services

- Build the site: `bundle exec jekyll build`
- Upload the `_site/` directory to your web server

## Troubleshooting

### Common Issues

1. **Bundle install fails**

   ```bash
   # Update bundler
   gem update bundler

   # Clear bundle cache
   bundle clean --force

   # Reinstall dependencies
   rm Gemfile.lock
   bundle install
   ```

2. **Jekyll serve fails**

   ```bash
   # Check for port conflicts
   bundle exec jekyll serve --port 4001

   # Check Jekyll version compatibility
   bundle exec jekyll --version
   ```

3. **Node dependencies issues**

   ```bash
   # Clear yarn cache
   yarn cache clean

   # Reinstall dependencies
   rm yarn.lock
   yarn install
   ```

4. **Permission issues (Linux/macOS)**
   ```bash
   # Fix gem permissions
   sudo chown -R $(whoami) $(gem environment home)
   ```

### Getting Help

- Check Jekyll documentation: https://jekyllrb.com/docs/
- CloudCannon documentation: https://cloudcannon.com/docs/
- Ruby version compatibility: Ensure you're using Ruby 2.7+

### Development Tips

- Use `--livereload` flag for automatic browser refresh
- Use `--drafts` flag to include draft posts
- Check `_site/` directory for built files
- Use browser developer tools for debugging
# Tide Magazine - Jekyll Website

A modern magazine website built with Jekyll, featuring lifestyle, travel, sailing, and environmental content with CloudCannon CMS integration.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development Setup](#development-setup)
- [Running the Site](#running-the-site)
- [Project Structure](#project-structure)
- [Features](#features)
- [Customization](#customization)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before setting up the development environment, ensure you have the following installed:

- **Ruby** (version 2.7 or higher)
- **RubyGems** (usually comes with Ruby)
- **Bundler** gem
- **Node.js** (version 14 or higher)
- **Yarn** package manager

### Installing Prerequisites

#### macOS

```bash
# Install Ruby using Homebrew
brew install ruby

# Install Node.js and Yarn
brew install node yarn

# Install Bundler
gem install bundler
```

#### Windows

```bash
# Install Ruby using RubyInstaller
# Download from: https://rubyinstaller.org/

# Install Node.js from: https://nodejs.org/

# Install Yarn
npm install -g yarn

# Install Bundler
gem install bundler
```

#### Linux (Ubuntu/Debian)

```bash
# Install Ruby and dependencies
sudo apt update
sudo apt install ruby ruby-dev build-essential

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Yarn
npm install -g yarn

# Install Bundler
gem install bundler
```

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd tidelatest
   ```

2. **Install Ruby dependencies**

   ```bash
   bundle install
   ```

3. **Install Node.js dependencies**
   ```bash
   yarn install
   ```
   Note: If facing any issuee wwhile installation follow the setup guide officially [here](https://jekyllrb.com/docs/installation/)

## Development Setup

1. **Verify your installation**

   ```bash
   # Check Ruby version
   ruby --version

   # Check Jekyll installation
   bundle exec jekyll --version

   # Check Node.js version
   node --version

   # Check Yarn version
   yarn --version
   ```

2. **Configure Jekyll** (if needed)
   - Edit `_config.yml` for site-wide configuration
   - The site uses CloudCannon CMS for content management
   - Custom fonts are located in the `fonts/` directory

## Running the Site

### Local Development Server

```bash
# Start the Jekyll development server
bundle exec jekyll serve

# Or with live reload
bundle exec jekyll serve --livereload

# Or with drafts included
bundle exec jekyll serve --drafts
```

The site will be available at:

- **Local**: http://localhost:4000
- **Network**: http://0.0.0.0:4000

### Build for Production

```bash
# Build the site
bundle exec jekyll build

# Build with production settings
JEKYLL_ENV=production bundle exec jekyll build
```

The built site will be in the `_site/` directory.

## Project Structure

```
tidelatest/
├── _config.yml              # Jekyll configuration
├── _data/                   # Site data files (YAML)
├── _includes/               # Reusable HTML components
├── _layouts/                # Page templates
├── _posts/                  # Blog posts (Markdown)
├── _products/               # Product pages
├── _site/                   # Generated site (don't edit)
├── fonts/                   # Custom fonts
├── images/                  # Static images
├── javascript/              # Custom JavaScript files
├── uploads/                 # User uploaded content
├── videos/                  # Video files
├── Gemfile                  # Ruby dependencies
├── package.json             # Node.js dependencies
└── cloudcannon.config.yml   # CloudCannon CMS configuration
```

## Features

- **Responsive Design**: Mobile-first approach with custom CSS
- **Content Management**: CloudCannon CMS integration
- **Custom Collections**: Posts, products, and articles
- **Interactive Elements**: Swiper.js for sliders and carousels
- **Custom Fonts**: Calibre font family for typography
- **SEO Optimized**: Meta tags and structured data
- **Fast Loading**: Optimized images and assets

## Customization

### Adding New Posts

1. Create a new Markdown file in `_posts/`
2. Use the format: `YYYY-MM-DD-title.md`
3. Include front matter with title, date, categories, and tags

### Modifying Site Data

- Edit YAML files in `_data/` directory
- Files include navigation, footer, homepage content, etc.

### Customizing Layouts

- Modify HTML templates in `_layouts/`
- Update includes in `_includes/` for reusable components

### Styling

- Main stylesheet: `style.css`
- Custom fonts in `fonts/` directory
- Images and assets in respective directories

## Deployment

### GitHub Pages

```bash
# Build and deploy
bundle exec jekyll build
# Push to GitHub Pages branch
```

### CloudCannon

- The site is configured for CloudCannon CMS
- Configuration in `cloudcannon.config.yml`
- Supports live editing and content management

### Other Hosting Services

- Build the site: `bundle exec jekyll build`
- Upload the `_site/` directory to your web server

## Troubleshooting

### Common Issues

1. **Bundle install fails**

   ```bash
   # Update bundler
   gem update bundler

   # Clear bundle cache
   bundle clean --force

   # Reinstall dependencies
   rm Gemfile.lock
   bundle install
   ```

2. **Jekyll serve fails**

   ```bash
   # Check for port conflicts
   bundle exec jekyll serve --port 4001

   # Check Jekyll version compatibility
   bundle exec jekyll --version
   ```

3. **Node dependencies issues**

   ```bash
   # Clear yarn cache
   yarn cache clean

   # Reinstall dependencies
   rm yarn.lock
   yarn install
   ```

4. **Permission issues (Linux/macOS)**
   ```bash
   # Fix gem permissions
   sudo chown -R $(whoami) $(gem environment home)
   ```

### Getting Help

- Check Jekyll documentation: https://jekyllrb.com/docs/
- CloudCannon documentation: https://cloudcannon.com/docs/
- Ruby version compatibility: Ensure you're using Ruby 2.7+

### Development Tips

- Use `--livereload` flag for automatic browser refresh
- Use `--drafts` flag to include draft posts
- Check `_site/` directory for built files
- Use browser developer tools for debugging
