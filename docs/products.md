# Products and prices (placeholders, 2026-09-03)

Set by Rich for testing the purchase flow. Not final.

| Product | Price | Where | What it reads |
|---|---|---|---|
| Bedroom sensor, base | $49 | one per bedside | breathing and heart micro-motion, presence |
| Bedroom sensor, stone with nightlight | $69 | one per bedside | same, plus a nightlight |
| Bedroom sensor, plant | $69 | one per bedside | same, plant form factor |
| Pressure mat | $49 | one per bedside | weight on a strip where the feet land |
| Door sensor | $19 | bedroom door; kitchen or stairs at Medium/High | a door opening |
| Living-space sensor, base | $49 | kitchen, living room, other rooms | presence and movement only |
| Living-space sensor, stone | $59 | same | same |
| Living-space sensor, plant | $59 | same | same |
| Bathroom sensor | $29 | bathroom or en suite | humidity and movement |
| Fall sensor (working name, seismometer) | $89 | one per floor | floor vibration; senses a fall anywhere on that floor |
| Hallway mini-puck (plugs into an outlet) | not priced | hallways, landings | presence and movement; catches wandering between rooms |

Open: the door hub (one per home) has no price yet. The page does not mention it.
Open: the seismometer needs a real name. "Fall sensor" is the working name on the page.
Note: the door line promises open AND close. Current Secrui hardware only hears opens; the GS-WDS07 (open and close) is the planned part.

Rules the page uses are in `start/kit.js` (`recommend()`), tested by hand with node.
The privacy line is on every screen: no cameras, no microphones, ever.
