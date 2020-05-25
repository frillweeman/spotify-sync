const SpotifyWebApi = require("spotify-web-api-node");

const spotify = new SpotifyWebApi();

// expires every 30 minutes, will automatically request these in a future verison
spotify.setAccessToken(
  "BQDQIhVnfmvacYLz7vueSEfRrS_AtsOkOfISf7liSHo8i4SzxIVOyOALIMyKN1yaHZzzSlsvibY7aCSYrV0w4vkj98ikqkJMmO5TEkMCSCD0N9i9cMB8hrEdYRlOO1CoyUELSdV6b7r9rGrSc8nnDz4_ot0iMO5Pe8zKPNSj9z0vFUcBkLYesjqff9a7A2H5rLG_c54NcsvB"
);

// get user's current playback state
//
// __returned object format__
// {
//    item_uri: String,
//    progress_ms: Integer,
//    context_uri: String
// }
const getSnapshot = () =>
  new Promise((resolve, reject) => {
    spotify
      .getMyCurrentPlaybackState()
      .then((data) => {
        const { item, context, progress_ms } = data.body;
        resolve({
          item_uri: item.uri,
          progress_ms: progress_ms,
          context_uri: context ? context.uri : null,
        });
      })
      .catch((error) => reject(error));
  });

const restoreSnapshot = async (snapshot) => {};

// get snapshot of current playback info
getSnapshot()
  .then((snap) => console.log(snap))
  .catch((error) => console.log(error));
