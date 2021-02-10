import { initialState } from 'reducers/siteGroup';

export const selectSiteGroup = (state) => state.siteGroup || initialState;

export const selectName = (state) => selectSiteGroup(state).name;
export const selectLogo = (state) => selectSiteGroup(state).logo;
