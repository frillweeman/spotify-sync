_Work In Progress..._

# spotify-sync
Sync Spotify playback across accounts

This repo hopes to address the current inability to sync playback across multiple Spotify accounts. There are a few similar options available currently, but they are not adequate. First is [JQBX](https://app.jqbx.fm/), but it requires too much setup, is buggy, and difficult to use. There are also [Spotify Group Sessions](https://support.spotify.com/is/using_spotify/features/group-session/) by Spotify, but it only allows users to playback on one device.

This software will allow synchronous playback on multiple devices and multiple accounts. The current plan is to use the native Spotify interface and have this service be essentially invisible, apart from creating and joining a session/room. The backend will poll the playback state of each account regularly and intelligently change tracks, play, pause, seek to position, change playlists, etc. to match the playback state of the other device.
