/**
 * This module exports settings which are necessary for theme plugins
 */
module.exports = {
  ClinicalNotes: {
    clientsUrl: {
      name: 'CLINICAL_NOTES',
      url: 'clinicalNotes'
    },
    plugins: {
      getTitle: 'clinicalNotesTitle',
      title: 'Clinical Notes',
      emptyMessage: 'No information available.',
      url: 'clinicalNotes',
      import: 'clinicalNotes',
      pluginDirectory: '../plugins/ClinicalNotes/index',
      imageImport: null,
      imageSource: null,
      forTest: null
    },
    synopsisRequests: {
      duckUrl: '../plugins/ClinicalNotes/ducks/fetch-patient-clinical-notes.duck',
      requestSynopsis: null,
      requestDetails: 'fetchPatientClinicalNotesDetailRequest',
      request: 'fetchPatientClinicalNotesRequest',
      onMount: 'fetchPatientClinicalNotesOnMount',
      onMountDetails: 'fetchPatientClinicalNotesDetailOnMount'
    },
    themeSelectors: {
      importUrl: null,
      selector: null,
      store: null,
      url: null
    }
  },
  ClinicalStatements: {
    clientsUrl: {
      name: 'CLINICAL_STATEMENTS',
      url: 'clinicalStatements'
    },
    plugins: {
      getTitle: 'clinicalStatementsTitle',
      title: 'Clinical Statements',
      emptyMessage: 'No information available.',
      url: 'clinicalStatements',
      import: 'clinicalStatements',
      pluginDirectory: '../plugins/ClinicalStatements/index',
      imageImport: null,
      imageSource: null,
      forTest: null
    },
    synopsisRequests: {
      duckUrl: '../plugins/ClinicalStatements/ducks/fetch-patient-clinical-notes.duck',
      requestSynopsis: null,
      requestDetails: 'fetchPatientTopThreeThingsDetailRequest',
      request: 'fetchPatientClinicalStatementsRequest',
      onMount: 'fetchPatientClinicalStatementsOnMount',
      onMountDetails: 'fetchPatientClinicalStatementsDetailOnMount'
    },
    themeSelectors: {
      importUrl: null,
      selector: null,
      store: null,
      url: null
    }
  },
  Documents: {
    clientsUrl: {
      name: 'DOCUMENTS',
      url: 'documents'
    },
    plugins: {
      getTitle: 'documentsTitle',
      title: 'Documents',
      emptyMessage: 'No information available.',
      url: 'documents',
      import: 'documents',
      pluginDirectory: '../plugins/Documents/index',
      imageImport: null,
      imageSource: null,
      forTest: null
    },
    synopsisRequests: {
      duckUrl: '../plugins/Documents/ducks/fetch-patient-documents.duck',
      requestSynopsis: null,
      requestDetails: 'fetchPatientDocumentsDetailRequest',
      request: 'fetchPatientDocumentsRequest',
      onMount: 'fetchPatientDocumentsOnMount',
      onMountDetails: 'fetchPatientDocumentsDetailOnMount'
    },
    themeSelectors: {
      importUrl: null,
      selector: null,
      store: null,
      url: null
    }
  },
  Drawings: {
    clientsUrl: {
      name: 'DRAWINGS',
      url: 'drawings'
    },
    plugins: {
      getTitle: 'drawingsTitle',
      title: 'Drawings',
      emptyMessage: 'No information available.',
      url: 'drawings',
      import: 'drawings',
      pluginDirectory: '../plugins/Drawings/index',
      imageImport: null,
      imageSource: null,
      forTest: null
    },
    synopsisRequests: {
      duckUrl: '../plugins/Drawings/ducks/fetch-patient-drawings.duck',
      requestSynopsis: null,
      requestDetails: 'fetchPatientDrawingsDetailRequest',
      request: 'fetchPatientDrawingsRequest',
      onMount: 'fetchPatientDrawingsOnMount',
      onMountDetails: 'fetchPatientDrawingsDetailOnMount'
    },
    themeSelectors: {
      importUrl: null,
      selector: null,
      store: null,
      url: null
    }
  },
  Feeds: {
    clientsUrl: { name: 'FEEDS', url: 'feeds' },
    plugins: {
      getTitle: 'feedsTitle',
      title: 'Feeds',
      emptyMessage: 'No information available.',
      url: 'feeds',
      import: 'feeds',
      pluginDirectory: '../plugins/Feeds/index',
      imageImport: null,
      imageSource: null,
      forTest: null
    },
    synopsisRequests: {
      duckUrl: '../plugins/Feeds/ducks/fetch-feeds.duck',
      requestSynopsis: 'fetchFeedsRequest',
      requestDetails: null,
      request: 'fetchFeedsRequest',
      onMount: null,
      onMountDetails: null
    },
    themeSelectors: {
      importUrl: '../plugins/Feeds/selectors',
      selector: 'feedsSelector',
      store: null,
      url: 'feeds'
    }
  },
  Events: {
    clientsUrl: {
      name: 'EVENTS',
      url: 'events'
    },
    plugins: {
      getTitle: 'eventsTitle',
      title: 'Events',
      emptyMessage: 'No information available.',
      url: 'events',
      import: 'events',
      pluginDirectory: '../plugins/Events/index',
      imageImport: null,
      imageSource: null,
      forTest: null
    },
    synopsisRequests: {
      duckUrl: '../plugins/Events/ducks/fetch-patient-events.duck',
      requestSynopsis: null,
      requestDetails: 'fetchPatientEventsDetailRequest',
      request: 'fetchPatientEventsRequest',
      onMount: 'fetchPatientEventsOnMount',
      onMountDetails: 'fetchPatientEventsDetailOnMount'
    },
    themeSelectors: {
      importUrl: null,
      selector: null,
      store: null,
      url: null
    }
  },
  GenericMdt: {
    clientsUrl: {
      name: 'MDTS',
      url: 'mdts'
    },
    plugins: {
      getTitle: 'mdtsTitle',
      title: 'Generic Mdt',
      emptyMessage: 'No information available.',
      url: 'mdts',
      import: 'mdts',
      pluginDirectory: '../plugins/GenericMdt/index',
      imageImport: null,
      imageSource: null,
      forTest: null
    },
    synopsisRequests: {
      duckUrl: '../plugins/GenericMdt/ducks/fetch-patient-generic-mdt.duck',
      requestSynopsis: null,
      requestDetails: 'fetchPatientMDTsDetailRequest',
      request: 'fetchPatientMDTsRequest',
      onMount: 'fetchPatientMDTsOnMount',
      onMountDetails: 'fetchPatientMDTsDetailOnMount'
    },
    themeSelectors: {
      importUrl: null,
      selector: null,
      store: null,
      url: null
    }
  },
  GenericPlugin: {
    clientsUrl: {
      name: 'GENERIC_PLUGIN',
      url: 'genericPlugin'
    },
    plugins: {
      getTitle: 'genericPluginTitle',
      title: 'Generic Plugin',
      emptyMessage: 'No information available.',
      url: 'genericPlugin',
      import: 'genericPlugin',
      pluginDirectory: '../plugins/GenericPlugin/index',
      imageImport: null,
      imageSource: null,
      forTest: null
    },
    synopsisRequests: {
      duckUrl: '../plugins/GenericPlugin/ducks/fetch-patient-generic-plugin.duck',
      requestSynopsis: null,
      requestDetails: 'fetchPatientGenericPluginDetailRequest',
      request: 'fetchPatientGenericPluginRequest',
      onMount: 'fetchPatientGenericPluginOnMount',
      onMountDetails: 'fetchPatientGenericPluginDetailOnMount'
    },
    themeSelectors: {
      importUrl: null,
      selector: null,
      store: null,
      url: null
    }
  },
  Orders: {
    clientsUrl: {
      name: 'ORDERS',
      url: 'orders'
    },
    plugins: {
      getTitle: 'ordersTitle',
      title: 'Orders',
      emptyMessage: 'No information available.',
      url: 'orders',
      import: 'orders',
      pluginDirectory: '../plugins/Orders/index',
      imageImport: null,
      imageSource: null,
      forTest: null
    },
    synopsisRequests: {
      duckUrl: '../plugins/Orders/ducks/fetch-patient-orders.duck',
      requestSynopsis: null,
      requestDetails: 'fetchPatientOrdersDetailRequest',
      request: 'fetchPatientOrdersRequest',
      onMount: 'fetchPatientOrdersOnMount',
      onMountDetails: 'fetchPatientOrdersDetailOnMount'
    },
    themeSelectors: {
      importUrl: null,
      selector: null,
      store: null,
      url: null
    }
  },
  PersonalNotes: {
    clientsUrl: {
      name: 'PERSONAL_NOTES',
      url: 'personalNotes'
    },
    plugins: {
      getTitle: 'personalNotesTitle',
      title: 'Personal Notes',
      emptyMessage: 'No information available.',
      url: 'personalNotes',
      import: 'personalNotes',
      pluginDirectory: '../plugins/PersonalNotes/index',
      imageImport: null,
      imageSource: null,
      forTest: null
    },
    synopsisRequests: {
      duckUrl: '../plugins/PersonalNotes/ducks/fetch-patient-personal-notes.duck',
      requestSynopsis: null,
      requestDetails: 'fetchPatientPersonalNotesDetailRequest',
      request: 'fetchPatientPersonalNotesRequest',
      onMount: 'fetchPatientPersonalNotesOnMount',
      onMountDetails: 'fetchPatientPersonalNotesDetailOnMount'
    },
    themeSelectors: {
      importUrl: null,
      selector: null,
      store: null,
      url: null
    }
  },
  Procedures: {
    clientsUrl: {
      name: 'PROCEDURES',
      url: 'procedures'
    },
    plugins: {
      getTitle: 'proceduresTitle',
      title: 'Procedures',
      emptyMessage: 'No information available.',
      url: 'procedures',
      import: 'procedures',
      pluginDirectory: '../plugins/Procedures/index',
      imageImport: null,
      imageSource: null,
      forTest: null
    },
    synopsisRequests: {
      duckUrl: '../plugins/Procedures/ducks/fetch-patient-procedures.duck',
      requestSynopsis: null,
      requestDetails: 'fetchPatientProceduresDetailRequest',
      request: 'fetchPatientProceduresRequest',
      onMount: 'fetchPatientProceduresOnMount',
      onMountDetails: 'fetchPatientProceduresDetailOnMount'
    },
    themeSelectors: {
      importUrl: null,
      selector: null,
      store: null,
      url: null
    }
  },
  PROMs: {
    clientsUrl: {
      name: 'PROMS',
      url: 'proms'
    },
    plugins: {
      getTitle: 'promsTitle',
      title: 'PROMs',
      emptyMessage: 'No information available.',
      url: 'proms',
      import: 'proms',
      pluginDirectory: '../plugins/PROMs/index',
      imageImport: null,
      imageSource: null,
      forTest: null
    },
    synopsisRequests: {
      duckUrl: '../plugins/PROMs/ducks/fetch-patient-proms.duck',
      requestSynopsis: null,
      requestDetails: 'fetchPatientPromsDetailRequest',
      request: 'fetchPatientPromsRequest',
      onMount: 'fetchPatientPromsOnMount',
      onMountDetails: 'fetchPatientPromsDetailOnMount'
    },
    themeSelectors: {
      importUrl: null,
      selector: null,
      store: null,
      url: null
    }
  },
  Referrals: {
    clientsUrl: {
      name: 'REFERRALS',
      url: 'referrals'
    },
    plugins: {
      getTitle: 'referralsTitle',
      title: 'Referrals',
      emptyMessage: 'No information available.',
      url: 'referrals',
      import: 'referrals',
      pluginDirectory: '../plugins/Referrals/index',
      imageImport: null,
      imageSource: null,
      forTest: null
    },
    synopsisRequests: {
      duckUrl: '../plugins/Referrals/ducks/fetch-patient-referrals.duck',
      requestSynopsis: null,
      requestDetails: 'fetchPatientReferralsDetailRequest',
      request: 'fetchPatientReferralsRequest',
      onMount: 'fetchPatientReferralsOnMount',
      onMountDetails: 'fetchPatientReferralsDetailOnMount'
    },
    themeSelectors: {
      importUrl: null,
      selector: null,
      store: null,
      url: null
    }
  },
  Results: {
    clientsUrl: {
      name: 'RESULTS',
      url: 'results'
    },
    plugins: {
      getTitle: 'resultsTitle',
      title: 'Results',
      emptyMessage: 'No information available.',
      url: 'results',
      import: 'results',
      pluginDirectory: '../plugins/Results/index',
      imageImport: null,
      imageSource: null,
      forTest: null
    },
    synopsisRequests: {
      duckUrl: null,
      requestSynopsis: null,
      requestDetails: 'fetchPatientTestResultsDetailRequest',
      request: 'fetchPatientTestResultsRequest',
      onMount: 'fetchPatientTestResultsOnMount',
      onMountDetails: 'fetchPatientTestResultsDetailOnMount'
    },
    themeSelectors: {
      importUrl: null,
      selector: null,
      store: null,
      url: null
    }
  },
  TopThreeThings: {
    clientsUrl: {
      name: 'TOP_THREE_THINGS',
      url: 'topThreeThings'
    },
    plugins: {
      getTitle: 'topThreeThingsTitle',
      title: 'Top Three Things',
      emptyMessage:
        'No information available. Please list the Top 3 Things that concern you',
      url: 'topThreeThings',
      import: 'topThreeThings',
      pluginDirectory: '../plugins/TopThreeThings/index',
      imageImport: 'topThreeThingsPrevImage',
      imageSource: '../plugins/TopThreeThings/ImageSource',
      forTest: 'patientsTopThreeThings'
    },
    synopsisRequests: {
      duckUrl: '../plugins/TopThreeThings/ducks/fetch-patient-top-three-things.duck',
      requestSynopsis: 'fetchPatientTopThreeThingsSynopsisRequest',
      requestDetails: 'fetchPatientTopThreeThingsDetailRequest',
      request: 'fetchPatientTopThreeThingsRequest',
      onMount: 'fetchPatientTopThreeThingsOnMount',
      onMountDetails: 'fetchPatientTopThreeThingsDetailOnMount'
    },
    themeSelectors: {
      importUrl: null,
      selector: 'patientTopThreeThingsSelector',
      store: 'patientsTopThreeThings',
      url: 'topThreeThings'
    }
  },
  TransfersOfCare: {
    clientsUrl: {
      name: 'TRANSFERS_OF_CARE',
      url: 'transfersOfCare'
    },
    plugins: {
      getTitle: 'transfersOfCareTitle',
      title: 'Transfers Of Care',
      emptyMessage: 'No information available.',
      url: 'transfersOfCare',
      import: 'transfersOfCare',
      pluginDirectory: '../plugins/TransfersOfCare/index',
      imageImport: null,
      imageSource: null,
      forTest: null
    },
    synopsisRequests: {
      duckUrl: '../plugins/TransfersOfCare/ducks/fetch-patient-transfers-of-care.duck',
      requestSynopsis: null,
      requestDetails: 'fetchPatientTransfersOfCareDetailRequest',
      request: 'fetchPatientTransfersOfCareRequest',
      onMount: 'fetchPatientTransfersOfCareOnMount',
      onMountDetails: 'fetchPatientTransfersOfCareDetailOnMount'
    },
    themeSelectors: {
      importUrl: null,
      selector: null,
      store: null,
      url: null
    }
  },
  Vaccinations: {
    clientsUrl: { name: 'VACCINATIONS', url: 'vaccinations' },
    plugins: {
      getTitle: 'vaccinationsTitle',
      title: 'Vaccinations',
      emptyMessage: 'No information available.',
      url: 'vaccinations',
      import: 'vaccinations',
      pluginDirectory: '../plugins/Vaccinations/index',
      imageImport: 'vaccinationsPrevImage',
      imageSource: '../plugins/Vaccinations/ImageSource',
      forTest: 'patientsVaccinations'
    },
    synopsisRequests: {
      duckUrl: '../plugins/Vaccinations/ducks/fetch-patient-vaccinations.duck',
      requestSynopsis: 'fetchPatientVaccinationsSynopsisRequest',
      requestDetails: 'fetchPatientVaccinationsDetailRequest',
      request: 'fetchPatientVaccinationsRequest',
      onMount: 'fetchPatientVaccinationsOnMount',
      onMountDetails: 'fetchPatientVaccinationsDetailOnMount'
    },
    themeSelectors: {
      importUrl: null,
      selector: 'patientVaccinationsSelector',
      store: 'patientsVaccinations',
      url: 'vaccinations'
    }
  },
  Vitals: {
    clientsUrl: {
      name: 'VITALS',
      url: 'vitals'
    },
    plugins: {
      getTitle: 'vitalsTitle',
      title: 'Vitals',
      emptyMessage: 'No information available.',
      url: 'vitals',
      import: 'vitals',
      pluginDirectory: '../plugins/Vitals/index',
      imageImport: null,
      imageSource: null,
      forTest: null
    },
    synopsisRequests: {
      duckUrl: '../plugins/Vitals/ducks/fetch-patient-vitals.duck',
      requestSynopsis: null,
      requestDetails: 'fetchPatientVitalsDetailRequest',
      request: 'fetchPatientVitalsRequest',
      onMount: 'fetchPatientVitalsOnMount',
      onMountDetails: 'fetchPatientVitalsDetailOnMount'
    },
    themeSelectors: {
      importUrl: null,
      selector: null,
      store: null,
      url: null
    }
  },
  DiaryEntry: {
    clientsUrl: {
      name: 'DIARY_ENTRY',
      url: 'diaryEntry'
    },
    plugins: {
      getTitle: 'diaryEntryTitle',
      title: 'Diary Entry',
      emptyMessage: 'No information available.',
      url: 'diaryEntry',
      import: 'diaryEntry',
      pluginDirectory: '../plugins/DiaryEntry/index',
      imageImport: null,
      imageSource: null,
      forTest: null
    },
    synopsisRequests: {
      duckUrl: '../plugins/DiaryEntry/ducks/fetch-patient-diary-entry.duck',
      requestSynopsis: null,
      requestDetails: 'fetchPatientDiaryEntryDetailRequest',
      request: 'fetchPatientDiaryEntryRequest',
      onMount: 'fetchPatientDiaryEntryOnMount',
      onMountDetails: 'fetchPatientDiaryEntryDetailOnMount'
    },
    themeSelectors: {
      importUrl: null,
      selector: null,
      store: null,
      url: null
    }
  },
  Images: {
    clientsUrl: {
      name: 'IMAGES',
      url: 'images'
    },
    plugins: {
      getTitle: 'imagesTitle',
      title: 'Images',
      emptyMessage: 'No information available.',
      url: 'images',
      import: 'images',
      pluginDirectory: '../plugins/Images/index',
      imageImport: null,
      imageSource: null,
      forTest: null
    },
    synopsisRequests: {
      duckUrl: '../plugins/Images/ducks/fetch-patient-images.duck',
      requestSynopsis: null,
      requestDetails: null,
      request: 'fetchPatientImagesRequest',
      onMount: 'fetchPatientImagesOnMount',
      onMountDetails: null
    },
    themeSelectors: {
      importUrl: null,
      selector: null,
      store: null,
      url: null
    }
  }
};
