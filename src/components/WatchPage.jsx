import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { META_DATA_API } from "../utils/constanst";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(false);
    fetchMetaData();
    dispatch(closeMenu());
  }, []);
  const [loading, setLoading] = useState(false);
  const [videoMetaData, setMetaData] = useState({});
  // const videoMetaData = {
  //   kind: "youtube#video",
  //   etag: "wYRfq66DGltA-9I0kjhYEGAW3iw",
  //   id: "5uAznq66Ubw",
  //   snippet: {
  //     publishedAt: "2024-01-14T16:00:04Z",
  //     channelId: "UCEeEQxm6qc_qaTE7qTV5aLQ",
  //     title:
  //       "Ishq Murshid - Episode 15 [𝐂𝐂] - 14 Jan 24 - Sponsored By Khurshid Fans, Master Paints & Mothercare",
  //     description:
  //       "👉 Subscribe To HUM TV - https://bit.ly/Humtvpk\n\nIshq Murshid - Episode 15 [𝐂𝐂] - 14 Jan 24 - Sponsored By Khurshid Fans, Master Paints & Mothercare\n\nA journey filled with love, passion, and twists awaits! ✨ Don't miss to Watch #IshqMurshid, Every Sunday At 08Pm Only on HUM TV! 💑\n\nDigitally Presented By Khurshid Fans \nDigitally Powered By Master Paints\nDigitally Associated By Mothercare\n\nCast : \nBilal Abbas Khan\nDurefishan Saleem\nFarooq Rind\nAbdul Khaliq Khan\n\nWritten By Abdul Khaliq Khan\nDirected By Farooq Rind\nProduced By Moomal Entertainment & MD Productions ✨\n\n#ishqmurshidep15\n#HUMTV \n#BilalAbbasKhan \n#DurefishanSaleem #FarooqRind #AbdulKhaliqKhan #MoomalEntertainment #mdproductions \n#masterpaints",
  //     thumbnails: {
  //       default: {
  //         url: "https://i.ytimg.com/vi/5uAznq66Ubw/default.jpg",
  //         width: 120,
  //         height: 90,
  //       },
  //       medium: {
  //         url: "https://i.ytimg.com/vi/5uAznq66Ubw/mqdefault.jpg",
  //         width: 320,
  //         height: 180,
  //       },
  //       high: {
  //         url: "https://i.ytimg.com/vi/5uAznq66Ubw/hqdefault.jpg",
  //         width: 480,
  //         height: 360,
  //       },
  //       standard: {
  //         url: "https://i.ytimg.com/vi/5uAznq66Ubw/sddefault.jpg",
  //         width: 640,
  //         height: 480,
  //       },
  //       maxres: {
  //         url: "https://i.ytimg.com/vi/5uAznq66Ubw/maxresdefault.jpg",
  //         width: 1280,
  //         height: 720,
  //       },
  //     },
  //     channelTitle: "HUM TV",
  //     tags: [
  //       "pakistani serial",
  //       "drama in hindi",
  //       "latest pakistani drama",
  //       "top pakistani drama",
  //       "best pakistani drama",
  //       "pakistani serial 2023",
  //       "pakistani drama 2023 last episode",
  //       "pakistani drama 2023 latest episode",
  //       "pakistani drama new",
  //       "pakistani dramas",
  //       "Durefishan Saleem Drama",
  //       "Bilal Abbas New Drama",
  //       "Bilal Abbas",
  //       "Ishq Murshid New Drama",
  //       "Ishq Murshid New Drama ep 15",
  //       "Ishq Murshid ep 15",
  //       "Durefishan Ishq Murshid 15",
  //       "ishq murshid ep 15",
  //       "15 ep ishq murshid",
  //       "durefisan new drama",
  //       "ishq murshid 2023",
  //     ],
  //     categoryId: "24",
  //     liveBroadcastContent: "none",
  //     defaultLanguage: "en",
  //     localized: {
  //       title:
  //         "Ishq Murshid - Episode 15 [𝐂𝐂] - 14 Jan 24 - Sponsored By Khurshid Fans, Master Paints & Mothercare",
  //       description:
  //         "👉 Subscribe To HUM TV - https://bit.ly/Humtvpk\n\nIshq Murshid - Episode 15 [𝐂𝐂] - 14 Jan 24 - Sponsored By Khurshid Fans, Master Paints & Mothercare\n\nA journey filled with love, passion, and twists awaits! ✨ Don't miss to Watch #IshqMurshid, Every Sunday At 08Pm Only on HUM TV! 💑\n\nDigitally Presented By Khurshid Fans \nDigitally Powered By Master Paints\nDigitally Associated By Mothercare\n\nCast : \nBilal Abbas Khan\nDurefishan Saleem\nFarooq Rind\nAbdul Khaliq Khan\n\nWritten By Abdul Khaliq Khan\nDirected By Farooq Rind\nProduced By Moomal Entertainment & MD Productions ✨\n\n#ishqmurshidep15\n#HUMTV \n#BilalAbbasKhan \n#DurefishanSaleem #FarooqRind #AbdulKhaliqKhan #MoomalEntertainment #mdproductions \n#masterpaints",
  //     },
  //     defaultAudioLanguage: "en",
  //   },
  //   contentDetails: {
  //     duration: "PT35M12S",
  //     dimension: "2d",
  //     definition: "hd",
  //     caption: "true",
  //     licensedContent: true,
  //     contentRating: {},
  //     projection: "rectangular",
  //   },
  //   statistics: {
  //     viewCount: "13538767",
  //     likeCount: "378483",
  //     favoriteCount: "0",
  //     commentCount: "10638",
  //   },
  // };

  const [searchParams] = useSearchParams();
  const params = searchParams.get("v");

  const [metaDatav2, setmetaDatav2] = useState({
    title: "",
    channelName: "",
    viewCount: 0,
    isLive: false,
  });

  async function fetchMetaData() {
    // setLoading(false);
    try {
      const res = await fetch(
        META_DATA_API + params + "&key=" + process.env.REACT_APP_GOOGLE_API_KEY
      );
      const data = await res.json();
      // console.log("data", data);
      setMetaData(data);
      setmetaDatav2({
        title: data.items[0].snippet.title,
        channelName: data.items[0].snippet.channelTitle,
        viewCount: data.items[0].statistics.viewCount,
        isLive: data.items[0].snippet.liveBroadcastContent,
      });
      console.log("this is resp", data);
    } catch (e) {
      console.error(e);
    }
    // setLoading(true);
    // console.log("videoMetaData", videoMetaData.items[0].snippet.channelTitle);
  }

  // const title = "title hai bhai ye video ka ";


  

  return (
    <div className="flex flex-col ">
      <div className=" flex gap-3   ">
        <div>
          <iframe
            className="rounded-2xl my-3 ml-10 "
            width="949"
            height="534"
            src={"https://www.youtube.com/embed/" + params + "?&autoplay=1"}
            title="YouTube video player"
            autoPlay="true"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <div className="w-[949px]  ml-12 ">
            <span className="font-semibold text-3xl  ">{metaDatav2.title}</span>
            <br></br>
            <span>{metaDatav2.channelName}</span>
            <br></br>
            <span>{metaDatav2.viewCount} views</span>
          </div>
        </div>

        <div className="flex items-center  w-[30rem]">
          {metaDatav2.isLive == "live" ? <LiveChat /> : <div></div>}
        </div>
      </div>

      {metaDatav2.isLive == "none" ? <CommentsContainer /> : <div></div>}
    </div>
  );
};

export default WatchPage;

// {
//     "kind": "youtube#videoListResponse",
//     "etag": "0fPeWtafM2ecDZA0SSzaWrFA8Mo",
//     "items":
//      [
//         {
//             "kind": "youtube#video",
//             "etag": "wYRfq66DGltA-9I0kjhYEGAW3iw",
//             "id": "5uAznq66Ubw",
//             "snippet": {
//                 "publishedAt": "2024-01-14T16:00:04Z",
//                 "channelId": "UCEeEQxm6qc_qaTE7qTV5aLQ",
//                 "title": "Ishq Murshid - Episode 15 [𝐂𝐂] - 14 Jan 24 - Sponsored By Khurshid Fans, Master Paints & Mothercare",
//                 "description": "👉 Subscribe To HUM TV - https://bit.ly/Humtvpk\n\nIshq Murshid - Episode 15 [𝐂𝐂] - 14 Jan 24 - Sponsored By Khurshid Fans, Master Paints & Mothercare\n\nA journey filled with love, passion, and twists awaits! ✨ Don't miss to Watch #IshqMurshid, Every Sunday At 08Pm Only on HUM TV! 💑\n\nDigitally Presented By Khurshid Fans \nDigitally Powered By Master Paints\nDigitally Associated By Mothercare\n\nCast : \nBilal Abbas Khan\nDurefishan Saleem\nFarooq Rind\nAbdul Khaliq Khan\n\nWritten By Abdul Khaliq Khan\nDirected By Farooq Rind\nProduced By Moomal Entertainment & MD Productions ✨\n\n#ishqmurshidep15\n#HUMTV \n#BilalAbbasKhan \n#DurefishanSaleem #FarooqRind #AbdulKhaliqKhan #MoomalEntertainment #mdproductions \n#masterpaints",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/5uAznq66Ubw/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/5uAznq66Ubw/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/5uAznq66Ubw/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     },
//                     "standard": {
//                         "url": "https://i.ytimg.com/vi/5uAznq66Ubw/sddefault.jpg",
//                         "width": 640,
//                         "height": 480
//                     },
//                     "maxres": {
//                         "url": "https://i.ytimg.com/vi/5uAznq66Ubw/maxresdefault.jpg",
//                         "width": 1280,
//                         "height": 720
//                     }
//                 },
//                 "channelTitle": "HUM TV",
//                 "tags": [
//                     "pakistani serial",
//                     "drama in hindi",
//                     "latest pakistani drama",
//                     "top pakistani drama",
//                     "best pakistani drama",
//                     "pakistani serial 2023",
//                     "pakistani drama 2023 last episode",
//                     "pakistani drama 2023 latest episode",
//                     "pakistani drama new",
//                     "pakistani dramas",
//                     "Durefishan Saleem Drama",
//                     "Bilal Abbas New Drama",
//                     "Bilal Abbas",
//                     "Ishq Murshid New Drama",
//                     "Ishq Murshid New Drama ep 15",
//                     "Ishq Murshid ep 15",
//                     "Durefishan Ishq Murshid 15",
//                     "ishq murshid ep 15",
//                     "15 ep ishq murshid",
//                     "durefisan new drama",
//                     "ishq murshid 2023"
//                 ],
//                 "categoryId": "24",
//                 "liveBroadcastContent": "none",
//                 "defaultLanguage": "en",
//                 "localized": {
//                     "title": "Ishq Murshid - Episode 15 [𝐂𝐂] - 14 Jan 24 - Sponsored By Khurshid Fans, Master Paints & Mothercare",
//                     "description": "👉 Subscribe To HUM TV - https://bit.ly/Humtvpk\n\nIshq Murshid - Episode 15 [𝐂𝐂] - 14 Jan 24 - Sponsored By Khurshid Fans, Master Paints & Mothercare\n\nA journey filled with love, passion, and twists awaits! ✨ Don't miss to Watch #IshqMurshid, Every Sunday At 08Pm Only on HUM TV! 💑\n\nDigitally Presented By Khurshid Fans \nDigitally Powered By Master Paints\nDigitally Associated By Mothercare\n\nCast : \nBilal Abbas Khan\nDurefishan Saleem\nFarooq Rind\nAbdul Khaliq Khan\n\nWritten By Abdul Khaliq Khan\nDirected By Farooq Rind\nProduced By Moomal Entertainment & MD Productions ✨\n\n#ishqmurshidep15\n#HUMTV \n#BilalAbbasKhan \n#DurefishanSaleem #FarooqRind #AbdulKhaliqKhan #MoomalEntertainment #mdproductions \n#masterpaints"
//                 },
//                 "defaultAudioLanguage": "en"
//             },
//             "contentDetails": {
//                 "duration": "PT35M12S",
//                 "dimension": "2d",
//                 "definition": "hd",
//                 "caption": "true",
//                 "licensedContent": true,
//                 "contentRating": {},
//                 "projection": "rectangular"
//             },
//             "statistics": {
//                 "viewCount": "13538767",
//                 "likeCount": "378483",
//                 "favoriteCount": "0",
//                 "commentCount": "10638"
//             }
//         }
//     ],
//     "pageInfo": {
//         "totalResults": 1,
//         "resultsPerPage": 1
//     }
// }
