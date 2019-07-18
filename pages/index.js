import Head from "next/head";
import "../index.css";

const Main = () => (
  <section>
    <Head>
      <title>Serverless MN</title>
      <meta property="og:title" content="Serverless MN" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://serverless.mn" />
      <meta
        property="og:image"
        content="https://serverless.mn/static/serverlessmn.png"
      />
      <meta property="description" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
    </Head>
    <div className="flex flex-col h-screen justify-between">
      <img
        alt="serverless mn"
        src="./static/full_logo.svg"
        className="pt-8 px-8 mx-auto max-w-8"
      />
      <div className="py-4 md:py-8 mx-auto">
        <About />
        <Schedule />
      </div>
      <Footer />
    </div>
  </section>
);

const About = () => (
  <h2 className="text-2xl font-bold py-4 px-8 text-center">
    The meetup for serverless technologies in Minnesota.
  </h2>
);

const Schedule = () => (
  <div className="text-center">
    <h2 className="text-xl font-medium pt-2">Upcoming Event:</h2>
    <div className="py-4">
      <p className="text-lg font-medium pb-2">June Meetup: How to get started with the Serverless framework in your dev environment</p>
      <p className="py-1">
        June 25, 2019, 6pm – 8pm at{" "}
        <a className="underline" href="https://goo.gl/maps/qLB3ZG3YakXL3gQ57">
          MentorMate
        </a>
        .
      </p>
      <p className="py-1">
        with guest speaker{" "}
        <a
          href="https://www.meetup.com/Serverless-MN/events/262613418/"
          className="underline"
        >
          AJ Stuyvenberg
        </a>
      </p>
      <div className="mt-8">
        <CTA
          content="RSVP on Meetup.com"
          href={"https://meetup.com/serverless-mn"}
          arity={"info"}
        />
      </div>
    </div>
  </div>
);

const Sponsors = () => (
  <section className="text-center">
    <div className="">
      <p className="">Sponsored by:</p>
      <div className="flex justify-center py-4">
        <img src="/static/mentormate-logo--20170316.svg" className="max-w-lg" />
      </div>
    </div>
  </section>
);

const CTA = ({ content, href = "#" }) => (
  <a className={`px-3 py-2 bg-blue-600 text-white rounded`} href={href}>
    {content}
  </a>
);

const Footer = () => (
  <footer className="pb-8 sm:mx-8 sm:max-w-8">
    <Sponsors />
    <div className="pt-4 text-center">
      <p>
        By participating in Serverless MN spaces, online and IRL, you agree to
        our{" "}
        <a
          href="https://docs.google.com/document/d/1H83dbg5kmoVU5xT_zZw42gzfqDPtDGAmmGphKTfP2dE/edit?usp=sharing"
          className="underline"
        >
          code of conduct
        </a>
        .
      </p>
      <p className="">
        Contact the organizers:{" "}
        <a href="mailto:hello@serverless.mn" className="underline">
          hello@serverless.mn
        </a>
      </p>
    </div>
  </footer>
);

export default () => <Main />;
