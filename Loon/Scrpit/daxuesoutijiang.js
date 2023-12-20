let response = JSON.parse($response.body);
if (response.data && response.data.bannerList) {
    delete response.data.bannerList; 
} else if (response.data && response.data.banner) {
    delete response.data.banner;
}
$done({body: JSON.stringify(response)});