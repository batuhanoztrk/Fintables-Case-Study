module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@hooks": "./src/hooks",
            "@navigation": "./src/navigation",
            "@models": "./src/models",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@utils": "./src/utils",
            "@assets": "./assets",
            "@store": "./src/store",
            "@root": "./",
            "@app": "./src",
          },
        },
      ],
    ],
  };
};
