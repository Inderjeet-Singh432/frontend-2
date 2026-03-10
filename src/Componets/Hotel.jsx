// src/Hotels.jsx
// ──────────────────────────────────────────────────────────────────────────────
// SINGLE FILE VERSION - Hotel Search + Filters + Booking Modal
// Modal improvements:
//   - perfectly centered
//   - 0 transparency (solid background)
//   - significantly larger size
// ──────────────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    name: "Puneet Gupta",
    role: "IT Consultant",
    text: "One platform for hotels, PGs & dorms — filters work perfectly. Booked hassle-free for my entire team. Highly recommended!"
  },
  {
    name: "Dr. Anjali Verma",
    role: "Doctor",
    text: "Professional service, instant support, transparent pricing. MSB has become my default booking platform for travel in Punjab."
  },
  {
    name: "Neha Kapoor",
    role: "Marketing Head",
    text: "Perfect mix of luxury hotels and budget options. Clean UI, no surprises in pricing. Team loves it!"
  }
];

const industries = [
  {
    title: "Students & Education Sector",
    desc: "Affordable PGs, hostels, and dormitories close to universities, coaching centers, and colleges with mess, Wi-Fi & 24/7 security."
  },
  {
    title: "Healthcare & Medical Staff",
    desc: "Comfortable stays for doctors, nurses, medical reps, attendants, and hospital staff — short-term hotels and long-stay PG options."
  },
  {
    title: "Banking, Finance & Corporate Employees",
    desc: "Well-located hotels and premium PGs for bankers, auditors, sales teams, and trainees during regional travel and assignments."
  },
  {
    title: "E-commerce & Logistics Teams",
    desc: "Quick, clean, and affordable accommodations for warehouse supervisors, delivery coordinators, and operations staff."
  },
  {
    title: "Government & PSU Officials",
    desc: "Secure and convenient stays for officers, trainees, inspection teams, and project staff on official duty or training."
  },
  {
    title: "Travelers & Tour Groups",
    desc: "Hotels, family-friendly PGs, and group dormitories for tourists, event organizers, wedding parties, and leisure travelers."
  }
];

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Link, useNavigate } from 'react-router-dom'
import { BiHotel, BiMapPin, BiDollar } from 'react-icons/bi'
import { Star, Users, Calendar, Filter as FilterIcon, X } from 'lucide-react'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import Modal from 'react-modal'
import ApiServices from '../ApiServices'

// Bind modal to root element (accessibility)
Modal.setAppElement('#root')

// ─── Styled Components ───────────────────────────────────────────────────────
// (unchanged - keeping your original styles)

const Hero = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #95bed8ea 100%);
  color: white;
  padding: 5rem 0 4rem;
  position: relative;
  overflow: hidden;
border-radius: 0  140px 0 140px;  /* bottom curved */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 30% 70%, rgba(255,255,255,0.12) 0%, transparent 50%);
    animation: pulse 12s infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50% { opacity: 0.9; transform: scale(1.05); }
  }
`

const SearchForm = styled.form`
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  box-shadow: 0 15px 40px rgba(0,0,0,0.25);
`

const FilterSidebar = styled.aside`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  position: sticky;
  top: 20px;
  height: fit-content;
`

const HotelCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: all 0.35s ease;
  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.18);
  }
`

const HotelImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  overflow: hidden;
`

const HotelImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  transition: transform 0.45s ease;
  ${HotelCard}:hover & {
    transform: scale(1.12);
  }
`

// ─── Updated Booking Modal Content ───────────────────────────────────────────
// (unchanged)

const BookingModalContent = styled.div`
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  padding: 2.8rem 2.4rem;
  border-radius: 20px;
  text-align: center;
  width: 100%;
  max-width: 580px;
  box-shadow: 0 25px 70px rgba(0,0,0,0.45);
  position: relative;

  h3 {
    font-size: 2.1rem;
    margin-bottom: 1.4rem;
    font-weight: 700;
  }

  h5 {
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.15rem;
    margin-bottom: 1.3rem;
    opacity: 0.95;
  }

  .total {
    font-size: 2rem;
    font-weight: 700;
    margin: 1.8rem 0;
    padding: 1.2rem;
    background: rgba(255,255,255,0.18);
    border-radius: 12px;
  }

  .form-control {
    background: white;
    border: none;
    color: #111;
    font-size: 1.1rem;
    padding: 1rem 1.3rem;
    border-radius: 10px;
    margin-bottom: 1.4rem;
    &::placeholder { color: #666; }
    &:focus { box-shadow: 0 0 0 4px rgba(255,255,255,0.4); }
  }

  .btn-confirm {
    font-size: 1.3rem;
    padding: 1rem 2.5rem;
    background: white;
    color: #4f46e5;
    border: none;
    border-radius: 12px;
    font-weight: 700;
    transition: all 0.25s;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 30px rgba(0,0,0,0.3);
    }
  }

  .close-btn {
    position: absolute;
    top: 1.2rem;
    right: 1.4rem;
    background: rgba(255,255,255,0.25);
    border: none;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    color: white;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    &:hover { background: rgba(255,255,255,0.5); }
  }
`

// ─── Sample Data ─────────────────────────────────────────────────────────────
// Important: I added type field to make filtering work right now
// When you use real API data → make sure backend returns "type" field

const sampleHotels = [
  { id: 1, type: "hotel", name: 'Luxury Grand Inn', location: 'Model Town, Jalandhar', price: 3500, rating: 4.5, image: 'public/Assets/Images/15.jpg', amenities: ['AC', 'WiFi', 'Pool'], desc: 'Elegant rooms with panoramic city views' },
  { id: 2, type: "pg", name: 'Cozy PG Haven', location: 'Urban Estate, Jalandhar', price: 1200, rating: 4.0, image: 'public/Assets/Images/14.jpg', amenities: ['WiFi', 'Free Breakfast'], desc: 'Comfortable & budget-friendly for students' },
  { id: 3, type: "dormitory", name: 'Elite Dormitory Plaza', location: 'Civil Lines, Jalandhar', price: 800, rating: 3.8, image: 'public/Assets/Images/12.jpg', amenities: ['AC', 'Gym'], desc: 'Modern shared accommodation' },
  { id: 4, type: "hotel", name: 'Royal Heritage Hotel', location: 'Adarsh Nagar, Jalandhar', price: 4500, rating: 4.8, image: 'public/Assets/Images/12.jpg', amenities: ['Pool', 'WiFi', 'Free Breakfast'], desc: 'Timeless luxury with royal touch' },
  { id: 5, type: "dormitory", name: 'Budget Stay Dorm', location: 'Kapurthala Road, Jalandhar', price: 600, rating: 3.5, image: 'public/Assets/Images/12.jpg', amenities: ['WiFi'], desc: 'Clean, simple & very affordable' },
  { id: 6, type: "hotel", name: 'Starlight Suites', location: 'Guru Nanak Nagar, Jalandhar', price: 2800, rating: 4.2, image: 'public/Assets/Images/12.jpg', amenities: ['AC', 'Pool', 'Gym'], desc: 'Family-friendly with rooftop relaxation' },
  { id: 7, type: "pg", name: 'Urban PG Retreat', location: 'Lajpat Nagar, Jalandhar', price: 1500, rating: 4.1, image: 'public/Assets/Images/15.jpg', amenities: ['AC', 'Free Breakfast'], desc: 'Vibrant & social living space' },
  { id: 8, type: "dormitory", name: 'Premier Dorm Towers', location: 'Industrial Area, Jalandhar', price: 1000, rating: 4.3, image: 'public/Assets/Images/14.jpg', amenities: ['WiFi', 'Gym'], desc: 'Convenient high-rise accommodation' },
]

// ─── Main Component ──────────────────────────────────────────────────────────

function Hotels() {
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm()

  const [hotels] = useState(sampleHotels)
  const [filteredHotels, setFilteredHotels] = useState(sampleHotels)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const hotelsPerPage = 6

  // -----------------------------------------------------------------------------------------------------------------api start
  var [data, setData] = useState()
  let [totalpages, settotalpages] = useState([])
  let [hotel, setHottel] = useState([])
  let [pg, setpg] = useState([])
  let [dormintory, setDormintory] = useState([])

  useEffect(() => {
    ApiServices.propertyGetall()
      .then((res) => {
        console.log(res?.data?.data);
        if (res?.data?.success) {
          setData(res?.data?.data)
          settotalpages(Math.ceil(res?.data?.data?.length / hotelsPerPage))
          // TODO: when real API works → setHotels(res?.data?.data) instead of sampleHotels
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  // -----------------------------------------------------------------------------------------------------------------api end

  const [search, setSearch] = useState({
    location: '',
    checkIn: new Date(),
    checkOut: new Date(Date.now() + 86400000 * 2),
    guests: 2,
  })

  const [filters, setFilters] = useState({
    price: [500, 5000],
    rating: [],
    amenities: [],
    sort: 'price-low',
    stayType: '',           // ← NEW: added stay type filter
  })

  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedHotel, setSelectedHotel] = useState(null)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      let result = [...hotels]

      if (search.location.trim()) {
        result = result.filter(h =>
          h.location.toLowerCase().includes(search.location.toLowerCase())
        )
      }

      result = result.filter(h =>
        h.price >= filters.price[0] && h.price <= filters.price[1]
      )

      // ─── NEW: Stay Type filter ────────────────────────────────
      if (filters.stayType) {
        result = result.filter(h => h.type === filters.stayType)
      }
      // ───────────────────────────────────────────────────────────

      if (filters.rating.length > 0) {
        result = result.filter(h => filters.rating.includes(Math.floor(h.rating)))
      }

      if (filters.amenities.length > 0) {
        result = result.filter(h =>
          filters.amenities.some(amenity => h.amenities.includes(amenity))
        )
      }

      result.sort((a, b) => {
        if (filters.sort === 'price-low') return a.price - b.price
        if (filters.sort === 'price-high') return b.price - a.price
        if (filters.sort === 'rating-high') return b.rating - a.rating
        return 0
      })

      setFilteredHotels(result)
      setLoading(false)
    }, 400)
  }, [search, filters, hotels])

  const indexOfLast = currentPage * hotelsPerPage
  const indexOfFirst = indexOfLast - hotelsPerPage
  const currentHotels = filteredHotels.slice(indexOfFirst, indexOfLast)
  const totalPages = Math.ceil(filteredHotels.length / hotelsPerPage)

  const onBook = (data) => {
    if (!selectedHotel) return
    const nights = Math.max(1, Math.ceil((search.checkOut - search.checkIn) / 86400000))
    const total = selectedHotel.price * nights

    toast.success(`Booking confirmed! ${selectedHotel.name} • ₹${total} for ${nights} night(s)`)
    reset()
    setIsBookingOpen(false)
    navigate('/bookings')
  }

  return (
    <>
      {/* hero start */}
      <section className="hero" style={{ marginBottom: "50px", paddingTop: "100px" }} >
        <div className="container" >
          <div className="hero-content">
            <h3>"Hassle-free hotel booking with trusted customer support."</h3>
            <h2>MSB: "Your comfort is our priority – Get instant booking with MSB" (Multiple Stay Booking Site)</h2>
            <p >"Book your perfect hotel with confidence – Support available anytime.".</p>

            <Hero>
              <div className="container" style={{ marginTop: "-60px", marginBottom: "-5px" }}>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="display-4 fw-bold mb-4 text-center"
                  style={{ fontSize: "47px" }}                >
                  <BiHotel className="me-3" style={{ fontSize: '3.2rem' }} />
                  Find Your Perfect Stay
                </motion.h1>

                <SearchForm onSubmit={(e) => { e.preventDefault(); setCurrentPage(1) }}>
                  <div className="row g-3 align-items-end">
                    <div className="col-md-4">
                      <label className="form-label fw-bold"><BiMapPin className="me-1" /> Location</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Jalandhar, Punjab..."
                        value={search.location}
                        onChange={e => setSearch({ ...search, location: e.target.value })}
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label fw-bold"><Calendar className="me-1" /> Check-in</label>
                      <DatePicker
                        selected={search.checkIn}
                        onChange={date => setSearch({ ...search, checkIn: date })}
                        className="form-control form-control-lg"
                        minDate={new Date()}
                        dateFormat="dd MMM yyyy"
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label fw-bold">Check-out</label>
                      <DatePicker
                        selected={search.checkOut}
                        onChange={date => setSearch({ ...search, checkOut: date })}
                        className="form-control form-control-lg"
                        minDate={search.checkIn}
                        dateFormat="dd MMM yyyy"
                      />
                    </div>
                    <div className="col-md-2">
                      <label className="form-label fw-bold"><Users className="me-1" /> Guests</label>
                      <select
                        className="form-select form-select-lg"
                        value={search.guests}
                        onChange={e => setSearch({ ...search, guests: Number(e.target.value) })}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4+</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-light w-100 mt-4 fw-bold">
                    Book now
                  </button>
                </SearchForm>
              </div>
            </Hero>
          </div>
        </div>
      </section>
      {/* hero end */}


      <div className="min-vh-100 bg-light">

        {/* Hero + Search - unchanged */}


        {/* Main Content */}
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3 mb-5 mb-lg-0">
              <FilterSidebar>
                <h4 className="mb-4 fw-bold"><FilterIcon className="me-2" size={20} /> Filters</h4>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Price per night (₹)</label>
                  <input
                    type="range"
                    className="form-range"
                    min="500"
                    max="5000"
                    step="100"
                    value={filters.price[1]}
                    onChange={e => setFilters({ ...filters, price: [500, Number(e.target.value)] })}
                  />
                  <div className="d-flex justify-content-between mt-1 small">
                    <span>₹500</span>
                    <span>₹{filters.price[1]}</span>
                  </div>
                </div>

                {/* ─── NEW FILTER ADDED HERE ─────────────────────────────── */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">Stay Type</label>
                  <select
                    className="form-select"
                    value={filters.stayType}
                    onChange={e => setFilters(prev => ({ ...prev, stayType: e.target.value }))}
                  >
                    <option value="">All Types</option>
                    <option value="hotel">Hotel</option>
                    <option value="pg">PG</option>
                    <option value="dormitory">Dormitory</option>
                  </select>
                </div>
                {/* ─────────────────────────────────────────────────────────── */}

                <div className="mb-4">
                  <label className="form-label fw-semibold">Star Rating</label>
                  {['5', '4', '3'].map(r => (
                    <div key={r} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`rating-${r}`}
                        checked={filters.rating.includes(Number(r))}
                        onChange={e => {
                          const vals = e.target.checked
                            ? [...filters.rating, Number(r)]
                            : filters.rating.filter(v => v !== Number(r))
                          setFilters({ ...filters, rating: vals })
                        }}
                      />
                      <label className="form-check-label" htmlFor={`rating-${r}`}>
                        {r} Stars
                      </label>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Amenities</label>
                  {['AC', 'WiFi', 'Pool', 'Gym', 'Free Breakfast'].map(a => (
                    <div key={a} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`amenity-${a}`}
                        checked={filters.amenities.includes(a)}
                        onChange={e => {
                          const vals = e.target.checked
                            ? [...filters.amenities, a]
                            : filters.amenities.filter(v => v !== a)
                          setFilters({ ...filters, amenities: vals })
                        }}
                      />
                      <label className="form-check-label" htmlFor={`amenity-${a}`}>
                        {a}
                      </label>
                    </div>
                  ))}
                </div>

                <div>
                  <label className="form-label fw-semibold">Sort by</label>
                  <select
                    className="form-select"
                    value={filters.sort}
                    onChange={e => setFilters({ ...filters, sort: e.target.value })}
                  >
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating-high">Rating: High to Low</option>
                  </select>
                </div>
              </FilterSidebar>
            </div>

            <div className="col-lg-9">
              {loading ? (
                <div className="text-center py-5 my-5">
                  <ClipLoader color="#667eea" size={60} />
                </div>
              ) : (
                <>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="mb-0">
                      {filteredHotels.length} {filteredHotels.length === 1 ? 'stay' : 'stays'} found
                    </h4>
                    <Link to="#" className="btn btn-outline-secondary">View on Map</Link>
                  </div>

                  <div className="row">
                    <AnimatePresence>
                      {currentHotels.map((hotel, idx) => (
                        <div className="col-12" style={{ marginTop: "30px" }} key={hotel.id}>
                          <HotelCard
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08, duration: 0.5 }}
                          >
                            {/* row start */}
                            <div className='row'>
                              {/* properity type badge start */}
                              <div className='col-12 d-flex justify-content-end p-2'>
                                <span className="badge " style={{ color: "black" }}>{hotel.type.toUpperCase()}</span>
                              </div>
                              {/* properity type badge start */}

                              <div className='row'>
                                {/* image start */}
                                <div className='col-4'>
                                  <HotelImageWrapper>
                                    <HotelImage src={hotel.image} alt={hotel.name} />
                                  </HotelImageWrapper>
                                </div>
                                {/* image end */}

                                {/* name and description start */}
                                <div className='col-6' >
                                  {/* name and ratting start */}
                                  <div className='col-12' style={{ height: "auto" }}>
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                      <h5 className="mb-0">{hotel.name}</h5>

                                    </div>
                                  </div>
                                  {/* name and ratting end */}

                                  {/* description start */}
                                  <div className='col-12' style={{ marginTop: "20px" }}>
                                    <p className="text-muted small mb-2">
                                      <BiMapPin size={14} className="me-1" />
                                      {hotel.location}
                                    </p>
                                    <p className="small mb-3">{hotel.desc}</p>
                                  </div>
                                  {/* description end */}
                                </div>
                                {/* name and description end */}

                                {/* booking button start */}
                                <div className='col-2'>
                                  {/* raiting and price start */}
                                  <div className="d-flex align-items-center text-warning" style={{ marginTop: "20px" }}>
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        size={16}
                                        fill={i < Math.floor(hotel.rating) ? '#ffc107' : 'none'}
                                      />
                                    ))}
                                    <h6 className="ms-1 text-muted">({hotel.rating})</h6>
                                  </div>
                                  {/* raiting and price end */}

                                  {/* price start  */}
                                  <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0 text-primary" style={{ marginTop: "20px" }}>
                                      ₹{hotel.price}<large className="text-muted"> / night</large>
                                    </h5>
                                  </div>
                                  {/* price end  */}

                                  <button
                                    style={{ padding: "10px 20px", marginTop: "20px" }}
                                    className="btn btn-sm btn-primary d-flex align-items-center justify-content-center"
                                    onClick={() => {
                                      setSelectedHotel(hotel)
                                      setIsBookingOpen(true)
                                    }}
                                  >
                                    Book now
                                  </button>
                                </div>
                                {/* booking button end */}

                              </div>

                            </div>
                            {/* row end */}
                          </HotelCard>
                        </div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {totalPages > 1 && (
                    <nav className="mt-5">
                      <ul className="pagination justify-content-center">
                        {[...Array(totalPages)].map((_, i) => (
                          <li
                            key={i}
                            className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                          >
                            <button
                              className="page-link"
                              onClick={() => setCurrentPage(i + 1)}
                            >
                              {i + 1}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* ─── IMPROVED BOOKING MODAL ─────────────────────────────────────────────── */}
        <Modal
          isOpen={isBookingOpen}
          onRequestClose={() => setIsBookingOpen(false)}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.70)',
              zIndex: 1050,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
            content: {
              position: 'relative',
              inset: 'auto',
              border: 'none',
              background: 'transparent',
              padding: 0,
              overflow: 'visible',
              maxWidth: '620px',
              width: '90vw',
            }
          }}
        >
          {selectedHotel && (
            <BookingModalContent>
              <button className="close-btn" onClick={() => setIsBookingOpen(false)}>
                <X size={28} />
              </button>

              <h3>Confirm Your Booking</h3>
              <h5>{selectedHotel.name}</h5>

              <p>
                {search.checkIn.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} —
                {search.checkOut.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
              </p>

              <p>Guests: {search.guests} • {selectedHotel.location}</p>

              <div className="total">
                Total: ₹{selectedHotel.price * Math.max(1, Math.ceil((search.checkOut - search.checkIn) / 86400000))}
              </div>

              <form onSubmit={handleSubmit(onBook)}>
                <input
                  className="form-control"
                  placeholder="Full Name"
                  {...register('name', { required: true })}
                />
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email Address"
                  {...register('email', { required: true })}
                />
                <input
                  className="form-control"
                  type="tel"
                  placeholder="Phone Number"
                  {...register('phone', { required: true })}
                />

                <button type="submit" className="btn-confirm mt-4 w-100">
                  Confirm & Book Now
                </button>
              </form>
            </BookingModalContent>
          )}
        </Modal>

      </div>


      {/* Testimonials start */}
      <section className="container" style={{ marginTop: "150px" }}>
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="grid-3">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <p>“{t.text}”</p>
              <p style={{ marginTop: '1.5rem', fontWeight: '600' }}>
                — {t.name}<br />
                <span style={{ fontWeight: 'normal', color: '#666', fontSize: '0.95rem' }}>{t.role}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials end */}


      {/* Industries start */}
      <section style={{ background: '#f8f9fa', marginTop: "20px" }}>
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            Reliable, comfortable, and budget-friendly accommodation solutions — from hotels and premium PGs to modern dormitories — tailored for professionals, students, companies, and travelers across Punjab and Chandigarh.
          </p>

          <div className="grid-3">
            {industries.map((ind, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="#" className="btn">Explore Partner Properties</a>
          </div>
        </div>
      </section>
      {/* Industries end */}

    </>
  )
}

export default Hotels