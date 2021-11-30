import React from "react";

const MusicTable = (props) => {
    return (
        <div className="table-wrapper">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.song.map((songs, index) => {
                        return (
                        <tr key={index}>
                            <td>{songs.title}</td>
                            <td>{songs.artist}</td>
                            <td>{songs.album}</td>
                            <td>{songs.genre}</td>
                            <td>{songs.releaseDate}</td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default MusicTable