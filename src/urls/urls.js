const prodUrls = {
    // prod
    sls: 'https://api-p.com',
}

const qaUrls = {
    //qa
    sls: 'https://api-q.com'
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