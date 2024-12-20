import axios from '../api/axios';

export const getVideoInfo = async (videosArr) => {
    try {
        for(let video of videosArr) {
            // get extra video info
            const videoResponse = await axios.get(`/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${video.id.videoId}`)

            Object.assign(video.snippet, {...videoResponse.data.items[0].snippet})
            video.extraInfo = Object.assign(
                {},
                videoResponse.data.items[0].tags,
                videoResponse.data.items[0].contentDetails,
                videoResponse.data.items[0].statistics,
                videoResponse.data.items[0].player,
            )

            // get channel info
            const channelResponse = await axios.get(`/channels?part=snippet&part=statistics&part=contentDetails&id=${video.snippet.channelId}`)

                // storing getched data
                const channelResultA = channelResponse.data.items[0].snippet;
                const channelResultB = channelResponse.data.items[0].statistics;
                const channelInfo = Object.assign(
                    {},
                    {
                        ...channelResultA,
                        ...channelResultB
                    }
                )
            video.channelInfo = channelInfo
        }

        return videosArr;
    } catch (error) {
        console.log(error)
    }
}

export const getRelatedVideos = async () => {
    try {
        // relatedToVideoId 지원 종료로 인해 임시 데이터(relatedToVideoId params 제외) 요청하여 사용
        const response = await axios.get(
            `/search?part=snippet&maxResults=10&type=video`
          )

        return response.data.items

    } catch (error) {
        console.log(error);
    }
}