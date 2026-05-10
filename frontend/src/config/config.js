// Environment-based configuration

const config = {
  development: {
    API_URL: "http://localhost:5000/api"
  },
  production: {
    API_URL: "https://your-production-api.com/api"
  }
};

// Detect environment
const env = process.env.NODE_ENV || "development";

export default config[env];