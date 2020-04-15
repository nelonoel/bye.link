import get from 'lodash/get'
import { format } from './date'

const assets = {
  contacts: {
    slug: 'contacts',
    title: 'Contacts',
    titleField: 'title',
    descriptionField: 'email',
    color: 'pink',
    icon: `<path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />`,
    sortBy: 'last_modified',
  },
  passwords: {
    slug: 'passwords',
    title: 'Passwords',
    titleField: 'title',
    descriptionField: 'username',
    color: 'orange',
    icon: `<path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />`,
    sortBy: 'last_modified',
  },
  cards: {
    slug: 'cards',
    title: 'Cards',
    titleField: 'title',
    descriptionField: 'card_type',
    color: 'yellow',
    icon: `<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" ></path>`,
    sortBy: 'last_modified',
  },
  notes: {
    slug: 'notes',
    title: 'Notes',
    titleField: 'title',
    descriptionField: 'note',
    color: 'green',
    icon: `<path d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>`,
    sortBy: 'last_modified',
  },
  diary: {
    slug: 'diary',
    title: 'Diary',
    titleField: 'created_at',
    titleFormat: format,
    descriptionField: 'note',
    color: 'blue',
    icon: `<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />`,
    sortBy: 'created_at',
  },
}

export default key =>
  key
    ? get(assets, key, {
        title: 'Loading..',
      })
    : assets
