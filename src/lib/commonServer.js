import util from '@/lib/util';

// const site = 'http://127.0.0.1:8081';
const site = 'http://192.168.174.131:8080';

const commonServer = {
    getTree: function (params) {

    },
    postTree: function (params) {
        // ...
    },
    getImgList: function (params) {
        var result = util.ajaxPromise({
            type: 'GET',
            url: site + '/Family/HelloServlet',
            data: params || {}
        });
        return result;
    }
}

export {site, commonServer};
