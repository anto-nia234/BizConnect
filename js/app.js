
function displayBusinesses(data) {
  const businessContainer = document.getElementById("businessContainer");
  if (!businessContainer) return;
  
  businessContainer.innerHTML = "";

  if (!data || data.length === 0) {
    businessContainer.innerHTML = `<p style="text-align:center;grid-column:1/-1;">No businesses found.</p>`;
    return;
  }

  data.forEach(business => {
   
    const numericRating = business.rating || 4.0;
    const fullStars = Math.floor(numericRating);
    const hasHalfStar = numericRating % 1 !== 0;
    const maxStars = 5;

    let starsHTML = "";

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star" style="color: #FFD700; margin-right: 2px;"></i>';
    }
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt" style="color: #FFD700; margin-right: 2px;"></i>';
    }
    const currentStarsCount = fullStars + (hasHalfStar ? 1 : 0);
    for (let i = currentStarsCount; i < maxStars; i++) {
        starsHTML += '<i class="far fa-star" style="color: #D3D3D3; margin-right: 2px;"></i>';
    }

   
    businessContainer.innerHTML += `
        <div class="business-card">
            <img
                src="${business.image}"
                alt="${business.name}"
                onerror="this.src='https://placehold.co/600x400?text=BizConnect'"
            >
            <div class="business-info">
                <h3>${business.name}</h3>

                <div class="business-rating" style="margin-bottom: 8px;">
                    ${starsHTML} <span style="color: #666; font-weight: 500; font-size: 0.9rem;">(${numericRating})</span>
                </div>

                <p><strong>Category:</strong> ${business.category}</p>
                <p><strong>Location:</strong> ${business.location}</p>
                <p><strong>Phone:</strong> ${business.phone}</p>

                ${business.verified ? `<div class="verified-badge">✓ Verified Business</div>` : ""}

                <button class="view-btn" onclick="showDetails(${business.id})">
                    View Details
                </button>
            </div>
        </div>
    `;
  });
}


function filterBusinesses() {
  const searchBar = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const locationFilter = document.getElementById("locationFilter");

  const searchVal = searchBar ? searchBar.value.toLowerCase() .trim() : "";
  const categoryVal = categoryFilter ? categoryFilter.value : "all";
  const locationVal = locationFilter ? locationFilter.value : "all";

  const filtered = businesses.filter(business => {
    const businessName = business.name ? business.name.toLowerCase() : "";
    const businessAddress = business.address ? business.address.toLowerCase() : "";
    
    const matchesSearch = !searchVal || 
                          business.name.toLowerCase().includes(searchVal) || 
                          business.address.toLowerCase().includes(searchVal);
    const matchesCategory = categoryVal === "all" || categoryVal === "" || business.category === categoryVal;
    const matchesLocation = locationVal === "all" || locationVal === "" || business.location === locationVal;

    return matchesSearch && matchesCategory && matchesLocation;
  });

  displayBusinesses(filtered);
}

const searchBarEl = document.getElementById("searchInput");
if (searchBarEl) searchBarEl.addEventListener("input", filterBusinesses);

const categoryFilterEl = document.getElementById("categoryFilter");
if (categoryFilterEl) categoryFilterEl.addEventListener("change", filterBusinesses);

const locationFilterEl = document.getElementById("locationFilter");
if (locationFilterEl) locationFilterEl.addEventListener("change", filterBusinesses);


const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    
    
    const icon = themeToggle.querySelector("i");
    if (icon) {
      if (document.body.classList.contains("dark")) {

        icon.className = "fas fa-sun";
      } else {
        
        icon.className = "fas fa-moon";
      }
    }
  });
}


function showDetails(id) {
  
  const business = businesses.find(b => b.id === id);
  if (!business) {
    console.error("Business data could not be traced for ID:", id);
    return;
  }

  const modal = document.getElementById("businessModal");
  const modalBody = document.getElementById("modalBody");
  if (!modal || !modalBody) return;


  const detailedAddress = business.address || business.location || "No address listed";
  const verifiedBadge = business.verified 
    ? `<span style="background: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; display: inline-flex; align-items: center; gap: 4px;">✓ Verified</span>` 
    : `<span style="background: #f1f5f9; color: #64748b; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">Standard Listing</span>`;

 
 function showDetails(id) {
  // Traces and finds the exact business matching the clicked ID
  const business = businesses.find(b => b.id === id);
  if (!business) {
    console.error("Business data could not be traced for ID:", id);
    return;
  }

  const modal = document.getElementById("businessModal");
  const modalBody = document.getElementById("modalBody");
  if (!modal || !modalBody) return;

  // Trace variables or apply perfect fallbacks
  const detailedAddress = business.address || business.location || "No address listed";
  const verifiedBadge = business.verified 
    ? `<span style="background: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; display: inline-flex; align-items: center; gap: 4px;">✓ Verified</span>` 
    : `<span style="background: #f1f5f9; color: #64748b; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">Standard Listing</span>`;

  // Injecting the complete set of traced properties from your array
  modalBody.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 18px; font-family: 'Poppins', sans-serif; width: 100%; min-height: max-content; padding-bottom: 20px;">
      
      <div style="width: 100%; height: 220px; overflow: hidden; border-radius: 12px; position: relative;">
        <img src="${business.image}" alt="${business.name}" 
             style="width: 100%; height: 100%; object-fit: cover;" 
             onerror="this.src='https://placehold.co/600x400?text=BizConnect'">
      </div>
      
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px;">
        <h2 style="margin: 0; color: #1E3A8A; font-size: 1.5rem; font-weight: 700;">${business.name}</h2>
        ${verifiedBadge}
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 14px; color: #475569; font-size: 0.95rem;">
        
        <div style="display: flex; gap: 12px;">
          <span style="font-size: 1.2rem; width: 20px;">🏷️</span>
          <div>
            <strong style="color: #1e293b; display: block; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;">Category</strong>
            <span>${business.category || "General"}</span>
          </div>
        </div>

        <div style="display: flex; gap: 12px;">
          <span style="font-size: 1.2rem; width: 20px;">📍</span>
          <div>
            <strong style="color: #1e293b; display: block; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;">Full Address</strong>
            <span>${detailedAddress}</span>
          </div>
        </div>
        
        <div style="display: flex; gap: 12px;">
          <span style="font-size: 1.2rem; width: 20px;">📞</span>
          <div>
            <strong style="color: #1e293b; display: block; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;">Phone Contact</strong>
            <span style="letter-spacing: 0.5px;">${business.phone || "No contact number"}</span>
          </div>
        </div>
        
        <div style="display: flex; gap: 12px;">
          <span style="font-size: 1.2rem; width: 20px;">⏰</span>
          <div>
            <strong style="color: #1e293b; display: block; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;">Operating Hours</strong>
            <span>${business.hours || "Hours not specified"}</span>
          </div>
        </div>

        <div style="display: flex; gap: 12px; background: #f8fafc; padding: 10px; border-radius: 8px; border: 1px dashed #cbd5e1;">
          <span style="font-size: 1.2rem; width: 20px;">🗺️</span>
          <div>
            <strong style="color: #1e293b; display: block; font-size: 0.80rem; text-transform: uppercase;">Map Location Node</strong>
            <span style="font-size: 0.85rem; font-family: monospace; color: #64748b;">
              Latitude: ${business.lat}, Longitude: ${business.lng}
            </span>
          </div>
        </div>
        
      </div>
    </div>
  `;
  
  modal.style.display = "flex"; 
}
function closeModal() {
  const modal = document.getElementById("businessModal");
  if (modal) modal.style.display = "none";
}

window.addEventListener("click", (e) => {
  const modal = document.getElementById("businessModal");
  if (modal && e.target === modal) {
    modal.style.display = "none";
  }
});


const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}


const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


if (document.getElementById("map")) {
  const map = L.map("map", {
      center: [4.6200, 7.1200], 
      zoom: 10,                 
      minZoom: 9,
      maxZoom: 18
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  
  businesses.forEach(business => {
    const customPopupMarkup = `
      <div style="font-family: 'Poppins', sans-serif; padding: 5px; min-width: 160px;">
        <h4 style="margin: 0 0 4px 0; color: #1E3A8A; font-size: 1rem; font-weight: 600;">
          ${business.name}
        </h4>
        <p style="margin: 0 0 8px 0; font-size: 0.8rem; color: #666; line-height: 1.3;">
          📍 ${business.location}
        </p>
        <a href="#businesses" 
           onclick="showDetails(${business.id});" 
           style="color: #14B8A6; text-decoration: none; font-size: 0.8rem; font-weight: 600; display: inline-block;">
           View Details →
        </a>
      </div>
    `;

    L.marker([business.lat, business.lng])
      .addTo(map)
      .bindPopup(customPopupMarkup, {
          autoPan: true,
          autoPanPadding: L.point(50, 50)
      });
  });
}

displayBusinesses(businesses);
