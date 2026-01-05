Here is the accurate, forensic log for your LOG.md. This isn't just a list of tasks; it’s a record of your transition from a local student developer to a cloud-integrated engineer.

📜 Project Log: Task 1 - Global Odyssey
Project Name: Global Odyssey (Travel & Tourism Portal)

Developer: Arjun (Vijit Agarwal)

Mentor: Gemini

Timeline: Jan 4, 2026 – Jan 5, 2026 (Completed 24h ahead of schedule)

1. The Genesis (Where it came from)
The project started as a local Web Technologies lab assignment for Arjun’s 2nd-year BCA program. The goal was to build a multi-page travel website using HTML, CSS, and JS. Initially, the project lived only on a local Windows machine (D: Drive) in a nested, unorganized folder structure.

2. Technical Evolution (The "MindMeld" Shift)
We moved the project through three distinct phases:

Phase I: Infrastructure (The WSL & SSH Breakthrough)
The Problem: Managing Git through Windows GUI was inefficient for a Software Engineering major.

The Solution: Established a WSL (Ubuntu) environment. Linked local files to GitHub using SSH keys for secure, password-less authentication.

What Worked: Successfully bypassed the "Windows barrier" to use professional Linux-based Git commands.

Phase II: Deployment & CI/CD (The Vercel Integration)
The Problem: The site was only visible on Arjun's laptop.

The Solution: Connected the GitHub repository to Vercel.

The Struggle: We faced a "Root Directory" conflict where Vercel couldn't find the index.html due to a nested travel_website/ folder.

The Fix: Flattened the repository structure, bringing all files to the root. Reset the Vercel configuration to ./.

Phase III: Architectural Refinement
The Problem: Amateur file naming (WhatsApp images) and redundant CSS.

The Solution: * Created css/global.css to manage :root variables and shared components.

Standardized the CSS cascade (Bootstrap → Global → Page-specific).

Renamed assets to professional conventions (hero-main.jpg, etc.) and moved them to /assets.

3. The Security Layer (The "Cyber Minor" Edge)
To align with Arjun's Cybersecurity minor, we implemented:

security.txt (RFC 9116): Defining vulnerability disclosure policies.

robots.txt: Controlling crawler behavior.

Input Validation: Added JavaScript guards to the login form to prevent empty credential submissions.

4. Final Timeline (Jan 5th Sprint)
18:00 IST: Identified the "nested folder" issue blocking Vercel.

21:00 IST: Flattened the directory and forced the first successful Cloud deployment.

22:30 IST: Refactored the assets/ folder and fixed the Favicon path errors.

23:45 IST: Finalized README.md and Meta-tags for SEO.

00:00 IST (Jan 6): Project declared "Done" (with a comma).

5. Summary of "Unstoppable" Stats
Bugs Killed: 5 (Path errors, Case-sensitivity, Root mismatch, Cache traps, Hierarchy order).

Cloud Status: 100% Live (Vercel).

Repository Status: 100% Professional (SSH/Git).

Architectural Score: High (Modular CSS/Clean Assets).