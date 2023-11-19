function calculateAge(birthDate) {
    const currentDate = new Date();
    const diff = currentDate - new Date(birthDate);
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  
  const ageSpan = document.getElementById('age');
  const birthDate = new Date('2005-02-28');
  ageSpan.textContent = calculateAge(birthDate);
  