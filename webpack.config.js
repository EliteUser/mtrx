const path = require('path');
const loaderUtils = require('loader-utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sassModuleRegex = /\.module\.(scss|sass)$/;

const getLocalIdent = (
  context,
  localIdentName,
  localName,
  options
) => {
  // Use the filename or folder name, based on some uses the index.js / index.module.(css|scss|sass) project style
  const fileNameOrFolder = context.resourcePath.match(
    /index\.module\.(css|scss|sass)$/
  )
    ? '[folder]'
    : '[name]';
  // Create a hash based on a the file location and class name. Will be unique across a project, and close to globally unique.
  const hash = loaderUtils.getHashDigest(
    path.posix.relative(context.rootContext, context.resourcePath) + localName,
    'md5',
    'base64',
    5
  );
  // Use loaderUtils to find the file or folder name
  const className = loaderUtils.interpolateName(
    context,
    fileNameOrFolder + '_' + localName + '__' + hash,
    options
  );
  // Remove the .module that appears in every classname when based on the file and replace all "." with "_".
  return className.replace('.module_', '_').replace(/\./g, '_');
};

/////////////////////////////////////////////////////////////////////////////

module.exports = (env, argv) => {
  const isProduction = (argv.mode === 'production');

  return {
    target: 'web',
    entry: './src/index.js',
    output: {
      filename: 'js/bundle.js',
      path: path.resolve(__dirname, 'build')
    },

    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      watchContentBase: true,
      port: 3000,
      hot: true,
      compress: true,
      open: true,
      host: '192.168.3.2'
    },

    devtool: isProduction ? false : 'source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    },

    module: {
      rules: [
        // Loader for js / jsx
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },

        // Loader for scss-modules
        {
          test: sassModuleRegex,
          use: [
            isProduction ? {
              loader: MiniCssExtractPlugin.loader,
            } : 'style-loader',
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 3,
                sourceMap: !isProduction,
                modules: {
                  getLocalIdent: getLocalIdent,
                },
              }
            },
            {
              loader: 'resolve-url-loader',
              options: {
                sourceMap: !isProduction,
                root: path.join(__dirname, 'src'),
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: './src/scss/variables.scss',
              }
            }
          ]
        },

        // Loader for scss
        {
          test: /\.(scss|sass)$/,
          exclude: sassModuleRegex,
          use: [
            isProduction ? {
              loader: MiniCssExtractPlugin.loader,
            } : 'style-loader',
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 3,
                sourceMap: !isProduction,
              }
            },
            {
              loader: 'resolve-url-loader',
              options: {
                sourceMap: !isProduction,
                root: path.join(__dirname, 'src'),
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: './src/scss/variables.scss',
              }
            }
          ]
        },

        // Loader for SVG files
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                svgoConfig: {
                  plugins: [
                    {
                      prefixIds: false,
                      cleanupIDs: false
                    }
                  ],
                }
              }
            },
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets',
                publicPath: '../assets',
              }
            }
          ]
        },

        // Loader for images
        {
          test: /\.(png|jpg|jpeg|gif|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'img',
                publicPath: '../img',
                name: '[name]-[sha1:hash:7].[ext]'
              }
            }
          ]
        },

        // Loader for fonts
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'fonts',
                publicPath: '../fonts',
                name: '[name].[ext]'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: 'public/index.html',
          },
          isProduction
            ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
              },
            }
            : undefined
        )
      ),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].chunk.css',
      }),
    ],
  };
};
