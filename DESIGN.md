---
name: WavePresence
description: Organic tech — pale mint ground, deep moss slabs, and one acid-lime signal that only ever means live or chosen.
colors:
  ground: "#F1F5EE"
  ground-2: "#E7EDE3"
  paper: "#FFFFFF"
  ink: "#0E1F17"
  ink-2: "#2E4D3A"
  ink-3: "#5F7568"
  ink-4: "#8FA694"
  line: "#DCE4D8"
  line-soft: "#E7EDE3"
  lime: "#C3F53C"
  lime-deep: "#A8DC1E"
  lime-wash: "#EDFBCE"
  moss: "#1B3527"
  moss-2: "#254735"
  on-moss: "#EAF3E6"
  glass: "rgba(14,31,23,.76)"
  dial-track: "#E4EBDF"
  error: "#A8452B"
  error-on-moss: "#FFD9A8"
  warn: "#9A5A12"
typography:
  # The complete ramp. Eight literal steps and four clamps — nothing else is
  # allowed in the CSS. Snapped from twenty ad-hoc values on 2026-09-03; the
  # steps sit far enough apart that a reader can tell two of them apart.
  displayHero:
    fontFamily: "Manrope, -apple-system, system-ui, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.05rem)"
    fontWeight: 800
    lineHeight: 1.03
    letterSpacing: "-0.045em"
  display:
    fontFamily: "Manrope, -apple-system, system-ui, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.3rem, 6.4vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.03
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Manrope, -apple-system, system-ui, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.9rem, 5.4vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1.03
    letterSpacing: "-0.045em"
  slab:
    fontFamily: "Manrope, -apple-system, system-ui, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.5rem, 4.4vw, 2.15rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  amount:
    fontFamily: "Manrope, -apple-system, system-ui, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 3.2rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.055em"
  title:
    fontFamily: "Manrope, -apple-system, system-ui, 'Segoe UI', sans-serif"
    fontSize: "18px"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Manrope, -apple-system, system-ui, 'Segoe UI', sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "Manrope, -apple-system, system-ui, 'Segoe UI', sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  amountSmall:
    fontFamily: "Manrope, -apple-system, system-ui, 'Segoe UI', sans-serif"
    fontSize: "34px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.05em"
  heading:
    fontFamily: "Manrope, -apple-system, system-ui, 'Segoe UI', sans-serif"
    fontSize: "24px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.035em"
  subtitle:
    fontFamily: "Manrope, -apple-system, system-ui, 'Segoe UI', sans-serif"
    fontSize: "20px"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  supporting:
    fontFamily: "Manrope, -apple-system, system-ui, 'Segoe UI', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  caption:
    fontFamily: "Manrope, -apple-system, system-ui, 'Segoe UI', sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, -apple-system, system-ui, 'Segoe UI', sans-serif"
    fontSize: "12px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  lg: "28px"
  md: "18px"
  sm: "12px"
  inline: "9px"
  mark: "7px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "14px"
  lg: "18px"
  xl: "24px"
  "2xl": "28px"
  "3xl": "40px"
  "4xl": "56px"
  section: "72px"
components:
  button-primary:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "16px 27px"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.lime-deep}"
    textColor: "{colors.ink}"
  button-moss:
    backgroundColor: "{colors.moss}"
    textColor: "{colors.on-moss}"
    rounded: "{rounded.pill}"
    padding: "16px 27px"
  button-moss-hover:
    backgroundColor: "{colors.moss-2}"
    textColor: "{colors.on-moss}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "16px 27px 16px 10px"
  button-ghost-hover:
    backgroundColor: "{colors.ground-2}"
    textColor: "{colors.ink}"
  chip:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
    typography: "{typography.label}"
  privacy-pill:
    backgroundColor: "{colors.moss}"
    textColor: "{colors.on-moss}"
    rounded: "{rounded.pill}"
    padding: "9px 15px"
  glass-pill:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.on-moss}"
    rounded: "{rounded.md}"
    padding: "11px 15px"
  slab-moss:
    backgroundColor: "{colors.moss}"
    textColor: "{colors.on-moss}"
    rounded: "{rounded.lg}"
    padding: "38px 40px"
  slab-pale:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "38px 40px"
  card-pale:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "30px 30px 32px"
  card-moss:
    backgroundColor: "{colors.moss}"
    textColor: "{colors.on-moss}"
    rounded: "{rounded.lg}"
    padding: "30px 30px 32px"
  input-text:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "15px 17px"
  input-pill:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "15px 18px"
  choice:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "17px 19px"
  choice-selected:
    backgroundColor: "{colors.lime-wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "17px 19px"
  choice-mark:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    size: "22px"
  choice-mark-selected:
    backgroundColor: "{colors.lime}"
    rounded: "{rounded.pill}"
    size: "22px"
  kit-line:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "18px 20px"
  kit-line-off:
    backgroundColor: "transparent"
    textColor: "{colors.ink-3}"
    rounded: "{rounded.md}"
    padding: "18px 20px"
  kit-line-required:
    backgroundColor: "{colors.lime-wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "18px 20px"
  row:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "11px 13px"
  stepper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.sm}"
    height: "48px"
  progress-segment:
    backgroundColor: "{colors.line}"
    rounded: "{rounded.pill}"
    height: "4px"
  progress-segment-done:
    backgroundColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    height: "4px"
  progress-segment-now:
    backgroundColor: "{colors.lime}"
    rounded: "{rounded.pill}"
    height: "7px"
---

# Design System: WavePresence

## Overview

**Creative North Star: "The Home Is the Nature"**

WavePresence is care technology that has to disappear into somebody's mother's
kitchen. The world is built from two halves that argue with each other and settle:
real photographs of living, ordinary objects — a succulent in a concrete planter, a
stone on a nightstand — carry the organic half, and dark glass pills, acid-lime
rings and tight geometric type float on top of them as the tech half. Neither half
is decoration. The photograph is the product; the glass and the lime are the
reading.

The ground is a pale mint (`#F1F5EE`), never white, and it is the default state of
every page. Depth arrives only twice, and only under circles. Colour is rationed
hard: deep moss is a slab you use when a passage must stop the scroll, and acid lime
is a single signal that means *this is live* or *this is chosen* — never a price,
never body text, never a link. Everything else is a green-black ink ramp on pale
mint, with hairlines instead of boxes wherever a hairline will do.

This refuses two defaults at once. It refuses the eldercare category — white
clinical panels, blue "medical alert" chrome, stock photos of smiling seniors — and
it equally refuses the warm-parchment wellness page this site used to be. The buyer
is fifty to seventy, on a phone, usually in daylight, deciding whether to spend
money on their parent's safety. Light ground, large targets, plain sentences, and
one loud colour used sparingly enough that it still means something when it appears.

All values here are literal and portable: the Flutter app (`wavepresence-app`) is
the next surface in this world and should read hexes, radii, durations and curves
straight out of this file rather than re-deriving them from the site.

**Key Characteristics:**
- Pale mint ground, never white; paper white is a *card*, not a page.
- One acid-lime signal, meaning live or chosen, and nothing else.
- Deep moss slabs, rationed to the passage that must stop the scroll.
- Manrope 800 at negative tracking for everything structural; nothing decorative.
- Photographs of real objects, with dark glass floating on top of them.
- Circles are the data form: rings, arcs, dials, medallions, pucks.
- Hairlines, not boxes. Nearly everything is flat.
- One authored motion: content settles like a reading landing.

## Colors

A green-black ink ramp on pale mint, punctuated by exactly two loud materials: an
acid lime that signals, and a deep moss that stops.

### Primary
- **Acid Lime** (`#C3F53C`): The one signal. It marks the primary action (`Find your
  kit`, `Continue`, `Reserve`), the live dot beside a room reading, the filled arc of
  the hero ring, the filled arc of the outermost dial ring, a selected radio or
  checkbox mark, the current progress segment, the rule above a kit total, the
  completion tick, and every focus ring. It never carries a price, body copy, a
  heading, or a link.
- **Lime Deep** (`#A8DC1E`): The pressed/hover state of any lime surface. It exists
  only as the second half of an interaction, never at rest.
- **Lime Wash** (`#EDFBCE`): The chosen *field* — the pale tint that fills a selected
  choice row, a required kit line, and the hover state of a stepper or add button.
  Where full lime marks a point, lime wash marks an area.

### Secondary
- **Deep Moss** (`#1B3527`): The slab. It is the privacy claim, the Care pricing card,
  and the reserve block — and on the landing page nothing else. Its scarcity is what
  makes a moss block read as *stop and read this*.
- **Moss 2** (`#254735`): The hover state of a moss button. Never a surface at rest.
- **On-Moss** (`#EAF3E6`): Text on any moss or glass surface. Body copy on moss drops
  to 80% of it; secondary labels to 66–72%.

### Tertiary
- **Dark Glass** (`rgba(14,31,23,.76)` over `blur(14px)`): The floating overlay
  material used only on top of photography — hero readings, the hero ring's inner
  face, the room caption in the kit finder. Always paired with a 1px
  `rgba(255,255,255,.14)` inner hairline so it separates from any image beneath it.

### Neutral
- **Pale Mint Ground** (`#F1F5EE`): The page. Every screen starts here.
- **Ground 2** (`#E7EDE3`): The recessed tint — image placeholders, explainer panels,
  ghost-button hover, the inline field inside a row.
- **Paper** (`#FFFFFF`): Cards, inputs, choice rows and kit lines. White is a raised
  object on the mint page, never the page itself.
- **Ink** (`#0E1F17`): Headings, body, and the label on any lime surface.
- **Ink 2** (`#2E4D3A`): Secondary body, ledes, descriptions, the focused input
  border, the "done" progress segment, and the second dial ring.
- **Ink 3** (`#5F7568`): Tertiary — hints, footers, units, quantities, dial hour marks.
- **Ink 4** (`#8FA694`): The quietest ink — unselected mark borders, dashed borders,
  hover borders, and the third dial ring.
- **Line** (`#DCE4D8`) / **Line Soft** (`#E7EDE3`): The two hairlines. `line` for
  interactive edges (inputs, choices, kit lines), `line-soft` for passive frames
  (gallery figures, explainer panels).
- **Dial Track** (`#E4EBDF`): The unfilled portion of a room-activity arc.
- **Clay Error** (`#A8452B`): The one error voice on pale ground — message text and
  invalid input borders. On moss it lightens to **Amber On-Moss** (`#FFD9A8`).
- **Amber Warn** (`#9A5A12`): Reserved for a kit line's caution note ("with two people
  in the bed, one sensor can't tell who got up"). A warning is not an error.

### Named Rules
**The One Signal Rule.** Lime means *live* or *chosen*. If a lime mark on screen does
not answer "what is happening right now" or "what did I pick", it is wrong. Prices,
links, body text and headings are never lime.

**The Rationed Moss Rule.** A moss slab is a scroll-stopper, so a page gets at most a
couple. On the landing page it is the privacy claim and the Care card. Adding a third
moss block does not make the page richer; it makes the first two stop working.

**The Lime-Inside-Moss Rule.** Moss is the only surface where lime may act as an
accent rather than a signal: the emphasised word in a slab headline, the shield icon
in the privacy pill, and the huge `rgba(195,245,60,.12)` ring bleeding off the slab's
corner. Outside moss, that licence is revoked.

**The Dimmed Hairline Rule.** A lime hairline is always a tint, never full strength:
`rgba(195,245,60,.3)` on moss, `rgba(195,245,60,.45)` on pale. A full-strength lime
rule would outshine the one mark on the page that means live.

## Typography

**Display Font:** Manrope 800 (with `-apple-system, system-ui, 'Segoe UI', sans-serif`)
**Body Font:** Manrope 400/500 (same stack)
**Label Font:** Manrope 800, letterspaced (same stack)

Loaded from Google Fonts at weights 400, 500, 600, 700 and 800 with `display=swap`,
preconnected to both `fonts.googleapis.com` and `fonts.gstatic.com`.

**Character:** One geometric grotesk doing every job, separated by weight and tracking
rather than by family. It is clean and slightly technical — the type of an instrument,
not of a brochure — and at 800 with heavy negative tracking it reads as confident and
plainspoken rather than shouty. No serif appears anywhere in this world.

### Hierarchy
- **Display** (800, `clamp(2.3rem, 6.4vw, 3.5rem)`, line-height 1.03, tracking
  -0.045em): Page headline. The hero pushes its ceiling to `clamp(2.5rem, 6vw, 4.05rem)`.
  Always `text-wrap: balance`.
- **Headline** (800, `clamp(1.9rem, 5.4vw, 2.6rem)`, 1.03, -0.045em): Section headings
  and every kit-finder question. One question per screen means the question *is* the
  headline.
- **Slab Headline** (800, `clamp(1.5rem, 4.4vw, 2.15rem)`, 1.08, -0.04em, max 20ch):
  The claim at the top of a moss or pale slab. The hard 20ch measure is what makes it
  break into two or three short lines instead of running as a paragraph.
- **Amount** (800, `clamp(2.4rem, 5vw, 3.2rem)`, 1, -0.055em): Prices and kit totals.
  The tightest tracking in the system; its unit (`one-time`, `/month`) rides alongside
  at 13–16px in ink-3.
- **Title** (800, 17.5–24px, -0.015em to -0.035em): Card headings, kit line names,
  step titles, list item names.
- **Lede** (400, 18px — 19px in the hero, line-height 1.5, ink-2, max 56ch / 46ch in
  the hero): The sentence under every headline. Never optional, never longer than two
  sentences.
- **Body** (400, 17px, 1.5, ink): The page default.
- **Small** (400/600, 14–16px, ink-2 or ink-3): Descriptions inside choices, hints,
  footers, notes.
- **Label** (800, 10.5–13px, tracking +0.02em to +0.14em, uppercase, ink-3 or a
  translucent on-moss): Meta above or beneath a value — `ONE PER BEDSIDE`,
  `ACTIVE TODAY`, `OF USUAL`, `AT HOME`, `EXAMPLE READING`.

### Named Rules
**The Tighter-Bigger Rule.** Tracking is a function of size and runs the whole ramp:
display -0.045em, amounts -0.055em, titles -0.015em to -0.035em, body normal, labels
positive from +0.02em up to +0.14em. Nothing in this world is set at default tracking
and large.

**The Emphasis-Is-Lighter Rule.** Emphasis inside a headline is `<em>` rendered as
*upright and quieter*, never italic and never bolder: `ink-3` on pale ground, lime on
moss. "Monitoring a loved one's safety **without** being intrusive" reads with its
pivot word dropping back, not leaping forward.

**The 800-Or-400 Rule.** Structure is 800; prose is 400; 600–700 exists only for small
interface text (labels, chips, notes). There is no 500-weight heading and no
600-weight display.

## Layout

The landing page is a single 1120px column with 28px gutters; the kit finder is a
780px column with 24px gutters, as is the masthead on both pages. Everything is
centred, single-column, top-to-bottom — there is no sidebar, no sticky rail, no
overlay navigation anywhere in the build.

Vertical rhythm on the landing page is a 72px section (52px below 760px). Inside a
section, the two-up compositions — hero, and how-it-works — are asymmetric CSS grids
(`1fr 1.06fr` and `1.05fr 1fr`) with a 56px gap, both collapsing to a single stacked
column with a 34px gap at 900px. The near-equal ratios matter: neither column is
subordinate, so the photograph reads as evidence rather than illustration.

Spacing steps in use: 4, 8, 10, 14, 18, 24, 28, 40, 56, 72. Component padding is
consistently *slightly wider than tall* on pale surfaces (17px 19px, 18px 20px,
16px 27px) and generous on slabs (38px 40px, dropping to 28px 24px under 640px).

Measures are enforced, not incidental: 56ch on a lede, 46ch on the hero lede, 58ch on
slab body and gallery ledes, 42ch on a kit item description, 52ch on the done state,
20ch on a slab headline, 18ch on the closing headline.

Breakpoints are content-driven rather than a device ladder — each one is the width at
which a specific component breaks: 1180px and 1000px (the kit slab's medallion and its
three columns), 900px (hero and how-it-works stack), 760px (section rhythm), 720px
(moss slab list to one column), 700px (pricing pair), 680px (kit list to one column),
640px (slab padding), 620px (explainer pair), 560px (gallery, style pickers, and the
room photo's caption dropping out of glass onto a moss bar), and 358px (the privacy
pill sheds its text and keeps its icon).

### Named Rules
**The One Column Rule.** Every layout resolves to one centred column on a phone. The
buyer is on a phone, often at night; there is no horizontal scroll, no carousel, and
no two-up that survives below 560px.

**The Content Breakpoint Rule.** Add a breakpoint at the width where a component
actually breaks, and name it for that component. Do not add device-named tiers.

## Elevation & Depth

This world is flat by default. Surfaces are separated by *tone and hairline* — paper
on mint, mint-2 recess, moss slab, dark glass — and almost nothing casts a shadow.

Exactly two elements in the whole build carry a real drop shadow, and both are circles
that overlap something: the room-activity dial, floating on the page ground, and the
photo medallion that breaks out of the kit slab's corner. Both are heavily blurred,
low-opacity and green-tinted, so they read as air rather than as a border.

Everything else that looks like a shadow is a *ring* — a spread-only, zero-blur lime
halo used for state, not for lift.

### Shadow Vocabulary
- **Dial float** (`box-shadow: 0 26px 70px rgba(20,40,28,.13)`): Under the largest
  circular data object, so it hovers over the ground.
- **Medallion lift** (`box-shadow: 0 18px 44px rgba(14,31,23,.22)`): Under a circular
  photograph that overlaps a slab edge; paired with a 7px ground-coloured ring so the
  cut-out reads deliberately.
- **Live halo** (`box-shadow: 0 0 0 4px rgba(195,245,60,.25)`): Around the 8px lime dot
  that means a room is in use now.
- **Focus halo** (`box-shadow: 0 0 0 4px rgba(195,245,60,.4–.45)`): Around a focused
  input or select, alongside an `ink-2` border. On moss it dims to `.22` and the border
  goes lime.
- **Now halo** (`box-shadow: 0 0 0 3px rgba(195,245,60,.28)`): Around the current
  progress segment.
- **Completion halo** (`box-shadow: 0 0 0 10px rgba(195,245,60,.22)`): Around the lime
  tick on the reserved state — the largest halo in the system, used once, at the end.

### Named Rules
**The Only Circles Lift Rule.** A drop shadow is licensed only for a circular object
that overlaps something else. Rectangles — cards, slabs, kit lines, inputs — are flat
and stay flat; if a rectangle needs separation, change its tone or give it a hairline.

**The Halo-Not-Glow Rule.** Every lime `box-shadow` is spread-only with zero blur. It
is a ring, and it means state (live, focused, current, done). Never use a blurred lime
glow.

## Shapes

Round is the system's whole vocabulary and it comes in three sizes plus a pill. Slabs,
photographs and pricing cards take the large radius (28px); cards, choice rows, kit
lines, gallery figures and glass captions take the medium (18px); inputs, steppers,
row chips and quantity controls take the small (12px), with a 9px inline variant for a
field nested inside a row and 7px for a checkbox mark. Anything that is an *action* or
a *tag* — buttons, chips, the privacy pill, email inputs, progress segments — is a
full pill (999px).

True circles carry every piece of data and every identity: the hero's conic-gradient
ring, the four concentric dial arcs, the step numerals, the live dot, the photo
medallion, the completion tick, radio marks, and the vast `46px`/`42px`-stroked lime
outline circles that bleed off the corner of a moss slab.

Borders are 1px for passive frames and 1.5px for anything interactive, so an input or a
choice reads as touchable before it is touched. Dashed 1.5px is a real state, not a
decoration: it means *available but not taken* — an unchecked kit line, the "add a pet"
and "add a room" buttons.

### Named Rules
**The Circle-Is-Data Rule.** Any reading — time of day, share of usual, live/not-live,
selected/not — is a circle or an arc. Bars, sparklines and pie wedges have no place in
this world. The room-activity dial is the canonical form and the Flutter dashboard
inherits it directly.

**The Dashed-Means-Optional Rule.** A dashed 1.5px border means the thing is available
and not currently chosen. Never use dashed as decoration or as a disabled style.

## Components

### Buttons
- **Shape:** Full pill (999px), with a 16px SVG icon at an 11px gap, always trailing on
  a forward action and leading on a back action.
- **Primary:** Lime field, ink label, 800 weight, 17px, tracking -0.01em, 16px × 27px
  padding. There is one primary action per screen.
- **Hover / Active:** Background to lime-deep over 160ms ease; a 1px downward nudge on
  `:active` over 120ms. Disabled is 50% opacity and a default cursor.
- **Moss (`.btn.sage`):** Moss field, on-moss label — the secondary commitment
  (`Join the waitlist`). Hovers to moss-2. Inside a moss slab this same class inverts to
  a lime field with ink label, because moss on moss would vanish.
- **Ghost:** Transparent, ink-2 label, 700 weight, reduced left padding so the icon
  optically aligns with the column edge. Hovers to a ground-2 field. This is `Back`, and
  it is the only button that may sit beside a primary.
- **Focus:** A 3px lime outline at 2px offset, on every interactive element in the
  system without exception.

### Chips
- **Style:** Lime field, ink label, 12px/800 at +0.02em, pill, 6px × 12px. Used as a
  small tag over photography or beside a live reading.
- **Legend chip (`.lg`):** Paper field, `line` hairline, pill, 13.5px/700, with a 9px
  colour dot. This is the read-only twin of the chip — it labels a series in the dial,
  and its dot carries the series colour.
- **Privacy pill:** Moss field, on-moss label at 13px/700, with a lime 14px icon. Below
  358px it drops its text and survives as icon only.

### Cards / Containers
- **Corner Style:** 28px on slabs and pricing cards, 18px on cards and figures.
- **Background:** Paper with a `line` hairline (the default), moss with no border (the
  scroll-stopper), or ground-2 with a `line-soft` hairline (the recessed explainer).
- **Shadow Strategy:** None. See *The Only Circles Lift Rule*.
- **Internal Padding:** 30–32px on pricing cards, 38px × 40px on slabs (28px × 24px
  under 640px), 20px × 22px on explainer panels.

### Inputs / Fields
- **Style:** Paper field, 1.5px `line` border. Text inputs take the 12px radius and
  15px × 17px padding; email capture takes the pill radius and 15px × 18px.
- **Focus:** Border to ink-2 plus a 4px `rgba(195,245,60,.4–.45)` lime halo, over 160ms.
  On moss, the border goes lime and the halo dims to `.22`.
- **Error:** Border to clay (`#A8452B`), `aria-invalid="true"`, and a 15px/600 clay
  message revealed beneath. On moss the message lightens to `#FFD9A8`.
- **Select:** Ships the world's own chevron as an inline ink-2 SVG data-URI at 16px,
  14px from the right edge, with `appearance: none`. The platform chevron never appears.
- **Stepper:** A pill-less 12px capsule with two 48px × 48px icon buttons around a
  56px-wide 800/20px output; buttons wash lime on hover. This is how every count is
  entered — adults, floors, quantities — instead of a numeric keyboard.

### Navigation
- **Masthead:** A wordmark and the privacy pill, 22px vertical padding, on the page
  ground with no border and no background. `Wave` at 800 and `Presence` at 500 in ink-3
  — the name splits itself by weight.
- **Footer:** Centred, 14px, ink-3, restating the privacy claim.
- **Kit finder progress:** Seven equal 4px pill segments with a 7px gap. Done segments go
  ink-2; the current segment goes lime, grows to 7px and takes a 3px lime halo; future
  segments stay `line`. Hidden entirely on the intro step. This is the only navigation
  the flow has — there is no step list and no back-to-top.

### Room-Activity Dial (signature)
A 400 × 400 inline SVG on a radial-gradient face (paper at the centre, ground-2 at the
rim), 1:1, max 440px, circular, with the dial float shadow. Four concentric rings at
radii 158, 124, 90 and 56 draw one room each; every ring is a grey track plus a coloured
arc over it, `stroke-linecap: round`, rotated -90° so midnight is at the top. Activity
is expressed as `stroke-dasharray` — each dash is a stretch of time the room was in use,
each gap a stretch it was not, and the final huge dash value simply runs out the
remainder of the circumference. The outermost ring, the one currently live, is the only
lime one; the rings inward run ink-2, ink-4, then a pale grey. Hour marks sit at 12a /
6a / 12p / 6p in 10.5px/700 ink-3 at +0.08em. The centre carries a two-line verdict —
a display-weight status ("All quiet") over an uppercase label ("AT HOME"). Legend chips
sit beneath, one per ring.

This is the data language the Flutter dashboard inherits: rings for time-of-day, dashes
for episodes of use, lime for the live one, ink ramp for the rest.

### Hero Shot (signature)
A 4:3.4 photograph at the 28px radius with three floating overlays: a glass pill top-left
carrying a live lime dot and a room reading; a glass pill bottom-left carrying a large
figure over an uppercase label; and a 122px conic-gradient ring bottom-right where lime
fills the completed share and `rgba(255,255,255,.22)` fills the remainder, with a glass
disc inset holding the percentage. A 10.5px `EXAMPLE READING` tag in translucent white
sits top-right — demonstration data is always labelled as such.

### Kit Line (signature)
The kit finder's checkbox row: a three-column grid (mark / name+room / price) with
explanatory rows spanning beneath. Selected is a paper field with an ink-2 border and a
lime-filled 7px-radius mark. Unselected inverts to transparent with a *dashed* border,
every text role drops to ink-3, the quantity control hides, and a persistent "Left out
for now" note appears. A required line is locked: lime-wash field, ink-2 border, lime
mark, `aria-disabled`, and a bold ink-2 sentence explaining why it cannot be removed.
Warnings inside a line are amber (`#9A5A12`); skip-advice is ink-3. The quantity control
is a smaller stepper on a ground field with a trailing unit label ("bedsides", "doors").

### Kit Slab (signature)
The pale variant of the moss slab: paper field, `line` hairline, `overflow: visible`, its
corner ring suppressed, its item list split into lime-tinted hairline rows across three
columns, and a 168px circular photograph overhanging its top-right corner by -46px/-58px
inside a 7px ground-coloured ring. The medallion shrinks to 136px then 96px as the
viewport narrows but never stops overlapping — the overlap *is* the component.

**A specificity trap, recorded so it does not recur.** `assets/organic.css` styles
`.band ul` (three columns) and `.band li` (near-white text on moss). Any pale variant of
`.band` must take *every* one of those roles back explicitly — heading colour, paragraph
colour, list colour, bold colour, price colour, and the grid template — or it inherits
near-white text on a white field and disappears. `.kitband` in `index.html` is the worked
example.

### Motion
One authored motion and a small set of state transitions.

- **Settle** (`.settle` → `.settle.in`): opacity 0→1 and `translateY(22px)`→0 over 620ms
  on `cubic-bezier(.16,1,.3,1)` — exponential ease-out, fast out of the gate and slow
  into place, the way a reading lands. Driven by an `IntersectionObserver` at
  `rootMargin: 0 0 -8% 0`, `threshold: .06`, staggered `(i % 4) * 70ms`. Anything already
  above the fold reveals immediately rather than waiting.
- **Rise** (`@keyframes rise`): the kit finder's per-step entrance — 460ms, same curve,
  16px travel.
- **State transitions:** 160ms ease for colour, background and border; 120ms ease for a
  button's active nudge and a checkmark's opacity; 240ms ease for progress segments.
- **Reduced motion:** `prefers-reduced-motion: reduce` disables the settle transition, the
  step animation and the progress transition entirely.
- **Failsafe:** a 2500ms timeout reveals every settle target and disconnects the observer,
  and the observer is skipped outright when it or reduced-motion is unavailable. Content
  is never stranded invisible.

### Named Rules
**The Never-Stranded Rule.** Any reveal must degrade to visible: no JS, no observer,
reduced motion, or a slow browser all end with the content on screen. A reveal that can
hide content permanently is worse than no reveal.

**The One Motion Rule.** The system has one authored curve, `cubic-bezier(.16,1,.3,1)`,
and one gesture — settling downward into place. Everything else is a short linear-ish
ease on a colour. No bounce, no spring, no parallax, no scroll-jacking.

## Do's and Don'ts

### Do:
- **Do** start every surface on pale mint (`#F1F5EE`) and treat paper white as a raised
  object on it.
- **Do** spend lime on exactly one thing per screen — the live reading, the chosen item,
  or the primary action.
- **Do** dim lime to `rgba(195,245,60,.12–.45)` whenever it is structure (hairlines,
  slab rings, halos) rather than signal.
- **Do** use a moss slab when a passage must stop the scroll, and let it be rare.
- **Do** draw readings as rings and arcs, with `stroke-linecap: round` and midnight at the
  top.
- **Do** set structural type in Manrope 800 with negative tracking, and let emphasis be
  *quieter* (ink-3, or lime on moss), never italic.
- **Do** give every interactive element the same 3px lime focus outline at 2px offset.
- **Do** use a 1.5px dashed border for "available, not chosen" and a lime-wash field for
  "chosen".
- **Do** label demonstration data on the surface that shows it (`EXAMPLE READING`,
  `Example day`).
- **Do** enforce measure — 56ch ledes, 42ch item copy, 20ch slab headlines — so nothing
  runs as a wall.
- **Do** hold 48px touch targets on steppers and 44px+ on buttons; the buyer is 50–70 and
  on a phone.
- **Do** re-declare every inherited text role when creating a pale variant of a moss
  component.

### Don't:
- **Don't** put lime on a price, a heading, body copy, or a link.
- **Don't** add a third moss slab to a page; scarcity is what makes moss work.
- **Don't** use a full-strength lime hairline or a blurred lime glow — tinted rules and
  spread-only halos only.
- **Don't** put a drop shadow on a rectangle. Separate with tone or a hairline instead.
- **Don't** introduce a second typeface, a serif, or a 500-weight heading.
- **Don't** use italics for emphasis anywhere; `<em>` is upright and quieter by design.
- **Don't** use the platform's select chevron, checkbox or radio — this world ships its
  own.
- **Don't** chart with bars, wedges or sparklines; the data form is the ring.
- **Don't** use dark glass anywhere except directly on top of a photograph.
- **Don't** ship a reveal or entrance without a visible fallback under no-JS and
  `prefers-reduced-motion`.
- **Don't** add device-named breakpoints; add one where a component actually breaks.
- **Don't** reach for white (`#FFFFFF`) as a page background.
