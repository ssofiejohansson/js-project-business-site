function hamburgerMenu() {
  const navLinks = document.getElementById('navLinks')
  const menuIcon = document.getElementById('menuIcon')

  // Toggle between two icons
  navLinks.classList.toggle('active')

  if (navLinks.classList.contains('active')) {
    menuIcon.classList.remove('fa-bars')
    menuIcon.classList.add('fa-times')
  } else {
    menuIcon.classList.remove('fa-times')
    menuIcon.classList.add('fa-bars')
  }
}