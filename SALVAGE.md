# SALVAGE — content & config extracted from the original app

Everything here was hardcoded in the old `src/` or defines the Contentful content
model the code queries. Captured before the Vite rebuild so nothing is lost.

---

## 1. Contentful credentials (were hardcoded in `src/store/api.js`)

> ⚠️ These were committed in plaintext in the old code. In the new app they move to a
> gitignored `.env` using `VITE_` vars. Rotate the delivery token if you care, but it's a
> read-only Content Delivery token so low risk.

| Var | Value |
|-----|-------|
| `VITE_CONTENTFUL_SPACE_ID` | `ey6cqlcu6z2z` |
| `VITE_CONTENTFUL_ACCESS_TOKEN` | `a731c8e5ff2420b4f5089e4dae556e1e50f636a7d49532de3678b9b1e6bf2450` |
| `VITE_CONTENTFUL_ENVIRONMENT` | `master` |

---

## 2. Contentful content model (from `src/store/api.js`)

The old code fetched **all** entries and switched on `item.sys.contentType.sys.id`.

> ⚠️ **ID mismatch to verify:** the code matches these content-type IDs:
> `indexPage`, `galleryPage`, `videos`, `gigs`, `blog`.
> You named the types **IndexPage, GalleryPage, Gig, Video, Blog** — so the real IDs are
> probably `gig` / `video` (singular). The new fetch matches **both** singular and plural,
> so it works either way. Confirm the actual IDs in Contentful → Content model if anything
> doesn't load.

### IndexPage  (`indexPage`) — single entry, drives the whole home page
| Field ID | Type | Used as |
|----------|------|---------|
| `heroSectionImage` | Asset | hero background image |
| `heroSectionTitle` | Text | hero title |
| `aboutSectionTitle` | Text | About heading |
| `aboutSectionDescription` | Text | About body |
| `aboutSectionImage` | Asset | About background |
| `gigsSectionTitle` | Text | Gigs heading |
| `gigsSectionDescription` | Text | Gigs body |
| `gigsSectionImage` | Asset | Gigs background |
| `discographySectionTitle` | Text | Discography heading |
| `discographySectionDescription` | Text | Discography body |
| `discographySectionBackgroundImage` | Asset | Discography background |
| `discographySectionImage` | Asset | album/EP cover thumbnail |
| `discographySectionYoutubeLink` | Symbol | (fetched, not rendered) |
| `discographySectionSpotifyLink` | Symbol | Spotify button |
| `discographySectionItunesLink` | Symbol | iTunes button |
| `discographySectionAmazonLink` | Symbol | Amazon button |
| `discographySectionPlaystoreLink` | Symbol | (fetched, not rendered) |
| `videosBackgroundImage` | Asset | Videos section background |
| `gallerySectionImage` | Asset | Gallery section background |
| `gallerySectionImagesCollection` | Array<Asset> | home gallery thumbnails |

### GalleryPage  (`galleryPage`) — single entry, drives `/gallery`
| Field ID | Type | Used as |
|----------|------|---------|
| `galleryImage` | Array<Asset> | each asset's `title` → caption, `description` → "Location", `file.url` → image |

### Video  (`videos` in code, likely `video`)
| Field ID | Type | Used as |
|----------|------|---------|
| `title` | Symbol | tab label |
| `link` | Symbol | **YouTube video ID** (passed to `<YouTube videoId>`) |

### Gig  (`gigs` in code, likely `gig`)
| Field ID | Type | Used as |
|----------|------|---------|
| `time` | Date/DateTime | formatted `MMM D, Y - HH:mm`; only first 2 gigs shown |
| `place` | Symbol | venue (links out) |
| `link` | Symbol | ticket/venue URL |

### Blog  (`blog`)
| Field ID | Type | Used as |
|----------|------|---------|
| `title` | Symbol | — |
| `description` | Text | — |

> **Note:** Blog is fetched into Redux but **never rendered** in the old app. No blog UI
> exists. Kept in the model for completeness; not built in the rebuild.

---

## 3. Hardcoded content (from `src/static-data.js`)

### Social links
| Name | URL | Title |
|------|-----|-------|
| Facebook | https://fb.me/JazMattuOfficial | Facebook |
| Twitter | https://mobile.twitter.com/jazmattusounds | Twitter |
| Instagram | https://www.instagram.com/jazmattuofficial/?hl=en | Instagram |

### Download / streaming links
| Name | URL |
|------|-----|
| YouTube | https://www.youtube.com/channel/UCccRz_FO5Hgczbr0ZyAKWVA |
| Spotify | http://spoti.fi/2DLPqVV |
| iTunes | https://apple.co/2FpYn7K |
| Amazon | http://amzn.to/2EqulBI |

The footer + hero "banner icons" render `socialLinks + downloadLinks`; the Contact section
renders only `socialLinks` (with titles).

---

## 4. Other hardcoded content

| Where | Content |
|-------|---------|
| Contact section email | `jazmattuofficial@gmail.com` (was HTML-entity obfuscated in `ContactSection.js`) |
| Footer | `Copyright 2018 Jaz Mattu | All Rights Reserved` |
| Page/site title | `Jaz Mattu` (Helmet) / `Jaz Mattu Official Website` (index.html `<title>`) |
| Header nav anchors | Home, About (`#about`), Gigs (`#gig`), Music (`#music`), Videos (`#video`), Gallery (`#image`), Contact (`#contactMe`) |
| Discography headings | "Discography", "Buy or Stream here" (static text) |
| Videos heading | "Videos" (static) |
| Gallery heading | "IMAGE GALLERY" (static) |
| Contact headings | "Follow Me", "Contact", "Email Me" (static) |
| `CNAME` | `jazmattu.com` (custom domain — deploy concern, deferred) |
| `homepage` (package.json) | `http://jazmattu.com/` |

---

## 5. Local image/font assets

- **Fonts:** Roboto family (black/bold/italic/light/medium/regular) + Font Awesome 4 +
  Glyphicons — all under `src/assets/fonts/`, referenced by `font.css` / `font-awesome.min.css`.
- **Images:** ~70 files under `src/assets/images/` (section backgrounds, gallery covers,
  logos `logo.png`/`logo2.png`, arrows, gifs). These are **design chrome**, not Contentful
  content — the actual gallery/hero images come from Contentful at runtime. Carried over as-is.

Notable ones referenced directly in components:
- `logo2.png` — navbar logo (`Header.js`)
- `arrow.png` — hero arrow (`Header.js`)
- `gallery.png` — gallery thumbnail placeholder frame (`GallerySection.js`)
- `gallery2.png` — "MORE photos" tile (`GallerySection.js`)
- `image_gallery.png` — `/gallery` page banner (`gallery.js`)

---

## 6. Routes

| Path | Page |
|------|------|
| `/` | Home (all sections) |
| `/gallery` | Full gallery grid + lightbox |
| `*` | 404 |

Old app used **HashRouter** (URLs like `/#/gallery`) because of GitHub Pages. Rebuild uses
BrowserRouter with base `/` for local dev (per brief). Nav in-page anchors (`#about` etc.)
will need adjusting since HashRouter previously made them `#/#about`.
