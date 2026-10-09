// Photography entries. Filter categories are derived from this list, so adding a
// photo with a new `category` automatically adds a filter pill.
//
// width/height are the image's real pixel size. They reserve space in the grid so
// nothing jumps while images load. Swap `src` for '/photos/your-file.jpg'.

export interface Photo {
  id: string
  src: string
  alt: string
  category: string
  title: string
  year: number
  featured: boolean
  width: number
  height: number
}

const placeholder = (seed: string, width: number, height: number) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`

export const photos: Photo[] = [
  { id: 'photo-01', src: placeholder('photo-01', 1200, 800), alt: 'Sample landscape photograph', category: 'Landscape', title: 'First Light', year: 2025, featured: true, width: 1200, height: 800 },
  { id: 'photo-02', src: placeholder('photo-02', 800, 1200), alt: 'Sample portrait photograph', category: 'Portrait', title: 'Quiet Hours', year: 2025, featured: true, width: 800, height: 1200 },
  { id: 'photo-03', src: placeholder('photo-03', 1200, 900), alt: 'Sample street photograph', category: 'Street', title: 'Rush', year: 2024, featured: false, width: 1200, height: 900 },
  { id: 'photo-04', src: placeholder('photo-04', 1000, 1000), alt: 'Sample event photograph', category: 'Event', title: 'Opening Night', year: 2024, featured: true, width: 1000, height: 1000 },
  { id: 'photo-05', src: placeholder('photo-05', 800, 1100), alt: 'Sample portrait photograph', category: 'Portrait', title: 'Studio Study', year: 2024, featured: false, width: 800, height: 1100 },
  { id: 'photo-06', src: placeholder('photo-06', 1400, 800), alt: 'Sample landscape photograph', category: 'Landscape', title: 'Salt Flats', year: 2023, featured: true, width: 1400, height: 800 },
  { id: 'photo-07', src: placeholder('photo-07', 900, 1200), alt: 'Sample street photograph', category: 'Street', title: 'After the Rain', year: 2023, featured: false, width: 900, height: 1200 },
  { id: 'photo-08', src: placeholder('photo-08', 1200, 800), alt: 'Sample event photograph', category: 'Event', title: 'First Dance', year: 2023, featured: false, width: 1200, height: 800 },
  { id: 'photo-09', src: placeholder('photo-09', 1000, 1300), alt: 'Sample portrait photograph', category: 'Portrait', title: 'Golden Hour', year: 2022, featured: false, width: 1000, height: 1300 },
  { id: 'photo-10', src: placeholder('photo-10', 1300, 900), alt: 'Sample landscape photograph', category: 'Landscape', title: 'Ridgeline', year: 2022, featured: false, width: 1300, height: 900 },
  { id: 'photo-11', src: placeholder('photo-11', 800, 1000), alt: 'Sample street photograph', category: 'Street', title: 'Corner Shop', year: 2022, featured: false, width: 800, height: 1000 },
  { id: 'photo-12', src: placeholder('photo-12', 1200, 800), alt: 'Sample event photograph', category: 'Event', title: 'Backstage', year: 2021, featured: false, width: 1200, height: 800 },
]
