
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const stickyPoint = 100; // Scroll threshold for sticky header

// Toggle sidebar on menu button click
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  // Close nav toggler after scrolling to destination
  document.addEventListener('scroll', closeNavToggler);
});

// Function to close nav toggler
function closeNavToggler() {
  sidebar.classList.remove('active');
  // Remove event listener to prevent multiple closures
  document.removeEventListener('scroll', closeNavToggler);
}

// Sample PDF data with direct download links
const pdfData = {
  class10: {
    math: [
      { title: "Algebra Basics.pdf", link: "https://drive.google.com/uc?export=download&id=1R16R42V7_92EAxS4iwR3tey63gYtHPOY" },
      { title: "Geometry Essentials.pdf", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_2" }
    ],
    science: [
      { title: "Physics Fundamentals.pdf", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_3" },
      { title: "Chemistry Basics.pdf", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_4" }
    ]
  },
  class12: {
    math: [
      { title: "Calculus Intro.pdf", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_5" },
      { title: "Advanced Geometry.pdf", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_6" }
    ],
    science: [
      { title: "Biology Overview.pdf", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_7" },
      { title: "Physics Advanced.pdf", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_8" }
    ]
  }
};

// Update PDF suggestions based on class and subject selection
function updatePdfSuggestions() {
  const classSelect = document.getElementById("classSelect").value;
  const subjectSelect = document.getElementById("subjectSelect").value;
  const pdfSuggestions = document.getElementById("pdfSuggestions");

  pdfSuggestions.innerHTML = ""; // Clear current suggestions

  if (classSelect && subjectSelect && pdfData[classSelect] && pdfData[classSelect][subjectSelect]) {
    const selectedPdfs = pdfData[classSelect][subjectSelect];
    selectedPdfs.forEach((pdf) => {
      const pdfItem = document.createElement("div");
      pdfItem.classList.add("pdf-item");

      // Create link for each PDF
      const pdfLink = document.createElement("a");
      pdfLink.href = pdf.link;
      pdfLink.textContent = pdf.title;
      pdfLink.target = "_blank"; // Opens in a new tab
      pdfLink.classList.add("pdf-link");

      pdfItem.appendChild(pdfLink);
      pdfSuggestions.appendChild(pdfItem);
    });
  } else {
    pdfSuggestions.innerHTML = "<p>Select a class and subject to view available PDFs.</p>";
  }
}
const Pdfs = document.getElementById('pdfs');
const hub = document.getElementById('hub');
function downloadpdfs(){
   hub.style.display="none";
   pdfs.style.display="block";
}
function entertainmenthub(){
  pdfs.style.display="none";
  hub.style.display="block";
}