module.exports = [
    {
        name: "multiple headers",
        curl: "curl --location -X GET -H 'Content-Type: application/x-www-form-urlencoded' -H 'Accept-Encoding: something' 'https://example.com/posts'"
    },
    {
        name: "a headers",
        curl: "curl --location -X GET -H 'Content-Type: application/x-www-form-urlencoded' 'https://example.com/posts'"
    },
    {
        name: "data raw",
        curl: `curl -X GET 'http://localhost:3001/search?search=react&asdfa=asfdaf' \
        --header 'xapi-key: 21432139847290402402190' \
        --header 'Content-Type: text/html' \
        --data-raw '{
            "name": "string",
            "name2": "string"
        }'`
    },
    {
        curl: `curl --request GET \
        --url 'https://example.com/user/push_notification/total_unread' \
        --header 'device-type: ios' \
        --header 'Authorization: Bearer token' \
        --header 'timezone: Asia/Ho_Chi_Minh' \ `
    },
    {
        curl: `
        curl --request GET \
        --url 'https://example.com/user-device?limit=10000&page=1' \
        --header 'Authorization: Bearer token' \
        --header 'device-type: ios' \
        --header 'timezone: Asia/Ho_Chi_Minh' \ `
    },
    {
        curl: `curl --request GET \
        --url 'https://example.com/user-device?limit=10000&page=1' \
        --header 'Authorization: Bearer token' \
        --header 'device-type: ios' \
        --header 'timezone: Asia/Ho_Chi_Minh' \ `
    },
    {
        curl: `curl --request GET \
        --url 'https://example.com/playlists/1134/songs?limit=1000&page=1' \
        --header 'Authorization: Bearer token' \
        --header 'timezone: Asia/Ho_Chi_Minh' \
        --header 'device-type: ios' \ ` 
    },
    {
        curl: `curl --request POST \
        --url 'https://example.com/user/push_token' \
        --header 'Authorization: Bearer token' \
        --header 'device-type: ios' \
        --header 'timezone: Asia/Ho_Chi_Minh' \
        --header 'Content-Type: application/json' \
        --data '{"ios_firebase_token":"ios_firebase_token","device_type":"ios","token":"token"}'`
    }, 
    {
        curl: `curl --request GET \
        --url 'https://example.com/playlist/1134' \
        --header 'Authorization: Bearer token' \
        --header 'device-type: ios' \
        --header 'timezone: Asia/Ho_Chi_Minh' \ `
    },
    {
        curl: `curl --request GET \
        --url 'https://example.com/user' \
        --header 'timezone: Asia/Ho_Chi_Minh' \
        --header 'device-type: ios' \
        --header 'Authorization: Bearer token' \
        `
    },
    {
        curl: `
        curl --request GET \
        --url 'https://example.com/user/push_notification/total_unread' \
        --header 'device-type: ios' \
        --header 'Authorization: Bearer token' \
        --header 'timezone: Asia/Ho_Chi_Minh' \ `
    },
    {
        curl: `curl --request GET \
        --url 'https://staging.smarthome.iviet.com/api/v1.3/structure/all' \
        --header 'Authorization: Bearer token' \ `
    },
    {
        curl: `curl --request POST \
        --url 'https://staging.smarthome.iviet.com/api/v1.3/intent/sync_available' \
        --header 'Authorization: Bearer token' \
        --header 'Content-Type: application/json' \
        --data '{"maikaDetails":[{"name":"Maika phòng bếp","SN":"A1049538303","deviceId":7872}],"maikaSNS":["A1049538303"]}' `
    },
    {
        curl: `curl --request POST \
        --url 'https://staging.smarthome.iviet.com/api/v1.3/intent/sync_structure' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Bearer token' \
        --data '{"structureId":2276,"maikaSNS":["A1049538303"],"maikaDetails":[{"name":"Maika phòng bếp","SN":"A1049538303","deviceId":7872}]}' `
    },
    {
        curl: `curl --request GET \
        --url 'https://staging.smarthome.iviet.com/api/v1.3/room/all?structureId=2276' \
        --header 'Authorization: Bearer token' \ `
    },
    {
        curl: `curl --request GET \
        --url 'https://staging.smarthome.iviet.com/api/v1.3/hanet/place/list' \
        --header 'Authorization: Bearer token' \ `
    },
    {
        curl: `curl --request POST \
        --url 'https://staging.smarthome.iviet.com/api/v1.3/intent/sync_available' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Bearer token' \
        --data '{"maikaSNS":["A1049538303"],"maikaDetails":[{"name":"Maika phòng bếp","SN":"A1049538303","deviceId":7872}]}' `
    },
    {
        curl: `curl --request POST \
        --url 'https://staging.smarthome.iviet.com/api/v1.3/device/list' \
        --header 'Authorization: Bearer token' \
        --header 'Content-Type: application/json' \
        --data '{"ids":[47814,47814,47814,47814,47814,47814,47824,47824,47824,47824,47824,47796,47798,47800,47799,53212,53215,52709,52709,52709,52709,52709]}' `
    },
    {
        curl: `curl --request POST \
        --url 'https://staging.smarthome.iviet.com/api/v1.3/device/list' \
        --header 'Authorization: Bearer token' \
        --header 'Content-Type: application/json' \
        --data '{"ids":[48397,48397,48397,48397,48397,54148,53667,47801,47802,47803,47804,47805,47806,47807,47808,47809,47810,47811,47812,47815,47816,47816,47816,47816,47816,47817,47818,47819,47821,47823,47823,47823,47823,53456,47825,47825,47825,47825,47825,53457,53457,53457,53457,53457,53457,53460,53460,53460,53460,53208,53209,53210,53211,53213,53214,53216,53217,53218,53219,53220,53221,53222,53223,53224,53224,53224,53225]}'
        `
    },
    { 
        curl: `curl --request POST \
        --url 'https://staging.smarthome.iviet.com/api/v1.3/intent/query' \
        --header 'Authorization: Bearer token' \
        --header 'Content-Type: application/json' \
        --data '{"payload":[{"u":"switch","n":"735:::47814"},{"u":"setMute","n":"735:::47814"},{"n":"735:::47814","u":"setVolume"},{"u":"setVolumeRelative","n":"735:::47814"},{"u":"relativeChannel","n":"735:::47814"},{"n":"735:::47814","u":"selectChannel"},{"u":"switch","n":"735:::47824"},{"u":"setFanSpeed","n":"735:::47824"},{"n":"735:::47824","u":"setFanSpeedRelative"},{"u":"setReverse","n":"735:::47824"},{"u":"setFanSpeedPercent","n":"735:::47824"},{"n":"735:::47796","u":"scene"},{"n":"735:::47798","u":"scene"},{"n":"735:::47800","u":"scene"},{"n":"735:::47799","u":"scene"},{"n":"735:::53212","u":"scene"},{"u":"scene","n":"735:::53215"},{"u":"setMute","n":"735:::52709"},{"n":"735:::52709","u":"setVolume"},{"u":"setVolumeRelative","n":"735:::52709"},{"u":"openNetwork","n":"735:::52709"},{"u":"removeDevices","n":"735:::52709"}]}'
        `
    },
    {
        curl: `curl --request POST \
        --url 'https://staging.smarthome.iviet.com/api/v1.3/intent/query' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Bearer token' \
        --data '{"payload":[{"u":"switch","n":"735:::48397"},{"u":"switch","n":"735:::53457"},{"n":"735:::47825","u":"switch"},{"u":"scene","n":"735:::53213"},{"u":"switch","n":"735:::47815"},{"u":"switch","n":"735:::53223"},{"n":"735:::47819","u":"switch"},{"u":"switch","n":"735:::53460"},{"n":"735:::47806","u":"switch"},{"n":"735:::53220","u":"scene"},{"u":"switch","n":"735:::47816"},{"n":"735:::47803","u":"switch"},{"u":"scene","n":"735:::53211"},{"n":"735:::47812","u":"switch"},{"u":"scene","n":"735:::53456"},{"u":"switch","n":"735:::47823"},{"u":"switch","n":"735:::47809"},{"n":"735:::53224","u":"switch"},{"u":"scene","n":"735:::53208"},{"u":"scene","n":"735:::53219"},{"u":"scene","n":"735:::47802"},{"u":"scene","n":"735:::53216"},{"u":"switch","n":"735:::47808"},{"u":"switch","n":"735:::47805"},{"n":"735:::53222","u":"scene"},{"n":"735:::47818","u":"switch"},{"u":"scene","n":"735:::53214"},{"u":"scene","n":"735:::54148"},{"u":"scene","n":"735:::53210"},{"n":"735:::47811","u":"switch"},{"u":"switch","n":"735:::53225"},{"n":"735:::47804","u":"switch"},{"n":"735:::53221","u":"scene"},{"u":"switch","n":"735:::47817"},{"n":"735:::47801","u":"scene"},{"u":"scene","n":"735:::53218"},{"u":"scene","n":"735:::53667"},{"u":"scene","n":"735:::53209"},{"u":"switch","n":"735:::47810"},{"u":"switch","n":"735:::47821"},{"u":"switch","n":"735:::47807"},{"u":"scene","n":"735:::53217"}]}'
        `
    },
    {
        curl: `curl --request POST \
        --url 'https://staging.smarthome.iviet.com/api/v1.3/device/list' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Bearer token' \
        --data '{"ids":[48397,48397,48397,48397,48397,54148,53667,47801,47802,47803,47804,47805,47806,47807,47808,47809,47810,47811,47812,47815,47816,47816,47816,47816,47816,47817,47818,47819,47821,47823,47823,47823,47823,53456,47825,47825,47825,47825,47825,53457,53457,53457,53457,53457,53457,53460,53460,53460,53460,53208,53209,53210,53211,53213,53214,53216,53217,53218,53219,53220,53221,53222,53223,53224,53224,53224,53225]}'
        `
    },
    {
        curl: `curl --request POST \
        --url 'https://staging.smarthome.iviet.com/api/v1.3/intent/query' \
        --header 'Authorization: Bearer token' \
        --header 'Content-Type: application/json' \
        --data '{"payload":[{"u":"switch","n":"735:::48397"},{"u":"switch","n":"735:::53457"},{"u":"switch","n":"735:::47825"},{"u":"scene","n":"735:::53213"},{"n":"735:::47815","u":"switch"},{"n":"735:::53223","u":"switch"},{"n":"735:::47819","u":"switch"},{"u":"switch","n":"735:::53460"},{"n":"735:::47806","u":"switch"},{"u":"scene","n":"735:::53220"},{"u":"switch","n":"735:::47816"},{"u":"switch","n":"735:::47803"},{"n":"735:::53211","u":"scene"},{"n":"735:::47812","u":"switch"},{"u":"scene","n":"735:::53456"},{"u":"switch","n":"735:::47823"},{"u":"switch","n":"735:::47809"},{"u":"switch","n":"735:::53224"},{"u":"scene","n":"735:::53208"},{"u":"scene","n":"735:::53219"},{"n":"735:::47802","u":"scene"},{"u":"scene","n":"735:::53216"},{"u":"switch","n":"735:::47808"},{"u":"switch","n":"735:::47805"},{"n":"735:::53222","u":"scene"},{"n":"735:::47818","u":"switch"},{"u":"scene","n":"735:::53214"},{"u":"scene","n":"735:::54148"},{"u":"scene","n":"735:::53210"},{"n":"735:::47811","u":"switch"},{"u":"switch","n":"735:::53225"},{"n":"735:::47804","u":"switch"},{"u":"scene","n":"735:::53221"},{"u":"switch","n":"735:::47817"},{"n":"735:::47801","u":"scene"},{"n":"735:::53218","u":"scene"},{"n":"735:::53667","u":"scene"},{"u":"scene","n":"735:::53209"},{"u":"switch","n":"735:::47810"},{"u":"switch","n":"735:::47821"},{"n":"735:::47807","u":"switch"},{"n":"735:::53217","u":"scene"}]}'
        `
    },
    {
        curl: `curl --request GET \
        --url 'https://staging.smarthome.iviet.com/api/v1.3/routine/routine/list' \
        --header 'Authorization: Bearer token' \
        `
    },
    {
        curl: `curl --request GET \
        --url 'https://staging.smarthome.iviet.com/api/v1.3/hanet/face/list?placeID=4820&stranger=false' \
        --header 'Authorization: Bearer token' \
        `
    },
    {
        curl: `curl --request GET \
        --url 'https://staging.smarthome.iviet.com/api/v1.3/hanet/face/list?placeID=4820&stranger=false' \
        --header 'Authorization: Bearer token' \
        `
    },
    {
        curl: `curl --request POST \
        --url 'https://staging.smarthome.iviet.com/api/v1.3/intent/execute' \
        --header 'Authorization: Bearer token' \
        --header 'Content-Type: application/json' \
        --data '{"payload":[{"n":"735:::47804","v":1,"u":"switch"}]}'
        `
    },
    { 
        curl: `curl --request POST \
        --url 'https://staging.smarthome.iviet.com/api/v1.3/intent/execute' \
        --header 'Authorization: Bearer token' \
        --header 'Content-Type: application/json' \
        --data '{"payload":[{"v":1,"u":"scene","n":"735:::53213"}]}'
        `
    },
    {
        curl: `curl --request GET \
        --url 'https://example.com/user/push_notification/total_unread' \
        --header 'timezone: Asia/Ho_Chi_Minh' \
        --header 'Authorization: Bearer token' \
        --header 'device-type: ios' \
        `
    },
    {
        curl: `curl --request GET \
        --url 'https://example.com/user/push_notification/total_unread' \
        --header 'device-type: ios' \
        --header 'Authorization: Bearer token' \
        --header 'timezone: Asia/Ho_Chi_Minh' \
        `
    },
    {
        curl: `curl --request PUT \
        --url 'https://staging.smarthome.iviet.com/api/v1.3/device/update?id=53213' \
        --header 'Authorization: Bearer token' \
        --header 'Content-Type: application/json' \
        --data '{"roomId":2794}'
        `
    },
    {
        curl: `curl --request GET \
        --url 'https://staging.smarthome.iviet.com/api/v1.3/linking/partners' \
        --header 'Authorization: Bearer token' \
        `
    },
    {
        curl: `curl --request GET \
        --url 'https://staging.smarthome.iviet.com/api/v1.3/hanet/face/list?placeID=4820&stranger=false' \
        --header 'Authorization: Bearer token' \ 
        `
    },
    {
        curl: `curl -d "param1=value1&param2=value2" -X POST http://localhost:3000/data`
    },
    {
        curl: `curl -d "param1=value1&param2=value2" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:3000/data`
    },
    {
        curl: `curl -d "@data.txt" -X POST http://localhost:3000/data`
    },
    {
        curl: `curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:3000/data`
    },
    {
        curl: `curl -d "@data.json" -X POST http://localhost:3000/data`
    },
    {
        curl: `curl -X GET 'http://localhost:3001/search?search=react&asdfa=asfdaf' \
        --header 'xapi-key: 21432139847290402402190' \
        --header 'Content-Type: text/html' \
        --data-raw '{
            "name": "string",
            "name2": "string"
        }'`
    },
    {
        curl: `curl --location --request GET 'https://example.com/posts?a=2&b=44' \
        --header 'Content-Type: value' \
        --header 'Authorization: token' \
        --form 'title="file_avatar"' \
        --form 'file=@"/Users/bany/Desktop/Screen Shot 2022-05-22 at 22.55.22.png"' `
    },
    {
        curl: `curl --location --request GET 'https://example.com/posts?a=2&b=44' \
        --header 'Content-Type: application/x-www-form-urlencoded' \
        --header 'Authorization: token' \
        --data-urlencode 'title=title' \
        --data-urlencode 'file=/path/file' `
    },
    {
        curl: `curl --location --request GET 'https://example.com/posts?a=2&b=44' \
        --header 'Content-Type: value' \
        --header 'Authorization: token' \
        --data-binary '@/Users/bany/Desktop/Screen Shot 2022-05-22 at 22.55.22.png' `
    },
    {
        curl: `curl --location --request GET 'https://example.com/posts?a=2&b=44' \
        --header 'Content-Type:value' \
        --header 'Authorization: token' \
        --data-binary '@/Users/bany/Desktop/Screen Shot 2022-05-22 at 22.55.22.png' `
    }
]
