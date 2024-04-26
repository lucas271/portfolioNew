export function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector<HTMLElement>('.navbar')?.offsetHeight;
      const offsetTop = section.offsetTop - (navbarHeight || 0);
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
}