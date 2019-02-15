const util = {};

util.test = function () {
	alert('test')
}

util.ajaxPromise = function (param) {
    return new Promise(function (resovle, reject) {
        // console.log(param)
        $.ajax({
            type: param.type || "get",
			async: param.async || true,
            url: param.url,
            data: param.data,
            success: (res, req) => {
                resovle(res);
            },
            error: err => {
                reject(err);
            }
        })
    })
}

export default util;