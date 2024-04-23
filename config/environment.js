const development = {
  name: "development",
  mongoDb: process.env.mongoUrl,
};

const production = {
  name: "production",
  mongoDb: process.env.mongoUrl,
};

module.exports = development;
