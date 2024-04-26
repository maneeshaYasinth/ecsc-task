function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
  sidebar.classList.add('show-sidebar'); // Add class for transition effect
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('show-sidebar'); // Remove class for transition effect
  setTimeout(() => { // Hide sidebar after transition completes
    sidebar.style.display = 'none';
  }, 300); // Adjust transition duration if needed
}
