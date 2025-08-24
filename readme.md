# Propeller QA Assignment

This repository contains my solution for the Propeller QA Assignment.  
The goal was to test a headless GraphQL API and to set up a CI/CD pipeline for automated testing.


## Task 1: Basic API Testing

The API that I worked with: [https://graphqlzero.almansi.me/api](https://graphqlzero.almansi.me/api)  

I wrote automated test cases using **Jest** and **Axios**.  
The focus is only on **Users** and **Albums** (other types were ignored as requested).

### Covered test cases
- Fetch a user by ID  
- Fetch a list of albums (with pagination)  
- Fetch a single album by ID  
- Negative test: query a non-existing user  
- Error handling: invalid query should return errors  
- Skipped mutation tests (API is read-only, but placeholders are added)

### How to run the tests
1. Clone the repository:
   ```bash
   git clone https://github.com/DarkoDukovski/propeller-qa-assignment.git
   cd propeller-qa-assignment

2. Install dependencies:
npm install

3. Run tests:
npm test

Task 2: CI/CD Pipeline (Bonus)

I set up a GitHub Actions workflow (.github/workflows/ci.yml) to automatically run the tests.
The pipeline has two stages:

Build – install dependencies (npm ci)

Test – run the Jest test suite

Triggers

Runs on every push and pull request to the main branch

Also runs daily on schedule (07:00 UTC)

This ensures that the tests are executed continuously and that any issues are caught early.

Notes

The API is read-only, so create mutations are skipped.

Every line of code was reviewed and understood before being committed.

The pipeline can be extended in a real project to include deployment steps after the tests pass.