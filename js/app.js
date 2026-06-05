/* ==========================
   BUSINESS RENDERING
========================== */

const businessContainer = document.getElementById("businessContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const locationFilter = document.getElementById("locationFilter");

function displayBusinesses(data) {

  businessContainer.innerHTML = "";

  if (data.length === 0) {
    businessContainer.innerHTML = `
            <p style="text-align:center;grid-column:1/-1;">
                No businesses found.
            </p>
        `;
    return;
  }

  data.forEach(business => {

    businessContainer.innerHTML += `

        <div class="business-card">

            <img
                src="${business.image}"
                alt="${business.name}"
                onerror="this.src='https://placehold.co/600x400?text=BizConnect'"
            >

            <div class="business-info">

                <h3>${business.name}</h3>

                <p>
                    <strong>Category:</strong>
                    ${business.category}
                </p>

                <p>
                    <strong>Location:</strong>
                    ${business.location}
                </p>

                <p>
                    <strong>Phone:</strong>
                    ${business.phone}
                </p>

                ${business.verified
        ? `
        <div class="verified-badge">
            ✓ Verified Business
        </div>
        `
        : ""
      }

                <button
                    class="view-btn"
                    onclick="showDetails(${business.id})"
                >
                    View Details
                </button>

            </div>

        </div>

        `;
  });

}

displayBusinesses(businesses);

/* ==========================
   MODAL POPUP
========================== */

const modal = document.getElementById("businessModal");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close-btn");

function showDetails(id) {

  const business = businesses.find(
    item => item.id === id
  );

  modalBody.innerHTML = `

        <h2>${business.name}</h2>

        <br>

        <img
            src="${business.image}"
            alt="${business.name}"
            style="
            width:100%;
            max-height:300px;
            object-fit:cover;
            border-radius:10px;
            margin-bottom:15px;"
        >

        <p>
            <strong>Category:</strong>
            ${business.category}
        </p>

        <br>

        <p>
            <strong>Location:</strong>
            ${business.location}
        </p>

        <br>

        <p>
            <strong>Address:</strong>
            ${business.address}
        </p>

        <br>

        <p>
            <strong>Phone:</strong>
            ${business.phone}
        </p>

        <br>

        <p>
            <strong>Hours:</strong>
            ${business.hours}
        </p>

    `;

  modal.style.display = "block";
}

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {

  if (e.target === modal) {
    modal.style.display = "none";
  }

};

/* ==========================
   SEARCH
========================== */

searchInput.addEventListener("input", filterBusinesses);

categoryFilter.addEventListener(
  "change",
  filterBusinesses
);

locationFilter.addEventListener(
  "change",
  filterBusinesses
);

function filterBusinesses() {

  const searchTerm =
    searchInput.value.toLowerCase();

  const category =
    categoryFilter.value;

  const location =
    locationFilter.value;

  const filtered = businesses.filter(
    business => {

      const matchesSearch =
        business.name
          .toLowerCase()
          .includes(searchTerm);

      const matchesCategory =
        category === "all" ||
        business.category === category;

      const matchesLocation =
        location === "all" ||
        business.location === location;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLocation
      );

    }
  );

  displayBusinesses(filtered);
}

/* ==========================
   HAMBURGER MENU
========================== */

const menuBtn =
  document.getElementById("menuBtn");

const navLinks =
  document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

/* ==========================
   DARK MODE
========================== */

const themeToggle =
  document.getElementById("themeToggle");

if (
  localStorage.getItem("theme")
  === "dark"
) {

  document.body.classList.add("dark");

  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  const isDark =
    document.body.classList.contains(
      "dark"
    );

  themeToggle.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';

  localStorage.setItem(
    "theme",
    isDark ? "dark" : "light"
  );

});

/* ==========================
   BACK TO TOP
========================== */

const backToTop =
  document.getElementById("backToTop");

window.addEventListener(
  "scroll",
  () => {

    if (
      window.scrollY > 300
    ) {

      backToTop.style.display =
        "block";

    } else {

      backToTop.style.display =
        "none";
    }

  }
);

backToTop.addEventListener(
  "click",
  () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);

/* ==========================
   LEAFLET MAP
========================== */

const map = L.map("map").setView(
  [4.75, 7.10],
  9
);

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      "&copy; OpenStreetMap contributors"
  }
).addTo(map);

businesses.forEach(business => {

  L.marker([
    business.lat,
    business.lng
  ])
    .addTo(map)
    .bindPopup(`
        <strong>${business.name}</strong>
        <br>
        ${business.location}
    `);

});

/* ==========================
   GOOGLE FORM PLACEHOLDER
========================== */

document
  .getElementById("googleFormLink")
  .setAttribute(
    "href",
    "#"
  );

/* ==========================
   END
========================== */
