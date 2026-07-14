import Image from "next/image";
import Link from "next/link";

import styles from "./about.module.css";

const stats = [
  { value: "25K+", label: "Happy Pilgrims" },
  { value: "99%", label: "Visa Success Rate" },
  { value: "150+", label: "Guided Tours Completed" },
  { value: "4.9★", label: "Customer Rating" },
];

const values = [
  {
    icon: "fa-solid fa-star-and-crescent",
    title: "Sunnah Adherence",
    text: "Every group itinerary is organized cleanly to match authentic Sunnah protocols under the systematic supervision of qualified scholars.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Absolute Transparency",
    text: "Zero hidden components or emergency charges. The tier pricing, flight brackets, and hotel listings committed on paper are exactly delivered.",
  },
  {
    icon: "fa-solid fa-hand-holding-heart",
    title: "Premium Comfort",
    text: "From custom air-conditioned private luxury buses to close-range hotel accessibility, we optimize environments for smooth operations.",
  },
];

export default function AboutPage() {
  return (
    <>


      {/* INNER PAGE BANNER */}
      <section className="page-banner">
        <div className="container">
          <h2>About Our Agency</h2>
          <div className="breadcrumbs">
            <Link href="/">Home</Link> &nbsp; / &nbsp; About Us
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className={styles["story-section"]}>
        <div className="container">
          <div className={styles["story-grid"]}>
            <div className={styles["story-content"]}>
              <span>Serving with Devotion</span>
              <h2>Providing Sacred Journeys and Trusted Guidance</h2>
              <p>
                At Rashidi Umrah and Hajj, we understand that performing your
                pilgrimage is a profoundly spiritual event. Founded on
                principles of complete transparency and high hospitality, our
                objective is to clear every logistical obstacle so you can
                focus strictly on devotion.
              </p>
              <p>
                We manage all aspects of international transit, documentation
                processing, custom catering management, and proximity-based
                hotel accommodations near the Haramain Sharifain.
              </p>
              <Link
                href="/packages"
                className="btn btn-primary"
                style={{ marginTop: "15px" }}
              >
                View Packages
              </Link>
            </div>

            <div className={styles["story-images"]}>
              <div className={styles["img-card"]}>
                <Image
                  src="/images/arafah.png"
                  alt="Makkah Pilgrim Experience"
                  fill
                  sizes="(max-width: 992px) 50vw, 25vw"
                />
              </div>
              <div className={styles["img-card"]} style={{ marginTop: "30px" }}>
                <Image
                  src="/images/madinahstreets.png"
                  alt="Madinah Ziyarat Travels"
                  fill
                  sizes="(max-width: 992px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS COUNTER */}
      <section className={styles["stats-section"]}>
        <div className="container">
          <div className={styles["stats-grid"]}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles["stat-item"]}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className={styles["values-section"]}>
        <div className="container">
          <div className={styles["section-header"]}>
            <h2>Our Guiding Core Principles</h2>
            <p>
              We operate our travel framework with complete accuracy,
              bringing integrity and luxury coordination to every step of
              your sacred destination paths.
            </p>
          </div>

          <div className={styles["values-grid"]}>
            {values.map((value) => (
              <div key={value.title} className={styles["value-card"]}>
                <div className={styles["value-icon"]}>
                  <i className={value.icon}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
