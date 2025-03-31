export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId)
  if (section) {
    // ヘッダーの高さを考慮したオフセット（ヘッダーの高さは64px）
    const offset = 80
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - offset

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    })
  }
}

