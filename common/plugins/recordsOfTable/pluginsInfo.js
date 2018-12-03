/**
 * This module exports settings which are necessary only for theme plugins used in RecordsOfTable
 */
module.exports = {
  Events : {
    recordsOfTable: {
      fetchList: 'fetchPatientEventsRequest',
      fetchListURL: '../../plugins/Events/ducks/fetch-patient-events.duck',
      selector: 'patientEventsSelector',
      selectorURL: '../../plugins/Events/selectors',
      plugin: 'events',
      title: 'Events',
      stateName: 'allEvents',
      setMethodName: 'setEventsRecords',
      hasSubItems: 'true'
    },
    recordsOfTableDetails: {
      fetchList: 'fetchPatientEventsDetailRequest',
      fetchListURL: '../../plugins/Events/ducks/fetch-patient-events-detail.duck',
      selector: 'patientEventsDetailSelector',
      selectorURL: '../../plugins/Events/selectors',
      plugin: 'events',
      title: 'Events',
      stateName: 'eventDetail'
    },
    recordsOfTableFunctions: {
      functionName: 'setEventsRecords',
      functionURL: '../../../theme/plugins/Events/functions'
    },
    recordsOfTablePopover: {
      plugin: 'events',
      component: 'RecordsOfTablePopoverEvents',
      componentURL: '../../plugins/Events/RecordsOfTablePopoverEvents'
    }
  },
  Procedures : {
    recordsOfTable: {
      fetchList: 'fetchPatientProceduresRequest',
      fetchListURL: '../../plugins/Procedures/ducks/fetch-patient-procedures.duck',
      selector: 'patientProceduresSelector',
      selectorURL: '../../plugins/Procedures/selectors',
      plugin: 'procedures',
      title: 'Procedures',
      stateName: 'allProcedures',
      setMethodName: 'setProceduresRecords',
      hasSubItems: 'false'
    },
    recordsOfTableDetails: {
      fetchList: 'fetchPatientProceduresDetailRequest',
      fetchListURL: '../../plugins/Procedures/ducks/fetch-patient-procedures-detail.duck',
      selector: 'patientProceduresDetailSelector',
      selectorURL: '../../plugins/Procedures/selectors',
      plugin: 'procedures',
      title: 'Procedures',
      stateName: 'procedureDetail'
    },
    recordsOfTableFunctions: {
      functionName: 'setProceduresRecords',
      functionURL: '../../../theme/plugins/Procedures/functions'
    },
    recordsOfTablePopover: {
      plugin: 'procedures',
      component: 'RecordsOfTablePopoverProcedures',
      componentURL: '../../plugins/Procedures/RecordsOfTablePopoverProcedures'
    }
  },
  Referrals : {
    recordsOfTable: {
      fetchList: 'fetchPatientReferralsRequest',
      fetchListURL: '../../plugins/Referrals/ducks/fetch-patient-referrals.duck',
      selector: 'patientReferralsSelector',
      selectorURL: '../../plugins/Referrals/selectors',
      plugin: 'referrals',
      title: 'Referrals',
      stateName: 'allReferrals',
      setMethodName: 'setReferralsRecords',
      hasSubItems: 'false'
    },
    recordsOfTableDetails: {
      fetchList: 'fetchPatientReferralsDetailRequest',
      fetchListURL: '../../plugins/Referrals/ducks/fetch-patient-referrals-detail.duck',
      selector: 'patientReferralsDetailSelector',
      selectorURL: '../../plugins/Referrals/selectors',
      plugin: 'referrals',
      title: 'Referrals',
      stateName: 'referralDetail'
    },
    recordsOfTableFunctions: {
      functionName: 'setReferralsRecords',
      functionURL: '../../../theme/plugins/Referrals/functions'
    },
    recordsOfTablePopover: {
      plugin: 'referrals',
      component: 'RecordsOfTablePopoverReferrals',
      componentURL: '../../plugins/Referrals/RecordsOfTablePopoverReferrals'
    }
  },
  Vitals : {
    recordsOfTable: {
      fetchList: 'fetchPatientVitalsRequest',
      fetchListURL: '../../plugins/Vitals/ducks/fetch-patient-vitals.duck',
      selector: 'patientVitalsSelector',
      selectorURL: '../../plugins/Vitals/selectors',
      plugin: 'vitals',
      title: 'Vitals',
      stateName: 'allVitals',
      setMethodName: 'setVitalsRecords',
      hasSubItems: 'false'
    },
    recordsOfTableDetails: {
      fetchList: 'fetchPatientVitalsDetailRequest',
      fetchListURL: '../../plugins/Vitals/ducks/fetch-patient-vitals-detail.duck',
      selector: 'patientVitalsDetailSelector',
      selectorURL: '../../plugins/Vitals/selectors',
      plugin: 'vitals',
      title: 'Vitals',
      stateName: 'vitalDetail'
    },
    recordsOfTableFunctions: {
      functionName: 'setVitalsRecords',
      functionURL: '../../../theme/plugins/Vitals/functions'
    },
    recordsOfTablePopover: {
      plugin: 'vitals',
      component: 'RecordsOfTablePopoverVitals',
      componentURL: '../../plugins/Vitals/RecordsOfTablePopoverVitals'
    }
  }
};
