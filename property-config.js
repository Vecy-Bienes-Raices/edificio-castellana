/**
 * Configuración de la Ficha Técnica del Inmueble
 * Edita este archivo para personalizar los datos de la ficha técnica.
 */
const propertyConfig = {
  seo: {
    title: "Venta Edificio en La Castellana Bogotá - 5 Pisos",
    description: "Gran Oportunidad de Inversión: Edificio completo en La Castellana, Bogotá. 871 m², 5 pisos, 6 apartamentos + Pent-house. Ideal para oficinas o vivienda.",
    keywords: "Venta Edificio La Castellana, Edificio Bogotá, Inversión Inmobiliaria, Edificio Oficinas Bogotá, Venta Edificio Barrios Unidos, Inmuebles Bogotá",
    ogUrl: "https://edificio-castellana-bogota.netlify.app/", 
    ogImage: "assets/1.jpg",
    author: "Inmobiliaria",
    copyright: "Derechos Reservados"
  },
  
  infoPrincipal: {
    headerBadge: "❤️ ¡Oportunidad de Inversión! 🏢",
    tituloHtml: "Edificio en La Castellana - Bogotá",
    precioVenta: "$5.000.000.000",
    valorAdmin: "" 
  },

  detalles: [
    { label: "Área Const.", value: "871.24 m²", icon: "📐" },
    { label: "Área Lote", value: "276 m²", icon: "🏗️" },
    { label: "Pisos", value: "5", icon: "🏢" },
    { label: "Apartamentos", value: "7", icon: "🏘️" },
    { label: "Parqueaderos", value: "9", icon: "🚗" },
    { label: "Estrato", value: "4", icon: "✨" },
    { label: "Año", value: "2002", icon: "📅" },
    { label: "Barrio", value: "La Castellana, Bogotá", icon: "📍" },
    { label: "Uso", value: "Mixto/Vivienda", icon: "💼" }
  ],

  caracteristicasInternas: [
    { name: "6 Apartamentos (73 m²)", emoji: "🏢" },
    { name: "1 Pent-House (300 m²)", emoji: "🌆" },
    { name: "8 Depósitos", emoji: "📦" },
    { name: "Ascensor", emoji: "🔼" },
    { name: "Planta eléctrica", emoji: "💡" },
    { name: "Salón Comunal", emoji: "🎉" },
    { name: "Recepción/Portería", emoji: "👮‍♂️" },
    { name: "Suelos Mármol/Cerámica", emoji: "🏛️" },
    { name: "Zona de lavandería", emoji: "🧺" },
    { name: "Teatros (Cerca)", emoji: "🎭" }
  ],
  destacadoInterno: "Edificio completo con <strong>6 apartamentos convencionales y 1 Pent-house Dúplex</strong>. Cuenta con ascensor, planta eléctrica y excelentes acabados.",

  caracteristicasExternas: [
    { name: "Cerca Auto-Norte", emoji: "🛣️" },
    { name: "Cerca NQS", emoji: "🛣️" },
    { name: "Cerca Calle 100", emoji: "🛣️" },
    { name: "Centros Comerciales", emoji: "🛍️" },
    { name: "Parqueadero Visitantes", emoji: "🅿" },
    { name: "Vigilancia 24/7", emoji: "👁️‍🗨️" },
    { name: "Zona Comercial", emoji: "🏪" },
    { name: "Trans. Público", emoji: "🚍" }
  ],
  destacadoUbicacion: "Ubicación estratégica en <strong>La Castellana</strong>, cerca de avenidas principales (Auto-Norte, NQS, Calle 100). Ideal para oficinas, empresas o vivienda.",

  mapa: {
    // Coordenadas aproximadas para La Castellana, Bogotá (Genérico)
    // Usamos búsqueda por nombre de barrio para mostrar la zona delimitada (sin pin exacto)
    urlEmbed: "https://maps.google.com/maps?q=Barrio+La+Castellana,+Bogota&t=&z=15&ie=UTF8&iwloc=&output=embed",
    titulo: "Ubicación La Castellana"
  },

  descripcionFinal: {
    titulo: "🌆 Oportunidad Única en el Corazón de Bogotá",
    texto: `🏢 <strong>Edificio completo de 5 pisos</strong> construido en 2002. Consta de 6 apartamentos de 73 m² (dos por piso) y un espectacular <strong>Pent-House Dúplex de 300 m²</strong> con terraza.
    <br><br>
    Ofrece <strong>7 parqueaderos privados y 2 de visitantes</strong>, 8 depósitos y ascensor. Su ubicación estratégica con acceso por vías principales lo hace ideal para <strong>oficinas, projetos empresariales, educación, Airbnb, hoteles o multinacionales</strong>.
    <br><br>
    ¡No dejes pasar esta inversión en una zona de alto impacto comercial!`
  },

  multimedia: {
    videoUrl: "", // No video provided yet, leaving empty or placeholder
    videoThumbnail: "", 
    imagesCount: 9, 
    imagePrefix: "assets/",
    imageExtension: ".webp",
    imagesList: ["assets/1.webp", "assets/2.webp", "assets/3.webp", "assets/4.webp", "assets/5.webp", "assets/6.webp", "assets/7.webp", "assets/8.webp", "assets/9.webp"] 
  },

  share: {
    whatsappText: `🏢 *EDIFICIO EN VENTA - LA CASTELLANA, BOGOTÁ*

📍 Ubicación: La Castellana, Barrios Unidos, Bogotá D.C.
💲 Precio: $5.000.000.000
📐 Área Construida: 871.24 m²
🏢 Pisos: 5
🏘️ Unidades: 6 Aptos + 1 Pent-house
🚗 Parqueaderos: 9
🏗️ Año: 2002
🌐 Estrato: 4

✅ *Destacado:*
📍 Ubicación estratégica (Auto-Norte, NQS, Cl 100).
🏢 Ideal oficinas, vivienda, airbnb.
🔼 Ascensor, Planta Eléctrica.

*🔗 Ver Ficha Completa:*
https://edificio-castellana-bogota.netlify.app/`
  }
};
