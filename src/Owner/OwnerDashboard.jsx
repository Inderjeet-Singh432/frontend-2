// src/pages/OwnerDashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const OwnerDashboard = () => {
  const navigate = useNavigate();

  // Mock data - in real app, fetch from API
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: 'Cozy PG Sector 34',
      type: 'PG',
      addressLine1: 'House 123, Main Road',
      description: 'Fully furnished rooms with AC and meals...',
      licenseNumber: 'PG/2024/001',
      imageCount: 5,
      pricePerNight: 450,
      status: 'Active',
    },
  ]);

  const [bookings, setBookings] = useState([
    {
      id: 1,
      propertyName: 'Cozy PG Sector 34',
      guestName: 'John Doe',
      checkIn: '2024-03-15',
      checkOut: '2024-03-20',
      amount: 2500,
      status: 'Confirmed',
    },
  ]);

  const [reviews, setReviews] = useState([
    {
      id: 1,
      propertyName: 'Cozy PG Sector 34',
      rating: 4.5,
      comment: 'Great stay, clean rooms and friendly staff!',
      date: '2024-03-05',
    },
  ]);

  const [activeTab, setActiveTab] = useState('dashboard');

  const [formData, setFormData] = useState({
    name: '',
    type: 'PG',
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    pricePerNight: '',
    description: '',
    licenseNumber: '',
    images: [],
  });

  const [imageNames, setImageNames] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, images: files }));
      setImageNames(Array.from(files).map((f) => f.name));
    }
  };

  const handleAddProperty = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.addressLine1 || !formData.pricePerNight || formData.images.length === 0) {
      alert('Please fill Property Name, Address Line 1, Price per Night and upload at least one image.');
      return;
    }

    const newProperty = {
      id: Date.now(),
      ...formData,
      pricePerNight: Number(formData.pricePerNight),
      status: 'Pending Approval',
      imageCount: formData.images.length,
    };

    setProperties([...properties, newProperty]);
    setFormData({
      name: '',
      type: 'PG',
      addressLine1: '',
      addressLine2: '',
      addressLine3: '',
      pricePerNight: '',
      description: '',
      licenseNumber: '',
      images: [],
    });
    setImageNames([]);

    Swal.fire({
      title: 'Success!',
      text: 'Property submitted for approval.',
      icon: 'success',
      confirmButtonColor: '#1d4ed8',
    });
  };

  const handleCancelBooking = (bookingId) => {
    Swal.fire({
      title: 'Cancel Booking?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      confirmButtonText: 'Yes, Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        setBookings(bookings.filter((b) => b.id !== bookingId));
        Swal.fire('Cancelled!', 'Booking has been cancelled.', 'success');
      }
    });
  };

  const handleDeleteReview = (reviewId) => {
    Swal.fire({
      title: 'Delete Review?',
      text: 'This will remove the review permanently.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      confirmButtonText: 'Yes, Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        setReviews(reviews.filter((r) => r.id !== reviewId));
        Swal.fire('Deleted!', 'Review has been removed.', 'success');
      }
    });
  };

  const handleDeleteProperty = (propertyId) => {
    Swal.fire({
      title: 'Delete Property?',
      text: 'This will remove the property and all associated data.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      confirmButtonText: 'Yes, Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        setProperties(properties.filter((p) => p.id !== propertyId));
        Swal.fire('Deleted!', 'Property has been removed.', 'success');
      }
    });
  };

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure to logout?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!!',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/');
        Swal.fire('Logged out!', 'You have been logged out.', 'success');
      }
    });
  };

  const renderDashboard = () => (
    <div>
      {/* Quick Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        <div style={{ background: 'white', padding: '24px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
          <h3 style={{ color: '#6b7280', margin: '0 0 8px' }}>Total Properties</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700, color: '#1e40af', margin: 0 }}>{properties.length}</p>
        </div>
        <div style={{ background: 'white', padding: '24px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
          <h3 style={{ color: '#6b7280', margin: '0 0 8px' }}>Active Bookings</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700, color: '#059669', margin: 0 }}>{bookings.filter(b => b.status === 'Confirmed').length}</p>
        </div>
        <div style={{ background: 'white', padding: '24px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
          <h3 style={{ color: '#6b7280', margin: '0 0 8px' }}>Average Rating</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700, color: '#d97706', margin: 0 }}>4.2 ★</p>
        </div>
      </div>

      {/* Properties Quick View */}
      <section style={{ background: 'white', borderRadius: '12px', padding: '28px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e2937', marginBottom: '20px' }}>Your Properties (Quick View)</h2>
        {properties.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#6b7280' }}>
            <p style={{ fontSize: '1.2rem' }}>No properties added yet</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '20px' }}>
            {properties.slice(0, 3).map((prop) => (
              <div key={prop.id} style={{ border: '1px solid #e5e7eb', borderRadius: '10px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ margin: '0 0 6px', fontSize: '1.25rem' }}>{prop.name}</h3>
                  <p style={{ margin: '0 0 4px', color: '#4b5563' }}>{prop.type} • ₹{prop.pricePerNight}/night</p>
                  <p style={{ margin: '0', fontSize: '0.9rem', color: '#6b7280' }}>{prop.description.substring(0, 80)}...</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ padding: '6px 12px', background: prop.status === 'Active' ? '#d1fae5' : '#fef3c7', color: prop.status === 'Active' ? '#065f46' : '#92400e', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 500 }}>
                    {prop.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Add New Property Form */}
      <section style={{ background: 'white', borderRadius: '12px', padding: '28px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', marginTop: '24px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e2937', marginBottom: '24px' }}>Add New Property</h2>
        <form onSubmit={handleAddProperty} style={{ display: 'grid', gap: '20px', gridTemplateColumns: '1fr 1fr' }}>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>Property Name *</label>
            <input name="name" value={formData.name} onChange={handleChange} required placeholder="e.g. Royal Comfort PG" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }} />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>Property Type *</label>
            <select name="type" value={formData.type} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }}>
              <option value="PG">PG</option>
              <option value="Hotel">Hotel</option>
              <option value="Dormitory">Dormitory</option>
              <option value="Hostel">Hostel</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>Price per Night (₹) *</label>
            <input
              name="pricePerNight"
              type="number"
              value={formData.pricePerNight}
              onChange={handleChange}
              required
              min="100"
              placeholder="e.g. 450"
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }}
            />
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>Address Line 1 *</label>
            <input name="addressLine1" value={formData.addressLine1} onChange={handleChange} required placeholder="House no, Street name, Landmark" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }} />
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>Address Line 2</label>
            <input name="addressLine2" value={formData.addressLine2} onChange={handleChange} placeholder="Apartment, Floor, Building name (optional)" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }} />
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>Address Line 3</label>
            <input name="addressLine3" value={formData.addressLine3} onChange={handleChange} placeholder="City, State (optional)" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }} />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>License Number</label>
            <input name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} placeholder="e.g. HM/2024/12345" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }} />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>Upload Images * (at least 1)</label>
            <input type="file" multiple accept="image/*" onChange={handleImageChange} required style={{ width: '100%', padding: '8px' }} />
            {imageNames.length > 0 && <div style={{ marginTop: '8px', fontSize: '0.9rem', color: '#4b5563' }}>Selected: {imageNames.join(', ')}</div>}
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows={4} placeholder="Amenities, rules, nearby landmarks..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }} />
          </div>

          <div style={{ gridColumn: '1 / -1', textAlign: 'right', marginTop: '12px' }}>
            <button type="submit" style={{ padding: '12px 40px', background: '#1d4ed8', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1.05rem', fontWeight: 600, cursor: 'pointer' }}>
              Submit for Approval
            </button>
          </div>
        </form>
      </section>
    </div>
  );

  const renderProperties = () => (
    <section style={{ background: 'white', borderRadius: '12px', padding: '28px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e2937', marginBottom: '20px' }}>My Properties</h2>
      {properties.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: '#6b7280' }}>
          <p>No properties added yet</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {properties.map((prop) => (
            <div key={prop.id} style={{ border: '1px solid #e5e7eb', borderRadius: '10px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: '0 0 6px', fontSize: '1.25rem' }}>{prop.name}</h3>
                <p style={{ margin: '0 0 4px', color: '#4b5563' }}>{prop.type} • ₹{prop.pricePerNight}/night • License: {prop.licenseNumber || 'N/A'}</p>
                <p style={{ margin: '0', fontSize: '0.9rem', color: '#6b7280' }}>{prop.description.substring(0, 80)}...</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ padding: '6px 12px', background: prop.status === 'Active' ? '#d1fae5' : '#fef3c7', color: prop.status === 'Active' ? '#065f46' : '#92400e', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 500, marginRight: '8px' }}>
                  {prop.status}
                </span>
                <button style={{ padding: '8px 16px', background: '#1d4ed8', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', marginRight: '8px' }}>Edit</button>
                <button onClick={() => handleDeleteProperty(prop.id)} style={{ padding: '8px 16px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );

  // ... (rest of the render functions remain unchanged: renderBookings, renderReviews, renderAccount)

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'properties':
        return renderProperties();
      case 'bookings':
        return renderBookings();
      case 'reviews':
        return renderReviews();
      case 'account':
        return renderAccount();
      default:
        return renderDashboard();
    }
  };

  // Note: renderBookings, renderReviews, renderAccount functions are omitted here for brevity
  // They remain the same as in the previous version

  return (
    <div style={{ minHeight: '100vh', marginTop: '80px', background: '#f1f5f9', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ background: 'white', padding: '16px 32px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1e40af' }}>MSB Owner Dashboard</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ color: '#4b5563' }}>Welcome, Inderjeet</span>
          <button onClick={handleLogout} style={{ padding: '8px 20px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Logout</button>
        </div>
      </header>

      <div style={{ display: 'flex', maxWidth: '1400px', margin: '0 auto', padding: '24px', gap: '24px' }}>
        <aside style={{ width: '260px', background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', height: 'fit-content' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              { key: 'dashboard', label: 'Dashboard' },
              { key: 'properties', label: 'My Properties' },
              { key: 'bookings', label: 'Bookings' },
              { key: 'reviews', label: 'Reviews' },
              { key: 'promotions', label: 'Promotions' },
              { key: 'payouts', label: 'Payouts' },
              { key: 'account', label: 'Manage Account' },
              { key: 'settings', label: 'Settings' },
            ].map((item) => (
              <li key={item.key} style={{ marginBottom: '8px' }}>
                <button
                  onClick={() => setActiveTab(item.key)}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    color: activeTab === item.key ? '#1e40af' : '#4b5563',
                    background: activeTab === item.key ? '#eff6ff' : 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontWeight: activeTab === item.key ? 600 : 400,
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main style={{ flex: 1, marginTop: '20px' }}>{renderContent()}</main>
      </div>
    </div>
  );
};

export default OwnerDashboard;