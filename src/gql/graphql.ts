/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  /** Raw JSON value */
  Json: { input: any; output: any; }
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  /** Slate-compatible RichText AST */
  RichTextAST: { input: any; output: any; }
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Entity & Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String']['output'];
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  imageProductFocus: Array<ProductFocus>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  ogImagePage: Array<Page>;
  ogImagePdp: Array<Pdp>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageProductFocusArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductFocusOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFocusWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetOgImagePageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


/** Asset system model */
export type AssetOgImagePdpArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PdpOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PdpWhereInput>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  imageCard?: InputMaybe<CardCreateManyInlineInput>;
  imageEditorial?: InputMaybe<EditorialCreateManyInlineInput>;
  imageHero?: InputMaybe<HeroCreateManyInlineInput>;
  imageProductFocus?: InputMaybe<ProductFocusCreateManyInlineInput>;
  imageRoutine?: InputMaybe<RoutineCreateManyInlineInput>;
  imageTutorial?: InputMaybe<TutorialCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  ogImagePage?: InputMaybe<PageCreateManyInlineInput>;
  ogImagePdp?: InputMaybe<PdpCreateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imageProductFocus_every?: InputMaybe<ProductFocusWhereInput>;
  imageProductFocus_none?: InputMaybe<ProductFocusWhereInput>;
  imageProductFocus_some?: InputMaybe<ProductFocusWhereInput>;
  ogImagePage_every?: InputMaybe<PageWhereInput>;
  ogImagePage_none?: InputMaybe<PageWhereInput>;
  ogImagePage_some?: InputMaybe<PageWhereInput>;
  ogImagePdp_every?: InputMaybe<PdpWhereInput>;
  ogImagePdp_none?: InputMaybe<PdpWhereInput>;
  ogImagePdp_some?: InputMaybe<PdpWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  imageCard?: InputMaybe<CardUpdateManyInlineInput>;
  imageEditorial?: InputMaybe<EditorialUpdateManyInlineInput>;
  imageHero?: InputMaybe<HeroUpdateManyInlineInput>;
  imageProductFocus?: InputMaybe<ProductFocusUpdateManyInlineInput>;
  imageRoutine?: InputMaybe<RoutineUpdateManyInlineInput>;
  imageTutorial?: InputMaybe<TutorialUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  ogImagePage?: InputMaybe<PageUpdateManyInlineInput>;
  ogImagePdp?: InputMaybe<PdpUpdateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imageProductFocus_every?: InputMaybe<ProductFocusWhereInput>;
  imageProductFocus_none?: InputMaybe<ProductFocusWhereInput>;
  imageProductFocus_some?: InputMaybe<ProductFocusWhereInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  ogImagePage_every?: InputMaybe<PageWhereInput>;
  ogImagePage_none?: InputMaybe<PageWhereInput>;
  ogImagePage_some?: InputMaybe<PageWhereInput>;
  ogImagePdp_every?: InputMaybe<PdpWhereInput>;
  ogImagePdp_none?: InputMaybe<PdpWhereInput>;
  ogImagePdp_some?: InputMaybe<PdpWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

export type Card = Entity & {
  __typename?: 'Card';
  cta?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type CardImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CardConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CardWhereUniqueInput;
};

/** A connection to a list of items. */
export type CardConnection = {
  __typename?: 'CardConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CardEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CardCreateInput = {
  cta?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CardCreateManyInlineInput = {
  /** Create and connect multiple existing Card documents */
  create?: InputMaybe<Array<CardCreateInput>>;
};

export type CardCreateOneInlineInput = {
  /** Create and connect one Card document */
  create?: InputMaybe<CardCreateInput>;
};

export type CardCreateWithPositionInput = {
  /** Document to create */
  data: CardCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CardEdge = {
  __typename?: 'CardEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Card;
};

/** Identifies documents */
export type CardManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CardWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  cta_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  cta_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  cta_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cta_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  cta_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  cta_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  cta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  cta_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  cta_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum CardOrderByInput {
  CtaAsc = 'cta_ASC',
  CtaDesc = 'cta_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type CardParent = Editorial;

export type CardParentConnectInput = {
  Editorial?: InputMaybe<EditorialConnectInput>;
};

export type CardParentCreateInput = {
  Editorial?: InputMaybe<EditorialCreateInput>;
};

export type CardParentCreateManyInlineInput = {
  /** Create and connect multiple existing CardParent documents */
  create?: InputMaybe<Array<CardParentCreateInput>>;
};

export type CardParentCreateOneInlineInput = {
  /** Create and connect one CardParent document */
  create?: InputMaybe<CardParentCreateInput>;
};

export type CardParentCreateWithPositionInput = {
  Editorial?: InputMaybe<EditorialCreateWithPositionInput>;
};

export type CardParentUpdateInput = {
  Editorial?: InputMaybe<EditorialUpdateInput>;
};

export type CardParentUpdateManyInlineInput = {
  /** Create and connect multiple CardParent component instances */
  create?: InputMaybe<Array<CardParentCreateWithPositionInput>>;
  /** Delete multiple CardParent documents */
  delete?: InputMaybe<Array<CardParentWhereUniqueInput>>;
  /** Update multiple CardParent component instances */
  update?: InputMaybe<Array<CardParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple CardParent component instances */
  upsert?: InputMaybe<Array<CardParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CardParentUpdateManyWithNestedWhereInput = {
  Editorial?: InputMaybe<EditorialUpdateManyWithNestedWhereInput>;
};

export type CardParentUpdateOneInlineInput = {
  /** Create and connect one CardParent document */
  create?: InputMaybe<CardParentCreateInput>;
  /** Delete currently connected CardParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CardParent document */
  update?: InputMaybe<CardParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CardParent document */
  upsert?: InputMaybe<CardParentUpsertWithNestedWhereUniqueInput>;
};

export type CardParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Editorial?: InputMaybe<EditorialUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type CardParentUpdateWithNestedWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialUpdateWithNestedWhereUniqueInput>;
};

export type CardParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Editorial?: InputMaybe<EditorialUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type CardParentUpsertWithNestedWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialUpsertWithNestedWhereUniqueInput>;
};

export type CardParentWhereInput = {
  Editorial?: InputMaybe<EditorialWhereInput>;
};

export type CardParentWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialWhereUniqueInput>;
};

export type CardUpdateInput = {
  cta?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CardUpdateManyInlineInput = {
  /** Create and connect multiple Card component instances */
  create?: InputMaybe<Array<CardCreateWithPositionInput>>;
  /** Delete multiple Card documents */
  delete?: InputMaybe<Array<CardWhereUniqueInput>>;
  /** Update multiple Card component instances */
  update?: InputMaybe<Array<CardUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Card component instances */
  upsert?: InputMaybe<Array<CardUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CardUpdateManyInput = {
  cta?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CardUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CardUpdateManyInput;
  /** Document search */
  where: CardWhereInput;
};

export type CardUpdateOneInlineInput = {
  /** Create and connect one Card document */
  create?: InputMaybe<CardCreateInput>;
  /** Delete currently connected Card document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Card document */
  update?: InputMaybe<CardUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Card document */
  upsert?: InputMaybe<CardUpsertWithNestedWhereUniqueInput>;
};

export type CardUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<CardUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CardWhereUniqueInput;
};

export type CardUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CardUpdateInput;
  /** Unique document search */
  where: CardWhereUniqueInput;
};

export type CardUpsertInput = {
  /** Create document if it didn't exist */
  create: CardCreateInput;
  /** Update document if it exists */
  update: CardUpdateInput;
};

export type CardUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<CardUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CardWhereUniqueInput;
};

export type CardUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CardUpsertInput;
  /** Unique document search */
  where: CardWhereUniqueInput;
};

/** Identifies documents */
export type CardWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CardWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  cta_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  cta_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  cta_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cta_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  cta_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  cta_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  cta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  cta_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  cta_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Card record uniquely */
export type CardWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cta = Entity & {
  __typename?: 'Cta';
  chapeau?: Maybe<Scalars['String']['output']>;
  cta?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CtaConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CtaWhereUniqueInput;
};

/** A connection to a list of items. */
export type CtaConnection = {
  __typename?: 'CtaConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CtaEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CtaCreateInput = {
  chapeau?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CtaCreateManyInlineInput = {
  /** Create and connect multiple existing Cta documents */
  create?: InputMaybe<Array<CtaCreateInput>>;
};

export type CtaCreateOneInlineInput = {
  /** Create and connect one Cta document */
  create?: InputMaybe<CtaCreateInput>;
};

export type CtaCreateWithPositionInput = {
  /** Document to create */
  data: CtaCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CtaEdge = {
  __typename?: 'CtaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Cta;
};

/** Identifies documents */
export type CtaManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CtaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CtaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CtaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  chapeau?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  chapeau_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  chapeau_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  chapeau_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  chapeau_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  chapeau_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  chapeau_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  chapeau_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  chapeau_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  chapeau_starts_with?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  cta_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  cta_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  cta_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cta_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  cta_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  cta_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  cta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  cta_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  cta_starts_with?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum CtaOrderByInput {
  ChapeauAsc = 'chapeau_ASC',
  ChapeauDesc = 'chapeau_DESC',
  CtaAsc = 'cta_ASC',
  CtaDesc = 'cta_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type CtaParent = Editorial;

export type CtaParentConnectInput = {
  Editorial?: InputMaybe<EditorialConnectInput>;
};

export type CtaParentCreateInput = {
  Editorial?: InputMaybe<EditorialCreateInput>;
};

export type CtaParentCreateManyInlineInput = {
  /** Create and connect multiple existing CtaParent documents */
  create?: InputMaybe<Array<CtaParentCreateInput>>;
};

export type CtaParentCreateOneInlineInput = {
  /** Create and connect one CtaParent document */
  create?: InputMaybe<CtaParentCreateInput>;
};

export type CtaParentCreateWithPositionInput = {
  Editorial?: InputMaybe<EditorialCreateWithPositionInput>;
};

export type CtaParentUpdateInput = {
  Editorial?: InputMaybe<EditorialUpdateInput>;
};

export type CtaParentUpdateManyInlineInput = {
  /** Create and connect multiple CtaParent component instances */
  create?: InputMaybe<Array<CtaParentCreateWithPositionInput>>;
  /** Delete multiple CtaParent documents */
  delete?: InputMaybe<Array<CtaParentWhereUniqueInput>>;
  /** Update multiple CtaParent component instances */
  update?: InputMaybe<Array<CtaParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple CtaParent component instances */
  upsert?: InputMaybe<Array<CtaParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CtaParentUpdateManyWithNestedWhereInput = {
  Editorial?: InputMaybe<EditorialUpdateManyWithNestedWhereInput>;
};

export type CtaParentUpdateOneInlineInput = {
  /** Create and connect one CtaParent document */
  create?: InputMaybe<CtaParentCreateInput>;
  /** Delete currently connected CtaParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CtaParent document */
  update?: InputMaybe<CtaParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CtaParent document */
  upsert?: InputMaybe<CtaParentUpsertWithNestedWhereUniqueInput>;
};

export type CtaParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Editorial?: InputMaybe<EditorialUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type CtaParentUpdateWithNestedWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialUpdateWithNestedWhereUniqueInput>;
};

export type CtaParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Editorial?: InputMaybe<EditorialUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type CtaParentUpsertWithNestedWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialUpsertWithNestedWhereUniqueInput>;
};

export type CtaParentWhereInput = {
  Editorial?: InputMaybe<EditorialWhereInput>;
};

export type CtaParentWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialWhereUniqueInput>;
};

export type CtaUpdateInput = {
  chapeau?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CtaUpdateManyInlineInput = {
  /** Create and connect multiple Cta component instances */
  create?: InputMaybe<Array<CtaCreateWithPositionInput>>;
  /** Delete multiple Cta documents */
  delete?: InputMaybe<Array<CtaWhereUniqueInput>>;
  /** Update multiple Cta component instances */
  update?: InputMaybe<Array<CtaUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Cta component instances */
  upsert?: InputMaybe<Array<CtaUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CtaUpdateManyInput = {
  chapeau?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CtaUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CtaUpdateManyInput;
  /** Document search */
  where: CtaWhereInput;
};

export type CtaUpdateOneInlineInput = {
  /** Create and connect one Cta document */
  create?: InputMaybe<CtaCreateInput>;
  /** Delete currently connected Cta document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Cta document */
  update?: InputMaybe<CtaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Cta document */
  upsert?: InputMaybe<CtaUpsertWithNestedWhereUniqueInput>;
};

export type CtaUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<CtaUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CtaWhereUniqueInput;
};

export type CtaUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CtaUpdateInput;
  /** Unique document search */
  where: CtaWhereUniqueInput;
};

export type CtaUpsertInput = {
  /** Create document if it didn't exist */
  create: CtaCreateInput;
  /** Update document if it exists */
  update: CtaUpdateInput;
};

export type CtaUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<CtaUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CtaWhereUniqueInput;
};

export type CtaUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CtaUpsertInput;
  /** Unique document search */
  where: CtaWhereUniqueInput;
};

/** Identifies documents */
export type CtaWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CtaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CtaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CtaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  chapeau?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  chapeau_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  chapeau_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  chapeau_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  chapeau_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  chapeau_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  chapeau_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  chapeau_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  chapeau_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  chapeau_starts_with?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  cta_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  cta_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  cta_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cta_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  cta_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  cta_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  cta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  cta_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  cta_starts_with?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Cta record uniquely */
export type CtaWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type Editorial = Entity & {
  __typename?: 'Editorial';
  components: Array<EditorialcomponentsUnion>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  /** System stage field */
  stage: Stage;
};


export type EditorialComponentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EditorialImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type EditorialConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: EditorialWhereUniqueInput;
};

/** A connection to a list of items. */
export type EditorialConnection = {
  __typename?: 'EditorialConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<EditorialEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EditorialCreateInput = {
  components?: InputMaybe<EditorialcomponentsUnionCreateManyInlineInput>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
};

export type EditorialCreateManyInlineInput = {
  /** Create and connect multiple existing Editorial documents */
  create?: InputMaybe<Array<EditorialCreateInput>>;
};

export type EditorialCreateOneInlineInput = {
  /** Create and connect one Editorial document */
  create?: InputMaybe<EditorialCreateInput>;
};

export type EditorialCreateWithPositionInput = {
  /** Document to create */
  data: EditorialCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type EditorialEdge = {
  __typename?: 'EditorialEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Editorial;
};

/** Identifies documents */
export type EditorialManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EditorialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EditorialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EditorialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  components_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  components_some?: InputMaybe<EditorialcomponentsUnionWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
};

export enum EditorialOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type EditorialParent = Page;

export type EditorialParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type EditorialParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type EditorialParentCreateManyInlineInput = {
  /** Connect multiple existing EditorialParent documents */
  connect?: InputMaybe<Array<EditorialParentWhereUniqueInput>>;
  /** Create and connect multiple existing EditorialParent documents */
  create?: InputMaybe<Array<EditorialParentCreateInput>>;
};

export type EditorialParentCreateOneInlineInput = {
  /** Connect one existing EditorialParent document */
  connect?: InputMaybe<EditorialParentWhereUniqueInput>;
  /** Create and connect one EditorialParent document */
  create?: InputMaybe<EditorialParentCreateInput>;
};

export type EditorialParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type EditorialParentUpdateManyInlineInput = {
  /** Connect multiple existing EditorialParent documents */
  connect?: InputMaybe<Array<EditorialParentConnectInput>>;
  /** Create and connect multiple EditorialParent documents */
  create?: InputMaybe<Array<EditorialParentCreateInput>>;
  /** Delete multiple EditorialParent documents */
  delete?: InputMaybe<Array<EditorialParentWhereUniqueInput>>;
  /** Disconnect multiple EditorialParent documents */
  disconnect?: InputMaybe<Array<EditorialParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing EditorialParent documents */
  set?: InputMaybe<Array<EditorialParentWhereUniqueInput>>;
  /** Update multiple EditorialParent documents */
  update?: InputMaybe<Array<EditorialParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple EditorialParent documents */
  upsert?: InputMaybe<Array<EditorialParentUpsertWithNestedWhereUniqueInput>>;
};

export type EditorialParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type EditorialParentUpdateOneInlineInput = {
  /** Connect existing EditorialParent document */
  connect?: InputMaybe<EditorialParentWhereUniqueInput>;
  /** Create and connect one EditorialParent document */
  create?: InputMaybe<EditorialParentCreateInput>;
  /** Delete currently connected EditorialParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected EditorialParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single EditorialParent document */
  update?: InputMaybe<EditorialParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EditorialParent document */
  upsert?: InputMaybe<EditorialParentUpsertWithNestedWhereUniqueInput>;
};

export type EditorialParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type EditorialParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type EditorialParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type EditorialParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type EditorialUpdateInput = {
  components?: InputMaybe<EditorialcomponentsUnionUpdateManyInlineInput>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
};

export type EditorialUpdateManyInlineInput = {
  /** Create and connect multiple Editorial component instances */
  create?: InputMaybe<Array<EditorialCreateWithPositionInput>>;
  /** Delete multiple Editorial documents */
  delete?: InputMaybe<Array<EditorialWhereUniqueInput>>;
  /** Update multiple Editorial component instances */
  update?: InputMaybe<Array<EditorialUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Editorial component instances */
  upsert?: InputMaybe<Array<EditorialUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type EditorialUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type EditorialUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EditorialUpdateManyInput;
  /** Document search */
  where: EditorialWhereInput;
};

export type EditorialUpdateOneInlineInput = {
  /** Create and connect one Editorial document */
  create?: InputMaybe<EditorialCreateInput>;
  /** Delete currently connected Editorial document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Editorial document */
  update?: InputMaybe<EditorialUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Editorial document */
  upsert?: InputMaybe<EditorialUpsertWithNestedWhereUniqueInput>;
};

export type EditorialUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<EditorialUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: EditorialWhereUniqueInput;
};

export type EditorialUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EditorialUpdateInput;
  /** Unique document search */
  where: EditorialWhereUniqueInput;
};

export type EditorialUpsertInput = {
  /** Create document if it didn't exist */
  create: EditorialCreateInput;
  /** Update document if it exists */
  update: EditorialUpdateInput;
};

export type EditorialUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<EditorialUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: EditorialWhereUniqueInput;
};

export type EditorialUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EditorialUpsertInput;
  /** Unique document search */
  where: EditorialWhereUniqueInput;
};

/** Identifies documents */
export type EditorialWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EditorialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EditorialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EditorialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  components_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  components_some?: InputMaybe<EditorialcomponentsUnionWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
};

/** References Editorial record uniquely */
export type EditorialWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type EditorialcomponentsUnion = Card | Cta | ProductCard;

export type EditorialcomponentsUnionConnectInput = {
  Card?: InputMaybe<CardConnectInput>;
  Cta?: InputMaybe<CtaConnectInput>;
  ProductCard?: InputMaybe<ProductCardConnectInput>;
};

export type EditorialcomponentsUnionCreateInput = {
  Card?: InputMaybe<CardCreateInput>;
  Cta?: InputMaybe<CtaCreateInput>;
  ProductCard?: InputMaybe<ProductCardCreateInput>;
};

export type EditorialcomponentsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing EditorialcomponentsUnion documents */
  create?: InputMaybe<Array<EditorialcomponentsUnionCreateInput>>;
};

export type EditorialcomponentsUnionCreateOneInlineInput = {
  /** Create and connect one EditorialcomponentsUnion document */
  create?: InputMaybe<EditorialcomponentsUnionCreateInput>;
};

export type EditorialcomponentsUnionCreateWithPositionInput = {
  Card?: InputMaybe<CardCreateWithPositionInput>;
  Cta?: InputMaybe<CtaCreateWithPositionInput>;
  ProductCard?: InputMaybe<ProductCardCreateWithPositionInput>;
};

export type EditorialcomponentsUnionUpdateInput = {
  Card?: InputMaybe<CardUpdateInput>;
  Cta?: InputMaybe<CtaUpdateInput>;
  ProductCard?: InputMaybe<ProductCardUpdateInput>;
};

export type EditorialcomponentsUnionUpdateManyInlineInput = {
  /** Create and connect multiple EditorialcomponentsUnion component instances */
  create?: InputMaybe<Array<EditorialcomponentsUnionCreateWithPositionInput>>;
  /** Delete multiple EditorialcomponentsUnion documents */
  delete?: InputMaybe<Array<EditorialcomponentsUnionWhereUniqueInput>>;
  /** Update multiple EditorialcomponentsUnion component instances */
  update?: InputMaybe<Array<EditorialcomponentsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple EditorialcomponentsUnion component instances */
  upsert?: InputMaybe<Array<EditorialcomponentsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type EditorialcomponentsUnionUpdateManyWithNestedWhereInput = {
  Card?: InputMaybe<CardUpdateManyWithNestedWhereInput>;
  Cta?: InputMaybe<CtaUpdateManyWithNestedWhereInput>;
  ProductCard?: InputMaybe<ProductCardUpdateManyWithNestedWhereInput>;
};

export type EditorialcomponentsUnionUpdateOneInlineInput = {
  /** Create and connect one EditorialcomponentsUnion document */
  create?: InputMaybe<EditorialcomponentsUnionCreateInput>;
  /** Delete currently connected EditorialcomponentsUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single EditorialcomponentsUnion document */
  update?: InputMaybe<EditorialcomponentsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EditorialcomponentsUnion document */
  upsert?: InputMaybe<EditorialcomponentsUnionUpsertWithNestedWhereUniqueInput>;
};

export type EditorialcomponentsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Card?: InputMaybe<CardUpdateWithNestedWhereUniqueAndPositionInput>;
  Cta?: InputMaybe<CtaUpdateWithNestedWhereUniqueAndPositionInput>;
  ProductCard?: InputMaybe<ProductCardUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type EditorialcomponentsUnionUpdateWithNestedWhereUniqueInput = {
  Card?: InputMaybe<CardUpdateWithNestedWhereUniqueInput>;
  Cta?: InputMaybe<CtaUpdateWithNestedWhereUniqueInput>;
  ProductCard?: InputMaybe<ProductCardUpdateWithNestedWhereUniqueInput>;
};

export type EditorialcomponentsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Card?: InputMaybe<CardUpsertWithNestedWhereUniqueAndPositionInput>;
  Cta?: InputMaybe<CtaUpsertWithNestedWhereUniqueAndPositionInput>;
  ProductCard?: InputMaybe<ProductCardUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type EditorialcomponentsUnionUpsertWithNestedWhereUniqueInput = {
  Card?: InputMaybe<CardUpsertWithNestedWhereUniqueInput>;
  Cta?: InputMaybe<CtaUpsertWithNestedWhereUniqueInput>;
  ProductCard?: InputMaybe<ProductCardUpsertWithNestedWhereUniqueInput>;
};

export type EditorialcomponentsUnionWhereInput = {
  Card?: InputMaybe<CardWhereInput>;
  Cta?: InputMaybe<CtaWhereInput>;
  ProductCard?: InputMaybe<ProductCardWhereInput>;
};

export type EditorialcomponentsUnionWhereUniqueInput = {
  Card?: InputMaybe<CardWhereUniqueInput>;
  Cta?: InputMaybe<CtaWhereUniqueInput>;
  ProductCard?: InputMaybe<ProductCardWhereUniqueInput>;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  /** Asset system model */
  Asset = 'Asset',
  Card = 'Card',
  Cta = 'Cta',
  Editorial = 'Editorial',
  Hero = 'Hero',
  Page = 'Page',
  Pdp = 'Pdp',
  ProductCard = 'ProductCard',
  ProductFocus = 'ProductFocus',
  ProductHighlight = 'ProductHighlight',
  ProductList = 'ProductList',
  RelatedProductList = 'RelatedProductList',
  Routine = 'Routine',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  Tutorial = 'Tutorial',
  TutorialItem = 'TutorialItem',
  /** User system model */
  User = 'User'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

export type FederateThisSkincre_Image = {
  __typename?: 'FederateThisSkincre_Image';
  alt?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type FederateThisSkincre_Product = {
  __typename?: 'FederateThisSkincre_Product';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  images?: Maybe<Array<Maybe<FederateThisSkincre_Image>>>;
  ingredients?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price?: Maybe<Scalars['Int']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  stock?: Maybe<Scalars['Int']['output']>;
};

export type FederateThisSkincre_Related = {
  __typename?: 'FederateThisSkincre_related';
  id: Scalars['Int']['output'];
  products?: Maybe<Array<FederateThisSkincre_Product>>;
};

export type Hero = Entity & {
  __typename?: 'Hero';
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
};


export type HeroImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type HeroConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HeroWhereUniqueInput;
};

/** A connection to a list of items. */
export type HeroConnection = {
  __typename?: 'HeroConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HeroEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HeroCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroCreateManyInlineInput = {
  /** Create and connect multiple existing Hero documents */
  create?: InputMaybe<Array<HeroCreateInput>>;
};

export type HeroCreateOneInlineInput = {
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
};

export type HeroCreateWithPositionInput = {
  /** Document to create */
  data: HeroCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type HeroEdge = {
  __typename?: 'HeroEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Hero;
};

/** Identifies documents */
export type HeroManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum HeroOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type HeroParent = Page;

export type HeroParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type HeroParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type HeroParentCreateManyInlineInput = {
  /** Connect multiple existing HeroParent documents */
  connect?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Create and connect multiple existing HeroParent documents */
  create?: InputMaybe<Array<HeroParentCreateInput>>;
};

export type HeroParentCreateOneInlineInput = {
  /** Connect one existing HeroParent document */
  connect?: InputMaybe<HeroParentWhereUniqueInput>;
  /** Create and connect one HeroParent document */
  create?: InputMaybe<HeroParentCreateInput>;
};

export type HeroParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type HeroParentUpdateManyInlineInput = {
  /** Connect multiple existing HeroParent documents */
  connect?: InputMaybe<Array<HeroParentConnectInput>>;
  /** Create and connect multiple HeroParent documents */
  create?: InputMaybe<Array<HeroParentCreateInput>>;
  /** Delete multiple HeroParent documents */
  delete?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Disconnect multiple HeroParent documents */
  disconnect?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing HeroParent documents */
  set?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Update multiple HeroParent documents */
  update?: InputMaybe<Array<HeroParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple HeroParent documents */
  upsert?: InputMaybe<Array<HeroParentUpsertWithNestedWhereUniqueInput>>;
};

export type HeroParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type HeroParentUpdateOneInlineInput = {
  /** Connect existing HeroParent document */
  connect?: InputMaybe<HeroParentWhereUniqueInput>;
  /** Create and connect one HeroParent document */
  create?: InputMaybe<HeroParentCreateInput>;
  /** Delete currently connected HeroParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected HeroParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single HeroParent document */
  update?: InputMaybe<HeroParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HeroParent document */
  upsert?: InputMaybe<HeroParentUpsertWithNestedWhereUniqueInput>;
};

export type HeroParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type HeroParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type HeroParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type HeroParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type HeroUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroUpdateManyInlineInput = {
  /** Create and connect multiple Hero component instances */
  create?: InputMaybe<Array<HeroCreateWithPositionInput>>;
  /** Delete multiple Hero documents */
  delete?: InputMaybe<Array<HeroWhereUniqueInput>>;
  /** Update multiple Hero component instances */
  update?: InputMaybe<Array<HeroUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Hero component instances */
  upsert?: InputMaybe<Array<HeroUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HeroUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HeroUpdateManyInput;
  /** Document search */
  where: HeroWhereInput;
};

export type HeroUpdateOneInlineInput = {
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
  /** Delete currently connected Hero document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Hero document */
  update?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Hero document */
  upsert?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
};

export type HeroUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<HeroUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroWhereUniqueInput;
};

export type HeroUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HeroUpdateInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
};

export type HeroUpsertInput = {
  /** Create document if it didn't exist */
  create: HeroCreateInput;
  /** Update document if it exists */
  update: HeroUpdateInput;
};

export type HeroUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<HeroUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroWhereUniqueInput;
};

export type HeroUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HeroUpsertInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
};

/** Identifies documents */
export type HeroWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Hero record uniquely */
export type HeroWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one pdp */
  createPdp?: Maybe<Pdp>;
  /** Create one productFocus */
  createProductFocus?: Maybe<ProductFocus>;
  /** Create one relatedProductList */
  createRelatedProductList?: Maybe<RelatedProductList>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /**
   * Delete many Pdp documents
   * @deprecated Please use the new paginated many mutation (deleteManyPdpsConnection)
   */
  deleteManyPdps: BatchPayload;
  /** Delete many Pdp documents, return deleted documents */
  deleteManyPdpsConnection: PdpConnection;
  /**
   * Delete many ProductFocus documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductFociConnection)
   */
  deleteManyProductFoci: BatchPayload;
  /** Delete many ProductFocus documents, return deleted documents */
  deleteManyProductFociConnection: ProductFocusConnection;
  /**
   * Delete many RelatedProductList documents
   * @deprecated Please use the new paginated many mutation (deleteManyRelatedProductListsConnection)
   */
  deleteManyRelatedProductLists: BatchPayload;
  /** Delete many RelatedProductList documents, return deleted documents */
  deleteManyRelatedProductListsConnection: RelatedProductListConnection;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete one pdp from _all_ existing stages. Returns deleted document. */
  deletePdp?: Maybe<Pdp>;
  /** Delete one productFocus from _all_ existing stages. Returns deleted document. */
  deleteProductFocus?: Maybe<ProductFocus>;
  /** Delete one relatedProductList from _all_ existing stages. Returns deleted document. */
  deleteRelatedProductList?: Maybe<RelatedProductList>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /**
   * Publish many Pdp documents
   * @deprecated Please use the new paginated many mutation (publishManyPdpsConnection)
   */
  publishManyPdps: BatchPayload;
  /** Publish many Pdp documents */
  publishManyPdpsConnection: PdpConnection;
  /**
   * Publish many ProductFocus documents
   * @deprecated Please use the new paginated many mutation (publishManyProductFociConnection)
   */
  publishManyProductFoci: BatchPayload;
  /** Publish many ProductFocus documents */
  publishManyProductFociConnection: ProductFocusConnection;
  /**
   * Publish many RelatedProductList documents
   * @deprecated Please use the new paginated many mutation (publishManyRelatedProductListsConnection)
   */
  publishManyRelatedProductLists: BatchPayload;
  /** Publish many RelatedProductList documents */
  publishManyRelatedProductListsConnection: RelatedProductListConnection;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Publish one pdp */
  publishPdp?: Maybe<Pdp>;
  /** Publish one productFocus */
  publishProductFocus?: Maybe<ProductFocus>;
  /** Publish one relatedProductList */
  publishRelatedProductList?: Maybe<RelatedProductList>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Schedule to publish one pdp */
  schedulePublishPdp?: Maybe<Pdp>;
  /** Schedule to publish one productFocus */
  schedulePublishProductFocus?: Maybe<ProductFocus>;
  /** Schedule to publish one relatedProductList */
  schedulePublishRelatedProductList?: Maybe<RelatedProductList>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Unpublish one pdp from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPdp?: Maybe<Pdp>;
  /** Unpublish one productFocus from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProductFocus?: Maybe<ProductFocus>;
  /** Unpublish one relatedProductList from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishRelatedProductList?: Maybe<RelatedProductList>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Unpublish many Pdp documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPdpsConnection)
   */
  unpublishManyPdps: BatchPayload;
  /** Find many Pdp documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPdpsConnection: PdpConnection;
  /**
   * Unpublish many ProductFocus documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductFociConnection)
   */
  unpublishManyProductFoci: BatchPayload;
  /** Find many ProductFocus documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductFociConnection: ProductFocusConnection;
  /**
   * Unpublish many RelatedProductList documents
   * @deprecated Please use the new paginated many mutation (unpublishManyRelatedProductListsConnection)
   */
  unpublishManyRelatedProductLists: BatchPayload;
  /** Find many RelatedProductList documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyRelatedProductListsConnection: RelatedProductListConnection;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Unpublish one pdp from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPdp?: Maybe<Pdp>;
  /** Unpublish one productFocus from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProductFocus?: Maybe<ProductFocus>;
  /** Unpublish one relatedProductList from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishRelatedProductList?: Maybe<RelatedProductList>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /**
   * Update many pdps
   * @deprecated Please use the new paginated many mutation (updateManyPdpsConnection)
   */
  updateManyPdps: BatchPayload;
  /** Update many Pdp documents */
  updateManyPdpsConnection: PdpConnection;
  /**
   * Update many productFoci
   * @deprecated Please use the new paginated many mutation (updateManyProductFociConnection)
   */
  updateManyProductFoci: BatchPayload;
  /** Update many ProductFocus documents */
  updateManyProductFociConnection: ProductFocusConnection;
  /**
   * Update many relatedProductLists
   * @deprecated Please use the new paginated many mutation (updateManyRelatedProductListsConnection)
   */
  updateManyRelatedProductLists: BatchPayload;
  /** Update many RelatedProductList documents */
  updateManyRelatedProductListsConnection: RelatedProductListConnection;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one pdp */
  updatePdp?: Maybe<Pdp>;
  /** Update one productFocus */
  updateProductFocus?: Maybe<ProductFocus>;
  /** Update one relatedProductList */
  updateRelatedProductList?: Maybe<RelatedProductList>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Upsert one pdp */
  upsertPdp?: Maybe<Pdp>;
  /** Upsert one productFocus */
  upsertProductFocus?: Maybe<ProductFocus>;
  /** Upsert one relatedProductList */
  upsertRelatedProductList?: Maybe<RelatedProductList>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationCreatePdpArgs = {
  data: PdpCreateInput;
};


export type MutationCreateProductFocusArgs = {
  data: ProductFocusCreateInput;
};


export type MutationCreateRelatedProductListArgs = {
  data: RelatedProductListCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyPagesArgs = {
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyPdpsArgs = {
  where?: InputMaybe<PdpManyWhereInput>;
};


export type MutationDeleteManyPdpsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PdpManyWhereInput>;
};


export type MutationDeleteManyProductFociArgs = {
  where?: InputMaybe<ProductFocusManyWhereInput>;
};


export type MutationDeleteManyProductFociConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFocusManyWhereInput>;
};


export type MutationDeleteManyRelatedProductListsArgs = {
  where?: InputMaybe<RelatedProductListManyWhereInput>;
};


export type MutationDeleteManyRelatedProductListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RelatedProductListManyWhereInput>;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationDeletePdpArgs = {
  where: PdpWhereUniqueInput;
};


export type MutationDeleteProductFocusArgs = {
  where: ProductFocusWhereUniqueInput;
};


export type MutationDeleteRelatedProductListArgs = {
  where: RelatedProductListWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyPagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationPublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationPublishManyPdpsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PdpManyWhereInput>;
};


export type MutationPublishManyPdpsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PdpManyWhereInput>;
};


export type MutationPublishManyProductFociArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ProductFocusManyWhereInput>;
};


export type MutationPublishManyProductFociConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductFocusManyWhereInput>;
};


export type MutationPublishManyRelatedProductListsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<RelatedProductListManyWhereInput>;
};


export type MutationPublishManyRelatedProductListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<RelatedProductListManyWhereInput>;
};


export type MutationPublishPageArgs = {
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationPublishPdpArgs = {
  to?: Array<Stage>;
  where: PdpWhereUniqueInput;
};


export type MutationPublishProductFocusArgs = {
  to?: Array<Stage>;
  where: ProductFocusWhereUniqueInput;
};


export type MutationPublishRelatedProductListArgs = {
  to?: Array<Stage>;
  where: RelatedProductListWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishPageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationSchedulePublishPdpArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PdpWhereUniqueInput;
};


export type MutationSchedulePublishProductFocusArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ProductFocusWhereUniqueInput;
};


export type MutationSchedulePublishRelatedProductListArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: RelatedProductListWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishPageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: PageWhereUniqueInput;
};


export type MutationScheduleUnpublishPdpArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: PdpWhereUniqueInput;
};


export type MutationScheduleUnpublishProductFocusArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: ProductFocusWhereUniqueInput;
};


export type MutationScheduleUnpublishRelatedProductListArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: RelatedProductListWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPdpsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PdpManyWhereInput>;
};


export type MutationUnpublishManyPdpsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PdpManyWhereInput>;
};


export type MutationUnpublishManyProductFociArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ProductFocusManyWhereInput>;
};


export type MutationUnpublishManyProductFociConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProductFocusManyWhereInput>;
};


export type MutationUnpublishManyRelatedProductListsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<RelatedProductListManyWhereInput>;
};


export type MutationUnpublishManyRelatedProductListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<RelatedProductListManyWhereInput>;
};


export type MutationUnpublishPageArgs = {
  from?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationUnpublishPdpArgs = {
  from?: Array<Stage>;
  where: PdpWhereUniqueInput;
};


export type MutationUnpublishProductFocusArgs = {
  from?: Array<Stage>;
  where: ProductFocusWhereUniqueInput;
};


export type MutationUnpublishRelatedProductListArgs = {
  from?: Array<Stage>;
  where: RelatedProductListWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyPdpsArgs = {
  data: PdpUpdateManyInput;
  where?: InputMaybe<PdpManyWhereInput>;
};


export type MutationUpdateManyPdpsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PdpUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PdpManyWhereInput>;
};


export type MutationUpdateManyProductFociArgs = {
  data: ProductFocusUpdateManyInput;
  where?: InputMaybe<ProductFocusManyWhereInput>;
};


export type MutationUpdateManyProductFociConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ProductFocusUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFocusManyWhereInput>;
};


export type MutationUpdateManyRelatedProductListsArgs = {
  data: RelatedProductListUpdateManyInput;
  where?: InputMaybe<RelatedProductListManyWhereInput>;
};


export type MutationUpdateManyRelatedProductListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: RelatedProductListUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RelatedProductListManyWhereInput>;
};


export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpdatePdpArgs = {
  data: PdpUpdateInput;
  where: PdpWhereUniqueInput;
};


export type MutationUpdateProductFocusArgs = {
  data: ProductFocusUpdateInput;
  where: ProductFocusWhereUniqueInput;
};


export type MutationUpdateRelatedProductListArgs = {
  data: RelatedProductListUpdateInput;
  where: RelatedProductListWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
};


export type MutationUpsertPdpArgs = {
  upsert: PdpUpsertInput;
  where: PdpWhereUniqueInput;
};


export type MutationUpsertProductFocusArgs = {
  upsert: ProductFocusUpsertInput;
  where: ProductFocusWhereUniqueInput;
};


export type MutationUpsertRelatedProductListArgs = {
  upsert: RelatedProductListUpsertInput;
  where: RelatedProductListWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

export type Page = Entity & Node & {
  __typename?: 'Page';
  components: Array<PagecomponentsUnion>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** List of Page versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  ogImage?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PageComponentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PageHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PageOgImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageCreateInput = {
  components?: InputMaybe<PagecomponentsUnionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  ogImage?: InputMaybe<AssetCreateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  components_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  components_some?: InputMaybe<PagecomponentsUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  ogImage?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PageUpdateInput = {
  components?: InputMaybe<PagecomponentsUnionUpdateManyInlineInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  ogImage?: InputMaybe<AssetUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
  /** Delete multiple Page documents */
  delete?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: InputMaybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: InputMaybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Page document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Page document */
  update?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  components_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  components_some?: InputMaybe<PagecomponentsUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  ogImage?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PagecomponentsUnion = Editorial | Hero | ProductHighlight | Routine;

export type PagecomponentsUnionConnectInput = {
  Editorial?: InputMaybe<EditorialConnectInput>;
  Hero?: InputMaybe<HeroConnectInput>;
  ProductHighlight?: InputMaybe<ProductHighlightConnectInput>;
  Routine?: InputMaybe<RoutineConnectInput>;
};

export type PagecomponentsUnionCreateInput = {
  Editorial?: InputMaybe<EditorialCreateInput>;
  Hero?: InputMaybe<HeroCreateInput>;
  ProductHighlight?: InputMaybe<ProductHighlightCreateInput>;
  Routine?: InputMaybe<RoutineCreateInput>;
};

export type PagecomponentsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing PagecomponentsUnion documents */
  create?: InputMaybe<Array<PagecomponentsUnionCreateInput>>;
};

export type PagecomponentsUnionCreateOneInlineInput = {
  /** Create and connect one PagecomponentsUnion document */
  create?: InputMaybe<PagecomponentsUnionCreateInput>;
};

export type PagecomponentsUnionCreateWithPositionInput = {
  Editorial?: InputMaybe<EditorialCreateWithPositionInput>;
  Hero?: InputMaybe<HeroCreateWithPositionInput>;
  ProductHighlight?: InputMaybe<ProductHighlightCreateWithPositionInput>;
  Routine?: InputMaybe<RoutineCreateWithPositionInput>;
};

export type PagecomponentsUnionUpdateInput = {
  Editorial?: InputMaybe<EditorialUpdateInput>;
  Hero?: InputMaybe<HeroUpdateInput>;
  ProductHighlight?: InputMaybe<ProductHighlightUpdateInput>;
  Routine?: InputMaybe<RoutineUpdateInput>;
};

export type PagecomponentsUnionUpdateManyInlineInput = {
  /** Create and connect multiple PagecomponentsUnion component instances */
  create?: InputMaybe<Array<PagecomponentsUnionCreateWithPositionInput>>;
  /** Delete multiple PagecomponentsUnion documents */
  delete?: InputMaybe<Array<PagecomponentsUnionWhereUniqueInput>>;
  /** Update multiple PagecomponentsUnion component instances */
  update?: InputMaybe<Array<PagecomponentsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PagecomponentsUnion component instances */
  upsert?: InputMaybe<Array<PagecomponentsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PagecomponentsUnionUpdateManyWithNestedWhereInput = {
  Editorial?: InputMaybe<EditorialUpdateManyWithNestedWhereInput>;
  Hero?: InputMaybe<HeroUpdateManyWithNestedWhereInput>;
  ProductHighlight?: InputMaybe<ProductHighlightUpdateManyWithNestedWhereInput>;
  Routine?: InputMaybe<RoutineUpdateManyWithNestedWhereInput>;
};

export type PagecomponentsUnionUpdateOneInlineInput = {
  /** Create and connect one PagecomponentsUnion document */
  create?: InputMaybe<PagecomponentsUnionCreateInput>;
  /** Delete currently connected PagecomponentsUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PagecomponentsUnion document */
  update?: InputMaybe<PagecomponentsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PagecomponentsUnion document */
  upsert?: InputMaybe<PagecomponentsUnionUpsertWithNestedWhereUniqueInput>;
};

export type PagecomponentsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Editorial?: InputMaybe<EditorialUpdateWithNestedWhereUniqueAndPositionInput>;
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueAndPositionInput>;
  ProductHighlight?: InputMaybe<ProductHighlightUpdateWithNestedWhereUniqueAndPositionInput>;
  Routine?: InputMaybe<RoutineUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type PagecomponentsUnionUpdateWithNestedWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialUpdateWithNestedWhereUniqueInput>;
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  ProductHighlight?: InputMaybe<ProductHighlightUpdateWithNestedWhereUniqueInput>;
  Routine?: InputMaybe<RoutineUpdateWithNestedWhereUniqueInput>;
};

export type PagecomponentsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Editorial?: InputMaybe<EditorialUpsertWithNestedWhereUniqueAndPositionInput>;
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueAndPositionInput>;
  ProductHighlight?: InputMaybe<ProductHighlightUpsertWithNestedWhereUniqueAndPositionInput>;
  Routine?: InputMaybe<RoutineUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type PagecomponentsUnionUpsertWithNestedWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialUpsertWithNestedWhereUniqueInput>;
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
  ProductHighlight?: InputMaybe<ProductHighlightUpsertWithNestedWhereUniqueInput>;
  Routine?: InputMaybe<RoutineUpsertWithNestedWhereUniqueInput>;
};

export type PagecomponentsUnionWhereInput = {
  Editorial?: InputMaybe<EditorialWhereInput>;
  Hero?: InputMaybe<HeroWhereInput>;
  ProductHighlight?: InputMaybe<ProductHighlightWhereInput>;
  Routine?: InputMaybe<RoutineWhereInput>;
};

export type PagecomponentsUnionWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialWhereUniqueInput>;
  Hero?: InputMaybe<HeroWhereUniqueInput>;
  ProductHighlight?: InputMaybe<ProductHighlightWhereUniqueInput>;
  Routine?: InputMaybe<RoutineWhereUniqueInput>;
};

export type Pdp = Entity & Node & {
  __typename?: 'Pdp';
  components: Array<PdpcomponentsUnion>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<Pdp>;
  /** List of Pdp versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  ogImage?: Maybe<Asset>;
  product?: Maybe<FederateThisSkincre_Product>;
  productId?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PdpComponentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PdpCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PdpDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PdpHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PdpOgImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PdpPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PdpScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PdpUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PdpConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PdpWhereUniqueInput;
};

/** A connection to a list of items. */
export type PdpConnection = {
  __typename?: 'PdpConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PdpEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PdpCreateInput = {
  components?: InputMaybe<PdpcomponentsUnionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  ogImage?: InputMaybe<AssetCreateOneInlineInput>;
  productId?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PdpCreateManyInlineInput = {
  /** Connect multiple existing Pdp documents */
  connect?: InputMaybe<Array<PdpWhereUniqueInput>>;
  /** Create and connect multiple existing Pdp documents */
  create?: InputMaybe<Array<PdpCreateInput>>;
};

export type PdpCreateOneInlineInput = {
  /** Connect one existing Pdp document */
  connect?: InputMaybe<PdpWhereUniqueInput>;
  /** Create and connect one Pdp document */
  create?: InputMaybe<PdpCreateInput>;
};

/** An edge in a connection. */
export type PdpEdge = {
  __typename?: 'PdpEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Pdp;
};

/** Identifies documents */
export type PdpManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PdpWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PdpWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PdpWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  components_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  components_some?: InputMaybe<PdpcomponentsUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<PdpWhereStageInput>;
  documentInStages_none?: InputMaybe<PdpWhereStageInput>;
  documentInStages_some?: InputMaybe<PdpWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  ogImage?: InputMaybe<AssetWhereInput>;
  productId?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  productId_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  productId_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  productId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  productId_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  productId_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  productId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  productId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  productId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  productId_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PdpOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProductIdAsc = 'productId_ASC',
  ProductIdDesc = 'productId_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PdpUpdateInput = {
  components?: InputMaybe<PdpcomponentsUnionUpdateManyInlineInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  ogImage?: InputMaybe<AssetUpdateOneInlineInput>;
  productId?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PdpUpdateManyInlineInput = {
  /** Connect multiple existing Pdp documents */
  connect?: InputMaybe<Array<PdpConnectInput>>;
  /** Create and connect multiple Pdp documents */
  create?: InputMaybe<Array<PdpCreateInput>>;
  /** Delete multiple Pdp documents */
  delete?: InputMaybe<Array<PdpWhereUniqueInput>>;
  /** Disconnect multiple Pdp documents */
  disconnect?: InputMaybe<Array<PdpWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Pdp documents */
  set?: InputMaybe<Array<PdpWhereUniqueInput>>;
  /** Update multiple Pdp documents */
  update?: InputMaybe<Array<PdpUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Pdp documents */
  upsert?: InputMaybe<Array<PdpUpsertWithNestedWhereUniqueInput>>;
};

export type PdpUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PdpUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PdpUpdateManyInput;
  /** Document search */
  where: PdpWhereInput;
};

export type PdpUpdateOneInlineInput = {
  /** Connect existing Pdp document */
  connect?: InputMaybe<PdpWhereUniqueInput>;
  /** Create and connect one Pdp document */
  create?: InputMaybe<PdpCreateInput>;
  /** Delete currently connected Pdp document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Pdp document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Pdp document */
  update?: InputMaybe<PdpUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Pdp document */
  upsert?: InputMaybe<PdpUpsertWithNestedWhereUniqueInput>;
};

export type PdpUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PdpUpdateInput;
  /** Unique document search */
  where: PdpWhereUniqueInput;
};

export type PdpUpsertInput = {
  /** Create document if it didn't exist */
  create: PdpCreateInput;
  /** Update document if it exists */
  update: PdpUpdateInput;
};

export type PdpUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PdpUpsertInput;
  /** Unique document search */
  where: PdpWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PdpWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PdpWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PdpWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PdpWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PdpWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  components_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  components_some?: InputMaybe<PdpcomponentsUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<PdpWhereStageInput>;
  documentInStages_none?: InputMaybe<PdpWhereStageInput>;
  documentInStages_some?: InputMaybe<PdpWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  ogImage?: InputMaybe<AssetWhereInput>;
  productId?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  productId_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  productId_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  productId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  productId_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  productId_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  productId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  productId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  productId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  productId_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PdpWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PdpWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PdpWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PdpWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PdpWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Pdp record uniquely */
export type PdpWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PdpcomponentsUnion = ProductList | Routine | Tutorial;

export type PdpcomponentsUnionConnectInput = {
  ProductList?: InputMaybe<ProductListConnectInput>;
  Routine?: InputMaybe<RoutineConnectInput>;
  Tutorial?: InputMaybe<TutorialConnectInput>;
};

export type PdpcomponentsUnionCreateInput = {
  ProductList?: InputMaybe<ProductListCreateInput>;
  Routine?: InputMaybe<RoutineCreateInput>;
  Tutorial?: InputMaybe<TutorialCreateInput>;
};

export type PdpcomponentsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing PdpcomponentsUnion documents */
  create?: InputMaybe<Array<PdpcomponentsUnionCreateInput>>;
};

export type PdpcomponentsUnionCreateOneInlineInput = {
  /** Create and connect one PdpcomponentsUnion document */
  create?: InputMaybe<PdpcomponentsUnionCreateInput>;
};

export type PdpcomponentsUnionCreateWithPositionInput = {
  ProductList?: InputMaybe<ProductListCreateWithPositionInput>;
  Routine?: InputMaybe<RoutineCreateWithPositionInput>;
  Tutorial?: InputMaybe<TutorialCreateWithPositionInput>;
};

export type PdpcomponentsUnionUpdateInput = {
  ProductList?: InputMaybe<ProductListUpdateInput>;
  Routine?: InputMaybe<RoutineUpdateInput>;
  Tutorial?: InputMaybe<TutorialUpdateInput>;
};

export type PdpcomponentsUnionUpdateManyInlineInput = {
  /** Create and connect multiple PdpcomponentsUnion component instances */
  create?: InputMaybe<Array<PdpcomponentsUnionCreateWithPositionInput>>;
  /** Delete multiple PdpcomponentsUnion documents */
  delete?: InputMaybe<Array<PdpcomponentsUnionWhereUniqueInput>>;
  /** Update multiple PdpcomponentsUnion component instances */
  update?: InputMaybe<Array<PdpcomponentsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PdpcomponentsUnion component instances */
  upsert?: InputMaybe<Array<PdpcomponentsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PdpcomponentsUnionUpdateManyWithNestedWhereInput = {
  ProductList?: InputMaybe<ProductListUpdateManyWithNestedWhereInput>;
  Routine?: InputMaybe<RoutineUpdateManyWithNestedWhereInput>;
  Tutorial?: InputMaybe<TutorialUpdateManyWithNestedWhereInput>;
};

export type PdpcomponentsUnionUpdateOneInlineInput = {
  /** Create and connect one PdpcomponentsUnion document */
  create?: InputMaybe<PdpcomponentsUnionCreateInput>;
  /** Delete currently connected PdpcomponentsUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PdpcomponentsUnion document */
  update?: InputMaybe<PdpcomponentsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PdpcomponentsUnion document */
  upsert?: InputMaybe<PdpcomponentsUnionUpsertWithNestedWhereUniqueInput>;
};

export type PdpcomponentsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  ProductList?: InputMaybe<ProductListUpdateWithNestedWhereUniqueAndPositionInput>;
  Routine?: InputMaybe<RoutineUpdateWithNestedWhereUniqueAndPositionInput>;
  Tutorial?: InputMaybe<TutorialUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type PdpcomponentsUnionUpdateWithNestedWhereUniqueInput = {
  ProductList?: InputMaybe<ProductListUpdateWithNestedWhereUniqueInput>;
  Routine?: InputMaybe<RoutineUpdateWithNestedWhereUniqueInput>;
  Tutorial?: InputMaybe<TutorialUpdateWithNestedWhereUniqueInput>;
};

export type PdpcomponentsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  ProductList?: InputMaybe<ProductListUpsertWithNestedWhereUniqueAndPositionInput>;
  Routine?: InputMaybe<RoutineUpsertWithNestedWhereUniqueAndPositionInput>;
  Tutorial?: InputMaybe<TutorialUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type PdpcomponentsUnionUpsertWithNestedWhereUniqueInput = {
  ProductList?: InputMaybe<ProductListUpsertWithNestedWhereUniqueInput>;
  Routine?: InputMaybe<RoutineUpsertWithNestedWhereUniqueInput>;
  Tutorial?: InputMaybe<TutorialUpsertWithNestedWhereUniqueInput>;
};

export type PdpcomponentsUnionWhereInput = {
  ProductList?: InputMaybe<ProductListWhereInput>;
  Routine?: InputMaybe<RoutineWhereInput>;
  Tutorial?: InputMaybe<TutorialWhereInput>;
};

export type PdpcomponentsUnionWhereUniqueInput = {
  ProductList?: InputMaybe<ProductListWhereUniqueInput>;
  Routine?: InputMaybe<RoutineWhereUniqueInput>;
  Tutorial?: InputMaybe<TutorialWhereUniqueInput>;
};

export type ProductCard = Entity & {
  __typename?: 'ProductCard';
  cta?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  product?: Maybe<Scalars['Json']['output']>;
  /** System stage field */
  stage: Stage;
};

export type ProductCardConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductCardWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductCardConnection = {
  __typename?: 'ProductCardConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductCardEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductCardCreateInput = {
  cta?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['Json']['input']>;
};

export type ProductCardCreateManyInlineInput = {
  /** Create and connect multiple existing ProductCard documents */
  create?: InputMaybe<Array<ProductCardCreateInput>>;
};

export type ProductCardCreateOneInlineInput = {
  /** Create and connect one ProductCard document */
  create?: InputMaybe<ProductCardCreateInput>;
};

export type ProductCardCreateWithPositionInput = {
  /** Document to create */
  data: ProductCardCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ProductCardEdge = {
  __typename?: 'ProductCardEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductCard;
};

/** Identifies documents */
export type ProductCardManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductCardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductCardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductCardWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  cta_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  cta_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  cta_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cta_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  cta_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  cta_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  cta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  cta_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  cta_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given json path. */
  product_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  product_value_recursive?: InputMaybe<Scalars['Json']['input']>;
};

export enum ProductCardOrderByInput {
  CtaAsc = 'cta_ASC',
  CtaDesc = 'cta_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type ProductCardParent = Editorial;

export type ProductCardParentConnectInput = {
  Editorial?: InputMaybe<EditorialConnectInput>;
};

export type ProductCardParentCreateInput = {
  Editorial?: InputMaybe<EditorialCreateInput>;
};

export type ProductCardParentCreateManyInlineInput = {
  /** Create and connect multiple existing ProductCardParent documents */
  create?: InputMaybe<Array<ProductCardParentCreateInput>>;
};

export type ProductCardParentCreateOneInlineInput = {
  /** Create and connect one ProductCardParent document */
  create?: InputMaybe<ProductCardParentCreateInput>;
};

export type ProductCardParentCreateWithPositionInput = {
  Editorial?: InputMaybe<EditorialCreateWithPositionInput>;
};

export type ProductCardParentUpdateInput = {
  Editorial?: InputMaybe<EditorialUpdateInput>;
};

export type ProductCardParentUpdateManyInlineInput = {
  /** Create and connect multiple ProductCardParent component instances */
  create?: InputMaybe<Array<ProductCardParentCreateWithPositionInput>>;
  /** Delete multiple ProductCardParent documents */
  delete?: InputMaybe<Array<ProductCardParentWhereUniqueInput>>;
  /** Update multiple ProductCardParent component instances */
  update?: InputMaybe<Array<ProductCardParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ProductCardParent component instances */
  upsert?: InputMaybe<Array<ProductCardParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ProductCardParentUpdateManyWithNestedWhereInput = {
  Editorial?: InputMaybe<EditorialUpdateManyWithNestedWhereInput>;
};

export type ProductCardParentUpdateOneInlineInput = {
  /** Create and connect one ProductCardParent document */
  create?: InputMaybe<ProductCardParentCreateInput>;
  /** Delete currently connected ProductCardParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProductCardParent document */
  update?: InputMaybe<ProductCardParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductCardParent document */
  upsert?: InputMaybe<ProductCardParentUpsertWithNestedWhereUniqueInput>;
};

export type ProductCardParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Editorial?: InputMaybe<EditorialUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ProductCardParentUpdateWithNestedWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialUpdateWithNestedWhereUniqueInput>;
};

export type ProductCardParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Editorial?: InputMaybe<EditorialUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ProductCardParentUpsertWithNestedWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialUpsertWithNestedWhereUniqueInput>;
};

export type ProductCardParentWhereInput = {
  Editorial?: InputMaybe<EditorialWhereInput>;
};

export type ProductCardParentWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialWhereUniqueInput>;
};

export type ProductCardUpdateInput = {
  cta?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['Json']['input']>;
};

export type ProductCardUpdateManyInlineInput = {
  /** Create and connect multiple ProductCard component instances */
  create?: InputMaybe<Array<ProductCardCreateWithPositionInput>>;
  /** Delete multiple ProductCard documents */
  delete?: InputMaybe<Array<ProductCardWhereUniqueInput>>;
  /** Update multiple ProductCard component instances */
  update?: InputMaybe<Array<ProductCardUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ProductCard component instances */
  upsert?: InputMaybe<Array<ProductCardUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ProductCardUpdateManyInput = {
  cta?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['Json']['input']>;
};

export type ProductCardUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductCardUpdateManyInput;
  /** Document search */
  where: ProductCardWhereInput;
};

export type ProductCardUpdateOneInlineInput = {
  /** Create and connect one ProductCard document */
  create?: InputMaybe<ProductCardCreateInput>;
  /** Delete currently connected ProductCard document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProductCard document */
  update?: InputMaybe<ProductCardUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductCard document */
  upsert?: InputMaybe<ProductCardUpsertWithNestedWhereUniqueInput>;
};

export type ProductCardUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ProductCardUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProductCardWhereUniqueInput;
};

export type ProductCardUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductCardUpdateInput;
  /** Unique document search */
  where: ProductCardWhereUniqueInput;
};

export type ProductCardUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductCardCreateInput;
  /** Update document if it exists */
  update: ProductCardUpdateInput;
};

export type ProductCardUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ProductCardUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProductCardWhereUniqueInput;
};

export type ProductCardUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductCardUpsertInput;
  /** Unique document search */
  where: ProductCardWhereUniqueInput;
};

/** Identifies documents */
export type ProductCardWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductCardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductCardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductCardWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  cta_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  cta_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  cta_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cta_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  cta_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  cta_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  cta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  cta_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  cta_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given json path. */
  product_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  product_value_recursive?: InputMaybe<Scalars['Json']['input']>;
};

/** References ProductCard record uniquely */
export type ProductCardWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductFocus = Entity & Node & {
  __typename?: 'ProductFocus';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  cta?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ProductFocus>;
  /** List of ProductFocus versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  product?: Maybe<FederateThisSkincre_Product>;
  productId?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  url?: Maybe<Scalars['String']['output']>;
};


export type ProductFocusCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductFocusDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ProductFocusHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type ProductFocusImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductFocusPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductFocusScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ProductFocusUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductFocusConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductFocusWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductFocusConnection = {
  __typename?: 'ProductFocusConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductFocusEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductFocusCreateInput = {
  clpwv0kz4fus501unbh610x98?: InputMaybe<ProductHighlightCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  productId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ProductFocusCreateManyInlineInput = {
  /** Connect multiple existing ProductFocus documents */
  connect?: InputMaybe<Array<ProductFocusWhereUniqueInput>>;
  /** Create and connect multiple existing ProductFocus documents */
  create?: InputMaybe<Array<ProductFocusCreateInput>>;
};

export type ProductFocusCreateOneInlineInput = {
  /** Connect one existing ProductFocus document */
  connect?: InputMaybe<ProductFocusWhereUniqueInput>;
  /** Create and connect one ProductFocus document */
  create?: InputMaybe<ProductFocusCreateInput>;
};

/** An edge in a connection. */
export type ProductFocusEdge = {
  __typename?: 'ProductFocusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductFocus;
};

/** Identifies documents */
export type ProductFocusManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductFocusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductFocusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductFocusWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  cta?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  cta_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  cta_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  cta_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cta_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  cta_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  cta_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  cta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  cta_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  cta_starts_with?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<ProductFocusWhereStageInput>;
  documentInStages_none?: InputMaybe<ProductFocusWhereStageInput>;
  documentInStages_some?: InputMaybe<ProductFocusWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  productId?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  productId_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  productId_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  productId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  productId_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  productId_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  productId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  productId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  productId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  productId_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum ProductFocusOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CtaAsc = 'cta_ASC',
  CtaDesc = 'cta_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProductIdAsc = 'productId_ASC',
  ProductIdDesc = 'productId_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type ProductFocusUpdateInput = {
  clpwv0kz4fus501unbh610x98?: InputMaybe<ProductHighlightUpdateManyInlineInput>;
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  productId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ProductFocusUpdateManyInlineInput = {
  /** Connect multiple existing ProductFocus documents */
  connect?: InputMaybe<Array<ProductFocusConnectInput>>;
  /** Create and connect multiple ProductFocus documents */
  create?: InputMaybe<Array<ProductFocusCreateInput>>;
  /** Delete multiple ProductFocus documents */
  delete?: InputMaybe<Array<ProductFocusWhereUniqueInput>>;
  /** Disconnect multiple ProductFocus documents */
  disconnect?: InputMaybe<Array<ProductFocusWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProductFocus documents */
  set?: InputMaybe<Array<ProductFocusWhereUniqueInput>>;
  /** Update multiple ProductFocus documents */
  update?: InputMaybe<Array<ProductFocusUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProductFocus documents */
  upsert?: InputMaybe<Array<ProductFocusUpsertWithNestedWhereUniqueInput>>;
};

export type ProductFocusUpdateManyInput = {
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ProductFocusUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductFocusUpdateManyInput;
  /** Document search */
  where: ProductFocusWhereInput;
};

export type ProductFocusUpdateOneInlineInput = {
  /** Connect existing ProductFocus document */
  connect?: InputMaybe<ProductFocusWhereUniqueInput>;
  /** Create and connect one ProductFocus document */
  create?: InputMaybe<ProductFocusCreateInput>;
  /** Delete currently connected ProductFocus document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ProductFocus document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProductFocus document */
  update?: InputMaybe<ProductFocusUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductFocus document */
  upsert?: InputMaybe<ProductFocusUpsertWithNestedWhereUniqueInput>;
};

export type ProductFocusUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductFocusUpdateInput;
  /** Unique document search */
  where: ProductFocusWhereUniqueInput;
};

export type ProductFocusUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductFocusCreateInput;
  /** Update document if it exists */
  update: ProductFocusUpdateInput;
};

export type ProductFocusUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductFocusUpsertInput;
  /** Unique document search */
  where: ProductFocusWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProductFocusWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ProductFocusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductFocusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductFocusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductFocusWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  cta?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  cta_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  cta_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  cta_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cta_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  cta_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  cta_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  cta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  cta_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  cta_starts_with?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<ProductFocusWhereStageInput>;
  documentInStages_none?: InputMaybe<ProductFocusWhereStageInput>;
  documentInStages_some?: InputMaybe<ProductFocusWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  productId?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  productId_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  productId_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  productId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  productId_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  productId_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  productId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  productId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  productId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  productId_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProductFocusWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductFocusWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductFocusWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductFocusWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProductFocusWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References ProductFocus record uniquely */
export type ProductFocusWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductHighlight = Entity & {
  __typename?: 'ProductHighlight';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  productFocus?: Maybe<ProductFocus>;
  /** System stage field */
  stage: Stage;
};


export type ProductHighlightProductFocusArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductHighlightConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductHighlightWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductHighlightConnection = {
  __typename?: 'ProductHighlightConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductHighlightEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductHighlightCreateInput = {
  productFocus?: InputMaybe<ProductFocusCreateOneInlineInput>;
};

export type ProductHighlightCreateManyInlineInput = {
  /** Create and connect multiple existing ProductHighlight documents */
  create?: InputMaybe<Array<ProductHighlightCreateInput>>;
};

export type ProductHighlightCreateOneInlineInput = {
  /** Create and connect one ProductHighlight document */
  create?: InputMaybe<ProductHighlightCreateInput>;
};

export type ProductHighlightCreateWithPositionInput = {
  /** Document to create */
  data: ProductHighlightCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ProductHighlightEdge = {
  __typename?: 'ProductHighlightEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductHighlight;
};

/** Identifies documents */
export type ProductHighlightManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductHighlightWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductHighlightWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductHighlightWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  productFocus?: InputMaybe<ProductFocusWhereInput>;
};

export enum ProductHighlightOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type ProductHighlightParent = Page;

export type ProductHighlightParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type ProductHighlightParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type ProductHighlightParentCreateManyInlineInput = {
  /** Connect multiple existing ProductHighlightParent documents */
  connect?: InputMaybe<Array<ProductHighlightParentWhereUniqueInput>>;
  /** Create and connect multiple existing ProductHighlightParent documents */
  create?: InputMaybe<Array<ProductHighlightParentCreateInput>>;
};

export type ProductHighlightParentCreateOneInlineInput = {
  /** Connect one existing ProductHighlightParent document */
  connect?: InputMaybe<ProductHighlightParentWhereUniqueInput>;
  /** Create and connect one ProductHighlightParent document */
  create?: InputMaybe<ProductHighlightParentCreateInput>;
};

export type ProductHighlightParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type ProductHighlightParentUpdateManyInlineInput = {
  /** Connect multiple existing ProductHighlightParent documents */
  connect?: InputMaybe<Array<ProductHighlightParentConnectInput>>;
  /** Create and connect multiple ProductHighlightParent documents */
  create?: InputMaybe<Array<ProductHighlightParentCreateInput>>;
  /** Delete multiple ProductHighlightParent documents */
  delete?: InputMaybe<Array<ProductHighlightParentWhereUniqueInput>>;
  /** Disconnect multiple ProductHighlightParent documents */
  disconnect?: InputMaybe<Array<ProductHighlightParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProductHighlightParent documents */
  set?: InputMaybe<Array<ProductHighlightParentWhereUniqueInput>>;
  /** Update multiple ProductHighlightParent documents */
  update?: InputMaybe<Array<ProductHighlightParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProductHighlightParent documents */
  upsert?: InputMaybe<Array<ProductHighlightParentUpsertWithNestedWhereUniqueInput>>;
};

export type ProductHighlightParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type ProductHighlightParentUpdateOneInlineInput = {
  /** Connect existing ProductHighlightParent document */
  connect?: InputMaybe<ProductHighlightParentWhereUniqueInput>;
  /** Create and connect one ProductHighlightParent document */
  create?: InputMaybe<ProductHighlightParentCreateInput>;
  /** Delete currently connected ProductHighlightParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ProductHighlightParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProductHighlightParent document */
  update?: InputMaybe<ProductHighlightParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductHighlightParent document */
  upsert?: InputMaybe<ProductHighlightParentUpsertWithNestedWhereUniqueInput>;
};

export type ProductHighlightParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type ProductHighlightParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type ProductHighlightParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type ProductHighlightParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type ProductHighlightUpdateInput = {
  productFocus?: InputMaybe<ProductFocusUpdateOneInlineInput>;
};

export type ProductHighlightUpdateManyInlineInput = {
  /** Create and connect multiple ProductHighlight component instances */
  create?: InputMaybe<Array<ProductHighlightCreateWithPositionInput>>;
  /** Delete multiple ProductHighlight documents */
  delete?: InputMaybe<Array<ProductHighlightWhereUniqueInput>>;
  /** Update multiple ProductHighlight component instances */
  update?: InputMaybe<Array<ProductHighlightUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ProductHighlight component instances */
  upsert?: InputMaybe<Array<ProductHighlightUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ProductHighlightUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type ProductHighlightUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductHighlightUpdateManyInput;
  /** Document search */
  where: ProductHighlightWhereInput;
};

export type ProductHighlightUpdateOneInlineInput = {
  /** Create and connect one ProductHighlight document */
  create?: InputMaybe<ProductHighlightCreateInput>;
  /** Delete currently connected ProductHighlight document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProductHighlight document */
  update?: InputMaybe<ProductHighlightUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductHighlight document */
  upsert?: InputMaybe<ProductHighlightUpsertWithNestedWhereUniqueInput>;
};

export type ProductHighlightUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ProductHighlightUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProductHighlightWhereUniqueInput;
};

export type ProductHighlightUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductHighlightUpdateInput;
  /** Unique document search */
  where: ProductHighlightWhereUniqueInput;
};

export type ProductHighlightUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductHighlightCreateInput;
  /** Update document if it exists */
  update: ProductHighlightUpdateInput;
};

export type ProductHighlightUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ProductHighlightUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProductHighlightWhereUniqueInput;
};

export type ProductHighlightUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductHighlightUpsertInput;
  /** Unique document search */
  where: ProductHighlightWhereUniqueInput;
};

/** Identifies documents */
export type ProductHighlightWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductHighlightWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductHighlightWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductHighlightWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  productFocus?: InputMaybe<ProductFocusWhereInput>;
};

/** References ProductHighlight record uniquely */
export type ProductHighlightWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductList = Entity & {
  __typename?: 'ProductList';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  relatedProductList?: Maybe<RelatedProductList>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
};


export type ProductListRelatedProductListArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductListWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductListConnection = {
  __typename?: 'ProductListConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductListCreateInput = {
  relatedProductList?: InputMaybe<RelatedProductListCreateOneInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProductListCreateManyInlineInput = {
  /** Create and connect multiple existing ProductList documents */
  create?: InputMaybe<Array<ProductListCreateInput>>;
};

export type ProductListCreateOneInlineInput = {
  /** Create and connect one ProductList document */
  create?: InputMaybe<ProductListCreateInput>;
};

export type ProductListCreateWithPositionInput = {
  /** Document to create */
  data: ProductListCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ProductListEdge = {
  __typename?: 'ProductListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductList;
};

/** Identifies documents */
export type ProductListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  relatedProductList?: InputMaybe<RelatedProductListWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum ProductListOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ProductListParent = Pdp;

export type ProductListParentConnectInput = {
  Pdp?: InputMaybe<PdpConnectInput>;
};

export type ProductListParentCreateInput = {
  Pdp?: InputMaybe<PdpCreateInput>;
};

export type ProductListParentCreateManyInlineInput = {
  /** Connect multiple existing ProductListParent documents */
  connect?: InputMaybe<Array<ProductListParentWhereUniqueInput>>;
  /** Create and connect multiple existing ProductListParent documents */
  create?: InputMaybe<Array<ProductListParentCreateInput>>;
};

export type ProductListParentCreateOneInlineInput = {
  /** Connect one existing ProductListParent document */
  connect?: InputMaybe<ProductListParentWhereUniqueInput>;
  /** Create and connect one ProductListParent document */
  create?: InputMaybe<ProductListParentCreateInput>;
};

export type ProductListParentUpdateInput = {
  Pdp?: InputMaybe<PdpUpdateInput>;
};

export type ProductListParentUpdateManyInlineInput = {
  /** Connect multiple existing ProductListParent documents */
  connect?: InputMaybe<Array<ProductListParentConnectInput>>;
  /** Create and connect multiple ProductListParent documents */
  create?: InputMaybe<Array<ProductListParentCreateInput>>;
  /** Delete multiple ProductListParent documents */
  delete?: InputMaybe<Array<ProductListParentWhereUniqueInput>>;
  /** Disconnect multiple ProductListParent documents */
  disconnect?: InputMaybe<Array<ProductListParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProductListParent documents */
  set?: InputMaybe<Array<ProductListParentWhereUniqueInput>>;
  /** Update multiple ProductListParent documents */
  update?: InputMaybe<Array<ProductListParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProductListParent documents */
  upsert?: InputMaybe<Array<ProductListParentUpsertWithNestedWhereUniqueInput>>;
};

export type ProductListParentUpdateManyWithNestedWhereInput = {
  Pdp?: InputMaybe<PdpUpdateManyWithNestedWhereInput>;
};

export type ProductListParentUpdateOneInlineInput = {
  /** Connect existing ProductListParent document */
  connect?: InputMaybe<ProductListParentWhereUniqueInput>;
  /** Create and connect one ProductListParent document */
  create?: InputMaybe<ProductListParentCreateInput>;
  /** Delete currently connected ProductListParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ProductListParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProductListParent document */
  update?: InputMaybe<ProductListParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductListParent document */
  upsert?: InputMaybe<ProductListParentUpsertWithNestedWhereUniqueInput>;
};

export type ProductListParentUpdateWithNestedWhereUniqueInput = {
  Pdp?: InputMaybe<PdpUpdateWithNestedWhereUniqueInput>;
};

export type ProductListParentUpsertWithNestedWhereUniqueInput = {
  Pdp?: InputMaybe<PdpUpsertWithNestedWhereUniqueInput>;
};

export type ProductListParentWhereInput = {
  Pdp?: InputMaybe<PdpWhereInput>;
};

export type ProductListParentWhereUniqueInput = {
  Pdp?: InputMaybe<PdpWhereUniqueInput>;
};

export type ProductListUpdateInput = {
  relatedProductList?: InputMaybe<RelatedProductListUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProductListUpdateManyInlineInput = {
  /** Create and connect multiple ProductList component instances */
  create?: InputMaybe<Array<ProductListCreateWithPositionInput>>;
  /** Delete multiple ProductList documents */
  delete?: InputMaybe<Array<ProductListWhereUniqueInput>>;
  /** Update multiple ProductList component instances */
  update?: InputMaybe<Array<ProductListUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ProductList component instances */
  upsert?: InputMaybe<Array<ProductListUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ProductListUpdateManyInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProductListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductListUpdateManyInput;
  /** Document search */
  where: ProductListWhereInput;
};

export type ProductListUpdateOneInlineInput = {
  /** Create and connect one ProductList document */
  create?: InputMaybe<ProductListCreateInput>;
  /** Delete currently connected ProductList document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProductList document */
  update?: InputMaybe<ProductListUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductList document */
  upsert?: InputMaybe<ProductListUpsertWithNestedWhereUniqueInput>;
};

export type ProductListUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ProductListUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProductListWhereUniqueInput;
};

export type ProductListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductListUpdateInput;
  /** Unique document search */
  where: ProductListWhereUniqueInput;
};

export type ProductListUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductListCreateInput;
  /** Update document if it exists */
  update: ProductListUpdateInput;
};

export type ProductListUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ProductListUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProductListWhereUniqueInput;
};

export type ProductListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductListUpsertInput;
  /** Unique document search */
  where: ProductListWhereUniqueInput;
};

/** Identifies documents */
export type ProductListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  relatedProductList?: InputMaybe<RelatedProductListWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References ProductList record uniquely */
export type ProductListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve a single pdp */
  pdp?: Maybe<Pdp>;
  /** Retrieve document version */
  pdpVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pdps */
  pdps: Array<Pdp>;
  /** Retrieve multiple pdps using the Relay connection interface */
  pdpsConnection: PdpConnection;
  /** Retrieve multiple productFoci */
  productFoci: Array<ProductFocus>;
  /** Retrieve multiple productFoci using the Relay connection interface */
  productFociConnection: ProductFocusConnection;
  /** Retrieve a single productFocus */
  productFocus?: Maybe<ProductFocus>;
  /** Retrieve document version */
  productFocusVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single relatedProductList */
  relatedProductList?: Maybe<RelatedProductList>;
  /** Retrieve document version */
  relatedProductListVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple relatedProductLists */
  relatedProductLists: Array<RelatedProductList>;
  /** Retrieve multiple relatedProductLists using the Relay connection interface */
  relatedProductListsConnection: RelatedProductListConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryEntitiesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageWhereUniqueInput;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPdpArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PdpWhereUniqueInput;
};


export type QueryPdpVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPdpsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PdpOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PdpWhereInput>;
};


export type QueryPdpsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PdpOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PdpWhereInput>;
};


export type QueryProductFociArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductFocusOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProductFocusWhereInput>;
};


export type QueryProductFociConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductFocusOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProductFocusWhereInput>;
};


export type QueryProductFocusArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProductFocusWhereUniqueInput;
};


export type QueryProductFocusVersionArgs = {
  where: VersionWhereInput;
};


export type QueryRelatedProductListArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: RelatedProductListWhereUniqueInput;
};


export type QueryRelatedProductListVersionArgs = {
  where: VersionWhereInput;
};


export type QueryRelatedProductListsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<RelatedProductListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<RelatedProductListWhereInput>;
};


export type QueryRelatedProductListsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<RelatedProductListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<RelatedProductListWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

export type RelatedProductList = Entity & Node & {
  __typename?: 'RelatedProductList';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<RelatedProductList>;
  /** List of RelatedProductList versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  relatedProductId?: Maybe<Scalars['String']['output']>;
  relatedProducts?: Maybe<FederateThisSkincre_Related>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type RelatedProductListCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type RelatedProductListDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type RelatedProductListHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type RelatedProductListPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type RelatedProductListScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type RelatedProductListUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type RelatedProductListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: RelatedProductListWhereUniqueInput;
};

/** A connection to a list of items. */
export type RelatedProductListConnection = {
  __typename?: 'RelatedProductListConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<RelatedProductListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type RelatedProductListCreateInput = {
  clq3rspn8aq0901tef0us1bb7?: InputMaybe<ProductListCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  relatedProductId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RelatedProductListCreateManyInlineInput = {
  /** Connect multiple existing RelatedProductList documents */
  connect?: InputMaybe<Array<RelatedProductListWhereUniqueInput>>;
  /** Create and connect multiple existing RelatedProductList documents */
  create?: InputMaybe<Array<RelatedProductListCreateInput>>;
};

export type RelatedProductListCreateOneInlineInput = {
  /** Connect one existing RelatedProductList document */
  connect?: InputMaybe<RelatedProductListWhereUniqueInput>;
  /** Create and connect one RelatedProductList document */
  create?: InputMaybe<RelatedProductListCreateInput>;
};

/** An edge in a connection. */
export type RelatedProductListEdge = {
  __typename?: 'RelatedProductListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: RelatedProductList;
};

/** Identifies documents */
export type RelatedProductListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RelatedProductListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RelatedProductListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RelatedProductListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<RelatedProductListWhereStageInput>;
  documentInStages_none?: InputMaybe<RelatedProductListWhereStageInput>;
  documentInStages_some?: InputMaybe<RelatedProductListWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  relatedProductId?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  relatedProductId_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  relatedProductId_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  relatedProductId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  relatedProductId_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  relatedProductId_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  relatedProductId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  relatedProductId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  relatedProductId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  relatedProductId_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum RelatedProductListOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RelatedProductIdAsc = 'relatedProductId_ASC',
  RelatedProductIdDesc = 'relatedProductId_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type RelatedProductListUpdateInput = {
  clq3rspn8aq0901tef0us1bb7?: InputMaybe<ProductListUpdateManyInlineInput>;
  relatedProductId?: InputMaybe<Scalars['String']['input']>;
};

export type RelatedProductListUpdateManyInlineInput = {
  /** Connect multiple existing RelatedProductList documents */
  connect?: InputMaybe<Array<RelatedProductListConnectInput>>;
  /** Create and connect multiple RelatedProductList documents */
  create?: InputMaybe<Array<RelatedProductListCreateInput>>;
  /** Delete multiple RelatedProductList documents */
  delete?: InputMaybe<Array<RelatedProductListWhereUniqueInput>>;
  /** Disconnect multiple RelatedProductList documents */
  disconnect?: InputMaybe<Array<RelatedProductListWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing RelatedProductList documents */
  set?: InputMaybe<Array<RelatedProductListWhereUniqueInput>>;
  /** Update multiple RelatedProductList documents */
  update?: InputMaybe<Array<RelatedProductListUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple RelatedProductList documents */
  upsert?: InputMaybe<Array<RelatedProductListUpsertWithNestedWhereUniqueInput>>;
};

export type RelatedProductListUpdateManyInput = {
  relatedProductId?: InputMaybe<Scalars['String']['input']>;
};

export type RelatedProductListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: RelatedProductListUpdateManyInput;
  /** Document search */
  where: RelatedProductListWhereInput;
};

export type RelatedProductListUpdateOneInlineInput = {
  /** Connect existing RelatedProductList document */
  connect?: InputMaybe<RelatedProductListWhereUniqueInput>;
  /** Create and connect one RelatedProductList document */
  create?: InputMaybe<RelatedProductListCreateInput>;
  /** Delete currently connected RelatedProductList document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected RelatedProductList document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single RelatedProductList document */
  update?: InputMaybe<RelatedProductListUpdateWithNestedWhereUniqueInput>;
  /** Upsert single RelatedProductList document */
  upsert?: InputMaybe<RelatedProductListUpsertWithNestedWhereUniqueInput>;
};

export type RelatedProductListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: RelatedProductListUpdateInput;
  /** Unique document search */
  where: RelatedProductListWhereUniqueInput;
};

export type RelatedProductListUpsertInput = {
  /** Create document if it didn't exist */
  create: RelatedProductListCreateInput;
  /** Update document if it exists */
  update: RelatedProductListUpdateInput;
};

export type RelatedProductListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: RelatedProductListUpsertInput;
  /** Unique document search */
  where: RelatedProductListWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type RelatedProductListWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type RelatedProductListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RelatedProductListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RelatedProductListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RelatedProductListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<RelatedProductListWhereStageInput>;
  documentInStages_none?: InputMaybe<RelatedProductListWhereStageInput>;
  documentInStages_some?: InputMaybe<RelatedProductListWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  relatedProductId?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  relatedProductId_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  relatedProductId_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  relatedProductId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  relatedProductId_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  relatedProductId_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  relatedProductId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  relatedProductId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  relatedProductId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  relatedProductId_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type RelatedProductListWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RelatedProductListWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RelatedProductListWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RelatedProductListWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<RelatedProductListWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References RelatedProductList record uniquely */
export type RelatedProductListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

export type Routine = Entity & {
  __typename?: 'Routine';
  chapeau?: Maybe<Scalars['String']['output']>;
  cta?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type RoutineImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type RoutineConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: RoutineWhereUniqueInput;
};

/** A connection to a list of items. */
export type RoutineConnection = {
  __typename?: 'RoutineConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<RoutineEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type RoutineCreateInput = {
  chapeau?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type RoutineCreateManyInlineInput = {
  /** Create and connect multiple existing Routine documents */
  create?: InputMaybe<Array<RoutineCreateInput>>;
};

export type RoutineCreateOneInlineInput = {
  /** Create and connect one Routine document */
  create?: InputMaybe<RoutineCreateInput>;
};

export type RoutineCreateWithPositionInput = {
  /** Document to create */
  data: RoutineCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type RoutineEdge = {
  __typename?: 'RoutineEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Routine;
};

/** Identifies documents */
export type RoutineManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RoutineWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RoutineWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RoutineWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  chapeau?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  chapeau_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  chapeau_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  chapeau_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  chapeau_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  chapeau_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  chapeau_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  chapeau_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  chapeau_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  chapeau_starts_with?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  cta_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  cta_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  cta_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cta_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  cta_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  cta_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  cta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  cta_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  cta_starts_with?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum RoutineOrderByInput {
  ChapeauAsc = 'chapeau_ASC',
  ChapeauDesc = 'chapeau_DESC',
  CtaAsc = 'cta_ASC',
  CtaDesc = 'cta_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type RoutineParent = Page | Pdp;

export type RoutineParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
  Pdp?: InputMaybe<PdpConnectInput>;
};

export type RoutineParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
  Pdp?: InputMaybe<PdpCreateInput>;
};

export type RoutineParentCreateManyInlineInput = {
  /** Connect multiple existing RoutineParent documents */
  connect?: InputMaybe<Array<RoutineParentWhereUniqueInput>>;
  /** Create and connect multiple existing RoutineParent documents */
  create?: InputMaybe<Array<RoutineParentCreateInput>>;
};

export type RoutineParentCreateOneInlineInput = {
  /** Connect one existing RoutineParent document */
  connect?: InputMaybe<RoutineParentWhereUniqueInput>;
  /** Create and connect one RoutineParent document */
  create?: InputMaybe<RoutineParentCreateInput>;
};

export type RoutineParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
  Pdp?: InputMaybe<PdpUpdateInput>;
};

export type RoutineParentUpdateManyInlineInput = {
  /** Connect multiple existing RoutineParent documents */
  connect?: InputMaybe<Array<RoutineParentConnectInput>>;
  /** Create and connect multiple RoutineParent documents */
  create?: InputMaybe<Array<RoutineParentCreateInput>>;
  /** Delete multiple RoutineParent documents */
  delete?: InputMaybe<Array<RoutineParentWhereUniqueInput>>;
  /** Disconnect multiple RoutineParent documents */
  disconnect?: InputMaybe<Array<RoutineParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing RoutineParent documents */
  set?: InputMaybe<Array<RoutineParentWhereUniqueInput>>;
  /** Update multiple RoutineParent documents */
  update?: InputMaybe<Array<RoutineParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple RoutineParent documents */
  upsert?: InputMaybe<Array<RoutineParentUpsertWithNestedWhereUniqueInput>>;
};

export type RoutineParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
  Pdp?: InputMaybe<PdpUpdateManyWithNestedWhereInput>;
};

export type RoutineParentUpdateOneInlineInput = {
  /** Connect existing RoutineParent document */
  connect?: InputMaybe<RoutineParentWhereUniqueInput>;
  /** Create and connect one RoutineParent document */
  create?: InputMaybe<RoutineParentCreateInput>;
  /** Delete currently connected RoutineParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected RoutineParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single RoutineParent document */
  update?: InputMaybe<RoutineParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single RoutineParent document */
  upsert?: InputMaybe<RoutineParentUpsertWithNestedWhereUniqueInput>;
};

export type RoutineParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  Pdp?: InputMaybe<PdpUpdateWithNestedWhereUniqueInput>;
};

export type RoutineParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
  Pdp?: InputMaybe<PdpUpsertWithNestedWhereUniqueInput>;
};

export type RoutineParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
  Pdp?: InputMaybe<PdpWhereInput>;
};

export type RoutineParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
  Pdp?: InputMaybe<PdpWhereUniqueInput>;
};

export type RoutineUpdateInput = {
  chapeau?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type RoutineUpdateManyInlineInput = {
  /** Create and connect multiple Routine component instances */
  create?: InputMaybe<Array<RoutineCreateWithPositionInput>>;
  /** Delete multiple Routine documents */
  delete?: InputMaybe<Array<RoutineWhereUniqueInput>>;
  /** Update multiple Routine component instances */
  update?: InputMaybe<Array<RoutineUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Routine component instances */
  upsert?: InputMaybe<Array<RoutineUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type RoutineUpdateManyInput = {
  chapeau?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type RoutineUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: RoutineUpdateManyInput;
  /** Document search */
  where: RoutineWhereInput;
};

export type RoutineUpdateOneInlineInput = {
  /** Create and connect one Routine document */
  create?: InputMaybe<RoutineCreateInput>;
  /** Delete currently connected Routine document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Routine document */
  update?: InputMaybe<RoutineUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Routine document */
  upsert?: InputMaybe<RoutineUpsertWithNestedWhereUniqueInput>;
};

export type RoutineUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<RoutineUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: RoutineWhereUniqueInput;
};

export type RoutineUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: RoutineUpdateInput;
  /** Unique document search */
  where: RoutineWhereUniqueInput;
};

export type RoutineUpsertInput = {
  /** Create document if it didn't exist */
  create: RoutineCreateInput;
  /** Update document if it exists */
  update: RoutineUpdateInput;
};

export type RoutineUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<RoutineUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: RoutineWhereUniqueInput;
};

export type RoutineUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: RoutineUpsertInput;
  /** Unique document search */
  where: RoutineWhereUniqueInput;
};

/** Identifies documents */
export type RoutineWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RoutineWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RoutineWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RoutineWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  chapeau?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  chapeau_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  chapeau_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  chapeau_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  chapeau_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  chapeau_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  chapeau_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  chapeau_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  chapeau_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  chapeau_starts_with?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  cta_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  cta_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  cta_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cta_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  cta_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  cta_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  cta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  cta_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  cta_starts_with?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Routine record uniquely */
export type RoutineWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Page | Pdp | ProductFocus | RelatedProductList;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export enum Theme {
  Dark = 'dark',
  Light = 'light'
}

export type Tutorial = Entity & {
  __typename?: 'Tutorial';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  items: Array<TutorialItem>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
};


export type TutorialImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TutorialItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TutorialItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TutorialItemWhereInput>;
};

export type TutorialConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TutorialWhereUniqueInput;
};

/** A connection to a list of items. */
export type TutorialConnection = {
  __typename?: 'TutorialConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TutorialEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TutorialCreateInput = {
  image?: InputMaybe<AssetCreateOneInlineInput>;
  items?: InputMaybe<TutorialItemCreateManyInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialCreateManyInlineInput = {
  /** Create and connect multiple existing Tutorial documents */
  create?: InputMaybe<Array<TutorialCreateInput>>;
};

export type TutorialCreateOneInlineInput = {
  /** Create and connect one Tutorial document */
  create?: InputMaybe<TutorialCreateInput>;
};

export type TutorialCreateWithPositionInput = {
  /** Document to create */
  data: TutorialCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TutorialEdge = {
  __typename?: 'TutorialEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Tutorial;
};

export type TutorialItem = Entity & {
  __typename?: 'TutorialItem';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
  text?: Maybe<Scalars['String']['output']>;
};

export type TutorialItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TutorialItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type TutorialItemConnection = {
  __typename?: 'TutorialItemConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TutorialItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TutorialItemCreateInput = {
  text?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialItemCreateManyInlineInput = {
  /** Create and connect multiple existing TutorialItem documents */
  create?: InputMaybe<Array<TutorialItemCreateInput>>;
};

export type TutorialItemCreateOneInlineInput = {
  /** Create and connect one TutorialItem document */
  create?: InputMaybe<TutorialItemCreateInput>;
};

export type TutorialItemCreateWithPositionInput = {
  /** Document to create */
  data: TutorialItemCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TutorialItemEdge = {
  __typename?: 'TutorialItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TutorialItem;
};

/** Identifies documents */
export type TutorialItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TutorialItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TutorialItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TutorialItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  text_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  text_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  text_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  text_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  text_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  text_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum TutorialItemOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

export type TutorialItemParent = Tutorial;

export type TutorialItemParentConnectInput = {
  Tutorial?: InputMaybe<TutorialConnectInput>;
};

export type TutorialItemParentCreateInput = {
  Tutorial?: InputMaybe<TutorialCreateInput>;
};

export type TutorialItemParentCreateManyInlineInput = {
  /** Create and connect multiple existing TutorialItemParent documents */
  create?: InputMaybe<Array<TutorialItemParentCreateInput>>;
};

export type TutorialItemParentCreateOneInlineInput = {
  /** Create and connect one TutorialItemParent document */
  create?: InputMaybe<TutorialItemParentCreateInput>;
};

export type TutorialItemParentCreateWithPositionInput = {
  Tutorial?: InputMaybe<TutorialCreateWithPositionInput>;
};

export type TutorialItemParentUpdateInput = {
  Tutorial?: InputMaybe<TutorialUpdateInput>;
};

export type TutorialItemParentUpdateManyInlineInput = {
  /** Create and connect multiple TutorialItemParent component instances */
  create?: InputMaybe<Array<TutorialItemParentCreateWithPositionInput>>;
  /** Delete multiple TutorialItemParent documents */
  delete?: InputMaybe<Array<TutorialItemParentWhereUniqueInput>>;
  /** Update multiple TutorialItemParent component instances */
  update?: InputMaybe<Array<TutorialItemParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TutorialItemParent component instances */
  upsert?: InputMaybe<Array<TutorialItemParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TutorialItemParentUpdateManyWithNestedWhereInput = {
  Tutorial?: InputMaybe<TutorialUpdateManyWithNestedWhereInput>;
};

export type TutorialItemParentUpdateOneInlineInput = {
  /** Create and connect one TutorialItemParent document */
  create?: InputMaybe<TutorialItemParentCreateInput>;
  /** Delete currently connected TutorialItemParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TutorialItemParent document */
  update?: InputMaybe<TutorialItemParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TutorialItemParent document */
  upsert?: InputMaybe<TutorialItemParentUpsertWithNestedWhereUniqueInput>;
};

export type TutorialItemParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Tutorial?: InputMaybe<TutorialUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type TutorialItemParentUpdateWithNestedWhereUniqueInput = {
  Tutorial?: InputMaybe<TutorialUpdateWithNestedWhereUniqueInput>;
};

export type TutorialItemParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Tutorial?: InputMaybe<TutorialUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type TutorialItemParentUpsertWithNestedWhereUniqueInput = {
  Tutorial?: InputMaybe<TutorialUpsertWithNestedWhereUniqueInput>;
};

export type TutorialItemParentWhereInput = {
  Tutorial?: InputMaybe<TutorialWhereInput>;
};

export type TutorialItemParentWhereUniqueInput = {
  Tutorial?: InputMaybe<TutorialWhereUniqueInput>;
};

export type TutorialItemUpdateInput = {
  text?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialItemUpdateManyInlineInput = {
  /** Create and connect multiple TutorialItem component instances */
  create?: InputMaybe<Array<TutorialItemCreateWithPositionInput>>;
  /** Delete multiple TutorialItem documents */
  delete?: InputMaybe<Array<TutorialItemWhereUniqueInput>>;
  /** Update multiple TutorialItem component instances */
  update?: InputMaybe<Array<TutorialItemUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TutorialItem component instances */
  upsert?: InputMaybe<Array<TutorialItemUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TutorialItemUpdateManyInput = {
  text?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TutorialItemUpdateManyInput;
  /** Document search */
  where: TutorialItemWhereInput;
};

export type TutorialItemUpdateOneInlineInput = {
  /** Create and connect one TutorialItem document */
  create?: InputMaybe<TutorialItemCreateInput>;
  /** Delete currently connected TutorialItem document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TutorialItem document */
  update?: InputMaybe<TutorialItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TutorialItem document */
  upsert?: InputMaybe<TutorialItemUpsertWithNestedWhereUniqueInput>;
};

export type TutorialItemUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TutorialItemUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TutorialItemWhereUniqueInput;
};

export type TutorialItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TutorialItemUpdateInput;
  /** Unique document search */
  where: TutorialItemWhereUniqueInput;
};

export type TutorialItemUpsertInput = {
  /** Create document if it didn't exist */
  create: TutorialItemCreateInput;
  /** Update document if it exists */
  update: TutorialItemUpdateInput;
};

export type TutorialItemUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TutorialItemUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TutorialItemWhereUniqueInput;
};

export type TutorialItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TutorialItemUpsertInput;
  /** Unique document search */
  where: TutorialItemWhereUniqueInput;
};

/** Identifies documents */
export type TutorialItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TutorialItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TutorialItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TutorialItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  text_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  text_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  text_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  text_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  text_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  text_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References TutorialItem record uniquely */
export type TutorialItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Identifies documents */
export type TutorialManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TutorialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TutorialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TutorialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  items_every?: InputMaybe<TutorialItemWhereInput>;
  items_none?: InputMaybe<TutorialItemWhereInput>;
  items_some?: InputMaybe<TutorialItemWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum TutorialOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TutorialParent = Pdp;

export type TutorialParentConnectInput = {
  Pdp?: InputMaybe<PdpConnectInput>;
};

export type TutorialParentCreateInput = {
  Pdp?: InputMaybe<PdpCreateInput>;
};

export type TutorialParentCreateManyInlineInput = {
  /** Connect multiple existing TutorialParent documents */
  connect?: InputMaybe<Array<TutorialParentWhereUniqueInput>>;
  /** Create and connect multiple existing TutorialParent documents */
  create?: InputMaybe<Array<TutorialParentCreateInput>>;
};

export type TutorialParentCreateOneInlineInput = {
  /** Connect one existing TutorialParent document */
  connect?: InputMaybe<TutorialParentWhereUniqueInput>;
  /** Create and connect one TutorialParent document */
  create?: InputMaybe<TutorialParentCreateInput>;
};

export type TutorialParentUpdateInput = {
  Pdp?: InputMaybe<PdpUpdateInput>;
};

export type TutorialParentUpdateManyInlineInput = {
  /** Connect multiple existing TutorialParent documents */
  connect?: InputMaybe<Array<TutorialParentConnectInput>>;
  /** Create and connect multiple TutorialParent documents */
  create?: InputMaybe<Array<TutorialParentCreateInput>>;
  /** Delete multiple TutorialParent documents */
  delete?: InputMaybe<Array<TutorialParentWhereUniqueInput>>;
  /** Disconnect multiple TutorialParent documents */
  disconnect?: InputMaybe<Array<TutorialParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TutorialParent documents */
  set?: InputMaybe<Array<TutorialParentWhereUniqueInput>>;
  /** Update multiple TutorialParent documents */
  update?: InputMaybe<Array<TutorialParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TutorialParent documents */
  upsert?: InputMaybe<Array<TutorialParentUpsertWithNestedWhereUniqueInput>>;
};

export type TutorialParentUpdateManyWithNestedWhereInput = {
  Pdp?: InputMaybe<PdpUpdateManyWithNestedWhereInput>;
};

export type TutorialParentUpdateOneInlineInput = {
  /** Connect existing TutorialParent document */
  connect?: InputMaybe<TutorialParentWhereUniqueInput>;
  /** Create and connect one TutorialParent document */
  create?: InputMaybe<TutorialParentCreateInput>;
  /** Delete currently connected TutorialParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected TutorialParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TutorialParent document */
  update?: InputMaybe<TutorialParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TutorialParent document */
  upsert?: InputMaybe<TutorialParentUpsertWithNestedWhereUniqueInput>;
};

export type TutorialParentUpdateWithNestedWhereUniqueInput = {
  Pdp?: InputMaybe<PdpUpdateWithNestedWhereUniqueInput>;
};

export type TutorialParentUpsertWithNestedWhereUniqueInput = {
  Pdp?: InputMaybe<PdpUpsertWithNestedWhereUniqueInput>;
};

export type TutorialParentWhereInput = {
  Pdp?: InputMaybe<PdpWhereInput>;
};

export type TutorialParentWhereUniqueInput = {
  Pdp?: InputMaybe<PdpWhereUniqueInput>;
};

export type TutorialUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  items?: InputMaybe<TutorialItemUpdateManyInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialUpdateManyInlineInput = {
  /** Create and connect multiple Tutorial component instances */
  create?: InputMaybe<Array<TutorialCreateWithPositionInput>>;
  /** Delete multiple Tutorial documents */
  delete?: InputMaybe<Array<TutorialWhereUniqueInput>>;
  /** Update multiple Tutorial component instances */
  update?: InputMaybe<Array<TutorialUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Tutorial component instances */
  upsert?: InputMaybe<Array<TutorialUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TutorialUpdateManyInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TutorialUpdateManyInput;
  /** Document search */
  where: TutorialWhereInput;
};

export type TutorialUpdateOneInlineInput = {
  /** Create and connect one Tutorial document */
  create?: InputMaybe<TutorialCreateInput>;
  /** Delete currently connected Tutorial document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Tutorial document */
  update?: InputMaybe<TutorialUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Tutorial document */
  upsert?: InputMaybe<TutorialUpsertWithNestedWhereUniqueInput>;
};

export type TutorialUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TutorialUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TutorialWhereUniqueInput;
};

export type TutorialUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TutorialUpdateInput;
  /** Unique document search */
  where: TutorialWhereUniqueInput;
};

export type TutorialUpsertInput = {
  /** Create document if it didn't exist */
  create: TutorialCreateInput;
  /** Update document if it exists */
  update: TutorialUpdateInput;
};

export type TutorialUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TutorialUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TutorialWhereUniqueInput;
};

export type TutorialUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TutorialUpsertInput;
  /** Unique document search */
  where: TutorialWhereUniqueInput;
};

/** Identifies documents */
export type TutorialWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TutorialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TutorialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TutorialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  items_every?: InputMaybe<TutorialItemWhereInput>;
  items_none?: InputMaybe<TutorialItemWhereInput>;
  items_some?: InputMaybe<TutorialItemWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Tutorial record uniquely */
export type TutorialWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity & Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum Variant {
  ImageLeft = 'imageLeft',
  ImageRight = 'imageRight'
}

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type PageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  stage?: Stage;
}>;


export type PageQuery = { __typename?: 'Query', page?: { __typename: 'Page', id: string, slug?: string | null, title?: string | null, description?: string | null, ogImage?: { __typename?: 'Asset', url: string } | null, components: Array<{ __typename: 'Editorial', id: string, image?: { __typename?: 'Asset', url: string } | null, components: Array<{ __typename: 'Card', id: string, cta?: string | null, title?: string | null, url?: string | null, image?: { __typename?: 'Asset', url: string } | null } | { __typename: 'Cta', id: string, chapeau?: string | null, cta?: string | null, description?: string | null, title?: string | null, url?: string | null } | { __typename?: 'ProductCard' }> } | { __typename: 'Hero', id: string, description?: string | null, title?: string | null, image?: { __typename?: 'Asset', url: string } | null } | { __typename: 'ProductHighlight', id: string, productFocus?: { __typename: 'ProductFocus', id: string, cta?: string | null, description?: string | null, productId?: string | null, title?: string | null, url?: string | null, image?: { __typename?: 'Asset', url: string } | null, product?: { __typename?: 'FederateThisSkincre_Product', description?: string | null, id: number, ingredients?: string | null, price?: number | null, name: string, shortDescription?: string | null, slug: string, stock?: number | null, images?: Array<{ __typename?: 'FederateThisSkincre_Image', alt?: string | null, url: string } | null> | null } | null } | null } | { __typename: 'Routine', id: string, chapeau?: string | null, cta?: string | null, description?: string | null, title?: string | null, url?: string | null, image?: { __typename?: 'Asset', url: string } | null }> } | null };

export type PdpQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  stage?: Stage;
}>;


export type PdpQuery = { __typename?: 'Query', pdp?: { __typename: 'Pdp', id: string, slug?: string | null, title?: string | null, description?: string | null, ogImage?: { __typename?: 'Asset', url: string } | null, components: Array<{ __typename: 'ProductList', title?: string | null, relatedProductList?: { __typename?: 'RelatedProductList', relatedProductId?: string | null, relatedProducts?: { __typename?: 'FederateThisSkincre_related', products?: Array<{ __typename?: 'FederateThisSkincre_Product', description?: string | null, id: number, ingredients?: string | null, name: string, price?: number | null, shortDescription?: string | null, slug: string, stock?: number | null, images?: Array<{ __typename?: 'FederateThisSkincre_Image', alt?: string | null, url: string } | null> | null }> | null } | null } | null } | { __typename: 'Routine', id: string, chapeau?: string | null, cta?: string | null, description?: string | null, title?: string | null, url?: string | null, image?: { __typename?: 'Asset', url: string } | null } | { __typename: 'Tutorial', id: string, title?: string | null, image?: { __typename?: 'Asset', url: string } | null, items: Array<{ __typename: 'TutorialItem', text?: string | null }> }>, product?: { __typename?: 'FederateThisSkincre_Product', id: number, slug: string, name: string, price?: number | null, ingredients?: string | null, shortDescription?: string | null, description?: string | null, stock?: number | null, images?: Array<{ __typename?: 'FederateThisSkincre_Image', alt?: string | null, url: string } | null> | null } | null } | null };


export const PageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Page"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Stage"}}},"defaultValue":{"kind":"EnumValue","value":"PUBLISHED"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"ogImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Editorial"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Card"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cta"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cta"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"chapeau"}},{"kind":"Field","name":{"kind":"Name","value":"cta"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductHighlight"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"productFocus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cta"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"stock"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Routine"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"chapeau"}},{"kind":"Field","name":{"kind":"Name","value":"cta"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PageQuery, PageQueryVariables>;
export const PdpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Pdp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Stage"}}},"defaultValue":{"kind":"EnumValue","value":"PUBLISHED"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pdp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"ogImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tutorial"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Routine"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chapeau"}},{"kind":"Field","name":{"kind":"Name","value":"cta"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"relatedProductList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"relatedProductId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"stock"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"stock"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PdpQuery, PdpQueryVariables>;