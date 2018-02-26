import _ from 'lodash';
import global from './global';

const env = require(`./${process.env.NODE_ENV}.js` || { default: {} }).default;

const config = _.merge(global, env);

export default config;
