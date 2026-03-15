# SPOTD Brand Guidelines
## For use with Claude Code, Cursor, Webflow AI, or any AI developer tool
### Version 1.0 — March 2026 — A Rodeo Clubhouse product

---

## OVERVIEW

You are building and maintaining SPOTD — a creative events discovery platform and digital community for artists, creators and event-goers. SPOTD is a product of Rodeo Clubhouse, a creative agency handling artist marketing, management and event hosting.

**Tagline:** Find Your Scene. Make Moves.

**What SPOTD is:** A platform where people discover underground and independent creative events (music, art, film, theatre, dance, spoken word) and where artists find each other to collaborate. Think gig guide + creative directory + collab board in one place.

**What SPOTD is not:** Eventbrite (too corporate), Instagram (too algorithmic), LinkedIn (no cultural relevance).

---

## COLOUR PALETTE

Always use these exact hex values. No other colours unless specified below.

```
--bg:      #FFFFFF   /* Primary background — always pure white */
--ink:     #0F0F0F   /* Primary text, logo, buttons, all key UI */
--mid:     #6B6B6B   /* Secondary text, metadata, descriptions */
--dim:     #B0B0B0   /* Labels, placeholders, tertiary elements */
--rule:    #EBEBEB   /* Dividers, borders, hairline rules */
--hover:   #F7F7F7   /* Hover states, subtle background fills */
--accent:  #0000EE   /* Featured badges, saved states, free labels, positive states ONLY */
```

### Colour Rules
- Background is ALWAYS #FFFFFF — never off-white, never grey, never dark
- #0000EE is the ONLY accent colour — use it for featured event stripes, save/bookmark states, free entry labels, open collab badges and positive UI states only
- Never use #0000EE as a general decorative colour — overuse destroys its signal value
- No gradients, no shadows, no additional brand colours
- Dark sections (nav bar, Rodeo Clubhouse footer strip) use #0F0F0F background with white text

---

## TYPOGRAPHY

### Fonts
- **Web/App:** Inter (Google Fonts) — import from fonts.googleapis.com
- **Fallback stack:** `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
- **Never use:** decorative fonts, serif fonts in UI, system fonts like Arial or Roboto as primary

### Type Scale
```
Hero headline:    clamp(1.8rem, 4vw, 2.8rem)  font-weight: 700  letter-spacing: -1px
Section title:    1.4rem – 1.8rem              font-weight: 700
Card title:       13.5px – 14px               font-weight: 600
Body text:        13px – 14px                 font-weight: 400  line-height: 1.8
Metadata:         11px – 12px                 font-weight: 400  color: #6B6B6B
Category labels:  10px                        font-weight: 600  UPPERCASE  letter-spacing: 1.5px
Micro labels:     8px – 9px                   font-weight: 600  UPPERCASE  letter-spacing: 2px
```

### Typography Rules
- Micro labels, category tags, nav items and badges are ALWAYS uppercase with letter spacing
- Body text line-height is always 1.65–1.8
- Minimum body text: 13px on screen
- No italic type in the interface
- No more than two font weights in a single component

---

## LOGO & NAME

- Always written as: **SPOTD** — all caps, no punctuation, no full stop
- Never: Spotd / spotd / Spot D / SPOT.D / S.P.O.T.D
- The logo is a wordmark only — no icon, no symbol
- On white background: #0F0F0F
- On dark/black background: #FFFFFF
- Always give the wordmark clear space equal to the height of the S on all sides

---

## UI & LAYOUT RULES

### Core Principles
1. **Content first** — design serves content, never the other way around
2. **Function over decoration** — no gradients, shadows, rounded corners (max 4–8px where needed), textures or illustration
3. **Whitespace creates hierarchy** — spacing and hairline rules define sections, not colour blocks
4. **One accent** — #0000EE is used sparingly and purposefully

### Grid & Spacing
- Base spacing unit: 8px
- Standard page padding: 24px left/right
- Section dividers: 1px solid #EBEBEB — never thick coloured bars
- Desktop layout: 50/50 split grid — events left, people right
- Mobile: single column, events first

### Component Rules
```
Buttons (primary):   background #0F0F0F  color #FFFFFF  padding 10-14px 20-24px  border-radius 6-8px
Buttons (secondary): background transparent  border 1px solid #EBEBEB  color #0F0F0F  same padding
Buttons (hover):     primary → opacity 0.75 / secondary → background #F7F7F7
Input fields:        border 1px solid #EBEBEB  border-radius 8-10px  focus: border #B0B0B0
Cards/rows:          no border-radius on list items  border-bottom 1px solid #EBEBEB
Hover states:        background #F7F7F7 — never colour changes on hover
Tags/pills:          font-size 10-12px  border 1px solid #EBEBEB  border-radius 4-6px or 100px
```

### Featured / Sponsored Treatment
- 3px #0000EE vertical stripe on left edge of featured event row
- Small "Featured" badge: color #0000EE, background #e8e8ff, border 1px solid #aaaaee
- "Sponsored" micro label in event detail view
- #0000EE used nowhere else except featured system, save states and free labels

---

## NAVIGATION

```
Height: 52px
Layout: logo left-centre | nav tabs centre | actions right
Background: #FFFFFF
Border-bottom: 1px solid #EBEBEB
Position: fixed top

Logo: font-size 15px  font-weight 700  letter-spacing 3px  text-transform uppercase
Nav tabs: font-size 13px  active state → background #0F0F0F color #FFFFFF  border-radius 6px
CTA button: "Join Free" — background #0F0F0F  color #FFFFFF  font-size 13px  font-weight 600
```

---

## PAGE STRUCTURE

### Homepage (3 pages/views)
1. **Events** (default) — search hero + 50/50 split (event list left, creators/collabs right)
2. **Map** — full-screen Leaflet map with event pin popups, city selector, category filter pills
3. **Saved** — bookmarked events list

### Event List (left column)
- Gig guide / newspaper format — NOT cards, NOT grid
- Each row: date column (60px, border-right) | event body | price + save button
- Date column shows: day number (large, bold) + month (uppercase, small) + day of week
- Grouped by: Tonight / This Weekend / Next Week
- Featured events: 3px #0000EE left stripe + "Featured" badge
- Save button: heart icon, toggles to filled + #0000EE when saved

### People (right column)
- Two tabs: Creators | Collabs
- Creators: avatar (initials, circle) + name + role + tags + city + "Collab" button
- Collabs: who + open/closed badge + 2-line excerpt + need tags + Respond/Save buttons
- Post a Collab CTA pinned to top of Collabs tab

### Event Modal
- Triggered by clicking any event row
- Image header (200–220px height, object-fit cover)
- Title + category label
- 2x2 meta grid: Date | Time | Venue | Price
- About paragraph
- Primary CTA (Get Tickets / RSVP) + Save button
- Footer: "Managed by Rodeo Clubhouse" with link
- Close on: X button, backdrop click, Escape key

---

## SEARCH & FILTER

- Live search: filters event list as user types (title, venue, category match)
- City dropdown: filters by data-city attribute on event elements
- Category pills: All / Music / Art / Film / Dance / Spoken Word / Free Entry
- Results count updates live: "X events found"
- Empty state: show "No events found — try a different search or city"

---

## MAP

- Library: Leaflet.js (v1.9.4) with CartoDB light tiles
- Tile URL: `https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png`
- Custom markers: 34x34px circle, background #0F0F0F, white border 2px, box-shadow
- Featured event markers: background #0000EE
- Popup: white card, border-radius 10px, border 1px solid #EBEBEB, no tip arrow
- Popup contains: featured badge (if applicable) + category + title + venue + date + price + "View →" button
- City selector changes map view — cities: London, Manchester, Birmingham, New York, Melbourne
- Category pills filter which markers show

---

## RODEO CLUBHOUSE — BRAND RELATIONSHIP

SPOTD and Rodeo Clubhouse are distinct brands. They are never merged.

| | SPOTD | Rodeo Clubhouse |
|---|---|---|
| Role | The platform / product | The agency behind it |
| Audience | Artists, event-goers, creators | Artists and brands who need agency services |
| Voice | Community-first | Service / B2B |

### On the SPOTD platform
- Rodeo Clubhouse appears in two places ONLY:
  1. A slim black strip directly under the nav: "Rodeo Clubhouse — Marketing · Management · Events — Work with us →"
  2. Footer: small text "Powered by Rodeo Clubhouse"
- Never give Rodeo Clubhouse more prominence than this on the SPOTD platform
- Footer CTA section may reference Rodeo Clubhouse in the supporting copy

---

## TONE OF VOICE

SPOTD speaks like someone embedded in the creative community — direct, warm, culturally literate. Not corporate. Not hype. Not tech-bro casual.

### Do
- Write in sentence case
- Be specific: dates, venues, prices, names
- Use contractions naturally
- Keep copy short — every word earns its place

### Never
- Use exclamation marks in brand copy
- Use: "amazing", "vibrant", "passionate", "leverage", "ecosystem", "disrupt"
- Write in Title Case for body copy
- Use vague language: "exciting opportunities", "connect with creatives"

### Examples
```
Good: "Open cipher tonight. Step up."
Good: "Free entry. All voices welcome."
Good: "Post what you need. Let the right people find you."

Bad: "Discover AMAZING events near you!!!"
Bad: "Join our vibrant creative community today!"
Bad: "Unlock your creative potential with SPOTD."
```

---

## DATA STRUCTURE

Each event object should follow this shape:

```javascript
{
  id: 'unique-id',
  img: 'https://...',           // Unsplash or real event image
  cat: 'Rap · Live Performance', // Category string
  title: 'Event Name',
  date: 'Friday 21 March',
  time: 'Doors 8PM',
  venue: 'Venue Name, Area, City',
  price: '£5',                  // or 'Free' / 'Free entry'
  about: 'Short description...',
  btn1: 'Get Tickets',          // Primary CTA label
  featured: true,               // boolean — drives gold treatment
  lat: 51.4613,                 // For map marker
  lng: -0.1156
}
```

Each creator:
```javascript
{
  initials: 'SP',
  name: 'Sy the Poet',
  role: 'Rapper · Producer',
  tags: ['Hip-Hop', 'Beats'],
  city: 'London'
}
```

---

## WHAT NOT TO BUILD

- No gradients anywhere
- No drop shadows (except subtle modal overlay shadow)
- No decorative illustration or icons beyond functional SVGs
- No purple, teal, pink or any colour not in the palette
- No busy backgrounds or textures
- No sticky sidebars
- No infinite scroll — paginate or show "Load more"
- No autoplay video or audio
- No cookie banners or pop-ups in the MVP

---

## TECH STACK (Phase 1 — Current)

- Single HTML file — HTML + CSS + vanilla JS
- Leaflet.js for maps
- Google Fonts (Inter)
- No frameworks, no build tools
- Deployed on Netlify via drag and drop
- Domain: spotd.co (target)

## TECH STACK (Phase 2 — Planned)

- Next.js frontend
- Supabase (database + auth)
- Sanity (CMS for events)
- Stripe (ticket payments)
- Vercel (hosting)
- React Native (mobile app)

---

*SPOTD Brand Guidelines v1.0 — March 2026 — A Rodeo Clubhouse product*
