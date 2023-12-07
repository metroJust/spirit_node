import {DefaultTheme} from "styled-components";
import {pallets} from "./pallets";

export const light:DefaultTheme = {
    bg : pallets.white.base,
    txt : pallets.black.saints,
    accent : pallets.red.one,
    hvrbg : pallets.white.christmas,

    boardbg : pallets.white.saints,
    cardbg : pallets.white.pure,


};

export const dark:DefaultTheme = {
    bg : pallets.black.abaddon,
    txt : pallets.white.crowsilver,
    accent : pallets.blue.sora,
    hvrbg : pallets.gray.tolvishdeep,

    boardbg : pallets.blue.sora,
    cardbg : pallets.gray.leaderdeep,

};
