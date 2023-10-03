import {Resolvers, Vendor} from "../schemaTypes";
import * as db from "../utils/database";

export const collectionName = "vendors";
export const typeDef = `
  extend type Query {
    listVendors: [Vendor]
    fetchVendor(vendorId: String!): Vendor
  }

  extend type Mutation {
    addVendor(vendor: VendorInput!): Vendor
  }

  extend type Vendor {
    id: ID
    name: String
    website: String
    contact: String
    title: String
    email: String
    phone: String
    address: String
    city: String
    state: String
    zipcode: Int
    country: String
    yearsInBusiness: String
    sizeOfStaff: Int
    businessType: String
    numOfYearsVending: Int
    isMobile: Boolean
    newVendor: Boolean
    productDescription: String
    socialMediaHandles: String
    photoURL: String
    hasBusinessLicense: Boolean
    isCertified: Boolean
    boothType: String
    boothSize: String
    needAccessToPower: Boolean
    needAccessToWater: Boolean
    needAccessToWiFi: Boolean
    needSpecialSetupReqs: Boolean
    specialSetupRequest: Boolean
    unAvailableDates: String
    preferredEventTypes: String
    language: String
    accessibility: Boolean
    marketingOpportunities: Boolean
    haveLiabilityInsurance: Boolean
    liabilityInsuranceName: String
    acceptedPaymentMethods: String
  }

  input VendorInput {
    id: ID
    name: String
    website: String
    contact: String
    title: String
    email: String
    address: String
    city: String
    state: String
    zipcode: Int
    country: String
    yearsInBusiness: String
    sizeOfStaff: Int
    businessType: String
    numOfYearsVending: Int
    isMobile: Boolean
    newVendor: Boolean
    productDescription: String
    socialMediaHandles: String
    photoURL: String
    hasBusinessLicense: Boolean
    isCertified: Boolean
    boothType: String
    boothSize: String
    needAccessToPower: Boolean
    needAccessToWater: Boolean
    needAccessToWiFi: Boolean
    needSpecialSetupReqs: Boolean
    specialSetupRequest: Boolean
    unAvailableDates: String
    preferredEventTypes: String
    language: String
    accessibility: Boolean
    marketingOpportunities: Boolean
    haveLiabilityInsurance: Boolean
    liabilityInsuranceName: String
    acceptedPaymentMethods: String
  }
`;

export const resolvers: Resolvers = {
  Query: {
    listVendors: async () => {
      return await db.getList(collectionName) as [Vendor];
    },
    fetchVendor: async (_, args) => {
      return await db.getItem(collectionName, args.vendorId) as Vendor;
    },
  },
  Mutation: {
    addVendor: async (_, args) => {
      return db.createItem(collectionName, args.vendor) as Vendor;
    },
  },
};

