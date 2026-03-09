const blogs = [
  {
    title: "SEO Roadmap for 2026: What’s Changing for Travel & Accommodation Websites?",
    desc: "From Google’s AI Overviews to zero-click searches and voice booking trends — discover how hotel, PG, and dormitory booking platforms like MSB can stay visible and attract more direct bookings in 2026."
  },
  {
    title: "How to Choose Between Hotel, PG, or Dormitory in Chandigarh – A 2025 Guide",
    desc: "Location, budget, amenities, safety, and mess quality — a complete comparison to help students, working professionals, and short-term travelers make the smartest accommodation choice in Chandigarh."
  },
  {
    title: "Top 10 Hidden Costs People Miss When Booking PGs & Dormitories in Punjab",
    desc: "Electricity bills, maintenance charges, security deposit rules, late check-in fees — learn what to ask before booking to avoid surprises and get the real monthly cost."
  },
  {
    title: "Why Co-Living & Modern Dormitories Are Exploding in Ludhiana & Jalandhar",
    desc: "Affordable rents, community vibe, flexible leases, high-speed Wi-Fi & study spaces — understand why Gen Z students and young professionals are choosing dorms over traditional PGs and hotels."
  },
  {
    title: "Hotel vs PG vs Dorm: Which Saves You the Most Money for Different Stay Durations?",
    desc: "Weekend getaway, 1-month internship, 6-month job stint — detailed cost breakdown (including food & utilities) across hotels, paying guest houses, and shared dormitories in Punjab cities."
  },
  {
    title: "Must-Have Amenities in Budget Accommodations You Should Never Compromise On",
    desc: "24×7 power backup, hygienic kitchens, high-speed internet, biometric security, RO water — the non-negotiable features that separate good stays from great ones in 2025."
  },
];

export default function About() {
  return (
    <>
      <section className="hero" style={{ marginBottom: "50px", paddingTop: "100px" }} >
        <div className="container" >
          <div className="hero-content">
            <h2>"Hassle-free hotel booking with trusted customer support."</h2>
            <h1>MSB: "Your comfort is our priority – Get instant booking assistance."</h1>
            <p >"Book your perfect hotel with confidence – Support available anytime.".</p>
          </div>
        </div>
      </section>


      {/* about paragraph start */}
      <section className="container" style={{ marginTop: "100px" }}>
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


      {/* services start */}
      <section className="container" style={{ marginTop: "100px", marginBottom: "10px" }}>
        <h2 className="section-title">Strategic and Proven</h2>
        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
          Business Evolution Services tailored to your needs
        </p>
        <div className="grid-3">
          <div className="card">
            <h3>Business Analysis</h3>
            <p>Deep insights into your operations and strategy.</p>
          </div>
          <div className="card">

            <h3>Cloud Computing</h3>
            <p>Secure, scalable cloud solutions for modern business.</p>
          </div>
          <div className="card">
            <h3>Software Development</h3>
            <p>Custom applications built for performance & growth.</p>
          </div>
          {/* add more */}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#" className="btn">All Services</a>
        </div>
      </section>
      {/* services end */}


      <div className="row" style={{ width: "100%" }}>
        {/* about start */}
        <section className="col-9" style={{ background: '#f0f5ff' }}>
          <div className="container">

            <div className="row">
              <div className=" card shadow-lg" style={{ borderRadius: "20px", height: "100%", width: "100%", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)" }}>
                <div className="row g-0">
                  <div className="col-4">
                    <div className="img-hover-zoom">
                      <img className="card-img-top " style={{ borderRadius: "20px", margin: "0px", height: "auto" }} src="public\Assets\images\12.jpg" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card-body">
                      <h5 className="card-title"><b><u><h4>HOTEL</h4></u></b>Elevate Your Stay at The Grand Azure</h5>
                      <p className="card-text">
                        Experience the perfect harmony of luxury and convenience at The Grand Azure. Located in the heart of the city’s vibrant cultural district, our hotel offers a sanctuary for the modern traveler. From our Skyline Suites with panoramic views to our award-winning rooftop dining, every detail is designed for your comfort.
                        Whether you're here to close a deal or unwind in our heated infinity pool, our 24/7 concierge ensures a seamless experience. Discover world-class hospitality where your needs aren't just met—they’re anticipated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row" style={{ marginTop: "30px" }}>
              <div className=" card shadow-lg" style={{ borderRadius: "20px", height: "100%", width: "100%", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)" }}>
                <div className="row g-0">
                  <div className="col">
                    <div className="card-body">
                      <h5 className="card-title"><b><u><h4>PAID GUEST</h4></u></b>Rediscover Comfort at The Grand Azure</h5>
                      <p className="card-text">Tired of the sterile, "one-size-fits-all" travel experience? At The Grand Azure, we turn the pain of travel into the pleasure of arrival. Forget the stress of cramped quarters and impersonal service. Our spacious, soundproof suites are designed as true sanctuaries, ensuring the city’s hustle stays outside while you recharge in quiet luxury.
                        With seamless check-ins, ergonomic workspaces, and a concierge team that anticipates your needs before you even ask, we eliminate the friction of being away from home. Stop settling for just a room—choose a stay that restores your peace.</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="img-hover-zoom">
                      <img className="card-img-top " style={{ borderRadius: "20px", margin: "0px", height: "auto" }} src="public\Assets\images\14.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row" style={{ marginTop: "30px" }}>
              <div className=" card shadow-lg" style={{ borderRadius: "20px", height: "100%", width: "100%", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)" }}>
                <div className="row g-0">
                  <div className="col-4">
                    <div className="img-hover-zoom">
                      <img className="card-img-top " style={{ borderRadius: "20px", margin: "0px", height: "auto" }} src="public\Assets\images\15.jpg" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card-body">
                      <h5 className="card-title"><b><u><h4>DORMITORY</h4></u></b>  Your Gateway to Adventure: The Nomad Nook</h5>
                      <p className="card-text">Traveling on a budget shouldn’t mean compromising on community or comfort. Welcome to The Nomad Nook, a vibrant dormitory designed for the modern explorer. We’ve traded cramped, dingy bunks for custom-built privacy pods, each equipped with individual reading lights, power outlets, and secure under-bed lockers.
                        Our communal lounge and shared kitchen aren't just facilities—they’re the heart of the hostel where lifelong friendships begin over free morning coffee. Whether you're a solo backpacker or a digital nomad, enjoy high-speed Wi-Fi and a social atmosphere that makes every city feel like home.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* about end */}

        <div className="col" style={{ background: "#f0f5ff" }}>
          {/* Commitment start */}
          <section className="container" style={{ marginTop: "300px" }}>
            <h2 className="section-title">Tangible Results. Real Business Expansion.</h2>
            <div style={{ maxWidth: 'auto', margin: '0 auto', textAlign: 'justify' }}>
              <p style={{ fontSize: '1.25rem', marginBottom: 'auto' }}>
                We don’t just deliver projects — we deliver measurable growth.
              </p>
              <p>
                From streamlined operations and cost-efficient cloud infrastructure to powerful custom applications and result-driven digital marketing — every solution we build is designed to move the needle on revenue, efficiency, and customer satisfaction.
              </p>
            </div>
          </section>
          {/* Commitment end */}
        </div>
      </div>


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