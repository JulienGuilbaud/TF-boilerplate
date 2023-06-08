import * as tf from '@tensorflow/tfjs';


const status = document.getElementById('status');
if (status) {
  status.innerText = 'Loaded TensorFlow.js - version: ' + tf.version.tfjs;
}
