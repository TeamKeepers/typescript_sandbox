# Sandbox using Typescript

Material to prepare play around with Typescript using [Parcel](https://github.com/parcel-bundler/parcel) & [Webpack](https://www.npmjs.com/package/webpack).

## How to start the app ?

You have 3 solutions after running the `yarn install`:

1. Run `yarn start-parcel` to serve the app on [http://localhost:1234](http://localhost:1234) using Parcel.

2. You can also compile directly your TS code into JS thanks to the command `yarn start-ts`.

3. Or you can use Webpack to compile your code and serve it on [http://localhost:8080/](http://localhost:8080/) thanks to `yarn start-webpack`.

## Packages used

- [Parcel](https://github.com/parcel-bundler/parcel) to configure easily the typesript compiler (& more);

- [Parcel Plugin Typescript](https://www.npmjs.com/package/parcel-plugin-typescript) to break the compiler if errors are found in typescript;

- [Typescript](https://www.npmjs.com/package/typescript) to be able to compile manually into JS files;

- [TS Loader](https://www.npmjs.com/package/ts-loader) to use webpack instead of Parcel;

- [Webpack](https://www.npmjs.com/package/webpack), [Webpack-CLI](https://www.npmjs.com/package/webpack-cli) & [Webpack Dev Server](https://www.npmjs.com/package/webpack-dev-server) to be able to use Webpack.

- [Html Webpack Plugin](https://www.npmjs.com/package/html-webpack-plugin) to serve properly the webpack compiled files and get all the console.logs. 

> Sandbox based mainly on Typescript tuto by [Level Up Tutorials](https://www.leveluptutorials.com/tutorials/level-1-typescript/)