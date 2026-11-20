# Forensic Lab Hub

A responsive, beginner-friendly forensic science learning portal. The project includes a browser-based frontend and a Node.js/Express backend that provides REST APIs for forensic disciplines, fictional case studies and quiz questions/scoring.

## Features

- Responsive landing page with About, Disciplines, Case Studies and Quiz sections.
- Six forensic discipline cards, with expandable explanations.
- Three fictional educational case studies.
- Five-question quiz whose questions are loaded from the backend.
- Server-side quiz scoring and explanations through a POST API.
- JSON REST API, health-check endpoint, basic security headers and error handling.
- No database or API keys required for the current feature set.

## Technology

- Frontend: HTML5, CSS3 and vanilla JavaScript.
- Backend: Node.js and Express.
- Middleware: Helmet, CORS and dotenv.

## Project structure

```text
forensic-lab-hub/
├── data/
│   └── content.js
├── public/
│   ├── app.js
│   ├── index.html
│   └── styles.css
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Requirements

- Node.js 18 or newer
- npm (included with Node.js)

## Run locally

1. Download or clone this repository.
2. Open a terminal in the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. (Optional) Copy `.env.example` to `.env` and change the port if needed.
5. Start the server:

   ```bash
   npm start
   ```

6. Open `http://localhost:3000` in your browser.

For development with automatic server restarts, run:

```bash
npm run dev
```

## API endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | API status and timestamp |
| GET | `/api/disciplines` | List all forensic disciplines |
| GET | `/api/disciplines/:id` | Get one discipline |
| GET | `/api/cases` | List fictional case studies |
| GET | `/api/quiz` | Get quiz questions without answers |
| POST | `/api/quiz/submit` | Submit answers and receive a score |

### Quiz submission example

```json
{
  "answers": [
    { "questionId": 1, "selectedOption": 1 },
    { "questionId": 2, "selectedOption": 0 }
  ]
}
```

The API responds with the score, percentage and per-question explanations.

## Deployment

This is a full-stack Node.js application. Deploy it to a host that supports Node.js (for example, Render or Railway), set the start command to `npm start`, and ensure the service uses the assigned `PORT` environment variable. The Express server serves the frontend from `public/` and the API from `/api`, so one Node service can host both.

The earlier static Vercel deployment at `https://forensic-lab-hub.vercel.app/` was a frontend-only version. It does not automatically gain this backend by uploading these files; redeploy this full-stack version to a Node-compatible host or configure an appropriate serverless backend before claiming the live site is full-stack.

## GitHub submission

1. Create a **public** repository named `forensic-lab-hub` in your GitHub account.
2. Upload all files and folders from this project (not only the ZIP file).
3. Confirm that `README.md`, `server.js`, `data/` and `public/` are visible on the repository page.
4. Copy the public repository URL for submission.

## Academic integrity and scope

This is an educational student project. Review the code, understand the API flow, and make any changes required by your assignment before submitting. The case studies are fictional and the content is introductory; it is not intended to provide forensic or legal advice.
