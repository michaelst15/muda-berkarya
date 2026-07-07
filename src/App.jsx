import { useEffect, useMemo, useRef, useState } from 'react'

const imageUrl = (prompt, imageSize = 'landscape_4_3') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt,
  )}&image_size=${imageSize}`

const marqueeItems = [
  'Belajar Bersama',
  'Berkolaborasi',
  'Berkarya Tanpa Henti',
  'Dampak Positif',
  'Jati Diri',
  'Skill Baru',
  'Potensi Diri',
  'Versi Terbaik',
]

const stats = [
  { target: 2500, color: 'text-grape-800', label: 'Anggota Aktif' },
  { target: 150, color: 'text-bubblegum-600', label: 'Workshop' },
  { target: 50, color: 'text-sunny-600', label: 'Kolaborasi Proyek' },
]

const aboutFeatures = [
  {
    icon: 'lucide:book-open',
    title: 'Belajar Hal Baru',
    wrapperClass: 'bg-grape-50',
    iconClass: 'bg-grape-100 text-grape-600',
  },
  {
    icon: 'lucide:zap',
    title: 'Asah Skill',
    wrapperClass: 'bg-bubblegum-50',
    iconClass: 'bg-bubblegum-100 text-bubblegum-600',
  },
  {
    icon: 'lucide:compass',
    title: 'Temukan Jati Diri',
    wrapperClass: 'bg-sunny-50',
    iconClass: 'bg-sunny-100 text-sunny-600',
  },
  {
    icon: 'lucide:heart-handshake',
    title: 'Dampak Positif',
    wrapperClass: 'bg-mint-50',
    iconClass: 'bg-mint-100 text-mint-600',
  },
]

const programs = [
  {
    icon: 'lucide:palette',
    title: 'Creative Workshop',
    description:
      'Workshop desain, fotografi, videografi, dan seni kreatif lainnya bareng mentor berpengalaman.',
    schedule: 'Setiap Sabtu',
    iconWrapper: 'from-grape-400 to-grape-600 shadow-grape-500/20',
    delay: '0.05s',
  },
  {
    icon: 'lucide:code-2',
    title: 'Tech & Digital Skill',
    description:
      'Belajar coding, UI/UX design, digital marketing, dan skill digital yang relevan untuk masa depan.',
    schedule: 'Setiap Minggu',
    iconWrapper: 'from-bubblegum-400 to-bubblegum-600 shadow-bubblegum-500/20',
    delay: '0.1s',
  },
  {
    icon: 'lucide:mic',
    title: 'Public Speaking',
    description:
      'Latih kemampuan bicara di depan umum, presentasi, dan membangun kepercayaan diri.',
    schedule: '2x Sebulan',
    iconWrapper: 'from-sunny-400 to-sunny-500 shadow-sunny-500/20',
    delay: '0.15s',
  },
  {
    icon: 'lucide:users',
    title: 'Mentoring Circle',
    description:
      'Grup kecil yang dibimbing langsung oleh mentor untuk diskusi, sharing, dan evaluasi berkala.',
    schedule: 'Setiap Rabu',
    iconWrapper: 'from-ocean-400 to-ocean-600 shadow-ocean-500/20',
    delay: '0.2s',
  },
  {
    icon: 'lucide:rocket',
    title: 'Project Lab',
    description:
      'Wadah untuk mewujudkan proyek kolaboratif dari ide hingga eksekusi bersama tim lintas minat.',
    schedule: 'Rolling Basis',
    iconWrapper: 'from-mint-400 to-mint-500 shadow-mint-500/20',
    delay: '0.25s',
  },
  {
    icon: 'lucide:heart',
    title: 'Social Impact',
    description:
      'Program volunteering dan aksi sosial untuk menciptakan dampak nyata di masyarakat sekitar.',
    schedule: 'Bulanan',
    iconWrapper: 'from-rose-400 to-rose-600 shadow-rose-500/20',
    delay: '0.3s',
  },
]

const steps = [
  {
    number: 1,
    title: 'Daftar Online 📝',
    description:
      'Isi formulir pendaftaran singkat. Ceritakan sedikit tentang dirimu dan apa yang kamu mau pelajari.',
    color: 'from-grape-400 to-grape-600 shadow-grape-500/25',
    pulseClass: 'bg-grape-400/30',
    delay: '0.1s',
    pulseDelay: '0s',
  },
  {
    number: 2,
    title: 'Orientation 🤝',
    description:
      'Ikuti sesi perkenalan online untuk kenal komunitas, program, dan teman-teman baru yang seru!',
    color: 'from-bubblegum-400 to-bubblegum-600 shadow-bubblegum-500/25',
    pulseClass: 'bg-bubblegum-400/30',
    delay: '0.2s',
    pulseDelay: '0.3s',
  },
  {
    number: 3,
    title: 'Mulai Berkarya! 🚀',
    description:
      'Pilih program favoritmu, ikuti kelas, gabung proyek, dan rasakan pertumbuhan dirimu!',
    color: 'from-sunny-400 to-sunny-500 shadow-sunny-500/25',
    pulseClass: 'bg-sunny-400/30',
    delay: '0.3s',
    pulseDelay: '0.6s',
  },
]

const galleryImages = [
  {
    alt: 'Workshop',
    className: 'row-span-2',
    wrapperVariant: 'scale',
    delay: '0.05s',
    src: imageUrl(
      'dynamic youth workshop in Indonesia, creative classroom, young adults collaborating with notebooks and laptops, candid documentary photography, vibrant natural light',
      'portrait_4_3',
    ),
  },
  {
    alt: 'Kolaborasi',
    wrapperVariant: 'scale',
    delay: '0.1s',
    src: imageUrl(
      'small team collaboration session, Indonesian youth discussing ideas around a table, warm colorful community space, realistic photo',
      'landscape_4_3',
    ),
  },
  {
    alt: 'Presentasi',
    wrapperVariant: 'scale',
    delay: '0.15s',
    src: imageUrl(
      'young speaker presenting to peers, inspiring youth community event, projector screen, authentic candid moment, realistic photography',
      'landscape_4_3',
    ),
  },
  {
    alt: 'Teman baru',
    className: 'row-span-2',
    wrapperVariant: 'scale',
    delay: '0.2s',
    src: imageUrl(
      'group of Indonesian young adults smiling together at community event, friendship and teamwork, realistic portrait photography',
      'portrait_4_3',
    ),
  },
  {
    alt: 'Aksi sosial',
    wrapperVariant: 'scale',
    delay: '0.25s',
    src: imageUrl(
      'youth social impact activity in Indonesia, volunteers helping community outdoors, positive atmosphere, realistic photojournalism',
      'landscape_4_3',
    ),
  },
  {
    alt: 'Kegiatan seru',
    wrapperVariant: 'scale',
    delay: '0.3s',
    src: imageUrl(
      'fun youth community activity, energetic workshop games, colorful room, authentic smiles, realistic event photography',
      'landscape_4_3',
    ),
  },
]

const testimonials = [
  {
    name: 'Rina Safitri',
    role: 'Mahasiswa, 21 tahun',
    text: '"Dulu saya pemalu banget, nggak pernah mau presentasi. Setelah ikut Public Speaking di Muda Berkarya, sekarang saya bisa jadi MC acara kampus! Luar biasa perubahannya."',
    delay: '0.05s',
    src: imageUrl(
      'young Indonesian female student portrait, confident smile, natural light, realistic headshot photography',
      'square_hd',
    ),
  },
  {
    name: 'Budi Pratama',
    role: 'Fresh Graduate, 23 tahun',
    text: '"Dari Project Lab, saya dan tim berhasil bikin aplikasi untuk UMKM di daerah saya. Ini pengalaman pertama saya bikin produk digital yang beneran dipakai orang!"',
    delay: '0.1s',
    src: imageUrl(
      'young Indonesian male graduate portrait, smart casual, optimistic expression, realistic headshot photography',
      'square_hd',
    ),
  },
  {
    name: 'Dina Maharani',
    role: 'Content Creator, 20 tahun',
    text: '"Yang paling berharga itu komunitasnya. Teman-teman di sini supportif banget, nggak ada yang menghakimi. Saya menemukan jati diri saya sebagai seorang content creator!"',
    delay: '0.15s',
    src: imageUrl(
      'young Indonesian female content creator portrait, friendly expression, modern style, realistic headshot photography',
      'square_hd',
    ),
  },
]

const faqs = [
  {
    question: 'Apakah Muda Berkarya berbayar?',
    answer:
      'Semua program dasar Muda Berkaya 100% gratis! Kami ingin memastikan setiap anak muda punya akses yang sama untuk berkembang. Beberapa program advanced mungkin ada biaya simbolis untuk materinya aja kok.',
  },
  {
    question: 'Siapa aja yang bisa gabung?',
    answer:
      'Semua anak muda usia 16-30 tahun dari berbagai latar belakang bisa gabung! Nggak perlu punya skill khusus, yang penting niat untuk belajar dan berkembang.',
  },
  {
    question: 'Kegiatannya dilakukan dimana?',
    answer:
      'Sebagian besar kegiatan kami dilakukan secara online via Zoom dan platform kolaborasi digital. Tapi kami juga rutin adakan meetup offline di beberapa kota loh!',
  },
  {
    question: 'Apa yang akan saya dapatkan?',
    answer:
      'Skill baru, teman dari berbagai kota, pengalaman proyek nyata, sertifikat, jaringan profesional, dan yang paling penting—pemahaman lebih dalam tentang dirimu sendiri!',
  },
]

const footerPrograms = [
  'Creative Workshop',
  'Tech & Digital Skill',
  'Public Speaking',
  'Mentoring Circle',
  'Project Lab',
]

const footerInfos = ['Tentang Kami', 'Blog', 'Karir', 'Kebijakan Privasi', 'Kontak']

const socialIcons = ['lucide:instagram', 'lucide:twitter', 'lucide:youtube', 'lucide:linkedin']
const whatsappLink = 'https://wa.me/6281316087282'

function Icon({ icon, width = 18, className, ...props }) {
  return <iconify-icon icon={icon} width={width} class={className} {...props} />
}

function Reveal({ as: Tag = 'div', variant = 'up', className = '', style, children, ...props }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  const baseClass =
    variant === 'left'
      ? 'reveal-left'
      : variant === 'right'
        ? 'reveal-right'
        : variant === 'scale'
          ? 'reveal-scale'
          : 'reveal'

  return (
    <Tag
      ref={ref}
      className={`${baseClass} ${isVisible ? 'active' : ''} ${className}`.trim()}
      style={style}
      {...props}
    >
      {children}
    </Tag>
  )
}

function AnimatedCounter({ target, colorClass, label }) {
  const ref = useRef(null)
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    let timerId

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let current = 0
            const increment = target / 60

            timerId = window.setInterval(() => {
              current += increment

              if (current >= target) {
                setDisplayValue(`${target.toLocaleString()}+`)
                window.clearInterval(timerId)
              } else {
                setDisplayValue(Math.floor(current).toLocaleString())
              }
            }, 25)

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      if (timerId) {
        window.clearInterval(timerId)
      }
    }
  }, [target])

  return (
    <div className="text-center" ref={ref}>
      <div className={`counter text-2xl font-black sm:text-3xl ${colorClass}`}>{displayValue}</div>
      <div className="mt-1 text-xs font-medium text-grape-500">{label}</div>
    </div>
  )
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastVisible, setToastVisible] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [navElevated, setNavElevated] = useState(false)
  const [confettiPieces, setConfettiPieces] = useState([])
  const [bouncingJoinButton, setBouncingJoinButton] = useState('')
  const [bouncingWhatsapp, setBouncingWhatsapp] = useState(false)
  const toastTimerRef = useRef(null)
  const confettiTimerRef = useRef(null)
  const joinIconTimerRef = useRef(null)
  const whatsappBounceTimerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setNavElevated(window.scrollY > 100)
      setShowBackToTop(window.scrollY > 600)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current)
      }
      if (confettiTimerRef.current) {
        window.clearTimeout(confettiTimerRef.current)
      }
      if (joinIconTimerRef.current) {
        window.clearTimeout(joinIconTimerRef.current)
      }
      if (whatsappBounceTimerRef.current) {
        window.clearTimeout(whatsappBounceTimerRef.current)
      }
    }
  }, [])

  const marqueeLoop = useMemo(() => [...marqueeItems, ...marqueeItems], [])

  const toggleMobile = () => {
    setMobileOpen((current) => !current)
  }

  const showToast = (message) => {
    setToastMessage(message)
    setToastVisible(true)

    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current)
    }

    toastTimerRef.current = window.setTimeout(() => {
      setToastVisible(false)
    }, 3500)
  }

  const triggerConfetti = () => {
    const colors = ['#a855f7', '#ec4899', '#fbbf24', '#34d399', '#60a5fa', '#f472b6', '#f97316']
    const shapes = ['circle', 'square']

    const pieces = Array.from({ length: 50 }, (_, index) => {
      const color = colors[Math.floor(Math.random() * colors.length)]
      const shape = shapes[Math.floor(Math.random() * shapes.length)]

      return {
        id: `${Date.now()}-${index}`,
        left: `${Math.random() * 100}vw`,
        backgroundColor: color,
        borderRadius: shape === 'circle' ? '50%' : '2px',
        width: `${Math.random() * 8 + 5}px`,
        height: `${Math.random() * 8 + 5}px`,
        animation: `confetti-fall ${Math.random() * 2 + 2}s linear ${Math.random() * 0.5}s forwards`,
      }
    })

    setConfettiPieces(pieces)

    if (confettiTimerRef.current) {
      window.clearTimeout(confettiTimerRef.current)
    }

    confettiTimerRef.current = window.setTimeout(() => {
      setConfettiPieces([])
    }, 4000)
  }

  const scrollToSection = (selector, closeMenu = false) => (event) => {
    if (!selector.startsWith('#')) return

    const target = document.querySelector(selector)
    if (!target) return

    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })

    if (closeMenu) {
      setMobileOpen(false)
    }
  }

  const handleJoinClick = (message, withConfetti = false, closeMenu = false, buttonKey = '') => {
    setBouncingWhatsapp(true)

    if (whatsappBounceTimerRef.current) {
      window.clearTimeout(whatsappBounceTimerRef.current)
    }

    whatsappBounceTimerRef.current = window.setTimeout(() => {
      setBouncingWhatsapp(false)
    }, 700)

    if (buttonKey) {
      setBouncingJoinButton(buttonKey)

      if (joinIconTimerRef.current) {
        window.clearTimeout(joinIconTimerRef.current)
      }

      joinIconTimerRef.current = window.setTimeout(() => {
        setBouncingJoinButton('')
      }, 700)
    }

    if (withConfetti) {
      triggerConfetti()
    }

    showToast(message)

    if (closeMenu) {
      setMobileOpen(false)
    }
  }

  const handleFaqToggle = (index) => {
    setOpenFaqIndex((current) => (current === index ? null : index))
  }

  return (
    <>
      <nav
        className={`nav-glass fixed left-0 top-0 z-50 w-full border-b border-grape-200/50 ${
          navElevated ? 'shadow-lg shadow-grape-500/5' : ''
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#" className="group flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-grape-500 to-bubblegum-500 text-sm font-bold text-white transition-transform group-hover:scale-110">
              MB
            </div>
            <span className="text-lg font-bold text-grape-900">
              Muda<span className="text-bubblegum-500">Berkarya</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#tentang"
              onClick={scrollToSection('#tentang')}
              className="text-sm font-medium text-grape-700 transition-colors hover:text-grape-500"
            >
              Tentang
            </a>
            <a
              href="#program"
              onClick={scrollToSection('#program')}
              className="text-sm font-medium text-grape-700 transition-colors hover:text-grape-500"
            >
              Program
            </a>
            <a
              href="#langkah"
              onClick={scrollToSection('#langkah')}
              className="text-sm font-medium text-grape-700 transition-colors hover:text-grape-500"
            >
              Cara Gabung
            </a>
            <a
              href="#komunitas"
              onClick={scrollToSection('#komunitas')}
              className="text-sm font-medium text-grape-700 transition-colors hover:text-grape-500"
            >
              Komunitas
            </a>
            <button
              type="button"
              onClick={() =>
                handleJoinClick('🎉 Sip! Kami akan menghubungimu segera!', false, false, 'nav')
              }
              className="btn-fun flex items-center gap-2 rounded-full bg-gradient-to-r from-grape-500 to-bubblegum-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-grape-500/25 transition-all hover:scale-105 hover:shadow-grape-500/40"
            >
              Gabung Sekarang
              <Icon
                icon="lucide:arrow-right"
                width={16}
                className={bouncingJoinButton === 'nav' ? 'icon-click-bounce' : ''}
              />
            </button>
          </div>

          <button
            type="button"
            onClick={toggleMobile}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-grape-700 transition-all ${
                mobileOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-grape-700 transition-all ${mobileOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-0.5 w-6 bg-grape-700 transition-all ${
                mobileOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-white p-8 shadow-2xl ${
          mobileOpen ? 'open' : ''
        }`}
      >
        <button
          type="button"
          onClick={toggleMobile}
          className="mb-8 flex h-10 w-10 self-end items-center justify-center rounded-full transition-colors hover:bg-grape-100"
          aria-label="Tutup menu"
        >
          <Icon icon="lucide:x" width={22} className="text-grape-700" />
        </button>
        <div className="flex flex-col gap-4">
          {[
            ['#tentang', 'Tentang'],
            ['#program', 'Program'],
            ['#langkah', 'Cara Gabung'],
            ['#komunitas', 'Komunitas'],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={scrollToSection(href, true)}
              className="border-b border-grape-100 py-2 text-lg font-medium text-grape-800 transition-colors hover:text-grape-500"
            >
              {label}
            </a>
          ))}
          <button
            type="button"
            onClick={() =>
              handleJoinClick('🎉 Sip! Kami akan menghubungimu segera!', false, true, 'mobile')
            }
            className="btn-fun mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-grape-500 to-bubblegum-500 px-5 py-3 text-sm font-semibold text-white shadow-lg"
          >
            Gabung Sekarang
            <Icon
              icon="lucide:arrow-right"
              width={16}
              className={bouncingJoinButton === 'mobile' ? 'icon-click-bounce' : ''}
            />
          </button>
        </div>
      </div>

      <button
        type="button"
        aria-label="Overlay menu mobile"
        onClick={toggleMobile}
        className={`fixed inset-0 z-40 bg-black/30 ${mobileOpen ? 'block' : 'hidden'}`}
      />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        <div className="animate-blob absolute left-10 top-20 h-72 w-72 rounded-full bg-grape-300/30 blur-3xl" />
        <div
          className="animate-blob absolute bottom-20 right-10 h-96 w-96 rounded-full bg-bubblegum-300/20 blur-3xl"
          style={{ animationDelay: '-3s' }}
        />
        <div
          className="animate-blob absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sunny-200/20 blur-3xl"
          style={{ animationDelay: '-5s' }}
        />

        <div className="animate-float absolute left-[15%] top-32 text-5xl">🚀</div>
        <div
          className="animate-float-reverse absolute right-[12%] top-48 text-4xl"
          style={{ animationDelay: '-1s' }}
        >
          💡
        </div>
        <div
          className="animate-float-slow absolute bottom-32 left-[20%] text-4xl"
          style={{ animationDelay: '-2s' }}
        >
          🎯
        </div>
        <div
          className="animate-float absolute bottom-48 right-[18%] text-5xl"
          style={{ animationDelay: '-3s' }}
        >
          ⚡
        </div>
        <div
          className="animate-float-reverse absolute left-[5%] top-[40%] text-3xl"
          style={{ animationDelay: '-4s' }}
        >
          🌟
        </div>
        <div
          className="animate-float-slow absolute right-[5%] top-[30%] text-3xl"
          style={{ animationDelay: '-1.5s' }}
        >
          🔥
        </div>

        <div className="animate-spin-slow absolute right-[30%] top-40 h-16 w-16 rounded-full border-2 border-dashed border-grape-300/40" />
        <div
          className="animate-spin-slow absolute bottom-40 left-[25%] h-12 w-12 rounded-full border-2 border-dashed border-bubblegum-300/40"
          style={{ animationDirection: 'reverse' }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="mb-6 inline-block" style={{ animation: 'slide-up 0.8s ease forwards' }}>
            <span className="sticker bg-gradient-to-r from-sunny-200 to-sunny-300 text-sunny-700 shadow-md shadow-sunny-200/50">
              <Icon icon="lucide:sparkles" width={14} />
              Ruang Kolaborasi Anak Muda
            </span>
          </div>

          <h1
            className="mb-6 text-4xl font-black leading-[1.05] tracking-tight text-grape-900 sm:text-5xl md:text-7xl"
            style={{ animation: 'slide-up 0.8s 0.15s ease both' }}
          >
            Muda Berkarya,
            <br />
            <span className="text-shimmer">Temukan Versi</span>
            <br />
            Terbaikmu! ✨
          </h1>

          <p
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-grape-600 sm:text-lg"
            style={{ animation: 'slide-up 0.8s 0.3s ease both' }}
          >
            Belajar hal baru, asah skill, temukan jati diri, dan ciptakan dampak positif bersama
            komunitas anak muda yang kreatif dan bersemangat!
          </p>

          <div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animation: 'slide-up 0.8s 0.45s ease both' }}
          >
            <button
              type="button"
              onClick={() =>
                handleJoinClick('🌟 Selamat datang di Muda Berkarya!', true, false)
              }
              className="btn-fun animate-gradient flex items-center gap-2 rounded-full bg-gradient-to-r from-grape-500 via-bubblegum-500 to-sunny-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-grape-500/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-grape-500/40"
            >
              Mulai Perjalananmu
              <Icon icon="lucide:arrow-right" width={18} />
            </button>
            <a
              href="#tentang"
              onClick={scrollToSection('#tentang')}
              className="group flex items-center gap-2 rounded-full border-2 border-grape-200 px-6 py-4 font-medium text-grape-700 transition-all hover:border-grape-400 hover:bg-grape-50"
            >
              Pelajari Lebih Lanjut
              <Icon
                icon="lucide:chevron-down"
                width={18}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
          </div>

          <div
            className="mt-14 flex items-center justify-center gap-8 sm:gap-12"
            style={{ animation: 'slide-up 0.8s 0.6s ease both' }}
          >
            {stats.map((stat, index) => (
              <FragmentWithDivider key={stat.label} showDivider={index < stats.length - 1}>
                <AnimatedCounter target={stat.target} colorClass={stat.color} label={stat.label} />
              </FragmentWithDivider>
            ))}
          </div>
        </div>

        <div className="animate-bounce-soft absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="text-xs font-medium text-grape-400">Scroll</span>
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-grape-300 pt-2">
            <div className="h-3 w-1.5 animate-bounce rounded-full bg-grape-400" />
          </div>
        </div>
      </section>

      <div className="animate-gradient overflow-hidden bg-gradient-to-r from-grape-500 via-bubblegum-500 to-sunny-500 py-4">
        <div className="flex whitespace-nowrap animate-marquee">
          {marqueeLoop.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="mx-8 flex items-center gap-2 text-sm font-semibold text-white/90"
            >
              ✦ {item}
            </span>
          ))}
        </div>
      </div>

      <section id="tentang" className="relative py-24 sm:py-32">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-bubblegum-200/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <Reveal variant="left" className="relative">
              <div className="relative">
                <img
                  src={imageUrl(
                    'Indonesian youth community gathering, collaborative creative space, diverse young adults learning together, modern bright environment, realistic photography',
                    'portrait_4_3',
                  )}
                  alt="Anak muda berkarya"
                  className="h-[400px] w-full rounded-3xl object-cover shadow-2xl shadow-grape-500/10 sm:h-[500px]"
                />
                <div className="animate-float absolute -bottom-6 -right-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-mint-400 to-mint-500 text-white">
                    <Icon icon="lucide:trending-up" width={22} />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-grape-500">Pertumbuhan</div>
                    <div className="text-lg font-bold text-grape-900">+320% 🔥</div>
                  </div>
                </div>
                <div
                  className="sticker absolute -left-4 -top-4 bg-bubblegum-500 text-white shadow-lg shadow-bubblegum-500/30"
                  style={{ transform: 'rotate(-6deg)' }}
                >
                  Since 2023
                </div>
              </div>
            </Reveal>

            <Reveal variant="right">
              <span className="sticker mb-4 inline-flex bg-grape-100 text-grape-700">
                <Icon icon="lucide:heart" width={14} />
                Tentang Kami
              </span>
              <h2 className="mt-3 mb-6 text-3xl font-bold leading-tight text-grape-900 sm:text-4xl">
                Apa Sih <span className="text-bubblegum-500">Muda Berkarya</span> Itu?
              </h2>
              <p className="mb-6 leading-relaxed text-grape-600">
                Muda Berkarya adalah ruang kolaborasi anak muda untuk mengembangkan potensi diri.
                Kami percaya bahwa setiap anak muda punya kekuatan unik yang menunggu untuk diasah
                dan diaplikasikan.
              </p>
              <p className="mb-8 leading-relaxed text-grape-600">
                Di sini, kamu nggak cuma belajar, tapi juga berlatih, berkolaborasi, dan
                merealisasikan ide-ide menjadi proyek nyata yang berdampak positif. Yuk, tumbuh
                bersama menjadi versi terbaik dari dirimu!
              </p>
              <div className="grid grid-cols-2 gap-4">
                {aboutFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className={`flex items-center gap-3 rounded-xl p-3 ${feature.wrapperClass}`}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${feature.iconClass}`}
                    >
                      <Icon icon={feature.icon} width={18} />
                    </div>
                    <span className="text-sm font-semibold text-grape-800">{feature.title}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="program" className="relative bg-gradient-to-b from-grape-50 to-white py-24 sm:py-32">
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-sunny-200/15 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <span className="sticker mb-4 inline-flex bg-bubblegum-100 text-bubblegum-700">
              <Icon icon="lucide:layers" width={14} />
              Program Kami
            </span>
            <h2 className="mt-3 mb-4 text-3xl font-bold leading-tight text-grape-900 sm:text-4xl">
              Banyak Jalan untuk <span className="text-bubblegum-500">Berkembang</span> 🌱
            </h2>
            <p className="text-grape-600">
              Pilih jalur yang paling sesuai dengan minat dan kebutuhanmu. Semua program dirancang
              agar seru dan bermanfaat!
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <Reveal
                key={program.title}
                className="card-glow hover-lift group rounded-2xl border border-grape-100 bg-white p-7"
                style={{ transitionDelay: program.delay }}
              >
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform group-hover:scale-110 ${program.iconWrapper}`}
                >
                  <Icon icon={program.icon} width={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-grape-900">{program.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-grape-500">{program.description}</p>
                <div className="flex items-center gap-2 text-xs font-medium text-grape-400">
                  <Icon icon="lucide:calendar" width={14} />
                  {program.schedule}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="langkah" className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-grape-200/20 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <span className="sticker mb-4 inline-flex bg-sunny-100 text-sunny-700">
              <Icon icon="lucide:footprints" width={14} />
              Cara Gabung
            </span>
            <h2 className="mt-3 mb-4 text-3xl font-bold leading-tight text-grape-900 sm:text-4xl">
              Gampang Kok! Cuma <span className="text-sunny-500">3 Langkah</span> 🎯
            </h2>
            <p className="text-grape-600">
              Proses gabungnya super simpel. Kamu tinggal ikuti langkah-langkah berikut dan
              langsung mulai perjalananmu!
            </p>
          </Reveal>

          <div className="relative">
            <div className="absolute left-[16%] right-[16%] top-24 hidden h-0.5 bg-gradient-to-r from-grape-300 via-bubblegum-300 to-sunny-300 md:block" />

            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <Reveal
                  key={step.number}
                  className="text-center"
                  style={{ transitionDelay: step.delay }}
                >
                  <div className="relative mb-6 inline-block">
                    <div
                      className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br text-2xl font-black text-white shadow-xl ${step.color}`}
                    >
                      {step.number}
                    </div>
                    <div
                      className={`absolute inset-0 h-20 w-20 rounded-full animate-ping ${step.pulseClass}`}
                      style={{ animationDelay: step.pulseDelay }}
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-grape-900">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-grape-500">{step.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-grape-900 py-24 sm:py-32">
        <div className="absolute left-0 top-0 h-full w-full opacity-10">
          <div className="animate-float absolute left-10 top-10 text-8xl">🌟</div>
          <div className="animate-float-reverse absolute bottom-10 right-10 text-8xl">💫</div>
          <div className="animate-spin-slow absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="sticker mb-4 inline-flex bg-white/10 text-grape-200 backdrop-blur-sm">
              <Icon icon="lucide:image" width={14} />
              Momen Kita
            </span>
            <h2 className="mt-3 mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Kenangan yang <span className="text-sunny-400">Abadi</span> 📸
            </h2>
            <p className="text-grape-300">
              Momen-momen seru dari workshop, kolaborasi, dan kebersamaan di Muda Berkarya.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {galleryImages.map((image) => (
              <Reveal
                key={image.alt}
                variant={image.wrapperVariant}
                className={`group overflow-hidden rounded-2xl ${image.className || ''}`}
                style={{ transitionDelay: image.delay }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="komunitas" className="relative py-24 sm:py-32">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-bubblegum-200/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-grape-200/20 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <span className="sticker mb-4 inline-flex bg-mint-100 text-mint-700">
              <Icon icon="lucide:message-circle" width={14} />
              Suara Mereka
            </span>
            <h2 className="mt-3 mb-4 text-3xl font-bold leading-tight text-grape-900 sm:text-4xl">
              Apa Kata <span className="text-mint-500">Komunitas</span> Kita? 💬
            </h2>
            <p className="text-grape-600">
              Cerita nyata dari anak-anak muda yang sudah merasakan dampak Muda Berkarya.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Reveal
                key={testimonial.name}
                className="card-glow hover-lift rounded-2xl border border-grape-100 bg-white p-7"
                style={{ transitionDelay: testimonial.delay }}
              >
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon
                      key={`${testimonial.name}-star-${index}`}
                      icon="lucide:star"
                      width={16}
                      className="text-sunny-400"
                    />
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-grape-600">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-semibold text-grape-900">{testimonial.name}</div>
                    <div className="text-xs text-grape-400">{testimonial.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="animate-gradient absolute inset-0 bg-gradient-to-br from-grape-500 via-bubblegum-500 to-sunny-500" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="animate-float absolute left-10 top-10 text-7xl opacity-30">🌈</div>
        <div className="animate-float-reverse absolute bottom-10 right-10 text-7xl opacity-30">
          🎉
        </div>
        <div className="animate-float-slow absolute left-[10%] top-1/2 text-5xl opacity-20">✨</div>
        <div className="animate-float absolute right-[15%] top-[20%] text-5xl opacity-20">💫</div>
        <div className="animate-spin-slow absolute bottom-[20%] left-[20%] h-32 w-32 rounded-full border-2 border-white/20" />
        <div
          className="animate-spin-slow absolute right-[8%] top-[30%] h-20 w-20 rounded-full border-2 border-white/15"
          style={{ animationDirection: 'reverse' }}
        />

        <Reveal className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-mint-400 animate-pulse" />
            <span className="text-sm font-medium text-white/90">Pendaftaran Dibuka!</span>
          </div>
          <h2 className="mb-6 text-3xl font-black leading-tight text-white sm:text-5xl">
            Yuk, Tumbuh Bersama
            <br />
            Jadi Versi Terbaikmu! 🌟
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/80">
            Jangan tunggu lagi. Mulai perjalananmu sekarang dan temukan potensi luar biasa yang
            ada di dalam dirimu.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() =>
                handleJoinClick(
                  '🎊 Yeay! Selamat bergabung dengan Muda Berkarya!',
                  true,
                  false,
                  'cta',
                )
              }
              className="btn-fun flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-grape-700 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              Gabung Sekarang - Gratis!
              <Icon
                icon="lucide:arrow-right"
                width={18}
                className={bouncingJoinButton === 'cta' ? 'icon-click-bounce' : ''}
              />
            </button>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-4 font-medium text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              <Icon icon="lucide:instagram" width={18} />
              Follow Instagram
            </a>
          </div>
        </Reveal>
      </section>

      <section className="relative bg-grape-50 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="mb-14 text-center">
            <span className="sticker mb-4 inline-flex bg-white text-grape-700 shadow-sm">
              <Icon icon="lucide:help-circle" width={14} />
              FAQ
            </span>
            <h2 className="mt-3 mb-4 text-3xl font-bold leading-tight text-grape-900 sm:text-4xl">
              Pertanyaan yang <span className="text-bubblegum-500">Sering Ditanyain</span> 🤔
            </h2>
          </Reveal>

          <Reveal className="space-y-3" style={{ transitionDelay: '0.1s' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index

              return (
                <div
                  key={faq.question}
                  className="faq-item overflow-hidden rounded-2xl border border-grape-100 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => handleFaqToggle(index)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <span className="pr-4 text-sm font-semibold text-grape-900">
                      {faq.question}
                    </span>
                    <Icon
                      icon="lucide:chevron-down"
                      width={18}
                      className="shrink-0 text-grape-400 transition-transform duration-300"
                      style={isOpen ? { transform: 'rotate(180deg)' } : undefined}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ maxHeight: isOpen ? '240px' : '0px' }}
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-grape-500">{faq.answer}</p>
                  </div>
                </div>
              )
            })}
          </Reveal>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-grape-900 pb-8 pt-16 text-white">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-grape-500 via-bubblegum-500 to-sunny-500" />
        <div className="absolute right-10 top-20 h-64 w-64 rounded-full bg-grape-800/50 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-grape-400 to-bubblegum-500 text-sm font-bold text-white">
                  MB
                </div>
                <span className="text-lg font-bold">
                  Muda<span className="text-bubblegum-400">Berkarya</span>
                </span>
              </div>
              <p className="mb-6 max-w-sm text-sm leading-relaxed text-grape-400">
                Ruang kolaborasi anak muda untuk mengembangkan potensi diri, belajar hal baru, dan
                ciptakan dampak positif.
              </p>
              <div className="flex items-center gap-3">
                {socialIcons.map((icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-grape-300 transition-all hover:bg-white/20 hover:text-white"
                  >
                    <Icon icon={icon} width={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-grape-200">Program</h4>
              <ul className="space-y-2.5">
                {footerPrograms.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-grape-400 transition-colors hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-grape-200">Informasi</h4>
              <ul className="space-y-2.5">
                {footerInfos.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-grape-400 transition-colors hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-xs text-grape-500">
              © 2025 Muda Berkarya. Dibuat dengan 💜 untuk anak muda Indonesia.
            </p>
            <p className="text-xs text-grape-600">#MudaBerkarya #VersiTerbaik</p>
          </div>
        </div>
      </footer>

      <div className={`toast ${toastVisible ? 'show' : ''}`}>
        <div className="flex max-w-sm items-center gap-3 rounded-2xl bg-grape-900 px-6 py-4 text-sm font-medium text-white shadow-2xl">
          <span>{toastMessage}</span>
        </div>
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] ${
          bouncingWhatsapp ? 'whatsapp-click-bounce' : ''
        }`}
        aria-label="Chat WhatsApp"
      >
        <Icon icon="mdi:whatsapp" width={28} />
      </a>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-24 right-7 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-grape-500 to-bubblegum-500 text-white shadow-xl shadow-grape-500/30 transition-all duration-300 hover:scale-110 ${
          showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
        aria-label="Back to top"
      >
        <Icon icon="lucide:arrow-up" width={20} />
      </button>

      {confettiPieces.map((piece) => (
        <div key={piece.id} className="confetti-piece" style={piece} />
      ))}
    </>
  )
}

function FragmentWithDivider({ children, showDivider }) {
  return (
    <>
      {children}
      {showDivider ? <div className="h-10 w-px bg-grape-200" /> : null}
    </>
  )
}

export default App
