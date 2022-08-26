import React from "react";
import "../Pages/Home.scss";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articlesRef = query(
      collection(db, "articles"),
      orderBy("created", "desc")
    );
    onSnapshot(articlesRef, (snapshot) => {
      setArticles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      <header className="c-header">
        <h1>BIENVENU SUR APPAstro</h1>
        <p>
          Suivez notre rubrique pour connaître les découvertes récentes en
          astronomie.{" "}
        </p>
      </header>
      <section className="c-posts">
        <article className="c-posts__item">
          <h2>Article Title Here</h2>
          <p>
            Hydrogen stratosphere control tower capacitor Saturn Lalande 21185.
            Control tower x-rays Luhman 16 Banard's Star engine lunar. Horizon
            engine capture Pluto Brahe sun continuum ion-drive control tower
            Proxima Centauri space-time booster. Core horizon subspace Voyager
            coordinates water. Contractors Banard's Star nozzle time Orion
            weightless Gemini extra-vehicular explore.
          </p>
          <p>
            <a href="#" className="c-btn">
              Read More
            </a>
          </p>
        </article>
        <article className="c-posts__item">
          <h2>Article Title Here</h2>
          <p>
            Mars NASA subspace crew warp Herschel stratosphere. Saturn sky
            zero-g stratosphere fuel cell Venus grounded crew yaw Ptolemy
            Challenger. Pioneer stratosphere Cassini Lalande 21185 Earth
            telemetry. Galileo uranium jumpsuit warp Hawking.
          </p>
          <p>
            <a href="#" className="c-btn">
              Read More
            </a>
          </p>
        </article>
        <article className="c-posts__item">
          <h2>Article Title Here</h2>
          <p>
            Challenger Voyager Sirius capsule Pioneer Kepler hyperspace launch.
            Singularity extra-vehicular circumnavigate burst. Procyon fuel cell
            asteroid subspace uranium Proxima Centauri prototype capsule.
          </p>
          <p>
            <a href="#" className="c-btn">
              Read More
            </a>
          </p>
        </article>
        <article className="c-posts__item">
          <h2>Article Title Here</h2>
          <p>
            Capsule crew Discovery ice spacecraft Pioneer gravity Picard.
            Lithium contractors meteor water core saucer white hole stars planet
            Picard Jupiter Skunkworks. Prototype clusters Voyager cosmos zero-g
            Pluto Skunkworks hatch. Circumnavigate core hyperspace motion comet
            Ptolemy.
          </p>
          <p>
            <a href="#" className="c-btn">
              Read More
            </a>
          </p>
        </article>
        <article className="c-posts__item">
          <h2>Article Title Here</h2>
          <p>
            Orbit warp atomic Buzz Lightyear. Uranium circumnavigate Halley
            Neptune nebula launch north Proxima Centauri engine.
          </p>
          <p>
            <a href="#" className="c-btn">
              Read More
            </a>
          </p>
        </article>
        <article className="c-posts__item">
          <h2>Article Title Here</h2>
          <p>
            Troposphere capacitor Newton Kepler. Jupiter ionosphere saucer
            Gemini Neptune core Alpha Centauri Venus comet Proxima Centauri
            Herschel. Banard's Star inertia laser contractors ion-drive fuel
            cell NASA. Panel solar-flare dwarf probe Sagan Sirius jetpack time
            laser. Columbia nebula horizon mesoshphere pulsar mission nuclear
            Sirius jetpack UFO.
          </p>
          <p>
            <a href="#" className="c-btn">
              Read More
            </a>
          </p>
        </article>
        <article className="c-posts__item">
          <h2>Article Title Here</h2>
          <p>
            X-rays Orion capsule re-entry Mercury tank capture Mars control
            tower. Fusion Challenger physics flight Saturn . Warp countdown
            flare telemetry yaw rocket stars. Planet astronomy Venus reusable
            continuum inertia robotic re-entry booster Pioneer.
          </p>
          <p>
            <a href="#" className="c-btn">
              Read More
            </a>
          </p>
        </article>
        <article className="c-posts__item">
          <h2>Article Title Here</h2>
          <p>
            Solar crew hydrogen booster panel Europa array Saturn fusion Jupiter
            control tower singularity. Telemetry laser Venus wave capacitor
            gamma ray orbit lunar Uranus. Venus supernova Hawking ignite Mars
            Kirk Pluto.
          </p>
          <p>
            <a href="#" className="c-btn">
              Read More
            </a>
          </p>
        </article>
        <article className="c-posts__item">
          <h2>Article Title Here</h2>
          <p>
            Dormant container star system subspace solar binary inverter
            hyperspace warp. Yaw LiDAR hydrogen container galaxy heliosphere
            Houston Skunkworks gravity weightless pulsar pitch. Stars volatile
            ice kryptonite extra-vehicular Cassini crew meteor Earth positron.
            Aurora singularity coordinates nozzle Skunkworks valve orbit
            Herschel.
          </p>
          <p>
            <a href="#" className="c-btn">
              Read More
            </a>
          </p>
        </article>
        <article className="c-posts__item">
          <h2>Article Title Here</h2>
          <p>
            Hubble nebula Europa Gemini Skunkworks subspace uranium
            extra-vehicular Galileo release planet Banard's Star. Pulsar stars
            Tyson prototype lunar explore Pioneer ion-drive mesoshphere.
          </p>
          <p>
            <a href="#" className="c-btn">
              Read More
            </a>
          </p>
        </article>
        <article className="c-posts__item">
          <h2>Article Title Here</h2>
          <p>
            Hydrogen stratosphere control tower capacitor Saturn Lalande 21185.
            Control tower x-rays Luhman 16 Banard's Star engine lunar. Horizon
            engine capture Pluto Brahe sun continuum ion-drive control tower
            Proxima Centauri space-time booster. Core horizon subspace Voyager
            coordinates water. Contractors Banard's Star nozzle time Orion
            weightless Gemini extra-vehicular explore.
          </p>
          <p>
            <a href="#" className="c-btn">
              Read More
            </a>
          </p>
        </article>
      </section>
    </>
  );
};
