const postcssConfig = {
  plugins: [require("autoprefixer")],
};

// If we are in production mode, then add cssnano
if (process.env.NODE_ENV === "production") {
  postcssConfig.plugins.push(
    require("cssnano")({
      preset: "default",
    })
  );
}

module.exports = postcssConfig;
