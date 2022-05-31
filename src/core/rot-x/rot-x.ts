function rotx(text:string, base: number): string {
    return text.replace(/[a-zA-Z]/g, function (c: any): string {
        return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + base) ? c : c - 26);
    });
}

export { rotx };