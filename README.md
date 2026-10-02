# WSTI Tag Wall

A tiny website from WSTI's Saturday AI Lab, 3 October 2026, showing how a **Claude cloud routine** works with **GitHub**.

**What happens**
1. At an event, people scan a QR code, pick the event, and drop their LinkedIn or Instagram. Their name pops up on the live wall.
2. A Claude cloud routine (a Claude that works on its own computer in the cloud) is told to run. It reads this repository, refreshes the event list from Meetup, collects everyone who agreed to be tagged, and writes the thank you post.
3. It hands the change back as a branch on GitHub. **A person reads it and approves it.** Once approved, the post appears on the website.

**Why GitHub?** The routine's computer is wiped after every run. GitHub is where its work lives: the website's code, the event list, and every post it has written, with a full history of who changed what.

**Files**
- `index.html` the website. Add `?wall` to the address for the big screen view.
- `config.js` where names are sent and read from.
- `events.json` the event list, kept up to date by the routine.
- `posts/` the posts the routine writes.
- `ROUTINE.md` the routine's instructions, in plain English.
