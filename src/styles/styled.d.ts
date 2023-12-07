import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme{
        bg : string;
        txt : string;
        accent : string;
        hvrbg: string;

        boardbg : string;
        cardbg : string;
    }
}