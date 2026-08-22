export default {
  nuxtSiteConfig: {
    name: 'PrestissIMMO',
    description: "La passion de l'immobilier",
  },
  pages: {
    buy: {
      title: 'Achat',
    },
    rent: {
      title: 'Location',
    },
    about: {
      title: 'À propos',
    },
    contact: {
      title: 'Contact',
    },
  },
  tooltips: {
    post: {
      slug: 'Nom unique',
      type: 'Type',
      state: 'État',
      states: {
        available: 'Disponible',
        reserved: 'Réservé',
        sold: 'Vendu',
        rented: 'Loué',
      },
      visible: 'Visible',
      relativeValue: 'Valeur relative',
      numRooms: 'Nombre de pièces',
      numBathrooms: 'Nombre de salles de bain',
      numBedrooms: 'Nombre de chambres',
      numFloors: "Nombre d'étages",
      terrainArea: 'Surface du terrain en mètres carrés',
      livingArea: 'Surface habitable en mètres carrés',
      livingVolume: 'Volume habitable en mètres cubes',
      constructionYear: 'Année de construction',
      renovationYear: 'Année de rénovation',
    },
    postWriteup: {
      title: 'Titre',
      description: 'Description',
      price: 'Prix',
      heatingType: 'Type de chauffage',
      address: 'Adresse',
      parking: 'Parking',
      crushes: 'Caractéristiques uniques',
    },
    postMedia: {
      description: 'Description',
    },
    postText: {
      title: 'Titre',
      content: 'Contenu',
    },
  },
  defaultAlt: 'Une photo du bien',
  sorting: {
    sorted: 'Trié par',
    latest: 'Récent',
    top: 'Top',
    cheapest: 'Moins cher',
  },
  locales: {
    en: 'Anglais',
    de: 'Allemand',
    fr: 'Français',
  },
  contact: {
    header: 'Prenez contact !',
    lastname: 'Nom',
    firstname: 'Prénom',
    email: 'Email',
    phone: 'Téléphone',
    phoneHint: "Merci d'inclure le préfixe international",
    locales: 'Langues parlées',
    message: 'Message',
    spam: 'Afin de réduire le spam, merci de cocher ce qui convient',
    checkbox1: 'Je suis un humain',
    checkbox2: 'Je suis un robot',
    submit: 'Envoyer le message',
    modal: {
      call: "Appelez-moi directement afin d'en apprendre plus sur",
      message:
        'Ou envoyez-moi un message avec vos coordonnées et je reviendrai vers vous dès que possible !',
      defaultMessage: "Je souhaiterais plus d'informations sur",
    },
  },
  newsletter: {
    modal: {
      header: "S'abonner à la Newsletter",
    },
  },
  noPosts: {
    title: "Il n'y a rien à afficher pour le moment !",
    description:
      'Je suis en train de préparer de nouvelles annonces succulentes pour vous. Revisitez le site sous peu !',
  },
}
