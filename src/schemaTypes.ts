import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']['output']>;
  addVendor?: Maybe<Vendor>;
};


export type MutationAddVendorArgs = {
  vendor: VendorInput;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']['output']>;
  fetchVendor?: Maybe<Vendor>;
  listVendors?: Maybe<Array<Maybe<Vendor>>>;
};


export type QueryFetchVendorArgs = {
  vendorId: Scalars['String']['input'];
};

export type Vendor = {
  __typename?: 'Vendor';
  _empty?: Maybe<Scalars['String']['output']>;
  acceptedPaymentMethods?: Maybe<Scalars['String']['output']>;
  accessibility?: Maybe<Scalars['Boolean']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  boothSize?: Maybe<Scalars['String']['output']>;
  boothType?: Maybe<Scalars['String']['output']>;
  businessType?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  hasBusinessLicense?: Maybe<Scalars['Boolean']['output']>;
  haveLiabilityInsurance?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isCertified?: Maybe<Scalars['Boolean']['output']>;
  isMobile?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  liabilityInsuranceName?: Maybe<Scalars['String']['output']>;
  marketingOpportunities?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  needAccessToPower?: Maybe<Scalars['Boolean']['output']>;
  needAccessToWater?: Maybe<Scalars['Boolean']['output']>;
  needAccessToWiFi?: Maybe<Scalars['Boolean']['output']>;
  needSpecialSetupReqs?: Maybe<Scalars['Boolean']['output']>;
  newVendor?: Maybe<Scalars['Boolean']['output']>;
  numOfYearsVending?: Maybe<Scalars['Int']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  photoURL?: Maybe<Scalars['String']['output']>;
  preferredEventTypes?: Maybe<Scalars['String']['output']>;
  productDescription?: Maybe<Scalars['String']['output']>;
  sizeOfStaff?: Maybe<Scalars['Int']['output']>;
  socialMediaHandles?: Maybe<Scalars['String']['output']>;
  specialSetupRequest?: Maybe<Scalars['Boolean']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  unAvailableDates?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  yearsInBusiness?: Maybe<Scalars['String']['output']>;
  zipcode?: Maybe<Scalars['Int']['output']>;
};

export type VendorInput = {
  acceptedPaymentMethods?: InputMaybe<Scalars['String']['input']>;
  accessibility?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  boothSize?: InputMaybe<Scalars['String']['input']>;
  boothType?: InputMaybe<Scalars['String']['input']>;
  businessType?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hasBusinessLicense?: InputMaybe<Scalars['Boolean']['input']>;
  haveLiabilityInsurance?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isCertified?: InputMaybe<Scalars['Boolean']['input']>;
  isMobile?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  liabilityInsuranceName?: InputMaybe<Scalars['String']['input']>;
  marketingOpportunities?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  needAccessToPower?: InputMaybe<Scalars['Boolean']['input']>;
  needAccessToWater?: InputMaybe<Scalars['Boolean']['input']>;
  needAccessToWiFi?: InputMaybe<Scalars['Boolean']['input']>;
  needSpecialSetupReqs?: InputMaybe<Scalars['Boolean']['input']>;
  newVendor?: InputMaybe<Scalars['Boolean']['input']>;
  numOfYearsVending?: InputMaybe<Scalars['Int']['input']>;
  photoURL?: InputMaybe<Scalars['String']['input']>;
  preferredEventTypes?: InputMaybe<Scalars['String']['input']>;
  productDescription?: InputMaybe<Scalars['String']['input']>;
  sizeOfStaff?: InputMaybe<Scalars['Int']['input']>;
  socialMediaHandles?: InputMaybe<Scalars['String']['input']>;
  specialSetupRequest?: InputMaybe<Scalars['Boolean']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  unAvailableDates?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  yearsInBusiness?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['Int']['input']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Vendor: ResolverTypeWrapper<Vendor>;
  VendorInput: VendorInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  Vendor: Vendor;
  VendorInput: VendorInput;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addVendor?: Resolver<Maybe<ResolversTypes['Vendor']>, ParentType, ContextType, RequireFields<MutationAddVendorArgs, 'vendor'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fetchVendor?: Resolver<Maybe<ResolversTypes['Vendor']>, ParentType, ContextType, RequireFields<QueryFetchVendorArgs, 'vendorId'>>;
  listVendors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Vendor']>>>, ParentType, ContextType>;
}>;

export type VendorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vendor'] = ResolversParentTypes['Vendor']> = ResolversObject<{
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  acceptedPaymentMethods?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accessibility?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  boothSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  boothType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasBusinessLicense?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  haveLiabilityInsurance?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isCertified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isMobile?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  liabilityInsuranceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  marketingOpportunities?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  needAccessToPower?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  needAccessToWater?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  needAccessToWiFi?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  needSpecialSetupReqs?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  newVendor?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  numOfYearsVending?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preferredEventTypes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sizeOfStaff?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  socialMediaHandles?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  specialSetupRequest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unAvailableDates?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  yearsInBusiness?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipcode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Vendor?: VendorResolvers<ContextType>;
}>;

