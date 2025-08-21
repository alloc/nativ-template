# My Nativ App

A React Native app built with [Nativ](https://github.com/alloc/nativ), Expo, and modern tooling.

## Getting Started

1. **Clone the template and create your project:**

   ```bash
   git clone https://github.com/alloc/nativ-template my-project-name --depth 1
   cd my-project-name
   ```

2. **Run the setup script:**

   > **Note:** Requires Node.js v23.6+ for TypeScript support

   ```bash
   node setup.ts
   ```

   This will:
   - Recreate the git repository
   - Install all dependencies
   - Install nativ peer dependencies
   - Clean up the setup script

3. **Customize your app metadata:**

   Edit the following files to configure your app:
   - **`package.json`**: Update app name, description, and other metadata
   - **`app.json`**: Configure bundle identifier, native permissions, and Expo plugins
   - **App Icon**: Place your app icon in `./assets/images/` folder

   For app icon and splash screen guidance, see the [Expo documentation](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/).

4. **Start the development server:**

   ```bash
   pnpm start
   ```

5. **Run on a platform:**
   ```bash
   pnpm ios     # iOS
   pnpm android # Android
   pnpm web     # Web
   ```

## Project Structure

```
├── assets/          # Fonts, icons, images
├── src/
│   ├── app/         # Expo Router pages
│   ├── db/          # Drizzle ORM setup
│   ├── assets.d.ts  # Asset type definitions
│   ├── theme.ts     # Restyle theme
│   └── ui.ts        # UI primitives
├── app.json         # Expo configuration
├── drizzle.config.ts # Database configuration
└── tsconfig.json    # TypeScript configuration
```

## Features

- ✅ **Expo Router** - File-based routing
- ✅ **Restyle** - Type-safe styling system
- ✅ **Drizzle ORM** - Type-safe database with SQLite
- ✅ **TypeScript** - Strict type checking
- ✅ **nativ** - Core utilities and components
- ✅ **Moti** - Smooth animations
- ✅ **Variable Fonts** - InterTight font family

## Customization

### Theme

Edit `src/theme.ts` to customize colors, spacing, and typography.

### UI Components

UI primitives are exported from `src/ui.ts` using the nativ library.

### Database

- Schema: `src/db/schema.ts`
- Client: `src/db/client.ts`
- Migrations: `src/db/migrations.ts`

### Assets

- **Icons**: Add SVG files to `assets/icons/` and run `pnpm nativ generate-icons`
- **Images**: Add to `assets/images/`
- **Fonts**: Add to `assets/fonts/` and update the theme

## Learn More

- [nativ Documentation](../nativ/README.md)
- [Expo Documentation](https://docs.expo.dev/)
- [Restyle Documentation](https://github.com/Shopify/restyle)
- [Drizzle Documentation](https://orm.drizzle.team/)
