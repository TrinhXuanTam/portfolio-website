import { apolloClient } from '@/lib/graphql/client';
import { Contact, Profiles } from '@/app/about/schemas/contact';
import {
  ContactQuery,
  ProfilesQuery,
} from '@/schemas/graphql/generated/graphql';
import {
  getContact as contact,
  getProfiles as profiles,
} from '@/app/about/api/graphql/query/contact';

export async function getContact(): Promise<Contact> {
  const { data } = await apolloClient.query<ContactQuery>({ query: contact });
  const contactData = data?.contact?.data?.attributes;
  return {
    email: contactData!.email,
    phone: contactData!.phone,
  };
}

export async function getProfiles(): Promise<Profiles> {
  const { data } = await apolloClient.query<ProfilesQuery>({ query: profiles });
  const profileData = data?.contact?.data?.attributes;
  return {
    linkedinUrl: profileData!.linkedinUrl,
    githubUrl: profileData!.githubUrl,
  };
}
