const axios = require("axios");

const API_URL = "https://graphqlzero.almansi.me/api";

describe("GraphQL API - Users & Albums", () => {
  it("should fetch a user by ID", async () => {
    const query = `
      query {
        user(id: "1") {
          id
          name
        }
      }
    `;

    const res = await axios.post(API_URL, { query });

    expect(res.status).toBe(200);
    expect(res.data.data.user).toHaveProperty("id", "1");
    expect(res.data.data.user).toHaveProperty("name");
  });

  it("should fetch a list of albums", async () => {
    const query = `
      query {
        albums(options: { paginate: { page: 1, limit: 5 } }) {
          data {
            id
            title
          }
        }
      }
    `;

    const res = await axios.post(API_URL, { query });

    expect(res.status).toBe(200);
    expect(res.data.data.albums.data.length).toBeGreaterThan(0);
    expect(res.data.data.albums.data[0]).toHaveProperty("id");
    expect(res.data.data.albums.data[0]).toHaveProperty("title");
  });

  it("should fetch a single album by ID", async () => {
    const query = `
      query {
        album(id: "1") {
          id
          title
        }
      }
    `;

    const res = await axios.post(API_URL, { query });

    expect(res.status).toBe(200);
    expect(res.data.data.album).toHaveProperty("id", "1");
    expect(res.data.data.album).toHaveProperty("title");
  });

  it("should return null fields for a non-existent user", async () => {
    const query = `
      query {
        user(id: "999999") {
          id
          name
        }
      }
    `;

    const res = await axios.post(API_URL, { query });

    expect(res.status).toBe(200);
    expect(res.data.data.user).toEqual({
      id: null,
      name: null,
    });
  });

  // Тестови што ги скипуваме бидејќи API е read-only
  it.skip("should create a new user (skipped - API is read-only)", async () => {});
  it.skip("should create a new album (skipped - API is read-only)", async () => {});
});
