# Damien Nichols - Personal Site

The official portfolio and marketing website for Damien Nichols. showcases the PulseLink Suite, Beta Max, QA Verify & Track, and the Universe Connected book series.

## Project Structure

Built with **React (Vite)** + **Vanilla CSS** (Premium Dark Theme).

- `src/pages/`: Individual route components.
- `src/components/`: Reusable UI components (Layout, Hero).
- `public/`: Static assets (Resume, PDF manuscripts).

## Local Development

1. **Install Dependencies**:

    ```bash
    npm install
    ```

2. **Run Development Server**:

    ```bash
    npm run dev
    ```

3. **Build for Production**:

    ```bash
    npm run build
    ```

## Deployment

This project is configured to deploy automatically to **damiennichols.com** via GitHub Actions.

- **Workflow**: `.github/workflows/deploy.yml`
- **Trigger**: Push to `main` branch.
- **Method**: FTP Sync to `public_html`.
- **Safety**: The workflow is configured to **exclude** existing subdomains (`app`, `pulselink`, `remove`, `test`) to prevent overwriting other applications hosted on the same server.

## Privacy Policy

The privacy policy is available at `/privacy` and covers:

- PulseLink / Beacon
- QA Verify & Track
- Beta Max
- General Site Usage

## License

All rights reserved. Damien Nichols.
