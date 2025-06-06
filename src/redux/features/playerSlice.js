import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentSongs: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: {},
    genreListId: '',
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setActiveSong: (state, action) => {
            state.activeSong = action.payload.song;
            state.currentSongs = action.payload.data;

            // if (action.payload?.data?.tracks?.hits) {
            //   state.currentSongs = action.payload.data.tracks.hits;
            // } else if (action.payload?.data?.properties) {
            //   state.currentSongs = action.payload?.data?.tracks;
            // } else {
            //   state.currentSongs = action.payload.data;
            // }

            state.currentIndex = action.payload.index;
            state.isActive = true;
        },

        nextSong: (state, action) => {
            if (action.payload > state.currentSongs.length) {
                action.payload = 0;
            }

            if (state.currentSongs[action.payload]?.preview) {
                state.activeSong = state.currentSongs[action.payload];
            } else {
                state.activeSong = state.currentSongs.tracks.data[action.payload];
            }

            state.currentIndex = action.payload;
            state.isActive = true;
        },

        prevSong: (state, action) => {
            if (action.payload < 0) {
                action.payload = state.currentSongs.length - 1;
            }

            if (state.currentSongs[action.payload]?.preview) {
                state.activeSong = state.currentSongs[action.payload];
            } else {
                state.activeSong = state.currentSongs.tracks.data[action.payload];
            }

            state.currentIndex = action.payload;
            state.isActive = true;
        },

        playPause: (state, action) => {
            state.isPlaying = action.payload;
        },

        selectGenreListId: (state, action) => {
            state.genreListId = action.payload;
        },
    },
});

export const {setActiveSong, nextSong, prevSong, playPause, selectGenreListId} = playerSlice.actions;

export default playerSlice.reducer;
