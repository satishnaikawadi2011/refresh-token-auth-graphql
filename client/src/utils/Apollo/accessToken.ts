let accessToken:string = ""

export const setAccessToken = (s:string) => {
    accessToken = s
}

export const getAccessToken = () :string => {
    return accessToken;
} 