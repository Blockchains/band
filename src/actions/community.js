export const SAVE_COMMUNITY_INFO = 'SAVE_COMMUNITY_INFO'
export const SAVE_COMMUNITY_CLIENT = 'SAVE_COMMUNITY_CLIENT'

export const saveCommunityInfo = (
  name,
  symbol,
  address,
  organization,
  logo,
  banner,
  description,
  website,
  marketCap,
  price,
  last24Hrs,
  totalSupply,
  collateralEquation,
) => ({
  type: SAVE_COMMUNITY_INFO,
  name,
  symbol,
  address,
  organization,
  logo,
  banner,
  description,
  website,
  marketCap,
  price,
  last24Hrs,
  totalSupply,
  collateralEquation,
})

export const saveCommunityClient = (address, client) => ({
  type: SAVE_COMMUNITY_CLIENT,
  address,
  client,
})
