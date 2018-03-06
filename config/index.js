import _ from 'lodash';
import global from './env/global';
import development from './env/development';
import { load } from 'dotenv';

module.exports = _.merge(global, {
  development,
}[load().parsed.NODE_ENV || 'development']);
