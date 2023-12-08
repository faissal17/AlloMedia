# Professional CI/CD Guide <img src="https://gitlab.msu.edu/uploads/-/system/project/avatar/6141/gitlab-ci-cd-logo_2x.png" width="100" align="right">


This guide provides a comprehensive setup for Continuous Integration (CI) and Continuous Deployment (CD) using GitHub Actions for a Node.js application.

![Docker Image](https://miro.medium.com/v2/resize:fit:1200/1*F39rzqKF2emm93GFllmxoA.png)

## Main Continuous Integration Workflow

### File: `.github/workflows/main-ci.yml`

```yaml
name: Main Continuous Integration

on:
  push:
    branches:
      - main

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout Source Code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Install Dependencies
      run: npm ci

    - name: Run Unit Tests
      run: npm test
```

**Explanation :**

- The CI workflow triggers on every push to the `main` branch.

- It checks out the code, sets up Node.js, installs dependencies, and runs tests.

- Customize the `npm test` command to match your testing framework and script.

## Main Continuous Deployment Workflow

### File: `.github/workflows/main-cd.yml`

```yaml
name: Main Continuous Deployment

on:
  push:
    branches:
      - main

jobs:
  deploy-to-production:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout Source Code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Install Dependencies
      run: npm ci

    - name: Deploy to Production
      run: |
        # Example: Deploy to AWS Elastic Beanstalk
        aws configure set aws_access_key_id ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws configure set aws_secret_access_key ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        eb deploy
```

**Explanation :**

- The CD workflow triggers on every push to the `main` branch.

- It checks out the code, sets up Node.js, installs dependencies, and deploys to production.

- Customize the deployment script based on your deployment target (AWS Elastic Beanstalk in this example).

For more information on GitHub Actions and customization options, refer to the official GitHub Actions documentation:


- **GitHub Actions Documentation**

  - Explore more about GitHub Actions and enhance your workflow customization with in-depth details in the official GitHub Actions documentation:
  - [GitHub Actions Documentation](https://docs.github.com/en/actions)

For specific topics and advanced use cases, consider exploring these additional resources :

- **GitHub Actions Marketplace:**
  - Discover and leverage pre-built GitHub Actions from the community.
  - [GitHub Actions Marketplace](https://github.com/marketplace?type=actions)

- **GitHub Learning Lab - GitHub Actions:**
  - Engage in hands-on learning with GitHub Actions through interactive courses.
  - [GitHub Learning Lab](https://lab.github.com/githubtraining/github-actions:-hello-world)

- **GitHub Actions Community Forum:**
  - Participate in discussions, seek advice, and share your experiences with the GitHub Actions community.
  - [GitHub Actions Community Forum](https://github.community/c/github-actions/42)

- **Awesome GitHub Actions:**
  - A curated list of delightful GitHub Actions resources and workflows.
  - [Awesome GitHub Actions](https://github.com/sdras/awesome-actions)

For a comprehensive guide on Continuous Integration and Continuous Deployment, navigate [here](./ci-cd-guide.md).
