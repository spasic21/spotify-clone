import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => {
    return (
        <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
            <BsArrowRepeat size={20} color={repeat ? '#65FE08' : 'white'} onClick={() => setRepeat((prev) => !prev)} className="hidden sm:block cursor-pointer" />
            {/*{currentSongs?.data.length && }*/}
            <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />
            {isPlaying ? (
                <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
            ) : (
                <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
            )}
            {/*{currentSongs?.data.length && }*/}
            <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />
            <BsShuffle size={20} color={shuffle ? '#65FE08' : 'white'} onClick={() => setShuffle((prev) => !prev)} className="hidden sm:block cursor-pointer" />
        </div>
    );
}

export default Controls;
