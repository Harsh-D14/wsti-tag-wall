# WSTI Tag Wall

A tiny website from WSTI's Saturday AI Lab, 3 October 2026, showing how a **Claude cloud routine** works with **GitHub**.

**What happens**
1. At an event, people scan a QR code and drop their name and LinkedIn or Instagram on their phone.
2. **A person checks every entry** and removes anything that should not be shown.
3. They start a Claude cloud routine (a Claude that works on its own computer in the cloud). It refreshes the event list from Meetup, double checks the names, and publishes them to this repository.
4. A minute later everyone's name drops onto the big screen as a bouncing ball. Handles are never published or shown.

**Why GitHub?** The routine's computer is wiped after every run. GitHub is where its work lives: the website's code, the event list and every published wall, with a full history of what changed and when.

**Files**
- `index.html` the website. Add `?wall` to the address for the big screen view.
- `config.js` where the phone form sends answers.
- `events.json` the event list, kept up to date by the routine.
- `wall/` one file per event with the checked names, written by the routine.
- `ROUTINE.md` the routine's instructions, in plain English.
