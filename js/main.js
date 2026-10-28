const productos = [
    { id: 1, nombre: "Base Bardot con Niacinamida", precio: 8.00, categoria: "maquillaje", desc: "Cobertura alta, acabado natural. 4 tonos.", img: "assets/img/pages/page-27.jpg" },
    { id: 2, nombre: "Base Líquida Raquel Ultimate Detox", precio: 7.50, categoria: "maquillaje", desc: "Base mate, cobertura media a alta, efecto tensor.", img: "assets/img/pages/page-42.jpg" },
    { id: 3, nombre: "Base Líquida Vogue Resist 30H", precio: 7.50, categoria: "maquillaje", desc: "Duración 24-30h, cobertura mate, waterproof.", img: "assets/img/pages/page-19.jpg" },
    { id: 4, nombre: "Polvo Compacto All About Matt! - ESSENCE", precio: 7.00, categoria: "maquillaje", desc: "Polvo transparente fino, acabado mate natural.", img: "assets/img/pages/page-26.jpg" },
    { id: 5, nombre: "Corrector de Ojeras Bloomshell", precio: 12.00, categoria: "maquillaje", desc: "Cubre ojeras, fórmula ligera, presentación jumbo.", img: "assets/img/pages/page-06.jpg" },
    { id: 6, nombre: "Corrector SHEGLAM Like Magic", precio: 4.00, categoria: "maquillaje", desc: "Alta pigmentación, ligero y no se arruga.", img: "assets/img/pages/page-22.jpg" },
    { id: 7, nombre: "Polvo Suelto USHAS (Oil Control)", precio: 4.00, categoria: "maquillaje", desc: "Translúcido con control de grasa.", img: "assets/img/pages/page-15.jpg" },
    { id: 8, nombre: "Polvo Suelto Rosado Samy", precio: 7.00, categoria: "maquillaje", desc: "Sella la ojera, brillo natural, tacto sedoso.", img: "assets/img/pages/page-40.jpg" },
    { id: 9, nombre: "Paleta de Sombras TRUE LOVER (15 Colores)", precio: 6.00, categoria: "maquillaje", desc: "15 tonos con emolientes, incluye espejo.", img: "assets/img/pages/page-05.jpg" },
    { id: 10, nombre: "Labial Líquido Mate RESIST - VOGUE", precio: 6.50, categoria: "maquillaje", desc: "Acabado mate hasta 14h, no transfiere.", img: "assets/img/pages/page-03.jpg" },
    { id: 11, nombre: "Paleta de Rostro Beauty Alissha", precio: 8.00, categoria: "maquillaje", desc: "Dúo iluminador/contorno/rubor 6 tonos.", img: "assets/img/pages/page-35.jpg" },
    { id: 12, nombre: "Paleta de Sombras 16 Colores (Dorado)", precio: 8.00, categoria: "maquillaje", desc: "Tonos cafés, nudes y dorados.", img: "assets/img/pages/page-10.jpg" },
    { id: 13, nombre: "Delineador 2 en 1 SHEGLAM", precio: 4.00, categoria: "maquillaje", desc: "Punta doble con sello triangular.", img: "assets/img/pages/page-24.jpg" },
    { id: 14, nombre: "Delineador Punta Pincel Prosa", precio: 6.00, categoria: "maquillaje", desc: "Fino, waterproof, 4 aceites naturales.", img: "assets/img/pages/page-33.jpg" },
    { id: 15, nombre: "Máscara de Pestañas Nailen Waterproof", precio: 5.00, categoria: "maquillaje", desc: "Waterproof, alarga y aporta volumen negro.", img: "assets/img/pages/page-41.jpg" },
    { id: 16, nombre: "Máscara Pestañas al Infinito - Vogue", precio: 6.50, categoria: "maquillaje", desc: "Extralargas hasta 20h, con aceite de ricino.", img: "assets/img/pages/page-41.jpg" },
    { id: 17, nombre: "Máscara Amor a Primera Vista - Vogue", precio: 6.50, categoria: "maquillaje", desc: "Volumen impactante, largas y curvas.", img: "assets/img/pages/page-37.jpg" },
    { id: 18, nombre: "Gloss / Lip Oil Glow Reviver - e.l.f.", precio: 5.00, categoria: "maquillaje", desc: "Aceite labial hidratante con aceite de albaricoque.", img: "assets/img/pages/page-30.jpg" },
    { id: 19, nombre: "Labial Lip Oil Rare Beauty", precio: 3.50, categoria: "maquillaje", desc: "Fórmula gel a aceite con jojoba y girasol.", img: "assets/img/pages/page-21.jpg" },

    { id: 20, nombre: "Sérum Facial con Vitamina C 3 en 1", precio: 10.00, categoria: "skincare", desc: "Trata manchas, arrugas y poros.", img: "assets/img/pages/page-16.jpg" },
    { id: 22, nombre: "Protector Solar en Suero Tocobo", precio: 10.00, categoria: "skincare", desc: "SPF50+ con Aloe y Ácido Hialurónico.", img: "assets/img/pages/page-14.jpg" },
    { id: 24, nombre: "Crema Facial Hidratante SAMY Skin", precio: 13.00, categoria: "skincare", desc: "Leche de argán y niacinamida, día y noche.", img: "assets/img/pages/samy-crema.jpg" },
    { id: 27, nombre: "Tónico Facial Aloe Vera Purpure", precio: 7.00, categoria: "skincare", desc: "Hidratación profunda, calma y equilibra.", img: "assets/img/pages/page-25.jpg" },
    { id: 28, nombre: "Tónico Despigmentante L&B", precio: 12.00, categoria: "skincare", desc: "Aclara manchas y unifica el tono.", img: "assets/img/pages/page-34.jpg" },
    { id: 29, nombre: "Mascarillas Faciales en Velo NEVADA", precio: 1.75, categoria: "skincare", desc: "Mascarillas hidratantes individuales.", img: "assets/img/pages/page-31.jpg" },

    { id: 21, nombre: "Serum Capilar Protector Makao", precio: 10.00, categoria: "capilar", desc: "Efecto liso restaurador, zero frizz.", img: "assets/img/pages/page-47.jpg" },
    { id: 23, nombre: "Sérum Hidratante Capilar BIO.GLOSS", precio: 12.00, categoria: "capilar", desc: "Hidrata, repara puntas y protege del calor.", img: "assets/img/pages/page-18.jpg" },
    { id: 26, nombre: "Crema Capilar Tratamiento SKALA", precio: 8.00, categoria: "capilar", desc: "Tratamiento 100% vegano, 1000g.", img: "assets/img/pages/page-23.jpg" },
    { id: 36, nombre: "Fragancias Armaf / Body Sprays", precio: 7.00, categoria: "capilar", desc: "Aromas dulces y frutales (200 ml).", img: "assets/img/pages/page-12.jpg" },
    { id: 37, nombre: "Perfume Pink In Sweet - Yum Yum", precio: 10.00, categoria: "capilar", desc: "Forma de postre/malteada, aromas dulces.", img: "assets/img/pages/perfume-pink-in-sweet.jpg" },
    { id: 38, nombre: "Splash Corporal Cyzone Fruity Pop", precio: 10.00, categoria: "capilar", desc: "Colonia refrescante frutal larga duración.", img: "assets/img/pages/page-04.jpg" },

    { id: 30, nombre: "Set de Brochas Viajeras", precio: 5.00, categoria: "accesorios", desc: "Kit compacto sintético en cartuchera.", img: "assets/img/pages/page-01.jpg" },
    { id: 31, nombre: "Brochas Sweet Beauty (6 PCS)", precio: 7.50, categoria: "accesorios", desc: "Alta calidad para base, polvo y sombras.", img: "assets/img/pages/page-13.jpg" },
    { id: 32, nombre: "Set de Esponjitas en Frasco", precio: 3.50, categoria: "accesorios", desc: "Esponja grande, pequeña y borlas.", img: "assets/img/pages/page-02.jpg" },
    { id: 33, nombre: "Esponja de Maquillaje SAMY", precio: 4.50, categoria: "accesorios", desc: "Suave y delicada para productos líquidos o polvo.", img: "assets/img/pages/page-46.jpg" },
    { id: 34, nombre: "Carteras / Bolsos Florales", precio: 6.00, categoria: "accesorios", desc: "Asa fruncida y estampado floral variado.", img: "assets/img/pages/page-39.jpg" },
    { id: 35, nombre: "Cosmetiquera LOVE / Been Love", precio: 8.00, categoria: "accesorios", desc: "Diseño acolchado, impermeable y amplio.", img: "assets/img/pages/page-08.jpg" }
];

const combos = [
    { id: 'c2', nombre: "Combos y Kits Kawaii", precio: "Consultar", desc: "Kits temáticos con papelería, espejo/libreta y productos.", img: "assets/img/pages/page-11.jpg" },
    { id: 'c3', nombre: "Kit Sol de Janeiro (Mini)", precio: "Consultar", desc: "Incluye Mini Splash, gel de ducha y crema corporal.", img: "assets/img/pages/page-09.jpg" }
];

const fallBackImg = 'assets/img/pages/page-01.jpg';

function waLink(text) {
    return 'https://wa.me/593981540453?text=' + encodeURIComponent(text);
}

function formatPrecio(p) {
    return typeof p === 'number' ? '$' + p.toFixed(2) : p;
}

function renderProducts(filter = 'all') {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = filter === 'all'
        ? productos
        : productos.filter(p => p.categoria === filter);

    if (filtered.length === 0) {
        grid.innerHTML = '<p class="col-span-full text-center text-gray-500">No hay productos en esta categoría por el momento.</p>';
        return;
    }

    filtered.forEach((p, i) => {
        const msg = waLink(`Hola Montero's, quiero pedir: ${p.nombre} ($${p.precio.toFixed(2)}).`);
        const badge = i % 3 === 0 ? '<span class="absolute top-3 left-3 bg-black text-white text-[10px] font-black uppercase tracking-widest px-2 py-1">NUEVO</span>'
            : i % 3 === 1 ? '<span class="absolute top-3 left-3 bg-brand-pink text-white text-[10px] font-black uppercase tracking-widest px-2 py-1">MÁS VENDIDO</span>'
            : '<span class="absolute top-3 left-3 bg-gray-200 text-gray-800 text-[10px] font-black uppercase tracking-widest px-2 py-1">EDICIÓN LIMITADA</span>';
        const card = `
            <div class="product-card bg-white overflow-hidden border border-gray-200 flex flex-col h-full group">
                <div class="product-img-container relative aspect-square overflow-hidden bg-[#f5f5f5] flex items-center justify-center">
                    ${badge}
                    <img src="${p.img}" alt="${p.nombre}" class="w-full h-full object-contain p-6" onerror="this.src='${fallBackImg}'">
                    <div class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <a href="${msg}" target="_blank" class="bg-black text-white text-xs font-black uppercase tracking-widest px-6 py-3 hover:bg-brand-pink transition-colors">Compra rápida</a>
                    </div>
                </div>
                <div class="p-5 flex-1 flex flex-col">
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-extrabold text-gray-900 text-sm uppercase tracking-wide leading-tight">${p.nombre}</h3>
                    </div>
                    <div class="text-yellow-500 text-xs mb-2">★★★★★ <span class="text-gray-500">(4.9 · 118)</span></div>
                    <p class="text-xs text-gray-500 mb-4 flex-1">${p.desc}</p>
                    <div class="flex items-center justify-between mt-auto">
                        <span class="font-black text-xl text-gray-900">$${p.precio.toFixed(2)}</span>
                        <button data-add-to-cart="${p.id}" class="text-xs font-black uppercase tracking-widest bg-black text-white px-4 py-2 hover:bg-brand-pink transition-colors">Agregar</button>
                    </div>
                    <a href="${msg}" target="_blank" class="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-2 hover:text-brand-pink">Pedir directo</a>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', card);
    });
}

function renderCombos() {
    const grid = document.getElementById('combos-grid');
    if (!grid) return;
    grid.innerHTML = '';
    combos.forEach(c => {
        const msg = waLink(`Hola Montero's, me interesa el ${c.nombre}.`);
        const card = `
            <div class="bg-white overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow relative">
                <div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-brand-pink shadow-sm z-10">
                    Especial
                </div>
                <div class="aspect-square overflow-hidden bg-[#fafafa]">
                    <img src="${c.img}" alt="${c.nombre}" class="w-full h-full object-contain p-6 bg-[#fafafa] transform hover:scale-105 transition-transform duration-500" onerror="this.src='${fallBackImg}'">
                </div>
                <div class="p-6 text-center">
                    <h3 class="text-xl font-black uppercase tracking-wide mb-2">${c.nombre}</h3>
                    <p class="text-gray-600 text-sm mb-4 h-10">${c.desc}</p>
                    <p class="text-lg font-black text-gray-900 mb-4">${c.precio}</p>
                    <a href="${msg}" target="_blank" class="block w-full bg-gray-900 text-white py-3 rounded-none font-black uppercase tracking-widest hover:bg-brand-pink transition-colors">
                        <i class="fab fa-whatsapp mr-1"></i> Lo quiero
                    </a>
                    <button data-add-combo="${c.id}" class="block w-full mt-2 border border-gray-300 text-gray-700 py-2 rounded-none font-black uppercase tracking-widest text-xs hover:bg-pink-50 transition-colors">Agregar al carrito</button>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', card);
    });
}

function initApp() {
    renderProducts();
    renderCombos();
    updateCartBadge();
    renderCart();

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => {
                b.classList.remove('bg-brand-pink', 'text-white');
                b.classList.add('bg-white', 'text-gray-700');
            });
            e.target.classList.remove('bg-white', 'text-gray-700');
            e.target.classList.add('bg-brand-pink', 'text-white');

            const filter = e.target.getAttribute('data-filter');
            renderProducts(filter);
        });
    });

    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    if (mobileMenu) {
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

/* ============ CARRITO DE COMPRAS ============ */
let cart = [];
try { cart = JSON.parse(localStorage.getItem('monteros-cart')) || []; } catch (e) { cart = []; }

function saveCart() { localStorage.setItem('monteros-cart', JSON.stringify(cart)); }

function cartCount() { return cart.reduce((n, it) => n + it.qty, 0); }

function updateCartBadge() {
    const b = document.getElementById('cart-count');
    if (b) b.textContent = cartCount();
    document.querySelectorAll('.cart-count-m').forEach(el => el.textContent = cartCount());
}

function addToCart(item) {
    const found = cart.find(it => it.id === item.id);
    if (found) found.qty++;
    else cart.push({ ...item, qty: 1 });
    saveCart(); updateCartBadge(); renderCart();
    alert(`${item.nombre} agregado al carrito 💖`);
}

function removeFromCart(id) {
    cart = cart.filter(it => it.id !== id);
    saveCart(); updateCartBadge(); renderCart();
}

function changeQty(id, delta) {
    const it = cart.find(i => i.id === id);
    if (!it) return;
    it.qty += delta;
    if (it.qty <= 0) return removeFromCart(id);
    saveCart(); updateCartBadge(); renderCart();
}

function cartTotal() {
    return cart.reduce((t, it) => t + (typeof it.precio === 'number' ? it.precio * it.qty : 0), 0);
}

function renderCart() {
    const list = document.getElementById('cart-items');
    const total = document.getElementById('cart-total');
    if (!list || !total) return;
    if (cart.length === 0) {
        list.innerHTML = '<p class="text-gray-500 text-sm text-center py-8">Tu carrito está vacío 🛒</p>';
    } else {
        list.innerHTML = cart.map(it => `
            <div class="flex items-center gap-3 border-b border-gray-100 py-3">
                <img src="${it.img}" class="w-14 h-14 object-contain bg-gray-50 p-1">
                <div class="flex-1">
                    <p class="font-bold text-sm">${it.nombre}</p>
                    <p class="text-xs text-gray-500">${typeof it.precio === 'number' ? '$' + it.precio.toFixed(2) : it.precio}</p>
                    <div class="flex items-center gap-2 mt-1">
                        <button data-cart-dec="${it.id}" class="w-6 h-6 border text-xs">-</button>
                        <span class="text-sm">${it.qty}</span>
                        <button data-cart-inc="${it.id}" class="w-6 h-6 border text-xs">+</button>
                    </div>
                </div>
                <button data-cart-del="${it.id}" class="text-red-400 text-xs uppercase font-bold">Quitar</button>
            </div>`).join('');
    }
    total.textContent = '$' + cartTotal().toFixed(2);
}

function checkoutWhatsApp() {
    if (cart.length === 0) return alert('Tu carrito está vacío');
    const lines = cart.map(it => `• ${it.nombre} x${it.qty}${typeof it.precio === 'number' ? ' - $' + (it.precio * it.qty).toFixed(2) : ''}`).join('\n');
    const msg = `Hola Montero's, quiero realizar un pedido:\n${lines}\nTotal: $${cartTotal().toFixed(2)}\nMétodo de pago: DeUna (Banco Pichincha) / Transferencia / Efectivo\n¿Hacen envíos a domicilio en Pimampiro o por Servientrega?`;
    window.open(waLink(msg), '_blank');
}

document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-add-to-cart]');
    if (addBtn) {
        const p = productos.find(x => x.id == addBtn.getAttribute('data-add-to-cart'));
        if (p) addToCart(p);
    }
    const addCombo = e.target.closest('[data-add-combo]');
    if (addCombo) {
        const c = combos.find(x => x.id == addCombo.getAttribute('data-add-combo'));
        if (c) addToCart(c);
    }
    const inc = e.target.closest('[data-cart-inc]');
    if (inc) changeQty(inc.getAttribute('data-cart-inc'), 1);
    const dec = e.target.closest('[data-cart-dec]');
    if (dec) changeQty(dec.getAttribute('data-cart-dec'), -1);
    const del = e.target.closest('[data-cart-del]');
    if (del) removeFromCart(del.getAttribute('data-cart-del'));
    if (e.target.closest('#cart-open') || e.target.closest('#cart-open-m')) document.getElementById('cart-panel').classList.remove('hidden');
    if (e.target.closest('#cart-close')) document.getElementById('cart-panel').classList.add('hidden');
    if (e.target.closest('#cart-checkout')) checkoutWhatsApp();
    if (e.target.closest('#cart-clear')) { cart = []; saveCart(); updateCartBadge(); renderCart(); }

    const copyBtn = e.target.closest('#copy-deuna-btn');
    if (copyBtn) {
        const phone = '0981540453';
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(phone).then(() => {
                const copyText = document.getElementById('copy-text');
                if (copyText) {
                    copyText.textContent = '¡Copiado! ✓';
                    copyBtn.classList.remove('bg-emerald-600', 'hover:bg-emerald-700');
                    copyBtn.classList.add('bg-black');
                    setTimeout(() => {
                        copyText.textContent = 'Copiar';
                        copyBtn.classList.remove('bg-black');
                        copyBtn.classList.add('bg-emerald-600', 'hover:bg-emerald-700');
                    }, 2000);
                }
            }).catch(() => {
                prompt('Número registrado en DeUna:', phone);
            });
        } else {
            prompt('Número registrado en DeUna:', phone);
        }
    }
});

window.toggleAccordion = function (id) {
    const content = document.getElementById(id);
    const icon = document.getElementById('icon-' + id);
    if (content && icon) {
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            icon.classList.add('rotate-180');
        } else {
            content.classList.add('hidden');
            icon.classList.remove('rotate-180');
        }
    }
}

/* ==========================================================================
   SISTEMA DE AUDIO: MÚSICA DE FONDO Y SONIDO DE BOTONES
   ========================================================================== */

// 1. Sonido de clic en botones y elementos interactivos
let audioCtx = null;
function getAudioContext() {
    if (!audioCtx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
            audioCtx = new AudioCtx();
        }
    }
    return audioCtx;
}

function playButtonClickSound() {
    // Motor principal: Web Audio API (cero latencia, respuesta instantánea)
    try {
        const ctx = getAudioContext();
        if (ctx) {
            if (ctx.state === 'suspended') {
                ctx.resume();
            }
            const now = ctx.currentTime;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            // Tono tipo "pop / click" moderno y agradable (760Hz -> 160Hz en 45ms)
            osc.type = 'sine';
            osc.frequency.setValueAtTime(760, now);
            osc.frequency.exponentialRampToValueAtTime(160, now + 0.045);

            // Envolvente de volumen suave
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now);
            osc.stop(now + 0.05);
            return;
        }
    } catch (e) {
        // En caso de no soporte o error, pasar al fallback
    }

    // Fallback: elemento de audio HTML5
    try {
        const fallbackAudio = document.getElementById('click-sound');
        if (fallbackAudio) {
            fallbackAudio.currentTime = 0;
            fallbackAudio.volume = 0.25;
            fallbackAudio.play().catch(() => {});
        }
    } catch (e) {}
}

// Delegación global: reproduce sonido en botones, enlaces y controles interactivos
document.addEventListener('click', (e) => {
    const clickable = e.target.closest('button, a, input[type="button"], input[type="submit"], .filter-btn, [data-add-to-cart], [data-add-combo], [role="button"], #hero-banner');
    if (clickable) {
        playButtonClickSound();
    }
}, { capture: true });

// 2. Control de Música de fondo ambiental
function initAudio() {
    const bgMusic = document.getElementById('bg-music');
    const musicToggleBtn = document.getElementById('music-toggle-btn');
    const musicIcon = document.getElementById('music-icon');
    const musicEqualizer = document.getElementById('music-equalizer');
    const musicText = document.getElementById('music-text');
    const musicTooltip = document.getElementById('music-tooltip');

    if (!bgMusic) return;

    // Volumen ambiental adecuado (35%)
    bgMusic.volume = 0.35;

    // Restaurar posición previa en la sesión para dar continuidad
    const savedTime = sessionStorage.getItem('monteros_bg_music_time');
    if (savedTime && !isNaN(savedTime)) {
        bgMusic.currentTime = parseFloat(savedTime);
    }

    // Guardar avance periódicamente
    bgMusic.addEventListener('timeupdate', () => {
        sessionStorage.setItem('monteros_bg_music_time', bgMusic.currentTime);
    });

    function updateMusicUI(isPlaying) {
        if (!musicEqualizer || !musicIcon) return;
        if (isPlaying) {
            musicEqualizer.classList.remove('paused');
            musicEqualizer.classList.add('playing');
            musicIcon.className = 'fas fa-music text-sm text-brand-pink';
            if (musicText) musicText.textContent = 'Música';
            if (musicTooltip) musicTooltip.textContent = 'Pausar música';
        } else {
            musicEqualizer.classList.remove('playing');
            musicEqualizer.classList.add('paused');
            musicIcon.className = 'fas fa-volume-xmark text-sm text-gray-400';
            if (musicText) musicText.textContent = 'Pausa';
            if (musicTooltip) musicTooltip.textContent = 'Reproducir música';
        }
    }

    function playMusic() {
        return bgMusic.play().then(() => {
            updateMusicUI(true);
            return true;
        }).catch((err) => {
            updateMusicUI(false);
            return false;
        });
    }

    function pauseMusic() {
        bgMusic.pause();
        updateMusicUI(false);
    }

    // Si el usuario no ha puesto pausa voluntariamente, intentar reproducción
    const userPrefersPaused = localStorage.getItem('monteros_bg_music_paused') === 'true';

    if (!userPrefersPaused) {
        // Intento 1: Autoplay directo
        playMusic().catch(() => {});

        // Intento 2: Iniciar en la primera interacción (cumpliendo con la política de autoplay de los navegadores)
        const startOnFirstGesture = () => {
            if (localStorage.getItem('monteros_bg_music_paused') !== 'true') {
                if (bgMusic.paused) {
                    playMusic();
                }
            }
            removeListeners();
        };

        const removeListeners = () => {
            window.removeEventListener('click', startOnFirstGesture);
            window.removeEventListener('scroll', startOnFirstGesture);
            window.removeEventListener('touchstart', startOnFirstGesture);
            window.removeEventListener('keydown', startOnFirstGesture);
        };

        window.addEventListener('click', startOnFirstGesture, { passive: true });
        window.addEventListener('scroll', startOnFirstGesture, { passive: true });
        window.addEventListener('touchstart', startOnFirstGesture, { passive: true });
        window.addEventListener('keydown', startOnFirstGesture, { passive: true });
    } else {
        updateMusicUI(false);
    }

    // Botón flotante para pausar o reactivar la música a gusto del usuario
    if (musicToggleBtn) {
        musicToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (bgMusic.paused) {
                localStorage.removeItem('monteros_bg_music_paused');
                playMusic();
            } else {
                localStorage.setItem('monteros_bg_music_paused', 'true');
                pauseMusic();
            }
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAudio);
} else {
    initAudio();
}
