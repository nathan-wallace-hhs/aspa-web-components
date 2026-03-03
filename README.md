# ASPA Web Components

## Storybook Setup

This documentation provides guidance on setting up Storybook for the ASPA Web Components library.

### Prerequisites
- Ensure you have Node.js (v14 or later) installed.
- Yarn (optional, but recommended) for dependency management.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/nathan-wallace-hhs/aspa-web-components.git
   cd aspa-web-components
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   or if you are using Yarn:
   ```bash
   yarn
   ```

### Running Storybook
1. Start Storybook:
   ```bash
   npm run storybook
   ```
   or with Yarn:
   ```bash
   yarn storybook
   ```
2. Open your browser and go to [http://localhost:6006](http://localhost:6006) to view Storybook.

### Adding Stories
To add a new story:
1. Create a new file named `YourComponent.stories.js` in the same folder as your component.
2. Define your stories using the following structure:
   ```javascript
   import YourComponent from './YourComponent';

   export default {
     title: 'Components/YourComponent',
     component: YourComponent,
   };

   const Template = (args) => <YourComponent {...args} />;

   export const Default = Template.bind({});
   Default.args = {
     // Your component props here
   };
   ```


### Deploying Storybook to GitHub Pages
A GitHub Actions workflow is included at `.github/workflows/deploy-storybook.yml` to build and deploy Storybook to GitHub Pages.

- The workflow runs on pushes to `main` and `master`, and can also be triggered manually with **Run workflow**.
- It installs dependencies with `npm install`, builds Storybook, uploads the static output, and deploys with the official Pages actions.
- Enable GitHub Pages in the repository settings and set the source to **GitHub Actions**.

### Conclusion
You can now create and view stories for your web components. Customize the setup and stories as needed for your project requirements.

For more information on Storybook, visit [the official documentation](https://storybook.js.org/docs/react/get-started/introduction).