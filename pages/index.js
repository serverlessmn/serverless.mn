import Head from 'next/head'
import "../styles.scss"

const Main = () => (
    <section className="hero is-fullheight">
        <Head>
            <title>Serverless MN</title>
            <meta property="og:title" content="Serverless MN" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://serverless.mn" />
            <meta property="og:image" content="https://serverless.mn/static/full_logo.svg" />
            <meta property="description">

            </meta>
        </Head>
        <div className="hero-head" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 className="title">
                <img alt="serverless mn" src="./static/full_logo.svg" style={{ maxWidth: '500px', width: '100%', padding: '2rem' }} />
            </h1>
        </div>
        <div className="hero-body has-bg-img" style={{ overflow: 'hidden' }}>
            <div className="container is-vcentered">
                <section className="section">
                    <div className="columns">
                        <div className="column is-three-quarters">
                            <About />
                        </div>
                        <div className="column is-one-quarter">
                            <Schedule />
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div className="hero-foot">
            <Footer />
        </div>
    </section >
)

const About = () => (
    <div className="content is-vcentered">
        <h2 className="title">The meetup for serverless technologies in Minnesota.</h2>
        <h3 className="subtitle">
            <em>Join us for our Kickoff Event on May 20th!</em>
        </h3>
    </div>
)

const Schedule = () => (
    <div className="content is-vcentered has-text-centered">
        <h2 className="title">Upcoming Event:</h2>
        <div className="content">
            <p className="subtitle has-text-weight-semibold">Serverless MN Kickoff</p>
            <p>May 20, 2019, 6pm – 8pm at <a href="https://goo.gl/maps/qLB3ZG3YakXL3gQ57">MentorMate</a>.</p>
            <div className="content has-text-centered">
                <CTA content={`RSVP on Meetup.com`} href={"https://meetup.com/serverless-mn"} arity={"info"} />
            </div>
        </div>
    </div>
)

const Sponsors = () => (
    <section className="section">
        <div className="content has-text-centered">
            <p className="title is-marginless is-paddingless">Sponsored by:</p>
            <div className="content is-flex" style={{ justifyContent: 'center' }}>
                <img src="/static/mentormate-logo--20170316.svg" className="image" style={{ maxWidth: "20rem", minHeight: '5rem' }} />
            </div>
        </div>
    </section>
)

const CTA = ({ content, arity = 'primary', href = '#' }) => (
    <a className={`button is-${arity}`} href={href}>{content}</a>
)

const Footer = () => (
    <footer style={{ backgroundColor: 'white' }}>
        <div className="content has-text-centered" style={{ padding: '1rem' }}>
            <Sponsors />
            <p className="text">By participating in Serverless MN spaces, online and IRL, you agree to our <a href="https://docs.google.com/document/d/1H83dbg5kmoVU5xT_zZw42gzfqDPtDGAmmGphKTfP2dE/edit?usp=sharing">code of conduct</a>.</p>
            <p className="text">Contact the organizers: <a href="mailto:hello@serverless.mn">hello@serverless.mn</a></p>
        </div>
    </footer>
)

export default () => <Main />