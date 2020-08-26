const { default: Axios } = require("axios")

const getTheCity = () => {
    axios 
    .get('https://www.triposo.com/api/20200803/location.json?part_of=${this.state}&child_tag_labels=poitype-Bar')
    .then((responseFromApi) => {
        setCity({ city: responseFromApi.data });
    });
};