//configurar nuestro path
const path = require('path');
//plugin que instalamos
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  //entrada , cual va a ser mi elemento principal, punto de entrada
  entry: './src/index.js',
  //a donde quiero empujar mi proyecto ouput
  output: {
    //saber donde me encuentro, directorio donde esta el proyecto
    //y ahi crea una carpeta dist donde se va a guardar nuestro
    //proyecto
    path: path.resolve(__dirname, 'build'),
    //lamar a mi compilado de JS una asignacion de nombre, como se va
    //a construir
    filename: 'bundle.js',
  },
  //configuracion para saber con que archivos vamos a trabajar
  resolve: {
    //extenciones con las cuales estamos trabajando
    extensions: ['.js', '.jsx'],
  },
  //modulo donde vamos a tener las reglas de negocio del proyecto
  module: {
    //definimos las reglas por medio de arreglos
    rules: [
      {
        //creamos expresion regular para identificar estos
        //archivos
        test: /\.(js|jsx)$/,
        //vamos a excluir la carpeta de node modules
        exclude: /node_modules/,
        //y vamos a utilizar el loder que utilizamos en babel
        use: {
          loader: 'babel-loader',
        },
      },
      //identificar los archivos html de nuestro proyecto, entenderlos
      //y prepararlos
      {
        test: /\.html$/,
        //uso del loader que previamente instalamos
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg|jpg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },
  //agregar plugin que instalamos para entender el archivo index y el que
  //vamos a generar en la carpeta dist para enviar a produccion
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      //se va a empujar como
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    //Habilitar para poder acceder a la información y mostrar cada una de las rutas
    historyApiFallback: true,
    port: 3005,
    open: true
  },
};