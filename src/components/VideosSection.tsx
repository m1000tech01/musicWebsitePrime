import { useState } from 'react'
import type { Video } from '../content/types'

interface VideosSectionProps {
  videos: Video[]
}

export default function VideosSection({ videos }: VideosSectionProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  // Default to the first video's id on initial load (matches old behaviour).
  let activeId = selectedId
  if (videos.length && activeId === null) {
    activeId = videos[0].link
  }

  return (
    <div id="video" className="video">
      <div className="container">
        <div className="row clearfix">
          <div className="col-xs-12 col-sm-6">
            <div
              className="row clearfix wow fadeInDown"
              data-wow-duration="700ms"
              data-wow-delay="300ms"
            >
              <div className="col-xs-1 col-sm-1 col-md-6" />
              <div className="col-xs-12 col-sm-12 col-md-6">
                <h2 className="video_text">Videos</h2>

                <ul className="video_category">
                  {videos.map((video, index) => (
                    <li key={index}>
                      <span
                        onClick={() => setSelectedId(video.link)}
                        className="category_icon"
                      >
                        {video.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6">
            <div
              className="tab-content wow fadeInDown"
              data-wow-duration="700ms"
              data-wow-delay="300ms"
            >
              <div className="video_paces video-container-homepage tab-pane fade in active">
                {activeId && (
                  <iframe
                    title={activeId}
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${activeId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
