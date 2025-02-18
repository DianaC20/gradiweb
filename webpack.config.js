const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/app.js', 'assets/scss/main.scss'], // Entradas para JS y SCSS
  output: {
    path: path.resolve(__dirname, 'public'), // Carpeta de salida
    filename: 'main.js', // Nombre del archivo JS de salida
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Regla para archivos SCSS
        use: [
          MiniCssExtractPlugin.loader, // Extrae el CSS en un archivo separado
          'css-loader', // Interpreta `@import` y `url()`
          'sass-loader', // Compila SCSS a CSS
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/scss/styles.css', // Ruta y nombre del archivo CSS de salida
    }),
  ],
  mode: 'development', // Modo de desarrollo
};