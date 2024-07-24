import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';
import link from './assets/img/youtubePlaybutton.jpg';

const videos = [
    {
        videoId: 'rhCQjqgtzks',
        title: 'Codeplayers Infinity ERP Tutorial(Pt.1)',
        description: 'An overview of Codeplayers Infinity ERP Systems and its capabilities.'
    },
    {
        videoId: 'rxJ60UkW-Yk',
        title: 'Codeplayers Infinity ERP Tutorial(Pt.2)',
        description: 'Continuation of Pt.1'
    },
    {
        videoId: 'xF5-MBPVbSM',
        title: 'Infinity Fleet',
        description: 'Brief Introduction of Infinity Fleet, your ultimate fleet management solution.'
    },
];

const TrainingVideos = () => {
    useEffect(() => {
        const lightbox = GLightbox({
            selector: '.glightbox',
        });

        return () => {
            lightbox.destroy();
        };
    }, []);

    return (
        <div className="videos-page">
            <div className="container section-title text-center" data-aos="fade-up">
                <br /><br />
                <br />
                <h2>Codeplayers Video Archive</h2>
                <p>Corporate Videos</p>
            </div>
            <div className="videos-container">
                {videos.map((video, index) => (
                    <div className="video-card" key={index}>
                        <a href={`https://www.youtube.com/watch?v=${video.videoId}`} className="glightbox">
                            <div className="video-thumbnail-container">
                                <img
                                    className="video-thumbnail"
                                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                                    alt={video.title}
                                />
                                <div className="video-play-button">
                                    <img src={link} alt="Play Button" />
                                </div>
                            </div>
                        </a>
                        <h2 className="video-heading">{video.title}</h2>
                        <p className="video-description">{video.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrainingVideos;
