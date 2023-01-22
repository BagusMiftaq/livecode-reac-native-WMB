export const passwordLength = (password) => {
    return (String(password).length>0&&String(password).length>=6)
};