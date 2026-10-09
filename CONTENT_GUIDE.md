# Content Guide

Everything you see on the site comes from four files in `src/data/`. You never need to edit a component to change content.

| To change… | Edit |
|---|---|
| Name, tagline, bio, email, socials, page headings | `src/data/site.ts` |
| Photos on the Photography page | `src/data/photos.ts` |
| Videos on the Videography page | `src/data/videos.ts` |
| Software on the About page | `src/data/tools.ts` |

Placeholders are written as `[LIKE THIS]`. Search the project for `[` to find the ones still to fill in.

## Replacing photos

1. Export your photos as JPG (or WebP), long edge around **1600–2400px**, quality ~80%. Smaller files make the site faster.
2. Drop them in `public/photos/`, e.g. `public/photos/street-01.jpg`.
3. In `src/data/photos.ts`, edit (or add) an entry:

   ```ts
   {
     id: 'street-01',                 // unique, no spaces
     src: '/photos/street-01.jpg',    // path inside public/, starting with /
     alt: 'Commuters crossing a wet street at dusk', // describe the image — used by screen readers
     category: 'Street Photography', // creates a filter automatically
     title: 'After the Rain',
     year: 2024,
     featured: true,                  // true = may appear on the Home page
     width: 1800,                     // the image's real pixel size
     height: 1200,
   }
   ```

4. Delete any sample entries you no longer need.

`width` and `height` must match the real image. They reserve space in the layout so the page doesn't jump while images load. Right-click the file → Properties → Details to see them.

**Categories** are not a fixed list. Use any `category` text and a filter appears for it. Keep the spelling identical across photos (`Street Photography`, not `street photography`).

## Replacing videos

Videos are **not** stored in this project. Host them on YouTube and embed them.

1. Upload the video to YouTube and set visibility to **Unlisted** (only people with the link, such as this site, can watch).
2. Copy the video ID from the URL: `https://www.youtube.com/watch?v=`**`dQw4w9WgXcQ`** → `dQw4w9WgXcQ`.
3. In `src/data/videos.ts`, set the entry's `youtubeId` to that ID, and update `title`, `role` and `year`.
4. Thumbnail: leave `thumbnail: ''` to use YouTube's automatic one, or put your own image in `public/thumbnails/` and set `thumbnail: '/thumbnails/northbound.jpg'`.

**Google Drive instead of YouTube?** Leave `youtubeId: ''` and set `driveUrl: 'https://drive.google.com/…'`. The card then opens the Drive link in a new tab. YouTube is recommended: it streams smoothly and plays on the page.

## Tools (About page)

In `src/data/tools.ts`, each tool has a short `icon` (two letters shown as a logo), a `description`, what it was `usedFor`, and the year it was used `since`.

## Site details

`src/data/site.ts` holds your name, tagline, intro, bio paragraphs, email, location, social links, and the headings shown at the top of each page. Replace the portrait and hero image with files from `public/photos/` the same way as photos.

## Preview your changes

```bash
npm run dev      # live preview at http://localhost:5173
npm run build    # production build into dist/
```

## Social links

In `src/data/site.ts`, each entry in `socials` is a link, a text handle, or both:

```ts
{ label: 'Instagram', url: 'https://instagram.com/yourname' },  // link
{ label: 'Discord', handle: 'yourname' },                         // text only (username)
{ label: 'Discord', url: 'https://discord.gg/invite', handle: 'yourname' }, // both
```

`url: '#'` is a placeholder that goes nowhere. Replace it with the real profile URL.
