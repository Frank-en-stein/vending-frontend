import networkUtils from './networkUtils';
import * as urlConstants from './resources/urlConstants.json';

const axios = require('axios');

function getInfo(payload, callback) {
    console.log(payload);
    axios.get(networkUtils.makeUrl(urlConstants.paths.get.info.prefix, payload, urlConstants.paths.get.info.suffix))
        .then((response) => {
            try {
                //var data = JSON.parse(response.data);
                callback(true, response.data);
            } catch (e) {
                console.log(e, response);
            }
        })
        .catch((error) => {
            console.log(error);
            callback(false, null);
        });
}

function getVideoData(url, callback) {
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.responseType = 'blob';
    req.onload = function() {
       if (this.status === 200) {
          var videoBlob = this.response;
          var vid = URL.createObjectURL(videoBlob); // IE10+
          callback(vid);
       }
    }
    req.onerror = function(e) {
       console.log(e);
    }
    req.send();
}

export default { getInfo, getVideoData };
