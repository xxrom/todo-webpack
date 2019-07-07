/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

// Код, если нужно проанализировать bundle
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV !== 'production';
const isSourceMap = process.env.SOURCE_MAP === 'source-map';

const include = path.resolve(__dirname, 'src');
const exclude = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(__dirname, '.git'),
  path.resolve(__dirname, '.linaria-cache'),
  path.resolve(__dirname, 'dist'),
];
const excludeLinaria = exclude.filter((item) => item.indexOf('linaria') === -1);

const pluginsCommon = [
  new HtmlWebpackPlugin({
    hash: true,
    title: 'StopFactor',
    template: 'src/index.html',
    inject: true,
    tags: ['styles.css'],
    append: true,
  }),
  new MiniCssExtractPlugin({
    filename: 'styles.css',
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
];

const pluginsDev = [
  new HardSourceWebpackPlugin(),
  new HardSourceWebpackPlugin.ExcludeModulePlugin([
    {
      test: /css-loader/,
    },
  ]),
  new ProgressBarPlugin({
    format: '[:bar] :percent [:msg] ',
    clear: true,
  }),
];

const pluginsBuild = [
  new CompressionPlugin({
    algorithm: 'gzip',
    test: /\.ts|\.tsx|\.js|\.jsx$|\.html$/,
    threshold: 10240,
    minRatio: 0.8,
  }),
];

if (typeof BundleAnalyzerPlugin !== 'undefined') {
  pluginsDev.push(new BundleAnalyzerPlugin.BundleAnalyzerPlugin());
}

const optimization = {
  splitChunks: {
    chunks: 'async',
    minSize: 30000,
    maxSize: 0,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    automaticNameDelimiter: '~',
    name: true,
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      },
    },
  },
  removeAvailableModules: false,
  removeEmptyChunks: true,
  minimizer: [
    new UglifyJsPlugin({
      include: /\/src/,
      parallel: true,
      uglifyOptions: {
        compress: false,
        mangle: true,
      },
    }),
  ],
};

const useCss = ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader'];

const rules = [
  {
    test: /\.css$/,
    include,
    exclude: [...exclude, '/.*.linaria.css/'],
    use: useCss,
  },
  {
    test: /.*\.linaria\.css/,
    exclude: excludeLinaria,
    use: useCss,
  },
  {
    test: /\.tsx$/,
    include,
    exclude,
    use: [
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      'linaria/loader',
      'react-hot-loader/webpack',
    ],
  },
];

module.exports = {
  devtool: !isDev || isSourceMap ? 'source-map' : 'eval',
  mode: isDev ? 'development' : 'production',
  stats: {
    builtAt: true,
    colors: true,
    errors: true,
  },
  entry: {
    main: path.resolve(__dirname, 'src', 'index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    symlinks: false,
    cacheWithContext: false,
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@HOC': path.resolve(__dirname, 'src/HOC'),
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    clientLogLevel: 'error',
    noInfo: isDev,
    host: '0.0.0.0',
  },
  module: {
    rules,
  },
  plugins: [...pluginsCommon, ...(isDev ? pluginsDev : pluginsBuild)],
  optimization: isDev ? {} : optimization,
};
