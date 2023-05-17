export type ContactType = {
    name: string;
}

export function getContacts(): Promise<ContactType[]> {
    return fetch('http://localhost:6060/contacts').then(res => res.json());
}