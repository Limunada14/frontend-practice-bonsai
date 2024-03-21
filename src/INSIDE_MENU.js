import {
  faAddressBook,
  faFileInvoice,
  faUser,
  faReceipt,
  faList,
  faClock,
  faFileLines,
  faMoneyCheckDollar,
} from '@fortawesome/free-solid-svg-icons';

export const INSIDE_MENU = [
  {
    name: 'Invoicing',
    paragraph: 'Get paid faster with automatic invoicing, online payments and more',
    path: '/invoicing',
    faIcon: faMoneyCheckDollar,
  },
  {
    name: 'Proposals',
    paragraph:
      'Create client-winning proposals with open receipts, custom packages and electronic approvals',
    path: '/proposals',
    faIcon: faFileInvoice,
  },
  {
    name: 'Contracts',
    paragraph:
      'Protect your business with fully-customizable contract templates. Edit and e-sign hassle free.',
    path: '/contracts',
    faIcon: faAddressBook,
  },
  {
    name: 'Client CRM',
    paragraph: 'Add leads, manage existing clients and track projects easily from one place',
    path: '/client-crm',
    faIcon: faUser,
  },
  {
    name: 'Forms',
    paragraph: 'Boost client intake and automate feedback with custom web forms and questionnaires',
    path: '/freelance-form',
    faIcon: faFileLines,
  },
  {
    name: 'Time Tracking',
    paragraph:
      'Stay organized with Bonsai’s all-in-one time tracker, automated timesheets and billing system',
    path: '/time-tracking',
    faIcon: faClock,
  },
  {
    name: 'Accounting',
    paragraph:
      'Manage your finances easily with income reports, expense tracking, tax reminders and more',
    path: '/accounting',
    faIcon: faReceipt,
  },
  {
    name: 'Task Tracking',
    paragraph: 'Stress-free task management with project templates and integrated timesheets',
    path: '/task-tracking',
    faIcon: faList,
  },
];
