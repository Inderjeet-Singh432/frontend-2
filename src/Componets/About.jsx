const blogs = [
  { title: "SEO Roadmap for 2026: What’s Changing?", desc: "Core Web Vitals, AI content detection, zero-click searches — prepare your strategy now." },
  { title: "UX Best Practices in Modern Software Development", desc: "How small UX decisions create massive user retention and conversion impact." },
  { title: "Why Healthcare Needs Specialized IT Consulting in 2025", desc: "Compliance, telehealth, data security — the unique challenges and solutions." },
];

export default function About() {
  return (
    <>
      {/* about paragraph start */}
      <section className="container" style={{ marginTop: "20px" }}>
        <h2 className="section-title" style={{ textAlign: 'left', marginLeft: "10%" }}>About us</h2>
        <p style={{ maxWidth: '8000px', margin: '0 auto 2rem', textAlign: 'justify', fontSize: '1.2rem' }}>
          Multiple Stay Booking Site (MSB) is a smart and convenient platform designed to help travelers, students, and professionals find the perfect place to stay. Our platform brings together multiple accommodation options in one place, allowing users to easily search and book Hotels, PGs (Paying Guest), and Dormitories without the hassle of visiting different websites.      </p>
        <p style={{ maxWidth: '8000px', margin: '0 auto 2rem', textAlign: 'justify' }}>
          At MSB, we believe that finding a comfortable stay should be simple, fast, and reliable. Our platform is built to provide users with a seamless booking experience, clear information about properties, and easy comparison between different types of stays. Whether you are planning a short trip, looking for a budget-friendly dormitory, or searching for a long-term PG, MSB helps you discover the best options quickly.

          We also empower property owners and businesses by giving them a platform to showcase their accommodations, reach more customers, and grow their business online. With secure login, property listings, and booking management, owners can easily manage their services and connect with travelers.

          Our goal is to create a trusted marketplace for accommodation, where users can explore multiple stay options, compare facilities, and book the stay that best fits their needs. With user-friendly technology and reliable support, MSB makes booking your next stay easier than ever.      </p>
        <div style={{ textAlign: 'right' }}>
          <a href="#" className="btn">Discover More About Us</a>
        </div>
      </section>
      {/* about paragraph end */}


      {/* Commitment start */}
      <section className="container" style={{ marginTop: "20px" }}>
        <h2 className="section-title">Tangible Results. Real Business Expansion.</h2>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            We don’t just deliver projects — we deliver measurable growth.
          </p>
          <p>
            From streamlined operations and cost-efficient cloud infrastructure to powerful custom applications and result-driven digital marketing — every solution we build is designed to move the needle on revenue, efficiency, and customer satisfaction.
          </p>
        </div>
      </section>
      {/* Commitment end */}


      {/* Blogs start */}
      <section style={{ background: '#f8f9fa', marginTop: '20px' }}>
        <div className="container">
          <h2 className="section-title">Featured Insights</h2>
          <div className="grid-3">
            {blogs.map((post, i) => (
              <div key={i} className="card">
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <a href="#" style={{ color: '#0066ff', fontWeight: '600', textDecoration: 'none' }}>
                  Read More →
                </a>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="#" className="btn">View All Blogs</a>
          </div>
        </div>
      </section>
      {/* Blogs end */}
    </>
  )
}