const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./assets/js/app.js', './assets/scss/main.scss'], // Entradas para JS y SCSS
  output: {
    path: path.resolve(__dirname, 'public'), // Carpeta de salida
    filename: 'js/main.js', // Nombre del archivo JS de salida
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Regla para archivos SCSS
        use: [
          MiniCssExtractPlugin.loader, // Extrae el CSS en un archivo separado
          'css-loader', // Interpreta `@import` y `url()`
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'), // Usa la implementación de Dart Sass
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.css', // Ruta y nombre del archivo CSS de salida
    }),
  ],
  mode: 'development', // Modo de desarrollo
};