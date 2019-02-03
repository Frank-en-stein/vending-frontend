import * as urlConstants from './resources/urlConstants.json';

function makeUrl(prefix, getParam, suffix) {
    return urlConstants.domain + prefix + "/" + getParam + suffix;
}

export default { makeUrl };
