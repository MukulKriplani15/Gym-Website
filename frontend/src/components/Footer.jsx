import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
        <p>&copy; {currentYear} Rebound Fitness. All Rights Reserved.</p>
        <p>Developed By <strong>Mukul</strong></p>
    </footer>
  )
}

export default Footer
