import type { Gig } from '../content/types'

interface GigsSectionProps {
  title?: string | null
  description?: string | null
  image?: string | null
  gigs: Gig[]
}

// Replaces the old moment() call: `moment(time).format('MMM D, Y - HH:mm')`
// e.g. "Jan 5, 2026 - 19:30"
function formatGigTime(time: string | null): string {
  if (!time) return ''
  const d = new Date(time)
  if (Number.isNaN(d.getTime())) return ''
  const date = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(d)
  const clock = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(d)
  return `${date} - ${clock}`
}

export default function GigsSection({
  title,
  description,
  image,
  gigs,
}: GigsSectionProps) {
  return (
    <div
      id="gig"
      style={{ backgroundImage: `url(${image})` }}
      className="giges"
    >
      <div className="clearfix">
        <div className="wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">
          <div className="container">
            <div className="row clearfix">
              <div className="col-sm-12 col-md-7 col-lg-6" />
              <div className="col-sm-12 col-md-5 col-lg-6">
                <h3 className="giges_text2">Gigs</h3>
                <h2 className="comingsoon_text">{title}</h2>

                <p className="comingsoon_text2">{description}</p>

                <div className="example">
                  {gigs.slice(0, 2).map((gig, index) => (
                    <div key={index} style={{ width: '100%' }} className="clearfix">
                      <div className="radio_box">
                        <input id={`radio${index}`} type="radio" name="radio" />
                        <label htmlFor={`radio${index}`} />
                      </div>
                      <div className="radio_text_in">
                        <label className="radio_text">
                          {formatGigTime(gig.time)}
                          <a
                            href={gig.link ?? undefined}
                            className="place"
                            style={{ marginLeft: '20px' }}
                          >
                            {gig.place}
                          </a>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
