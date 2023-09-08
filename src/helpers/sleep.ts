export default (ms:number): any => {
    return new Promise(resolve => setTimeout(resolve, ms));
}