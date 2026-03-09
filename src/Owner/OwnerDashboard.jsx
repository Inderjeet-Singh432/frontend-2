// src/pages/OwnerDashboard.jsx
import React, { useState } from 'react';

const OwnerDashboard = () => {
  const [properties, setProperties] = useState([]); // ← will come from API

  const [formData, setFormData] = useState({
    name: '',
    type: 'PG', // Hotel / PG / Dormitory
    location: '',
    rooms: '',
    pricePerNight: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProperty = (e) => {
    e.preventDefault();
    // → Replace with real API call
    // await fetch('/api/owner/properties', { method: 'POST', body: JSON.stringify(formData) ... })

    const newProperty = {
      id: Date.now(),
      ...formData,
      status: 'Pending Approval',
    };

    setProperties([...properties, newProperty]);
    setFormData({
      name: '',
      type: 'PG',
      location: '',
      rooms: '',
      pricePerNight: '',
      description: '',
    });

    alert('Property added! (demo mode - will be visible to users after approval)');
  };

  return (
    <div style={{ minHeight: '100vh',marginTop:"80px", background: '#f1f5f9', fontFamily: 'system-ui, sans-serif' }}>
      {/* Top Bar */}
      <header
        style={{
          background: 'white',
          padding: '16px 32px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1e40af' }}>MSB Owner Dashboard</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ color: '#4b5563' }}>Welcome (name)</span>
          <button
            onClick={() => {
              // logout logic
              window.location.href = '/login';
            }}
            style={{
              padding: '8px 20px',
              background: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        </div>
      </header>

      <div style={{ display: 'flex', maxWidth: '1400px', margin: '0 auto', padding: '24px', gap: '24px' }}>
        {/* Sidebar */}
        <aside
          style={{
            width: '260px',
            background: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
            height: 'fit-content',
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Dashboard', 'My Properties', 'Bookings', 'Promotions', 'Payouts', 'Settings'].map((item) => (
              <li key={item} style={{ marginBottom: '8px' }}>
                <a
                  href="#"
                  style={{
                    display: 'block',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    color: item === 'Dashboard' ? '#1e40af' : '#4b5563',
                    background: item === 'Dashboard' ? '#eff6ff' : 'transparent',
                    textDecoration: 'none',
                    fontWeight: item === 'Dashboard' ? 600 : 400,
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1 }}>
          {/* Add New Property Form */}
          <section
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '28px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              marginBottom: '32px',
            }}
          >
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e2937', marginBottom: '20px' }}>
              Add New Property
            </h2>

            <form onSubmit={handleAddProperty} style={{ display: 'grid', gap: '20px', gridTemplateColumns: '1fr 1fr' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>Property Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Cozy PG Sector 34"
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }}
                >
                  <option value="PG">PG</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Dormitory">Dormitory</option>
                  <option value="Hostel">Hostel</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>Location</label>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Chandigarh, Sector 17"
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>Total Rooms/Beds</label>
                <input
                  name="rooms"
                  type="number"
                  value={formData.rooms}
                  onChange={handleChange}
                  required
                  min="1"
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>Price per Night (₹)</label>
                <input
                  name="pricePerNight"
                  type="number"
                  value={formData.pricePerNight}
                  onChange={handleChange}
                  required
                  min="100"
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }}
                />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Key features, amenities, rules..."
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }}
                />
              </div>

              <div style={{ gridColumn: '1 / -1', textAlign: 'right' }}>
                <button
                  type="submit"
                  style={{
                    padding: '12px 32px',
                    background: '#1d4ed8',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Add Property
                </button>
              </div>
            </form>
          </section>

          {/* My Properties List */}
          <section
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '28px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
            }}
          >
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e2937', marginBottom: '20px' }}>
              My Properties
            </h2>

            {properties.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 0', color: '#6b7280' }}>
                <p style={{ fontSize: '1.2rem' }}>No properties added yet</p>
                <p>Use the form above to list your first hotel, PG or dormitory</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gap: '20px' }}>
                {properties.map((prop) => (
                  <div
                    key={prop.id}
                    style={{
                      border: '1px solid #e5e7eb',
                      borderRadius: '10px',
                      padding: '20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <h3 style={{ margin: '0 0 6px', fontSize: '1.25rem' }}>{prop.name}</h3>
                      <p style={{ margin: '0 0 4px', color: '#4b5563' }}>
                        {prop.type} • {prop.location} • ₹{prop.pricePerNight}/night
                      </p>
                      <p style={{ margin: '0', fontSize: '0.9rem', color: '#6b7280' }}>
                        Rooms/Beds: {prop.rooms} • {prop.description.substring(0, 80)}...
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span
                        style={{
                          padding: '6px 12px',
                          background: prop.status === 'Active' ? '#d1fae5' : '#fef3c7',
                          color: prop.status === 'Active' ? '#065f46' : '#92400e',
                          borderRadius: '999px',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                        }}
                      >
                        {prop.status}
                      </span>
                      <button
                        style={{
                          marginLeft: '16px',
                          padding: '8px 16px',
                          background: '#1d4ed8',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                        }}
                      >
                        Edit / Manage
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default OwnerDashboard;