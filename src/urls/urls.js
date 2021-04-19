const prodUrls = {
    // prod
    sls: ' https://uddivir7cj.execute-api.us-east-1.amazonaws.com/dev/api',
}

const qaUrls = {
    //qa
    sls: ' https://uddivir7cj.execute-api.us-east-1.amazonaws.com/dev/api'
}

let urls = qaUrls;
if (typeof window !== `undefined`) {
    if (window.location.href.includes("localhost")) {
        console.log("qa env");
        urls = qaUrls;
    } else {
        console.log("prod env");
        urls = prodUrls;
    }
}

export default urls; 