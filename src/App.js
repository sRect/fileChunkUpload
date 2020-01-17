import React from 'react';
import ReactDOM from 'react-dom';
import UploadFile from '@/components/UploadFile';
import 'normalize.css';
import './assets/less/public.less';

ReactDOM.render(
  <div>
    <UploadFile />
  </div>,
  document.querySelector('#app')
);
