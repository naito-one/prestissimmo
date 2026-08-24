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
      id: 'ID',
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
      created: 'Créé',
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
  notes: {
    post: {
      slug: 'Ne peut pas être modifié',
      visible:
        "Activer pour publier sur le site public. Si désactivé, vous seul pouvez voir l'annonce",
      relativeValue: 'Utilisé pour le tri par prix, jamais affiché',
      constructionYear:
        'Champ libre, peut par exemple contenir une fourchette ou une liste',
      renovationYear:
        'Champ libre, peut par exemple contenir une fourchette ou une liste',
    },
    postWriteup: {
      title: "Titre de la page web, également visible en haut de l'annonce",
      description:
        'Visible uniquement dans les résultats des moteurs de recherche',
      price: "Champ libre, peut être un nombre formaté ou n'importe quel texte",
      crushes: 'Liste de mots-clés percutants',
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
    form: {
      warning: {
        title: 'Attention',
      },
      success: {
        title: 'Succès',
        description: 'Le formulaire a été envoyé',
      },
      error: {
        title: 'Erreur',
        description:
          "Désolé, une erreur est survenue lors de l'envoi du formulaire. Veuillez m'appeler directement ou réessayer plus tard.",
      },
    },
  },
  newsletter: {
    modal: {
      header: "S'abonner à la newsletter",
    },
  },
  noPosts: {
    title: "Il n'y a rien à afficher pour le moment !",
    description:
      'Je prépare de nouveaux projets intéressants pour vous. Revenez me voir bientôt !',
  },
  validation: {
    nonempty: 'Veuillez remplir ce champ',
    email: 'Veuillez fournir une adresse email valide',
    locales: 'Veuillez sélectionner au moins une langue',
  },
  admin: {
    adminPanel: "Panneau d'admin {site}",
    toWebsite: 'Vers le site',
    toAdmin: "Vers l'admin",
    welcome: 'Bienvenue, {name}',
    invisible: "L'annonce est invisible pour les utilisateurs normaux",
    tabs: {
      general: 'Général',
    },
    save: {
      success: {
        title: 'Annonce publiée avec succès',
      },
      invalid: {
        title: 'Impossible de publier',
        description:
          'Certaines données sont invalides. Veuillez corriger les problèmes avant de publier',
      },
      madeInvisible: {
        title:
          'Visibilité définie sur "Masquée" car il n\'y a pas de rédactions',
      },
      error: {
        title: "Une erreur est survenue lors de l'enregistrement de l'annonce",
      },
    },
    deleteWriteup: {
      action: 'Supprimer la rédaction',
      deleted: {
        title: 'Rédaction supprimée',
      },
      undoFailed: {
        title: "Échec de l'annulation",
        description:
          "Impossible d'annuler la suppression car une autre rédaction existe déjà pour la même langue",
      },
    },
    deleteBlock: {
      action: 'Supprimer le bloc',
      deleted: {
        title: 'Bloc supprimé',
      },
      undoFailed: {
        title: "Échec de l'annulation",
        description:
          "Impossible d'annuler la suppression car la rédaction a été supprimée",
      },
    },
    addBlock: {
      missingId: {
        title: "Pas d'ID pour créer un média",
      },
    },
    addPost: {
      action: 'Ajouter une annonce',
      added: {
        title: 'Nouvelle annonce créée',
      },
      error: {
        title: "Échec de la création de l'annonce",
      },
    },
    login: {
      action: 'Se connecter',
      logged: {
        title: 'Succès',
        description: 'Vous êtes connecté(e)',
      },
      error: {
        title: 'Erreur',
        description: 'Identifiants incorrects',
      },
    },
    debug: {
      name: 'Actions de débogage',
      clear: 'Vider la base de données',
      seed: 'Remplir la base de données',
    },
    validation: {
      slug: 'Le nom unique ne doit contenir que des lettres minuscules, des chiffres et des tirets, et ne peut pas commencer ni se terminer par un tiret',
      email: 'Email invalide',
      password: 'Doit contenir au moins 8 caractères',
    },
    mediaChooser: {
      action: 'Choisir un fichier média',
      current: "Utilisé dans la rédaction actuelle de l'annonce",
      other: 'Utilisé dans une autre rédaction de cette annonce',
      elsewhere: 'Utilisé ailleurs sur le site ou inutilisé',
      replace: 'Remplacer le média',
      choose: 'Choisir un média',
      upload: 'Uploader un nouveau média',
      existing: 'Sélectionner un média existant',
      noMedia: "Il n'y a actuellement aucun média dans cette liste",
      uploadMedia: {
        action: 'Uploader la sélection',
        error: {
          title: 'Erreur',
          description: "Impossible d'uploader le média : {err}",
        },
      },
    },
    deletePost: {
      action: 'Supprimer',
      confirm: {
        title: 'Confirmer la suppression de {post}',
        description: 'Cette action est irréversible',
      },
      success: {
        title: 'Annonce supprimée avec succès',
      },
      error: {
        title: "Échec de la suppression de l'annonce",
      },
    },
    generic: {
      save: 'Enregistrer',
      undo: 'Annuler',
      back: 'Retour',
      editing: 'Modification de',
      writeup: 'Rédaction en {lang}',
      writeupFor: 'Créer une rédaction pour',
      blocks: 'Blocs',
      media: 'Média',
      text: 'Texte',
      add: 'Ajouter un {type}',
      block: 'Bloc de {type}',
      posts: 'Annonces',
      cancel: 'Annuler',
      confirm: 'Confirmer',
      topOrder: 'Ordre de Top',
      edit: 'Modifier',
      logout: 'Déconnexion',
    },
  },
}
