import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('[data-aos]').forEach(el => {
      const delay = el.getAttribute('data-aos-delay') || '0'
      el.style.setProperty('--aos-delay', `${delay}ms`)
      observer.observe(el)
    })
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}
