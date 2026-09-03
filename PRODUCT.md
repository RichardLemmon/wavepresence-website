# Product
<!-- impeccable:product-schema 1 -->

Written 2026-09-03 from the redesign session in `wavepresence-app` and the
sensors project docs, not from an interview. Facts marked *(inferred)* are
Claude's reading of the repos; everything else Rich stated directly.

## Platform
web

## Users
A family member, usually an adult child, looking after a parent who lives at
home. Sometimes the parent lives with them, often in their own home nearby or
in another town. They are worried about falls, night-time wandering, and not
knowing. They are not technical. They will not install cameras on a parent.
The parent will not wear a tag, a watch, or a wristband.

## Product Purpose
WavePresence senses whether the rooms of a home are active, and tells the
family when something is worth knowing: a fall, a night-time exit, a long
silence, a sensor that went quiet. It does not track people. It watches rooms.
Success is a family that sleeps because the system is watching, and a parent
who never feels watched.

## Positioning
No cameras. No microphones. No wearables. Radar, pressure, door, light, and
humidity sensors only. Every sensor lies in a different way, so no verdict
rests on one channel. Bedroom sensors read breathing and heart micro-motion;
living-space sensors read presence and movement only. This is stronger privacy
than any camera or voice product, and it works on a parent who refuses to wear
anything.

## Operating Context
- A family buys a kit on the website after a short interview about who they
  are looking after and which rooms matter. The kit ships with a QR code.
- Scanning the code opens the app, which continues the setup with the
  website answers already filled in. The app then walks them room by room:
  plug in the node, prove it, learn the empty room.
- Alerts go to a Care Circle: family members in priority order or all at
  once. An SMS-only contact list is planned.
- The app is Flutter (`wavepresence-app`). The API is Express on Railway
  (`wavepresence-api`). Sensors are ESP32 nodes (`wavepresence-sensors`).

## Capabilities and Constraints
Products and prices (Rich, 2026-09-03; placeholders for testing the flow):
- Bedroom sensor: base $49, stone with nightlight $69, plant $69. One per
  bedside. Reads breathing and heart micro-motion plus presence.
- Pressure mat: $49. One per bedside. A strip where the feet land.
- Door sensor: $19. Reports a door opening. Needs the door hub, one per home.
  *(inferred: hub price not yet set)*
- Living-space sensor: base $49, stone $59, plant $59. Presence and movement
  only. No breathing or heart reading.
- Bathroom sensor: $29. Humidity and movement.
- Fall sensor (working name; a seismometer): $89. One per floor. Senses a fall anywhere on that floor.

Constraints:
- Two people in one bed need one bedroom sensor and one mat per bedside. Two
  radars in one room are untested on the bench as of 2026-09-03.
- A bedroom with an en-suite bathroom changes the highest alarm: a person can
  leave the bed for minutes without opening the door.
- Notification level is one choice, Low / Medium / High, with plain examples.
  The first week learns the pattern and sends a daily report.
- The website is static HTML on Cloudflare Pages. Pushes to `main` deploy.
  The waitlist endpoint on the API is the only backend the site talks to.
- The current landing page still describes a wristband and three room
  sensors. That is stale; the wristband was removed.

## Brand Commitments
- Name: WavePresence. Support: support@wavepresence.com.
- Voice: calm, plain, dignified. "People deserve to be looked after without
  being watched." Never clinical, never alarming, never cute.
- Visual world already in `index.html`: parchment ground, sage and amber and
  clay accents, Fraunces display, Hanken Grotesk body. New pages inherit it.

## Evidence on Hand
- Real bench data from Rich's own bedroom, kitchen, and living room, nightly
  since late August 2026 (`wavepresence-sensors/docs`).
- No customer testimonials. No press. No third-party benchmarks. Do not
  invent any.
- No product photography yet. Stone and plant form factors have no images.

## Product Principles
1. Watch rooms, never people. Say "the bedroom was quiet", not "Mom is asleep".
2. No question without a consequence. Ask only what changes what the system does.
3. A false alarm at 3 a.m. is how the product gets unplugged. Err quiet.
4. The family answers once. Website answers flow into the app.
5. Privacy is the product, not a footnote. Lead with it.

## Accessibility & Inclusion
Buyers are often 50 to 70 years old, on a phone, possibly at night. Large
targets, high contrast, one question per screen, no time limits.
