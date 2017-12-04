import 'babel-polyfill';
import './index.scss';

if (module.hot) {
  module.hot.accept();
}

document.body.append(`${process.env.NODE_ENV}@${process.env.VERSION}`);